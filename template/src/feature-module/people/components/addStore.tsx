import React from "react";
import CommonSelect from "../../../components/select/common-select";

interface AddStoreProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    gstin: string;
    status: string;
  };
  selectedCity: string;
  selectedState: string;
  selectedCountry: string;
  cityOptions: Array<{ label: string; value: string }>;
  stateOptions: Array<{ label: string; value: string }>;
  countryOptions: Array<{ label: string; value: string }>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  setSelectedCity: (value: string) => void;
  setSelectedState: (value: string) => void;
  setSelectedCountry: (value: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const AddStore: React.FC<AddStoreProps> = ({
  formData,
  selectedCity,
  selectedState,
  selectedCountry,
  cityOptions,
  stateOptions,
  countryOptions,
  onInputChange,
  onSubmit,
  setSelectedCity,
  setSelectedState,
  setSelectedCountry,
  setFormData
}) => {
  return (
    <div className="modal fade" id="add-store">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="page-title">
              <h4>Add Store</h4>
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
                <label className="form-label">
                  Store Name <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  className="form-control" 
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  className="form-control" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Phone <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
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
                  value={formData.address}
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
                      value={selectedCountry}
                      onChange={(e: any) => setSelectedCountry(e.value)}
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
                      options={stateOptions}
                      value={selectedState}
                      onChange={(e: any) => setSelectedState(e.value)}
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
                      options={cityOptions}
                      value={selectedCity}
                      onChange={(e: any) => setSelectedCity(e.value)}
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
                      value={formData.postalCode}
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
                  value={formData.gstin}
                  onChange={onInputChange}
                  className="form-control" 
                />
              </div>
              <div className="mb-0">
                <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                  <span className="status-label ">Status</span>
                  <input
                    type="checkbox"
                    id="user2"
                    className="check"
                    checked={formData.status === "Active"}
                    onChange={(e) => setFormData({...formData, status: e.target.checked ? "Active" : "Inactive"})}
                  />
                  <label htmlFor="user2" className="checktoggle" />
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
                Add Store
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStore;
