import { Link } from "react-router-dom";
import { useState } from "react";
import { all_routes } from "../../../routes/all_routes";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import AddCategory from "../../../core/modals/inventory/addcategory";
import AddVariant from "../../../core/modals/inventory/addvariant";
import AddVarientNew from "../../../core/modals/inventory/addVarientNew";

import { useProductForm } from "./hooks/useProductForm";
import ProductInfoSection from "./components/ProductInfoSection";
import PricingStocksSection from "./components/PricingStocksSection";
import ImagesSection from "./components/ImagesSection";
import CustomFieldsSection from "./components/CustomFieldsSection";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {

  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  const result = handleSubmit(e);

  if (!result.success) {
    setError(result.error ?? "Unable to add product");
    return;
  }

  setError(null);
  navigate("/product-list");
};


  const route = all_routes;
  const {
    formData,
    images,
    updateField,
    addImage,
    removeImage,
    generateSKU,
    generateItemCode,
    handleSubmit,
    updateSlugManually
  } = useProductForm();

  const navigate = useNavigate();


  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Create Product</h4>
                <h6>Create new product</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
              <li>
                <div className="page-btn">
                  <Link to={route.productlist} className="btn btn-secondary">
                    <i className="feather icon-arrow-left me-2" />
                    Back to Product
                  </Link>
                </div>
              </li>
            </ul>
          </div>

            <form onSubmit={onSubmit}>
              {error && (
                <div className="alert alert-danger mb-3">
                  {error}
                </div>
              )}
              <div className="add-product">
              <div
                className="accordions-items-seperate"
                id="accordionSpacingExample"
              >
                <ProductInfoSection
                  formData={formData}
                  updateField={updateField}
                  generateSKU={generateSKU}
                  generateItemCode={generateItemCode}
                  updateSlugManually={updateSlugManually}
                />

                <PricingStocksSection
                  formData={formData}
                  updateField={updateField}
                />

                <ImagesSection images={images} addImage={addImage} removeImage={removeImage} />

                <CustomFieldsSection
                  formData={formData}
                  updateField={updateField}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="d-flex align-items-center justify-content-end mb-4">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => navigate("/product-list")}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>

              </div>
            </div>
          </form>
        </div>

        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0 text-gray-9">
            2014 - 2025 © DreamsPOS. All Right Reserved
          </p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>

      {/* Modals */}
      <AddCategory />
      <AddVariant />
      <AddVarientNew />

      {/* Delete Modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Attribute</h4>
                <p className="mb-0 fs-16">
                  Are you sure you want to delete Attribute?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
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
                    Yes Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;