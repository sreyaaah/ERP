import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import PrimeDataTable from "../../components/data-table";
import CommonFooter from "../../components/footer/commonFooter";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
import { InvoiceService, type Invoice } from "../services/invoice.service";
import { CustomerService, type Customer } from "../services/customer.service";
import { all_routes } from "../../routes/all_routes";
import EditInvoice from "../../core/modals/sales/editinvoice";
import DeleteModal from "../../components/delete-modal";
import Swal from "sweetalert2";

const InvoiceList = () => {
  const route = all_routes;
  const [dataSource, setDataSource] = useState<Invoice[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState<string | null>(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [customerList, setCustomerList] = useState<Customer[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<Invoice[]>([]);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedInvoices, setSelectedInvoices] = useState<any[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await InvoiceService.getAllInvoices({
        page: currentPage,
        limit: rows,
        search: searchQuery,
        status: selectedPaymentStatus || undefined,
        customerId: selectedCustomerId || undefined,
        sortBy: sortBy || undefined
      });
      
      if (response.status) {
        setDataSource(response.data);
        setFilteredData(response.data);
        setTotalRecords(response.totalRecords);
      } else {
        setDataSource([]);
        setFilteredData([]);
        setTotalRecords(0);
      }
    } catch (error) {
      console.error('Error loading invoices:', error);
      setDataSource([]);
      setFilteredData([]);
      setTotalRecords(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [currentPage, rows, searchQuery, selectedPaymentStatus, selectedCustomerId, sortBy]);

  const loadCustomers = async () => {
    try {
      const res = await CustomerService.getCustomers({ limit: 1000 });
      if (res.status && res.data) {
        setCustomerList(res.data);
      }
    } catch (error) {
      console.error("Failed to load customers", error);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleDownloadPdfView = (id: string) => {
    // Create an invisible iframe that loads the invoice details page with all CSS applied
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.left = "-9999px";
    iframe.style.top = "0";
    iframe.style.width = "1200px";
    iframe.style.height = "900px";
    iframe.style.opacity = "0";
    iframe.style.pointerEvents = "none";
    iframe.src = `/sales/invoice-details/${id}`;
    document.body.appendChild(iframe);

    iframe.onload = async () => {
      try {
        // Wait for React to fully render inside the iframe
        await new Promise(resolve => setTimeout(resolve, 1500));

        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) throw new Error("Cannot access iframe document");

        const element = iframeDoc.getElementById("invoice-content");
        if (!element) throw new Error("invoice-content not found");

        // Get invoice number from the iframe page title or heading
        const invoiceNumEl = iframeDoc.querySelector(".text-primary");
        const invoiceNum = invoiceNumEl?.textContent?.trim() || id;

        await html2pdf().set({
          margin: 10,
          filename: `Invoice_${invoiceNum}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        }).from(element).save();
      } catch (err) {
        console.error("PDF generation failed:", err);
        // Fallback: open the page normally
        window.open(`/sales/invoice-details/${id}`, "_blank");
      } finally {
        document.body.removeChild(iframe);
      }
    };

    iframe.onerror = () => {
      document.body.removeChild(iframe);
      window.open(`/sales/invoice-details/${id}`, "_blank");
    };
  };

  useEffect(() => {
    const modalEl = document.getElementById('edit-invoice');
    if (modalEl) {
      const handleHidden = () => {
        setEditingInvoice(null);
      };
      modalEl.addEventListener('hidden.bs.modal', handleHidden);
      return () => {
        modalEl.removeEventListener('hidden.bs.modal', handleHidden);
      };
    }
  }, []);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const columns = [
    {
      header: "Invoice No",
      field: "invoiceNumber",
      sortable: true,
      key: "invoiceNumber",
      body: (rowData: Invoice) => (
        <Link to={`/sales/invoice-details/${rowData.invoiceId}`} className="text-primary fw-medium">
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
        <Link to="#" className="text-dark fw-medium">{rowData.customerName}</Link>
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
          {rowData.invoiceType === 'International' ? '$' : '₹'}
          {(rowData.grandTotal || 0).toFixed(2)}
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
          {rowData.invoiceType === 'International' ? '$' : '₹'}
          {(rowData.paidAmount || 0).toFixed(2)}
        </span>
      ),
    },
    {
      header: "Amount Due",
      field: "amountDue",
      sortable: true,
      key: "amountDue",
      body: (rowData: Invoice) => (
          <span className="fw-medium text-danger">
            {rowData.invoiceType === 'International' ? '$' : '₹'}
            {(rowData.amountDue || 0).toFixed(2)}
          </span>
        )
    },
    {
      header: "Status",
      field: "paymentStatus",
      sortable: true,
      key: "paymentStatus",
      body: (rowData: Invoice) => (
        <div>
          {rowData.paymentStatus === "Paid" && (
            <span className="badge badge-soft-success status-badge badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {rowData.paymentStatus}
            </span>
          )}
          {rowData.paymentStatus === "Unpaid" && (
            <span className="badge badge-soft-danger status-badge badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {rowData.paymentStatus}
            </span>
          )}
          {rowData.paymentStatus === "Overdue" && (
            <span className="badge badge-soft-warning status-badge badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {rowData.paymentStatus}
            </span>
          )}
          {rowData.paymentStatus === "Partially Paid" && (
            <span className="badge badge-soft-info status-badge badge-xs shadow-none">
              <i className="ti ti-point-filled me-1"></i>
              {rowData.paymentStatus}
            </span>
          )}
        </div>
      ),
    },
    {
      header: "",
      field: "actions",
      sortable: false,
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
            to={`/sales/invoice-details/${rowData.invoiceId}`}
            title="View Invoice"
          >
            <i className="feather icon-eye feather-eye" />
          </Link>

          <Link
            className="me-2 p-2 d-flex align-items-center justify-content-between border rounded text-primary"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleDownloadPdfView(rowData.invoiceId!);
            }}
            title="Download PDF"
          >
            <i className="feather icon-download"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center justify-content-between border rounded text-danger"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            onClick={(e) => {
              e.preventDefault();
              setDeleteId(rowData.invoiceId as any);
            }}
            title="Delete Invoice"
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  const handleDeleteInvoice = async () => {
    try {
      if (deleteId) {
        await InvoiceService.deleteInvoice(String(deleteId));
        setDeleteId(null);
        Swal.fire("Deleted!", "Invoice has been deleted.", "success");
      } else if (selectedInvoices.length > 0) {
        const ids = selectedInvoices.map((inv) => inv.invoiceId);
        await InvoiceService.bulkDelete(ids);
        setSelectedInvoices([]);
        Swal.fire("Deleted!", `${ids.length} invoices have been deleted.`, "success");
      }
      loadData();
    } catch (err) {
      console.error("Delete failed:", err);
      Swal.fire("Error", "Check console for details.", "error");
    }
  };

  const handleBulkStatusChange = async (status: string) => {
    if (selectedInvoices.length === 0) return;

    try {
      const ids = selectedInvoices.map((inv) => inv.invoiceId);
      await InvoiceService.bulkUpdate(ids, status);
      setSelectedInvoices([]);
      loadData();
      Swal.fire("Updated!", `Statuses updated to ${status}.`, "success");
    } catch (error) {
      console.error("Bulk update failed:", error);
      Swal.fire("Error", "Failed to update statuses.", "error");
    }
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
            <TableTopHead
              onPdfExport={async () => {
                try {
                  await InvoiceService.exportBulk("pdf");
                } catch (error) {
                  console.error("Export PDF failed:", error);
                }
              }}
              onExcelExport={async () => {
                try {
                  await InvoiceService.exportBulk("xlsx");
                } catch (error) {
                  console.error("Export Excel failed:", error);
                }
              }}
            />
            <div className="page-btn">
              <Link
                to={route.quotationlist}
                className="btn btn-secondary me-2"
              >
                <i className="ti ti-file-text me-1"></i>
                View Quotations
              </Link>
              <Link
                to={route.addinvoice}
                className="btn btn-primary"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Invoice
              </Link>
            </div>
          </div>
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="d-flex align-items-center">
                <SearchFromApi
                  callback={handleSearch}
                  rows={rows}
                  setRows={setRows}
                />
                {selectedInvoices.length > 0 && (
                  <div className="d-flex align-items-center ms-3">
                    <div className="dropdown me-2">
                      <button
                        className="btn btn-white btn-sm dropdown-toggle d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        Bulk Update
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end p-2">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1" onClick={() => handleBulkStatusChange("Paid")}>Paid</Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1" onClick={() => handleBulkStatusChange("Unpaid")}>Unpaid</Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1" onClick={() => handleBulkStatusChange("Partially Paid")}>Partially Paid</Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1" onClick={() => handleBulkStatusChange("Overdue")}>Overdue</Link>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      onClick={() => setDeleteId(null)}
                    >
                      <i className="ti ti-trash me-1"></i> Bulk Delete
                    </button>
                    <span className="ms-2 text-muted small">({selectedInvoices.length} selected)</span>
                  </div>
                )}
              </div>
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    {selectedCustomerId 
                      ? customerList.find(c => (c._id || c.id) === selectedCustomerId)?.firstName + ' ' + (customerList.find(c => (c._id || c.id) === selectedCustomerId)?.lastName || '')
                      : "Customer"
                    }
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSelectedCustomerId(null);
                          setCurrentPage(1);
                        }}
                      >
                        All Customers
                      </Link>
                    </li>
                    {customerList.map(customer => (
                      <li key={customer._id || customer.id}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${selectedCustomerId === (customer._id || customer.id) ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedCustomerId((customer._id || customer.id) as string);
                            setCurrentPage(1);
                          }}
                        >
                          {customer.customer || `${customer.firstName} ${customer.lastName || ''}`.trim()}
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
                        onClick={() => {
                          setSelectedPaymentStatus("Paid");
                          setCurrentPage(1);
                        }}
                      >
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSelectedPaymentStatus("Unpaid");
                          setCurrentPage(1);
                        }}
                      >
                        Unpaid
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSelectedPaymentStatus("Partially Paid");
                          setCurrentPage(1);
                        }}
                      >
                        Partially Paid
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSelectedPaymentStatus("Overdue");
                          setCurrentPage(1);
                        }}
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
                    {sortBy === 'asc' ? 'Sort By: Ascending' : 
                     sortBy === 'desc' ? 'Sort By: Descending' :
                     sortBy === 'lastMonth' ? 'Sort By: Last Month' :
                     sortBy === 'last7' ? 'Sort By: Last 7 Days' :
                     'Sort By: Recent'}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSortBy("recent");
                          setCurrentPage(1);
                        }}
                      >
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSortBy("asc");
                          setCurrentPage(1);
                        }}
                      >
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSortBy("desc");
                          setCurrentPage(1);
                        }}
                      >
                        Descending
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSortBy("lastMonth");
                          setCurrentPage(1);
                        }}
                      >
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setSortBy("last7");
                          setCurrentPage(1);
                        }}
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
                  setSelectedCustomerId(null);
                  setSortBy(null);
                  setFilteredData(dataSource);
                  setCurrentPage(1);
                }}
                disabled={
                  !selectedPaymentStatus &&
                  !selectedCustomerId &&
                  !sortBy
                }
              >
                Clear Filters
              </button>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="d-flex justify-content-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="table-responsive">
                  <PrimeDataTable
                    dataKey="invoiceId"
                    column={columns}
                    data={filteredData}
                    rows={rows}
                    setRows={setRows}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalRecords={totalRecords}
                    searchQuery={searchQuery}
                    selectionMode="checkbox"
                    selection={selectedInvoices}
                    onSelectionChange={(e: any) => setSelectedInvoices(e.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      <EditInvoice invoice={editingInvoice} onUpdate={loadData} />
      <DeleteModal onConfirm={handleDeleteInvoice} />
    </div>
  );
};

export default InvoiceList;