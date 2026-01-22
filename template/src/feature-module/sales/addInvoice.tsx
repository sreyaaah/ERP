import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { InvoiceService, type Invoice, type InvoiceItem } from "../services/invoice.service";
import { all_routes } from "../../routes/all_routes";
import CommonFooter from "../../components/footer/commonFooter";
import { productlistdata } from "../inventory/productlist";
import CommonSelect from "../../components/select/common-select";
import { ALL_SELECTED_CURRENCIES } from "../settings/financialsettings/currencies";
import { INITIAL_TAX_RATES } from "../settings/financialsettings/taxrates";



interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}

interface Product {
  id: string;
  name: string;
  rate: number;
  tax: number;
}

interface FormInvoiceItem {
  id: number;
  productName: string;
  description: string;
  quantity: number;
  rate: number;
  discount: number;
  tax: number;
  amount: number;
  showDropdown?: boolean;
}

const AddInvoice = () => {
  const navigate = useNavigate();
  const route = all_routes;

  const customerDropdownRef = useRef<HTMLDivElement>(null);
  const productDropdownRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const [invoiceType, setInvoiceType] = useState<'interstate' | 'intrastate' | 'international' | ''>('');
  const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
  const [taxRates, setTaxRates] = useState<any[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerImage, setCustomerImage] = useState("user-01.jpg");
  const [invoiceDate] = useState(new Date().toLocaleDateString("en-GB"));
  const [dueDate, setDueDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<"Paid" | "Unpaid" | "Partially Paid">("Unpaid");
  const [paidAmount, setPaidAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [terms, setTerms] = useState("Please pay within 30 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.");
  
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [customerSearchQuery, setCustomerSearchQuery] = useState("");
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  
  const [items, setItems] = useState<FormInvoiceItem[]>([
    { id: 1, productName: "", description: "", quantity: 1, rate: 0, discount: 0, tax: 0, amount: 0, showDropdown: false }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const currencySymbol = invoiceType === 'international' ? '$' : '₹';

  const getFilteredTaxRates = () => {
    if (invoiceType === "intrastate") {
      return taxRates.filter((t: any) => ["GST", "CGST", "SGST"].includes(t.type));
    }
    if (invoiceType === "interstate") {
      return taxRates
        .filter((t: any) => t.type === "GST" || t.type === "IGST")
        .map((t: any) => ({
          ...t,
          name: t.name.includes("GST") ? t.name.replace("GST", "IGST") : t.name
        }));
    }
    if (invoiceType === "international") {
      return taxRates.filter((t: any) => t.type === "VAT");
    }
    return taxRates;
  };

  useEffect(() => {
    const today = new Date();
    const due = new Date(today);
    due.setDate(due.getDate() + 30);
    setDueDate(due.toLocaleDateString("en-GB"));
  }, []);

  useEffect(() => {
    if (invoiceType !== "international") {
      setSelectedCurrency(null);
    }
  }, [invoiceType]);

  useEffect(() => {
    const savedTaxRates = localStorage.getItem('taxRates');
    if (savedTaxRates) {
      setTaxRates(JSON.parse(savedTaxRates));
    } else {
      setTaxRates(INITIAL_TAX_RATES);
    }

    const handleStorageChange = () => {
      const updatedTaxRates = localStorage.getItem('taxRates');
      if (updatedTaxRates) {
        setTaxRates(JSON.parse(updatedTaxRates));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
  const storedCustomers = JSON.parse(localStorage.getItem("customers") || "[]");

  const formattedCustomers: Customer[] = storedCustomers.map((c: any) => ({
    id: c.id || c.code || `CUST-${Math.random()}`,
    name: c.customer || c.name || c.customerName || "",
    email: c.email || "",
    phone: c.phone || "",
    address: c.address || "",
    image: c.avatar || c.image || "user-01.jpg",
  }));

  const invoices = InvoiceService.getAllInvoices();
  invoices.forEach(inv => {
    if (!formattedCustomers.find(c => c.id === inv.customerId)) {
      formattedCustomers.push({
        id: inv.customerId,
        name: inv.customerName,
        email: inv.customerEmail || "",
        phone: inv.customerPhone || "",
        address: inv.customerAddress || "",
        image: inv.customerImage || "user-01.jpg",
      });
    }
  });

  setCustomers(formattedCustomers);
}, []);

useEffect(() => {
  try {
    const storedProducts =
      JSON.parse(localStorage.getItem("products") || "[]") ||
      JSON.parse(localStorage.getItem("productList") || "[]") ||
      [];

    const staticProducts: Product[] = productlistdata.map((p: any) => ({
      id: p.sku || p.id,
      name: p.product,
      rate: Number(
        typeof p.price === "string"
          ? p.price.replace(/[^0-9.]/g, "")
          : p.price || 0
      ),
      tax: Number(p.tax || 0),
    }));

    const dynamicProducts: Product[] = storedProducts.map((p: any) => ({
      id: p.id || p.sku || `LS-${Math.random()}`,
      name:
        p.productName ||
        p.product ||
        p.name ||
        "Unnamed Product",
      rate: Number(
        typeof p.price === "string"
          ? p.price.replace(/[^0-9.]/g, "")
          : p.price ||
            p.selling_price ||
            p.priceAfterTax ||
            p.priceBeforeTax ||
            0
      ),
      tax: Number(p.taxRate || p.tax || 0),
    }));

    setProducts([...staticProducts, ...dynamicProducts]);
  } catch (err) {
    console.error("Product load error", err);
  }
}, []);




  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (customerDropdownRef.current && !customerDropdownRef.current.contains(target)) {
        setShowCustomerDropdown(false);
      }

      let clickedInsideAnyProductDropdown = false;
      productDropdownRefs.current.forEach((ref) => {
        if (ref && ref.contains(target)) {
          clickedInsideAnyProductDropdown = true;
        }
      });
      
      if (!clickedInsideAnyProductDropdown) {
        setItems(prev => prev.map(item => ({ ...item, showDropdown: false })));
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomerId(customer.id);
    setCustomerName(customer.name);
    setCustomerEmail(customer.email);
    setCustomerPhone(customer.phone);
    setCustomerAddress(customer.address);
    setCustomerImage(customer.image);
    setCustomerSearchQuery(customer.name);
    setShowCustomerDropdown(false);
  };

  const handleCustomerNameChange = (value: string) => {
    setCustomerName(value);
    setCustomerSearchQuery(value);
    if (selectedCustomerId) setSelectedCustomerId("");
    setShowCustomerDropdown(value.length > 0);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(customerSearchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(customerSearchQuery.toLowerCase())
  );

  const getFilteredProducts = (search: string) => {
    if (!search) return products.slice(0, 10);
    return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  };

  const calculateItemAmount = (item: FormInvoiceItem) => {
    const baseAmount = item.quantity * item.rate;
    const discountAmount = item.discount;
    const amountAfterDiscount = baseAmount - discountAmount;
    const taxAmount = (amountAfterDiscount * item.tax) / 100;
    return amountAfterDiscount + taxAmount;
  };

  const updateItem = (id: number, field: keyof FormInvoiceItem, value: any) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        updatedItem.amount = calculateItemAmount(updatedItem);
        return updatedItem;
      }
      return item;
    }));
  };

  const selectProduct = (itemId: number, product: Product) => {
    setItems(prev =>
      prev.map(item =>
        item.id === itemId
          ? {
              ...item,
              productName: product.name,
              rate: product.rate,
              tax: product.tax,
              amount: calculateItemAmount({ ...item, rate: product.rate, tax: product.tax }),
              showDropdown: false,
            }
          : item
      )
    );
  };

  const addItem = () => {
    const newItem: FormInvoiceItem = {
      id: Date.now(),
      productName: "",
      description: "",
      quantity: 1,
      rate: 0,
      discount: 0,
      tax: 0,
      amount: 0,
      showDropdown: false
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  useEffect(() => {
    let sub = 0;
    let tax = 0;
    let discount = 0;
    items.forEach(item => {
      const baseAmount = item.quantity * item.rate;
      const discountAmount = item.discount;
      const amountAfterDiscount = baseAmount - discountAmount;
      const taxAmount = (amountAfterDiscount * item.tax) / 100;
      sub += amountAfterDiscount;
      tax += taxAmount;
      discount += discountAmount;
    });
    setSubtotal(sub);
    setTotalTax(tax);
    setTotalDiscount(discount);
    setGrandTotal(sub + tax);
  }, [items]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invoiceType) {
      return;
    }
    if (!customerName || !customerEmail || !dueDate) {
      return;
    }
    if (items.some(item => !item.productName || item.quantity <= 0 || item.rate <= 0)) {
      return;
    }

    const invoiceItems: InvoiceItem[] = items.map(item => {
      const baseAmount = item.quantity * item.rate;
      const taxAmount = ((baseAmount - item.discount) * item.tax) / 100;
      return {
        productId: `P${item.id}`,
        productName: item.productName,
        productImage: 'product-01.jpg',
        qty: item.quantity,
        rate: item.rate,
        discount: item.discount,
        tax: item.tax,
        taxAmount: taxAmount,
        unitCost: item.rate,
        total: item.amount
      };
    });

    const newInvoice: Invoice = {
      id: Date.now(),
      invoiceNumber: InvoiceService.generateInvoiceNumber(),
      invoiceDate,
      dueDate,
      customerId: selectedCustomerId || `CUST${Date.now()}`,
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      customerImage: customerImage,
      invoiceType,
      currency: selectedCurrency || undefined,
      items: invoiceItems,
      subTotal: subtotal,
      totalTax: totalTax,
      grandTotal: grandTotal,
      paidAmount,
      amountInWords: InvoiceService.numberToWords(grandTotal, invoiceType),
      paymentStatus,
      notes,
      termsAndConditions: terms,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    InvoiceService.saveInvoice(newInvoice);
    navigate(route.invoicelist || "/sales/invoice-list");
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Add Invoice</h4>
                  <h6>Create New Invoice</h6>
                </div>
              </div>
              <div className="page-btn">
                <Link to={route.invoicelist || "/sales/invoice-list"} className="btn btn-secondary me-2">
                  <i className="ti ti-arrow-left me-1"></i>Back to List
                </Link>
                <button type="submit" className="btn btn-primary">
                  <i className="ti ti-device-floppy me-1"></i>Save Invoice
                </button>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Invoice Type <span className="text-danger">*</span></h5>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="invoiceType" id="intrastate"
                        checked={invoiceType === 'intrastate'} onChange={() => setInvoiceType('intrastate')} />
                      <label className="form-check-label" htmlFor="intrastate">
                        Intrastate Invoice (Within State - INR ₹)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="invoiceType" id="interstate"
                        checked={invoiceType === 'interstate'} onChange={() => setInvoiceType('interstate')} />
                      <label className="form-check-label" htmlFor="interstate">
                        Interstate Invoice (Between States - INR ₹)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="invoiceType" id="international"
                        checked={invoiceType === 'international'} onChange={() => setInvoiceType('international')} />
                      <label className="form-check-label" htmlFor="international">
                        International Invoice
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {invoiceType === "international" && (
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Currency</label>
                        <CommonSelect
                          className="select"
                          value={selectedCurrency}
                          options={ALL_SELECTED_CURRENCIES.map((c) => ({
                            label: `${c.name} (${c.symbol})`,
                            value: c.code,
                          }))}
                          onChange={(e: any) => setSelectedCurrency(e.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                        onFocus={() => setShowCustomerDropdown(customerName.length > 0)}
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
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)} placeholder="Enter email address" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)} placeholder="Enter phone number" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)} placeholder="Enter customer address" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Invoice Details</h5>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Invoice Date <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={invoiceDate} readOnly />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Due Date <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)} placeholder="DD/MM/YYYY" required />
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
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="card-title mb-0">Invoice Items</h5>
                  <button type="button" className="btn btn-sm btn-primary" onClick={addItem}>
                    <i className="ti ti-plus me-1"></i>Add Item
                  </button>
                </div>

                <div className="table-responsive"  style={{ overflow: "visible" }}>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th style={{ width: "20%" }}>Product/Service</th>
                        <th style={{ width: "25%" }}>Description</th>
                        <th style={{ width: "8%" }}>Qty</th>
                        <th style={{ width: "12%" }}>Rate ({currencySymbol})</th>
                        <th style={{ width: "12%" }}>Discount ({currencySymbol})</th>
                        <th style={{ width: "10%" }}>Tax %</th>
                        <th style={{ width: "10%" }}>Amount</th>
                        <th style={{ width: "3%" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          {/* FIXED: Added ref to product dropdown container */}
                          <td className="position-relative">
                            <div
                              ref={(el) => {
                                if (el) {
                                  productDropdownRefs.current.set(item.id, el);
                                } else {
                                  productDropdownRefs.current.delete(item.id);
                                }
                              }}
                            >
                              <input type="text" className="form-control form-control-sm" value={item.productName}
                                onChange={(e) => {
                                  updateItem(item.id, "productName", e.target.value);
                                  setItems(prev => prev.map(i => i.id === item.id ? { ...i, showDropdown: true } : i));
                                }}
                                onFocus={() => setItems(prev => prev.map(i => i.id === item.id ? { ...i, showDropdown: true } : i))}
                                placeholder="Search or type product" autoComplete="off" required />
                                {item.showDropdown && (
                                  <div className="position-absolute w-100 bg-white border rounded shadow"
                                      style={{ maxHeight: 200, overflowY: "auto", zIndex: 1000 }}>
                                    {getFilteredProducts(item.productName).length > 0 ? (
                                      getFilteredProducts(item.productName).map(prod => (
                                        <div
                                          key={prod.id}
                                          className="px-2 py-2"
                                          onClick={() => selectProduct(item.id, prod)}
                                          style={{ cursor: "pointer" }}
                                        >
                                          <strong>{prod.name}</strong><br />
                                          <small className="text-muted">
                                            {currencySymbol}{prod.rate.toFixed(2)} | Tax {prod.tax}%
                                          </small>
                                        </div>
                                      ))
                                    ) : (
                                      <div className="px-2 py-2 text-muted">
                                        No products found – typing new product
                                      </div>
                                    )}
                                  </div>
                                )}
                            </div>
                          </td>
                            <td>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                value={item.description}
                                onChange={(e) =>
                                  updateItem(item.id, "description", e.target.value)
                                }
                                placeholder="Description"
                              />
                            </td>

                            <td>
                              <input
                                type="number"
                                className="form-control form-control-sm"
                                value={item.quantity === 0 ? "" : item.quantity}
                                onChange={(e) =>
                                  updateItem(
                                    item.id,
                                    "quantity",
                                    e.target.value === "" ? 0 : parseInt(e.target.value)
                                  )
                                }
                                min="1"
                                placeholder="Qty"
                                required
                              />
                            </td>

                            <td>
                              <input
                                type="number"
                                className="form-control form-control-sm"
                                value={item.rate === 0 ? "" : item.rate}
                                onChange={(e) =>
                                  updateItem(
                                    item.id,
                                    "rate",
                                    e.target.value === "" ? 0 : parseFloat(e.target.value)
                                  )
                                }
                                step="0.01"
                                min="0"
                                placeholder="Rate"
                                required
                              />
                            </td>

                            <td>
                              <input
                                type="number"
                                className="form-control form-control-sm"
                                value={item.discount === 0 ? "" : item.discount}
                                onChange={(e) =>
                                  updateItem(
                                    item.id,
                                    "discount",
                                    e.target.value === "" ? 0 : parseFloat(e.target.value)
                                  )
                                }
                                step="0.01"
                                min="0"
                                placeholder="Discount"
                              />
                            </td>
                            <td>
                              <CommonSelect
                                className="select"
                                value={item.tax}
                                options={[
                                  { label: "No Tax", value: 0 },
                                  ...getFilteredTaxRates().map((t: any) => ({
                                    label: t.name,
                                    value: t.rate,
                                  })),
                                ]}
                                onChange={(e: any) =>
                                  updateItem(item.id, "tax", e.value)
                                }
                              />
                            </td>

                            <td>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                value={item.amount.toFixed(2)}
                                readOnly
                              />
                            </td>
                            <td>
                            <button type="button" className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}
                              disabled={items.length === 1} title="Remove item">
                              <i className="ti ti-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
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
                      <textarea className="form-control" rows={3} value={notes}
                        onChange={(e) => setNotes(e.target.value)} placeholder="Enter any additional notes"></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Terms & Conditions</label>
                      <textarea className="form-control" rows={3} value={terms}
                        onChange={(e) => setTerms(e.target.value)} placeholder="Enter terms and conditions"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Invoice Summary</h5>
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td className="fw-medium">Subtotal:</td>
                          <td className="text-end">{currencySymbol}{subtotal.toFixed(2)}</td>
                        </tr>
                        {totalDiscount > 0 && (
                          <tr>
                            <td className="fw-medium">Total Discount:</td>
                            <td className="text-end">{currencySymbol}{totalDiscount.toFixed(2)}</td>
                          </tr>
                        )}
                        <tr>
                          <td className="fw-medium">Tax ({invoiceType === 'intrastate' ? 'GST/CGST/SGST' : invoiceType === 'interstate' ? 'IGST' : 'VAT'}):</td>
                          <td className="text-end">{currencySymbol}{totalTax.toFixed(2)}</td>
                        </tr>
                        <tr className="border-top">
                          <td className="fw-bold">Grand Total:</td>
                          <td className="text-end fw-bold text-primary">{currencySymbol}{grandTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="text-muted small">
                            <strong>Amount in Words:</strong><br />
                            {InvoiceService.numberToWords(grandTotal, invoiceType)}
                          </td>
                        </tr>
                        {(paymentStatus === "Paid" || paymentStatus === "Partially Paid") && (
                          <>
                            <tr>
                              <td className="fw-medium">Paid Amount:</td>
                              <td className="text-end text-success">{currencySymbol}{paidAmount.toFixed(2)}</td>
                            </tr>
                            <tr>
                              <td className="fw-medium">Amount Due:</td>
                              <td className="text-end text-danger">{currencySymbol}{(grandTotal - paidAmount).toFixed(2)}</td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-end gap-2">
                  <Link to={route.invoicelist || "/sales/invoice-list"} className="btn btn-secondary">Cancel</Link>
                  <button type="submit" className="btn btn-primary">
                    <i className="ti ti-device-floppy me-1"></i>Create Invoice
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

export default AddInvoice;