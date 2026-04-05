import React from "react";
import CommonSelect from "../../../components/select/common-select";

interface EditStoreProps {
  editFormData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    gstin: string;
    status: string;
    country: string;
    state: string;
    city: string;
  };
  countryOptions: Array<{ label: string; value: string }>;
  editStateOptions: Array<{ label: string; value: string }>;
  editCityOptions: Array<{ label: string; value: string }>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCountryChange: (val: string) => void;
  onStateChange: (val: string) => void;
  onCityChange: (val: string) => void;
  onStatusChange: (checked: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const EditStore: React.FC<EditStoreProps> = ({
  editFormData,
  countryOptions,
  editStateOptions,
  editCityOptions,
  onInputChange,
  onCountryChange,
  onStateChange,
  onCityChange,
  onStatusChange,
  onSubmit
}) => {
  return (
    <div className="modal fade" id="edit-store">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="page-title">
              <h4>Edit Store</h4>
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
              <div className="mb-3">
                <label className="form-label">Store Name <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={editFormData.name}
                  onChange={onInputChange}
                  className="form-control" 
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={editFormData.email}
                  onChange={onInputChange}
                  className="form-control" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  name="phone"
                  value={editFormData.phone}
                  onChange={onInputChange}
                  className="form-control" 
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input 
                  type="text" 
                  name="address"
                  value={editFormData.address}
                  onChange={onInputChange}
                  className="form-control" 
                />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <CommonSelect
                      className="w-100"
                      options={countryOptions}
                      value={editFormData.country}
                      onChange={(e: any) => onCountryChange(e.value)}
                      placeholder="Select Country"
                      filter={true}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <CommonSelect
                      className="w-100"
                      options={editStateOptions}
                      value={editFormData.state}
                      onChange={(e: any) => onStateChange(e.value)}
                      placeholder="Select State"
                      filter={true}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <CommonSelect
                      className="w-100"
                      options={editCityOptions}
                      value={editFormData.city}
                      onChange={(e: any) => onCityChange(e.value)}
                      placeholder="Select City"
                      filter={true}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Postal Code</label>
                    <input 
                      type="text" 
                      name="postalCode"
                      value={editFormData.postalCode}
                      onChange={onInputChange}
                      className="form-control" 
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">GSTIN</label>
                <input 
                  type="text" 
                  name="gstin"
                  value={editFormData.gstin}
                  onChange={onInputChange}
                  className="form-control" 
                />
              </div>
              <div className="mb-0">
                <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                  <span className="status-label">Status</span>
                  <input
                    type="checkbox"
                    id="edit-store-status"
                    className="check"
                    checked={editFormData.status === "Active"}
                    onChange={(e) => onStatusChange(e.target.checked)}
                  />
                  <label htmlFor="edit-store-status" className="checktoggle" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn me-2 btn-secondary"
                data-bs-dismiss="modal"
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
  );
};

export default EditStore;
