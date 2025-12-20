import { useState } from "react";
import { Link } from "react-router-dom";
import BankSettingList from "../../../core/modals/settings/banksettinglist";
import EditBankSettingList from "../../../core/modals/settings/editbanksettinglist";
import SettingsSideBar from "../settingssidebar";
import { all_routes } from "../../../routes/all_routes";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CommonSelect from "../../../components/select/common-select";
import { closes } from "../../../utils/imagepath";

const BankSetting = () => {
  const route = all_routes;
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);

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
                                <tr>
                                  <td>
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                    </label>
                                  </td>
                                  <td>Mathew</td>
                                  <td>HDFC</td>
                                  <td>Bringham</td>
                                  <td>**** **** 1832</td>
                                  <td>124547</td>
                                  <td>12 Jul 2023</td>
                                  <td className="action-table-data">
                                    <div className="edit-delete-action">
                                      <Link
                                        className="me-2 p-2"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-account"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link
                                        className="confirm-text p-2"
                                        to="#"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                    </label>
                                  </td>
                                  <td>Toby Lando</td>
                                  <td>SBI</td>
                                  <td>Leicester</td>
                                  <td>**** **** 1596</td>
                                  <td>156723</td>
                                  <td>17 Aug 2023</td>
                                  <td className="action-table-data">
                                    <div className="edit-delete-action">
                                      <Link
                                        className="me-2 p-2"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-account"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link
                                        className="confirm-text p-2"
                                        to="#"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                    </label>
                                  </td>
                                  <td>John Smith</td>
                                  <td>KVB</td>
                                  <td>Bristol</td>
                                  <td>**** **** 1982</td>
                                  <td>198367</td>
                                  <td>08 Sep 2023</td>
                                  <td className="action-table-data">
                                    <div className="edit-delete-action">
                                      <Link
                                        className="me-2 p-2"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-account"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link
                                        className="confirm-text p-2"
                                        to="#"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                    </label>
                                  </td>
                                  <td>Andrew</td>
                                  <td>Swiss Bank</td>
                                  <td>Nottingham</td>
                                  <td>**** **** 1796</td>
                                  <td>186730</td>
                                  <td>21 Oct 2023</td>
                                  <td className="action-table-data">
                                    <div className="edit-delete-action">
                                      <Link
                                        className="me-2 p-2"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-account"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link
                                        className="confirm-text p-2"
                                        to="#"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                    </label>
                                  </td>
                                  <td>Robert</td>
                                  <td>Canara Bank</td>
                                  <td>Norwich</td>
                                  <td>**** **** 1645</td>
                                  <td>146026</td>
                                  <td>03 Nov 2023</td>
                                  <td className="action-table-data">
                                    <div className="edit-delete-action">
                                      <Link
                                        className="me-2 p-2"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-account"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link
                                        className="confirm-text p-2"
                                        to="#"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
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
      <BankSettingList />
      <EditBankSettingList />
    </div>
  );
};

export default BankSetting;
