import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categoryService } from "./categoryService";
import EditCategoryList from "../../core/modals/inventory/editcategorylist";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";

// Define interfaces for type safety
interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  status: string;
}



const CategoryList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
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

  const columns = [
    {
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
            data-bs-toggle="modal"
            data-bs-target="#edit-category"
            onClick={() => setSelectedCategory(row)}
          >
            <i  className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal" 
            data-bs-target="#delete-modal"
            onClick={() => setDeleteId(row.id)}
          >
            <i  className="feather icon-trash-2"></i>
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
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Category</h4>
                <h6>Manage your categories</h6>
              </div>
            </div>
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
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Category
              </button>
            </div>
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
            <div className="card-body">
              <div className="table-responsive category-table">
                <PrimeDataTable
                  column={columns}
                  data={dataSource}
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

      {/* Add Category */}
      <div className="modal fade" id="add-category">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Category</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
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
            </div>
          </div>
        </div>
      </div>
      {/* /Add Category */}

      <EditCategoryList category={selectedCategory} onUpdate={loadCategories} />
      <DeleteModal onConfirm={handleDelete} title="Are you sure you want to delete this category?" />
    </div>
  );
};

export default CategoryList;
