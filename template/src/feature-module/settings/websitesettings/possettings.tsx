import { useState } from "react";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import CommonSelect from "../../../components/select/common-select";

const PosSettings = () => {
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const posprinter = [
    { value: "A4", label: "A4" },
    { value: "A3", label: "A3" },
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
                  <form>
                    <div className="card-header">
                      <h4>POS Settings</h4>
                    </div>
                    <div className="card-body">
                      <div className="localization-info">
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>POS Printer</h6>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="localization-select">
                              <CommonSelect
                                filter={false}
                                options={posprinter}
                                placeholder="Choose"
                                value={selectedPrinter}
                                onChange={(e) => setSelectedPrinter(e.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>Payment Method</h6>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="localization-select pos-payment-method d-flex align-items-center mb-0 w-100">
                              <div className="custom-control custom-checkbox">
                                <label className="checkboxs mb-0 pb-0 line-height-1">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  COD
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <label className="checkboxs mb-0 pb-0 line-height-1">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  Cheque
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <label className="checkboxs mb-0 pb-0 line-height-1">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  Card
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <label className="checkboxs mb-0 pb-0 line-height-1">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  Paypal
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <label className="checkboxs mb-0 pb-0 line-height-1">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  Bank Transfer
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <label className="checkboxs mb-0 pb-0 line-height-1">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  Cash
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <div className="setting-info">
                              <h6>Enable Sound Effect </h6>
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
                      </div>
                      <div className="d-flex align-items-center justify-content-end">
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
                        >
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
        <CommonFooter />
      </div>
    </div>
  );
};

export default PosSettings;
