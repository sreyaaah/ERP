import CommonSelect from "../../../components/select/common-select";

// Define the props interface
interface AddCustomersProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    gstin: string;
  };
  errors: any;
  status: "Active" | "Inactive";
  selectedCity: string;
  selectedState: string;
  selectedCountry: string;
  customerImage: string | null;
  cityOptions: Array<{ label: string; value: string }>;
  stateOptions: Array<{ label: string; value: string }>;
  countryOptions: Array<{ label: string; value: string }>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  setSelectedCity: (value: string) => void;
  setSelectedState: (value: string) => void;
  setSelectedCountry: (value: string) => void;
  setStatus: React.Dispatch<React.SetStateAction<"Active" | "Inactive">>;
}

const AddCustomers: React.FC<AddCustomersProps> = ({
  formData,
  errors,
  status,
  selectedCity,
  selectedState,
  selectedCountry,
  customerImage,
  cityOptions,
  stateOptions,
  countryOptions,
  onInputChange,
  onImageChange,
  onSubmit,
  setSelectedCity,
  setSelectedState,
  setSelectedCountry,
  setStatus,
}) => {
  return (
    <div className="page-wrapper-new p-0">
      <div className="content">
        <div className="modal-header">
          <div className="page-title">
            <h4>Add Customer</h4>
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
        <form onSubmit={onSubmit}>
          <div className="modal-body">
            <div className="new-employee-field">
              <div className="profile-pic-upload">
                <div className="profile-pic">
                  {customerImage ? (
                    <img
                      src={customerImage}
                      alt="Customer"
                      className="img-fluid rounded"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span>
                      <i className="feather icon-plus-circle plus-down-add" />{" "}
                      Add Image
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <div className="image-upload mb-0">
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={onImageChange}
                    />
                    <div className="image-uploads">
                      <h4>Upload Image</h4>
                    </div>
                  </div>
                  <p className="mt-2">JPEG, PNG up to 2 MB</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  First Name<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  value={formData.firstName}
                  onChange={onInputChange}
                />
                {errors.firstName && (
                  <small className="text-danger">{errors.firstName}</small>
                )}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Last Name<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  value={formData.lastName}
                  onChange={onInputChange}
                />
                {errors.lastName && (
                  <small className="text-danger">{errors.lastName}</small>
                )}
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Email<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={onInputChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Phone<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  value={formData.phone}
                  onChange={onInputChange}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone}</small>
                )}
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Address<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                  value={formData.address}
                  onChange={onInputChange}
                />
                {errors.address && (
                  <small className="text-danger">{errors.address}</small>
                )}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  City<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className={`w-100 ${errors.city ? "is-invalid" : ""}`}
                  options={cityOptions}
                  value={selectedCity}
                  filter={true}
                  onChange={(e) => setSelectedCity(e.value)}
                  placeholder="Select City"
                />
                {errors.city && (
                  <small className="text-danger">{errors.city}</small>
                )}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  State<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className={`w-100 ${errors.state ? "is-invalid" : ""}`}
                  options={stateOptions}
                  value={selectedState}
                  filter={true}
                  onChange={(e) => setSelectedState(e.value)}
                  placeholder="Select State"
                />
                {errors.state && (
                  <small className="text-danger">{errors.state}</small>
                )}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Country<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className={`w-100 ${errors.country ? "is-invalid" : ""}`}
                  options={countryOptions}
                  value={selectedCountry}
                  filter={true}
                  onChange={(e) => setSelectedCountry(e.value)}
                  placeholder="Select Country"
                />
                {errors.country && (
                  <small className="text-danger">{errors.country}</small>
                )}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Postal Code<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  name="postalCode"
                  className={`form-control ${
                    errors.postalCode ? "is-invalid" : ""
                  }`}
                  value={formData.postalCode}
                  onChange={onInputChange}
                />
                {errors.postalCode && (
                  <small className="text-danger">{errors.postalCode}</small>
                )}
              </div>
              <div className="col-lg-10 mb-3">
                <label className="form-label">GSTIN</label>
                <input
                  type="text"
                  name="gstin"
                  className="form-control"
                  value={formData.gstin}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-lg-12">
                <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                  <span className="status-label">Status</span>
                  <input
                    type="checkbox"
                    id="user-status"
                    className="check"
                    checked={status === "Active"}
                    onChange={(e) =>
                      setStatus(e.target.checked ? "Active" : "Inactive")
                    }
                  />
                  <label htmlFor="user-status" className="checktoggle"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary fs-13 fw-medium p-2 px-3"
            >
              Add Customer
            </button>
            <button
              type="button"
              id="addCustomerModalClose"
              className="d-none"
              data-bs-dismiss="modal"
            ></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomers;