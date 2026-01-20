import React, { useState } from "react";

interface BankAccountForm {
  bankName: string;
  accountNumber: string;
  accountName: string;
  branch: string;
  ifsc: string;
  status: boolean;
  isDefault: boolean;
}

interface AddBankAccountProps {
  onAdd: (data: BankAccountForm) => void;
}

const AddBankAccount: React.FC<AddBankAccountProps> = ({ onAdd }) => {
  const [form, setForm] = useState<BankAccountForm>({
    bankName: "",
    accountNumber: "",
    accountName: "",
    branch: "",
    ifsc: "",
    status: true,
    isDefault: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.bankName || !form.accountNumber) return;
    onAdd(form);
    setForm({
      bankName: "",
      accountNumber: "",
      accountName: "",
      branch: "",
      ifsc: "",
      status: true,
      isDefault: false,
    });
    document.getElementById("closeAddBank")?.click();
  };

  return (
    <div className="modal fade" id="add-account">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Add Bank Account</h4>
            <button
              id="closeAddBank"
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
                      id="status_add"
                      className="check"
                      checked={form.status}
                      onChange={handleChange}
                    />
                    <label htmlFor="status_add" className="checktoggle" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                    <span className="status-label">Make as default</span>
                    <input
                      name="isDefault"
                      type="checkbox"
                      id="default_add"
                      className="check"
                      checked={form.isDefault}
                      onChange={handleChange}
                    />
                    <label htmlFor="default_add" className="checktoggle" />
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBankAccount;
