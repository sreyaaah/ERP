import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";

import CommonSelect from "../../components/select/common-select";
import SearchFromApi from "../../components/data-table/search";
import { Tooltip } from "primereact/tooltip";
import { pdf, excel } from "../../utils/imagepath";
import {
  SubcategoryService,
  type Subcategory,
} from "../services/subcategory.service";
import { CategoryService, type Category } from "../services/category.service";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");


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
  const [addForm, setAddForm] = useState({ name: "", slug: "", categoryId: "", status: "Active" as "Active" | "Inactive" });
  const [addErrors, setAddErrors] = useState<Record<string, string>>({});
  const [addLoading, setAddLoading] = useState(false);
  const addModalCloseRef = useRef<HTMLButtonElement>(null);
  const [editTarget, setEditTarget] = useState<Subcategory | null>(null);
  const [editForm, setEditForm] = useState({ name: "", slug: "", categoryId: "", status: "Active" as "Active" | "Inactive" });
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});
  const [editLoading, setEditLoading] = useState(false);
  const editModalCloseRef = useRef<HTMLButtonElement>(null);
  const [deleteTarget, setDeleteTarget] = useState<Subcategory | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const deleteModalCloseRef = useRef<HTMLButtonElement>(null);
  const [bulkLoading, setBulkLoading] = useState(false);
  const bulkDeleteModalCloseRef = useRef<HTMLButtonElement>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [xlsxLoading, setXlsxLoading] = useState(false);

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
    } catch {
      // Error handling
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const filteredListData = listData.filter((s) => {
    const statusOk = statusFilter === "All" || s.status === statusFilter;
    const categoryOk = !categoryFilter || s.categoryId === categoryFilter;
    return statusOk && categoryOk;
  });

  const categorySelectOptions = categories.map((c) => ({ label: c.name, value: c.id }));

  const validateAdd = () => {
    const errs: Record<string, string> = {};
    if (!addForm.name.trim()) errs.name = "Sub category name is required";
    if (!addForm.slug.trim()) errs.slug = "Slug is required";
    if (!addForm.categoryId) errs.categoryId = "Please select a category";
    setAddErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateEdit = () => {
    const errs: Record<string, string> = {};
    if (!editForm.name.trim()) errs.name = "Sub category name is required";
    if (!editForm.slug.trim()) errs.slug = "Slug is required";
    if (!editForm.categoryId) errs.categoryId = "Please select a category";
    setEditErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAdd()) return;
    setAddLoading(true);
    try {
      await SubcategoryService.create({ name: addForm.name.trim(), slug: addForm.slug.trim(), categoryId: addForm.categoryId, status: addForm.status });
      addModalCloseRef.current?.click();
      setAddForm({ name: "", slug: "", categoryId: "", status: "Active" });
      setAddErrors({});
      setCurrentPage(1);
      fetchData();
    } catch (err: any) {
      // Error handling
    } finally {
      setAddLoading(false);
    }
  };

  const handleOpenEdit = (row: Subcategory) => {
    setEditTarget(row);
    setEditForm({ name: row.name, slug: row.slug, categoryId: row.categoryId, status: row.status });
    setEditErrors({});
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTarget || !validateEdit()) return;
    setEditLoading(true);
    try {
      await SubcategoryService.update(editTarget.id, { name: editForm.name.trim(), slug: editForm.slug.trim(), categoryId: editForm.categoryId, status: editForm.status });
      editModalCloseRef.current?.click();
      setEditTarget(null);
      fetchData();
    } catch (err: any) {
      // Error handling
    } finally {
      setEditLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      await SubcategoryService.delete(deleteTarget.id);
      deleteModalCloseRef.current?.click();
      setDeleteTarget(null);
      setSelectedItems([]);
      fetchData();
    } catch (err: any) {
      // Error handling
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleBulkDelete = async () => {
    if (!selectedItems.length) return;
    setBulkLoading(true);
    try {
      await SubcategoryService.bulkDelete(selectedItems.map((s) => s.id));
      bulkDeleteModalCloseRef.current?.click();
      setSelectedItems([]);
      fetchData();
    } catch (err: any) {
      // Error handling
    } finally {
      setBulkLoading(false);
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
      // Error handling
    } finally {
      setBulkLoading(false);
    }
  };

  const handleExport = async (format: "xlsx" | "pdf") => {
    if (format === "pdf") setPdfLoading(true);
    else setXlsxLoading(true);
    try {
      await SubcategoryService.export(format);
    } catch {
      // Error handling
    } finally {
      if (format === "pdf") setPdfLoading(false);
      else setXlsxLoading(false);
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
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal" data-bs-target="#edit-subcategory"
            onClick={() => handleOpenEdit(row)}
          >
            <i className="feather icon-edit" />
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal" data-bs-target="#delete-subcategory"
            onClick={() => setDeleteTarget(row)}
          >
            <i className="feather icon-trash-2" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>

      <div className="page-wrapper">
        <div className="content">

          {/* Page Header */}
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Sub Categories</h4>
                <h6>Manage your sub categories</h6>
              </div>
            </div>
            {/* Export tooltip icons */}
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
            <div className="page-btn">
              {/* Add button */}
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-subcategory"
                onClick={() => { setAddForm({ name: "", slug: "", categoryId: "", status: "Active" }); setAddErrors({}); }}
              >
                <i className="ti ti-circle-plus me-1" />Add Sub Category
              </Link>
            </div>
          </div>

          {/* Table Card */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={(v: any) => { setSearchQuery(v); setCurrentPage(1); }}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-2">

                {/* Bulk actions */}
                {selectedItems.length > 0 && (
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-warning btn-md d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {bulkLoading
                        ? <span className="spinner-border spinner-border-sm me-1" />
                        : <i className="ti ti-check me-1" />}
                      Bulk ({selectedItems.length})
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
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
                          data-bs-target="#bulk-delete-subcategory"
                        >
                          <i className="ti ti-trash me-2" />Delete Selected
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Category filter */}
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    {categoryFilter ? categories.find((c) => c.id === categoryFilter)?.name || "Category" : "Category"}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3" style={{ maxHeight: "250px", overflowY: "auto" }}>
                    <li>
                      <button className="dropdown-item rounded-1" onClick={() => { setCategoryFilter(""); setCurrentPage(1); }}>
                        All Categories
                      </button>
                    </li>
                    {categories.map((c) => (
                      <li key={c.id}>
                        <button className="dropdown-item rounded-1" onClick={() => { setCategoryFilter(c.id); setCurrentPage(1); }}>
                          {c.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status filter */}
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    {statusFilter === "All" ? "Status" : statusFilter}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    {(["All", "Active", "Inactive"] as const).map((s) => (
                      <li key={s}>
                        <button className="dropdown-item rounded-1" onClick={() => { setStatusFilter(s); setCurrentPage(1); }}>
                          {s}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body p-0">
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
      </div>

      {/* ADD MODAL*/}
      <div className="modal fade" id="add-subcategory">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title"><h4>Add Sub Category</h4></div>
                  <button
                    ref={addModalCloseRef}
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleAddSubmit} noValidate>

                    {/* Parent Category */}
                    <div className="mb-3">
                      <label className="form-label">
                        Parent Category<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={categorySelectOptions}
                        value={addForm.categoryId}
                        onChange={(e: any) => setAddForm((f) => ({ ...f, categoryId: e.value }))}
                        placeholder="Select a category"
                        filter={true}
                      />
                      {addErrors.categoryId && (
                        <div className="text-danger small mt-1">{addErrors.categoryId}</div>
                      )}
                    </div>

                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label">
                        Sub Category Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${addErrors.name ? "is-invalid" : ""}`}
                        placeholder="e.g. Laptops"
                        value={addForm.name}
                        onChange={(e) => {
                          const name = e.target.value;
                          setAddForm((f) => ({ ...f, name, slug: slugify(name) }));
                        }}
                      />
                      {addErrors.name && <div className="invalid-feedback">{addErrors.name}</div>}
                    </div>

                    {/* Slug */}
                    <div className="mb-3">
                      <label className="form-label">
                        Slug<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${addErrors.slug ? "is-invalid" : ""}`}
                        placeholder="auto-generated"
                        value={addForm.slug}
                        onChange={(e) => setAddForm((f) => ({ ...f, slug: slugify(e.target.value) }))}
                      />
                      {addErrors.slug && <div className="invalid-feedback">{addErrors.slug}</div>}
                    </div>

                    {/* Status */}
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status <span className="text-muted small">({addForm.status})</span></span>
                        <input
                          type="checkbox"
                          id="add-sub-status"
                          className="check"
                          checked={addForm.status === "Active"}
                          onChange={(e) => setAddForm((f) => ({ ...f, status: e.target.checked ? "Active" : "Inactive" }))}
                        />
                        <label htmlFor="add-sub-status" className="checktoggle" />
                      </div>
                    </div>

                    <div className="modal-footer px-0 pb-0 mt-3">
                      <button type="button" className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary fs-13 fw-medium p-2 px-3" disabled={addLoading}>
                        {addLoading ? <><span className="spinner-border spinner-border-sm me-1" />Creating…</> : "Create Sub Category"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*EDIT MODAL*/}
      <div className="modal fade" id="edit-subcategory">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title"><h4>Edit Sub Category</h4></div>
                  <button
                    ref={editModalCloseRef}
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleEditSubmit} noValidate>

                    {/* Parent Category */}
                    <div className="mb-3">
                      <label className="form-label">
                        Parent Category<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={categorySelectOptions}
                        value={editForm.categoryId}
                        onChange={(e: any) => setEditForm((f) => ({ ...f, categoryId: e.value }))}
                        placeholder="Select a category"
                        filter={true}
                      />
                      {editErrors.categoryId && (
                        <div className="text-danger small mt-1">{editErrors.categoryId}</div>
                      )}
                    </div>

                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label">
                        Sub Category Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${editErrors.name ? "is-invalid" : ""}`}
                        value={editForm.name}
                        onChange={(e) => {
                          const name = e.target.value;
                          setEditForm((f) => ({ ...f, name, slug: slugify(name) }));
                        }}
                      />
                      {editErrors.name && <div className="invalid-feedback">{editErrors.name}</div>}
                    </div>

                    {/* Slug */}
                    <div className="mb-3">
                      <label className="form-label">
                        Slug<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${editErrors.slug ? "is-invalid" : ""}`}
                        value={editForm.slug}
                        onChange={(e) => setEditForm((f) => ({ ...f, slug: slugify(e.target.value) }))}
                      />
                      {editErrors.slug && <div className="invalid-feedback">{editErrors.slug}</div>}
                    </div>

                    {/* Status */}
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status <span className="text-muted small">({editForm.status})</span></span>
                        <input
                          type="checkbox"
                          id="edit-sub-status"
                          className="check"
                          checked={editForm.status === "Active"}
                          onChange={(e) => setEditForm((f) => ({ ...f, status: e.target.checked ? "Active" : "Inactive" }))}
                        />
                        <label htmlFor="edit-sub-status" className="checktoggle" />
                      </div>
                    </div>

                    <div className="modal-footer px-0 pb-0 mt-3">
                      <button type="button" className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary fs-13 fw-medium p-2 px-3" disabled={editLoading}>
                        {editLoading ? <><span className="spinner-border spinner-border-sm me-1" />Saving…</> : "Save Changes"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*DELETE MODAL*/}
      <div className="modal fade" id="delete-subcategory">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center py-4">
              <div className="mb-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10"
                  style={{ width: 64, height: 64 }}
                >
                  <i className="ti ti-trash text-danger fs-2" />
                </div>
              </div>
              <h5 className="fw-bold">Delete Sub Category?</h5>
              <p className="text-muted mb-0">
                Are you sure you want to delete <strong>{deleteTarget?.name}</strong>?
                This action cannot be undone.
              </p>
            </div>
            <div className="modal-footer justify-content-center border-0 pt-0 pb-4">
              <button
                ref={deleteModalCloseRef}
                type="button"
                className="btn btn-secondary px-4"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger px-4"
                onClick={handleDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? <><span className="spinner-border spinner-border-sm me-1" />Deleting…</> : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*BULK DELETE MODAL*/}
      <div className="modal fade" id="bulk-delete-subcategory" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center py-4">
              <div className="mb-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10"
                  style={{ width: 64, height: 64 }}
                >
                  <i className="ti ti-trash text-danger fs-2" />
                </div>
              </div>
              <h5 className="fw-bold">Delete Selected?</h5>
              <p className="text-muted mb-0">
                Are you sure you want to delete <strong>{selectedItems.length}</strong> selected sub categories?
                This action cannot be undone.
              </p>
            </div>
            <div className="modal-footer justify-content-center border-0 pt-0 pb-4">
              <button
                ref={bulkDeleteModalCloseRef}
                type="button"
                className="btn btn-secondary px-4"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger px-4"
                onClick={handleBulkDelete}
                disabled={bulkLoading}
              >
                {bulkLoading ? <><span className="spinner-border spinner-border-sm me-1" />Deleting…</> : "Yes, Delete All"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategories;
