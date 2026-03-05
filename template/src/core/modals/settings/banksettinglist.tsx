import { useState } from "react";
import { type BankAccount } from "../../../feature-module/services/bank.service";

interface BankSettingListProps {
  onAddAccount: (data: Partial<BankAccount>) => void;
}

const BankSettingList: React.FC<BankSettingListProps> = ({ onAddAccount }) => {
  const [form, setForm] = useState<Partial<BankAccount>>({
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

  const handleSave = () => {
    onAddAccount(form);
    // Modal will be closed via data-bs-dismiss on the button or manually if needed
  };

  return (
    <div>
      {/* Add Bank Account */}
      <div className="modal fade" id="add-account">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Add Bank Account</h4>
                  </div>
                  <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-auto me-2">
                    <input
                      type="checkbox"
                      id="status_add"
                      name="status"
                      className="check"
                      checked={form.status}
                      onChange={handleChange}
                    />
                    <label htmlFor="status_add" className="checktoggle">
                      {" "}
                    </label>
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
                <div className="modal-body custom-modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Bank Name <span> *</span>
                          </label>
                          <input
                            type="text"
                            name="bankName"
                            className="form-control"
                            value={form.bankName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Account Number <span> *</span>
                          </label>
                          <input
                            type="text"
                            name="accountNumber"
                            className="form-control"
                            value={form.accountNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Account Name <span> *</span>
                          </label>
                          <input
                            type="text"
                            name="accountName"
                            className="form-control"
                            value={form.accountName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Branch <span> *</span>
                          </label>
                          <input
                            type="text"
                            name="branch"
                            className="form-control"
                            value={form.branch}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            IFSC <span> *</span>
                          </label>
                          <input
                            type="text"
                            name="ifsc"
                            className="form-control"
                            value={form.ifsc}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="status_toggle"
                            name="status"
                            className="check"
                            checked={form.status}
                            onChange={handleChange}
                          />
                          <label htmlFor="status_toggle" className="checktoggle" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Make as default</span>
                          <input
                            type="checkbox"
                            id="default_toggle"
                            name="isDefault"
                            className="check"
                            checked={form.isDefault}
                            onChange={handleChange}
                          />
                          <label htmlFor="default_toggle" className="checktoggle" />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-submit"
                        data-bs-dismiss="modal"
                        onClick={handleSave}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Bank Account */}
    </div>
  );
};

export default BankSettingList;
