import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "primereact/editor";
import { plus1 } from "../../../utils/imagepath";
import CommonSelect from "../../../components/select/common-select";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";
import { QuotationService } from "../../../feature-module/services/quotation.service";
import { CustomerService } from "../../../feature-module/services/customer.service";
import { ProductService } from "../../../feature-module/services/product.service";
import { all_routes } from "../../../routes/all_routes";
import { ALL_SELECTED_CURRENCIES } from "../../../feature-module/settings/financialsettings/currencies";
import { INITIAL_TAX_RATES } from "../../../feature-module/settings/financialsettings/taxrates";

const FALLBACK_TAX_RATES = INITIAL_TAX_RATES.map(t => ({
  label: t.name,
  value: t.rate,
  type: t.type
}));

interface AddQuotationProps {
  onSuccess?: () => void;
}

const AddQuotation = ({ onSuccess }: AddQuotationProps) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [validityDate, setValidityDate] = useState<Date | null>(new Date());
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<any>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
  const [text, setText] = useState("");
  const [quotationNumber, setQuotationNumber] = useState<string>("");
  const [referenceNo, setReferenceNo] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: string } | null>(null);

  const [customers, setCustomers] = useState<any[]>([]);
  const navigate = useNavigate();

  const [taxRates, setTaxRates] = useState<any[]>([]);

  const showToast = (msg: string, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    QuotationService.generateNumber()
      .then(setQuotationNumber)
      .catch(() => {
        const today = new Date();
        const dateStr = today.toISOString().slice(0, 10).replace(/-/g, "");
        setQuotationNumber(`QT-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`);
      });
  }, []);

  useEffect(() => {
    const modalElement = document.getElementById('add-units');
    if (modalElement) {
      const handleHidden = () => {
        resetForm();
      };
      modalElement.addEventListener('hidden.bs.modal', handleHidden);
      return () => {
        modalElement.removeEventListener('hidden.bs.modal', handleHidden);
      };
    }
  }, []);

  useEffect(() => {
    CustomerService.getCustomers({ limit: 200, page: 1 })
      .then((res) => {
        const formatted = (res.data || []).map((c: any) => ({
          label: c.customer || `${c.firstName} ${c.lastName || ""}`.trim(),
          value: c.id,
          id: c.id,
          avatar: c.avatar,
          customer: c.customer || `${c.firstName} ${c.lastName || ""}`.trim(),
        }));
        setCustomers(formatted);
      })
      .catch(() => setCustomers([]));
  }, []);

  useEffect(() => {
    const loadTaxRates = () => {
      try {
        const storedStr = localStorage.getItem("taxRates");
        const storedTaxRates = JSON.parse(storedStr || "[]");
        
        const isValid = storedTaxRates.length > 0 && storedTaxRates.every((t: any) => t.type);

        if (isValid) {
          setTaxRates(storedTaxRates.map((t: any) => ({ 
            label: t.name, 
            value: t.rate, 
            type: t.type 
          })));
        } else {
          setTaxRates(FALLBACK_TAX_RATES);
        }
      } catch (e) {
        setTaxRates(FALLBACK_TAX_RATES);
      }
    };
    loadTaxRates();
    window.addEventListener("storage", loadTaxRates);
    return () => window.removeEventListener("storage", loadTaxRates);
  }, []);

  const Status  = [
    { label: 'Pending',   value: 'Pending'   },
    { label: 'Sent',      value: 'Sent'      },
    { label: 'Ordered',   value: 'Ordered'   },
    { label: 'Converted', value: 'Converted' },
  ];

    const [quotationType, setQuotationType] = useState<
      "international" | "interstate" | "intrastate"
    >("intrastate");

  const getDefaultTaxByQuotationType = (
    type: "international" | "interstate" | "intrastate"
  ) => {
    if (type === "international") return 5;
    if (type === "interstate") return 18;
    return 18;
  };

const [productOptions, setProductOptions] = useState<any[]>([]);

