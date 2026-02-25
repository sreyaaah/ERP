import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import { UnitService, type Unit } from "../services/unit.service";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import AddUnitModal from "../../core/modals/inventory/AddUnitModal";
import EditUnitModal from "../../core/modals/inventory/EditUnitModal";

export const Units: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedUnits, setSelectedUnits] = useState<Unit[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(false);

  // Modal target states
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<"single" | "bulk">("single");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");

  const fetchUnits = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch all units (limit 0) for client-side filtering/pagination as per project pattern
      const response = await UnitService.getUnits(1, 0, "");
      if (response.status) {
        setUnits(response.data);
      }
    } catch (error) {
      console.error("Error fetching units:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUnits();
  }, [fetchUnits]);

  const filteredUnits = units.filter((unit) => {
    const statusOk = statusFilter === "All" || unit.status === statusFilter;
    const searchOk = !searchQuery || 
      unit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    return statusOk && searchOk;
  });

  const handleConfirmDelete = async () => {
    if (deleteType === "single") {
      if (!deleteId) return;
      try {
        const response = await UnitService.deleteUnit(deleteId);
        if (response.status) {
          fetchUnits();
          setDeleteId(null);
        }
      } catch (error) {
        console.error("Error deleting unit:", error);
      }
    } else {
      if (selectedUnits.length === 0) return;
      try {
        const ids = selectedUnits.map(u => u.id);
        const response = await UnitService.bulkDelete(ids);
        if (response.status) {
          fetchUnits();
          setSelectedUnits([]);
        }
      } catch (error) {
        console.error("Error bulk deleting units:", error);
      }
    }
  };

  const handleBulkStatusUpdate = async (status: string) => {
    if (selectedUnits.length === 0) return;
    try {
      const ids = selectedUnits.map(u => u.id);
      const response = await UnitService.bulkUpdateStatus(ids, status);
      if (response.status) {
        fetchUnits();
        setSelectedUnits([]);
      }
    } catch (error) {
      console.error("Error bulk updating status:", error);
    }
  };

  const columns = [
    {
      field: "name",
      header: "Unit",
      key: "name",
      sortable: true,
      body: (data: Unit) => (
        <span className="fw-medium text-dark">{data.name}</span>
      ),
    },
    {
      field: "shortName",
      header: "Short Name",
      key: "shortName",
      sortable: true,
    },
    {
      field: "createdAt",
      header: "Created Date",
      key: "createdAt",
      sortable: true,
      body: (data: Unit) => (
        <span>{new Date(data.createdAt).toLocaleDateString()}</span>
      ),
    },
    {
      field: "status",
      header: "Status",
      key: "status",
      sortable: true,
      body: (rowData: Unit) => (
        <span
          className={`badge ${rowData.status === "Active" ? "bg-success" : "bg-danger"} fw-medium fs-10`}
          style={{ width: "80px", textAlign: "center", display: "inline-block" }}
        >
          {rowData.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (row: Unit) => (
        <div className="edit-delete-action d-flex align-items-center justify-content-end">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-units"
            onClick={() => setSelectedUnit(row)}
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
              <h4 className="fw-bold">Units</h4>
              <h6>Manage your units</h6>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <ul className="table-top-head">
              <TooltipIcons 
                onPdfClick={() => UnitService.exportData('pdf')}
                onExcelClick={() => UnitService.exportData('xlsx')}
              />
              <RefreshIcon onClick={fetchUnits} />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Unit
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
              {selectedUnits.length > 0 && (
                <div className="d-flex align-items-center me-2">
                  <button 
                    className="btn btn-danger btn-sm me-2" 
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    onClick={() => setDeleteType("bulk")}
                  >
                    Bulk Delete ({selectedUnits.length})
                  </button>
                  <div className="dropdown">
                    <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                      Change Status
                    </button>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item" onClick={() => handleBulkStatusUpdate('Active')}>Active</button></li>
                      <li><button className="dropdown-item" onClick={() => handleBulkStatusUpdate('Inactive')}>Inactive</button></li>
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
                <p className="mt-2 text-muted small">Loading units…</p>
              </div>
            ) : (
                <div className="table-responsive">
                    <PrimeDataTable
                        column={columns}
                        data={filteredUnits}
                        rows={rows}
                        setRows={setRows}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalRecords={filteredUnits.length}
                        searchQuery={searchQuery}
                        selectionMode="checkbox"
                        selection={selectedUnits}
                        onSelectionChange={(e: any) => setSelectedUnits(e.value)}
                    />
                </div>
            )}
          </div>
        </div>
      </div>
      <CommonFooter />

      <AddUnitModal onUpdate={fetchUnits} />
      <EditUnitModal unit={selectedUnit} onUpdate={fetchUnits} />
      <DeleteModal onConfirm={handleConfirmDelete} />
    </div>
  );
};
