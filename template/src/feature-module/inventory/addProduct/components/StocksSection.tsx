import type { ProductFormData } from "../types";

interface Props {
  formData: ProductFormData;
  updateField: <K extends keyof ProductFormData>(
    key: K,
    value: ProductFormData[K]
  ) => void;
}

const StocksSection = ({ formData, updateField }: Props) => {
  return (
    <div className="accordion-item border mb-4">
      <h2 className="accordion-header" id="headingStocks">
        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#StocksCollapse"
          aria-expanded="true"
          aria-controls="StocksCollapse"
        >
          <div className="d-flex align-items-center justify-content-between flex-fill">
            <h5 className="d-flex align-items-center">
              <i className="feather icon-box text-primary me-2" />
              <span>Stocks</span>
            </h5>
          </div>
        </div>
      </h2>

      <div
        id="StocksCollapse"
        className="accordion-collapse collapse show"
        aria-labelledby="headingStocks"
      >
        <div className="accordion-body border-top">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">
                  Quantity<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.quantity}
                  onChange={(e) => updateField("quantity", e.target.value)}
                  placeholder="Enter initial quantity"
                  min="0"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="mb-3">
                <label className="form-label">
                  Quantity Alert (Low Stock Threshold)
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.quantityAlert}
                  onChange={(e) => updateField("quantityAlert", e.target.value)}
                  placeholder="Enter alert threshold (Default: 10)"
                  min="0"
                />
                <small className="text-muted">You will be notified on the dashboard when stock hits this number.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StocksSection;
