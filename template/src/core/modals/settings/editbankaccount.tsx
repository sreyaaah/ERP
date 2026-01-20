import React, { useState, useEffect } from "react";

interface BankAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  accountName: string;
  branch: string;
  ifsc: string;
  status: boolean;
  isDefault: boolean;
}

interface EditBankAccountProps {
  bank: BankAccount | null;
  onSave: (bank: BankAccount) => void;
}

const EditBankAccount: React.FC<EditBankAccountProps> = ({ bank, onSave }) => {
  const [form, setForm] = useState<BankAccount | null>(null);

  useEffect(() => {
    setForm(bank);
  }, [bank]);

  if (!form) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => prev ? ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }) : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form) {
      onSave(form);
      document.getElementById("closeEditBank")?.click();
    }
  };

  return (
    <div className="modal fade" id="edit-account">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Edit Bank Account</h4>
            <button
              id="closeEditBank"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Bank Name *</label>
                    <input
                      name="bankName"
                      type="text"
                      className="form-control"
                      value={form.bankName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Account Number *</label>
                    <input
                      name="accountNumber"
                      type="text"
                      className="form-control"
                      value={form.accountNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Account Name *</label>
                    <input
                      name="accountName"
                      type="text"
                      className="form-control"
                      value={form.accountName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Branch *</label>
                    <input
                      name="branch"
                      type="text"
                      className="form-control"
                      value={form.branch}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">IFSC *</label>
                    <input
                      name="ifsc"
                      type="text"
                      className="form-control"
                      value={form.ifsc}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
                    <span className="status-label">Status</span>
                    <input
                      name="status"
                      type="checkbox"
                      id="status_edit"
                      className="check"
                      checked={form.status}
                      onChange={handleChange}
                    />
                    <label htmlFor="status_edit" className="checktoggle" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                    <span className="status-label">Make as default</span>
                    <input
                      name="isDefault"
                      type="checkbox"
                      id="default_edit"
                      className="check"
                      checked={form.isDefault}
                      onChange={handleChange}
                    />
                    <label htmlFor="default_edit" className="checktoggle" />
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

export default EditBankAccount;
