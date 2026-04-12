import { Link, useNavigate } from "react-router-dom";
import EditQuotation from "../../core/modals/sales/editquotation";
import CommonFooter from "../../components/footer/commonFooter";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
import { useState, useEffect, useCallback } from "react";
import PrimeDataTable from "../../components/data-table";
import AddQuotation from "../../core/modals/sales/addquotation";
import {
  QuotationService,
  type Quotation,
} from "../services/quotation.service";
import { CustomerService } from "../services/customer.service";
import { all_routes } from "../../routes/all_routes";
import DeleteModal from "../../components/delete-modal";

const STATUS_BADGE: Record<string, string> = {
  Converted: "badge-cyan",
  Sent: "badge-success",
  Ordered: "badge-warning",
  Pending: "badge-secondary",
};

const QuotationList = () => {
  const navigate = useNavigate();
  const route = all_routes;
  const [filteredData, setFilteredData] = useState<Quotation[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [editingQuotation, setEditingQuotation] = useState<any>(null);

  // Filters
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  // Customer options for filter dropdown (loaded once)
  const [customerOptions, setCustomerOptions] = useState<
    { label: string; value: string }[]
  >([]);

  // Modals
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [convertTarget, setConvertTarget] = useState<Quotation | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [deleteType, setDeleteType] = useState<"single" | "bulk">("single");

  // Fetch quotations from API
  const fetchQuotations = useCallback(async () => {
    setLoading(true);
    try {
      const sortByField = "createdAt";
      let sortOrder = "desc";
      if (sortBy === "asc") {
        sortOrder = "asc";
      } else if (sortBy === "desc") {
        sortOrder = "desc";
      }

      const res = await QuotationService.getAll({
        page: currentPage,
        limit: rows,
        search: searchQuery,
        status: selectedStatus || undefined,
        customerId: selectedCustomer || undefined,
        productId: selectedProduct || undefined,
        sortBy: sortByField,
        sortOrder,
      });

      setFilteredData(res.data || []);
      setTotalRecords(res.totalRecords || 0);
    } catch (err) {
      console.error("Failed to fetch quotations:", err);
    } finally {
      setLoading(false);
    }
  }, [
    currentPage,
    rows,
    searchQuery,
    selectedStatus,
    selectedCustomer,
    selectedProduct,
    sortBy,
  ]);

  useEffect(() => {
    fetchQuotations();
  }, [fetchQuotations]);

  //  Reset to page 1 when filters / sort / rows change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedStatus,
    selectedCustomer,
    selectedProduct,
    sortBy,
    rows,
    searchQuery,
  ]);

  // Load customers for filter dropdown
  useEffect(() => {
    CustomerService.getCustomers({ limit: 100, page: 1 })
      .then((res) => {
        setCustomerOptions(
          (res.data || []).map((c: any) => ({
            label: c.customer || `${c.firstName} ${c.lastName}`.trim(),
            value: c.id,
          })),
        );
      })
      .catch(() => {});
  }, []);

  // Delete handler (Single or Bulk)
  const handleConfirmDelete = async () => {
    setActionLoading(true);
    try {
      if (deleteType === "single" && deleteId) {
        await QuotationService.delete(deleteId);
        setDeleteId(null);
      } else if (deleteType === "bulk" && selectedItems.length > 0) {
        const ids = selectedItems.map((i) => i.id);
        await QuotationService.bulkDelete(ids);
        setSelectedItems([]);
      }
      fetchQuotations();
    } catch (err: any) {
      console.error(err.message || "Delete failed");
    } finally {
      setActionLoading(false);
    }
  };

  // Bulk Status Update
  const handleBulkUpdateStatus = async (newStatus: string) => {
    const ids = selectedItems.map((i) => i.id);
    setActionLoading(true);
    try {
      await QuotationService.bulkUpdate(ids, newStatus);
      setSelectedItems([]);
      fetchQuotations();
    } catch (err: any) {
      console.error(err.message || "Bulk status update failed");
    } finally {
      setActionLoading(false);
    }
  };

  //Convert to Invoice
  const handleConvert = async () => {
    if (!convertTarget) return;
    setActionLoading(true);
    try {
      await QuotationService.convertToInvoice(convertTarget.id);
      setShowConvertModal(false);
      setConvertTarget(null);
      fetchQuotations();
    } catch (err: any) {
      console.error(err.message || "Convert failed");
    } finally {
      setActionLoading(false);
    }
  };

  // Download single PDF
  const handleDownloadPdf = useCallback(async (record: Quotation) => {
    try {
      // ✅ Calls the high-speed server generator which now matches your Weberfox design
      await QuotationService.downloadSinglePdf(record.id, record.quotationNo);
    } catch (err) {
      console.error("Download failed:", err);
    }
  }, []);

  // Export all
  const handleExportPdf = async () => {
    try {
      await QuotationService.exportAllPdf();
    } catch {
      console.error("Export failed");
    }
  };
  const handleExportXlsx = async () => {
    try {
      await QuotationService.exportXlsx();
    } catch {
      console.error("Export failed");
    }
  };

  // Columns
  const columns = [
    {
      header: "Quotation No",
      field: "quotationNo",
      sortable: true,
      key: "quotationNo",
      body: (row: Quotation) => (
        <span className="fw-semibold text-primary">{row.quotationNo}</span>
      ),
    },
    {
      header: "Customer",
      field: "customerName",
      sortable: true,
      key: "customerName",
      body: (row: Quotation) => (
        <div className="d-flex align-items-center">
          {row.customerAvatar ? (
            <img
              src={`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}${row.customerAvatar}`}
              alt="customer"
              className="avatar avatar-sm me-2 rounded-circle"
              style={{ width: 32, height: 32, objectFit: "cover" }}
            />
          ) : (
            <span
              className="avatar avatar-sm me-2 bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
              style={{ width: 32, height: 32, fontSize: 13 }}
            >
              {row.customerName?.charAt(0) || "C"}
            </span>
          )}
          {row.customerName || "-"}
        </div>
      ),
    },
    {
      header: "Date",
      field: "date",
      sortable: true,
      key: "date",
      body: (row: Quotation) => new Date(row.date).toLocaleDateString("en-IN"),
    },
    {
      header: "Grand Total",
      field: "grandTotal",
      sortable: true,
      key: "grandTotal",
      body: (row: Quotation) => `₹${row.grandTotal?.toFixed(2) || "0.00"}`,
    },
    {
      header: "Status",
      field: "status",
      sortable: true,
      key: "status",
      body: (row: Quotation) => (
        <span
          className={`badge status-badge ${STATUS_BADGE[row.status] || "badge-secondary"}`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      sortable: false,
      key: "actions",
      body: (row: Quotation) => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            {/* View */}
            <button
              type="button"
              className="me-2 p-2 border-0 bg-transparent"
              title="View"
              onClick={() =>
                navigate(route.quotationdetails.replace(":id", row.id))
              }
            >
              <i className="feather icon-eye" />
            </button>

            {/* Edit */}
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
              onClick={() => setEditingQuotation(row)}
              title="Edit"
            >
              <i className="edit feather-edit" />
            </Link>

            {/* Convert to Invoice */}
            {row.status !== "Converted" && (
              <button
                type="button"
                className="me-2 p-2 border-0 bg-transparent"
                title="Convert to Invoice"
                onClick={() => {
                  setConvertTarget(row);
                  setShowConvertModal(true);
                }}
              >
                <i className="feather icon-file-text text-success" />
              </button>
            )}

            {/* Download single PDF */}
            <button
              type="button"
              className="me-2 p-2 border-0 bg-transparent"
              title="Download PDF"
              onClick={() => handleDownloadPdf(row)}
            >
              <i className="feather icon-download text-primary" />
            </button>

            {/* Delete */}
            <button
              type="button"
              className="p-2 border-0 bg-transparent"
              title="Delete"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              onClick={() => {
                setDeleteId(row.id);
                setDeleteType("single");
              }}
            >
              <i className="trash-2 feather icon-trash-2 text-danger" />
            </button>
          </div>
        </div>
      ),
    },
  ];

  const clearFilters = () => {
    setSelectedStatus(null);
    setSelectedCustomer(null);
    setSelectedProduct(null);
    setSortBy(null);
    setSearchQuery(undefined);
  };

  const hasFilters = !!(
    selectedStatus ||
    selectedCustomer ||
    selectedProduct ||
    sortBy
  );

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          {/*  Page Header */}
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Quotation List</h4>
                <h6>Manage Your Quotation</h6>
              </div>
            </div>
            <TableTopHead
              onPdfExport={handleExportPdf}
              onExcelExport={handleExportXlsx}
            />
            <div className="page-btn d-flex gap-2">
              {selectedItems.length > 0 && (
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-danger btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    onClick={() => setDeleteType("bulk")}
                  >
                    <i className="feather icon-trash-2 me-1" />
                    Delete ({selectedItems.length})
                  </button>
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-secondary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Change Status
                    </button>
                    <ul className="dropdown-menu">
                      {["Pending", "Sent", "Ordered"].map((s) => (
                        <li key={s}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleBulkUpdateStatus(s)}
                          >
                            {s}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
              >
                <i className="ti ti-circle-plus me-1" />
                Add Quotation
              </Link>
            </div>
          </div>

          {/*  Table Card */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={(val: any) => {
                  setSearchQuery(val);
                  setCurrentPage(1);
                }}
                rows={rows}
                setRows={setRows}
              />

              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                {/* Customer filter */}
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    {selectedCustomer
                      ? customerOptions.find(
                          (c) => c.value === selectedCustomer,
                        )?.label || "Customer"
                      : "Customer"}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    {customerOptions.map((c) => (
                      <li key={c.value}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${selectedCustomer === c.value ? "active" : ""}`}
                          onClick={() => {
                            setSelectedCustomer(c.value);
                            setCurrentPage(1);
                          }}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status filter */}
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    {selectedStatus || "Status"}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    {["Pending", "Sent", "Ordered", "Converted"].map((s) => (
                      <li key={s}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${selectedStatus === s ? "active" : ""}`}
                          onClick={() => {
                            setSelectedStatus(s);
                            setCurrentPage(1);
                          }}
                        >
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sort */}
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By :{" "}
                    {sortBy === "asc"
                      ? "Ascending"
                      : sortBy === "desc"
                        ? "Descending"
                        : "Latest"}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    {[
                      { label: "Latest", value: null },
                      { label: "Ascending", value: "asc" },
                      { label: "Descending", value: "desc" },
                    ].map((opt) => (
                      <li key={opt.label}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${sortBy === opt.value ? "active" : ""}`}
                          onClick={() => {
                            setSortBy(opt.value);
                            setCurrentPage(1);
                          }}
                        >
                          {opt.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {hasFilters && (
                <button className="btn btn-light ms-2" onClick={clearFilters}>
                  Clear Filters
                </button>
              )}
            </div>

            <div className="card-body">
              {loading ? (
                <div className="d-flex justify-content-center py-5">
                  <div className="spinner-border text-primary" />
                </div>
              ) : (
                <div className="table-responsive">
                  <PrimeDataTable
                    column={columns}
                    data={filteredData}
                    rows={rows}
                    setRows={setRows}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalRecords={totalRecords}
                    searchQuery={searchQuery}
                    selectionMode="checkbox"
                    selection={selectedItems}
                    onSelectionChange={(e: any) => setSelectedItems(e.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      {/* ── Modals ── */}
      <AddQuotation
        onSuccess={() => {
          setCurrentPage(1);
          fetchQuotations();
        }}
      />
      <EditQuotation quotation={editingQuotation} onSuccess={fetchQuotations} />

      <DeleteModal
        onConfirm={handleConfirmDelete}
        title={
          deleteType === "single"
            ? "Are you sure you want to delete this quotation?"
            : `Are you sure you want to delete ${selectedItems.length} selected quotations?`
        }
      />

      {/* Convert to Invoice */}
      {showConvertModal && convertTarget && (
        <div
          className="modal show d-block"
          style={{ background: "rgba(0,0,0,0.45)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Convert to Invoice</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowConvertModal(false)}
                />
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to convert this quotation to an invoice?
                </p>
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-1">
                    <strong>Quotation No:</strong> {convertTarget.quotationNo}
                  </p>
                  <p className="mb-1">
                    <strong>Customer:</strong> {convertTarget.customerName}
                  </p>
                  <p className="mb-0">
                    <strong>Grand Total:</strong> ₹
                    {convertTarget.grandTotal?.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowConvertModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-success"
                  onClick={handleConvert}
                  disabled={actionLoading}
                >
                  {actionLoading ? (
                    <span className="spinner-border spinner-border-sm me-1" />
                  ) : null}
                  Convert to Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationList;
