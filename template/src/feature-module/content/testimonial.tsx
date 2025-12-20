import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../components/data-table";
import {
  user01,
  user02,
  user10,
  user17,
  user20,
  user28,
  user29,
  user32,
  user4,
  user8,
} from "../../utils/imagepath";
import CommonSelect from "../../components/select/common-select";
import SearchFromApi from "../../components/data-table/search";
import TableTopHead from "../../components/table-top-head";
import DeleteModal from "../../components/delete-modal";

const Testimonial = () => {
  const [selectedRole, setSelectedRole] = React.useState(null);
  const [selectedRating, setSelectedRating] = React.useState(null);
  const [editSelectedRole, setEditSelectedRole] = React.useState(null);
  const [editSelectedRating, setEditSelectedRating] = React.useState(null);

  const data = [
    {
      Author: "Carl Evans",
      Image: user32,
      Role: "Manager",
      Content:
        "This POS system has streamlined our operations and improved efficiency!",
      CreatedDate: "24 Dec 2024",
    },
    {
      Author: "Minerva Rameriz",
      Image: user02,
      Role: "Salesman",
      Content: "The POS system makes processing sales fast and effortless",
      CreatedDate: "25 Dec 2024",
    },
    {
      Author: "Robert Lamon",
      Image: user01,
      Role: "Supervisor",
      Content: "Easy to track sales and team performance in real-time",
      CreatedDate: "24 Dec 2024",
    },
    {
      Author: "Patricia Lewis",
      Image: user4,
      Role: "Store Keeper",
      Content: "This system saves me time by automating many inventory tasks",
      CreatedDate: "27 Dec 2024",
    },
    {
      Author: "Mark Joslyn",
      Image: user8,
      Role: "Manager",
      Content:
        "It’s easy to manage sales, inventory, and staff with this POS system!",
      CreatedDate: "28 Dec 2024",
    },
    {
      Author: "Marsha Betts",
      Image: user10,
      Role: "Inventory Manager",
      Content: "Real-time inventory updates make stock management a breeze",
      CreatedDate: "30 Dec 2024",
    },
    {
      Author: "Daniel Jude",
      Image: user28,
      Role: "Delivery Biker",
      Content: "POS integration makes tracking deliveries easy!",
      CreatedDate: "14 Dec 2024",
    },
    {
      Author: "Emma Bates",
      Image: user17,
      Role: "Cashier",
      Content: "Quick and easy to use - checkouts have never been faster!",
      CreatedDate: "24 Dec 2024",
    },
    {
      Author: "Richard Fralick",
      Image: user20,
      Role: "Accountant",
      Content:
        "Transaction tracking is simplified, making reconciliation faster.",
      CreatedDate: "10 Dec 2024",
    },
    {
      Author: "Michelle Robison",
      Image: user29,
      Role: "Manager",
      Content:
        "Our team is more organized, and customer checkouts are faster than ever.",
      CreatedDate: "16 Dec 2024",
    },
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(data.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const columns = [
    {
      header: "Author",
      field: "Author",
      body: (data: any) => (
        <>
          <div className="d-flex align-items-center">
            <Link to="#" className="avatar avatar-md">
              <img src={data?.Image} className="img-fluid" alt="img" />
            </Link>
            <div className="ms-2">
              <p className="text-dark mb-0">
                <Link to="#">{data?.Author}</Link>
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      header: "Role",
      field: "Role",
    },
    {
      header: "Content",
      field: "Content",
    },

    {
      header: "Rating",
      field: "Status",
      body: () => (
        <>
          <div>
            <span>
              <i className="ti ti-star-filled text-warning" />
            </span>
            <span>
              <i className="ti ti-star-filled text-warning" />
            </span>
            <span>
              <i className="ti ti-star-filled text-warning" />
            </span>
            <span>
              <i className="ti ti-star-filled text-warning" />
            </span>
            <span>
              <i className="ti ti-star-filled text-warning" />
            </span>
          </div>
        </>
      ),
    },
    {
      header: "Created Date",
      field: "CreatedDate",
    },

    {
      header: "",
      field: "action",
      className: "action-table-data",
      sortable: false,
      body: () => (
        <div className="edit-delete-action">
          <Link
            className="me-2 p-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-testimonial"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="p-2"
            to="#"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
    },
  ];
  const option = [
    { value: "1", label: "Manager" },
    { value: "2", label: "Supervisor" },
  ];
  const option2 = [
    { value: "1", label: "5 Star" },
    { value: "2", label: "4 Star" },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Testimonials</h4>
                <h6>Manage your testimonials</h6>
              </div>
            </div>
           <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-testimonial"
              >
                <i className="feather icon-plus-circle me-1" />
                Add Testimonial
              </Link>
            </div>
          </div>
          {/* product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
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
            <div className="card-body p-0">
              <div className=" table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={data}
                  totalRecords={totalRecords}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
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
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* Add Testimonial */}
      <div className="modal fade" id="add-testimonial">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Testimonial</h4>
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
            <form>
              <div className="modal-body">
                <div className="new-employee-field">
                  <div className="profile-pic-upload">
                    <div className="profile-pic">
                      <span>
                        <i className="feather icon-plus-circle plus-down-add" />
                        Add Image
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="image-upload mb-0">
                        <input type="file" />
                        <div className="image-uploads">
                          <h4>Upload Image</h4>
                        </div>
                      </div>
                      <p className="mt-2">JPEG, PNG up to 2 MB</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Author <span className="text-danger ms-1">*</span>
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Role <span className="text-danger ms-1">*</span>
                    </label>

                    <CommonSelect
                      filter={false}
                      options={option}
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.value)}
                      placeholder="Choose"
                    />
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label">
                      Ratings <span className="text-danger ms-1">*</span>
                    </label>

                    <CommonSelect
                      filter={false}
                      options={option2}
                      value={selectedRating}
                      onChange={(e) => setSelectedRating(e.value)}
                      placeholder="Choose"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Add Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Testimonial */}
      {/* Edit Testimonial */}
      <div className="modal fade" id="edit-testimonial">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Testimonial</h4>
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
            <form>
              <div className="modal-body">
                <div className="new-employee-field">
                  <div className="profile-pic-upload">
                    <div className="profile-pic">
                      <span>
                        <i className="feather icon-plus-circle plus-down-add" />
                        Add Image
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="image-upload mb-0">
                        <input type="file" />
                        <div className="image-uploads">
                          <h4>Upload Image</h4>
                        </div>
                      </div>
                      <p className="mt-2">JPEG, PNG up to 2 MB</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Author <span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="Carl Evans"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Role <span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      filter={false}
                      options={option}
                      value={editSelectedRole}
                      onChange={(e) => setEditSelectedRole(e.value)}
                      placeholder="Choose"
                    />
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label">
                      Ratings <span className="text-danger ms-1">*</span>
                    </label>

                    <CommonSelect
                      filter={false}
                      options={option2}
                      value={editSelectedRating}
                      onChange={(e) => setEditSelectedRating(e.value)}
                      placeholder="Choose"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Testimonial */}
      {/* delete modal */}
     <DeleteModal />
      {/* /delete modal */}
    </>
  );
};

export default Testimonial;
