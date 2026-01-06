import { useState, useEffect } from "react";
import CommonSelect from "../../../components/select/common-select";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";
import { CustomerService } from "../../../feature-module/services/customer.service";
import { productlistdata } from "../../../feature-module/inventory/productlist";
import { InvoiceService } from "../../../feature-module/services/invoice.service";
import { customersData } from "../../json/customers-data";

interface EditInvoiceProps {
  invoice: any;
  onUpdate: () => void;
}

const EditInvoice = ({ invoice, onUpdate }: EditInvoiceProps) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<any>(null);
  const [invoiceNumber, setInvoiceNumber] = useState<string>("");
  const [referenceNo, setReferenceNo] = useState("");
  const [customers, setCustomers] = useState<any[]>([]);
  const [productOptions, setProductOptions] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [customerSearch, setCustomerSearch] = useState("");
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);

  // Load customers
  useEffect(() => {
    const storedCustomers = CustomerService.getAll();
    const mergedCustomers = [...customersData, ...storedCustomers];
    const formatted = mergedCustomers.map((c: any) => ({
      label: c.customer,
      value: c.code,
      ...c
    }));

    const uniqueCustomers = Array.from(new Map(formatted.map(item => [item.value, item])).values());
    setCustomers(uniqueCustomers);
  }, []);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    const staticProducts = productlistdata.map((p: any) => ({
      label: p.product,
      value: p.sku,
      rate: Number(p.price.replace(/[^0-9.]/g, '')),
      tax: 0,
      ...p
    }));

    const dynamicProducts = storedProducts.map((p: any) => ({
      label: p.productName || p.name,
      value: p.sku || p.id,
      rate: Number(p.price || p.priceBeforeTax || p.priceAfterTax || 0),
      tax: Number(p.taxRate || 0),
      ...p,
    }));

    setProductOptions([...staticProducts, ...dynamicProducts]);
  }, []);

  useEffect(() => {
    if (!invoice) return;

    const parseDate = (dateStr: any) => {
      if (!dateStr) return new Date();
      if (dateStr instanceof Date) return dateStr;
      if (typeof dateStr === 'string' && dateStr.includes('/')) {
          const parts = dateStr.split('/');
          if (parts.length === 3) {
            return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
          }
      }
      return new Date(dateStr);
    };

    setInvoiceNumber(invoice.invoiceNumber || "");
    setReferenceNo(invoice.referenceNo || "");
    setDate(parseDate(invoice.createdDate || invoice.createdAt));
    setDueDate(parseDate(invoice.dueDate));

    if (invoice.customerName) {
      setCustomerSearch(invoice.customerName);
      setSelectedCustomer({ 
          label: invoice.customerName, 
          value: invoice.customerId || invoice.customerName, 
          customer: invoice.customerName,
          image: invoice.customerImage 
      });
    }

    setSelectedStatus(invoice.paymentStatus);

    if (invoice.items && invoice.items.length > 0) {
      const loadedRows = invoice.items.map((item: any) => ({
        product: { label: item.productName, value: item.productId }, 
        productSearch: item.productName,
        showProductDropdown: false,
        qty: Number(item.qty),
        rate: Number(item.rate),
        discount: Number(item.discount),
        tax: Number(item.tax),
        isTaxFromProduct: false,
        taxAmount: Number(item.taxAmount),
        unitCost: Number(item.unitCost || item.rate),
        total: Number(item.total)
      }));
      setRows(loadedRows);
      calculateSummary(loadedRows);
    } else {
 
         setRows([{
            product: null,
            productSearch: "",
            showProductDropdown: false,
            qty: 1,
            rate: 0,
            discount: 0,
            tax: 0,
            isTaxFromProduct: false,
            taxAmount: 0,
            unitCost: 0,
            total: 0,
          }]);
    }

  }, [invoice]);

  const Status = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Unpaid', value: 'Unpaid' },
    { label: 'Overdue', value: 'Overdue' },
    { label: 'Partially Paid', value: 'Partially Paid' },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.label.toLowerCase().includes(customerSearch.toLowerCase())
  );

  const getFilteredProducts = (index: number) => {
    const searchTerm = rows[index]?.productSearch || "";
    return productOptions.filter(product =>
      product.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const calculateSummary = (rowsData: any[]) => {
    let sub = 0;
    let tax = 0;

    rowsData.forEach((row) => {
      const qty = Number(row.qty || 0);
      const rate = Number(row.rate || 0);
      const discount = Number(row.discount || 0);
      const baseAmount = qty * rate - discount;

      sub += baseAmount;
      tax += Number(row.taxAmount || 0);
    });

    setSubTotal(Number(sub.toFixed(2)));
    setTotalTax(Number(tax.toFixed(2)));
    setGrandTotal(Number((sub + tax).toFixed(2)));
  };

  const recalculateRow = (updatedRows: any[], index: number) => {
    const row = updatedRows[index];
    const qty = Number(row.qty || 0);
    const rate = Number(row.rate || 0);
    const discount = Number(row.discount || 0);
    const baseAmount = qty * rate - discount;
    const taxPercent = Number(row.tax || 0);
    const taxAmount = (baseAmount * taxPercent) / 100;
    const total = baseAmount + taxAmount;

    updatedRows[index] = {
      ...row,
      taxAmount: Number(taxAmount.toFixed(2)),
      total: Number(total.toFixed(2)),
    };

    setRows([...updatedRows]);
    calculateSummary(updatedRows);
  };

  const onProductChange = (index: number, product: any) => {
      if (!product) return;
    
      const productTax = product.tax || 0;
    
      const updated = [...rows];
    
      updated[index] = {
        ...updated[index],
        product,
        productSearch: product.label,
        showProductDropdown: false,
        rate: Number(product.rate || 0),
        tax: productTax,              
        isTaxFromProduct: !!product.tax, 
        qty: updated[index].qty || 1,
        discount: updated[index].discount || 0,
      };
    
      recalculateRow(updated, index);
  };

  const onInputChange = (index: number, field: string, value: number) => {
      const updated = [...rows];
      updated[index] = { ...updated[index], [field]: value };
      recalculateRow(updated, index);
  };

  const addProductRow = () => {
    setRows([
      ...rows,
      {
        product: null,
        productSearch: "",
        showProductDropdown: false,
        qty: 1,
        rate: 0,
        discount: 0,
        tax: 0,
        isTaxFromProduct: false,
        taxAmount: 0,
        unitCost: 0,
        total: 0,
      },
    ]);
  };

  const handleUpdate = () => {
      if (!selectedCustomer) {
          alert("Customer is required");
          return;
      }

      const updatedInvoice = {
          ...invoice,
          invoiceNumber: invoiceNumber,
          referenceNo: referenceNo, 
          customerName: selectedCustomer.label || selectedCustomer.customer,
          customerImage: selectedCustomer.image || invoice.customerImage,
          createdDate: date,
          dueDate: dueDate,
          paymentStatus: selectedStatus,
          grandTotal: grandTotal,
          amountDue: grandTotal,
          items: rows.map(r => ({
              productId: r.product?.value || r.product?.id || "GENERIC",
              productName: r.productSearch,
              qty: r.qty,
              rate: r.rate,
              discount: r.discount,
              tax: r.tax,
              taxAmount: r.taxAmount,
              total: r.total
          }))
      };

      InvoiceService.updateInvoice(updatedInvoice);
      if (onUpdate) onUpdate();
      
      const closeBtn = document.querySelector('#edit-invoice .close') as HTMLElement;
      if (closeBtn) closeBtn.click();
  };

  return (
    <div className="modal fade" id="edit-invoice">
      <div className="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="page-title">
              <h4>Edit Invoice</h4>
            </div>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3">
                        <label className="form-label">Customer Name</label>
                        <div className="position-relative">
                             <input
                                type="text"
                                className="form-control"
                                placeholder="Search customer..."
                                value={customerSearch}
                                onChange={(e) => {
                                  setCustomerSearch(e.target.value);
                                  setShowCustomerDropdown(true);
                                  if (!e.target.value) setSelectedCustomer(null);
                                }}
                                onFocus={() => setShowCustomerDropdown(true)}
                              />
                               {showCustomerDropdown && (
                                <div className="absolute z-50 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-y-auto" style={{zIndex: 1060}}>
                                  {filteredCustomers.length > 0 ? (
                                    filteredCustomers.map((customer) => (
                                      <div
                                        key={customer.value}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                          setSelectedCustomer(customer);
                                          setCustomerSearch(customer.label);
                                          setShowCustomerDropdown(false);
                                        }}
                                      >
                                        {customer.label}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="px-3 py-2 text-gray-500">No customers found</div>
                                  )}
                                </div>
                              )}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <CommonDatePicker value={date} onChange={setDate} className="w-100" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3">
                        <label className="form-label">Due Date</label>
                        <CommonDatePicker value={dueDate} onChange={setDueDate} className="w-100" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3">
                        <label className="form-label">Invoice No</label>
                        <input
                            type="text"
                            className="form-control"
                            value={invoiceNumber}
                            onChange={(e) => setInvoiceNumber(e.target.value)}
                        />
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6 col-sm-12">
                     <div className="mb-3">
                         <label className="form-label">Reference No</label>
                         <input
                             type="text"
                             className="form-control"
                             value={referenceNo}
                             onChange={(e) => setReferenceNo(e.target.value)}
                         />
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <CommonSelect
                            options={Status}
                            value={selectedStatus}
                            onChange={(e: any) => setSelectedStatus(e.value)}
                            className="w-100"
                        />
                    </div>
                </div>
            </div>
            
            <div className="row mt-3">
                 <div className="col-lg-12">
                      <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Qty</th>
                                        <th>Rate</th>
                                        <th>Discount</th>
                                        <th>Tax (%)</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index}>
                                            <td style={{minWidth: '200px'}}>
                                                 <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={row.productSearch}
                                                        onChange={(e) => {
                                                            const updated = [...rows];
                                                            updated[index].productSearch = e.target.value;
                                                            updated[index].showProductDropdown = true;
                                                            setRows(updated);
                                                        }}
                                                        onFocus={() => {
                                                             const updated = [...rows];
                                                             updated[index].showProductDropdown = true;
                                                             setRows(updated);
                                                        }}
                                                    />
                                                     {row.showProductDropdown && row.productSearch && (
                                                        <div className="position-absolute w-100 mt-1 bg-white border rounded shadow-lg" style={{zIndex: 1050, maxHeight: '150px', overflowY: 'auto'}}>
                                                            {getFilteredProducts(index).map(p => (
                                                                <div 
                                                                    key={p.value} 
                                                                    className="p-2 cursor-pointer hover:bg-light"
                                                                    onClick={() => onProductChange(index, p)}
                                                                >
                                                                    {p.label}
                                                                </div>
                                                            ))}
                                                        </div>
                                                     )}
                                                 </div>
                                            </td>
                                            <td>
                                                <input type="number" className="form-control" value={row.qty} onChange={(e) => onInputChange(index, 'qty', Number(e.target.value))} />
                                            </td>
                                            <td>
                                                <input type="number" className="form-control" value={row.rate} onChange={(e) => onInputChange(index, 'rate', Number(e.target.value))} />
                                            </td>
                                             <td>
                                                <input type="number" className="form-control" value={row.discount} onChange={(e) => onInputChange(index, 'discount', Number(e.target.value))} />
                                            </td>
                                             <td>
                                                <input type="number" className="form-control" value={row.tax} onChange={(e) => onInputChange(index, 'tax', Number(e.target.value))} />
                                            </td>
                                            <td>{row.total}</td>
                                            <td>
                                                <button type="button" className="btn btn-sm btn-danger" onClick={() => {
                                                    setRows(rows.filter((_, i) => i !== index));
                                                    calculateSummary(rows.filter((_, i) => i !== index));
                                                }}>
                                                    <i className="feather icon-trash-2"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                             <button type="button" className="btn btn-primary mt-2" onClick={addProductRow}>+ Add Item</button>
                      </div>
                 </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-6 offset-lg-6">
                    <div className="total-order">
                        <ul>
                            <li>
                                <h4>Sub Total</h4>
                                <h5>$ {subTotal}</h5>
                            </li>
                             <li>
                                <h4>Tax</h4>
                                <h5>$ {totalTax}</h5>
                            </li>
                             <li className="total">
                                <h4>Grand Total</h4>
                                <h5>$ {grandTotal}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInvoice;
