
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { categoryService } from "./categoryService";
import EditCategoryList from "../../core/modals/inventory/editcategorylist";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import CommonSelect from "../../components/select/common-select";
import SearchFromApi from "../../components/data-table/search";
import { Tooltip } from "primereact/tooltip";
import { pdf, excel } from "../../utils/imagepath";
import { CategoryService, type Category } from "../services/category.service";


const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
// Define interfaces for type safety
interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  status: string;
}

const StatusBadge = ({ status }: { status: string }) => (
  <span 
    className={`badge ${status === "Active" ? "bg-success" : "bg-danger"} fw-medium fs-10`}
    style={{ width: "75px", display: "inline-block", textAlign: "center" }}
  >
    {status}
  </span>
);

const CategoryList: React.FC = () => {

  const [listData, setListData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");
  const [addForm, setAddForm] = useState({ name: "", slug: "", status: "Active" as "Active" | "Inactive" });
  const [addErrors, setAddErrors] = useState<Record<string, string>>({});
  const [addLoading, setAddLoading] = useState(false);
  const addModalCloseRef = useRef<HTMLButtonElement>(null);
  const [editTarget, setEditTarget] = useState<Category | null>(null);
  const [editForm, setEditForm] = useState({ name: "", slug: "", status: "Active" as "Active" | "Inactive" });
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});
  const [editLoading, setEditLoading] = useState(false);
  const editModalCloseRef = useRef<HTMLButtonElement>(null);
  const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const deleteModalCloseRef = useRef<HTMLButtonElement>(null);
  const [bulkLoading, setBulkLoading] = useState(false);
  const bulkDeleteModalCloseRef = useRef<HTMLButtonElement>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [xlsxLoading, setXlsxLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await CategoryService.getAll();
      setListData(res || []);
    } catch {
      // Error handling
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const filteredListData = listData.filter((c) => {
    const statusOk = statusFilter === "All" || c.status === statusFilter;
    return statusOk;
  });

  const validateAdd = () => {
    const errs: Record<string, string> = {};
    if (!addForm.name.trim()) errs.name = "Category name is required";
    if (!addForm.slug.trim()) errs.slug = "Slug is required";
    setAddErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateEdit = () => {
    const errs: Record<string, string> = {};
    if (!editForm.name.trim()) errs.name = "Category name is required";
    if (!editForm.slug.trim()) errs.slug = "Slug is required";
    setEditErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAdd()) return;
    setAddLoading(true);
    try {
      await CategoryService.create({ name: addForm.name.trim(), slug: addForm.slug.trim(), status: addForm.status });
      addModalCloseRef.current?.click();
      setAddForm({ name: "", slug: "", status: "Active" });
      setAddErrors({});
      fetchData();
    } catch (err: any) {
      // Error
    } finally {
      setAddLoading(false);
    }
  };

  const handleOpenEdit = (row: Category) => {
    setEditTarget(row);
    setEditForm({ name: row.name, slug: row.slug, status: row.status });
    setEditErrors({});
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTarget || !validateEdit()) return;
    setEditLoading(true);
    try {
      await CategoryService.update(editTarget.id, { name: editForm.name.trim(), slug: editForm.slug.trim(), status: editForm.status });
      editModalCloseRef.current?.click();
      setEditTarget(null);
      fetchData();
    } catch (err: any) {
      // Error
    } finally {
      setEditLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      await CategoryService.delete(deleteTarget.id);
      deleteModalCloseRef.current?.click();
      setDeleteTarget(null);
      setSelectedItems([]);
      fetchData();
    } catch (err: any) {
      // Error
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleBulkDelete = async () => {
    if (!selectedItems.length) return;
    setBulkLoading(true);
    try {
      await CategoryService.bulkDelete(selectedItems.map((s) => s.id));
      bulkDeleteModalCloseRef.current?.click();
      setSelectedItems([]);
      fetchData();
    } catch (err: any) {
      // Error
    } finally {
      setBulkLoading(false);
    }
  };

  const handleBulkStatus = async (status: "Active" | "Inactive") => {
    if (!selectedItems.length) return;
    setBulkLoading(true);
    try {
      await CategoryService.bulkUpdateStatus(selectedItems.map((s) => s.id), status);
      setSelectedItems([]);
      fetchData();
    } catch (err: any) {
      // Error
    } finally {
      setBulkLoading(false);
    }
  };

  const handleExport = async (format: "xlsx" | "pdf") => {
    if (format === "pdf") setPdfLoading(true);
    else setXlsxLoading(true);
    try {
      await CategoryService.export(format);
    } catch {
      // Error
    } finally {
      if (format === "pdf") setPdfLoading(false);
      else setXlsxLoading(false);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [dataSource, setDataSource] = useState<CategoryItem[]>([]);
  const [originalData, setOriginalData] = useState<CategoryItem[]>([]);
  const [sortText, setSortText] = useState('Sort By : Recently Added');

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await categoryService.getCategories({
          limit: 0
      });
      
      if (response.status) {
         setOriginalData(response.data);
         setDataSource(response.data);
         setTotalRecords(response.data.length); 
      }
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };

  const handleSort = (option: string) => {
      let sorted = [...originalData];
      if (option === 'Recently Added') {
          setSortText('Sort By : Recently Added');
          sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      } else if (option === 'Ascending') {
          setSortText('Sort By : Ascending');
          sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (option === 'Descending') {
          setSortText('Sort By : Descending');
          sorted.sort((a, b) => b.name.localeCompare(a.name));
      } else if (option === 'Last Month') {
          setSortText('Sort By : Last Month');
          const lastMonth = new Date();
          lastMonth.setMonth(lastMonth.getMonth() - 1);
          sorted = sorted.filter(item => new Date(item.createdAt) >= lastMonth);
      } else if (option === 'Last 7 Days') {
          setSortText('Sort By : Last 7 Days');
          const last7Days = new Date();
          last7Days.setDate(last7Days.getDate() - 7);
          sorted = sorted.filter(item => new Date(item.createdAt) >= last7Days);
      }
      setDataSource(sorted);
  };

  const handleSearch = (value: any) => {
    setSearchQuery(value);
    setCurrentPage(1); 
  };

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategorySlug, setNewCategorySlug] = useState("");
  const [newCategoryStatus, setNewCategoryStatus] = useState("Active");

  const handleAddCategory = async () => {
      try {
          await categoryService.createCategory({
              name: newCategoryName,
              slug: newCategorySlug,
              status: newCategoryStatus
          });
          setNewCategoryName("");
          setNewCategorySlug("");
          setNewCategoryStatus("Active");
          loadCategories();
      } catch (error) {
      }
  };
  
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const handleDelete = async () => {
      if(deleteId) {
          try {
              await categoryService.deleteCategory(deleteId);
              setDeleteId(null);
              loadCategories();
          } catch(error) {
               console.error(error);
          }
      }
  }

  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  const handleBulkDelete = async () => {
    if (selectedProducts.length === 0) {
      return;
    }
    if (window.confirm(`Are you sure you want to delete ${selectedProducts.length} categories?`)) {
      try {
        const ids = selectedProducts.map(p => p.id);
        await categoryService.bulkDeleteCategories(ids);
        setSelectedProducts([]);
        loadCategories();
      } catch (error) {
        console.error("Error deleting categories:", error);
      }
    }
  };

  const handleBulkStatusUpdate = async (status: string) => {
    if (selectedProducts.length === 0) {
      return;
    }
    try {
      const ids = selectedProducts.map(p => p.id);
      await categoryService.bulkUpdateStatus(ids, status);
      setSelectedProducts([]);
      loadCategories();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Table columns
  const columns = [
    {
      field: "name", header: "Category", key: "name", sortable: true,
    },
    {
      field: "slug", header: "Category Slug", key: "slug", sortable: true,
    },
    {
      field: "createdAt", header: "Created On", key: "createdAt", sortable: true,
      body: (row: any) => (
        <span>
          {row.createdAt ? new Date(row.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : "—"}
        </span>
      ),
    },
    {
      field: "status", header: "Status", key: "status", sortable: true,
      body: (row: Category) => <StatusBadge status={row.status} />,
    },
    {
      header: "", field: "actions", key: "actions", sortable: false,
      body: (row: Category) => (
      header: "Category",
      field: "name",
      key: "name",
      sortable: true,
    },
    {
      header: "Category Slug",
      field: "slug",
      key: "slug",
      sortable: true,
    },
    {
      header: "Created On",
      field: "createdAt",
      key: "createdAt",
      sortable: true,
      body: (data: CategoryItem) => (
          <span>{data.createdAt ? new Date(data.createdAt).toLocaleDateString('en-GB') : '-'}</span>
      )
    },
    {
      header: "Status",
      field: "status",
      key: "status",
      sortable: true,
      body: (data: CategoryItem) => (
        <span className={`badge ${data.status === 'Active' ? 'bg-success' : 'bg-danger'} fw-medium fs-10`}>{data.status}</span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (row: any) => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal" data-bs-target="#edit-category"
            onClick={() => handleOpenEdit(row)}
            data-bs-toggle="modal"
            data-bs-target="#edit-category"
            onClick={() => setSelectedCategory(row)}
          >
            <i className="feather icon-edit" />
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal" data-bs-target="#delete-category"
            onClick={() => setDeleteTarget(row)}
            data-bs-toggle="modal" 
            data-bs-target="#delete-modal"
            onClick={() => setDeleteId(row.id)}
          >
            <i className="feather icon-trash-2" />
          </Link>
        </div>
      ),
    },
  ];

  const handleExport = async (format: 'pdf' | 'xlsx') => {
    try {
      const blob = await categoryService.exportCategories(format);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `categories.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(`Error exporting ${format}:`, error);
      alert(`Error exporting ${format}`);
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Category</h4>
                <h6>Manage your categories</h6>
              </div>
            </div>
            
            <Tooltip target=".sub-pr-tooltip" />
            <ul className="table-top-head">
              <li>
                <Link
                  to="#"
                  className="sub-pr-tooltip"
                  data-pr-tooltip="Export PDF"
                  data-pr-position="top"
                  onClick={() => !pdfLoading && handleExport("pdf")}
                >
                  {pdfLoading ? (
                    <span className="spinner-border spinner-border-sm text-danger" style={{ width: 18, height: 18 }} />
                  ) : (
                    <img src={pdf} alt="pdf" />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="sub-pr-tooltip"
                  data-pr-tooltip="Export Excel"
                  data-pr-position="top"
                  onClick={() => !xlsxLoading && handleExport("xlsx")}
                >
                  {xlsxLoading ? (
                    <span className="spinner-border spinner-border-sm text-success" style={{ width: 18, height: 18 }} />
                  ) : (
                    <img src={excel} alt="excel" />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="sub-pr-tooltip"
                  data-pr-tooltip="Refresh"
                  data-pr-position="top"
                  onClick={() => fetchData()}
                >
                  <i className="ti ti-refresh" />
                </Link>
              </li>
            </ul>

           <TableTopHead 
              onPdfExport={() => handleExport('pdf')}
              onExcelExport={() => handleExport('xlsx')}
           />
            <div className="page-btn">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-category"
                onClick={() => { setAddForm({ name: "", slug: "", status: "Active" }); setAddErrors({}); }}
              >
                <i className="ti ti-circle-plus me-1" />Add Category
              </Link>
                <i className="ti ti-circle-plus me-1"></i>
                Add Category
              </button>
            </div>
          </div>

          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={(v: any) => { setSearchQuery(v); setCurrentPage(1); }}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                {selectedItems.length > 0 && (
                  <div className="dropdown me-2">
                    <button className="btn btn-dark btn-md dropdown-toggle d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      {bulkLoading ? <span className="spinner-border spinner-border-sm me-2" /> : null}
                      Bulk Actions ({selectedItems.length})
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-2 shadow-sm border-0">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1 text-success" onClick={() => handleBulkStatus("Active")}>
                          <i className="ti ti-toggle-right me-2" />Set Active
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1 text-warning" onClick={() => handleBulkStatus("Inactive")}>
                          <i className="ti ti-toggle-left me-2" />Set Inactive
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1 text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#bulk-delete-category"
                        >
                          <i className="ti ti-trash me-2" />Delete Selected
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
                {selectedProducts.length > 0 && (
                  <div className="d-flex align-items-center me-2">
                    <button className="btn btn-danger me-2" onClick={handleBulkDelete}>
                      <i className="feather icon-trash-2 me-1" />
                      Scale Delete ({selectedProducts.length})
                    </button>
                    <div className="dropdown">
                      <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Bulk Status
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
                    Status
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
                        <button className="dropdown-item rounded-1" onClick={() => { setStatusFilter(s); setCurrentPage(1); }}>
                          {s}
                        </button>
                      </li>
                    ))}
                    {sortText}
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort('Recently Added')}>
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort('Ascending')}>
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort('Descending')}>
                        Descending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort('Last Month')}>
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort('Last 7 Days')}>
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body p-0">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status" />
                  <p className="mt-2 text-muted small">Loading categories…</p>
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
      </div>

      {/* MODALS */}
      <div className="modal fade" id="add-category" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <div className="page-title">
                <h4 className="fw-bold">Add Category</h4>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={addModalCloseRef} />
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body pb-0">
                <div className="mb-3">
                  <label className="form-label fw-medium">Category Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className={`form-control ${addErrors.name ? "is-invalid" : ""}`}
                    placeholder="Enter category name"
                    value={addForm.name}
                    onChange={(e) => {
                      const val = e.target.value;
                      setAddForm({ ...addForm, name: val, slug: slugify(val) });
                    }}
                  />
                  {addErrors.name && <div className="invalid-feedback">{addErrors.name}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Category Slug <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className={`form-control ${addErrors.slug ? "is-invalid" : ""}`}
                    placeholder="Enter slug"
                    value={addForm.slug}
                    onChange={(e) => setAddForm({ ...addForm, slug: slugify(e.target.value) })}
                  />
                  {addErrors.slug && <div className="invalid-feedback">{addErrors.slug}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Status</label>
                  <CommonSelect
                    className="select"
                    options={[{ label: "Active", value: "Active" }, { label: "Inactive", value: "Inactive" }]}
                    value={addForm.status}
                    onChange={(e: any) => setAddForm({ ...addForm, status: e.value })}
                  />
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Category<span className="text-danger ms-1">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Category Slug<span className="text-danger ms-1">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={newCategorySlug}
                        onChange={(e) => setNewCategorySlug(e.target.value)}
                      />
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">
                          Status<span className="text-danger ms-1">*</span>
                        </span>
                        <input
                          type="checkbox"
                          id="user2"
                          className="check"
                          checked={newCategoryStatus === "Active"}
                          onChange={(e) => setNewCategoryStatus(e.target.checked ? "Active" : "Inactive")}
                        />
                        <label htmlFor="user2" className="checktoggle" />
                      </div>
                    </div>
                  </form>
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
                    onClick={handleAddCategory}
                  >
                    Add Category
                  </button>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={addLoading}>
                  {addLoading ? <span className="spinner-border spinner-border-sm me-1" /> : null}
                  Create Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <div className="modal fade" id="edit-category" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <div className="page-title">
                <h4 className="fw-bold">Edit Category</h4>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={editModalCloseRef} />
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body pb-0">
                <div className="mb-3">
                  <label className="form-label fw-medium">Category Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className={`form-control ${editErrors.name ? "is-invalid" : ""}`}
                    placeholder="Enter category name"
                    value={editForm.name}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEditForm({ ...editForm, name: val, slug: slugify(val) });
                    }}
                  />
                  {editErrors.name && <div className="invalid-feedback">{editErrors.name}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Category Slug <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className={`form-control ${editErrors.slug ? "is-invalid" : ""}`}
                    placeholder="Enter slug"
                    value={editForm.slug}
                    onChange={(e) => setEditForm({ ...editForm, slug: slugify(e.target.value) })}
                  />
                  {editErrors.slug && <div className="invalid-feedback">{editErrors.slug}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Status</label>
                  <CommonSelect
                    className="select"
                    options={[{ label: "Active", value: "Active" }, { label: "Inactive", value: "Inactive" }]}
                    value={editForm.status}
                    onChange={(e: any) => setEditForm({ ...editForm, status: e.value })}
                  />
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={editLoading}>
                  {editLoading ? <span className="spinner-border spinner-border-sm me-1" /> : null}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      <div className="modal fade" id="delete-category" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center py-4">
              <div className="mb-3">
                <i className="ti ti-trash fs-1 text-danger border border-danger p-3 rounded-circle" />
              </div>
              <h4 className="fw-bold">Delete Category?</h4>
              <p className="text-muted">Are you sure you want to delete "<strong>{deleteTarget?.name}</strong>"? This action cannot be undone.</p>
              <div className="d-flex justify-content-center mt-4">
                <button type="button" className="btn btn-light me-2 px-4" data-bs-dismiss="modal" ref={deleteModalCloseRef}>No</button>
                <button type="button" className="btn btn-danger px-4" disabled={deleteLoading} onClick={handleDelete}>
                  {deleteLoading ? <span className="spinner-border spinner-border-sm me-2" /> : null}
                  Delete Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BULK DELETE MODAL */}
      <div className="modal fade" id="bulk-delete-category" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center py-4">
              <div className="mb-3">
                <i className="ti ti-trash fs-1 text-danger border border-danger p-3 rounded-circle" />
              </div>
              <h4 className="fw-bold">Delete Selected?</h4>
              <p className="text-muted">Are you sure you want to delete <strong>{selectedItems.length}</strong> selected categories? This action cannot be undone.</p>
              <div className="d-flex justify-content-center mt-4">
                <button type="button" className="btn btn-light me-2 px-4" data-bs-dismiss="modal" ref={bulkDeleteModalCloseRef}>No</button>
                <button type="button" className="btn btn-danger px-4" disabled={bulkLoading} onClick={handleBulkDelete}>
                  {bulkLoading ? <span className="spinner-border spinner-border-sm me-2" /> : null}
                  Delete All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      <EditCategoryList category={selectedCategory} onUpdate={loadCategories} />
      <DeleteModal onConfirm={handleDelete} title="Are you sure you want to delete this category?" />
    </div>
  );
};

export default CategoryList;
