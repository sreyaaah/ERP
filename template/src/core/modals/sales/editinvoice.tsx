import { useState, useEffect, useRef } from "react";
import CommonSelect from "../../../components/select/common-select";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";


import { InvoiceService } from "../../../feature-module/services/invoice.service";
import { CustomerService } from "../../../feature-module/services/customer.service";
import { ProductService } from "../../../feature-module/services/product.service";
import { TaxService } from "../../../feature-module/services/tax.service";
import Swal from "sweetalert2";

interface Customer {
  id: string;
  name?: string;
  label: string;
  value: string;
  email: string;
  phone: string;
  address: string;
  billingAddress?: string;
  gstin?: string;
  image?: string;
}

interface Product {
  id: string;
  name?: string;
  label: string;
  value: string;
  rate: number;
  tax: number;
  hsnSac?: string;
}

interface EditInvoiceProps {
  invoice: any;
  onUpdate: () => void;
}

const EditInvoice = ({ invoice, onUpdate }: EditInvoiceProps) => {
  const customerDropdownRef = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [invoiceType, setInvoiceType] = useState<'interstate' | 'intrastate' | 'international' | ''>('');
  const [taxRates, setTaxRates] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<any>(null);
  const [paidAmount, setPaidAmount] = useState(0);
  const [invoiceNumber, setInvoiceNumber] = useState<string>("");
  const [referenceNo, setReferenceNo] = useState("");
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [productOptions, setProductOptions] = useState<Product[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [customerSearch, setCustomerSearch] = useState("");
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerGstin, setCustomerGstin] = useState("");
  
  const currencySymbol = invoiceType === 'international' ? '$' : '₹';

  // Load customers from API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await CustomerService.getCustomers({ limit: 100, page: 1 });
        const formatted = (response.data || []).map((c: any) => ({
          id: c.id || c._id,
          label: c.customer || `${c.firstName} ${c.lastName}`.trim(),
          value: c.id || c._id,
          email: c.email || "",
          phone: c.phone || "",
          address: c.address || "",
          gstin: c.gstin || "",
          ...c
        }));
        setCustomers(formatted);
      } catch (err) {
        console.error("Failed to fetch customers:", err);
      }
    };
    fetchCustomers();
  }, []);

  // Load products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getAll({ limit: 100 });
        const formatted = (response.data || []).map((p: any) => ({
          label: p.product || p.productName || "Unnamed Product",
          value: p._id || p.id,
          id: p._id || p.id,
          rate: Number(p.priceBeforeTax || 0),
          tax: Number(p.taxRate || 0),
          hsnSac: p.itemCode || "",
          ...p
        }));
        setProductOptions(formatted);
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
        
        if (Array.isArray(response)) {
          rawData = response;
        } else if (response && Array.isArray(response.data)) {
          rawData = response.data;
        }

        if (rawData.length > 0) {
          setTaxRates(rawData.map((t: any) => ({
            label: t.name || "",
            value: Number(t.rate || 0),
            type: t.type || ""
          })));
        } else {
          setTaxRates([]);
        }
      } catch (e) {
        console.error("Failed to load taxes:", e);
        setTaxRates([]);
      }
    };
    loadTaxRates();
  }, []);

  const onInputChange = (index: number, field: string, value: any) => {
      const updated = [...rows];
      updated[index] = { ...updated[index], [field]: value };
      recalculateRow(updated, index);
  };

  useEffect(() => {
    if (!invoice?.invoiceId) {
      setRows([]);
      setCustomerSearch("");
      setCustomerEmail("");
      setCustomerPhone("");
      setCustomerAddress("");
      setCustomerGstin("");
      setSelectedCustomer(null);
      setInvoiceNumber("");
      setReferenceNo("");
      setDate(new Date());
      setDueDate(new Date());
      setInvoiceType("");
      setSelectedStatus(null);
      setPaidAmount(0);
      setSubTotal(0);
      setTotalTax(0);
      setTotalDiscount(0);
      setGrandTotal(0);
      return;
    }
    const loadFullInvoice = async () => {
      
      try {
        const response = await InvoiceService.getInvoiceById(invoice.invoiceId);
        if (response.status && response.data) {
          const fullInvoice = response.data;
          
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

          setInvoiceNumber(fullInvoice.invoiceNumber || "");
          setReferenceNo(fullInvoice.notes || "");
          setDate(parseDate(fullInvoice.invoiceDate));
          setDueDate(parseDate(fullInvoice.dueDate));
          setInvoiceType((fullInvoice.invoiceType || 'intrastate').toLowerCase() as any);

          // Map customer data (from snapshot or linked customer)
          const cust: any = fullInvoice.customer || {};
          setCustomerSearch(cust.name || fullInvoice.customerName || "");
          setCustomerEmail(cust.email || fullInvoice.customerEmail || "");
          setCustomerPhone(cust.phone || fullInvoice.customerPhone || "");
          setCustomerAddress(cust.address || fullInvoice.customerAddress || "");
          setCustomerGstin(cust.gstin || fullInvoice.customerGstin || "");

          if (cust.customerId || fullInvoice.customerId) {
            setSelectedCustomer({
                label: cust.name || fullInvoice.customerName,
                value: cust.customerId || fullInvoice.customerId,
                email: cust.email || fullInvoice.customerEmail,
                phone: cust.phone || fullInvoice.customerPhone,
                address: cust.address || fullInvoice.customerAddress,
                gstin: cust.gstin || fullInvoice.customerGstin
            });
          }

          setSelectedStatus(fullInvoice.paymentStatus);
          setPaidAmount(Number(fullInvoice.paidAmount) || 0);

          if (fullInvoice.items && fullInvoice.items.length > 0) {
            const loadedRows = fullInvoice.items.map((item: any) => {
              const qty = Number(item.quantity) || 1;
              const rate = Number(item.rate) || 0;
              const baseAmountAmount = qty * rate;
              // Back-calculate discount percentage from stored discount amount
              const discountAmountStored = Number(item.discount) || 0;
              const discountPercent = baseAmountAmount > 0 
                ? Number(((discountAmountStored / baseAmountAmount) * 100).toFixed(2)) 
                : 0;
                
              const taxPercent = Number(item.taxPercent) || 0;
              const netAmount = baseAmountAmount - discountAmountStored;
              const taxAmount = (netAmount * taxPercent) / 100;

              return {
                product: { label: item.productName, value: item.productId, id: item.productId }, 
                productSearch: item.productName,
                showProductDropdown: false,
                qty: qty,
                rate: rate,
                discount: discountPercent, // Store as percentage in UI
                tax: taxPercent,
                hsnSac: item.hsnSac || "",
                isTaxFromProduct: false,
                taxAmount: Number(taxAmount.toFixed(2)),
                unitCost: Number((netAmount + taxAmount).toFixed(2)),
                total: Number(item.amount) || Number((netAmount + taxAmount).toFixed(2))
              };
            });
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
              hsnSac: "",
              isTaxFromProduct: false,
              taxAmount: 0,
              unitCost: 0,
              total: 0,
            }]);
          }
        }
      } catch (error) {
        console.error("Error loading invoice details:", error);
      }
    };

    loadFullInvoice();
  }, [invoice?.invoiceId]);

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

  const Status = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Unpaid', value: 'Unpaid' },
    { label: 'Overdue', value: 'Overdue' },
    { label: 'Partially Paid', value: 'Partially Paid' },
  ];

  const getFilteredTaxRates = () => {
    const type = (invoiceType || "intrastate").toLowerCase();
    return taxRates.filter(r => {
      const taxType = (r.type || "").toUpperCase().trim();
      const label = (r.label || "").toUpperCase().trim();
      
      if (type === "interstate") {
        // Show IGST OR GST (since GST records often serve as IGST in this setup)
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

  const filteredCustomers = customers.filter(customer =>
    customer.label.toLowerCase().includes(customerSearch.toLowerCase())
  );

  const getFilteredProducts = (search: string, index: number) => {
    const selectedProductIds = rows
      .map((row, i) => i !== index ? (row.product?.id || row.product?.value) : null)
      .filter(Boolean);
    const selectedProductNames = rows
      .map((row, i) => i !== index ? (row.product?.name || row.product?.label || row.productSearch) : null)
      .filter(Boolean);

    const filtered = productOptions.filter(p => 
      !selectedProductIds.includes(p.id) && 
      !selectedProductNames.includes(p.name || p.label)
    );

    if (!search) return filtered.slice(0, 10);
    return filtered.filter(p => (p.name || p.label).toLowerCase().includes(search.toLowerCase()));
  };

  const calculateSummary = (rowsData: any[]) => {
    let sub = 0;
    let tax = 0;
    let discount = 0;

    rowsData.forEach((row) => {
      const qty = Number(row.qty || 0);
      const rate = Number(row.rate || 0);
      const discountPercent = Number(row.discount || 0);
      const grossAmount = qty * rate;
      const discountAmount = (grossAmount * discountPercent) / 100;
      const baseAmount = grossAmount - discountAmount;

      sub += baseAmount;
      tax += Number(row.taxAmount || 0);
      discount += discountAmount;
    });

    setSubTotal(Number(sub.toFixed(2)));
    setTotalTax(Number(tax.toFixed(2)));
    setTotalDiscount(Number(discount.toFixed(2)));
    setGrandTotal(Number((sub + tax).toFixed(2)));
  };

  const recalculateRow = (updatedRows: any[], index: number) => {
    const row = updatedRows[index];
    const qty = Number(row.qty || 0);
    const rate = Number(row.rate || 0);
    const discountPercent = Number(row.discount || 0);
    const grossAmount = qty * rate;
    const discountAmount = (grossAmount * discountPercent) / 100;
    const baseAmount = grossAmount - discountAmount;
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
        hsnSac: product.hsnSac || "",
        qty: updated[index].qty || 1,
        discount: updated[index].discount || 0,
      };
    
      recalculateRow(updated, index);
  };

  const onProductDeleted = (index: number) => {
      setRows(rows.filter((_, i) => i !== index));
      calculateSummary(rows.filter((_, i) => i !== index));
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
        hsnSac: "",
        isTaxFromProduct: false,
        taxAmount: 0,
        unitCost: 0,
        total: 0,
      },
    ]);
  };

  const handleUpdate = async () => {
      if (!selectedCustomer) {
          alert("Customer is required");
          return;
      }

      const invoiceItems: any[] = rows.map(r => {
          const grossAmount = Number(r.qty) * Number(r.rate);
          const discountAmount = (grossAmount * (Number(r.discount) || 0)) / 100;
          
          return {
              productId: r.product?.id || r.product?.value,
              productName: r.productSearch || r.product?.label,
              quantity: Number(r.qty),
              rate: Number(r.rate),
              discount: Number(discountAmount.toFixed(2)),
              taxPercent: Number(r.tax),
              hsnSac: r.hsnSac || "",
              amount: Number(r.total)
          };
      });

      const updatedInvoice: any = {
          invoiceType: (invoiceType.charAt(0).toUpperCase() + invoiceType.slice(1)) as any,
          customerId: selectedCustomer.id || selectedCustomer.value,
          customerName: customerSearch,
          customerEmail: customerEmail,
          customerPhone: customerPhone,
          customerAddress: customerAddress,
          customerGstin: customerGstin,
          invoiceDate: date ? date.toISOString() : invoice.invoiceDate,
          dueDate: dueDate ? dueDate.toISOString() : invoice.dueDate,
          paymentStatus: selectedStatus,
          items: invoiceItems,
          notes: referenceNo, // Notes field reused for reference/notes
          paidAmount: Number(paidAmount) || 0,
          subtotal: Number(subTotal.toFixed(2)),
          taxAmount: Number(totalTax.toFixed(2)),
          grandTotal: Number(grandTotal.toFixed(2)),
      };

      try {
        const res = await InvoiceService.updateInvoice(invoice.invoiceId, updatedInvoice);
        if (res.status) {
          Swal.fire("Success", "Invoice updated successfully", "success");
          if (onUpdate) onUpdate();
          const closeBtn = document.querySelector('[data-bs-dismiss="modal"]') as HTMLElement;
          if (closeBtn) closeBtn.click();
        } else {
          Swal.fire("Error", res.message || "Failed to update", "error");
        }
      } catch (err: any) {
        console.error("Update failed:", err);
        Swal.fire("Error", "Server error occurred", "error");
      }


  };

  return (
    <div className="modal fade" id="edit-invoice">
      <div className="modal-dialog purchase modal-dialog-centered stock-adjust-modal" style={{ maxWidth: '85vw', width: '85%' }}>
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
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Invoice Type</h5>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="invoiceType" id="edit-intrastate"
                        checked={invoiceType === 'intrastate'} onChange={() => setInvoiceType('intrastate')} />
                      <label className="form-check-label" htmlFor="edit-intrastate">
                        Intrastate (Within State - INR ₹)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="invoiceType" id="edit-interstate"
                        checked={invoiceType === 'interstate'} onChange={() => setInvoiceType('interstate')} />
                      <label className="form-check-label" htmlFor="edit-interstate">
                        Interstate (Between States - INR ₹)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="invoiceType" id="edit-international"
                        checked={invoiceType === 'international'} onChange={() => setInvoiceType('international')} />
                      <label className="form-check-label" htmlFor="edit-international">
                        International
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3">
                        <label className="form-label">Customer Name</label>
                        <div className="position-relative" ref={customerDropdownRef}>
                             <input
                                type="text"
                                className="form-control"
                                placeholder="Enter or select customer name"
                                value={customerSearch}
                                onChange={(e) => {
                                  setCustomerSearch(e.target.value);
                                  setShowCustomerDropdown(true);
                                  if (!e.target.value) setSelectedCustomer(null);
                                }}
                                onFocus={() => setShowCustomerDropdown(true)}
                                autoComplete="off"
                              />
                               {showCustomerDropdown && (
                                <div className="position-absolute w-100 mt-1 bg-white border rounded shadow" 
                                     style={{zIndex: 1060, maxHeight: "250px", overflowY: "auto"}}>
                                  {filteredCustomers.length > 0 ? (
                                    filteredCustomers.map((customer) => (
                                      <div
                                        key={customer.value}
                                        className="px-3 py-2 cursor-pointer"
                                        onClick={() => {
                                          setSelectedCustomer(customer);
                                          setCustomerSearch(customer.label);
                                          setCustomerEmail(customer.email || "");
                                          setCustomerPhone(customer.phone || "");
                                          setCustomerAddress(customer.address || customer.billingAddress || "");
                                          setCustomerGstin(customer.gstin || "");
                                          setShowCustomerDropdown(false);
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                                      >
                                        <strong>{customer.label}</strong>
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
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)} placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)} placeholder="Phone" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)} placeholder="Address" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">GSTIN</label>
                    <input type="text" className="form-control" value={customerGstin}
                      onChange={(e) => setCustomerGstin(e.target.value)} placeholder="GSTIN" />
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
                 {(selectedStatus === "Paid" || selectedStatus === "Partially Paid") && (
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Paid Amount</label>
                        <input 
                          type="number" 
                          className="form-control" 
                          value={paidAmount}
                          onChange={(e) => setPaidAmount(parseFloat(e.target.value) || 0)}
                          placeholder="0.00" 
                          step="0.01" 
                          min="0" 
                          max={grandTotal} 
                        />
                      </div>
                    </div>
                  )}
             </div>
            
            <div className="row mt-3">
                 <div className="col-lg-12">
                      <div className="table-responsive" style={{ overflow: "visible" }}>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "15%" }}>Product</th>
                                        <th style={{ width: "10%" }}>HSN/SAC</th>
                                        <th style={{ width: "110px" }}>Qty</th>
                                        <th style={{ width: "180px" }}>Rate</th>
                                        <th style={{ width: "120px" }}>Discount</th>
                                        <th style={{ width: "180px" }}>Tax (%)</th>
                                        <th style={{ width: "100px" }}>Amount</th>
                                        <th style={{ width: "40px" }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index}><td>
                                                 <div className="position-relative">
                                                     <input
                                                        type="text"
                                                        className="form-control w-100"
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
                                                        onBlur={() => {
                                                          setTimeout(() => {
                                                            setRows((prev) => {
                                                              const updated = [...prev];
                                                              if (updated[index]) {
                                                                updated[index].showProductDropdown = false;
                                                              }
                                                              return updated;
                                                            });
                                                          }, 200);
                                                        }}
                                                        placeholder="Enter or search product"
                                                        autoComplete="off"
                                                    />
                                                     {row.showProductDropdown && (
                                                        <div className="position-absolute w-100 bottom-100 mb-1 bg-white border rounded shadow-lg" style={{zIndex: 1050, maxHeight: '250px', overflowY: 'auto'}}>
                                                            {getFilteredProducts(row.productSearch, index).length > 0 ? (
                                                                getFilteredProducts(row.productSearch, index).map((p) => (
                                                                <div 
                                                                    key={p.id || p.value} 
                                                                    className="px-2 py-2 cursor-pointer border-bottom"
                                                                    onMouseDown={(e) => e.preventDefault()}
                                                                     onClick={() => onProductChange(index, p)}
                                                                     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                                                                     onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                                                                >
                                                                    <div className="fw-semibold" style={{ fontSize: 13 }}>{p.label || p.name}</div>
                                                                     <small className="text-muted">
                                                                       Rate: ₹{Number(p.rate || 0).toFixed(2)} &nbsp;|&nbsp; Tax: {p.tax}%
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
                                                   className="form-control w-100"
                                                   value={row.hsnSac}
                                                   onChange={(e) =>
                                                     onInputChange(index, "hsnSac", e.target.value)
                                                   }
                                                 />
                                             </td>

                                             <td>
                                                 <input type="number" className="form-control w-100" value={row.qty} onChange={(e) => onInputChange(index, 'qty', Number(e.target.value))} />
                                             </td>
                                             <td>
                                                 <input type="number" className="form-control w-100" value={row.rate} onChange={(e) => onInputChange(index, 'rate', Number(e.target.value))} />
                                             </td>
                                              <td>
                                                 <input type="number" className="form-control w-100" value={row.discount} onChange={(e) => onInputChange(index, 'discount', Number(e.target.value))} />
                                             </td>
                                              <td>
                                                   <select
                                                     className="form-select w-100"
                                                     value={row.tax}
                                                     onChange={(e) => onInputChange(index, 'tax', Number(e.target.value))}
                                                   >
                                                     <option value={0}>No Tax</option>
                                                     {getFilteredTaxRates().map((rate: any) => {
                                                       let displayLabel = rate.label;
                                                       if (invoiceType === "interstate" && rate.type === "GST") {
                                                         displayLabel = rate.label.replace(/GST/i, "IGST");
                                                       }
                                                       return (
                                                         <option key={rate.label + rate.value} value={rate.value}>
                                                           {displayLabel}
                                                         </option>
                                                       );
                                                     })}
                                                   </select>
                                               </td>
                                             
                                             <td>{row.total}</td>
                                             <td>
                                                 <button type="button" className="btn btn-sm btn-danger" onClick={() => onProductDeleted(index)}>
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
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title mb-3">Invoice Summary</h5>
                      <div style={{ minWidth: "250px" }}>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="fw-medium">Subtotal</span>
                          <span>{currencySymbol}{subTotal.toFixed(2)}</span>
                        </div>
                        {totalDiscount > 0 && (
                          <div className="d-flex justify-content-between mb-2 text-danger">
                            <span className="fw-medium">Total Discount ({((totalDiscount / (subTotal || 1)) * 100).toFixed(0)}%)</span>
                            <span>-{currencySymbol}{totalDiscount.toFixed(2)}</span>
                          </div>
                        )}
                        
                        {invoiceType === 'intrastate' && totalTax > 0 && (
                          <>
                            <div className="d-flex justify-content-between mb-2">
                              <span className="fw-medium">CGST</span>
                              <span>{currencySymbol}{(totalTax / 2).toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                              <span className="fw-medium">SGST</span>
                              <span>{currencySymbol}{(totalTax / 2).toFixed(2)}</span>
                            </div>
                          </>
                        )}
                        {invoiceType === 'interstate' && totalTax > 0 && (
                          <div className="d-flex justify-content-between mb-2">
                            <span className="fw-medium">IGST</span>
                            <span>{currencySymbol}{totalTax.toFixed(2)}</span>
                          </div>
                        )}
                        {invoiceType === 'international' && totalTax > 0 && (
                          <div className="d-flex justify-content-between mb-2">
                            <span className="fw-medium">VAT</span>
                            <span>{currencySymbol}{totalTax.toFixed(2)}</span>
                          </div>
                        )}

                        <div className="d-flex justify-content-between fw-bold border-top pt-2 mt-2 h5 mb-3">
                          <span>Grand Total</span>
                          <span className="text-primary">{currencySymbol}{grandTotal.toFixed(2)}</span>
                        </div>

                        <div className="bg-light p-2 rounded mb-3">
                          <small className="text-muted d-block fw-bold mb-1">Amount in Words:</small>
                          <small className="text-dark fw-medium">
                            {InvoiceService.numberToWords(grandTotal, invoiceType)}
                          </small>
                        </div>

                        {(selectedStatus === "Paid" || selectedStatus === "Partially Paid") && (
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