useEffect(() => {
  ProductService.getAll({ limit: 500, page: 1 })
    .then((res) => {
      const opts = (res.data || []).map((p: any) => ({
        label: p.product || p.productName || "",
        value: p.id,
        id: p.id,
        rate: Number(p.priceBeforeTax || p.price || 0),
        tax: Number(p.taxRate || 0),
      }));
      setProductOptions(opts);
    })
    .catch(() => setProductOptions([]));
}, []);


  const [rows, setRows] = useState<any[]>([]);

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
        tax: getDefaultTaxByQuotationType(quotationType),
        isTaxFromProduct: false,
        taxAmount: 0,
        unitCost: 0,
        total: 0,
      },
    ]);
  };

  const getFilteredProducts = (index:number) => {
  const searchTerm = rows[index]?.productSearch || "";
  return productOptions.filter(product =>
    product.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
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

    const unitCost = baseAmount + taxAmount;

    updatedRows[index] = {
      ...row,
      taxAmount: Number(taxAmount.toFixed(2)),
      unitCost: Number(unitCost.toFixed(2)),
      total: Number(unitCost.toFixed(2)),
    };

    setRows([...updatedRows]);
    calculateSummary(updatedRows);
  };

 const onProductChange = (index: number, product: any) => {
  if (!product) return;

  const hasProductTax = product.tax !== undefined && product.tax !== null;
  const productTax = hasProductTax
      ? Number(product.tax)
      : getDefaultTaxByQuotationType(quotationType);

  const updated = [...rows];

  updated[index] = {
    ...updated[index],
    product,
    productSearch: product.label,
    showProductDropdown: false,
    rate: Number(product.rate || 0),
    tax: productTax,              
    isTaxFromProduct: hasProductTax, 
    qty: updated[index].qty || 1,
    discount: updated[index].discount || 0,
  };
  
  recalculateRow(updated, index);
};


  useEffect(() => {
    const updated = [...rows];
    updated.forEach((row) => {
      if (!row.isTaxFromProduct) {
        row.tax = getDefaultTaxByQuotationType(quotationType); 
      }
    });
    setRows(updated);

    if (quotationType !== "international") {
      setSelectedCurrency(null);
    }
  }, [quotationType]);



    const [subTotal, setSubTotal] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    const calculateSummary = (rowsData: any[]) => {
      let sub = 0;
      let discount = 0;
      let tax = 0;

      rowsData.forEach((row) => {
        const qty = Number(row.qty || 0);
        const rate = Number(row.rate || 0);
        const rowDiscountPercent = Number(row.discount || 0);

        const grossAmount = qty * rate;
        const rowDiscountAmount = (grossAmount * rowDiscountPercent) / 100;

        sub += grossAmount;
        discount += rowDiscountAmount;
        tax += Number(row.taxAmount || 0);
      });

      setSubTotal(Number(sub.toFixed(2)));
      setTotalDiscount(Number(discount.toFixed(2)));
      setTotalTax(Number(tax.toFixed(2)));
      setGrandTotal(Number((sub - discount + tax).toFixed(2)));
    };

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

    const confirmDeleteRow = () => {
      if (deleteIndex === null) return;

      const updated = rows.filter((_, i) => i !== deleteIndex);
      setRows(updated);
      calculateSummary(updated); 

      setDeleteIndex(null);
      setShowDeleteModal(false);
    };

    const [amountInWords, setAmountInWords] = useState<string>("");


    const numberToWordsINR = (num: number): string => {
      if (num === 0) return "Zero Rupees Only";

      const ones = [
        "", "One", "Two", "Three", "Four", "Five",
        "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen",
      ];

      const tens = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety",
      ];

      const convertLessThanThousand = (n: number): string => {
        if (n === 0) return "";
        if (n < 20) return ones[n];
        if (n < 100)
          return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
        return ones[Math.floor(n / 100)] + " Hundred " + convertLessThanThousand(n % 100);
      };

      let result = "";
      let crore = Math.floor(num / 10000000);
      num %= 10000000;
      let lakh = Math.floor(num / 100000);
      num %= 100000;
      let thousand = Math.floor(num / 1000);
      num %= 1000;

      if (crore) result += convertLessThanThousand(crore) + " Crore ";
      if (lakh) result += convertLessThanThousand(lakh) + " Lakh ";
      if (thousand) result += convertLessThanThousand(thousand) + " Thousand ";
      if (num) result += convertLessThanThousand(num);

      return result.trim() + " Rupees Only";
    };


    useEffect(() => {
      setAmountInWords(numberToWordsINR(Math.round(grandTotal)));
    }, [grandTotal]);

    const requiredFields = {
      customer: true,
      Date:true,
      QuotationNo:true,
      quotationType: true,
      Status: true,
    };

    const validateForm = () => {
      const newErrors: any = {};

      if (!selectedCustomer) {
        newErrors.customer = "Customer is required";
      }

      if (!date) {
        newErrors.date = "Date is required";
      }

      if (!selectedStatus) {
        newErrors.status = "Status is required";
      }

      if (rows.length === 0) {
        newErrors.products = "At least one product is required";
      }

      rows.forEach((row, index) => {
        if (!row.product) {
          newErrors[`product_${index}`] = "Product is required";
        }
        if (!row.qty || row.qty <= 0) {
          newErrors[`qty_${index}`] = "Quantity must be greater than 0";
        }
        if (!row.rate || row.rate <= 0) {
          newErrors[`rate_${index}`] = "Rate must be greater than 0";
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };


  const resetForm = () => {
    setDate(new Date());
    setValidityDate(new Date());
    setReferenceNo("");
    setSelectedCustomer(null);
    setSelectedStatus(null);
    setText("");
    setErrors({});
    setRows([
      {
        product: null,
        productSearch: "",        
        showProductDropdown: false,
        qty: 1,
        rate: 0,
        discount: 0,
        tax: getDefaultTaxByQuotationType(quotationType),
        taxAmount: 0,
        unitCost: 0,
        total: 0,
      },
    ]);

    // Refresh quotation number from API for next use
    QuotationService.generateNumber()
      .then(setQuotationNumber)
      .catch(() => {
        const today = new Date();
        const dateStr = today.toISOString().slice(0, 10).replace(/-/g, "");
        setQuotationNumber(`QT-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`);
      });
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    setSaving(true);
    try {
      const payload = {
        customerId: selectedCustomer.id || selectedCustomer.value,
        date: date ? date.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
        validity: validityDate ? validityDate.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
        reference: referenceNo || "",
        quotationType: quotationType.charAt(0).toUpperCase() + quotationType.slice(1) as any,
        description: text || "",
        status: selectedStatus || "Pending",
        items: rows.map((row: any) => ({
          productId: row.product?.id || row.product?.value,
          qty: Number(row.qty),
          rate: Number(row.rate),
          discountPercent: Number(row.discount || 0),
          taxPercent: Number(row.tax || 0),
        })),
      };

      await QuotationService.create(payload);
      showToast("Quotation Created Successfully");
      resetForm();
      onSuccess?.();

      const closeBtn = document.querySelector('#add-units .close') as HTMLElement;
      closeBtn?.click();
    } catch (err: any) {
      showToast(err.message || "Failed to create quotation", "danger");
    } finally {
      setSaving(false);
    }
  };

const onInputChange = (index: number, field: string, value: number) => {
  if (!rows[index]) return;

  const updated = [...rows];
  updated[index] = {
    ...updated[index],
    [field]: value,
    ...(field === "tax" ? { isTaxFromProduct: false } : {}),
  };

  setErrors((prev: any = {}) => ({
    ...prev,
    [`${field}_${index}`]: null,
  }));

  recalculateRow(updated, index);
};


const [customerSearch, setCustomerSearch] = useState("");
const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);

const filteredCustomers = customers.filter(customer =>
  customer.label.toLowerCase().includes(customerSearch.toLowerCase())
);




  return (
    <div>
        {/* Toast */}
        {toast && (
          <div
            className={`alert alert-${toast.type} alert-dismissible position-fixed`}
            style={{ top: 80, right: 20, zIndex: 9999, minWidth: 280 }}
          >
            {toast.msg}
          </div>
        )}
        {/*Add Quotation */}
        <div className="modal fade" id="add-units">
          <div className="modal-dialog purchase modal-dialog-centered stock-adjust-modal modal-xl modal-fullscreen-sm-down" style={{ maxWidth: "85%" }}>
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Quotation</h4>
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
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3 add-product">
                        <label className="form-label">
                          Customer Name
                          {requiredFields.customer && (
                            <span className="text-danger ms-1">*</span>
                          )}

                        </label>
                        <div className="row">
                          <div className="col-lg-10 col-md-6 col-14">
                            <input
                              type="text"
                              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                              <div className="absolute z-50 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-y-auto">
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
                            {errors.customer && (
                              <small className="text-danger">{errors.customer}</small>
                            )}
                          </div>
                          <div className="col-lg-2 col-sm-2 col-2 p-0">
                            <div className="add-icon tab">
                              <button
                                type="button"
                                className="bg-dark text-white p-2 rounded border-0"
                                onClick={() => {
                                  const modal = document.getElementById("add-units");
                                  modal?.classList.remove("show");
                                  document.body.classList.remove("modal-open");
                                  document.querySelector(".modal-backdrop")?.remove();
                                  navigate(all_routes.customers, { state: { openAddCustomer: true } });
                                }}
                                >
                                  <img src={plus1} alt="Add Customer" />
                                </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Date
                          {requiredFields.Date && (<span className="text-danger ms-1">*</span>
                          )}
                        </label>
                        <div className="input-groupicon calender-input">
                          <CommonDatePicker
                            value={date}
                            onChange={setDate}
                            className="w-100"
                          />
                          <i className="feather icon-calendar info-img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Reference
                        </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={referenceNo}
                          onChange={(e) => setReferenceNo(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {quotationType === "international" && (
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
                   )}
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3 add-product">
                        <label className="form-label">
                          Quotation No
                          {requiredFields.QuotationNo && (<span className="text-danger ms-1">*</span>)}
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={quotationNumber} 
                            readOnly 
                            disabled 
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Validity
                          {requiredFields.Date && (<span className="text-danger ms-1">*</span>)}
                        </label>
                        <div className="input-groupicon calender-input">
                          <CommonDatePicker
                            value={validityDate}
                            onChange={setValidityDate}
                            className="w-100"
                          />
                          <i className="feather icon-calendar info-img" />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Quotation Type {requiredFields.quotationType && (<span className="text-danger ms-1">*</span>)}
                        </label>
                        <div className="border rounded p-2">
                          <div className="d-flex gap-5">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="quotationType"
                                id="interstate"
                                value="interstate"
                                checked={quotationType === "interstate"}
                                onChange={(e) =>
                                  setQuotationType(
                                    e.target.value as "international" | "interstate" | "intrastate"
                                  )
                                }

                              />
                              <label className="form-check-label" htmlFor="interstate">
                                Interstate
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="quotationType"
                                id="intrastate"
                                value="intrastate"
                                checked={quotationType === "intrastate"}
                                onChange={(e) =>
                                  setQuotationType(
                                    e.target.value as "international" | "interstate" | "intrastate"
                                  )
                                }                            
                              />
                              <label className="form-check-label" htmlFor="intrastate">
                                Intrastate
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="quotationType"
                                id="international"
                                value="international"
                                checked={quotationType === "international"}
                                onChange={(e) =>
                                  setQuotationType(
                                    e.target.value as "international" | "interstate" | "intrastate"
                                  )
                                }
                              />
                              <label className="form-check-label" htmlFor="international">
                                International
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="border rounded p-3">

                        {/* Table */}
                        {errors.products && (
                          <div className="text-danger mb-2">
                            {errors.products}
                          </div>
                        )}
                        <div className="table-responsive">
                          <table className="table table-bordered mb-0">
                            <thead className="table-light">
                                <tr>
                                  <th style={{ minWidth: "200px" }}>Item</th>
                                  <th style={{ width: "100px", textAlign: "center" }}>Qty</th>
                                  <th style={{ width: "200px", textAlign: "right" }}>Rate</th>
                                  <th style={{ width: "110px", textAlign: "right" }}>Discount (%)</th>
                                  <th style={{ width: "180px" }}>Tax (%)</th>
                                  <th style={{ width: "120px", textAlign: "right" }}>Tax Amount</th>
                                  <th style={{ width: "120px", textAlign: "right" }}>Unit Cost</th>
                                  <th style={{ width: "130px", textAlign: "right" }}>Total Cost</th>
                                  <th style={{ width: "30px" }}></th>
                                </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, index) => (
                                <tr key={index}>
                                  <td style={{ minWidth: "200px" }}>
                                    <div className="position-relative">
                                      <input
                                        type="text"
                                        className="form-control w-100"
                                        placeholder="Search product..."
                                        value={row.productSearch}
                                        onChange={(e) => {
                                          const updated = [...rows];
                                          updated[index] = {
                                            ...updated[index],
                                            productSearch: e.target.value,
                                            showProductDropdown: true,
                                          };
                                          if (!e.target.value) {
                                            updated[index].product = null;
                                          }
                                          setRows(updated);
                                        }}
                                        onFocus={(e) => {
                                          const updated = [...rows];
                                          updated[index].showProductDropdown = true;
                                          updated[index]._inputRect = e.currentTarget.getBoundingClientRect();
                                          setRows(updated);
                                        }}
                                        onBlur={() => {
                                          // Delay close so click on item registers first
                                          setTimeout(() => {
                                            const updated = [...rows];
                                            if (updated[index]) {
                                              updated[index].showProductDropdown = false;
                                              setRows(updated);
                                            }
                                          }, 200);
                                        }}
                                      />
                                      
                                      {row.showProductDropdown && (
                                        <div 
                                          style={{
                                            position: "fixed",
                                            top: row._inputRect ? row._inputRect.bottom + 2 : 0,
                                            left: row._inputRect ? row._inputRect.left : 0,
                                            width: row._inputRect ? row._inputRect.width : 220,
                                            maxHeight: "220px",
                                            overflowY: "auto",
                                            zIndex: 9999,
                                            background: "white",
                                            border: "1px solid #dee2e6",
                                            borderRadius: "0.375rem",
                                            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                          }}
                                        >
                                          {getFilteredProducts(index).length > 0 ? (
                                            getFilteredProducts(index).map((product) => (
                                              <div
                                                key={product.value}
                                                className="px-2 py-2"
                                                style={{ cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() => onProductChange(index, product)}
                                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                                              >
                                                <div className="fw-semibold" style={{ fontSize: 13 }}>{product.label}</div>
                                                <small className="text-muted">
                                                  Rate: ₹{product.rate.toFixed(2)} &nbsp;|&nbsp; Tax: {product.tax}%
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
                                  <td style={{ textAlign: "center" }}>
                                    <input
                                      type="number"
                                      className="form-control text-center"
                                      min={1}
                                      value={row.qty}
                                      onChange={(e) =>
                                        onInputChange(index, "qty", Number(e.target.value))
                                      }
                                    />
                                  </td>

                                  <td style={{ textAlign: "right" }}>
                                    <input
                                      type="number"
                                      className="form-control text-end no-spinner"
                                      value={row.rate}
                                      onChange={(e) =>
                                        onInputChange(index, "rate", Number(e.target.value))
                                      }
                                    />
                                  </td>

                                  <td style={{ textAlign: "right" }}>
                                    <input
                                      type="number"
                                      className="form-control text-end no-spinner"
                                      value={row.discount}
                                      onChange={(e) =>
                                        onInputChange(index, "discount", Number(e.target.value))
                                      }
                                    />
                                  </td>
                                  <td>
                                      <select
                                        className="form-select"
                                        value={row.tax}
                                        onChange={(e) =>
                                          onInputChange(
                                            index,
                                            "tax",
                                            Number(e.target.value)
                                          )
                                        }
                                      >
                                        <option value={0}>No Tax (0%)</option>
                                        {row.tax > 0 && !taxRates.some((r) => r.value === row.tax) && (
                                          <option value={row.tax}>
                                            Product Tax ({row.tax}%)
                                          </option>
                                        )}
                                        {taxRates.map((rate: { label: string; value: number; type: string }) => (
                                          <option key={`${rate.label}-${rate.value}`} value={rate.value}>
                                            {rate.label} ({rate.type} — {rate.value}%)
                                          </option>
                                        ))}
                                      </select>
                                  </td>
                                  <td style={{ textAlign: "right" }}>{row.taxAmount || 0}</td>
                                  <td style={{ textAlign: "right" }}>{row.unitCost || 0}</td>
                                  <td style={{ textAlign: "right" }}>{row.total || 0}</td>
                                  <td className="text-center">
                                    <button
                                      type="button"
                                      className="p-2 d-flex align-items-center justify-content-center border rounded bg-white"
                                      onClick={() => {
                                        setDeleteIndex(index);
                                        setShowDeleteModal(true);
                                      }}
                                    >
                                      <i className="feather icon-trash-2 text-danger"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td colSpan={9}>
                                  <button
                                    type="button"
                                    className="btn btn-link text-primary p-0"
                                    onClick={addProductRow}
                                  >
                                    + Add Product
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Summary Section */}
                        <div className="d-flex justify-content-end mt-3">
                          <div style={{ minWidth: "250px" }}>
                            <div className="d-flex justify-content-between mb-2">
                              <span>Subtotal</span>
                              <span>₹{subTotal.toFixed(2)}</span>
                            </div>
                            {totalDiscount > 0 && (
                              <div className="d-flex justify-content-between mb-2 text-danger font-weight-bold">
                                <span>Discount</span>
                                <span>-₹{totalDiscount.toFixed(2)}</span>
                              </div>
                            )}
                            {quotationType === "intrastate" && totalTax > 0 && (
                              <>
                                <div className="d-flex justify-content-between mb-2">
                                  <span>CGST</span>
                                  <span>₹{(totalTax / 2).toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                  <span>SGST</span>
                                  <span>₹{(totalTax / 2).toFixed(2)}</span>
                                </div>
                              </>
                            )}
                            {quotationType === "interstate" && totalTax > 0 && (
                              <div className="d-flex justify-content-between mb-2">
                                <span>IGST</span>
                                <span>₹{totalTax.toFixed(2)}</span>
                              </div>
                            )}
                            {quotationType === "international" && totalTax > 0 && (
                              <div className="d-flex justify-content-between mb-2">
                                <span>VAT</span>
                                <span>₹{totalTax.toFixed(2)}</span>
                              </div>
                            )}

                            <div className="d-flex justify-content-between fw-bold border-top pt-2">
                              <span>Grand Total</span>
                              <span>₹{grandTotal.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 summer-description-box">
                      <label className="form-label">Description</label>
                      <Editor
                        value={text}
                        onTextChange={(e: any) => setText(e.htmlValue)}
                        style={{ height: "200px" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Amount in Words
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={amountInWords}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Status
                              {requiredFields.Status && (<span className="text-danger ms-1">*</span>)}
                            </label>
                            <CommonSelect
                              className="w-100"
                              options={Status}
                              value={selectedStatus}
                              onChange={(e) => setSelectedStatus(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                            {errors.status && (
                              <small className="text-danger">{errors.status}</small>
                            )}
                          </div>
                        </div>
                      </div>
                  </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSave}
                      disabled={saving}
                    >
                      {saving ? <span className="spinner-border spinner-border-sm me-1" /> : null}
                      Submit
                    </button>
                  </div>
              </form>
              {showDeleteModal && (
                <>
                  <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.4)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Confirm Delete</h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowDeleteModal(false)}
                          />
                        </div>

                        <div className="modal-body">
                          <p>Are you sure you want to delete this product?</p>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setShowDeleteModal(false)}
                          >
                            Cancel
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={confirmDeleteRow}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
    </div>
  );
};

export default AddQuotation;
