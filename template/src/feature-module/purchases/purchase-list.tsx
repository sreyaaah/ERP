import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import AddPurchase from "./add-purchase";
import EditPurchase from "./edit-purchase";
import { PurchaseService, type PurchaseData } from "../services/purchase.service";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import DeleteModal from "../../components/delete-modal";
import TableTopHead from "../../components/table-top-head";
import CommonFooter from "../../components/footer/commonFooter";
import { downloadImg } from "../../utils/imagepath";

const PurchasesList = () => {
  const [listData, setListData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedPurchases, setSelectedPurchases] = useState<any[]>([]);
  const [editingPurchase, setEditingPurchase] = useState<PurchaseData | null>(null);
  const [paymentFilter, setPaymentFilter] = useState("");
  const [deleteId, setDeleteId] = useState<string | string[] | null>(null);

  const fetchPurchases = useCallback(async () => {
    // setLoading(true); 
    try {
      const res = await PurchaseService.getAllPurchases({
        page: currentPage,
        limit: rows,
        search: searchQuery,
        paymentStatus: paymentFilter || undefined
      });
      if (res.status) {
        setListData(res.data);
        setTotalRecords(res.pagination?.total || 0);
      }
    } catch (err) {
      console.error("Fetch purchases failed:", err);
    } finally {
      // setLoading(false);
    }
  }, [currentPage, rows, searchQuery, paymentFilter]);

  useEffect(() => {
    fetchPurchases();
  }, [fetchPurchases]);

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    try {
      if (Array.isArray(deleteId)) {
        const res = await PurchaseService.bulkDelete(deleteId);
        if (res.status) {
          setSelectedPurchases([]);
          fetchPurchases();
        }
      } else {
        const res = await PurchaseService.deletePurchase(deleteId);
        if (res.status) {
          fetchPurchases();
        }
      }
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleteId(null);
    }
  };

  const handleBulkDeleteClick = () => {
    if (selectedPurchases.length === 0) return;
    setDeleteId(selectedPurchases.map(p => p._id));
  };

  const handleBulkStatusUpdate = async (newStatus: string) => {
    if (selectedPurchases.length === 0) return;
    try {
      const ids = selectedPurchases.map(p => p._id);
      const res = await PurchaseService.bulkUpdate(ids, { status: newStatus });
      if (res.status) {
        setSelectedPurchases([]);
        fetchPurchases();
      }
    } catch (err) {
      console.error("Bulk update failed:", err);
    }
  };

  const handleExportPdf = async () => {
    try {
      await PurchaseService.exportPdf();
    } catch (err) {
      console.error("Export PDF failed:", err);
    }
  };

  const handleExportExcel = async () => {
    try {
      await PurchaseService.exportExcel();
    } catch (err) {
      console.error("Export Excel failed:", err);
    }
  };

  const columns = [
    { header: "Purchase ID", field: "purchaseNumber", key: "purchaseNumber" },
    { header: "Supplier Name", field: "supplierName", key: "supplierName" },
    {
      header: "Date",
      field: "date",
      key: "date",
      body: (data: any) => data.date ? new Date(data.date).toLocaleDateString() : ""
    },
    {
      header: "Status",
      field: "status",
      key: "status",
      body: (data: any) => (
        <span
          className={`badges status-badge fs-10 p-1 rounded-1 d-inline-block text-center ${
            String(data.status).toLowerCase() === "pending"
              ? "badge-pending"
              : String(data.status).toLowerCase() === "received"
                ? "bg-success text-white"
                : "bg-warning text-white"
          }`}
          style={{ width: "120px" }}
        >
          {data.status}
        </span>
      ),
    },
    { 
      header: "Total", 
      field: "grandTotal", 
      key: "grandTotal",
      body: (data: any) => `₹${(data.grandTotal || 0).toLocaleString()}`
    },
    { 
      header: "Paid", 
      field: "paidAmount", 
      key: "paidAmount",
      body: (data: any) => `₹${(data.paidAmount || 0).toLocaleString()}`
    },
    { 
      header: "Due", 
      field: "dueAmount", 
      key: "dueAmount",
      body: (data: any) => `₹${(data.dueAmount || 0).toLocaleString()}`
    },
    {
      header: "Payment Status",
      field: "paymentStatus",
      key: "paymentStatus",
      body: (data: any) => (
        <span
          className={`p-1 rounded-1 fs-10 d-inline-block text-center ${
            data.paymentStatus === "Paid"
              ? "text-success bg-success-transparent"
              : data.paymentStatus === "Unpaid"
                ? "text-danger bg-danger-transparent"
                : "text-warning bg-warning-transparent"
          }`}
          style={{ width: "120px" }}
        >
          <i className="ti ti-point-filled me-1 fs-11"></i>
          {data.paymentStatus}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (row: any) => (
        <div className="edit-delete-action">
          <Link
            to="#"
            className="me-2 p-2"
            data-bs-toggle="modal"
            data-bs-target="#edit-purchase"
            onClick={() => setEditingPurchase(row)}
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="p-2"
            to="#"
            onClick={() => setDeleteId(row._id)}
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header transfer">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Purchase</h4>
                <h6>Manage your purchases</h6>
              </div>
            </div>
            <TableTopHead 
              onPdfExport={handleExportPdf}
              onExcelExport={handleExportExcel}
            />
            <div className="d-flex purchase-pg-btn">
              <div className="page-btn">
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add-purchase"
                >
                  <i className="me-1 feather icon-plus-circle" />
                  Add Purchase
                </Link>
              </div>
              <div className="page-btn import">
                <Link
                  to="#"
                  className="btn btn-secondary color"
                  data-bs-toggle="modal"
                  data-bs-target="#view-notes"
                >
                  <i className="feather icon-download me-2" />
                  Import Purchase
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                {selectedPurchases.length > 0 && (
                  <Link
                    to="#"
                    className="btn btn-danger btn-md d-inline-flex align-items-center me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    onClick={handleBulkDeleteClick}
                  >
                    <i className="feather icon-trash-2 me-1" />
                    Delete ({selectedPurchases.length})
                  </Link>
                )}
                {selectedPurchases.length > 0 && (
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Update Status
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link 
                          to="#" 
                          className="dropdown-item rounded-1"
                          onClick={(e) => {
                            e.preventDefault();
                            handleBulkStatusUpdate("received");
                          }}
                        > 
                          Received
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="#" 
                          className="dropdown-item rounded-1"
                          onClick={(e) => {
                            e.preventDefault();
                            handleBulkStatusUpdate("pending");
                          }}
                        > 
                          Pending
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    {paymentFilter || "Payment Status"}
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    {["", "Paid", "Unpaid", "Partially Paid"].map((status) => (
                      <li key={status}>
                        <Link 
                          to="#" 
                          className="dropdown-item rounded-1"
                          style={paymentFilter === status ? { backgroundColor: '#FE9F43', color: '#fff !important' } : {}}
                          onClick={(e) => {
                            e.preventDefault();
                            setPaymentFilter(status);
                            setCurrentPage(1);
                          }}
                        > 
                          {status || "All Status"}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={listData}
                  rows={rows}
                  setRows={setRows}
                   currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedPurchases}
                  onSelectionChange={(e: any) => setSelectedPurchases(e.value)}
                  dataKey="_id"
                />
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      {/* Toggled Modals */}
      <AddPurchase onSuccess={fetchPurchases} />
      <EditPurchase purchase={editingPurchase} onSuccess={fetchPurchases} />

      <div className="modal fade" id="view-notes">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Import Purchase</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
                <img src={downloadImg} alt="img" className="mb-3" style={{width: '50px'}} />
                <h6>Drag and drop CSV file to upload</h6>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal onConfirm={handleConfirmDelete} title={Array.isArray(deleteId) ? `Are you sure you want to delete ${deleteId.length} purchases?` : "Are you sure you want to delete this purchase?"} />
    </>
  );
};

export default PurchasesList;
