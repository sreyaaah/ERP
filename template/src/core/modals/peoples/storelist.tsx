
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TableTopHead from "../../../components/table-top-head";
import DeleteModal from "../../../components/delete-modal";
import SearchFromApi from "../../../components/data-table/search";
import CommonFooter from "../../../components/footer/commonFooter";
import { useState } from "react";
import PrimeDataTable from "../../../components/data-table";

const StoreList = () => {
  const data = useSelector((state:any) => state.rootReducer.customerdata);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);

  const columns = [
    {
      header: "Store Name",
      field: "CustomerName",
      sortable: true,
      key: "CustomerName",
    },
    {
      header: "Store",
      field: "Customer",
      sortable: true,
      key: "Customer",
    },
    {
      header: "Email",
      field: "Email",
      sortable: true,
      key: "Email",
    },
    {
      header: "Phone",
      field: "Phone",
      sortable: true,
      key: "Phone",
    },
    {
      header: "Country",
      field: "Country",
      sortable: true,
      key: "Country",
    },
    {
      header: "Status",
      field: "Code",
      sortable: false,
      key: "Code",
      body: () => (
        <span
          className={`badge  badge-success d-inline-flex align-items-center badge-xs`}
        >
          <i className="ti ti-point-filled me-1" />
          Active
        </span>
      ),
      sorter: (a: any, b: any) => a.Code.length - b.Code.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <div className="input-block add-lists"></div>

            <Link className="me-2 p-2" to="#">
             <i className="feather icon-eye feather-view" />
            </Link>

            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-store"
            >
              <i className="feather icon-edit"></i>
            </Link>

            <Link
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              className="p-2 d-flex align-items-center border rounded"
              to="#"
            >
              <i  className="feather icon-trash-2" />
            </Link>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.createdby.length - b.createdby.length,
    },
  ];
  const [_searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
    const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Stores</h4>
                <h6>Manage your Store</h6>
              </div>
            </div>
           <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#add-store"
                className="btn btn-primary"
              >
                <i className="feather icon-plus-circle me-2" />
                Add Store
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
                    Select Status
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
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        New Joiners
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body pb-0">
              <div className=" table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={data}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={data.length}
                />
              </div>
            </div>
          </div>

          {/* /product list */}
        </div>
      <CommonFooter />
      </div>
      <>
        {/* Add Store */}
        <div className="modal fade" id="add-store">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Store</h4>
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
                  <div className="mb-3">
                    <label className="form-label">
                      Store Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      User Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="input-blocks mb-3">
                    <label className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                      />
                      <span className="fas toggle-password fa-eye-slash" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-0">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label ">Status</span>
                      <input
                        type="checkbox"
                        id="user2"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="user2" className="checktoggle" />
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
                    Add Store
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Store */}
        {/* Edit Store */}
        <div className="modal fade" id="edit-store">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Store</h4>
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
                  <div className="mb-3">
                    <label className="form-label">
                      Store Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Electro Mart"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      User Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="johnsmith"
                    />
                  </div>
                  <div className="input-blocks mb-3">
                    <label className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                        defaultValue="********"
                      />
                      <span className="fas toggle-password fa-eye-slash" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="electromart@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={+12498345785}
                    />
                  </div>
                  <div className="mb-0">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label ">Status</span>
                      <input
                        type="checkbox"
                        id="user1"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="user1" className="checktoggle" />
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
                    save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Store */}
      </>

      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                  Delete Store
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete employee?
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
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-submit fs-13 fw-medium p-2 px-3"
                  >
                    Yes Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal />
    </>
  );
};

export default StoreList;
