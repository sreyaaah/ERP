import CommonSelect from "../../../../components/select/common-select";
import CommonDatePicker from "../../../../components/date-picker/common-date-picker";
import { WARRANTY_OPTIONS } from "../../addProduct/constants";
import type { ProductFormData } from "../types";

interface Props {
  formData: ProductFormData;
  updateField: <K extends keyof ProductFormData>(
    key: K,
    value: ProductFormData[K]
  ) => void;
}

const CustomFields = ({ formData, updateField }: Props) => {
  return (
    <div className="accordion-item border mb-4">
      <h2 className="accordion-header" id="headingSpacingFour">
        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#SpacingFour"
          aria-expanded="true"
          aria-controls="SpacingFour"
        >
          <div className="d-flex align-items-center justify-content-between flex-fill">
            <h5 className="d-flex align-items-center">
              <i className="feather icon-list text-primary me-2" />
              <span>Custom Fields</span>
            </h5>
          </div>
        </div>
      </h2>
      <div
        id="SpacingFour"
        className="accordion-collapse collapse show"
        aria-labelledby="headingSpacingFour"
      >
        <div className="accordion-body border-top">
          <div>
            <div className="p-3 bg-light rounded d-flex align-items-center border mb-3">
              <div className="d-flex align-items-center">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="warranties"
                    checked={formData.hasWarranty}
                    onChange={(e) =>
                      updateField("hasWarranty", e.target.checked)
                    }
                  />
                  <label className="form-check-label" htmlFor="warranties">
                    Warranties
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="manufacturer"
                    checked={formData.hasManufacturer}
                    onChange={(e) =>
                      updateField("hasManufacturer", e.target.checked)
                    }
                  />
                  <label className="form-check-label" htmlFor="manufacturer">
                    Manufacturer
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="expiry"
                    checked={formData.hasExpiry}
                    onChange={(e) => updateField("hasExpiry", e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="expiry">
                    Expiry
                  </label>
                </div>
              </div>
            </div>

            {formData.hasWarranty && (
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Warranty<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      className="w-100"
                      options={WARRANTY_OPTIONS}
                      value={formData.warranty}
                      onChange={(e) => updateField("warranty", e.value)}
                      placeholder="Choose"
                      filter={false}
                    />
                  </div>
                </div>
              </div>
            )}

            {formData.hasManufacturer && (
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="mb-3 add-product">
                    <label className="form-label">
                      Manufacturer<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.manufacturer}
                      onChange={(e) =>
                        updateField("manufacturer", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Manufactured Date
                      <span className="text-danger ms-1">*</span>
                    </label>
                    <div className="input-groupicon calender-input">
                      <i className="feather icon-calendar info-img" />
                      <CommonDatePicker
                        value={formData.manufacturedDate}
                        onChange={(date) =>
                          updateField("manufacturedDate", date)
                        }
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {formData.hasExpiry && (
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Expiry On<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="input-groupicon calender-input">
                      <i className="feather icon-calendar info-img" />
                      <CommonDatePicker
                        value={formData.expiryDate}
                        onChange={(date) => updateField("expiryDate", date)}
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFields;