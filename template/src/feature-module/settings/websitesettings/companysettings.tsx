import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../../components/footer/commonFooter";
import { companyLogo, logoSmall, whiteCompanyLogo } from "../../../utils/imagepath";
import CommonSelect from "../../../components/select/common-select";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import SettingsSideBar from "../settingssidebar";

const CompanySettings = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const Country = [
    { label: "USA", value: "1" },
    { label: "India", value: "2" },
    { label: "French", value: "3" },
    { label: "Australia", value: "4" },
  ];
  const State = [
    { label: "Alaska", value: "1" },
    { label: "Mexico", value: "2" },
    { label: "Tasmania", value: "3" },
  ];
  const City = [
    { label: "Anchorage", value: "1" },
    { label: "Tijuana", value: "2" },
    { label: "Hobart", value: "3" },
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
                <div className="card flex-fill mb-0">
                  <div className="card-header">
                    <h4 className="fs-18 fw-bold">Company Settings</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="border-bottom mb-3">
                        <div className="card-title-head">
                          <h6 className="fs-16 fw-bold mb-2">
                            <span className="fs-16 me-2">
                              <i className="ti ti-building" />
                            </span>
                            Company Information
                          </h6>
                        </div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-md-4">
                            <div className="mb-3">
                              <label className="form-label">
                                Company Name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-4">
                            <div className="mb-3">
                              <label className="form-label">
                                Company Email Address{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="email" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">
                                Phone Number{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">
                                Fax <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label className="form-label">
                                Website <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3 pb-3">
                        <div className="card-title-head">
                          <h6 className="fs-16 fw-bold mb-2">
                            <span className="fs-16 me-2">
                              <i className="ti ti-photo" />
                            </span>
                            Company Images
                          </h6>
                        </div>
                        <div className="row align-items-center gy-3">
                          <div className="col-xl-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="logo-info">
                                  <h6 className="fw-medium">Company Icon</h6>
                                  <p>Upload Icon of your Company</p>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="profile-pic-upload mb-0 justify-content-lg-end">
                                  <div className="new-employee-field">
                                    <div className="mb-0">
                                      <div className="image-upload mb-0">
                                        <input type="file" />
                                        <div className="image-uploads">
                                          <h4>
                                            <i className="ti ti-upload me-1" />
                                            Upload Image
                                          </h4>
                                        </div>
                                      </div>
                                      <span className="mt-1">
                                        Recommended size is 450px x 450px. Max
                                        size 5mb.
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3">
                            <div className="new-logo ms-xl-auto">
                              <Link to="#">
                                <img src={logoSmall} alt="Logo" />
                                <span>
                                  <i className="ti ti-x" />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xl-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="logo-info">
                                  <h6 className="fw-medium">Favicon</h6>
                                  <p>Upload Favicon of your Company</p>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="profile-pic-upload mb-0 justify-content-lg-end">
                                  <div className="new-employee-field">
                                    <div className="mb-0">
                                      <div className="image-upload mb-0">
                                        <input type="file" />
                                        <div className="image-uploads">
                                          <h4>
                                            <i className="ti ti-upload me-1" />
                                            Upload Image
                                          </h4>
                                        </div>
                                      </div>
                                      <span className="mt-1">
                                        Recommended size is 450px x 450px. Max
                                        size 5mb.
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3">
                            <div className="new-logo ms-xl-auto">
                              <Link to="#">
                                <img src={logoSmall} alt="Logo" />
                                <span>
                                  <i className="ti ti-x" />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xl-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="logo-info">
                                  <h6 className="fw-medium">Company Logo</h6>
                                  <p>Upload Logo of your Company</p>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="profile-pic-upload mb-0 justify-content-lg-end">
                                  <div className="new-employee-field">
                                    <div className="mb-0">
                                      <div className="image-upload mb-0">
                                        <input type="file" />
                                        <div className="image-uploads">
                                          <h4>
                                            <i className="ti ti-upload me-1" />
                                            Upload Image
                                          </h4>
                                        </div>
                                      </div>
                                      <span className="mt-1">
                                        Recommended size is 450px x 450px. Max
                                        size 5mb.
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3">
                            <div className="new-logo ms-xl-auto">
                              <Link to="#">
                                <img src={companyLogo} alt="Logo" />
                                <span>
                                  <i className="ti ti-x" />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xl-9">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-4">
                                <div className="logo-info">
                                  <h6 className="fw-medium">
                                    Company Dark Logo
                                  </h6>
                                  <p>Upload Logo of your Company</p>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="profile-pic-upload mb-0 justify-content-lg-end">
                                  <div className="new-employee-field">
                                    <div className="mb-0">
                                      <div className="image-upload mb-0">
                                        <input type="file" />
                                        <div className="image-uploads">
                                          <h4>
                                            <i className="ti ti-upload me-1" />
                                            Upload Image
                                          </h4>
                                        </div>
                                      </div>
                                      <span className="mt-1">
                                        Recommended size is 450px x 450px. Max
                                        size 5mb.
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3">
                            <div className="new-logo ms-xl-auto">
                              <Link to="#" className="bg-secondary">
                                <img src={whiteCompanyLogo} alt="Logo" />
                                <span>
                                  <i className="ti ti-x" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="company-address">
                        <div className="card-title-head">
                          <h6 className="fs-16 fw-bold mb-2">
                            <span className="fs-16 me-2">
                              <i className="ti ti-map-pin" />
                            </span>
                            Address Information
                          </h6>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Address <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Country <span className="text-danger">*</span>
                              </label>
                              <CommonSelect
                                options={Country}
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.value)}
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                State <span className="text-danger">*</span>
                              </label>
                              <CommonSelect
                                options={State}
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.value)}
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                City <span className="text-danger">*</span>
                              </label>
                              <CommonSelect
                                options={City}
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.value)}
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Postal Code{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end settings-bottom-btn mt-0">
                        <button
                          type="button"
                          className="btn btn-secondary me-2"
                        >
                          Cancel
                        </button>
                        <Link to="#" className="btn btn-primary">
                          Save Changes
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default CompanySettings;
