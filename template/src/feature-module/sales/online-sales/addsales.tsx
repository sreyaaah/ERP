import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { InvoiceService, type Invoice, type InvoiceItem } from "../../services/invoice.service";
import { CustomerService } from "../../services/customer.service";
import { ProductService } from "../../services/product.service";
import { all_routes } from "../../../routes/all_routes";
import CommonFooter from "../../../components/footer/commonFooter";
import { TaxService } from "../../services/tax.service";
import Swal from "sweetalert2";
interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface Product {
  id: string;
  name: string;
  rate: number;
  tax: number;
  hsnSac: string;
}

interface FormInvoiceItem {
  id: number;
  product: any;
  productName: string;
  productSearch: string;
  showProductDropdown: boolean;
  hsnSac: string;
  quantity: number;
  rate: number;
  tax: number;
  taxAmount: number;
  amount: number; // total row cost
  _inputRect?: any;
}

const AddSales = () => {
  const navigate = useNavigate();
  const route = all_routes;

  const customerDropdownRef = useRef<HTMLDivElement>(null);

  const [invoiceType] = useState<'interstate' | 'intrastate' | 'international' | ''>('intrastate');
  const [taxRates, setTaxRates] = useState<any[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<"Paid" | "Unpaid" | "Partially Paid" | "Overdue">("Unpaid");
  const [paidAmount, setPaidAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [terms, setTerms] = useState("Please pay within 30 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.");
  
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [customerSearchQuery, setCustomerSearchQuery] = useState("");
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  
  const [items, setItems] = useState<FormInvoiceItem[]>([
    {
      id: Date.now(),
      product: null,
      productName: "",
      productSearch: "",
      showProductDropdown: false,
      hsnSac: "",
      quantity: 1,
      rate: 0,
      tax: 18,
      taxAmount: 0,
      amount: 0,
    }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const currencySymbol = '₹';

  const getFilteredTaxRates = () => {
    const type = (invoiceType || "intrastate").toLowerCase();
    return taxRates.filter(r => {
      const taxType = (r.type || "").toUpperCase().trim();
      const label = (r.label || "").toUpperCase().trim();
      
      if (type === "interstate") {
        return taxType === "IGST" || taxType === "GST" || label.includes("IGST");
      }
      if (type === "intrastate") {
        return ["GST", "CGST", "SGST"].includes(taxType) || 
               (label.includes("GST") && !label.includes("IGST"));
      }
      if (type === "international") {
        return taxType === "VAT" || label.includes("VAT");
      }
      return true;
    });
  };

  useEffect(() => {
    const today = new Date();
    const due = new Date(today);
    due.setDate(due.getDate() + 30);
    setDueDate(due.toISOString().split('T')[0]);

    // Fetch next invoice number
    InvoiceService.generateInvoiceNumber("Sale").then(res => {
      if (res.status) setInvoiceNumber(res.invoiceNumber);
    });
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await CustomerService.getCustomers({ limit: 100, page: 1 });
        const formattedCustomers: Customer[] = (response.data || []).map((c: any) => ({
          id: c.id || c._id || `CUST-${Math.random()}`,
          name: c.customer || `${c.firstName} ${c.lastName}`.trim() || c.name || "",
          email: c.email || "",
          phone: c.phone || "",
        }));
        setCustomers(formattedCustomers);
      } catch (err) {
        console.error("Failed to fetch customers:", err);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getAll({ limit: 100 });
        const formattedProducts: Product[] = (response.data || []).map((p: any) => ({
          id: p._id || p.id || `PROD-${Math.random()}`,
          name: p.product || p.productName || "Unnamed Product",
          rate: p.priceBeforeTax || 0,
          tax: p.taxRate || 0,
          hsnSac: p.itemCode || "",
        }));
        setProducts(formattedProducts);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const loadTaxRates = async () => {
      try {
        const response = await TaxService.getAllTaxes();
        let rawData: any[] = [];
        if (Array.isArray(response)) rawData = response;
        else if (response && Array.isArray(response.data)) rawData = response.data;

        if (rawData.length > 0) {
          setTaxRates(rawData.map((t: any) => ({
            label: t.name || "",
            value: Number(t.rate || 0),
            type: t.type || ""
          })));
        }
      } catch (e) {
        console.error("Failed to load taxes:", e);
      }
    };
    loadTaxRates();
  }, []);




  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (customerDropdownRef.current && !customerDropdownRef.current.contains(target)) {
        setShowCustomerDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCustomerSelect = (customer: any) => {
    setSelectedCustomerId(customer.id);
    setCustomerName(customer.name);
    setCustomerEmail(customer.email || "");
    setCustomerPhone(customer.phone || "");
    setCustomerSearchQuery(customer.name);
    setShowCustomerDropdown(false);
  };

  const handleCustomerNameChange = (value: string) => {
    setCustomerName(value);
    setCustomerSearchQuery(value);
    
    // If we were using a selected customer and the name changes, 
    // we clear the ID and potentially the auto-filled fields if they want to enter a new one
    if (selectedCustomerId) {
      setSelectedCustomerId("");
      // Option: Clear other fields? Let's clear them so they can enter fresh data for new customer
      setCustomerEmail("");
      setCustomerPhone("");
    }
    
    setShowCustomerDropdown(value.length > 0);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(customerSearchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(customerSearchQuery.toLowerCase())
  );

  const getFilteredProducts = (search: string, index: number) => {
    const selectedProductIds = items
      .map((item, i) => i !== index ? (item.product?.id || item.product?.value) : null)
      .filter(Boolean);
    const selectedProductNames = items
      .map((item, i) => i !== index ? (item.product?.name || item.productName || item.productSearch) : null)
      .filter(Boolean);

    const filtered = products.filter(p => 
      !selectedProductIds.includes(p.id) && 
      !selectedProductNames.includes(p.name)
    );

    if (!search) return filtered.slice(0, 10);
    return filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  };

  const recalculateRow = (updatedRows: any[], index: number) => {
    const row = updatedRows[index];

    const qty = Number(row.quantity || 0);
    const rate = Number(row.rate || 0);
    const baseAmount = qty * rate;

    const taxPercent = Number(row.tax || 0);
    const taxAmount = (baseAmount * taxPercent) / 100;

    const totalAmount = baseAmount + taxAmount;

    updatedRows[index] = {
      ...row,
      taxAmount: Number(taxAmount.toFixed(2)),
      amount: Number(totalAmount.toFixed(2)),
    };

    setItems([...updatedRows]);
  };

  const onProductChange = (index: number, product: any) => {
    if (!product) return;

    const updated = [...items];
    updated[index] = {
      ...updated[index],
      product,
      productName: product.name,
      productSearch: product.name,
      showProductDropdown: false,
      rate: Number(product.rate || 0),
      tax: Number(product.tax || 18),
      hsnSac: product.hsnSac || "",
      quantity: updated[index].quantity || 1,
    };
    
    recalculateRow(updated, index);
  };

  const onInputChange = (index: number, field: string, value: any) => {
    if (!items[index]) return;

    const updated = [...items];
    updated[index] = {
      ...updated[index],
      [field]: value
    };

    recalculateRow(updated, index);
  };

  const addProductRow = () => {
    setItems(prev => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        product: null,
        productName: "",
        productSearch: "",
        showProductDropdown: false,
        hsnSac: "",
        quantity: 1,
        rate: 0,
        tax: 18,
        taxAmount: 0,
        amount: 0,
      },
    ]);
  };

  const removeItem = (id: number) => {
    setItems(prev => {
      if (prev.length > 1) {
        return prev.filter(item => item.id !== id);
      }
      return prev;
    });
  };

  useEffect(() => {
    let sub = 0;
    let tax = 0;
    
    items.forEach(item => {
      sub += (item.quantity * item.rate);
      tax += (item.taxAmount || 0);
    });

    setSubtotal(sub);
    setTotalTax(tax);
    setGrandTotal(sub + tax);
  }, [items]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Precise Validation
    if (!selectedCustomerId) {
      Swal.fire("Error", "Please select a customer", "error");
      return;
    }
    if (!invoiceType) {
      Swal.fire("Error", "Please select an Invoice Type (Intrastate/Interstate/International)", "error");
      return;
    }
    if (!dueDate) {
      Swal.fire("Error", "Please select a Due Date", "error");
      return;
    }
    
    // Check if items are valid
    if (items.length === 0 || (items.length === 1 && !items[0].productName && !items[0].productSearch)) {
      Swal.fire("Error", "Please add at least one product", "error");
      return;
    }

    if (items.some(item => (!item.productName && !item.productSearch) || item.quantity <= 0 || item.rate < 0)) {
      Swal.fire("Error", "Please fill in all product details correctly (Quantity > 0, Rate >= 0)", "error");
      return;
    }

    const invoiceItems: InvoiceItem[] = items.map(item => {
      return {
        productId: (item.product?.id || item.product?.value || "").toString().match(/^[0-9a-fA-F]{24}$/) ? (item.product?.id || item.product?.value) : undefined,
        productName: item.productName || item.productSearch || "Unnamed Product",
        quantity: Number(item.quantity),
        rate: Number(item.rate),
        discount: 0,
        taxPercent: Number(item.tax),
        hsnSac: item.hsnSac || "",
        amount: Number(item.amount.toFixed(2))
      };
    });

    const newInvoice: Partial<Invoice> = {
      type: "Sale",
      invoiceType: (invoiceType.charAt(0).toUpperCase() + invoiceType.slice(1)) as any,
      customerId: selectedCustomerId,
      customerName,
      customerEmail,
      customerPhone,
      invoiceDate: new Date().toISOString(),
      dueDate: new Date(dueDate).toISOString(),
      paymentStatus,
      items: invoiceItems,
      notes,
      terms,
      paidAmount: Number(paidAmount) || 0,
      subtotal: Number(subtotal.toFixed(2)),
      taxAmount: Number(totalTax.toFixed(2)),
      grandTotal: Number(grandTotal.toFixed(2))
    };

    console.log("Submitting Invoice Payload:", JSON.stringify(newInvoice, null, 2));

    try {
      const response = await InvoiceService.saveInvoice(newInvoice);
      if (response.status) {
        navigate(route.sales || "/sales");
      } else {
        Swal.fire("Error", response.message || "Failed to save invoice", "error");
      }
    } catch (err: any) {
      console.error("Save failed details:", err);
      const errMsg = err.response?.data?.message || err.message || "Server Error";
      Swal.fire("Server Error", errMsg, "error");
    }
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Add Sales</h4>
                  <h6>Create New Sales Record</h6>
                </div>
              </div>
              <div className="page-btn">
                <Link to={route.sales || "/sales"} className="btn btn-secondary me-2">
                  <i className="ti ti-arrow-left me-1"></i>Back to List
                </Link>
                <button type="submit" className="btn btn-primary">
                  <i className="ti ti-device-floppy me-1"></i>Save Sales
                </button>
              </div>
            </div>



            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Customer Information</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Customer Name <span className="text-danger">*</span></label>
    
                {/* FIXED: Added ref to customer dropdown container */}
                    <div className="position-relative" ref={customerDropdownRef}>
                      <input
                        type="text"
                        className="form-control"
                        value={customerName}
                        onChange={(e) => handleCustomerNameChange(e.target.value)}
                        onFocus={() => setShowCustomerDropdown(true)}
                        placeholder="Enter or select customer name"
                        autoComplete="off"
                        required
                    />
                     {showCustomerDropdown && (
                        <div className="position-absolute w-100 mt-1 bg-white border rounded shadow"
                            style={{ maxHeight: "250px", overflowY: "auto", zIndex: 9999 }}>
                            {filteredCustomers.length > 0 ? (
                            filteredCustomers.map(customer => (
                                <div
                                key={customer.id}
                                className="px-3 py-2"
                                onClick={() => handleCustomerSelect(customer)}
                                style={{ cursor: "pointer" }}
                                >
                                <strong>{customer.name}</strong>
                                <br />
                                <small className="text-muted">{customer.email}</small>
                                </div>
                            ))
                            ) : (
                            <div className="px-3 py-2 text-muted">
                                No customers found – typing new customer
                            </div>
                            )}
                        </div>
                        )}

                      {showCustomerDropdown && filteredCustomers.length === 0 && customerName.length > 0 && (
                        <div className="position-absolute w-100 mt-1 bg-white border rounded shadow p-2" style={{ zIndex: 9999 }}>
                          <small className="text-muted">No customers found - typing new customer</small>
                        </div>
                      )}
                    </div>
                    {selectedCustomerId && (
                      <small className="text-success">
                        <i className="ti ti-check-circle me-1"></i>Selected from existing customers (editable)
                      </small>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Email </label>
                    <input type="email" className="form-control" value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)} placeholder="Enter email address" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)} placeholder="Enter phone number" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Sales Details</h5>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Sale No</label>
                    <input type="text" className="form-control bg-light" value={invoiceNumber} readOnly placeholder="Auto-generated" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Invoice Date <span className="text-danger">*</span></label>
                    <input type="text" className="form-control bg-light" value={invoiceDate} readOnly />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Due Date <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)} required />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Payment Status</label>
                    <select className="form-select" value={paymentStatus}
                      onChange={(e) => setPaymentStatus(e.target.value as any)}>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Partially Paid">Partially Paid</option>
                      <option value="Paid">Paid</option>
                    </select>
                  </div>
                  {(paymentStatus === "Paid" || paymentStatus === "Partially Paid") && (
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Paid Amount</label>
                        <input type="number" className="form-control" value={paidAmount}
                          onChange={(e) => setPaidAmount(parseFloat(e.target.value) || 0)}
                          placeholder="0.00" step="0.01" min="0" max={grandTotal} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Sales Items</h5>
                <div className="table-responsive" style={{ overflow: "visible" }}>
                  <table className="table table-bordered mb-0">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: "30%" }}>Item</th>
                        <th style={{ width: "15%" }}>HSN/SSAC</th>
                        <th style={{ width: "10%", textAlign: "center" }}>Qty</th>
                        <th style={{ width: "15%", textAlign: "right" }}>Rate</th>
                        <th style={{ width: "15%" }}>Tax (%)</th>
                        <th style={{ width: "10%", textAlign: "right" }}>Total Amount</th>
                        <th style={{ width: "5%" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((row, index) => (
                        <tr key={index}>
                          <td>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control w-100"
                                placeholder="Search product..."
                                value={row.productSearch}
                                onChange={(e) => {
                                  const updated = [...items];
                                  updated[index] = {
                                    ...updated[index],
                                    productSearch: e.target.value,
                                    showProductDropdown: true,
                                  };
                                  if (!e.target.value) {
                                    updated[index].product = null;
                                  }
                                  setItems(updated);
                                }}
                                onFocus={(e) => {
                                  const updated = [...items];
                                  updated[index].showProductDropdown = true;
                                  updated[index]._inputRect = e.currentTarget.getBoundingClientRect();
                                  setItems(updated);
                                }}
                                onBlur={() => {
                                  setTimeout(() => {
                                    setItems(prev => {
                                      const updated = [...prev];
                                      if (updated[index]) {
                                        updated[index].showProductDropdown = false;
                                      }
                                      return updated;
                                    });
                                  }, 200);
                                }}
                              />
                              {row.showProductDropdown && (
                                <div 
                                  className="bg-white border rounded shadow-lg overflow-auto"
                                  style={{ 
                                    position: "fixed",
                                    top: row._inputRect ? row._inputRect.bottom + 2 : 0,
                                    left: row._inputRect ? row._inputRect.left : 0,
                                    width: row._inputRect ? row._inputRect.width : 200,
                                    zIndex: 9999, 
                                    maxHeight: "250px",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
                                  }}
                                >
                                  {getFilteredProducts(row.productSearch, index).length > 0 ? (
                                    getFilteredProducts(row.productSearch, index).map((product) => (
                                      <div
                                        key={product.id}
                                        className="px-2 py-2"
                                        style={{ cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={() => onProductChange(index, product)}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                                      >
                                        <div className="fw-semibold" style={{ fontSize: 13 }}>{product.name}</div>
                                        <small className="text-muted">
                                          Rate: ₹{product.rate.toFixed(2)} | HSN: {product.hsnSac} | Tax: {product.tax}%
                                        </small>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="px-2 py-2 text-muted" style={{ fontSize: 13 }}>No products found</div>
                                  )}
                                </div>
                              )}
                            </div>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={row.hsnSac}
                              onChange={(e) =>
                                onInputChange(index, "hsnSac", e.target.value)
                              }
                            />
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <input
                              type="number"
                              className="form-control text-center w-100"
                              min={1}
                              value={row.quantity}
                              onChange={(e) =>
                                onInputChange(index, "quantity", Number(e.target.value))
                              }
                            />
                          </td>
                          <td style={{ textAlign: "right" }}>
                            <input
                              type="number"
                              className="form-control text-end w-100"
                              value={row.rate}
                              onChange={(e) =>
                                onInputChange(index, "rate", Number(e.target.value))
                              }
                            />
                          </td>
                          <td>
                            <select
                              className="form-select"
                              value={row.tax}
                              onChange={(e) =>
                                onInputChange(index, "tax", Number(e.target.value))
                              }
                            >
                              <option value={0}>No Tax</option>
                              {getFilteredTaxRates().map((rate: any) => (
                                <option key={rate.label + rate.value} value={rate.value}>
                                  {rate.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td style={{ textAlign: "right" }}>
                            <input
                              type="number"
                              className="form-control text-end w-100 bg-light"
                              value={row.amount}
                              readOnly
                            />
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-sm text-danger"
                              onClick={() => removeItem(row.id)}
                              disabled={items.length === 1}
                            >
                               <i className="ti ti-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={7}>
                          <button
                            type="button"
                            className="btn btn-link text-primary p-0"
                            onClick={addProductRow}
                          >
                            <i className="ti ti-plus me-1"></i> Add Product
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Additional Information</h5>
                    <div className="mb-3">
                      <label className="form-label">Notes</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Enter any additional notes"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Terms & Conditions</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={terms}
                        onChange={(e) => setTerms(e.target.value)}
                        placeholder="Enter terms and conditions"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Sales Summary</h5>
                    <div style={{ minWidth: "250px" }}>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-medium">Subtotal</span>
                        <span>{currencySymbol}{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-medium">Total Tax</span>
                        <span>{currencySymbol}{totalTax.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2 h5 border-top pt-2">
                        <span className="fw-medium">Grand Total</span>
                        <span className="text-primary">{currencySymbol}{grandTotal.toFixed(2)}</span>
                      </div>

                      <div className="bg-light p-2 rounded mb-3">
                        <small className="text-muted d-block fw-bold mb-1">Amount in Words:</small>
                        <small className="text-dark fw-medium">
                          {InvoiceService.numberToWords(grandTotal, invoiceType)}
                        </small>
                      </div>

                      {(paymentStatus === "Paid" || paymentStatus === "Partially Paid") && (
                        <div className="border-top pt-2 mt-2">
                          <div className="d-flex justify-content-between mb-1">
                            <span className="fw-medium small">Paid Amount</span>
                            <span className="text-success small">{currencySymbol}{paidAmount.toFixed(2)}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="fw-medium small">Amount Due</span>
                            <span className="text-danger small">{currencySymbol}{(grandTotal - paidAmount).toFixed(2)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-end gap-2">
                  <Link to={route.sales || "/sales"} className="btn btn-secondary">Cancel</Link>
                  <button type="submit" className="btn btn-primary">
                    <i className="ti ti-device-floppy me-1"></i>Create Sale
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default AddSales;