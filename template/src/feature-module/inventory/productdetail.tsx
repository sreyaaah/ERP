import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { product69 } from "../../utils/imagepath";
import { ProductService } from "../services/product.service";
import type { Product } from "../services/product.service";
import html2pdf from "html2pdf.js";
import DOMPurify from "dompurify";
import Barcode from "react-barcode";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const data = await ProductService.getById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleExport = () => {
    const element = document.getElementById("product-detail-export");
    if (!element || !product) return;

    const opt = {
      margin: 10,
      filename: `Product_${product.sku || product.id}.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: {
        unit: "mm" as const,
        format: "a4" as const,
        orientation: "portrait" as const,
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  const handleDelete = async () => {
    if (!id) return;
    setIsDeleting(true);
    try {
      await ProductService.delete(id);
      navigate("/product-list");
    } catch (error) {
      console.error("Delete failed:", error);
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "400px" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="alert alert-danger">Product not found</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header justify-content-between">
            <div className="page-title">
              <h4>Product Details</h4>
              <h6>Full details of {product.product}</h6>
            </div>
            <div className="page-btn d-flex align-items-center">
              <Link
                to={`/edit-product/${product.id}`}
                className="btn btn-outline-primary me-2 d-flex align-items-center"
              >
                <i className="feather icon-edit me-2"></i>Edit
              </Link>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="btn btn-outline-danger me-2 d-flex align-items-center"
              >
                <i className="feather icon-trash-2 me-2"></i>Delete
              </button>
              <button
                onClick={handleExport}
                className="btn btn-outline-info me-2 d-flex align-items-center"
              >
                <i className="feather icon-download me-2"></i>Download PDF
              </button>
              <Link
                to="/product-list"
                className="btn btn-added d-flex align-items-center"
              >
                <i className="feather icon-arrow-left me-2"></i>Back to Products
              </Link>
            </div>
          </div>

          <div className="row" id="product-detail-export">
            <div className="col-lg-8 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="card-title mb-0">Product Information</h5>
                    <span
                      className={`badge ${product.status === "Available" ? "badge-linesuccess" : "badge-linedanger"}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <p className="text-muted mb-1">Product Name</p>
                      <h6 className="fw-semibold">{product.product}</h6>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-muted mb-1">Category</p>
                      <h6 className="fw-semibold text-primary">
                        {product.categoryId &&
                        typeof product.categoryId === "object"
                          ? product.categoryId.name
                          : product.categoryId || "N/A"}
                      </h6>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-muted mb-1">Brand</p>
                      <h6 className="fw-semibold text-info">
                        {product.brandId && typeof product.brandId === "object"
                          ? product.brandId.name
                          : product.brandId || "None"}
                      </h6>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-muted mb-1">Unit</p>
                      <h6 className="fw-semibold">
                        {product.unitId && typeof product.unitId === "object"
                          ? product.unitId.name
                          : product.unitId || "Piece"}
                      </h6>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-muted mb-1"> Quantity</p>
                      <h6
                        className={`fw-bold ${Number(product.quantity || 0) <= Number(product.quantityAlert || 10) ? "text-danger" : "text-dark"}`}
                      >
                        {(product.quantity ?? 0).toString()}
                      </h6>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <p className="text-muted mb-1">SKU</p>
                      <h6 className="fw-semibold">{product.sku}</h6>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-muted mb-1">HSN/SAC Number</p>
                      <h6 className="fw-semibold">{product.itemCode}</h6>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-muted mb-1">
                        Selling Price (After Tax)
                      </p>
                      <h6 className="fw-bold fs-18 text-success">
                        ₹{product.priceAfterTax}
                      </h6>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row mb-3">
                    <div className="col-12">
                      <h5 className="card-title mb-3">Tax Information</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                      <p className="text-muted mb-1">Tax Type</p>
                      <h6 className="fw-semibold">
                        {product.taxType || "N/A"}
                      </h6>
                    </div>
                    <div className="col-md-4 mb-3">
                      <p className="text-muted mb-1">Tax Rate</p>
                      <h6 className="fw-semibold">{product.taxRate || 0}%</h6>
                    </div>
                    <div className="col-md-4 mb-3">
                      <p className="text-muted mb-1">Base Price (Before Tax)</p>
                      <h6 className="fw-semibold text-secondary">
                        ₹{product.priceBeforeTax}
                      </h6>
                    </div>
                  </div>

                  {product.description && (
                    <>
                      <hr className="my-4" />
                      <div className="row">
                        <div className="col-12">
                          <h5 className="card-title mb-3">Description</h5>
                          {/* DOMPurify sanitizes HTML before rendering — prevents XSS attacks */}
                          <p
                            className="text-muted"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(product.description),
                            }}
                          ></p>
                        </div>
                      </div>
                    </>
                  )}

                  {product.customFields &&
                    Object.keys(product.customFields).length > 0 && (
                      <>
                        <hr className="my-4" />
                        <div className="row">
                          <div className="col-12">
                            <h5 className="card-title mb-3">Custom Fields</h5>
                          </div>
                          {Object.entries(product.customFields)
                            .filter(
                              ([key]) =>
                                key !== "quantityAlert" &&
                                key !== "discountType" &&
                                key !== "discountValue",
                            )
                            .map(([key, value]) => {
                              let displayValue =
                                value && typeof value === "object"
                                  ? JSON.stringify(value)
                                  : (value as string) || "N/A";
                              if (
                                (key === "manufacturedDate" ||
                                  key === "expiryDate") &&
                                typeof value === "string" &&
                                value.includes("T")
                              ) {
                                displayValue = value.split("T")[0];
                              }
                              return (
                                <div className="col-md-4 mb-3" key={key}>
                                  <p className="text-muted mb-1 text-capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </p>
                                  <h6 className="fw-semibold">
                                    {displayValue}
                                  </h6>
                                </div>
                              );
                            })}
                        </div>
                      </>
                    )}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">Product Image</h5>
                  <div className="border rounded p-3 text-center mb-4 bg-light">
                    <img
                      src={product.images?.[0]?.url || product69}
                      alt="Product Image"
                      className="img-fluid rounded"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                  </div>

                  <div className="border rounded p-3 text-center bg-light">
                    <h6 className="mb-3 text-start">Barcode</h6>
                    {/* Real barcode generated live from the product's SKU */}
                    <div className="bg-white p-2 border rounded d-flex justify-content-center overflow-hidden">
                      <Barcode
                        value={product.sku || "NO-SKU"}
                        format="CODE128"
                        width={1.5}
                        height={60}
                        displayValue={true}
                        fontSize={12}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal — replaces window.confirm() */}
      {showDeleteModal && (
        <div
          className="modal fade show d-block"
          id="product-delete-modal"
          tabIndex={-1}
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content p-5 px-3 text-center">
                  <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                    <i className="ti ti-trash fs-24 text-danger" />
                  </span>
                  <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Product</h4>
                  <p className="mb-0 fs-16">
                    Are you sure you want to delete{" "}
                    <strong>{product?.product}</strong>? This action cannot be
                    undone.
                  </p>
                  <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                      onClick={() => setShowDeleteModal(false)}
                      disabled={isDeleting}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger fs-13 fw-medium p-2 px-3"
                      onClick={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Deleting...
                        </>
                      ) : (
                        "Yes, Delete"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
