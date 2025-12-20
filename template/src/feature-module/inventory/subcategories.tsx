import React, {  useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import {
  laptop,
  product1,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
} from "../../utils/imagepath";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import { Editor } from "primereact/editor";

export const subcateorydata = [
  {
    id: 1,
    img: product1,
    category: "Computers",
    parentcategory: "Computers",
    categorycode: "CT001",
    description: "Computers description",
    status: "Active",
  },
  {
    id: 2,
    img: product2,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT002",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 3,
    img: product3,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT003",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 4,
    img: product4,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT004",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 5,
    img: product5,
    category: "Accessories",
    parentcategory: "Accessories",
    categorycode: "CT005",
    description: "Accessories description",
    status: "Active",
  },
  {
    id: 6,
    img: product6,
    category: "Shoes",
    parentcategory: "Shoes",
    categorycode: "CT006",
    description: "Shoes description",
    status: "Active",
  },
  {
    id: 7,
    img: product7,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT007",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 8,
    img: product8,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT008",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 9,
    img: product9,
    category: "Computers",
    parentcategory: "Computers",
    categorycode: "CT009",
    description: "Computers description",
    status: "Active",
  },
  {
    id: 10,
    img: product10,
    category: "Health Care",
    parentcategory: "Health Care",
    categorycode: "CT0010",
    description: "Health Care description",
    status: "Active",
  },
  {
    id: 11,
    img: product11,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT004",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 12,
    img: product12,
    category: "Accessories",
    parentcategory: "Accessories",
    categorycode: "CT005",
    description: "Accessories description",
    status: "Active",
  },
  {
    id: 13,
    img: product13,
    category: "Shoes",
    parentcategory: "Shoes",
    categorycode: "CT006",
    description: "Shoes description",
    status: "Active",
  },
  {
    id: 14,
    img: product14,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT007",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 15,
    img: product15,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT008",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 16,
    img: product16,
    category: "Computers",
    parentcategory: "Computers",
    categorycode: "CT009",
    description: "Computers description",
    status: "Active",
  },
  {
    id: 17,
    img: product17,
    category: "Health Care",
    parentcategory: "Health Care",
    categorycode: "CT0010",
    description: "Health Care description",
    status: "Active",
  },
];

// Interface for subcategory data structure
interface SubCategoryData {
  img: string;
  parentcategory: string;
  category: string;
  categorycode: string;
  description: string;
  status: string;
  createdby: string;
  logo: string;
}



const SubCategories: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);
  const Category = [{ label: "Laptop", value: "1" }];
  const [text, setText] = useState("");

  const columns = [
    {
      field: "logo",
      header: "Image",
      key: "logo",
      sortable: true,
      body: (rowData: SubCategoryData) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <img alt="" src={rowData.img} />
          </Link>
        </span>
      ),
    },
    {
      field: "parentcategory",
      header: "Sub Category",
      key: "parentcategory",
      sortable: true,
    },
    {
      field: "category",
      header: "Category",
      key: "category",
      sortable: true,
    },
    {
      field: "categorycode",
      header: "Category Code",
      key: "categorycode",
      sortable: true,
    },
    {
      field: "description",
      header: "Description",
      key: "description",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      key: "status",
      sortable: true,
      body: (rowData: SubCategoryData) => (
        <span className="badge bg-success fw-medium fs-10">
          {rowData.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row: any) => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-customer"
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];



  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Sub Category</h4>
                <h6>Manage your sub categories</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-category"
              >
                <i className="ti ti-circle-plus me-1"></i> Add Sub Category
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
                    Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive sub-category-table">
                <PrimeDataTable
                  column={columns}
                  data={subcateorydata}
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
        {/* Add Category */}
        <div className="modal fade" id="add-category">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Add Sub Category</h4>
                    </div>
                    <button
                      type="button"
                      className="close bg-danger text-white fs-16"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <div className="add-image-upload">
                          <div className="add-image">
                            <span className="fw-normal">
                              <i className="feather icon-plus-circle plus-down-add" />{" "}
                              Add Image
                            </span>
                          </div>
                          <div className="new-employee-field">
                            <div className="mb-0">
                              <div className="image-upload mb-2">
                                <input type="file" />
                                <div className="image-uploads">
                                  <h4 className="fs-13 fw-medium">
                                    Upload Image
                                  </h4>
                                </div>
                              </div>
                              <span>JPEG, PNG up to 2 MB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Category<span className="text-danger ms-1">*</span>
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
                      <div className="mb-3">
                        <label className="form-label">
                          Sub Category
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Category Code
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Description<span className="text-danger ms-1">*</span>
                        </label>
                        <Editor
                          value={text}
                          onTextChange={(e: any) => setText(e.htmlValue)}
                          style={{ height: "200px" }}
                        />
                      </div>
                      <div className="mb-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user2"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user2" className="checktoggle" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <Link
                      to="#"
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    >
                      Create Subcategory
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Category */}
        {/* Edit Category */}
        <div className="modal fade" id="edit-category">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Edit Sub Category</h4>
                    </div>
                    <button
                      type="button"
                      className="close bg-danger text-white fs-16"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <div className="add-image-upload">
                          <div className="add-image p-1 border-solid">
                            <img src={laptop} alt="image" />
                            <Link to="#">
                              <i className="feather icon-x x-square-add image-close remove-product fs-12 text-white bg-danger rounded-1" />
                            </Link>
                          </div>
                          <div className="new-employee-field">
                            <div className="mb-0">
                              <div className="image-upload mb-2">
                                <input type="file" />
                                <div className="image-uploads">
                                  <h4 className="fs-13 fw-medium">
                                    Change Image
                                  </h4>
                                </div>
                              </div>
                              <span>JPEG, PNG up to 2 MB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Category<span className="text-danger ms-1">*</span>
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
                      <div className="mb-3">
                        <label className="form-label">
                          Sub Category
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Laptop"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Category Code
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="CT001"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Description<span className="text-danger ms-1">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          defaultValue={"Efficient Productivity"}
                        />
                      </div>
                      <div className="mb-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user3"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user3" className="checktoggle" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <Link
                      to="#"
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    >
                      Add Sub Category
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Category */}
        <DeleteModal />
      </>
    </>
  );
};

export default SubCategories;
