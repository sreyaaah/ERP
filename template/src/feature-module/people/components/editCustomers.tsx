import CommonSelect from "../../../components/select/common-select";
import { user41 } from "../../../utils/imagepath";

// Define the props interface
interface EditCustomersProps {
  editCustomer: any | null;
  setEditCustomer: (customer: any) => void;
  errors: any;
  validateField: (name: string, value: string) => void;
  selectedCity: string;
  selectedState: string;
  selectedCountry: string;
  cityOptions: Array<{ label: string; value: string }>;
  stateOptions: Array<{ label: string; value: string }>;
  countryOptions: Array<{ label: string; value: string }>;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  setSelectedCity: (value: string) => void;
  setSelectedState: (value: string) => void;
  setSelectedCountry: (value: string) => void;
}

const EditCustomers: React.FC<EditCustomersProps> = ({
  editCustomer,
  setEditCustomer,
  errors,
  validateField,
  selectedCity,
  selectedState,
  selectedCountry,
  cityOptions,
  stateOptions,
  countryOptions,
  onImageChange,
  onSave,
  setSelectedCity,
  setSelectedState,
  setSelectedCountry,
}) => {
  return (
    <div className="page-wrapper-new p-0">
      <div className="content">
        <div className="modal-header border-0 custom-modal-header">
          <div className="page-title">
            <h4>Edit Customer Details</h4>
          </div>
          <button
            type="button"
            className="close bg-danger text-white fs-16"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form>
          <div className="modal-body">
            <div className="new-employee-field">
              <div className="profile-pic-upload image-field">
                <div className="profile-pic p-2">
                  <img
                    src={editCustomer?.avatar || user41}
                    className="object-fit-cover h-100 rounded-1"
                    alt="customer"
                  />
                </div>
                <div className="mb-3">
                  <div className="image-upload mb-0">
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={onImageChange}
                    />
                    <div className="image-uploads">
                      <h4>Change Image</h4>
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
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  value={editCustomer?.customer?.split(" ")[0] || ""}
                  onChange={(e) => {
                    const firstName = e.target.value;
                    const lastName = editCustomer?.customer?.split(" ")[1] || "";
                    setEditCustomer({
                      ...editCustomer,
                      customer: `${firstName} ${lastName}`,
                    });
                    validateField("firstName", firstName);
                  }}
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editCustomer?.customer?.split(" ")[1] || ""}
                  onChange={(e) => {
                    const firstName = editCustomer?.customer?.split(" ")[0] || "";
                    const lastName = e.target.value;
                    setEditCustomer({
                      ...editCustomer,
                      customer: `${firstName} ${lastName}`,
                    });
                  }}
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={editCustomer?.email || ""}
                  onChange={(e) => {
                    setEditCustomer({ ...editCustomer, email: e.target.value });
                    validateField("email", e.target.value);
                  }}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Phone<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  value={editCustomer?.phone || ""}
                  onChange={(e) => {
                    setEditCustomer({ ...editCustomer, phone: e.target.value });
                    validateField("phone", e.target.value);
                  }}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Address<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  value={editCustomer?.address || ""}
                  onChange={(e) => {
                    setEditCustomer({
                      ...editCustomer,
                      address: e.target.value,
                    });
                    validateField("address", e.target.value);
                  }}
                />
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Country<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className={`w-100 ${errors.country ? 'is-invalid' : ''}`}
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.value)}
                  placeholder="Select Country"
                  filter={true}
                  editable={true}
                />
                {errors.country && <small className="text-danger">{errors.country}</small>}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  State<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className={`w-100 ${errors.state ? 'is-invalid' : ''}`}
                  options={stateOptions}
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.value)}
                  placeholder="Select State"
                  filter={true}
                  editable={true}
                />
                {errors.state && <small className="text-danger">{errors.state}</small>}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  City<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className={`w-100 ${errors.city ? 'is-invalid' : ''}`}
                  options={cityOptions}
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  placeholder="Select City"
                  filter={true}
                  editable={true}
                />
                {errors.city && <small className="text-danger">{errors.city}</small>}
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Postal Code<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`}
                  value={editCustomer?.postalCode || ""}
                  onChange={(e) => {
                    setEditCustomer({
                      ...editCustomer,
                      postalCode: e.target.value,
                    });
                    validateField("postalCode", e.target.value);
                  }}
                />
                {errors.postalCode && <small className="text-danger">{errors.postalCode}</small>}
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">GSTIN</label>
                <input
                  type="text"
                  name="gstin"
                  className={`form-control ${errors.gstin ? 'is-invalid' : ''}`}
                  value={editCustomer?.gstin || ""}
                  onChange={(e) => {
                    setEditCustomer({
                      ...editCustomer,
                      gstin: e.target.value,
                    });
                    validateField("gstin", e.target.value);
                  }}
                />
                {errors.gstin && <small className="text-danger">{errors.gstin}</small>}
              </div>
              <div className="col-lg-12">
                <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                  <span className="status-label">Status</span>
                  <input
                    type="checkbox"
                    id="user2"
                    className="check"
                    checked={editCustomer?.status === "Active"}
                    onChange={(e) =>
                      setEditCustomer({
                        ...editCustomer,
                        status: e.target.checked ? "Active" : "Inactive",
                      })
                    }
                  />
                  <label htmlFor="user2" className="checktoggle">
                    {" "}
                  </label>
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
              type="button"
              className="btn btn-submit fs-13 fw-medium p-2 px-3"
              onClick={onSave}
            >
              Save Changes
            </button>
            <button
              type="button"
              id="editCustomerModalClose"
              className="d-none"
              data-bs-dismiss="modal"
            ></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomers;