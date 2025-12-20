import { useState } from "react";
import { Link } from "react-router-dom";
import { invoicereportdata } from "../../core/json/invoicereportdata";
import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";

const Invoice = () => {
  const data = invoicereportdata;
  const route = all_routes;
  const columns = [
    {
      header: "Invoice No",
      field: "invoiceno",
      body: (text: any) => (
        <>
          <Link to="#">{text?.invoiceno}</Link>
        </>
      ),
    },

    {
      header: "Customer",
      field: "customer",
      body: (text: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <img src={text.image} alt="product" />
          </Link>
          <Link to="#" className="ms-2">
            {text?.customer}
          </Link>
        </div>
      ),
    },
    {
      header: "Due Date",
      field: "duedate",
    },
    {
      header: "Amount",
      field: "amount",
    },
    {
      header: "Paid",
      field: "paid",
    },
    {
      header: "Amount Due",
      field: "amountdue",
    },

    {
      header: "Status",
      field: "status",
      body: (text: any) => (
        <div>
          {text?.status === "Paid" && (
            <span className="badge badge-soft-success badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {text?.status}
            </span>
          )}
          {text?.status === "Unpaid" && (
            <span className="badge badge-soft-danger badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {text?.status}
            </span>
          )}
          {text?.status === "Overdue" && (
            <span className="badge badge-soft-warning badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {text?.status}
            </span>
          )}
        </div>
      ),
    },
    {
      header: "",
      field: "action",
      body: () => (
        <div className="edit-delete-action d-flex align-items-center justify-content-center">
          <Link
            className="me-2 p-2 d-flex align-items-center justify-content-between border rounded"
            to={route.invoicedetails}
          >
            <i className="feather icon-eye feather-eye" />
          </Link>
          <Link
            className="p-2 d-flex align-items-center justify-content-between border rounded"
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

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(data.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(
    undefined
  );
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  // const Customer = [
  //   { label: 'Carl Evans', value: '1' },
  //   { label: 'Minerva Rameriz', value: '2' },
  //   { label: 'Robert Lamon', value: '3' },
  // ]

  // const Status = [
  //   { label: 'Paid', value: '1' },
  //   { label: 'Unpaid', value: '2' },
  //   { label: 'Robert Lamon', value: '3' },
  // ]

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Invoices </h4>
                <h6>Manage your stock invoices</h6>
              </div>
            </div>
            <TableTopHead />
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

      <DeleteModal />
    </div>
  );
};

export default Invoice;
