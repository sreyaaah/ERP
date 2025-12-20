import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import AddCategory from "../../core/modals/inventory/addcategory";
import CounterThree from "../../components/counter/counterThree";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import AddVariant from "../../core/modals/inventory/addvariant";
import AddVarientNew from "../../core/modals/inventory/addVarientNew";
import { phoneAdd1, phoneAdd2 } from "../../utils/imagepath";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import { Editor } from "primereact/editor";
import CommonSelect from "../../components/select/common-select";
import Select from "react-select";

const EditProduct = () => {
  const route = all_routes;
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBarcodeSymbol, setSelectedBarcodeSymbol] =
    React.useState(null);
  const [selectedTaxType, setSelectedTaxType] = React.useState(null);

  const [selectedWarranty, setSelectedWarranty] = useState<string | null>(null);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(
    null
  );
  const [selectedSellingType, setSelectedSellingType] = useState<string | null>(
    null
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [text, setText] = useState("");

  const store = [
    { value: "thomas", label: "Thomas" },
    { value: "rasmussen", label: "Rasmussen" },
    { value: "fredJohn", label: "Fred John" },
  ];
  const warehouse = [
    { value: "legendary", label: "Legendary" },
    { value: "determined", label: "Determined" },
    { value: "sincere", label: "Sincere" },
  ];
  const category = [
    { value: "lenovo", label: "Lenovo" },
    { value: "electronics", label: "Electronics" },
  ];
  const subcategory = [
    { value: "lenovo", label: "Lenovo" },
    { value: "electronics", label: "Electronics" },
  ];

  const brand = [
    { value: "nike", label: "Nike" },
    { value: "bolt", label: "Bolt" },
  ];
  const unit = [
    { value: "kg", label: "Kg" },
    { value: "pc", label: "Pc" },
  ];
  const sellingtype = [
    { value: "transactionalSelling", label: "Transactional selling" },
    { value: "solutionSelling", label: "Solution selling" },
  ];
  const barcodesymbol = [
    { value: "code34", label: "Code34" },
    { value: "code35", label: "Code35" },
    { value: "code36", label: "Code36" },
  ];
  const taxtype = [
    { value: "exclusive", label: "Exclusive" },
    { value: "salesTax", label: "Sales Tax" },
  ];
  const discounttype = [
    { value: "choose", label: "Choose" },
    { value: "percentage", label: "Percentage" },
    { value: "cash", label: "Cash" },
  ];
  const warrenty = [
    { value: "choose", label: "Choose" },
    { value: "Replacement Warranty", label: "Replacement Warranty" },
    { value: "On-Site Warranty", label: "On-Site Warranty" },
    {
      value: "Accidental Protection Plan",
      label: "Accidental Protection Plan",
    },
  ];
  const Variant = [
    { value: "choose", label: "Choose" },
    { value: "Color", label: "Color" },
    { value: "Red", label: "Red" },
    { value: "Black", label: "Black" },
  ];
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleRemoveProduct = () => {
    setIsImageVisible(false);
  };
  const [isImageVisible1, setIsImageVisible1] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const handleRemoveProduct1 = () => {
    setIsImageVisible1(false);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>New Product</h4>
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
          {/* /add */}
          <form>
            <div className="card">
              <div className="card-body add-product pb-0">
                <div
                  className="accordions-items-seperate"
                  id="accordionSpacingExample"
                >
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
                                Store<span className="text-danger ms-1">*</span>
                              </label>
                              <CommonSelect
                                className="w-100"
                                options={store}
                                value={selectedStore}
                                onChange={(e) => setSelectedStore(e.value)}
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Warehouse
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <CommonSelect
                                className="w-100"
                                options={warehouse}
                                value={selectedWarehouse}
                                onChange={(e) => setSelectedWarehouse(e.value)}
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Product Name
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <input
                                type="text"
                                defaultValue={"Lenovo 3rd Generation"}
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Slug<span className="text-danger ms-1">*</span>
                              </label>
                              <input
                                type="text"
                                defaultValue={"computers"}
                                className="form-control"
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
                                defaultValue={"LNV-IP3-8GB-256SSD-BLK"}
                                className="form-control list"
                              />
                              <button
                                type="button"
                                className="btn btn-primaryadd"
                              >
                                Generate
                              </button>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Selling Type
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <CommonSelect
                                className="w-100"
                                options={sellingtype}
                                value={selectedSellingType}
                                onChange={(e) =>
                                  setSelectedSellingType(e.value)
                                }
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="addservice-info">
                          <div className="row">
                            <div className="col-sm-6 col-12">
                              <div className="mb-3">
                                <div className="add-newplus">
                                  <label className="form-label">
                                    Category
                                    <span className="text-danger ms-1">*</span>
                                  </label>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add-units-category"
                                  >
                                    <i className="feather icon-plus-circle plus-down-add" />
                                    <span>Add New</span>
                                  </Link>
                                </div>
                                <CommonSelect
                                  className="w-100"
                                  options={category}
                                  value={selectedCategory}
                                  onChange={(e) => setSelectedCategory(e.value)}
                                  placeholder="Choose"
                                  filter={false}
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-12">
                              <div className="mb-3">
                                <label className="form-label">
                                  Sub Category
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <CommonSelect
                                  className="w-100"
                                  options={subcategory}
                                  value={selectedSubCategory}
                                  onChange={(e) =>
                                    setSelectedSubCategory(e.value)
                                  }
                                  placeholder="Choose"
                                  filter={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="add-product-new">
                          <div className="row">
                            <div className="col-sm-6 col-12">
                              <div className="mb-3">
                                <div className="add-newplus">
                                  <label className="form-label">
                                    Brand
                                    <span className="text-danger ms-1">*</span>
                                  </label>
                                </div>
                                <CommonSelect
                                  className="w-100"
                                  options={brand}
                                  value={selectedBrand}
                                  onChange={(e) => setSelectedBrand(e.value)}
                                  placeholder="Choose"
                                  filter={false}
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-12">
                              <div className="mb-3">
                                <div className="add-newplus">
                                  <label className="form-label">
                                    Unit
                                    <span className="text-danger ms-1">*</span>
                                  </label>
                                </div>
                                <CommonSelect
                                  className="w-100"
                                  options={unit}
                                  value={selectedUnit}
                                  onChange={(e) => setSelectedUnit(e.value)}
                                  placeholder="Choose"
                                  filter={false}
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
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <CommonSelect
                                className="w-100"
                                options={barcodesymbol}
                                value={selectedBarcodeSymbol}
                                onChange={(e) =>
                                  setSelectedBarcodeSymbol(e.value)
                                }
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6 col-12">
                            <div className="mb-3 list position-relative">
                              <label className="form-label">
                                Item Code
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <input
                                type="text"
                                defaultValue={"PT001"}
                                className="form-control list"
                              />
                              <button
                                type="submit"
                                className="btn btn-primaryadd"
                              >
                                Generate
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Editor */}
                        <div className="col-lg-12">
                          <div className="summer-description-box">
                            <label className="form-label">Description</label>
                            <Editor
                              value={text}
                              onTextChange={(e: any) => setText(e.htmlValue)}
                              style={{ height: "200px" }}
                            />
                            <p className="fs-14 mt-1">Maximum 60 Words</p>
                          </div>
                        </div>
                        {/* /Editor */}
                      </div>
                    </div>
                  </div>
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
                            <span>Pricing &amp; Stocks</span>
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
                        <div className="mb-3s">
                          <label className="form-label">
                            Product Type
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="single-pill-product mb-3">
                            <ul
                              className="nav nav-pills"
                              id="pills-tab1"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <span
                                  className="custom_radio me-4 mb-0 active"
                                  id="pills-home-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-home"
                                  role="tab"
                                  aria-controls="pills-home"
                                  aria-selected="true"
                                >
                                  <input
                                    type="radio"
                                    className="form-control"
                                    name="payment"
                                  />
                                  <span className="checkmark" /> Single Product
                                </span>
                              </li>
                              <li className="nav-item" role="presentation">
                                <span
                                  className="custom_radio me-2 mb-0"
                                  id="pills-profile-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-profile"
                                  role="tab"
                                  aria-controls="pills-profile"
                                  aria-selected="false"
                                >
                                  <input
                                    type="radio"
                                    className="form-control"
                                    name="sign"
                                  />
                                  <span className="checkmark" /> Variable
                                  Product
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            <div className="single-product">
                              <div className="row">
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Quantity
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Price
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Tax Type
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
                                    </label>
                                    <CommonSelect
                                      className="w-100"
                                      options={taxtype}
                                      value={selectedTaxType}
                                      onChange={(e) =>
                                        setSelectedTaxType(e.value)
                                      }
                                      placeholder="Choose"
                                      filter={false}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Discount Type
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
                                    </label>
                                    <Select
                                      classNamePrefix="react-select"
                                      options={discounttype}
                                      defaultValue={discounttype[0]}
                                      placeholder="Choose"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Discount Value
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Quantity Alert
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                          >
                            <div className="row select-color-add">
                              <div className="col-lg-6 col-sm-6 col-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Variant Attribute{" "}
                                    <span className="text-danger ms-1">*</span>
                                  </label>
                                  <div className="row">
                                    <div className="col-lg-10 col-sm-10 col-10">
                                      <CommonSelect
                                        onChange={(e) =>
                                          setSelectedVariant(e.value)
                                        }
                                        className="w-100"
                                        options={Variant}
                                        value={selectedVariant}
                                        placeholder="Choose"
                                        filter={false}
                                      />
                                    </div>
                                    <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                      <div className="add-icon tab">
                                        <Link
                                          to={"#"}
                                          className="btn btn-filter"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add-units"
                                        >
                                          <i className="feather feather-plus-circle" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="selected-hide-color"
                                  id="input-show"
                                >
                                  <label className="form-label">
                                    Variant Attribute{" "}
                                    <span className="text-danger ms-1">*</span>
                                  </label>
                                  <div className="row align-items-center">
                                    <div className="col-lg-10 col-sm-10 col-10">
                                      <div className="mb-3">
                                        <input
                                          className="input-tags form-control"
                                          id="inputBox"
                                          type="text"
                                          data-role="tagsinput"
                                          name="specialist"
                                          defaultValue="red, black"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                      <div className="mb-3 ">
                                        <Link to="#" className="remove-color">
                                          <i className="far fa-trash-alt" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="modal-body-table border"
                              id="variant-table"
                            >
                              <div className="table-responsive">
                                <table className="table border">
                                  <thead>
                                    <tr>
                                      <th>Variantion</th>
                                      <th>Variant Value</th>
                                      <th>SKU</th>
                                      <th>Quantity</th>
                                      <th>Price</th>
                                      <th className="no-sort" />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="color"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="red"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={1234}
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <CounterThree />
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={50000}
                                          />
                                        </div>
                                      </td>
                                      <td className="action-table-data">
                                        <div className="edit-delete-action">
                                          <div className="input-block add-lists">
                                            <label className="checkboxs">
                                              <input
                                                type="checkbox"
                                                defaultChecked
                                              />
                                              <span className="checkmarks" />
                                            </label>
                                          </div>
                                          <Link
                                            className="me-2 p-2"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add-variation"
                                          >
                                            <i
                                              data-feather="plus"
                                              className="feather-edit"
                                            />
                                          </Link>
                                          <Link
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-modal"
                                            className="p-2"
                                            to="#"
                                          >
                                            <i
                                              data-feather="trash-2"
                                              className="feather-trash-2"
                                            />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="color"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="black"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={2345}
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <CounterThree />
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={50000}
                                          />
                                        </div>
                                      </td>
                                      <td className="action-table-data">
                                        <div className="edit-delete-action">
                                          <div className="input-block add-lists">
                                            <label className="checkboxs">
                                              <input
                                                type="checkbox"
                                                defaultChecked
                                              />
                                              <span className="checkmarks" />
                                            </label>
                                          </div>
                                          <Link
                                            className="me-2 p-2"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add-variation"
                                          >
                                            <i
                                              data-feather="plus"
                                              className="feather-edit"
                                            />
                                          </Link>
                                          <Link
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-modal"
                                            className="p-2"
                                            to="#"
                                          >
                                            <i
                                              data-feather="trash-2"
                                              className="feather-trash-2"
                                            />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border mb-4">
                    <h2 className="accordion-header" id="headingSpacingThree">
                      <div
                        className="accordion-button collapsed bg-white"
                        data-bs-toggle="collapse"
                        data-bs-target="#SpacingThree"
                        aria-expanded="true"
                        aria-controls="SpacingThree"
                      >
                        <div className="d-flex align-items-center justify-content-between flex-fill">
                          <h5 className="d-flex align-items-center">
                            <i className="feather icon-image text-primary me-2" />
                            <span>Images</span>
                          </h5>
                        </div>
                      </div>
                    </h2>
                    <div
                      id="SpacingThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingSpacingThree"
                    >
                      <div className="accordion-body border-top">
                        <div className="text-editor add-list add">
                          <div className="col-lg-12">
                            <div className="add-choosen">
                              <div className="mb-3">
                                <div className="image-upload">
                                  <input type="file" />
                                  <div className="image-uploads">
                                    <i className="feather icon-plus-circle plus-down-add me-0" />
                                    <h4>Add Images</h4>
                                  </div>
                                </div>
                              </div>
                              {isImageVisible1 && (
                                <div className="phone-img">
                                  <img src={phoneAdd2} alt="image" />
                                  <Link to="#">
                                    <i
                                      className="feather icon-x x-square-add remove-product"
                                      onClick={handleRemoveProduct1}
                                    />
                                  </Link>
                                </div>
                              )}
                              {isImageVisible && (
                                <div className="phone-img">
                                  <img src={phoneAdd1} alt="image" />
                                  <Link to="#">
                                    <i
                                      className="feather icon-x x-square-add remove-product"
                                      onClick={handleRemoveProduct}
                                    />
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <div className="p-3 bg-light rounded d-flex align-items-center border mb-3">
                          <div className=" d-flex align-items-center">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="warranties"
                                defaultValue="option1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="warranties"
                              >
                                Warranties
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="manufacturer"
                                defaultValue="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="manufacturer"
                              >
                                Manufacturer
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="expiry"
                                defaultValue="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="expiry"
                              >
                                Expiry
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Warranty
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <CommonSelect
                                className="w-100"
                                options={warrenty}
                                value={selectedWarranty}
                                onChange={(e) => setSelectedWarranty(e.value)}
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <label className="form-label">
                                Manufacturer
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <input
                                type="text"
                                defaultValue={"Lenovo"}
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Manufactured Date
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <div className="input-groupicon calender-input">
                                <i className="feather icon-calendar info-img" />
                                <CommonDatePicker
                                  value={date1}
                                  onChange={setDate1}
                                  className="w-100"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Expiry On
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <div className="input-groupicon calender-input">
                                <i className="feather icon-calendar info-img" />
                                <CommonDatePicker
                                  value={date2}
                                  onChange={setDate2}
                                  className="w-100"
                                />
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

            <div className="col-lg-12">
              <div className="d-flex align-items-center justify-content-end mb-4">
                <button type="button" className="btn btn-secondary me-2">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Product
                </button>
              </div>
            </div>
          </form>
          {/* /add */}
        </div>
      </div>
      {/* Add Category */}
      <div className="modal fade" id="add-product-category">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Category</h4>
              </div>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <label className="form-label">
                Category<span className="ms-1 text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="modal-footer">
              <Link
                to="#"
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <Link
                to={all_routes.addproduct}
                className="btn btn-primary text-white fs-13 fw-medium p-2 px-3"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Category */}

      {/* delete modal */}
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

      <AddCategory />
      <AddVariant />
      <AddVarientNew />
    </>
  );
};

export default EditProduct;
