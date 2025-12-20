import CommonSelect from "../../../components/select/common-select";
import { user41 } from "../../../utils/imagepath";

// Define the props interface
interface EditCustomersProps {
  editCustomer: any | null;
  setEditCustomer: (customer: any) => void;
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
        <div className="modal-header">
          <div className="page-title">
            <h4>Edit Customer</h4>
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
            <div className="new-employee-field">
              <div className="profile-pic-upload image-field">
                <div className="profile-pic p-2">
                  <img
                    src={editCustomer?.avatar || user41}
                    className="object-fit-cover h-100 rounded-1"
                    alt="customer"
                  />
                  <button type="button" className="close rounded-1">
                    <span aria-hidden="true">×</span>
                  </button>
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
                  className="form-control"
                  value={editCustomer?.customer?.split(" ")[0] || ""}
                  onChange={(e) =>
                    setEditCustomer({
                      ...editCustomer,
                      customer: `${e.target.value} ${
                        editCustomer?.customer?.split(" ")[1] || ""
                      }`,
                    })
                  }
                />
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Last Name<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editCustomer?.customer?.split(" ")[1] || ""}
                  onChange={(e) =>
                    setEditCustomer({
                      ...editCustomer,
                      customer: `${
                        editCustomer?.customer?.split(" ")[0] || ""
                      } ${e.target.value}`,
                    })
                  }
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Email<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={editCustomer?.email || ""}
                  onChange={(e) =>
                    setEditCustomer({ ...editCustomer, email: e.target.value })
                  }
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Phone<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  value={editCustomer?.phone || ""}
                  onChange={(e) =>
                    setEditCustomer({ ...editCustomer, phone: e.target.value })
                  }
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">
                  Address<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editCustomer?.address || ""}
                  onChange={(e) =>
                    setEditCustomer({
                      ...editCustomer,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  City<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className="w-100"
                  options={cityOptions}
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  placeholder="Select City"
                  filter={false}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  State<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className="w-100"
                  options={stateOptions}
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.value)}
                  placeholder="Select State"
                  filter={false}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Country<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className="w-100"
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.value)}
                  placeholder="Select Country"
                  filter={false}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <label className="form-label">
                  Postal Code<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editCustomer?.postalCode || ""}
                  onChange={(e) =>
                    setEditCustomer({
                      ...editCustomer,
                      postalCode: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-lg-10 mb-3">
                <label className="form-label">GSTIN</label>
                <input
                  type="text"
                  name="gstin"
                  className="form-control"
                  value={editCustomer?.gstin || ""}
                  onChange={(e) =>
                    setEditCustomer({
                      ...editCustomer,
                      gstin: e.target.value,
                    })
                  }
                />
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
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={onSave}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomers;