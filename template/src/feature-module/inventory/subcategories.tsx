import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import { SubcategoryService, type Subcategory } from "../services/subcategory.service";
import { CategoryService, type Category } from "../services/category.service";
import AddSubCategory from "../../core/modals/inventory/addsubcategory";
import EditSubcategories from "./editsubcategories";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import DeleteModal from "../../components/delete-modal";

const StatusBadge = ({ status }: { status: string }) => (
  <span 
    className={`badge ${status === "Active" ? "bg-success" : "bg-danger"} fw-medium fs-10`}
    style={{ width: "75px", display: "inline-block", textAlign: "center" }}
  >
    {status}
  </span>
);

const SubCategories: React.FC = () => {
  const [listData, setListData] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);

  // Selection/Delete state
  const [editTarget, setEditTarget] = useState<Subcategory | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<"single" | "bulk">("single");
  const [bulkLoading, setBulkLoading] = useState(false);

  useEffect(() => {
    CategoryService.getAll()
      .then(setCategories)
      .catch(() => { });
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await SubcategoryService.getAll({ limit: 1000, page: 1 });
      setListData(res.data || []);
    } catch (err) {
      console.error("Error fetching subcategories:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const filteredListData = listData.filter((s) => {
    const statusOk = statusFilter === "All" || s.status === statusFilter;
    const categoryOk = !categoryFilter || s.categoryId === categoryFilter;
    const searchOk = !searchQuery || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return statusOk && categoryOk && searchOk;
  });

  const handleConfirmDelete = async () => {
    if (deleteType === "single") {
      if (!deleteId) return;
      try {
        await SubcategoryService.delete(deleteId);
        setDeleteId(null);
        fetchData();
      } catch (err: any) {
        console.error(err);
      }
    } else {
      if (!selectedItems.length) return;
      setBulkLoading(true);
      try {
        await SubcategoryService.bulkDelete(selectedItems.map((s) => s.id));
        setSelectedItems([]);
        fetchData();
      } catch (err: any) {
        alert(err.message || "Bulk delete failed");
      } finally {
        setBulkLoading(false);
      }
    }
  };

  const handleBulkStatus = async (status: "Active" | "Inactive") => {
    if (!selectedItems.length) return;
    setBulkLoading(true);
    try {
      await SubcategoryService.bulkUpdateStatus(selectedItems.map((s) => s.id), status);
      setSelectedItems([]);
      fetchData();
    } catch (err: any) {
      alert(err.message || "Bulk update failed");
    } finally {
      setBulkLoading(false);
    }
  };

  const columns = [
    {
      field: "name", header: "Sub Category", key: "name", sortable: true,
    },
    {
      field: "slug", header: "Category Slug", key: "slug", sortable: true,
    },
    {
      field: "categoryName", header: "Parent Category", key: "categoryName", sortable: true,
    },
    {
      field: "createdAt", header: "Created On", key: "createdAt", sortable: true,
      body: (row: Subcategory) => (
        <span>
          {row.createdAt ? new Date(row.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : "—"}
        </span>
      ),
    },
    {
      field: "status", header: "Status", key: "status", sortable: true,
      body: (row: Subcategory) => <StatusBadge status={row.status} />,
    },
    {
      header: "", field: "actions", key: "actions", sortable: false,
      body: (row: Subcategory) => (
        <div className="edit-delete-action d-flex align-items-center justify-content-end">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal" data-bs-target="#edit-subcategory"
            onClick={() => setEditTarget(row)}
          >
            <i className="feather icon-edit" />
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal" data-bs-target="#delete-modal"
            onClick={() => {
              setDeleteId(row.id);
              setDeleteType("single");
            }}
          >
            <i className="feather icon-trash-2" />
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
              <h4 className="fw-bold">Sub Categories</h4>
              <h6>Manage your sub categories</h6>
            </div>
          </div>
          
          <div className="d-flex align-items-center">
              <ul className="table-top-head">
                  <TooltipIcons 
                      onPdfClick={() => SubcategoryService.export("pdf")}
                      onExcelClick={() => SubcategoryService.export("xlsx")}
                  />
                  <RefreshIcon onClick={fetchData} />
                  <CollapesIcon />
              </ul>
              <div className="page-btn">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-subcategory"
                >
                    <i className="ti ti-circle-plus me-1" />Add Sub Category
                </button>
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
            <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-2">
              {selectedItems.length > 0 && (
                <div className="d-flex align-items-center me-2">
                  <button 
                    className="btn btn-danger btn-sm me-2" 
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    onClick={() => setDeleteType("bulk")}
                  >
                    {bulkLoading ? <span className="spinner-border spinner-border-sm me-2" /> : null}
                    Bulk Delete ({selectedItems.length})
                  </button>
                  <div className="dropdown">
                      <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Change Status
                      </button>
                      <ul className="dropdown-menu">
                          <li><button className="dropdown-item" onClick={() => handleBulkStatus("Active")}>Active</button></li>
                          <li><button className="dropdown-item" onClick={() => handleBulkStatus("Inactive")}>Inactive</button></li>
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
                  Category: {categoryFilter ? categories.find((c) => c.id === categoryFilter)?.name : "All"}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-3" style={{ maxHeight: "250px", overflowY: "auto" }}>
                  <li>
                    <button className="dropdown-item rounded-1" onClick={() => setCategoryFilter("")}>
                      All Categories
                    </button>
                  </li>
                  {categories.map((c) => (
                    <li key={c.id}>
                      <button className="dropdown-item rounded-1" onClick={() => setCategoryFilter(c.id)}>
                        {c.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dropdown">
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
                <p className="mt-2 text-muted small">Loading subcategories…</p>
              </div>
            ) : (
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={filteredListData}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={filteredListData.length}
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

      <AddSubCategory categories={categories} onUpdate={fetchData} />
      <EditSubcategories subcategory={editTarget} categories={categories} onUpdate={fetchData} />
      <DeleteModal onConfirm={handleConfirmDelete} />
    </div>
  );
};

export default SubCategories;
