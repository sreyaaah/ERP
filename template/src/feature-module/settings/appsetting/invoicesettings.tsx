import { useState } from "react";
import { Link } from "react-router-dom";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import { logoSmallPng } from "../../../utils/imagepath";
import CommonSelect from "../../../components/select/common-select";
import CommonFooter from "../../../components/footer/commonFooter";

const InvoiceSettings = () => {
  const [selectedDue, setSelectedDue] = useState(null);
  const [selectedRoundoff, setSelectedRoundoff] = useState(null);
  const listofnumbers = [
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
  ];
  const roundoff = [{ value: "Round Off Up", label: "Round Off Up" }];

  return (
    <>
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
                  <form>
                    <div className="card-header">
                      <h4>Invoice Settings</h4>
                    </div>
                    <div className="card-body ">
                      <ul className="logo-company">
                        <li>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="logo-info me-0 mb-3 mb-md-0">
                                <h6>Invoice Logo</h6>
                                <p>
                                  Upload Logo of your Company to display in
                                  Invoice
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="profile-pic-upload mb-0 me-0">
                                <div className="new-employee-field">
                                  <div className="mb-3 mb-md-0">
                                    <div className="image-upload mb-0">
                                      <input type="file" />
                                      <div className="image-uploads">
                                        <h4>
                                          <i className="feather icon-upload"  />
                                          Upload Photo
                                        </h4>
                                      </div>
                                    </div>
                                    <span>
                                      For better preview recommended size is
                                      450px x 450px. Max size 5mb.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="new-logo ms-auto">
                                <Link to="#">
                                  <img src={logoSmallPng} alt="Logo" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="localization-info">
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>Invoice Prefix</h6>
                              <p>Add prefix to your invoice</p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="localization-select">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="INV -"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>Invoice Due</h6>
                              <p>Select due date to display in Invoice</p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="localization-select d-flex align-items-center fixed-width">
                              <CommonSelect
                                filter={false}
                                options={listofnumbers}
                                value={selectedDue}
                                onChange={(e) => setSelectedDue(e.value)}
                                placeholder="Choose"
                              />
                              <span className="ms-2">Days</span>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>Invoice Round Off</h6>
                              <p>Value Roundoff in Invoice</p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="localization-select d-flex align-items-center width-custom">
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center me-3">
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
                              <CommonSelect
                                filter={false}
                                options={roundoff}
                                value={selectedRoundoff}
                                onChange={(e) => setSelectedRoundoff(e.value)}
                                placeholder="Choose"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>Show Company Details</h6>
                              <p>Show / Hide Company Details in Invoice</p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="localization-select d-flex align-items-center">
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center me-3">
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
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>Invoice Header Terms</h6>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="mb-3">
                              <textarea
                                rows={4}
                                className="form-control"
                                placeholder="Type your message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>Invoice Footer Terms</h6>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="mb-3">
                              <textarea
                                rows={4}
                                className="form-control"
                                placeholder="Type your message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-end">
                        <button
                          type="button"
                          className="btn btn-secondary me-2"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter/>
      </div>
    </>
  );
};

export default InvoiceSettings;
