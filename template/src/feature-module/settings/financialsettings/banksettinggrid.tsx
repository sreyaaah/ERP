import { useState } from "react";
import { Link } from "react-router-dom";
import AddBankAccount from "../../../core/modals/settings/addbankaccount";
import EditBankAccount from "../../../core/modals/settings/editbankaccount";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";

/* ---------- TYPES ---------- */
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

const BankSettingGrid = () => {
  /* ---------- STATE ---------- */
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    {
      id: 1,
      bankName: "Karur vysya bank",
      accountNumber: "98765432101982",
      accountName: "John Smith",
      branch: "Main Branch",
      ifsc: "KVB0001234",
      status: true,
      isDefault: true,
    },
    {
      id: 2,
      bankName: "Swiss Bank",
      accountNumber: "12345678901796",
      accountName: "Andrew",
      branch: "Zurich",
      ifsc: "SWIS0009876",
      status: true,
      isDefault: false,
    },
    {
      id: 3,
      bankName: "HDFC",
      accountNumber: "55667788991832",
      accountName: "Mathew",
      branch: "Mumbai Central",
      ifsc: "HDFC0004567",
      status: true,
      isDefault: false,
    },
  ]);

  const [selectedBank, setSelectedBank] = useState<BankAccount | null>(null);
  const [bankToDelete, setBankToDelete] = useState<BankAccount | null>(null);

  /* ---------- HELPERS ---------- */
  const maskAccountNumber = (num: string) => {
    return "**** **** " + num.slice(-4);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  /* ---------- OPERATIONS ---------- */
  const handleAddAccount = (data: any) => {
    const newAccount: BankAccount = {
      ...data,
      id: Date.now(),
      status: data.status ?? true,
      isDefault: data.isDefault ?? false,
    };
    if (newAccount.isDefault) {
      setBankAccounts(prev => prev.map(b => ({ ...b, isDefault: false })));
    }
    setBankAccounts(prev => [...prev, newAccount]);
  };

  const handleUpdateAccount = (updated: BankAccount) => {
    let newList = bankAccounts.map(b => (b.id === updated.id ? updated : b));
    if (updated.isDefault) {
      newList = newList.map(b => (b.id === updated.id ? b : { ...b, isDefault: false }));
    }
    setBankAccounts(newList);
    setSelectedBank(null);
  };

  const handleDeleteAccount = () => {
    if (bankToDelete) {
      setBankAccounts(prev => prev.filter(b => b.id !== bankToDelete.id));
      setBankToDelete(null);
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
                {bankAccounts.map((bank) => (
                  <div key={bank.id} className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
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
                ))}
                
                {bankAccounts.length === 0 && (
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
