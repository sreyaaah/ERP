import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import EditLowStock from "../../core/modals/inventory/editlowstock";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import { ProductService } from "../services/product.service";

const LowStock: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [lowStockList, setLowStockList] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"low" | "out">("low");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchStocks = async () => {
    setIsLoading(true);
    try {
      const params: any = {
        search: searchQuery,
        page: currentPage,
        limit: rows,
      };
      if (activeTab === "low") params.lowStock = "true";
      else params.outOfStock = "true";

      const { data, total } = await ProductService.getAll(params);

      const transformedData = data.map((item: any) => ({
        ...item,
        qty: item.quantity, // Match field name if needed, but we can also use 'quantity' directly if preferred
      }));

      setLowStockList(transformedData);
      setTotalRecords(total);
    } catch (error) {
      console.error("Failed to fetch stock info:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, [currentPage, rows, searchQuery, activeTab]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const columns = useMemo(() => {
    const allColumns = [
      {
        header: "Product",
        field: "product",
        key: "product",
        sortable: true,
        body: (data: any) => (
          <span className="productimgname">{data.product}</span>
        ),
      },
      {
        header: "Category",
        field: "category",
        key: "category",
        sortable: true,
      },
      {
        header: "SkU",
        field: "sku",
        key: "sku",
        sortable: true,
      },
      {
        header: "Qty",
        field: "qty",
        key: "qty",
        sortable: true,
      },
      {
        header: "Status",
        field: "status",
        key: "status",
        sortable: true,
        body: (data: any) => {
          const isOutOfStock = (data.qty || data.quantity || 0) <= 0;
          return (
            <span
              className={`badge ${isOutOfStock ? "badge-soft-danger" : "badge-soft-warning"}`}
            >
              {isOutOfStock ? "Out of Stock" : "Low Stock"}
            </span>
          );
        },
      },
      {
        header: "Actions",
        field: "actions",
        key: "actions",
        sortable: false,
        body: (row: any) => (
          <div className="edit-delete-action d-flex align-items-center">
            <Link
              className="p-2 d-flex align-items-center border rounded"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              onClick={() => setDeleteId(row.id)}
            >
              <i className="feather icon-trash-2 text-danger"></i>
            </Link>
          </div>
        ),
      },
    ];

    if (activeTab === "out") {
      return allColumns.filter((col) => col.header !== "Qty");
    }
    return allColumns;
  }, [activeTab, setDeleteId]);

  const handleExportExcel = async () => {
    const params: any = {};
    if (activeTab === "low") params.lowStock = "true";
    else params.outOfStock = "true";
    await ProductService.export("xlsx", params);
  };

  const handleExportPdf = async () => {
    const params: any = {};
    if (activeTab === "low") params.lowStock = "true";
    else params.outOfStock = "true";
    await ProductService.export("pdf", params);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title me-auto">
              <h4 className="fw-bold">Low Stocks</h4>
              <h6>Manage your low stocks</h6>
            </div>
            <ul className="table-top-head">
              <TooltipIcons onExcelClick={handleExportExcel} onPdfClick={handleExportPdf} />
              <RefreshIcon onClick={fetchStocks} />
              <CollapesIcon />
            </ul>
          </div>
          <div className="table-tab">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
              <ul
                className="nav nav-pills low-stock-tab d-flex me-2 mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "low" ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab("low");
                      setCurrentPage(1);
                    }}
                    type="button"
                  >
                    Low Stocks
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "out" ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab("out");
                      setCurrentPage(1);
                    }}
                    type="button"
                  >
                    Out of Stocks
                  </button>
                </li>
              </ul>
            </div>

            <div className="card table-list-card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <SearchFromApi
                  callback={handleSearch}
                  rows={rows}
                  setRows={setRows}
                />
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <PrimeDataTable
                    key={activeTab}
                    column={columns}
                    data={lowStockList}
                    rows={rows}
                    setRows={setRows}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalRecords={totalRecords}
                    searchQuery={searchQuery}
                    loading={isLoading}
                    selectionMode="checkbox"
                    selection={selectedProducts}
                    onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      <EditLowStock />
      <DeleteModal
        onConfirm={async () => {
          if (!deleteId) return;
          try {
            await ProductService.delete(deleteId);
            setDeleteId(null);
            fetchStocks();
          } catch (error) {
            console.error("Delete failed:", error);
          }
        }}
      />
    </div>
  );
};

export default LowStock;
