import { useState } from "react";
import { Link } from "react-router-dom";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import SettingsSideBar from "../settingssidebar";
import CommonSelect from "../../../components/select/common-select";

const GeneralSettings = () => {
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
    <>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Settings</h4>
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
                    <h4 className="fs-18 fw-bold">Profile</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="card-title-head">
                        <h6 className="fs-16 fw-bold mb-3">
                          <span className="fs-16 me-2">
                            <i className="ti ti-user" />
                          </span>
                          Basic Information
                        </h6>
                      </div>
                      <div className="profile-pic-upload">
                        <div className="profile-pic">
                          <span>
                            <i className="ti ti-circle-plus mb-1 fs-16" /> Add
                            Image
                          </span>
                        </div>
                        <div className="new-employee-field">
                          <div className="mb-0">
                            <div className="image-upload mb-0">
                              <input type="file" />
                              <div className="image-uploads">
                                <h4>Upload Image</h4>
                              </div>
                            </div>
                            <span className="fs-13 fw-medium mt-2">
                              Upload an image below 2 MB, Accepted File format
                              JPG, PNG
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">
                              User Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
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
                              Email <span className="text-danger">*</span>
                            </label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="card-title-head">
                        <h6 className="fs-16 fw-bold mb-3">
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
                            <input type="email" className="form-control" />
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
                              Postal Code <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
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
    </>
  );
};

export default GeneralSettings;
