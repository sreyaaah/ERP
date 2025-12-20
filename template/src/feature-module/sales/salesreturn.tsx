import { Link } from "react-router-dom";
import EditSalesRetuens from "../../core/modals/sales/editsalesretuens";
import AddSalesReturns from "../../core/modals/sales/addsalesreturns";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
const SalesReturn = () => {

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Sales Return</h4>
                <h6>Manage your returns</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-sales-new"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Sales Return
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card employee-table">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="search-set"></div>
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Customer
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Carl Evans
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Minerva Rameriz
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Robert Lamon
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Patricia Lewis
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
                        Completed
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Pending
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
                    Payment Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Unpaid
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Overdue
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
              <div className="custom-datatable-filter table-responsive">
                <table className="table datatable">
                  <thead className="thead-light">
                    <tr>
                      <th className="no-sort">
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks" />
                        </label>
                      </th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Due</th>
                      <th>Payment Status</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/pos-product-07.svg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Lenovo IdeaPad 3</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-27.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Carl Evans</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success shadow-none">
                          Received
                        </span>
                      </td>
                      <td>$1000</td>
                      <td>$1000</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badge badge-soft-success badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Paid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/pos-product-10.svg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Apple tablet</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-02.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Minerva Rameriz</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-cyan shadow-none">
                          Pending
                        </span>
                      </td>
                      <td>$1500</td>
                      <td>$0.00</td>
                      <td>$1500</td>
                      <td>
                        <span className="badge badge-soft-danger badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Unpaid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/product-02.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Headphone</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-05.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Robert Lamon</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success shadow-none">
                          Received
                        </span>
                      </td>
                      <td>$2000</td>
                      <td>$1000</td>
                      <td>$1000</td>
                      <td>
                        <span className="badge badge-soft-warning badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Overdue
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/stock-img-02.png"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Nike Jordan</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-03.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Mark Joslyn</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success shadow-none">
                          Received
                        </span>
                      </td>
                      <td>$1500</td>
                      <td>$1500</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badge badge-soft-success badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Paid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/product6.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Macbook Pro</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-22.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Patricia Lewis</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success shadow-none">
                          Received
                        </span>
                      </td>
                      <td>$800</td>
                      <td>$800</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badge badge-soft-success badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Paid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/expire-product-01.png"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Red Premium Satchel</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-12.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Marsha Betts</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-cyan shadow-none">
                          Pending
                        </span>
                      </td>
                      <td>$750</td>
                      <td>$0.00</td>
                      <td>$750</td>
                      <td>
                        <span className="badge badge-soft-danger badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Unpaid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/product7.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Apple Earpods</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-06.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Daniel Jude</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success shadow-none">
                          Received
                        </span>
                      </td>
                      <td>$1300</td>
                      <td>$1300</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badge badge-soft-success badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Paid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/expire-product-02.png"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Iphone 14 Pro</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-21.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Emma Bates</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success shadow-none">
                          Received
                        </span>
                      </td>
                      <td>$1100</td>
                      <td>$1100</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badge badge-soft-success badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Paid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/expire-product-03.png"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Gaming Chair</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-16.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Richard Fralick</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-cyan shadow-none">
                          Pending
                        </span>
                      </td>
                      <td>$2300</td>
                      <td>$2300</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badge badge-soft-success badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Paid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/products/expire-product-04.png"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Borealis Backpack</a>
                        </div>
                      </td>
                      <td>19 Nov 2022</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="avatar avatar-md me-2"
                          >
                            <img
                              src="src/assets/img/users/user-26.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Michelle Robison</a>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-cyan shadow-none">
                          Pending
                        </span>
                      </td>
                      <td>$1700</td>
                      <td>$1700</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badge badge-soft-success badge-xs shadow-none">
                          <i className="ti ti-point-filled me2" />
                          Paid
                        </span>
                      </td>
                      <td className="dflex">
                        <div className="edit-delete-action d-flex align-items-center">
                          <a
                            className="me-2 p-2 d-flex align-items-center border rounded"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-sales-new"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </a>
                          <a
                            className="p-2 d-flex align-items-center border rounded"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

      <AddSalesReturns />
      <EditSalesRetuens />
    </div>
  );
};

export default SalesReturn;
