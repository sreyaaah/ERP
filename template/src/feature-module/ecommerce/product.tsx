import { useState } from "react";
import { ProductsData } from "../../core/json/productsdata";
import PrimeDataTable from "../../components/data-table";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import CommonSelect from "../../components/select/common-select";
import { Editor } from "primereact/editor";
import SearchFromApi from "../../components/data-table/search";
import { downloadImg } from "../../utils/imagepath";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

const Products = () => {
  const [text, setText] = useState("");
  const route = all_routes;
  const [data, _setData] = useState<any[]>(ProductsData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const columns = [
    {
      header: "SKU",
      field: "SKU",
      key: "SKU",
      sortable: true,
    },
    {
      key: "Product_Name",
      header: "Product Name",
      field: "Product_Name",
      body: (text: any, body: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <img src={body.image} alt="product" />
          </Link>
          <Link to="#">{text}</Link>
        </div>
      ),
      sortable: true,
    },

    {
      key: "Category",
      header: "Category",
      field: "Category",
      sortable: true,
    },

    {
      key: "Brand",
      header: "Brand",
      field: "Brand",
      sortable: true,
    },

    {
      key: "Price",
      header: "Price",
      field: "Price",
      sortable: true,
    },
    {
      key: "Unit",
      header: "Unit",
      field: "Unit",
      sortable: true,
    },
    {
      key: "Qty",
      header: "Qty",
      field: "Qty",
      sortable: true,
    },

    {
      key: "Created_By",
      header: "Created By",
      field: "Created_By",
      body: (text: any, body: any) => (
        <div className="d-flex align-items-center">
          <span>
            <Link to="#" className="avatar avatar-md me-2">
              <img src={body.profile_image} alt="product" />
            </Link>
          </span>
          <Link to="#">{text}</Link>
        </div>
      ),
      sortable: true,
    },

    {
      header: "",
      field: "actions",
      key: "actions",

      body: () => (
        <div className="edit-delete-action">
          <Link className="me-2 edit-icon p-2" to={route.productdetails}>
            <i className="feather icon-eye action-eye" />
          </Link>
          <Link className="me-2 p-2" to={route.editproduct}>
            <i className="feather icon-edit feather-edit" />
          </Link>
          <Link className="p-2" to="#">
            <i className="feather icon-trash-2" />
          </Link>
        </div>
      ),
      sortable: true,
    },
  ];

  const products = [
    { value: "Bold V3.2", label: "Bold V3.2" },
    { value: "Nike Jordan", label: "Nike Jordan" },
    { value: "Iphone 14 Pro", label: "Iphone 14 Pro" },
  ];
  const Category = [
    { value: "Laptop", label: "Laptop" },
    { value: "Electronics", label: "Electronics" },
    { value: "Shoe", label: "Shoe" },
  ];
  const SubCategory = [
    { value: "Lenovo", label: "Lenovo" },
    { value: "Bolt", label: "Bolt" },
    { value: "Nike", label: "Nike" },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-header">
                <h4 className="fw-bold">Product List</h4>
                <h6>Manage your products</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link to={route.addproduct} className="btn btn-primary">
                <i className="ti ti-circle-plus me-1"></i>
                Add Product
              </Link>
            </div>
            <div className="page-btn import">
              <Link
                to="#"
                className="btn btn-primary color"
                data-bs-toggle="modal"
                data-bs-target="#view-notes"
              >
                <i className="feather icon-download me-2"></i>
                Import Product
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Product
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Lenovo IdeaPad 3
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Beats Pro{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Nike Jordan
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Apple Series 5 Watch
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Created By
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        James Kirwin
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Francis Chang
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Antonio Engle
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Leo Kelly
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Computers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Electronics
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Shoe
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Electronics
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Brand
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Beats
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Nike
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className=" table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={data}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedProducts}
                  onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <>
        {/* Import Product */}
        <div className="modal fade" id="view-notes">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-header">
                      <h4>Import Product</h4>
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
                    <form>
                      <div className="modal-top">
                        <div className="row">
                          <div className="col-12">
                            <div className="input-blocks">
                              <label>
                                Product
                                <span className="ms-1 text-danger">*</span>
                              </label>
                              <CommonSelect
                                className="w-100"
                                options={products}
                                value={selectedProduct}
                                onChange={(e) => setSelectedProduct(e.value)}
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>
                                Category
                                <span className="ms-1 text-danger">*</span>
                              </label>
                              <CommonSelect
                                className="w-100"
                                options={Category}
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.value)}
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>
                                Sub Category
                                <span className="ms-1 text-danger">*</span>
                              </label>
                              <CommonSelect
                                className="w-100"
                                options={SubCategory}
                                value={selectedSubCategory}
                                onChange={(e) =>
                                  setSelectedSubCategory(e.value)
                                }
                                placeholder="Choose"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-6 col-12">
                            <div className="row">
                              <div>
                                <div className="modal-footer-btn download-file">
                                  <Link to="#" className="btn btn-submit">
                                    Download Sample File
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-blocks image-upload-down">
                              <label> Upload CSV File</label>
                              <div className="image-upload download">
                                <input type="file" />
                                <div className="image-uploads">
                                  <img src={downloadImg} alt="img" />
                                  <h4>
                                    Drag and drop a <span>file to upload</span>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Created by
                                <span className="ms-1 text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="mb-3 input-blocks">
                              <label className="form-label">Description</label>
                              <Editor
                                value={text}
                                onTextChange={(e: any) => setText(e.htmlValue)}
                                style={{ height: "200px" }}
                              />
                              <p className="mt-1">Maximum 60 Characters</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-btns">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="modal-footer-btn">
                              <button
                                type="button"
                                className="btn btn-cancel me-2 p-2 px-3"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <Link
                                to="#"
                                className="btn btn-submit p-2 px-3"
                                data-bs-dismiss="modal"
                              >
                                Submit
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Import Product */}
      </>
    </div>
  );
};

export default Products;
