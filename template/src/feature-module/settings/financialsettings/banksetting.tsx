import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BankSettingList from "../../../core/modals/settings/banksettinglist";
import EditBankSettingList from "../../../core/modals/settings/editbanksettinglist";
import SettingsSideBar from "../settingssidebar";
import { all_routes } from "../../../routes/all_routes";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CommonSelect from "../../../components/select/common-select";
import { closes } from "../../../utils/imagepath";
import { BankService, type BankAccount } from "../../services/bank.service";
import Swal from "sweetalert2";
import DeleteModal from "../../../components/delete-modal";

const BankSetting = () => {
  const route = all_routes;
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);

  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState<BankAccount | null>(null);
  const [accountToDelete, setAccountToDelete] = useState<BankAccount | null>(null);

  useEffect(() => {
    fetchBankAccounts();
  }, []);

  const fetchBankAccounts = async () => {
    try {
      setLoading(true);
      const res = await BankService.getAllBankAccounts();
      if (res.status) {
        setBankAccounts(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch bank accounts", error);
      Swal.fire("Error", "Failed to load bank accounts", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleAddAccount = async (data: Partial<BankAccount>) => {
    try {
      const res = await BankService.createBankAccount(data);
      if (res.status) {
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
      const res = await BankService.updateBankAccount(updated._id, updated);
      if (res.status) {
        Swal.fire("Success", "Bank account updated successfully", "success");
        fetchBankAccounts();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update bank account", "error");
    }
  };

  const handleDeleteAccount = async () => {
    if (accountToDelete && accountToDelete._id) {
      try {
        const res = await BankService.deleteBankAccount(accountToDelete._id);
        if (res.status) {
          Swal.fire("Deleted!", "Bank account deleted successfully", "success");
          fetchBankAccounts();
          setAccountToDelete(null);
        }
      } catch (error) {
        Swal.fire("Error", "Failed to delete bank account", "error");
      }
    }
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };
  const oldandlatestvalue = [
    { value: "date", label: "Sort by Date" },
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];
  const options = [
    { value: "chooseName", label: "Choose Name" },
    { value: "mathew", label: "Mathew" },
    { value: "johnSmith", label: "John Smith" },
    { value: "andrew", label: "Andrew" },
  ];
  const banklist = [
    { value: "chooseBank", label: "Choose Bank" },
    { value: "hdfc", label: "HDFC" },
    { value: "swissBank", label: "Swiss Bank" },
    { value: "canaraBank", label: "Canara Bank" },
  ];


  return (
    <div>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header settings-pg-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Settings</h4>
                <h6>Manage your settings on portal</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="settings-wrapper d-flex">
                <SettingsSideBar />
                <div className="settings-page-wrap w-50">
                  <div className="setting-title">
                    <h4>Bank Account</h4>
                  </div>
                  <div className="page-header bank-settings justify-content-end">
                    <Link
                      to={route.banksettingslist}
                      className="btn-list me-2 active"
                    >
                      <i className="feather icon-list feather-user" />
                    </Link>
                    <Link to={route.banksettingsgrid} className="btn-grid">
                      <i className="feather icon-grid feather-user" />
                    </Link>
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-added"
                        data-bs-toggle="modal"
                        data-bs-target="#add-account"
                      >
                        <i className="ti ti-circle-plus me-1"></i>
                        Add New Account
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card table-list-card">
                        <div className="card-body">
                          <div className="table-top">
                            <div className="search-set">
                              <div className="search-input">
                                <div className="search-set">
                                  <div className="search-input">
                                    <input
                                      type="text"
                                      placeholder="Search"
                                      className="form-control form-control-sm formsearch"
                                    />
                                    <Link to="#" className="btn btn-searchset">
                                      <i className="feather icon-search feather-search" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="search-path">
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className={`btn btn-filter ${
                                    isFilterVisible ? "setclose" : ""
                                  }`}
                                  id="filter_search"
                                >
                                  <i
                                    className="feather icon-filter filter-icon"
                                    onClick={toggleFilterVisibility}
                                  />
                                  <span onClick={toggleFilterVisibility}>
                                    <img
                                      src={closes}
                                      alt="img"
                                    />
                                  </span>
                                </Link>
                              </div>
                            </div>
                            <div className="form-sort">
                              <i className="feather icon-sliders info-img" />
                              <CommonSelect
                                className="img-select"
                                options={oldandlatestvalue}
                                value={selectedSort}
                                onChange={(e) => setSelectedSort(e.value)}
                                placeholder="Newest"
                                filter={false}
                              />
                            </div>
                          </div>
                          {/* /Filter */}
                          <div
                            className={`card${
                              isFilterVisible ? " visible" : ""
                            }`}
                            id="filter_inputs"
                            style={{
                              display: isFilterVisible ? "block" : "none",
                            }}
                          >
                            <div className="card-body pb-0">
                              <div className="row">
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="input-blocks">
                                    <i className="feather icon-user info-img"></i>
                                    <CommonSelect
                                      options={options}
                                      value={selectedName}
                                      onChange={(e) => setSelectedName(e.value)}
                                      placeholder="Choose a Name"
                                      filter={false}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="input-blocks">
                                    <i className="feather icon-edit info-img" />
                                    <CommonSelect
                                      options={banklist}
                                      value={selectedBank}
                                      onChange={(e) => setSelectedBank(e.value)}
                                      placeholder="Choose a Bank"
                                      filter={false}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12 ms-auto">
                                  <div className="input-blocks">
                                    <Link
                                      to="#"
                                      className="btn btn-filters ms-auto"
                                    >
                                      {" "}
                                      <i className="feather icon-search feather-search" />{" "}
                                      Search{" "}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Filter */}
                          <div className="table-responsive">
                            <table className="table  datanew">
                              <thead>
                                <tr>
                                  <th className="no-sort">
                                    <label className="checkboxs">
                                      <input type="checkbox" id="select-all" />
                                      <span className="checkmarks" />
                                    </label>
                                  </th>
                                  <th>Name</th>
                                  <th>Bank</th>
                                  <th>Branch</th>
                                  <th>Account No</th>
                                  <th>IFSC</th>
                                  <th>Created On</th>
                                  <th className="no-sort">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {loading ? (
                                  <tr>
                                    <td colSpan={8} className="text-center py-5">
                                      <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                      </div>
                                    </td>
                                  </tr>
                                ) : (
                                  bankAccounts.map((account) => (
                                    <tr key={account._id}>
                                      <td>
                                        <label className="checkboxs">
                                          <input type="checkbox" />
                                          <span className="checkmarks" />
                                        </label>
                                      </td>
                                      <td>{account.accountName}</td>
                                      <td>{account.bankName}</td>
                                      <td>{account.branch}</td>
                                      <td>{account.accountNumber}</td>
                                      <td>{account.ifsc}</td>
                                      <td>{account.createdAt ? new Date(account.createdAt).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      }) : "-"}</td>
                                      <td className="action-table-data">
                                        <div className="edit-delete-action">
                                          <Link
                                            className="me-2 p-2"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-account"
                                            onClick={() => setSelectedAccount(account)}
                                          >
                                            <i className="ti ti-edit" />
                                          </Link>
                                          <Link
                                            className="confirm-text p-2"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-modal"
                                            onClick={() => setAccountToDelete(account)}
                                          >
                                            <i className="ti ti-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  ))
                                )}

                                {!loading && bankAccounts.length === 0 && (
                                  <tr>
                                    <td colSpan={8} className="text-center">
                                      No bank accounts found
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BankSettingList onAddAccount={handleAddAccount} />
      <EditBankSettingList 
        account={selectedAccount} 
        onSaveAccount={handleUpdateAccount} 
      />
      <DeleteModal onConfirm={handleDeleteAccount} />
    </div>
  );
};

export default BankSetting;
