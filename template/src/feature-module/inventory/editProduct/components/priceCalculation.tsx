import type { ProductFormData } from "../types";
import CommonSelect from "../../../../components/select/common-select";

interface Props {
  formData: ProductFormData;
  updateField: <K extends keyof ProductFormData>(
    key: K,
    value: ProductFormData[K]
  ) => void;
  taxOptions: { label: string; value: string }[];
}

const PriceCalculation = ({ formData, updateField, taxOptions }: Props) => {
  return (
    <div className="accordion-item border mb-4">
      <h2 className="accordion-header" id="headingSpacingTwo">
        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#SpacingTwo"
          aria-expanded="true"
          aria-controls="SpacingTwo"
        >
          <div className="d-flex align-items-center justify-content-between flex-fill">
            <h5 className="d-flex align-items-center">
              <i className="feather icon-life-buoy text-primary me-2" />
              <span>Pricing</span>
            </h5>
          </div>
        </div>
      </h2>

      <div
        id="SpacingTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="headingSpacingTwo"
      >
        <div className="accordion-body border-top">
          <div className="mb-4">
            <label className="form-label">
              Tax Type<span className="text-danger ms-1">*</span>
            </label>

            <div className="d-flex">
              <label className="custom_radio me-4">
                <input
                  type="radio"
                  name="taxMode"
                  checked={formData.taxMode === "exclusive"}
                  onChange={() => updateField("taxMode", "exclusive")}
                />
                <span
                  className="checkmark"
                  style={
                    formData.taxMode === "exclusive"
                      ? {
                          backgroundColor: "#ffc107",
                          borderColor: "#ffc107",
                        }
                      : {}
                  }
                />{" "}
                Exclusive Tax
              </label>

              <label className="custom_radio me-4">
                <input
                  type="radio"
                  name="taxMode"
                  checked={formData.taxMode === "inclusive"}
                  onChange={() => updateField("taxMode", "inclusive")}
                />
                <span
                  className="checkmark"
                  style={
                    formData.taxMode === "inclusive"
                      ? {
                          backgroundColor: "#ffc107",
                          borderColor: "#ffc107",
                        }
                      : {}
                  }
                />{" "}
                Inclusive Tax
              </label>

              <label className="custom_radio">
                <input
                  type="radio"
                  name="taxMode"
                  checked={formData.taxMode === "no-tax"}
                  onChange={() => updateField("taxMode", "no-tax")}
                />
                <span
                  className="checkmark"
                  style={
                    formData.taxMode === "no-tax"
                      ? {
                          backgroundColor: "#ffc107",
                          borderColor: "#ffc107",
                        }
                      : {}
                  }
                />{" "}
                Without Tax
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Tax Rate (%)<span className="text-danger ms-1">*</span>
                </label>
                <CommonSelect
                  className="w-100"
                  options={taxOptions}
                  value={String(formData.taxRate)}
                  onChange={(e: any) => updateField("taxRate", e.value)}
                  placeholder="Select or Type Tax Rate"
                  editable={true}
                />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  {formData.taxMode === "exclusive"
                    ? "Price Before Tax"
                    : formData.taxMode === "inclusive"
                    ? "Final Price (Tax Included)"
                    : "Product Price"}
                  <span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.priceBeforeTax}
                  onChange={(e) =>
                    updateField("priceBeforeTax", e.target.value)
                  }
                  placeholder={
                    formData.taxMode === "exclusive"
                      ? "Enter base price"
                      : formData.taxMode === "inclusive"
                      ? "Enter final price"
                      : "Enter price"
                  }
                  step="0.01"
                  min="0"
                />
                <small className="text-muted">
                  {formData.taxMode === "exclusive"
                    ? "Enter the base price (tax will be added)"
                    : formData.taxMode === "inclusive"
                    ? "Enter the final price (tax is included)"
                    : "Enter the product price (no tax applied)"}
                </small>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Tax Amount
                  <span
                    className="badge bg-info ms-2"
                    style={{ fontSize: "0.65rem" }}
                  >
                    Calculated
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  value={formData.taxAmount}
                  readOnly
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  {formData.taxMode === "exclusive"
                    ? "Price After Tax"
                    : formData.taxMode === "inclusive"
                    ? "Price Before Tax"
                    : "Final Price"}
                  <span
                    className="badge bg-info ms-2"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {formData.taxMode === "exclusive"
                      ? "Calculated"
                      : "Calculated"}
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  value={formData.priceAfterTax}
                  readOnly
                  placeholder="0.00"
                />
                <small className="text-muted">
                  {formData.taxMode === "exclusive"
                    ? "Final price with tax"
                    : formData.taxMode === "inclusive"
                    ? "Base price without tax"
                    : "Calculated final price"}
                </small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="alert alert-light border" role="alert">
                <strong>Price Breakdown:</strong>
                {formData.priceBeforeTax && formData.taxRate ? (
                  <span className="ms-2">
                    {formData.taxMode === "exclusive" ? (
                      <>
                        Base Price: <strong>₹{formData.priceBeforeTax}</strong> +
                        Tax ({formData.taxRate}%):{" "}
                        <strong>₹{formData.taxAmount || "0.00"}</strong> = Final
                        Price:{" "}
                        <strong>₹{formData.priceAfterTax || "0.00"}</strong>
                      </>
                    ) : formData.taxMode === "inclusive" ? (
                      <>
                        Final Price: <strong>₹{formData.priceBeforeTax}</strong>{" "}
                        = Base Price:{" "}
                        <strong>₹{formData.priceAfterTax || "0.00"}</strong> +
                        Tax ({formData.taxRate}%):{" "}
                        <strong>₹{formData.taxAmount || "0.00"}</strong>
                      </>
                    ) : (
                      <>
                        Product Price: <strong>₹{formData.priceBeforeTax}</strong> (No Tax Applied)
                      </>
                    )}
                  </span>
                ) : (
                  <span className="ms-2 text-muted">
                    Enter tax rate and price to see breakdown
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculation;