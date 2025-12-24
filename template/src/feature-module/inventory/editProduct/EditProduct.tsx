import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { all_routes } from "../../../routes/all_routes";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import AddCategory from "../../../core/modals/inventory/addcategory";
import AddVariant from "../../../core/modals/inventory/addvariant";
import AddVarientNew from "../../../core/modals/inventory/addVarientNew";

import { useEditProduct } from "./hooks/useEditProduct";
import ProductInformation from "./components/productInformation";
import PriceCalculation from "./components/priceCalculation";
import ProductImages from "./components/ProductImages";
import CustomFields from "./components/CustomFields";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const route = all_routes;
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    formData,
    images,
    loading,
    updateField,
    addImage,
    removeImage,
    generateSKU,
    generateItemCode,
    handleSubmit,
    updateSlugManually,
  } = useEditProduct(id || "");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const result = handleSubmit(e);

    if (!result.success) {
      setError(result.error ?? "Unable to update product");
      setSuccessMessage(null);
      return;
    }

    setError(null);
    setSuccessMessage("Product updated successfully!");
    
    setTimeout(() => {
      navigate("/product-list");
    }, 1500);
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Edit Product</h4>
                <h6>Update product information</h6>
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
              <div className="alert alert-danger alert-dismissible fade show mb-3" role="alert">
                {error}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setError(null)}
                  aria-label="Close"
                />
              </div>
            )}

            {successMessage && (
              <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
                <i className="feather icon-check-circle me-2" />
                {successMessage}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSuccessMessage(null)}
                  aria-label="Close"
                />
              </div>
            )}

            <div className="add-product">
              <div
                className="accordions-items-seperate"
                id="accordionSpacingExample"
              >
                <ProductInformation
                  formData={formData}
                  updateField={updateField}
                  generateSKU={generateSKU}
                  generateItemCode={generateItemCode}
                  updateSlugManually={updateSlugManually}
                />

                <PriceCalculation
                  formData={formData}
                  updateField={updateField}
                />

                <ProductImages
                  images={images}
                  addImage={addImage}
                  removeImage={removeImage}
                />

                <CustomFields
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
                  <i className="feather icon-check me-2" />
                  Update Product
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

export default EditProduct;