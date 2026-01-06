import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
import { useState, useEffect } from "react";
import PrimeDataTable from "../../components/data-table";
import { InvoiceService, type Invoice } from "../services/invoice.service";
import { all_routes } from "../../routes/all_routes";
import EditInvoice from "../../core/modals/sales/editinvoice";

const InvoiceList = () => {
  const route = all_routes;
  const [dataSource, setDataSource] = useState<Invoice[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState<string | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<Invoice[]>([]);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedInvoices, setSelectedInvoices] = useState<any[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  // Load invoices from localStorage
  const loadData = () => {
    const invoices = InvoiceService.getAllInvoices();
    // Update overdue status
    const updatedInvoices = invoices.map(inv => InvoiceService.updatePaymentStatus(inv));
    setDataSource(updatedInvoices);
    setFilteredData(updatedInvoices);
  };

  useEffect(() => {
    loadData();

    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  // Apply filters
  useEffect(() => {
    let temp = [...dataSource];

    if (selectedPaymentStatus) {
      temp = temp.filter(inv => inv.paymentStatus === selectedPaymentStatus);
    }

    if (selectedCustomer) {
      temp = temp.filter(inv => inv.customerName === selectedCustomer);
    }

    if (sortBy === "recent" || sortBy === "desc") {
      temp = [...temp].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    if (sortBy === "asc") {
      temp = [...temp].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }

    if (sortBy === "last7") {
      const last7 = new Date();
      last7.setDate(last7.getDate() - 7);
      temp = temp.filter(inv => new Date(inv.createdAt) >= last7);
    }

    if (sortBy === "lastMonth") {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      temp = temp.filter(inv => new Date(inv.createdAt) >= lastMonth);
    }

    setFilteredData(temp);
  }, [dataSource, selectedPaymentStatus, selectedCustomer, sortBy]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const columns = [
    {
      header: "Invoice No",
      field: "invoiceNumber",
      sortable: true,
      key: "invoiceNumber",
      body: (rowData: Invoice) => (
        <Link to={`/sales/invoice-details/${rowData.id}`} className="text-primary fw-medium">
          {rowData.invoiceNumber}
        </Link>
      ),
    },
    {
      header: "Customer",
      field: "customerName",
      sortable: true,
      key: "customerName",
      body: (rowData: Invoice) => (
        <div className="d-flex align-items-center me-2">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={`/assets/img/users/${rowData.customerImage}`} alt="customer" />
          </Link>
          <Link to="#">{rowData.customerName}</Link>
        </div>
      ),
    },
    {
      header: "Due Date",
      field: "dueDate",
      sortable: true,
      key: "dueDate",
    },
    {
      header: "Amount",
      field: "grandTotal",
      sortable: true,
      key: "grandTotal",
      body: (rowData: Invoice) => (
        <span className="fw-medium">
          {rowData.invoiceType === 'international' ? '$' : '₹'}
          {rowData.grandTotal.toFixed(2)}
        </span>
      ),
    },
    {
      header: "Paid",
      field: "paidAmount",
      sortable: true,
      key: "paidAmount",
      body: (rowData: Invoice) => (
        <span className="fw-medium">
          {rowData.invoiceType === 'international' ? '$' : '₹'}
          {rowData.paidAmount.toFixed(2)}
        </span>
      ),
    },
    {
      header: "Amount Due",
      field: "amountDue",
      sortable: true,
      key: "amountDue",
      body: (rowData: Invoice) => {
        const amountDue = rowData.grandTotal - rowData.paidAmount;
        
        return (
          <span className="fw-medium text-danger">
            {rowData.invoiceType === 'international' ? '$' : '₹'}
            {amountDue.toFixed(2)}
          </span>
        );
      },
    },
    {
      header: "Status",
      field: "paymentStatus",
      sortable: true,
      key: "paymentStatus",
      body: (rowData: Invoice) => (
        <div>
          {rowData.paymentStatus === "Paid" && (
            <span className="badge badge-soft-success badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {rowData.paymentStatus}
            </span>
          )}
          {rowData.paymentStatus === "Unpaid" && (
            <span className="badge badge-soft-danger badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {rowData.paymentStatus}
            </span>
          )}
          {rowData.paymentStatus === "Overdue" && (
            <span className="badge badge-soft-warning badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {rowData.paymentStatus}
            </span>
          )}
          {rowData.paymentStatus === "Partially Paid" && (
            <span className="badge badge-soft-info badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {rowData.paymentStatus}
            </span>
          )}
        </div>
      ),
    },
    {
      header: "Actions",
      field: "actions",
      key: "actions",
      body: (rowData: Invoice) => (
        <div className="edit-delete-action d-flex align-items-center justify-content-center">
            <Link
            className="me-2 p-2 d-flex align-items-center justify-content-between border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-invoice"
            onClick={() => setEditingInvoice(rowData)}
            title="Edit Invoice"
          >
            <i className="feather icon-edit feather-edit"></i>
          </Link>
          <Link 
            className="me-2 p-2 d-flex align-items-center justify-content-between border rounded" 
            to={`/sales/invoice-details/${rowData.id}`}
            title="View Invoice"
          >
            <i className="feather icon-eye feather-eye" />
          </Link>

          <Link
            className="p-2 d-flex align-items-center justify-content-between border rounded"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              setDeleteId(rowData.id);
              setShowDeleteModal(true);
            }}
            title="Delete Invoice"
          >
            <i className="feather icon-trash-2 text-danger"></i>
          </Link>
        </div>
      ),
    },
  ];

  const handleDeleteInvoice = () => {
    if (!deleteId) return;

    InvoiceService.deleteInvoice(deleteId);
    setDataSource((prev) => prev.filter((inv) => inv.id !== deleteId));

    setDeleteId(null);
    setShowDeleteModal(false);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Invoice List</h4>
                <h6>Manage Your Invoices</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to={route.quotationlist}
                className="btn btn-secondary me-2"
              >
                <i className="ti ti-file-text me-1"></i>
                View Quotations
              </Link>
            </div>
          </div>
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
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    {[...new Set(dataSource.map(inv => inv.customerName))].map(name => (
                      <li key={name}>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                          onClick={() => setSelectedCustomer(name)}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
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
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSelectedPaymentStatus("Paid")}
                      >
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSelectedPaymentStatus("Unpaid")}
                      >
                        Unpaid
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSelectedPaymentStatus("Partially Paid")}
                      >
                        Partially Paid
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSelectedPaymentStatus("Overdue")}
                      >
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
                    Sort By : Recent
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSortBy("recent")}
                      >
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSortBy("asc")}
                      >
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSortBy("desc")}
                      >
                        Descending
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSortBy("lastMonth")}
                      >
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => setSortBy("last7")}
                      >
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className="btn btn-light ms-2"
                onClick={() => {
                  setSelectedPaymentStatus(null);
                  setSelectedCustomer(null);
                  setSortBy(null);
                  setFilteredData(dataSource);
                }}
                disabled={
                  !selectedPaymentStatus &&
                  !selectedCustomer &&
                  !sortBy
                }
              >
                Clear Filters
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={filteredData}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={filteredData.length}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedInvoices}
                  onSelectionChange={(e: any) => setSelectedInvoices(e.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      <EditInvoice invoice={editingInvoice} onUpdate={loadData} />

      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          className="modal show d-block"
          style={{ background: "rgba(0,0,0,0.4)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Invoice</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                />
              </div>

              <div className="modal-body">
                <p>Are you sure you want to delete this invoice?</p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDeleteInvoice}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceList;
