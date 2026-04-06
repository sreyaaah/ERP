import { useState, useRef, useEffect } from "react";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import CommonSelect from "../../components/select/common-select";
import { TaxService } from "../services/tax.service";
import { PurchaseService, type PurchaseData } from "../services/purchase.service";
import { ProductService, type Product } from "../services/product.service";

interface EditPurchaseProps {
    purchase: PurchaseData | null;
    onSuccess?: () => void;
}

interface PurchaseItem {
    productId: string;
    productName: string;
    quantity: number;
    rate: number;
    taxPercent: number;
    amount: number;
}

const EditPurchase = ({ purchase, onSuccess }: EditPurchaseProps) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [reference, setReference] = useState("");
  const [orderTax, setOrderTax] = useState("");
  const [discount, setDiscount] = useState("0");
  const [shipping, setShipping] = useState("0");
  const [grandTotal, setGrandTotal] = useState("0");
  const [paidAmount, setPaidAmount] = useState("0");
  const [taxes, setTaxes] = useState<any[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [items, setItems] = useState<PurchaseItem[]>([]);
  const [productSelect, setProductSelect] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleNumericChange = (setter: (val: string) => void, fieldName: string, value: string) => {
    const regex = /^[0-9]*\.?[0-9]*$/;
    if (regex.test(value)) {
      setter(value);
      setErrors(prev => ({ ...prev, [fieldName]: "" }));
    } else {
      setErrors(prev => ({ ...prev, [fieldName]: "Invalid input! Only numbers are allowed." }));
    }
  };

  // Initialize form with purchase data
  useEffect(() => {
    if (purchase) {
      setDate(purchase.date ? new Date(purchase.date) : new Date());
      setSelectedSupplier(purchase.supplierName || "");
      setSelectedStatus(purchase.status || "");
      setReference(purchase.reference || "");
      setOrderTax(purchase.orderTax?.toString() || "");
      setDiscount(purchase.discount?.toString() || "0");
      setShipping(purchase.shipping?.toString() || "0");
      setGrandTotal(purchase.grandTotal?.toString() || "0");
      setPaidAmount(purchase.paidAmount?.toString() || "0");
      setItems(purchase.items || []);
    }
  }, [purchase]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [taxRes, prodRes] = await Promise.all([
          TaxService.getAllTaxes(),
          ProductService.getAll({ limit: 100 })
        ]);

        if (taxRes.status && Array.isArray(taxRes.data)) {
          const options = taxRes.data
            .filter(t => t.status)
            .map(t => ({
              label: t.name,
              value: t.rate.toString()
            }));
          setTaxes([{ label: "Select Tax", value: "" }, ...options]);
        }

        if (prodRes.data) {
          setProducts(prodRes.data);
        }
      } catch (err) {
        console.error("Error fetching initial data:", err);
      }
    };
    fetchInitialData();
  }, []);

  const calculateTotals = (currentItems: PurchaseItem[], taxRate: string, disc: string, ship: string) => {
    const subtotal = currentItems.reduce((sum, item) => sum + item.amount, 0);
    const taxVal = Number(taxRate) || 0;
    const taxAmt = (subtotal * taxVal) / 100;
    const finalTotal = subtotal + taxAmt - (Number(disc) || 0) + (Number(ship) || 0);
    setGrandTotal(finalTotal.toFixed(2));
  };

  const handleAddProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (items.find(i => i.productId === productId)) {
        alert("Product already added!");
        return;
    }

    const newItem: PurchaseItem = {
        productId: product.id,
        productName: product.product,
        quantity: 1,
        rate: product.priceBeforeTax || 0,
        taxPercent: product.taxRate || 0,
        amount: product.priceBeforeTax || 0
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    calculateTotals(newItems, orderTax, discount, shipping);
  };

  const handleItemChange = (index: number, field: keyof PurchaseItem, value: any) => {
    const newItems = [...items];
    const item = { ...newItems[index], [field]: value };
    
    if (field === 'quantity' || field === 'rate') {
        item.amount = (Number(item.quantity) || 0) * (Number(item.rate) || 0);
    }
    
    newItems[index] = item;
    setItems(newItems);
    calculateTotals(newItems, orderTax, discount, shipping);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    calculateTotals(newItems, orderTax, discount, shipping);
  };

  const statusOptions = [
    { label: "Select", value: "" },
    { label: "Received", value: "received" },
    { label: "Pending", value: "pending" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSupplier || orderTax === "" || items.length === 0) {
        setErrors({ general: "Supplier, Tax, and at least one product are required." });
        return;
    }
    if (!purchase?._id) return;
    
    setLoading(true);
    try {
        const payload = {
            supplierName: selectedSupplier,
            date: date || new Date(),
            reference: reference,
            status: selectedStatus || "pending",
            orderTax: Number(orderTax) || 0,
            discount: Number(discount) || 0,
            shipping: Number(shipping) || 0,
            grandTotal: Number(grandTotal) || 0,
            paidAmount: Number(paidAmount) || 0,
            items
        };

        const res = await PurchaseService.updatePurchase(purchase._id, payload);
        if (res.status) {
            onSuccess?.();
            closeBtnRef.current?.click();
        }
    } catch (err: any) {
        console.error("Update purchase failed:", err);
        alert(err.message || "Failed to update purchase");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="modal fade" id="edit-purchase">
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "800px" }}>
        <div className="modal-content border-0">
          <div className="modal-header border-0 pb-0 pt-4 px-4">
            <h4 className="fw-bold modal-title" style={{ color: '#00263E' }}>Edit Purchase</h4>
             <button
                    ref={closeBtnRef}
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body pt-4 px-4">
              {errors.general && <div className="alert alert-danger p-2 fs-12">{errors.general}</div>}
              <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-medium mb-1">
                    Supplier Name <span className="text-danger">*</span>
                    </label>
                    <input 
                    type="text"
                    className="form-control"
                    value={selectedSupplier}
                    onChange={(e) => setSelectedSupplier(e.target.value)}
                    placeholder="Enter supplier name"
                    style={{ height: '40px', borderRadius: '8px' }}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label className="form-label fw-medium mb-1">Date</label>
                    <div className="calender-input">
                    <CommonDatePicker value={date} onChange={setDate} className="w-100" />
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <label className="form-label fw-medium mb-1">Reference</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="Enter reference number"
                    style={{ height: '40px', borderRadius: '8px' }}
                    />
                </div>

                <div className="col-md-4 mb-3">
                    <label className="form-label fw-medium mb-1">Status</label>
                    <CommonSelect
                    className="w-100"
                    options={statusOptions}
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.value)}
                    placeholder="Select status"
                    filter={false}
                    />
                </div>

                <div className="col-md-4 mb-3">
                    <label className="form-label fw-medium mb-1">Order Tax <span className="text-danger">*</span></label>
                    <CommonSelect
                    className="w-100"
                    options={taxes}
                    value={orderTax}
                    onChange={(e) => {
                        setOrderTax(e.value);
                        calculateTotals(items, e.value, discount, shipping);
                    }}
                    placeholder="Select Tax"
                    filter={false}
                    />
                </div>
              </div>

               <div className="border rounded p-3 mb-3 bg-light">
                    <label className="form-label fw-bold mb-2">Select Products</label>
                    <CommonSelect
                        className="w-100 mb-3"
                        options={products.map(p => ({ label: `${p.product} (SKU: ${p.sku})`, value: p.id }))}
                        value={productSelect}
                        onChange={(e) => {
                            setProductSelect(e.value);
                            handleAddProduct(e.value);
                            setTimeout(() => setProductSelect(""), 100);
                        }}
                        placeholder="Search and add products..."
                    />

                    <div className="table-responsive">
                        <table className="table table-sm table-bordered bg-white">
                            <thead className="table-secondary">
                                <tr>
                                    <th style={{ width: '40%' }}>Product</th>
                                    <th>Qty</th>
                                    <th>Rate</th>
                                    <th>Amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length === 0 && (
                                    <tr><td colSpan={5} className="text-center text-muted py-2 fs-12">No products added yet</td></tr>
                                )}
                                {items.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="fs-12 align-middle">{item.productName}</td>
                                        <td>
                                            <input 
                                                type="number" 
                                                className="form-control form-control-sm text-center" 
                                                value={item.quantity} 
                                                min={1}
                                                onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)} 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                type="number" 
                                                className="form-control form-control-sm text-end" 
                                                value={item.rate} 
                                                onChange={(e) => handleItemChange(idx, 'rate', e.target.value)} 
                                            />
                                        </td>
                                        <td className="fs-12 align-middle text-end">{item.amount.toFixed(2)}</td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-outline-danger btn-sm p-1" onClick={() => handleRemoveItem(idx)}>
                                                <i className="ti ti-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
               </div>

              <div className="row g-2">
                <div className="col-md-3">
                    <label className="form-label fw-medium mb-1">Discount</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={discount}
                      onChange={(e) => {
                          handleNumericChange(setDiscount, "discount", e.target.value);
                          calculateTotals(items, orderTax, e.target.value, shipping);
                      }}
                      style={{ height: '40px', borderRadius: '8px' }} 
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label fw-medium mb-1">Shipping</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={shipping}
                      onChange={(e) => {
                          handleNumericChange(setShipping, "shipping", e.target.value);
                          calculateTotals(items, orderTax, discount, e.target.value);
                      }}
                      style={{ height: '40px', borderRadius: '8px' }} 
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label fw-medium mb-1">Grand Total</label>
                    <input type="text" className="form-control bg-light fw-bold" value={grandTotal} readOnly />
                </div>
                <div className="col-md-3">
                    <label className="form-label fw-medium mb-1">Amt Paid</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={paidAmount}
                      onChange={(e) => handleNumericChange(setPaidAmount, "paidAmount", e.target.value)}
                      style={{ height: '40px', borderRadius: '8px' }} 
                    />
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 justify-content-end pb-4 pt-2 px-4">
                <button
                  type="button"
                  className="btn btn-dark me-3"
                  data-bs-dismiss="modal"
                  style={{ minWidth: '100px', borderRadius: '8px' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-orange-primary"
                  disabled={loading || items.length === 0}
                  style={{ minWidth: '140px', borderRadius: '8px', backgroundColor: '#FE9F43', color: 'white', border: 'none' }}
                >
                  {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : null}
                  Update Purchase
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPurchase;
