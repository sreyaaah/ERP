import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import PrimeDataTable from "../../components/data-table";
import html2pdf from "html2pdf.js";
import { stockImg1 } from "../../utils/imagepath";
import SearchFromApi from "../../components/data-table/search";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

interface ProductItem {
  sku: string;
  product: string;
  productImage: string;
  category: string;
  brand: string;
  price: string;
  unit: string;
  qty: string;
  itemCode: string;
  action?: string;
}

import { ProductService } from "../services/product.service";
import { CategoryService } from "../services/category.service";
import { BrandService } from "../services/brand.service";

const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [isBulkDelete, setIsBulkDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFilters();
  }, []);

  const fetchFilters = async () => {
    try {
      const catRes = await CategoryService.getAll();
      setCategories(catRes);
      const brandRes = await BrandService.getBrands(1, 1000);
      setBrands(brandRes.data || []);
    } catch (err) {
      console.error("Error fetching filters:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, rows, searchQuery, selectedCategory, selectedBrand]);

  const fetchProducts = async () => {
    setError(null);
    try {
      const response = await ProductService.getAll({
        page: currentPage,
        limit: rows,
        search: searchQuery,
        category: selectedCategory || undefined,
        brand: selectedBrand || undefined,
      });

      const transformedProducts = response.data.map((p: any) => ({
        id: p.id,
        product: p.product,
        productImage: p.productImage || stockImg1,
        sku: p.sku,
        category: p.category || "N/A",
        brand: p.brand || "N/A",
        price: `₹${p.price}`,
        unit: p.unit || "Pc",
        qty: p.quantity || "0",
        itemCode: p.itemCode || "N/A",
      }));

      setProducts(transformedProducts);
      setTotalRecords(response.total);
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to load products. Please try again.";
      setError(message);
    }
  };

  const handleSearch = (value: any) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (id: string | null) => {
    setSelectedCategory(id);
    setCurrentPage(1);
  };

  const handleBrandChange = (id: string | null) => {
    setSelectedBrand(id);
    setCurrentPage(1);
  };

  const handleRowsChange = (newRows: number) => {
    setRows(newRows);
    setCurrentPage(1);
  };

  const handleExport = async (format: "xlsx" | "pdf") => {
    try {
      await ProductService.export(format);
    } catch (error) {
      console.error(`Export ${format} failed:`, error);
    }
  };

  const handleDownloadPdf = async (id: string) => {
    try {
      const product = await ProductService.getById(id);
      const imageUrl = product.images?.[0]?.url || "";
      const category =
        product.categoryId && typeof product.categoryId === "object"
          ? product.categoryId.name
          : product.categoryId || "N/A";
      const brand =
        product.brandId && typeof product.brandId === "object"
          ? product.brandId.name
          : product.brandId || "N/A";
      const unit =
        product.unitId && typeof product.unitId === "object"
          ? product.unitId.name
          : product.unitId || "N/A";

      const html = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color:#444;border-bottom:2px solid #eee;padding-bottom:10px;">Product Details</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr style="background:#f9f9f9">
              <td style="padding:10px;font-weight:bold;width:35%;">Product Name</td>
              <td style="padding:10px;">${product.product}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;">SKU</td>
              <td style="padding:10px;">${product.sku}</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding:10px;font-weight:bold;">HSN/SAC Number</td>
              <td style="padding:10px;">${product.itemCode || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;">Category</td>
              <td style="padding:10px;">${category}</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding:10px;font-weight:bold;">Brand</td>
              <td style="padding:10px;">${brand}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;">Unit</td>
              <td style="padding:10px;">${unit}</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding:10px;font-weight:bold;">Tax Type</td>
              <td style="padding:10px;">${product.taxType || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;">Tax Rate</td>
              <td style="padding:10px;">${product.taxRate || 0}%</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding:10px;font-weight:bold;">Price (Before Tax)</td>
              <td style="padding:10px;">₹${product.priceBeforeTax}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;">Price (After Tax)</td>
              <td style="padding:10px;font-weight:bold;color:#27ae60;">₹${product.priceAfterTax}</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding:10px;font-weight:bold;">Quantity</td>
              <td style="padding:10px;">${product.quantity}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;">Status</td>
              <td style="padding:10px;">${product.status}</td>
            </tr>
            ${product.description ? `<tr style="background:#f9f9f9"><td style="padding:10px;font-weight:bold;">Description</td><td style="padding:10px;">${product.description.replace(/<[^>]+>/g, "")}</td></tr>` : ""}
          </table>
          ${imageUrl ? `<div style="margin-top:10px;"><p style="font-weight:bold;">Product Image:</p><img src="${imageUrl}" style="max-width:200px;border-radius:6px;border:1px solid #eee;"/></div>` : ""}
          <p style="margin-top:20px;font-size:12px;color:#aaa;">Generated on ${new Date().toLocaleDateString()}</p>
        </div>
      `;

      const tempEl = document.createElement("div");
      tempEl.innerHTML = html;
      document.body.appendChild(tempEl);

      await html2pdf()
        .set({
          margin: 10,
          filename: `Product_${product.sku || id}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(tempEl)
        .save();

      document.body.removeChild(tempEl);
    } catch (error) {
      console.error("Download PDF failed:", error);
    }
  };

  const confirmDelete = async () => {
    try {
      if (isBulkDelete) {
        if (selectedProducts.length === 0) return;
        const ids = selectedProducts.map((p) => p.id);
        await ProductService.bulkDelete(ids);
        setSelectedProducts([]);
      } else {
        if (!deleteId) return;
        await ProductService.delete(deleteId);
      }

      // Refresh the list
      fetchProducts();

      // Close modal
      const closeBtn = document.querySelector(
        '#delete-modal [data-bs-dismiss="modal"]',
      ) as HTMLButtonElement;
      closeBtn?.click();

      setDeleteId(null);
      setIsBulkDelete(false);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const route = all_routes;
  const columns = [
    {
      header: "SKU",
      field: "sku",
      key: "sku",
      sortable: true,
    },
    {
      header: "Product",
      field: "product",
      key: "product",
      sortable: true,
      body: (data: ProductItem) => (
        <div className="d-flex align-items-center">
          <img
            src={data.productImage}
            alt={data.product}
            className="me-2 rounded"
            style={{ width: 36, height: 36, objectFit: "cover" }}
          />
          <Link to="#">{data.product}</Link>
        </div>
      ),
    },
    {
      header: "HSN/SAC Number",
      field: "itemCode",
      key: "itemCode",
      sortable: true,
    },
    {
      header: "Category",
      field: "category",
      key: "category",
      sortable: true,
    },
    {
      header: "Brand",
      field: "brand",
      key: "brand",
      sortable: true,
    },
    {
      header: "Price",
      field: "price",
      key: "price",
      sortable: true,
    },
    {
      header: "Unit",
      field: "unit",
      key: "unit",
      sortable: true,
    },
    {
      header: "Qty",
      field: "qty",
      key: "qty",
      sortable: true,
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
            to={`${route.productdetails}/${row.id}`}
          >
            <i className="feather icon-eye"></i>
          </Link>
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleDownloadPdf(String(row.id));
            }}
            title="Download PDF"
          >
            <i className="feather icon-download"></i>
          </Link>
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to={`${all_routes.editproduct}/${row.id}`}
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            onClick={() => {
              setDeleteId(String(row.id));
              setIsBulkDelete(false);
            }}
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Product List</h4>
                <h6>Manage your products</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons
                onPdfClick={() => handleExport("pdf")}
                onExcelClick={() => handleExport("xlsx")}
              />
              <RefreshIcon onClick={fetchProducts} />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link to={route.addproduct} className="btn btn-primary">
                <i className="ti ti-circle-plus me-1"></i>
                Add Product
              </Link>
            </div>
            <div className="page-btn import">
              <Link
                to="#"
                className="btn btn-secondary color"
                data-bs-toggle="modal"
                data-bs-target="#view-notes"
              >
                <i className="feather icon-download feather me-2" />
                Import Product
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={handleRowsChange}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    {selectedCategory
                      ? categories.find((c) => c.id === selectedCategory)?.name
                      : "Category"}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                        onClick={() => handleCategoryChange(null)}
                      >
                        All Categories
                      </Link>
                    </li>
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                          onClick={() => handleCategoryChange(cat.id)}
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    {selectedBrand
                      ? brands.find((b) => b.id === selectedBrand)?.name
                      : "Brand"}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                        onClick={() => handleBrandChange(null)}
                      >
                        All Brands
                      </Link>
                    </li>
                    {brands.map((brand) => (
                      <li key={brand.id}>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                          onClick={() => handleBrandChange(brand.id)}
                        >
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedProducts.length > 0 && (
                  <div className="dropdown me-2">
                    <button
                      className="btn btn-danger btn-md d-inline-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      onClick={() => {
                        setIsBulkDelete(true);
                        setDeleteId(null);
                      }}
                    >
                      <i className="ti ti-trash me-1"></i>
                      Delete Selected ({selectedProducts.length})
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="card-body">
              {/* Error Banner */}
              {error && (
                <div
                  className="alert alert-danger alert-dismissible fade show d-flex align-items-center mb-3"
                  role="alert"
                >
                  <i className="feather icon-alert-circle me-2 fs-18" />
                  <span>{error}</span>
                  <button
                    type="button"
                    className="btn-close ms-auto"
                    onClick={() => setError(null)}
                    aria-label="Close"
                  />
                </div>
              )}
              {/* /Filter */}
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={products}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
                  searchQuery={searchQuery}
                  loading={false}
                  selectionMode="checkbox"
                  selection={selectedProducts}
                  onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 fw-bold mb-2 mt-1">
                  {isBulkDelete ? "Delete Selected Products" : "Delete Product"}
                </h4>
                <p className="mb-0 fs-16">
                  {isBulkDelete
                    ? `Are you sure you want to delete ${selectedProducts.length} selected products?`
                    : "Are you sure you want to delete this product?"}
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    onClick={confirmDelete}
                  >
                    Yes Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
