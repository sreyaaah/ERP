
import { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import CollapesIcon from "../../components/tooltip-content/collapes";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import CommonSelect from "../../components/select/common-select";
import { Editor } from "primereact/editor";
import { user01 } from "../../utils/imagepath";

const EditEmployee = () => {
  const route = all_routes;
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedNationality, setSelectedNationality] = useState<string | null>(
    null
  );
  const [selectedShift, setSelectedShift] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [selectedDesignation, setSelectedDesignation] = useState<string | null>(
    null
  );
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string | null>(
    null
  );
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [text, setText] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prevState: any) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };


  const gender = [
    { value: "Choose", label: "Choose" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const nationality = [
    { value: "Choose", label: "Choose" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "India", label: "India" },
  ];
  const Shift = [
    { value: "Choose", label: "Choose" },
    { value: "Regular", label: "Regular" },
  ];
  const departments = [
    { value: "Choose", label: "Choose" },
    { value: "UI/UX", label: "UI/UX" },
    { value: "Support", label: "Support" },
    { value: "HR", label: "HR" },
    { value: "Engineering", label: "Engineering" },
  ];
  const designation = [
    { value: "Choose", label: "Choose" },
    { value: "Designer", label: "Designer" },
    { value: "Developer", label: "Developer" },
    { value: "Tester", label: "Tester" },
  ];
  const bloodgroup = [
    { value: "Select", label: "Select" },
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B-" },
    { value: "O+", label: "O-" },
    { value: "O+", label: "O-" },
    { value: "AB+", label: "AB-" },
    { value: "AB+", label: "AB-" },
  ];
  const country = [
    { value: "Choose", label: "Choose" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "USA", label: "USA" },
  ];

  const state = [
    { value: "Choose", label: "Choose" },
    { value: "California", label: "California" },
    { value: "Paris", label: "Paris" },
  ];
  const city = [
    { value: "Choose", label: "Choose" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "New Jersey", label: "New Jersey" },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Edit Employee</h4>
                <h6>Edit Employee</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link to={route.employeelist} className="btn btn-secondary">
                <i className="feather icon-arrow-left me-2" />
                Back to List
              </Link>
            </div>
          </div>
          {/* /product list */}
          <form>
            <div className="accordion-card-one accordion" id="accordionExample">
              <div className="accordion-item">
                <div className="accordion-header p-3" id="headingOne">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-controls="collapseOne"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="feather icon-info feather-edit text-primary me-2" />
                        <span>Employee Information</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="new-employee-field">
                      <div className="profile-pic-upload edit-pic">
                        <div className="profile-pic">
                          <span>
                            <img src={user01} alt="Img" />
                          </span>
                        </div>
                        <div className="me-3 mb-0">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              First Name
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Mitchum"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Last Name
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Daniel"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Email<span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              defaultValue="mir34345@example.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Contact Number
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="+1 54554 54788"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Emp Code
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="POS001"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-blocks">
                            <label className="form-label">
                              Date of Birth
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="input-groupicon calender-input">
                              <i className="feather icon-calendar info-img" />
                              <CommonDatePicker
                                value={date1}
                                onChange={setDate1}
                                className="w-100"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Gender<span className="text-danger ms-1">*</span>
                            </label>
                            <CommonSelect
                              className="w-100"
                              options={gender}
                              value={selectedGender}
                              onChange={(e) => setSelectedGender(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Nationality
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <CommonSelect
                              className="w-100"
                              options={nationality}
                              value={selectedNationality}
                              onChange={(e) => setSelectedNationality(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-blocks">
                            <label className="form-label">
                              Joining Date
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="input-groupicon calender-input">
                              <i className="feather icon-calendar info-img" />
                              <CommonDatePicker
                                value={date2}
                                onChange={setDate2}
                                className="w-100"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <div className="add-newplus">
                              <label className="form-label">
                                Shift<span className="text-danger ms-1">*</span>
                              </label>
                              <Link to="#">
                                <span>
                                  <i className="feather icon-plus-circle plus-down-add" />
                                  Add new
                                </span>
                              </Link>
                            </div>
                            <CommonSelect
                              className="w-100"
                              options={Shift}
                              value={selectedShift}
                              onChange={(e) => setSelectedShift(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Department
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <CommonSelect
                              className="w-100"
                              options={departments}
                              value={selectedDepartment}
                              onChange={(e) => setSelectedDepartment(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Designation
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <CommonSelect
                              className="w-100"
                              options={designation}
                              value={selectedDesignation}
                              onChange={(e) => setSelectedDesignation(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Blood Group
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <CommonSelect
                              className="w-100"
                              options={bloodgroup}
                              value={selectedBloodGroup}
                              onChange={(e) => setSelectedBloodGroup(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        {/* Editor */}
                        <div className="col-lg-12">
                          <div className="input-blocks summer-description-box transfer mb-3">
                            <label>About</label>
                            <div id="summernote">
                              <Editor
                                value={text}
                                onTextChange={(e: any) => setText(e.htmlValue)}
                                style={{ height: "200px" }}
                              />
                            </div>
                            <p className="mt-1">Maximum 60 Characters</p>
                          </div>
                        </div>
                        {/* /Editor */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header p-3" id="heading3">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-controls="collapseThree"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="feather icon-map-pin feather-edit text-primary me-2" />
                        <span>Address Information</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="other-info">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1861 Bayonne Ave, Manchester"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Country</label>
                            <CommonSelect
                              className="w-100"
                              options={country}
                              value={selectedCountry}
                              onChange={(e) => setSelectedCountry(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">State</label>
                            <CommonSelect
                              className="w-100"
                              options={state}
                              value={selectedState}
                              onChange={(e) => setSelectedState(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">City</label>
                            <CommonSelect
                              className="w-100"
                              options={city}
                              value={selectedCity}
                              onChange={(e) => setSelectedCity(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Zipcode</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={90001}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header p-3" id="heading4">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-controls="collapseFour"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="feather icon-info feather-edit text-primary me-2" />
                        <span>Emergency Information</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="other-info">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Emergency Contact Number 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="+1 43566 67788"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Relation</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Mother"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Andrea Jermiah"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Emergency Contact Number 2
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Relation</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header p-3" id="heading5">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-controls="collapseFive"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-building-bank feather-edit text-primary me-2" />
                        <span>Bank Information</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="other-info">
                      <div className="row">
                        <div className="col-lg-3 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Bank Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Swizz International"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Account Number</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={350501501690}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">IFSC</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="SW7994"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Branch</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Alabama USA"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header p-3" id="heading6">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-controls="collapseTwo"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="feather icon-info feather-edit text-primary me-2" />
                        <span>Password</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading6"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="pass-info">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="">
                            <label className="form-label">
                              Password <span className="text-danger"> *</span>
                            </label>
                            <div className="pass-group">
                              <input
                                type={passwordVisibility.password ? "text" : "password"}
                                className="pass-input form-control"
                              />
                              <span
                                className={`ti toggle-password text-gray-9 ${
                                  passwordVisibility.password
                                    ? "ti-eye"
                                    : "ti-eye-off"
                                }`}
                                onClick={() => togglePasswordVisibility("password")}
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="">
                            <label className="form-label">
                              Confirm Password{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <div className="pass-group">
                              <input
                                type={
                                  passwordVisibility.confirmPassword
                                    ? "text"
                                    : "password"
                                }
                                className="pass-input form-control"
                              />
                              <span
                                className={`ti toggle-password text-gray-9 ${
                                  passwordVisibility.confirmPassword
                                    ? "ti-eye"
                                    : "ti-eye-off"
                                }`}
                                onClick={() =>
                                  togglePasswordVisibility("confirmPassword")
                                }
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /product list */}
            <div className="text-end mb-3">
              <button type="button" className="btn btn-secondary me-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © DreamsPOS. All Right Reserved</p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
