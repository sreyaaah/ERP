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
import AddBrandModal from "../../core/modals/inventory/AddBrandModal";
import EditBrandModal from "../../core/modals/inventory/EditBrandModal";

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
  const [loading, setLoading] = useState(false);

  // Modal target states
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<"single" | "bulk">("single");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");

  const fetchBrands = useCallback(async () => {
    setLoading(true);
    try {
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
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  const filteredBrands = brands.filter((brand) => {
    const statusOk = statusFilter === "All" || brand.status === statusFilter;
    const searchOk = !searchQuery || 
      brand.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return statusOk && searchOk;
  });

  const handleConfirmDelete = async () => {
    if (deleteType === "single") {
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
    } else {
      if (selectedProducts.length === 0) return;
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
            <img 
               src={data.image} 
               alt="brand" 
               className="rounded-circle" 
               onError={(e: any) => { e.target.src = user41; }}
            />
          </Link>
          <Link to="#" className="fw-medium text-dark">{data.brand}</Link>
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
      body: (row: Brand) => (
        <div className="edit-delete-action d-flex align-items-center justify-content-end">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-brand"
            onClick={() => setSelectedBrand(row)}
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
              {selectedProducts.length > 0 && (
                <div className="d-flex align-items-center me-2">
                  <button 
                    className="btn btn-danger btn-sm me-2" 
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    onClick={() => setDeleteType("bulk")}
                  >
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
                <p className="mt-2 text-muted small">Loading brands…</p>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
      <CommonFooter />

      <AddBrandModal onUpdate={fetchBrands} />
      <EditBrandModal brand={selectedBrand} onUpdate={fetchBrands} />
      <DeleteModal onConfirm={handleConfirmDelete} />
    </div>
  );
};

export default BrandList;