import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Select from "react-select";
import { Check } from "react-feather";
import PosModals from "../../core/modals/pos-modal/posModalstjsx";
import PosCounter from "../../components/counter/posCounter";
import { discountImg } from "../../utils/imagepath";

const Pos = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showAlert, setShowAlert] = useState(true);
  const [showAlert1, setShowAlert1] = useState(true);

  const Location = useLocation();
  const options = [
    { value: "1", label: "Walk in Customer" },
    { value: "2", label: "John" },
    { value: "3", label: "Smith" },
    { value: "4", label: "Ana" },
    { value: "4", label: "Elza" },
  ];
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const productInfo = target.closest(".product-info") as HTMLElement | null;

      if (productInfo) {
        productInfo.classList.toggle("active");

        const hasActive =
          document.querySelectorAll(".product-info.active").length > 0;

        const emptyCart = document.querySelector(
          ".product-wrap .empty-cart"
        ) as HTMLElement | null;
        const productList = document.querySelector(
          ".product-wrap .product-list"
        ) as HTMLElement | null;

        if (hasActive) {
          if (emptyCart) emptyCart.style.display = "none";
          if (productList) productList.style.display = "block";
        } else {
          if (emptyCart) emptyCart.style.display = "flex";
          if (productList) productList.style.display = "none";
        }
      }
    };

    document.addEventListener("click", handleClick);
    document.body.classList.add("pos-page");

    return () => {
      document.removeEventListener("click", handleClick);
      document.body.classList.remove("pos-page");
    };
  }, [Location.pathname, showAlert1]);

  return (
    <div className="main-wrapper pos-five">
      <div className="page-wrapper pos-pg-wrapper ms-0">
        <div className="content pos-design p-0">
          <div className="row pos-wrapper">
            {/* Products */}
            <div className="col-md-12 col-lg-7 col-xl-8 d-flex">
              <div className="pos-categories tabs_wrapper p-0 flex-fill">
                <div className="content-wrap">
                  <div className="tab-wrap">
                    <ul className="tabs owl-carousel pos-category5">
                      <li
                        id="all"
                        onClick={() => setActiveTab("all")}
                        className={activeTab === "all" ? "active" : ""}
                      >
                        <Link to="#">
                          <img
                            src="src/assets/img/categories/category-01.svg"
                            alt="Categories"
                          />
                        </Link>
                        <h6>
                          <Link to="#">All</Link>
                        </h6>
                      </li>
                      <li
                        id="headphones"
                        onClick={() => setActiveTab("headphones")}
                        className={activeTab === "headphones" ? "active" : ""}
                      >
                        <Link to="#">
                          <img
                            src="src/assets/img/categories/category-02.svg"
                            alt="Categories"
                          />
                        </Link>
                        <h6>
                          <Link to="#">Headset</Link>
                        </h6>
                      </li>
                      <li
                        id="shoes"
                        onClick={() => setActiveTab("shoes")}
                        className={activeTab === "shoes" ? "active" : ""}
                      >
                        <Link to="#">
                          <img
                            src="src/assets/img/categories/category-03.svg"
                            alt="Categories"
                          />
                        </Link>
                        <h6>
                          <Link to="#">Shoes</Link>
                        </h6>
                      </li>
                      <li
                        id="mobiles"
                        onClick={() => setActiveTab("mobiles")}
                        className={activeTab === "mobiles" ? "active" : ""}
                      >
                        <Link to="#">
                          <img
                            src="src/assets/img/categories/category-04.svg"
                            alt="Categories"
                          />
                        </Link>
                        <h6>
                          <Link to="#">Mobiles</Link>
                        </h6>
                      </li>
                      <li
                        id="watches"
                        onClick={() => setActiveTab("watches")}
                        className={activeTab === "watches" ? "active" : ""}
                      >
                        <Link to="#">
                          <img
                            src="src/assets/img/categories/category-05.svg"
                            alt="Categories"
                          />
                        </Link>
                        <h6>
                          <Link to="#">Watches</Link>
                        </h6>
                      </li>
                      <li
                        id="laptops"
                        onClick={() => setActiveTab("laptops")}
                        className={activeTab === "laptops" ? "active" : ""}
                      >
                        <Link to="#">
                          <img
                            src="src/assets/img/categories/category-06.svg"
                            alt="Categories"
                          />
                        </Link>
                        <h6>
                          <Link to="#">Laptops</Link>
                        </h6>
                      </li>
                      <li
                        id="appliances"
                        onClick={() => setActiveTab("appliances")}
                        className={activeTab === "appliances" ? "active" : ""}
                      >
                        <Link to="#">
                          <img
                            src="src/assets/img/categories/category-07.svg"
                            alt="Categories"
                          />
                        </Link>
                        <h6>
                          <Link to="#">Appliance</Link>
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content-wrap">
                    <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                      <div className="mb-3">
                        <h5 className="mb-1">Welcome, Wesley Adrian</h5>
                        <p>December 24, 2024</p>
                      </div>
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <div className="input-icon-start search-pos position-relative mb-2 me-3">
                          <span className="input-icon-addon">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Product"
                          />
                        </div>
                        <Link to="#" className="btn btn-sm btn-dark mb-2 me-2">
                          <i className="ti ti-tag me-1" />
                          View All Brands
                        </Link>
                        <Link to="#" className="btn btn-sm btn-primary mb-2">
                          <i className="ti ti-star me-1" />
                          Featured
                        </Link>
                      </div>
                    </div>
                    <div className="pos-products">
                      <div className="tabs_container">
                        <div
                          className={`tab_content ${
                            activeTab === "all" ? "active" : ""
                          } `}
                          data-tab="all"
                        >
                          <div className="row g-3">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-01.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Mobiles</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">IPhone 14 64GB</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$15800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-02.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Computer</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">MacBook Pro</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1000</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-03.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Rolex Tribute V3</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$6800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-04.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Red Nike Angelo</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$7800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card active mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-05.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Headphones</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Airpod 2</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$5478</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-06.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Blue White OGR</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$987</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-07.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Laptop</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">IdeaPad Slim 5 Gen 7</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1454</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-08.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Headphones</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">SWAGME</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$6587</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-09.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Timex Black Silver</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1457</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-10.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Computer</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Tablet 1.02 inch</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$4744</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-11.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Fossil Pair Of 3 in 1 </Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$789</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-13.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Green Nike Fe</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$7847</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`tab_content ${
                            activeTab === "headphones" ? "active" : ""
                          } `}
                          data-tab="headphones"
                        >
                          <div className="row g-3">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-05.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Headphones</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Airpod 2</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$5478</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-08.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <Check className="feather-16" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Headphones</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">SWAGME</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$6587</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`tab_content ${
                            activeTab === "shoes" ? "active" : ""
                          } `}
                          data-tab="shoes"
                        >
                          <div className="row g-3">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-04.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Red Nike Angelo</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$7800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-06.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Blue White OGR</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$987</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-13.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Green Nike Fe</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$7847</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`tab_content ${
                            activeTab === "mobiles" ? "active" : ""
                          } `}
                          data-tab="mobiles"
                        >
                          <div className="row g-3">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-01.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Mobiles</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">IPhone 14 64GB</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$15800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-14.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Mobiles</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Iphone 11</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$3654</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`tab_content ${
                            activeTab === "watches" ? "active" : ""
                          } `}
                          data-tab="watches"
                        >
                          <div className="row g-3">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-03.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Rolex Tribute V3</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$6800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-09.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Timex Black Silver</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1457</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-11.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Fossil Pair Of 3 in 1 </Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$789</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`tab_content ${
                            activeTab === "laptops" ? "active" : ""
                          } `}
                          data-tab="laptops"
                        >
                          <div className="row g-3">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-02.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Computer</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">MacBook Pro</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1000</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-07.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Laptop</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">IdeaPad Slim 5 Gen 7</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1454</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-10.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Computer</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Tablet 1.02 inch</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$4744</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-13.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Laptop</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Yoga Book 9i</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$4784</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-14.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Laptop</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">IdeaPad Slim 3i</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1245</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`tab_content ${
                            activeTab === "appliances" ? "active" : ""
                          } `}
                          data-tab="appliances"
                        >
                          <div className="row g-3">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-01.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Mobiles</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">IPhone 14 64GB</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$15800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-02.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Computer</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">MacBook Pro</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1000</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-03.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Rolex Tribute V3</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$6800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-04.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Red Nike Angelo</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$7800</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-05.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Headphones</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Airpod 2</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$5478</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-06.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Blue White OGR</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$987</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-07.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Laptop</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">IdeaPad Slim 5 Gen 7</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1454</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-08.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Headphones</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">SWAGME</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$6587</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-09.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Timex Black Silver</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$1457</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-10.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Computer</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Tablet 1.02 inch</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$4744</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-11.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Watches</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Fossil Pair Of 3 in 1 </Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$789</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                              <div
                                className="product-info card mb-0"
                                onClick={() => setShowAlert1(!showAlert1)}
                                tabIndex={0}
                              >
                                <Link to="#" className="pro-img">
                                  <img
                                    src="src/assets/img/products/pos-product-13.png"
                                    alt="Products"
                                  />
                                  <span>
                                    <i className="ti ti-circle-check-filled" />
                                  </span>
                                </Link>
                                <h6 className="cat-name">
                                  <Link to="#">Shoes</Link>
                                </h6>
                                <h6 className="product-name">
                                  <Link to="#">Green Nike Fe</Link>
                                </h6>
                                <div className="d-flex align-items-center justify-content-between price">
                                  <p className="text-gray-9 mb-0">$7847</p>
                                  <div className="qty-item m-0">
                                    <PosCounter />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Products */}
            {/* Order Details */}
            <div className="col-md-12 col-lg-5 col-xl-4 ps-0 theiaStickySidebar d-lg-flex">
              <aside className="product-order-list bg-secondary-transparent flex-fill">
                <div className="card">
                  <div className="card-body">
                    <div className="order-head d-flex align-items-center justify-content-between w-100">
                      <div>
                        <h3>Order List</h3>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge badge-dark fs-10 fw-medium badge-xs">
                          #ORD123
                        </span>
                        <Link className="link-danger fs-16" to="#">
                          <i className="ti ti-trash-x-filled" />
                        </Link>
                      </div>
                    </div>
                    <div className="customer-info block-section">
                      <h5 className="mb-2">Customer Information</h5>
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-grow-1">
                          <Select
                            options={options}
                            classNamePrefix="react-select select"
                            placeholder="Choose a Name"
                            defaultValue={options[0]}
                          />
                        </div>
                        <Link
                          to="#"
                          className="btn btn-teal btn-icon fs-20"
                          data-bs-toggle="modal"
                          data-bs-target="#create"
                        >
                          <i className="ti ti-user-plus" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-info btn-icon fs-20"
                          data-bs-toggle="modal"
                          data-bs-target="#barcode"
                        >
                          <i className="ti ti-scan" />
                        </Link>
                      </div>
                      {showAlert && (
                        <div className="customer-item border border-orange bg-orange-100 d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3">
                          <div>
                            <h6 className="fs-16 fw-bold mb-1">
                              James Anderson
                            </h6>
                            <div className="d-inline-flex align-items-center gap-2 customer-bonus">
                              <p className="fs-13 d-inline-flex align-items-center gap-1">
                                Bonus :
                                <span className="badge bg-cyan fs-13 fw-bold p-1">
                                  148
                                </span>{" "}
                              </p>
                              <p className="fs-13 d-inline-flex align-items-center gap-1">
                                Loyality :
                                <span className="badge bg-teal fs-13 fw-bold p-1">
                                  $20
                                </span>{" "}
                              </p>
                            </div>
                          </div>
                          <Link to="#" className="btn btn-orange btn-sm">
                            Apply
                          </Link>
                          <Link
                            to="#"
                            className="close-icon"
                            onClick={() => setShowAlert(false)}
                          >
                            <i className="ti ti-x" />
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="product-added block-section">
                      <div className="head-text d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <h5 className="me-2">Order Details</h5>
                          <div className="badge bg-light text-gray-9 fs-12 fw-semibold py-2 border rounded">
                            Items : <span className="text-teal">3</span>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="d-flex align-items-center clear-icon fs-10 fw-medium"
                        >
                          Clear all
                        </Link>
                      </div>
                      <div className="product-wrap">
                        <div className="empty-cart">
                          <div className="fs-24 mb-1">
                            <i className="ti ti-shopping-cart" />
                          </div>
                          <p className="fw-bold">No Products Selected</p>
                        </div>
                        <div className="product-list border-0 p-0">
                          <div className="table-responsive">
                            <table className="table table-borderless">
                              <thead>
                                <tr>
                                  <th className="fw-bold bg-light">Item</th>
                                  <th className="fw-bold bg-light">QTY</th>
                                  <th className="fw-bold bg-light text-end">
                                    Cost
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        className="delete-icon"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete"
                                      >
                                        <i className="ti ti-trash-x-filled" />
                                      </Link>
                                      <h6 className="fs-13 fw-normal">
                                        <Link
                                          to="#"
                                          className=" link-default"
                                          data-bs-toggle="modal"
                                          data-bs-target="#products"
                                        >
                                          iPhone 14 64GB
                                        </Link>
                                      </h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="qty-item m-0">
                                      <PosCounter />
                                    </div>
                                  </td>
                                  <td className="fs-13 fw-semibold text-gray-9 text-end">
                                    $15800
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        className="delete-icon"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete"
                                      >
                                        <i className="ti ti-trash-x-filled" />
                                      </Link>
                                      <h6 className="fs-13 fw-normal ">
                                        <Link
                                          to="#"
                                          className="link-default"
                                          data-bs-toggle="modal"
                                          data-bs-target="#products"
                                        >
                                          Red Nike Angelo
                                        </Link>
                                      </h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="qty-item m-0">
                                      <PosCounter />
                                    </div>
                                  </td>
                                  <td className="fs-13 fw-semibold text-gray-9 text-end">
                                    $398
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        className="delete-icon"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete"
                                      >
                                        <i className="ti ti-trash-x-filled" />
                                      </Link>
                                      <h6 className="fs-13 fw-normal ">
                                        <Link
                                          to="#"
                                          className="link-default"
                                          data-bs-toggle="modal"
                                          data-bs-target="#products"
                                        >
                                          Tablet 1.02 inch
                                        </Link>
                                      </h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="qty-item m-0">
                                      <PosCounter />
                                    </div>
                                  </td>
                                  <td className="fs-13 fw-semibold text-gray-9 text-end">
                                    $3000
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        className="delete-icon"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete"
                                      >
                                        <i className="ti ti-trash-x-filled" />
                                      </Link>
                                      <h6 className="fs-13 fw-normal ">
                                        <Link
                                          to="#"
                                          className="link-default"
                                          data-bs-toggle="modal"
                                          data-bs-target="#products"
                                        >
                                          IdeaPad Slim 3i
                                        </Link>
                                      </h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="qty-item m-0">
                                      <PosCounter />
                                    </div>
                                  </td>
                                  <td className="fs-13 fw-semibold text-gray-9 text-end">
                                    $3000
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="discount-item d-flex align-items-center justify-content-between  bg-purple-transparent mt-3 flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <span className="bg-purple discount-icon br-5 flex-shrink-0 me-2">
                            <img
                              src={discountImg}
                              alt="img"
                            />
                          </span>
                          <div>
                            <h6 className="fs-14 fw-bold text-purple mb-1">
                              Discount 5%
                            </h6>
                            <p className="mb-0">
                              For $20 Minimum Purchase, all Items
                            </p>
                            <p></p>
                          </div>
                        </div>
                        <Link to="#" className="close-icon">
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div className="order-total bg-total bg-white p-0">
                      <h5 className="mb-3">Payment Summary</h5>
                      <table className="table table-responsive table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              Shipping
                              <Link
                                to="#"
                                className="ms-3 link-default"
                                data-bs-toggle="modal"
                                data-bs-target="#shipping-cost"
                              >
                                <i className="ti ti-edit" />
                              </Link>
                            </td>
                            <td className="text-gray-9 text-end">$40.21</td>
                          </tr>
                          <tr>
                            <td>
                              Tax
                              <Link
                                to="#"
                                className="ms-3 link-default"
                                data-bs-toggle="modal"
                                data-bs-target="#order-tax"
                              >
                                <i className="ti ti-edit" />
                              </Link>
                            </td>
                            <td className="text-gray-9 text-end">$25</td>
                          </tr>
                          <tr>
                            <td>
                              Coupon
                              <Link
                                to="#"
                                className="ms-3 link-default"
                                data-bs-toggle="modal"
                                data-bs-target="#coupon-code"
                              >
                                <i className="ti ti-edit" />
                              </Link>
                            </td>
                            <td className="text-gray-9 text-end">$25</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="text-danger">Discount</span>
                              <Link
                                to="#"
                                className="ms-3 link-default"
                                data-bs-toggle="modal"
                                data-bs-target="#discount"
                              >
                                <i className="ti ti-edit" />
                              </Link>
                            </td>
                            <td className="text-danger text-end">$15.21</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="round"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="round"
                                >
                                  Roundoff
                                </label>
                              </div>
                            </td>
                            <td className="text-gray-9 text-end">+0.11</td>
                          </tr>
                          <tr>
                            <td>Sub Total</td>
                            <td className="text-gray-9 text-end">$60,454</td>
                          </tr>
                          <tr>
                            <td className="fw-bold border-top border-dashed">
                              Total Payable
                            </td>
                            <td className="text-gray-9 fw-bold text-end border-top border-dashed">
                              $56590
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="card payment-method">
                  <div className="card-body">
                    <h5 className="mb-3">Select Payment</h5>
                    <div className="row align-items-center methods g-2">
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                          data-bs-toggle="modal"
                          data-bs-target="#payment-cash"
                        >
                          <img
                            src="src/assets/img/icons/cash-icon.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Cash</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                          data-bs-toggle="modal"
                          data-bs-target="#payment-card"
                        >
                          <img
                            src="src/assets/img/icons/card.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Card</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                          data-bs-toggle="modal"
                          data-bs-target="#payment-points"
                        >
                          <img
                            src="src/assets/img/icons/points.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Points</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                          data-bs-toggle="modal"
                          data-bs-target="#payment-deposit"
                        >
                          <img
                            src="src/assets/img/icons/deposit.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Deposit</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                          data-bs-toggle="modal"
                          data-bs-target="#payment-cheque"
                        >
                          <img
                            src="src/assets/img/icons/cheque.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Cheque</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                          data-bs-toggle="modal"
                          data-bs-target="#gift-payment"
                        >
                          <img
                            src="src/assets/img/icons/giftcard.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Gift Card</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                          data-bs-toggle="modal"
                          data-bs-target="#scan-payment"
                        >
                          <img
                            src="src/assets/img/icons/scan-icon.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Scan</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                        >
                          <img
                            src="src/assets/img/icons/paylater.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Pay Later</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                        >
                          <img
                            src="src/assets/img/icons/external.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">External</p>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 d-flex">
                        <Link
                          to="#"
                          className="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                          data-bs-toggle="modal"
                          data-bs-target="#split-payment"
                        >
                          <img
                            src="src/assets/img/icons/split-bill.svg"
                            className="me-2"
                            alt="img"
                          />
                          <p className="fs-14 fw-medium">Split Bill</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-row d-flex align-items-center justify-content-between gap-3">
                  <Link
                    to="#"
                    className="btn btn-white d-flex align-items-center justify-content-center flex-fill m-0"
                    data-bs-toggle="modal"
                    data-bs-target="#hold-order"
                  >
                    <i className="ti ti-printer me-2" />
                    Print Order
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-secondary d-flex align-items-center justify-content-center flex-fill m-0"
                  >
                    <i className="ti ti-shopping-cart me-2" />
                    Place Order
                  </Link>
                </div>
              </aside>
            </div>
            {/* /Order Details */}
          </div>
          <div className="pos-footer bg-white p-3 border-top">
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
              <Link
                to="#"
                className="btn btn-orange d-inline-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#hold-order"
              >
                <i className="ti ti-player-pause me-2" />
                Hold
              </Link>
              <Link
                to="#"
                className="btn btn-info d-inline-flex align-items-center justify-content-center"
              >
                <i className="ti ti-trash me-2" />
                Void
              </Link>
              <Link
                to="#"
                className="btn btn-cyan d-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#payment-completed"
              >
                <i className="ti ti-cash-banknote me-2" />
                Payment
              </Link>
              <Link
                to="#"
                className="btn btn-secondary d-inline-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#orders"
              >
                <i className="ti ti-shopping-cart me-2" />
                View Orders
              </Link>
              <Link
                to="#"
                className="btn btn-indigo d-inline-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#reset"
              >
                <i className="ti ti-reload me-2" />
                Reset
              </Link>
              <Link
                to="#"
                className="btn btn-danger d-inline-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#recents"
              >
                <i className="ti ti-refresh-dot me-2" />
                Transaction
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PosModals />
    </div>
  );
};

export default Pos;
