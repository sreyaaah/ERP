import type { ProductFormData } from "../types";

interface Props {
  formData: ProductFormData;
  updateField: <K extends keyof ProductFormData>(
    key: K,
    value: ProductFormData[K]
  ) => void;
}

const PricingStocksSection = ({ formData, updateField }: Props) => {
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
                <span className="checkmark"style={formData.taxMode === "exclusive" ? {
                  backgroundColor: '#ffc107',
                  borderColor: '#ffc107'
                } : {}} /> Exclusive Tax
              </label>

              <label className="custom_radio">
                <input
                  type="radio"
                  name="taxMode"
                  checked={formData.taxMode === "inclusive"}
                  onChange={() => updateField("taxMode", "inclusive")}
                />
                <span className="checkmark" style={formData.taxMode === "inclusive" ? {
                  backgroundColor: '#ffc107',
                  borderColor: '#ffc107'
                } : {}}/> Inclusive Tax
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Tax Rate (%)<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.taxRate}
                  onChange={(e) => updateField("taxRate", e.target.value)}
                  placeholder="Enter tax rate"
                  step="0.01"
                  min="0"
                />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  {formData.taxMode === "exclusive"
                    ? "Price Before Tax"
                    : "Final Price (Tax Included)"}
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
                      : "Enter final price"
                  }
                  step="0.01"
                  min="0"
                />
                <small className="text-muted">
                  {formData.taxMode === "exclusive"
                    ? "Enter the base price (tax will be added)"
                    : "Enter the final price (tax is included)"}
                </small>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Tax Amount
                  <span className="badge bg-info ms-2" style={{ fontSize: '0.65rem' }}>
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
                    : "Price Before Tax"}
                  <span className="badge bg-info ms-2" style={{ fontSize: '0.65rem' }}>
                    {formData.taxMode === "exclusive" ? "Calculated" : "Calculated"}
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
                    : "Base price without tax"}
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
                        Tax ({formData.taxRate}%): <strong>₹{formData.taxAmount || "0.00"}</strong> = 
                        Final Price: <strong>₹{formData.priceAfterTax || "0.00"}</strong>
                      </>
                    ) : (
                      <>
                        Final Price: <strong>₹{formData.priceBeforeTax}</strong> = 
                        Base Price: <strong>₹{formData.priceAfterTax || "0.00"}</strong> + 
                        Tax ({formData.taxRate}%): <strong>₹{formData.taxAmount || "0.00"}</strong>
                      </>
                    )}
                  </span>
                ) : (
                  <span className="ms-2 text-muted">Enter tax rate and price to see breakdown</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingStocksSection;
