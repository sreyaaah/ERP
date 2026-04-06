import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../components/data-table";
import CommonFooter from "../../components/footer/commonFooter";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { ProductService } from "../services/product.service";




const ExpiredProduct: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [expiredProductList, setExpiredProductList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchExpiredProducts = async () => {
    setIsLoading(true);
    try {
      const { data, total } = await ProductService.getAll({
        expired: "true",
        search: searchQuery,
        page: currentPage,
        limit: rows,
      });
      setExpiredProductList(data);
      setTotalRecords(total);
    } catch (error) {
      console.error("Failed to fetch expired products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpiredProducts();
  }, [currentPage, rows, searchQuery]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };
  const ProductName = [{ label: "Lenovo 3rd Generation", value: "1" }];

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
      body: (data: any) => (
        <span className="productimgname">
          {data.product}
        </span>
      ),
    },
    {
      header: "Manufactured Date",
      field: "manufacturedDate",
      key: "manufacturedDate",
      sortable: true,
    },
    {
      header: "Expired Date",
      field: "expiryDate",
      key: "expiryDate",
      sortable: true,
    },
    {
      header: "Qty",
      field: "quantity",
      key: "quantity",
      sortable: true,
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

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    try {
      await ProductService.delete(deleteId);
      setDeleteId(null);
      fetchExpiredProducts();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleExportExcel = async () => {
    await ProductService.export("xlsx", { expired: "true" });
  };

  const handleExportPdf = async () => {
    await ProductService.export("pdf", { expired: "true" });
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Expired Products</h4>
                <h6>Manage your expired products</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons onExcelClick={handleExportExcel} onPdfClick={handleExportPdf} />
              <RefreshIcon onClick={fetchExpiredProducts} />
              <CollapesIcon />
            </ul>
          </div>
          <>
            {/* /product list */}
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
                    column={columns}
                    data={expiredProductList}
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
            {/* /product list */}
          </>
        </div>
        <CommonFooter />
      </div>

      {/* edit */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Expired Product</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            SKU<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Product Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={ProductName}
                            value={selectedProductName}
                            onChange={(e) => setSelectedProductName(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label>
                            Manufacturer Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <CommonDatePicker
                              value={date1}
                              onChange={setDate1}
                              className="w-100"
                            />
                            <i className="feather icon-calendar info-img" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label>
                            Expiry Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <CommonDatePicker
                              value={date2}
                              onChange={setDate2}
                              className="w-100"
                            />
                            <i className="feather icon-calendar info-img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal onConfirm={handleConfirmDelete} />
    </div>
  );
};

export default ExpiredProduct;
