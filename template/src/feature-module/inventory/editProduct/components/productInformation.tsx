import { Link } from "react-router-dom";
import { Editor } from "primereact/editor";
import CommonSelect from "../../../../components/select/common-select";
import type { ProductFormData } from "../types";

interface Props {
  formData: ProductFormData;
  updateField: <K extends keyof ProductFormData>(
    key: K,
    value: ProductFormData[K]
  ) => void;
  generateSKU: () => void;
  updateSlugManually: (value: string) => void;
  categoryOptions: any[];
  brandOptions: any[];
  unitOptions: any[];
  subcategoryOptions: any[];
  storeOptions: any[];
  warehouseOptions: any[];
  sellingTypeOptions: any[];
  barcodeOptions: any[];
}

const ProductInformation = ({
  formData,
  updateField,
  generateSKU,
  updateSlugManually,
  categoryOptions,
  brandOptions,
  unitOptions,
  subcategoryOptions,
  storeOptions,
  warehouseOptions,
  sellingTypeOptions,
  barcodeOptions,
}: Props) => {
  return (
    <div className="accordion-item border mb-4">
      <h2 className="accordion-header" id="headingSpacingOne">
        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#SpacingOne"
          aria-expanded="true"
          aria-controls="SpacingOne"
        >
          <div className="d-flex align-items-center justify-content-between flex-fill">
            <h5 className="d-flex align-items-center">
              <i className="feather icon-info text-primary me-2" />
              <span>Product Information</span>
            </h5>
          </div>
        </div>
      </h2>
      <div
        id="SpacingOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingSpacingOne"
      >
        <div className="accordion-body border-top">
          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Store
                </label>
                <CommonSelect
                  className="w-100"
                  options={storeOptions}
                  value={formData.store}
                  onChange={(e) => updateField("store", e.value)}
                  placeholder="Choose"
                  filter={true}
                  editable={true}
                />
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Warehouse
                </label>
                <CommonSelect
                  className="w-100"
                  options={warehouseOptions}
                  value={formData.warehouse}
                  onChange={(e) => updateField("warehouse", e.value)}
                  placeholder="Choose"
                  filter={true}
                  editable={true}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Product Name<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.productName}
                  onChange={(e) => updateField("productName", e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Slug
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.slug}
                  onChange={(e) => updateSlugManually(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="mb-3 list position-relative">
                <label className="form-label">
                  SKU<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className="form-control list"
                  value={formData.sku}
                  onChange={(e) => updateField("sku", e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-primaryadd"
                  onClick={generateSKU}
                >
                  Generate
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Selling Type
                </label>
                <CommonSelect
                  className="w-100"
                  options={sellingTypeOptions}
                  value={formData.sellingType}
                  onChange={(e) => updateField("sellingType", e.value)}
                  placeholder="Choose"
                  filter={true}
                  editable={true}
                />
              </div>
            </div>
          </div>

          <div className="addservice-info">
            <div className="row">
              <div className="col-sm-6 col-12">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">
                      Category
                    </label>
                    <Link
                      to="#"
                      className="text-primary fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#add-category"
                    >
                      <i className="feather icon-plus-circle me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    className="w-100"
                    options={categoryOptions}
                    value={formData.category}
                    onChange={(e) => updateField("category", e.value)}
                    placeholder="Choose"
                    filter={true}
                    editable={true}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Sub Category</label>
                    <Link
                      to="#"
                      className="text-primary fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#add-subcategory"
                    >
                      <i className="feather icon-plus-circle me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    className="w-100"
                    options={subcategoryOptions}
                    value={formData.subCategory}
                    onChange={(e) => updateField("subCategory", e.value)}
                    placeholder="Choose"
                    filter={true}
                    editable={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="add-product-new">
            <div className="row">
              <div className="col-sm-6 col-12">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Brand</label>
                  </div>
                  <CommonSelect
                    className="w-100"
                    options={brandOptions}
                    value={formData.brand}
                    onChange={(e) => updateField("brand", e.value)}
                    placeholder="Choose"
                    filter={true}
                    editable={true}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">
                      Unit
                    </label>
                  </div>
                  <CommonSelect
                    className="w-100"
                    options={unitOptions}
                    value={formData.unit}
                    onChange={(e) => updateField("unit", e.value)}
                    placeholder="Choose"
                    filter={true}
                    editable={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="mb-3">
                <label className="form-label">
                  Barcode Symbology
                </label>
                <CommonSelect
                  className="w-100"
                  options={barcodeOptions}
                  value={formData.barcodeSymbol}
                  onChange={(e) => updateField("barcodeSymbol", e.value)}
                  placeholder="Choose"
                  filter={true}
                  editable={true}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="mb-3 list position-relative">
                <label className="form-label">
                  HSN/SAC Number<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.itemCode}
                  onChange={(e) => updateField("itemCode", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="summer-description-box">
              <label className="form-label">Description</label>
              <Editor
                value={formData.description}
                onTextChange={(e: any) =>
                  updateField("description", e.htmlValue || "")
                }
                style={{ height: "200px" }}
              />
              <p className="fs-14 mt-1">Maximum 60 Words</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;