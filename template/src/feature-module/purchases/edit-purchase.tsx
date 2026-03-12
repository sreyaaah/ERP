import { useState, useRef, useEffect } from "react";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import CommonSelect from "../../components/select/common-select";
import { TaxService } from "../services/tax.service";
import { PurchaseService, type PurchaseData } from "../services/purchase.service";

interface EditPurchaseProps {
    purchase: PurchaseData | null;
    onSuccess?: () => void;
}

const EditPurchase = ({ purchase, onSuccess }: EditPurchaseProps) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [reference, setReference] = useState("");
  const [orderTax, setOrderTax] = useState("");
  const [discount, setDiscount] = useState("");
  const [shipping, setShipping] = useState("");
  const [grandTotal, setGrandTotal] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [taxes, setTaxes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleNumericChange = (setter: (val: string) => void, fieldName: string, value: string) => {
    // Only allow numbers and one decimal point
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
      setDiscount(purchase.discount?.toString() || "");
      setShipping(purchase.shipping?.toString() || "");
      setGrandTotal(purchase.grandTotal?.toString() || "");
      setPaidAmount(purchase.paidAmount?.toString() || "");
    }
  }, [purchase]);

  useEffect(() => {
    const fetchTaxes = async () => {
      try {
        const res = await TaxService.getAllTaxes();
        if (res.status && Array.isArray(res.data)) {
          const options = res.data
            .filter(t => t.status)
            .map(t => ({
              label: t.name,
              value: t.rate.toString()
            }));
          setTaxes([{ label: "Select Tax", value: "" }, ...options]);
        }
      } catch (err) {
        console.error("Error fetching taxes:", err);
      }
    };
    fetchTaxes();
  }, []);

  const statusOptions = [
    { label: "Select", value: "" },
    { label: "Received", value: "received" },
    { label: "Pending", value: "pending" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSupplier || orderTax === "" || !grandTotal) {
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
            paidAmount: Number(paidAmount) || 0
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
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "500px" }}>
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
              <div className="mb-3">
                <label className="form-label fw-medium mb-1">
                  Supplier Name <span className="text-danger">*</span>
                </label>
                <input 
                  type="text"
                  className="form-control"
                  value={selectedSupplier}
                  onChange={(e) => setSelectedSupplier(e.target.value)}
                  placeholder="Enter supplier name"
                  style={{ height: '45px', borderRadius: '8px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-medium mb-1">
                  Date
                </label>
                <div className="calender-input">
                  <CommonDatePicker
                    value={date}
                    onChange={setDate}
                    className="w-100"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-medium mb-1">
                  Reference
                </label>
                <input 
                   type="text" 
                   className="form-control" 
                   value={reference}
                   onChange={(e) => setReference(e.target.value)}
                   placeholder="Enter reference number"
                   style={{ height: '45px', borderRadius: '8px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-medium mb-1">
                  Status
                </label>
                <CommonSelect
                  className="w-100"
                  options={statusOptions}
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.value)}
                  placeholder="Select status"
                  filter={false}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-medium mb-1">Order Tax <span className="text-danger">*</span></label>
                <CommonSelect
                  className="w-100"
                  options={taxes}
                  value={orderTax}
                  onChange={(e) => setOrderTax(e.value)}
                  placeholder="Select Tax"
                  filter={false}
                />
              </div>

              <div className="row g-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label fw-medium mb-1">Discount</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="0" 
                      value={discount}
                      inputMode="decimal"
                      onChange={(e) => handleNumericChange(setDiscount, "discount", e.target.value)}
                      style={{ height: '45px', borderRadius: '8px' }} 
                    />
                    {errors.discount && <div className="text-danger fs-11 mt-1">{errors.discount}</div>}
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label fw-medium mb-1">Shipping</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="0" 
                      value={shipping}
                      inputMode="decimal"
                      onChange={(e) => handleNumericChange(setShipping, "shipping", e.target.value)}
                      style={{ height: '45px', borderRadius: '8px' }} 
                    />
                    {errors.shipping && <div className="text-danger fs-11 mt-1">{errors.shipping}</div>}
                  </div>
                </div>
              </div>

              <div className="row g-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label fw-medium mb-1">
                      Grand Total <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="0" 
                      value={grandTotal}
                      inputMode="decimal"
                      onChange={(e) => handleNumericChange(setGrandTotal, "grandTotal", e.target.value)}
                      style={{ height: '45px', borderRadius: '8px' }} 
                    />
                    {errors.grandTotal && <div className="text-danger fs-11 mt-1">{errors.grandTotal}</div>}
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label fw-medium mb-1">Amount Paid</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="0" 
                      value={paidAmount}
                      inputMode="decimal"
                      onChange={(e) => handleNumericChange(setPaidAmount, "paidAmount", e.target.value)}
                      style={{ height: '45px', borderRadius: '8px' }} 
                    />
                    {errors.paidAmount && <div className="text-danger fs-11 mt-1">{errors.paidAmount}</div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 justify-content-end pb-5 pt-3 px-4">
                <button
                  type="button"
                  className="btn btn-cancel-dark me-3"
                  data-bs-dismiss="modal"
                  style={{ minWidth: '120px', height: '45px', borderRadius: '8px', backgroundColor: '#00263E', color: 'white' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-orange-primary"
                  disabled={loading}
                  style={{ minWidth: '160px', height: '45px', borderRadius: '8px', backgroundColor: '#FE9F43', color: 'white', border: 'none' }}
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
