import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddBankAccount from "../../../core/modals/settings/addbankaccount";
import EditBankAccount from "../../../core/modals/settings/editbankaccount";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";
import { BankService, type BankAccount } from "../../services/bank.service";
import Swal from "sweetalert2";


const BankSettingGrid = () => {
  /* ---------- STATE ---------- */
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBank, setSelectedBank] = useState<BankAccount | null>(null);
  const [bankToDelete, setBankToDelete] = useState<BankAccount | null>(null);

  /* ---------- FETCH DATA ---------- */
  useEffect(() => {
    fetchBankAccounts();
  }, []);

  const fetchBankAccounts = async () => {
    try {
      setLoading(true);
      const response = await BankService.getAllBankAccounts();
      if (response.status) {
        setBankAccounts(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch bank accounts", error);
      Swal.fire("Error", "Failed to load bank accounts", "error");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- HELPERS ---------- */
  const maskAccountNumber = (num: string) => {
    return "**** **** " + num.slice(-4);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    Swal.fire({
      title: "Copied!",
      text: "Account number copied to clipboard",
      icon: "success",
      timer: 2000,
      showConfirmButton: false
    });
  };

  /* ---------- OPERATIONS ---------- */
  const handleAddAccount = async (data: any) => {
    try {
      const response = await BankService.createBankAccount(data);
      if (response.status) {
        Swal.fire("Success", "Bank account added successfully", "success");
        fetchBankAccounts();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add bank account", "error");
    }
  };

  const handleUpdateAccount = async (updated: BankAccount) => {
    try {
      if (!updated._id) return;
      const response = await BankService.updateBankAccount(updated._id, updated);
      if (response.status) {
        Swal.fire("Success", "Bank account updated successfully", "success");
        fetchBankAccounts();
        setSelectedBank(null);
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update bank account", "error");
    }
  };

  const handleDeleteAccount = async () => {
    if (bankToDelete && bankToDelete._id) {
      try {
        const response = await BankService.deleteBankAccount(bankToDelete._id);
        if (response.status) {
          Swal.fire("Deleted!", "Bank account deleted successfully", "success");
          fetchBankAccounts();
          setBankToDelete(null);
        }
      } catch (error) {
        Swal.fire("Error", "Failed to delete bank account", "error");
      }
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content settings-content">
        <div className="page-header settings-pg-header">
          <div className="page-title">
            <h4>Settings</h4>
            <h6>Manage your settings on portal</h6>
          </div>
          <ul className="table-top-head">
            <RefreshIcon />
            <CollapesIcon />
          </ul>
        </div>

        <div className="settings-wrapper d-flex">
          <SettingsSideBar />

          <div className="card flex-fill mb-0 w-50">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4>Bank Account</h4>
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-account"
              >
                <i className="ti ti-circle-plus me-1" />
                Add New Account
              </Link>
            </div>

            <div className="card-body pb-0">
              <div className="row">
                {loading ? (
                  <div className="col-12 text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  bankAccounts.map((bank) => (
                    <div key={bank._id} className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                    <div className={`card bank-box ${bank.isDefault ? "active" : ""}`} 
                         style={{ border: bank.isDefault ? '2px solid #ffc107' : '1px solid #e8ebf3', borderRadius: '12px' }}>
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-md bg-light rounded-circle me-2 text-primary fw-bold">
                              {bank.bankName.charAt(0)}
                            </div>
                            <div>
                              <h5 className="mb-0">{bank.bankName}</h5>
                              <span className={`badge ${bank.status ? "bg-success-transparent" : "bg-danger-transparent"} fs-10`}>
                                {bank.status ? "Active" : "Inactive"}
                              </span>
                            </div>
                          </div>
                          {bank.isDefault && (
                            <span className="badge bg-warning text-dark">Default</span>
                          )}
                        </div>

                        <div className="mb-3 p-2 bg-light rounded d-flex justify-content-between align-items-center">
                          <div>
                            <p className="text-muted mb-0 fs-12">Account Number</p>
                            <h6 className="mb-0">{maskAccountNumber(bank.accountNumber)}</h6>
                          </div>
                          <button 
                            className="btn btn-sm btn-white border-0 text-primary"
                            onClick={() => handleCopy(bank.accountNumber)}
                            title="Copy Account Number"
                          >
                            <i className="ti ti-copy" />
                          </button>
                        </div>

                        <div className="row mb-3">
                          <div className="col-6">
                            <span className="fs-12 text-muted d-block">Holder Name</span>
                            <h6 className="fs-13 mb-0">{bank.accountName}</h6>
                          </div>
                          <div className="col-6">
                            <span className="fs-12 text-muted d-block">IFSC</span>
                            <h6 className="fs-13 mb-0">{bank.ifsc}</h6>
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                          <div className="fs-12">
                            <span className="text-muted">Branch: </span>
                            <span className="fw-medium">{bank.branch}</span>
                          </div>
                          <div className="hstack gap-2">
                            <Link
                              to="#"
                              className="btn btn-icon btn-sm btn-info-light rounded-circle"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-account"
                              onClick={() => setSelectedBank(bank)}
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-icon btn-sm btn-danger-light rounded-circle"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                              onClick={() => setBankToDelete(bank)}
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  ))
                )}
                
                {!loading && bankAccounts.length === 0 && (
                  <div className="col-12 text-center py-5">
                    <img src="/assets/img/no-data.png" alt="No data" style={{ width: '120px' }} className="mb-3" />
                    <h5>No Bank Accounts Found</h5>
                    <p className="text-muted">Add your first bank account to get started</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />

      {/* MODALS */}
      <AddBankAccount onAdd={handleAddAccount} />
      <EditBankAccount bank={selectedBank} onSave={handleUpdateAccount} />
      <DeleteModal onConfirm={handleDeleteAccount} />
    </div>
  );
};

export default BankSettingGrid;
