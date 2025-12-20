import { useState } from "react";
import { Link } from "react-router-dom";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import {
  flag01Icon,
  flag02Icon,
  flag03Icon,
  flag04Icon,
} from "../../../utils/imagepath";
import CommonSelect from "../../../components/select/common-select";

const LanguageSettings = () => {
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
                          options={languageOptions}
                          value={selectedLanguage}
                          onChange={(e) => setSelectedLanguage(e.value)}
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
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card table-list-card">
                          <div className="card-body language-search">
                            <div className="table-top">
                              <div className="search-set">
                                <div className="search-input">
                                  <span className="btn-searchset">
                                    <i className="ti ti-search fs-14 feather-search" />
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="search"
                                  />
                                </div>
                              </div>
                              <div className="search-path">
                                <div className="d-flex align-items-center">
                                  <Link className="btn btn-secondary" to="#">
                                    <i className="feather icon-filter filter-icon" />
                                    Import Sample
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
                                    <th>Language</th>
                                    <th>Code</th>
                                    <th>RTL</th>
                                    <th>Default</th>
                                    <th>Total</th>
                                    <th>Done</th>
                                    <th>Progress</th>
                                    <th>Status</th>
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
                                    <td>
                                      <div className="language-name d-flex align-items-center">
                                        <img
                                          src={flag01Icon}
                                          className="me-2"
                                          alt="Img"
                                        />
                                        English
                                      </div>
                                    </td>
                                    <td>en</td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="user1"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="user1"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="users1"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="users1"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td>2145</td>
                                    <td>1815</td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="circle-progress"
                                          data-value={80}
                                        >
                                          <span className="progress-left">
                                            <span className="progress-bar border-warning" />
                                          </span>
                                          <span className="progress-right">
                                            <span className="progress-bar border-warning" />
                                          </span>
                                        </div>
                                        <div className="progress-value ms-2">
                                          80%
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status1"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="status1"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <Link
                                          to={route.languagesettingsweb}
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          Web
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          App
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          Admin
                                        </Link>
                                        <Link
                                          to="#"
                                          className="me-2 language-import"
                                        >
                                          <i className="feather icon-download  feather-download" />
                                        </Link>
                                        <Link to="#">
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
                                    <td>
                                      <div className="language-name d-flex align-items-center">
                                        <img
                                          src={flag02Icon}
                                          className="me-2"
                                          alt="Img"
                                        />
                                        German
                                      </div>
                                    </td>
                                    <td>Ar</td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="user2"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="user2"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="users2"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="users2"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td>2045</td>
                                    <td>2045</td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="circle-progress"
                                          data-value={70}
                                        >
                                          <span className="progress-left">
                                            <span className="progress-bar border-cyan" />
                                          </span>
                                          <span className="progress-right">
                                            <span className="progress-bar border-cyan" />
                                          </span>
                                        </div>
                                        <div className="progress-value ms-2">
                                          70%
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status2"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="status2"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <Link
                                          to={route.languagesettingsweb}
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          Web
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          App
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          Admin
                                        </Link>
                                        <Link
                                          to="#"
                                          className="me-2 language-import"
                                        >
                                          <i className="feather icon-download  feather-download" />
                                        </Link>
                                        <Link to="#">
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
                                    <td>
                                      <div className="language-name d-flex align-items-center">
                                        <img
                                          src={flag03Icon}
                                          className="me-2"
                                          alt="Img"
                                        />
                                        Arabic
                                      </div>
                                    </td>
                                    <td>zh</td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="user3"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="user3"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="users3"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="users3"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td>2245</td>
                                    <td>295</td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="circle-progress"
                                          data-value={50}
                                        >
                                          <span className="progress-left">
                                            <span className="progress-bar border-purple" />
                                          </span>
                                          <span className="progress-right">
                                            <span className="progress-bar border-purple" />
                                          </span>
                                        </div>
                                        <div className="progress-value ms-2">
                                          50%
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status3"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="status3"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <Link
                                          to={route.languagesettingsweb}
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          Web
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          App
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          Admin
                                        </Link>
                                        <Link
                                          to="#"
                                          className="me-2 language-import"
                                        >
                                          <i className="feather icon-download  feather-download" />
                                        </Link>
                                        <Link to="#">
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
                                    <td>
                                      <div className="language-name d-flex align-items-center">
                                        <img
                                          src={flag04Icon}
                                          className="me-2"
                                          alt="Img"
                                        />
                                        French
                                      </div>
                                    </td>
                                    <td>hi</td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="user4"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="user4"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="users4"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="users4"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td>2535</td>
                                    <td>1145</td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="circle-progress"
                                          data-value={30}
                                        >
                                          <span className="progress-left">
                                            <span className="progress-bar border-danger" />
                                          </span>
                                          <span className="progress-right">
                                            <span className="progress-bar border-danger" />
                                          </span>
                                        </div>
                                        <div className="progress-value ms-2">
                                          30%
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status4"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="status4"
                                          className="checktoggle"
                                        />
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <Link
                                          to={route.languagesettingsweb}
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          Web
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          App
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn border text-dark bg-white me-2"
                                        >
                                          Admin
                                        </Link>
                                        <Link
                                          to="#"
                                          className="me-2 language-import"
                                        >
                                          <i className="feather icon-download  feather-download" />
                                        </Link>
                                        <Link to="#">
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
      <>
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
                  <div className="card">
                    <div className="card-body">
                      <div className="table-top">
                        <div className="search-set">
                          <div className="search-input">
                            <span className="btn-searchset">
                              <i className="ti ti-search fs-14 feather-search" />
                            </span>
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
                              <img
                                src={flag03Icon}
                                className="me-2"
                                alt="Img"
                              />
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
                      <div className="table-responsive">
                        <table className="table border">
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
      </>
    </div>
  );
};

export default LanguageSettings;
