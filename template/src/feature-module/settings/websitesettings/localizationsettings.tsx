import { useState } from "react";
import CommonSelect from "../../../components/select/common-select";
import SettingsSideBar from "../settingssidebar";
import CommonFooter from "../../../components/footer/commonFooter";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import RefreshIcon from "../../../components/tooltip-content/refresh";

const LocalizationSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState(null);
  const [selectedDateFormat, setSelectedDateFormat] = useState(null);
  const [selectedTimeFormat, setSelectedTimeFormat] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [selectedSymbolValue, setSelectedSymbolValue] = useState(null);
  const [selectedDot, setSelectedDot] = useState(null);
  const [selectedComma, setSelectedComma] = useState(null);
  const [selectedCountryPermission, setSelectedCountryPermission] =
    useState(null);

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
  ];
  const timezoneOptions = [
    { value: "utc5:30", label: "UTC 5:30" },
    { value: "utc+11:00", label: "(UTC+11:00) INR" },
  ];
  const timeFormatOptions = [
    { value: "12-hours", label: "12 Hours" },
    { value: "24-hours", label: "24 Hours" },
  ];
  const yearOptions = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ];
  const monthOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
  ];
  const country = [
    { value: "India", label: "India" },
    { value: "United States Of America", label: "United States Of America" },
  ];
  const symbols = [
    { value: "$", label: "$" },
    { value: "€", label: "€" },
    { value: "€", label: "€" },
  ];
  const symbolsandvalue = [
    { value: "$100", label: "$100" },
    { value: "$400", label: "$400" },
  ];
  const dot = [
    { value: ".", label: "." },
    { value: ".", label: "." },
  ];
  const comma = [
    { value: ",", label: "," },
    { value: ",", label: "," },
  ];
  const permissionforcountry = [
    { value: "Allow All Country", label: "Allow All Country" },
    { value: "Deny All Country", label: "Deny All Country" },
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
                    <h4 className="fs-18 fw-bold">Localization</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="border-bottom mb-3">
                        <div className="card-title-head">
                          <h6 className="fs-16 fw-bold mb-3">
                            <span className="fs-18 me-2">
                              <i className="ti ti-list" />
                            </span>
                            Basic Information
                          </h6>
                        </div>
                        <div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">Language</h6>
                                <p>Select Language of the Website</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={languageOptions}
                                  value={selectedLanguage}
                                  onChange={(e) => setSelectedLanguage(e.value)}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                  Language Switcher
                                </h6>
                                <p>To display in all the pages</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
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
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">Timezone</h6>
                                <p>Select Time zone in website</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={timezoneOptions}
                                  value={selectedTimezone}
                                  onChange={(e) => setSelectedTimezone(e.value)}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">Date format</h6>
                                <p>Select date format to display in website</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={languageOptions}
                                  value={selectedDateFormat}
                                  onChange={(e) =>
                                    setSelectedDateFormat(e.value)
                                  }
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">Time Format</h6>
                                <p>Select time format to display in website</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={timeFormatOptions}
                                  value={selectedTimeFormat}
                                  onChange={(e) =>
                                    setSelectedTimeFormat(e.value)
                                  }
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                  Financial Year
                                </h6>
                                <p>Select year for finance </p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={yearOptions}
                                  value={selectedYear}
                                  onChange={(e) => setSelectedYear(e.value)}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                  Starting Month
                                </h6>
                                <p>Select starting month to display</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={monthOptions}
                                  value={selectedMonth}
                                  onChange={(e) => setSelectedMonth(e.value)}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <div className="card-title-head">
                          <h6 className="fs-16 fw-bold mb-3">
                            <span className="fs-18 me-2">
                              <i className="ti ti-credit-card" />
                            </span>
                            Currency Settings
                          </h6>
                        </div>
                        <div className="localization-info">
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">Currency</h6>
                                <p>Select Time zone in website</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={country}
                                  value={selectedCurrency}
                                  onChange={(e) => setSelectedCurrency(e.value)}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                  Currency Symbol
                                </h6>
                                <p>Select date format to display in website</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={symbols}
                                  value={selectedSymbol}
                                  onChange={(e) => setSelectedSymbol(e.value)}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                  Currency Position
                                </h6>
                                <p>Select time format to display in website</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={symbolsandvalue}
                                  value={selectedSymbolValue}
                                  onChange={(e) =>
                                    setSelectedSymbolValue(e.value)
                                  }
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                  Decimal Separator
                                </h6>
                                <p>Select year for finance</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={dot}
                                  value={selectedDot}
                                  onChange={(e) => setSelectedDot(e.value)}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                  Thousand Separator
                                </h6>
                                <p>Select starting month to display</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={comma}
                                  value={selectedComma}
                                  onChange={(e) => setSelectedComma(e.value)}
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <div className="card-title-head">
                          <h6 className="fs-16 fw-bold mb-3">
                            <span className="fs-18 me-2">
                              <i className="ti ti-map" />
                            </span>
                            Country Settings
                          </h6>
                        </div>
                        <div className="localization-info">
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                  Countries Restriction
                                </h6>
                                <p>Select countries restriction</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3">
                                <CommonSelect
                                  filter={false}
                                  options={permissionforcountry}
                                  value={selectedCountryPermission}
                                  onChange={(e) =>
                                    setSelectedCountryPermission(e.value)
                                  }
                                  placeholder="Choose"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="card-title-head">
                          <h6 className="fs-16 fw-bold mb-3">
                            <span className="fs-18 me-2">
                              <i className="ti ti-map" />
                            </span>
                            File Settings
                          </h6>
                        </div>
                        <div className="localization-info">
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3">
                                <h6 className="fw-medium mb-1">
                                  Allowed Files
                                </h6>
                                <p>Select files</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3 w-100">
                                <div className="mb-3">
                                  <input
                                    className="input-tags form-control"
                                    type="text"
                                    data-role="tagsinput"
                                    name="specialist"
                                    defaultValue="JPG,GIF,PNG"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-sm-6">
                              <div className="mb-3 mb-sm-0">
                                <h6 className="fw-medium mb-1">
                                  Max File Size
                                </h6>
                                <p>File size</p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="localization-select ms-sm-auto mb-3 d-flex align-items-center mb-sm-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={5000}
                                />
                                <span className="ms-2 text-gray-9">MB</span>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default LocalizationSettings;
