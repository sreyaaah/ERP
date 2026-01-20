import React, { useState, useEffect } from "react";

interface TaxRate {
  id: number;
  name: string;
  type: "GST" | "VAT" | "CGST" | "SGST" | "IGST";
  rate: number;
  createdOn: string;
}

interface EditTaxRatesProps {
  tax: TaxRate | null;
  onSave: (tax: TaxRate) => void;
}

const EditTaxRates: React.FC<EditTaxRatesProps> = ({ tax, onSave }) => {
  const [form, setForm] = useState<TaxRate | null>(null);

  useEffect(() => {
    setForm(tax);
  }, [tax]);

  if (!form) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => prev ? ({
      ...prev,
      [name]: name === "rate" ? Number(value) : value,
    }) : null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (form) {
      onSave(form);
      document.getElementById("closeEditTax")?.click();
    }
  };

  return (
    <div className="modal fade" id="edit-tax">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Edit Tax Rates</h4>
            <button
              id="closeEditTax"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <form onSubmit={handleSave}>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Name *</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Tax Type *</label>
                    <select
                      name="type"
                      className="form-select"
                      value={form.type}
                      onChange={handleChange}
                    >
                      <option value="GST">GST</option>
                      <option value="VAT">VAT</option>
                      <option value="CGST">CGST</option>
                      <option value="SGST">SGST</option>
                      <option value="IGST">IGST</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-0">
                    <label className="form-label">Tax Rate % *</label>
                    <input
                      name="rate"
                      type="number"
                      className="form-control"
                      value={form.rate}
                      onChange={handleChange}
                      required
                    />
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
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaxRates;
