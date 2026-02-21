import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import { BrandService } from "../services/brand.service";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { user41 } from "../../utils/imagepath";

// Type definitions
interface Brand {
  id: string;
  brand: string;
  slug: string;
  image: string;
  createdon: string;
  status: string;
}

const BrandList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  // Form states
  const [newBrand, setNewBrand] = useState({ name: "", status: "Active", image: null as File | null });
  const [editBrandData, setEditBrandData] = useState({ id: "", name: "", status: "Active", image: null as File | null, existingImage: "" });
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editImagePreview, setEditImagePreview] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");

  const filteredBrands = brands.filter((brand) => {
    if (statusFilter === "All") return true;
    return brand.status === statusFilter;
  });

  const fetchBrands = useCallback(async () => {
    try {
      // Load all brands at once to support client-side pagination in PrimeDataTable
      const response = await BrandService.getBrands(1, 0, "");
      if (response.status) {
        setBrands(response.data.map((b: any) => ({
          id: b.id,
          brand: b.name,
          slug: b.slug,
          image: b.image ? `http://localhost:5000/uploads/brands/${b.image}` : user41,
          createdon: new Date(b.createdAt).toLocaleDateString(),
          status: b.status
        })));
      }
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  }, []);

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewBrand({ ...newBrand, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setEditBrandData({ ...editBrandData, image: file });
      setEditImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddBrand = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const slug = newBrand.name.toLowerCase().replace(/ /g, "-");
      const formData = new FormData();
      formData.append("name", newBrand.name);
      formData.append("slug", slug);
      formData.append("status", newBrand.status);
      if (newBrand.image) {
        formData.append("image", newBrand.image);
      }

      const response = await BrandService.createBrand(formData);
      if (response.status) {
        fetchBrands();
        setNewBrand({ name: "", status: "Active", image: null });
        setImagePreview(null);
        // Close modal
        const closeBtn = document.querySelector("#add-brand .close") as HTMLElement;
        closeBtn?.click();
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error adding brand:", error);
    }
  };

  const handleUpdateBrand = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const slug = editBrandData.name.toLowerCase().replace(/ /g, "-");
      const formData = new FormData();
      formData.append("name", editBrandData.name);
      formData.append("slug", slug);
      formData.append("status", editBrandData.status);
      if (editBrandData.image) {
        formData.append("image", editBrandData.image);
      }

      const response = await BrandService.updateBrand(editBrandData.id, formData);
      if (response.status) {
        fetchBrands();
        const closeBtn = document.querySelector("#edit-brand .close") as HTMLElement;
        closeBtn?.click();
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const response = await BrandService.deleteBrand(deleteId);
      if (response.status) {
        fetchBrands();
        setDeleteId(null);
      }
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  const handleBulkDelete = async () => {
    if (selectedProducts.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedProducts.length} brands?`)) {
      try {
        const ids = selectedProducts.map(p => p.id);
        const response = await BrandService.bulkDelete(ids);
        if (response.status) {
          fetchBrands();
          setSelectedProducts([]);
        }
      } catch (error) {
        console.error("Error bulk deleting brands:", error);
      }
    }
  };

  const handleBulkStatusUpdate = async (status: string) => {
    if (selectedProducts.length === 0) return;
    try {
      const ids = selectedProducts.map(p => p.id);
      const response = await BrandService.bulkUpdateStatus(ids, status);
      if (response.status) {
        fetchBrands();
        setSelectedProducts([]);
      }
    } catch (error) {
      console.error("Error bulk updating status:", error);
    }
  };

  const columns = [
    {
      field: "brand",
      header: "Brand",
      key: "brand",
      sortable: true,
      body: (data: Brand) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={data.image} alt="brand" className="rounded-circle" />
          </Link>
          <Link to="#">{data.brand}</Link>
        </div>
      ),
    },
    {
      field: "slug",
      header: "Slug",
      key: "slug",
      sortable: true,
    },
    {
      field: "createdon",
      header: "Created Date",
      key: "createdon",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      key: "status",
      sortable: true,
      body: (rowData: Brand) => (
        <span
          className={`d-inline-flex align-items-center justify-content-center p-1 rounded-1 text-white bg-${
            rowData.status === "Active" ? "success" : "danger"
          } fs-10`}
          style={{ width: "85px" }}
        >
          <i className="ti ti-point-filled me-1 fs-11"></i>
          {rowData.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (row: Brand) => (
        <div className="edit-delete-action d-flex align-items-center justify-content-end">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-brand"
            onClick={() => {
                setEditBrandData({ 
                    id: row.id, 
                    name: row.brand, 
                    status: row.status, 
                    image: null, 
                    existingImage: row.image 
                });
                setEditImagePreview(row.image);
            }}
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            onClick={() => setDeleteId(row.id)}
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Brand</h4>
                <h6>Manage your brands</h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <ul className="table-top-head">
                <TooltipIcons 
                  onPdfClick={() => BrandService.exportData('pdf')}
                  onExcelClick={() => BrandService.exportData('xlsx')}
                />
                <RefreshIcon onClick={fetchBrands} />
                <CollapesIcon />
              </ul>
              <div className="page-btn">
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add-brand"
                >
                  <i className="ti ti-circle-plus me-1"></i>
                  Add Brand
                </Link>
              </div>
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
                    <button className="btn btn-danger btn-sm me-2" onClick={handleBulkDelete}>
                      Bulk Delete ({selectedProducts.length})
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
                    Status
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li><Link to="#" className="dropdown-item rounded-1" onClick={() => setStatusFilter('Active')}>Active</Link></li>
                    <li><Link to="#" className="dropdown-item rounded-1" onClick={() => setStatusFilter('Inactive')}>Inactive</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to="#" className="dropdown-item rounded-1" onClick={() => setStatusFilter('All')}>All</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive brand-table">
                <PrimeDataTable
                  column={columns}
                  data={filteredBrands}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={filteredBrands.length}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedProducts}
                  onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      {/* Add Brand */}
      <div className="modal fade" id="add-brand">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Brand</h4>
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
                <div className="modal-body custom-modal-body new-employee-field">
                  <form onSubmit={handleAddBrand}>
                    <div className="profile-pic-upload mb-3">
                      <div className="profile-pic">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Brand"
                            className="img-fluid rounded"
                            style={{
                              width: "120px",
                              height: "120px",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <span>
                            <i className="feather icon-plus-circle plus-down-add" />{" "}
                            Add Image
                          </span>
                        )}
                      </div>
                      <div className="mb-0">
                        <div className="image-upload mb-0">
                          <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleImageChange}
                          />
                          <div className="image-uploads">
                            <h4>Upload Image</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Brand Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={newBrand.name}
                        onChange={(e) => setNewBrand({...newBrand, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="status-add"
                          className="check"
                          checked={newBrand.status === "Active"}
                          onChange={(e) => setNewBrand({...newBrand, status: e.target.checked ? "Active" : "Inactive"})}
                        />
                        <label htmlFor="status-add" className="checktoggle" />
                      </div>
                    </div>
                    <div className="modal-footer px-0 pb-0 pt-3">
                      <button
                        type="button"
                        className="btn me-2 btn-secondary shadow-none"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Add Brand
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Brand */}
      <div className="modal fade" id="edit-brand">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Brand</h4>
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
                <div className="modal-body custom-modal-body new-employee-field">
                  <form onSubmit={handleUpdateBrand}>
                    <div className="profile-pic-upload mb-3">
                      <div className="profile-pic">
                        {editImagePreview ? (
                          <img
                            src={editImagePreview}
                            alt="Brand"
                            className="img-fluid rounded"
                            style={{
                              width: "120px",
                              height: "120px",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <span>
                            <i className="feather icon-plus-circle plus-down-add" />{" "}
                            Add Image
                          </span>
                        )}
                      </div>
                      <div className="mb-0">
                        <div className="image-upload mb-0">
                          <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleEditImageChange}
                          />
                          <div className="image-uploads">
                            <h4>Upload Image</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Brand Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={editBrandData.name}
                        onChange={(e) => setEditBrandData({...editBrandData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="status-edit"
                          className="check"
                          checked={editBrandData.status === "Active"}
                          onChange={(e) => setEditBrandData({...editBrandData, status: e.target.checked ? "Active" : "Inactive"})}
                        />
                        <label htmlFor="status-edit" className="checktoggle" />
                      </div>
                    </div>
                    <div className="modal-footer px-0 pb-0 pt-3">
                      <button
                        type="button"
                        className="btn me-2 btn-secondary shadow-none"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal onConfirm={handleDelete} />
    </div>
  );
};

export default BrandList;