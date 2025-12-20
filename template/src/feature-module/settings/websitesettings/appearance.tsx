import { useState } from "react";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import { themeImage08, themeImage09, themeImage10 } from "../../../utils/imagepath";
import CommonSelect from "../../../components/select/common-select";

const Appearance = () => {
  type ThemeType =
    | "Light"
    | "Dark"
    | "Automatic"
    | "defaultcolor"
    | "theme-violet"
    | "theme-blue"
    | "theme-brown"
    | null;

  const [isActive, setIsActive] = useState<ThemeType>(null);
  const [selectedSidebarSize, setSelectedSidebarSize] = useState(null);
  const [selectedFont, setSelectedFont] = useState(null);
  const setActive = (theme: ThemeType) => {
    setIsActive(theme);
  };

  const sizeOptions = [
    { value: "small", label: "Small - 85px" },
    { value: "large", label: "Large - 250px" },
  ];
  const fonts = [
    { value: "Nunito", label: "Nunito" },
    { value: "Poppins", label: "Poppins" },
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
                    <h4 className="fs-18 fw-bold">Appearance</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="appearance-settings">
                        <div className="row">
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="setting-info mb-4">
                              <h6>Select Theme</h6>
                              <p>Choose accent colour of website</p>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-12 col-md-8">
                            <div className="theme-type-images d-flex align-items-center mb-4">
                              <div
                                className={`theme-image border ${
                                  isActive === "Light" ? "active" : ""
                                }`}
                                onClick={() => setActive("Light")}
                              >
                                <div className="theme-image-set">
                                  <img src={themeImage08} alt="Img" />
                                </div>
                                <h6>Light</h6>
                              </div>
                              <div
                                className={`theme-image border ${
                                  isActive === "Dark" ? "active" : ""
                                }`}
                                onClick={() => setActive("Dark")}
                              >
                                <div className="theme-image-set">
                                  <img src={themeImage09} alt="Img" />
                                </div>
                                <h6>Dark</h6>
                              </div>
                              <div
                                className={`theme-image border ${
                                  isActive === "Automatic" ? "active" : ""
                                }`}
                                onClick={() => setActive("Automatic")}
                              >
                                <div className="theme-image-set">
                                  <img src={themeImage10} alt="Img" />
                                </div>
                                <h6>Automatic</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="setting-info mb-4">
                              <h6 className="mb-1">Accent Color</h6>
                              <p>Choose accent colour of website</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="theme-colors mb-4">
                              <ul>
                                <li>
                                  <span
                                    className={`themecolorset defaultcolor ${
                                      isActive === "defaultcolor"
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={() => setActive("defaultcolor")}
                                  ></span>
                                </li>
                                <li>
                                  <span
                                    className={`themecolorset theme-violet ${
                                      isActive === "theme-violet"
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={() => setActive("theme-violet")}
                                  ></span>
                                </li>
                                <li>
                                  <span
                                    className={`themecolorset theme-blue ${
                                      isActive === "theme-blue" ? "active" : ""
                                    }`}
                                    onClick={() => setActive("theme-blue")}
                                  ></span>
                                </li>
                                <li>
                                  <span
                                    className={`themecolorset theme-brown ${
                                      isActive === "theme-brown" ? "active" : ""
                                    }`}
                                    onClick={() => setActive("theme-brown")}
                                  ></span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="setting-info mb-4">
                              <h6>Expand Sidebar</h6>
                              <p>Choose accent colour of website</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                              <input
                                type="checkbox"
                                id="user1"
                                className="check"
                                defaultChecked
                              />
                              <label htmlFor="user1" className="checktoggle">
                                {" "}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="setting-info mb-4">
                              <h6 className="mb-1">Sidebar Size</h6>
                              <p>Select size of the sidebar to display</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="localization-select">
                              <CommonSelect
                                filter={false}
                                options={sizeOptions}
                                value={selectedSidebarSize}
                                onChange={(e) =>
                                  setSelectedSidebarSize(e.value)
                                }
                                placeholder="Choose"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="setting-info mb-4">
                              <h6 className="mb-1">Font Family</h6>
                              <p>Select font family of website</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-12 col-md-4">
                            <div className="localization-select">
                              <CommonSelect
                                filter={false}
                                options={fonts}
                                value={selectedFont}
                                onChange={(e) => setSelectedFont(e.value)}
                                placeholder="Choose"
                              />
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
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
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

export default Appearance;
