import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { WarrantyService, type Warranty } from "../services/warranty.service";
import AddWarrantyModal from "../../core/modals/inventory/AddWarrantyModal";
import EditWarrantyModal from "../../core/modals/inventory/EditWarrantyModal";

const Warranty: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [warranties, setWarranties] = useState<Warranty[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedWarranties, setSelectedWarranties] = useState<Warranty[]>([]);
  const [selectedWarranty, setSelectedWarranty] = useState<Warranty | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<"single" | "bulk">("single");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");

  const fetchWarranties = useCallback(async () => {
    setLoading(true);
    try {
      const response = await WarrantyService.getWarranties(1, 0, "");
      if (response.status) {
        setWarranties(response.data);
      }
    } catch (error) {
      console.error("Error fetching warranties:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWarranties();
  }, [fetchWarranties]);

  // Client-side filter
  const filteredWarranties = warranties.filter((w) => {
    const statusOk = statusFilter === "All" || w.status === statusFilter;
    const searchOk =
      !searchQuery ||
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (w.description || "").toLowerCase().includes(searchQuery.toLowerCase());
    return statusOk && searchOk;
  });

  const handleConfirmDelete = async () => {
    if (deleteType === "single") {
      if (!deleteId) return;
      try {
        const res = await WarrantyService.deleteWarranty(deleteId);
        if (res.status) {
          fetchWarranties();
          setDeleteId(null);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      if (selectedWarranties.length === 0) return;
      try {
        const ids = selectedWarranties.map((w) => w.id);
        const res = await WarrantyService.bulkDelete(ids);
        if (res.status) {
          fetchWarranties();
          setSelectedWarranties([]);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleBulkStatusUpdate = async (status: string) => {
    if (selectedWarranties.length === 0) return;
    try {
      const ids = selectedWarranties.map((w) => w.id);
      const res = await WarrantyService.bulkUpdateStatus(ids, status);
      if (res.status) {
        fetchWarranties();
        setSelectedWarranties([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Strip HTML for table display, keep it wrapping (no scroll)
  const stripHtml = (html: string) =>
    html ? html.replace(/<[^>]*>/g, "").trim() : "-";

  const columns = [
    {
      field: "name",
      header: "Name",
      key: "name",
      sortable: true,
      body: (row: Warranty) => (
        <span className="fw-medium text-dark">{row.name}</span>
      ),
    },
    {
      field: "description",
      header: "Description",
      key: "description",
      sortable: true,
      body: (row: Warranty) => (
        <span
          style={{
            display: "block",
            wordBreak: "break-word",
            whiteSpace: "normal",
            maxWidth: "360px",
            lineHeight: "1.5",
          }}
        >
          {stripHtml(row.description)}
        </span>
      ),
    },
    {
      field: "duration",
      header: "Duration",
      key: "duration",
      sortable: true,
      body: (row: Warranty) => (
        <span>{row.duration} {row.type}</span>
      ),
    },
    {
      field: "status",
      header: "Status",
      key: "status",
      sortable: true,
      body: (row: Warranty) => (
        <span
          className={`badge ${row.status === "Active" ? "bg-success" : "bg-danger"} fw-medium fs-10`}
          style={{ width: "70px", textAlign: "center", display: "inline-block" }}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (row: Warranty) => (
        <div className="edit-delete-action d-flex align-items-center justify-content-end">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-warranty"
            onClick={() => setSelectedWarranty(row)}
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            onClick={() => {
              setDeleteId(row.id);
              setDeleteType("single");
            }}
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4 className="fw-bold">Warranties</h4>
              <h6>Manage your warranties</h6>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <ul className="table-top-head">
              <TooltipIcons
                onPdfClick={() => WarrantyService.exportData("pdf")}
                onExcelClick={() => WarrantyService.exportData("xlsx")}
              />
              <RefreshIcon onClick={fetchWarranties} />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-warranty"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Warranty
              </Link>
            </div>
          </div>
        </div>

        <div className="card table-list-card">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <SearchFromApi
              callback={(v: any) => {
                setSearchQuery(v);
                setCurrentPage(1);
              }}
              rows={rows}
              setRows={setRows}
            />
            <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
              {selectedWarranties.length > 0 && (
                <div className="d-flex align-items-center me-2">
                  <button
                    className="btn btn-danger btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    onClick={() => setDeleteType("bulk")}
                  >
                    Bulk Delete ({selectedWarranties.length})
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
                      <li>
                        <button className="dropdown-item" onClick={() => handleBulkStatusUpdate("Active")}>
                          Active
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={() => handleBulkStatusUpdate("Inactive")}>
                          Inactive
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Status: {statusFilter}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  {(["All", "Active", "Inactive"] as const).map((s) => (
                    <li key={s}>
                      <button className="dropdown-item rounded-1" onClick={() => setStatusFilter(s)}>
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="card-body">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status" />
                <p className="mt-2 text-muted small">Loading warranties…</p>
              </div>
            ) : (
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={filteredWarranties}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={filteredWarranties.length}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedWarranties}
                  onSelectionChange={(e: any) => setSelectedWarranties(e.value)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <CommonFooter />

      <AddWarrantyModal onUpdate={fetchWarranties} />
      <EditWarrantyModal warranty={selectedWarranty} onUpdate={fetchWarranties} />
      <DeleteModal onConfirm={handleConfirmDelete} />
    </div>
  );
};

export default Warranty;
