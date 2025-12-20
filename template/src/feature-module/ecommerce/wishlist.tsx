import CommonFooter from "../../components/footer/commonFooter";

import { Link } from "react-router-dom";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import {
  pos3Product01,
  pos3Product02,
  pos3Product03,
  pos3Product04,
  pos3Product05,
  pos3Product06,
  pos3Product07,
  pos3Product08,
  pos3Product10,
  pos3Product09,
} from "../../utils/imagepath";
const Wishlist = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Wishlist</h4>
                <h6>Manage your wishlist</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="wishlist-products p-4 bg-white">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="mb-3">Products</h4>
              <div className="d-flex align-items-center mb-3">
                <div className="input-icon-start pos-search position-relative me-2">
                  <span className="input-icon-addon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Product"
                  />
                </div>
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#remove_all"
                >
                  <i className="ti ti-trash" /> Remove All
                </Link>
              </div>
            </div>
            <div className="tabs_container">
              <div className="tab_content active" data-tab="all">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product01} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">IPhone 14 64GB</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$15800</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product02} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">MacBook Pro</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$1000</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product03} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">Rolex Tribute V3</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$6800</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product04} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">Red Nike Angelo</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-danger shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          Out of Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$7800</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card ">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product05} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">Airpod 2</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$5478</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product06} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">Blue White OGR</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$987</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product07} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">IdeaPad Slim 5 Gen 7</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-danger shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          Out of Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$1454</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product08} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">SWAGME</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$6587</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product09} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">Timex Black Silver</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$1457</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link to="#" className="img-bg">
                        <img src={pos3Product10} alt="Products" />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link to="#">Tablet 1.02 inch</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$4744</p>
                        <Link to="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
      <>
        {/* Remove Product */}
        <div className="modal fade modal-default" id="remove">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="success-wrap text-center">
                  <form>
                    <div className="icon-success bg-danger-transparent text-danger mb-2">
                      <i className="ti ti-trash" />
                    </div>
                    <h3 className="mb-2">Remove Product</h3>
                    <p className="fs-16 mb-3">
                      Are you sure you want to remove from wishlist?
                    </p>
                    <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                      <button
                        type="button"
                        className="btn btn-md btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No, Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-md btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Yes, Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Remove Product */}
        {/* Remove all Product */}
        <div className="modal fade modal-default" id="remove_all">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="success-wrap text-center">
                  <form>
                    <div className="icon-success bg-danger-transparent text-danger mb-2">
                      <i className="ti ti-trash" />
                    </div>
                    <h3 className="mb-2">Remove All Products</h3>
                    <p className="fs-16 mb-3">
                      Are you sure you want to remove all from wishlist?
                    </p>
                    <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                      <button
                        type="button"
                        className="btn btn-md btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No, Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-md btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Yes, Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Remove all Product */}
      </>
    </div>
  );
};

export default Wishlist;
