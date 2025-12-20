import { useState } from "react";
import CommonFooter from "../../../components/footer/commonFooter";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import SettingsSideBar from "../settingssidebar";
import { Link } from "react-router-dom";
import { all_routes } from "../../../routes/all_routes";
import { flag03Icon } from "../../../utils/imagepath";
import CommonSelect from "../../../components/select/common-select";

const Languagesetteingsweb = () => {
  const route = all_routes;
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const languageOptions = [
    { value: "selectLanguage", label: "Select Language" },
    { value: "english", label: "English" },
    { value: "arabic", label: "Arabic" },
    { value: "chinese", label: "Chinese" },
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
                <div className="card flex-fill mb-0 w-50">
                  <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h4>Language</h4>
                    <div className="page-btn d-flex align-items-center ms-0">
                      <div className="select-language">
                        <CommonSelect
                          filter={false}
                          value={selectedLanguage}
                          onChange={(e) => setSelectedLanguage(e.value)}
                          options={languageOptions}
                          placeholder="Choose"
                        />
                      </div>
                      <Link
                        to="#"
                        className="btn btn-primary ms-3"
                        data-bs-toggle="modal"
                        data-bs-target="#add-language"
                      >
                        Add Translation
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card table-list-card">
                          <div className="card-body">
                            <div className="table-top">
                              <div className="search-set">
                                <div className="search-input">
                                  <Link to="#" className="btn btn-searchset">
                                    <i className="feather icon-search feather-search" />
                                  </Link>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="back-btn">
                                  <Link
                                    to={route.languagesettings}
                                    className="btn btn-secondary me-3"
                                  >
                                    <i className="feather icon-arrow-left filter-icon me-2" />
                                    Back to Translations{" "}
                                  </Link>
                                </div>
                                <div className="page-btn">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center selected-language"
                                  >
                                    <img
                                      src={flag03Icon}
                                      className="me-2"
                                      alt="Img"
                                    />
                                    Arabic
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="table-responsive no-pagination">
                              <table className="table datatable">
                                <thead className="thead-light">
                                  <tr>
                                    <th className="no-sort">
                                      <label className="checkboxs">
                                        <input
                                          type="checkbox"
                                          id="select-all"
                                        />
                                        <span className="checkmarks" />
                                      </label>
                                    </th>
                                    <th>Module Name</th>
                                    <th>Total</th>
                                    <th>Done</th>
                                    <th>Progress</th>
                                    <th className="no-sort" />
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
                                    <td>Inventory</td>
                                    <td>1620</td>
                                    <td>1296</td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="progress progress-xs"
                                          style={{ width: 120 }}
                                        >
                                          <div
                                            className="progress-bar bg-success rounded"
                                            role="progressbar"
                                            style={{ width: "100%" }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                        <span className="d-inline-flex fs-12 ms-2">
                                          100%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <Link className="me-2 p-2" to="#">
                                          <i className="feather icon-download feather-download" />
                                        </Link>
                                        <Link className="p-2" to="#">
                                          <i className="feather icon-trash-2" />
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
                                    <td>Expense</td>
                                    <td>1620</td>
                                    <td>972</td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="progress progress-xs"
                                          style={{ width: 120 }}
                                        >
                                          <div
                                            className="progress-bar bg-pink rounded"
                                            role="progressbar"
                                            style={{ width: "70%" }}
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                        <span className="d-inline-flex fs-12 ms-2">
                                          70%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <Link className="me-2 p-2" to="#">
                                          <i className="feather icon-download feather-download" />
                                        </Link>
                                        <Link className="p-2" to="#">
                                          <i className="feather icon-trash-2" />
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
                                    <td>Product</td>
                                    <td>1620</td>
                                    <td>810</td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="progress progress-xs"
                                          style={{ width: 120 }}
                                        >
                                          <div
                                            className="progress-bar bg-warning rounded"
                                            role="progressbar"
                                            style={{ width: "40%" }}
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                        <span className="d-inline-flex fs-12 ms-2">
                                          40%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <Link className="me-2 p-2" to="#">
                                          <i className="feather icon-download feather-download" />
                                        </Link>
                                        <Link className="p-2" to="#">
                                          <i className="feather icon-trash-2" />
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
                                    <td>Settings</td>
                                    <td>1620</td>
                                    <td>324</td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="progress progress-xs"
                                          style={{ width: 120 }}
                                        >
                                          <div
                                            className="progress-bar bg-orange rounded"
                                            role="progressbar"
                                            style={{ width: "80%" }}
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          />
                                        </div>
                                        <span className="d-inline-flex fs-12 ms-2">
                                          80%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <Link className="me-2 p-2" to="#">
                                          <i className="feather icon-download feather-download" />
                                        </Link>
                                        <Link className="p-2" to="#">
                                          <i className="feather icon-trash-2" />
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
        <CommonFooter />
      </div>

      {/* Language */}
      <div className="modal fade" id="add-language">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Language Setup</h4>
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
                <div className="card table-list-card">
                  <div className="card-body">
                    <div className="table-top">
                      <div className="search-set">
                        <div className="search-input">
                          <Link to="#" className="btn btn-searchset">
                            <i className="feather icon-search feather-search" />
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="back-btn">
                          <Link
                            to={route.languagesettings}
                            className="btn btn-secondary me-3"
                          >
                            <i className="feather icon-arrow-left filter-icon me-2" />
                            Back to Translations{" "}
                          </Link>
                        </div>
                        <div className="page-btn me-2">
                          <Link
                            to="#"
                            className="d-flex align-items-center selected-language"
                          >
                            <img src={flag03Icon} className="me-2" alt="Img" />
                            Arabic
                          </Link>
                        </div>
                        <div>
                          <span className="d-block fs-10">Progress</span>
                          <div className="d-flex align-items-center">
                            <div
                              className="progress progress-xs"
                              style={{ width: 90 }}
                            >
                              <div
                                className="progress-bar bg-orange rounded"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <span className="d-inline-flex fs-12 ms-2">
                              80%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive no-pagination">
                      <table className="table datatable">
                        <thead className="thead-light">
                          <tr>
                            <th>English</th>
                            <th>Arabic</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Products</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="منتجات"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Expired Products</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="المنتجات منتهية الصلاحية"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Low Stocks</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="مخزونات منخفضة"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="فئة"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Sub Category</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="الفئة الفرعية"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Brand</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="ماركة"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Unit</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="وحدة"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Warranties</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="الضمانات"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Print Barcode</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="طباعة الباركود"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Print QR Code</td>
                            <td>
                              <div>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="طباعة رمز الاستجابة السريعة"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Language */}
    </div>
  );
};

export default Languagesetteingsweb;
