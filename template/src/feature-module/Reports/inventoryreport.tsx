import { useState } from "react";
import { Link } from "react-router-dom";
import { inventoryreportdata } from "../../core/json/inventoryreportdata";
import { all_routes } from "../../routes/all_routes";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import CommonSelect from "../../components/select/common-select";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const InventoryReport = () => {
  const route = all_routes;
  const data = inventoryreportdata;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, _setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const Category = [
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "grocery", label: "Grocery" },
  ];
  const ProductName = [
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
    { value: "product3", label: "Product 3" },
  ];

  const units = [
    { value: "PC", label: "PC" },
    { value: "BX", label: "BX" },
  ];
  const columns = [
    {
      header: "Product Name",
      field: "productName",
      body: (text: any) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <img alt="img" src={text.img} />
          </Link>
          <Link to="#">{text.productName}</Link>
        </span>
      ),
      sorter: (a: any, b: any) => a.productName.length - b.productName.length,
    },
    {
      header: "SKU",
      field: "sku",
      sorter: (a: any, b: any) => a.sku.length - b.sku.length,
    },

    {
      header: "Category",
      field: "category",
      sorter: (a: any, b: any) => a.category.length - b.category.length,
    },

    {
      header: "Brand",
      field: "brand",
      sorter: (a: any, b: any) => a.brand.length - b.brand.length,
    },
    {
      header: "Unit",
      field: "unit",
      sorter: (a: any, b: any) => a.unit.length - b.unit.length,
    },

    {
      header: "Instock Qty",
      field: "instockQty",
      sorter: (a: any, b: any) => a.instockQty.length - b.instockQty.length,
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="table-tab">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link active" to={route.inventoryreport}>
                  Inventory Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={route.stockhistory}>
                  Stock History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={route.soldstock}>
                  Sold Stock
                </Link>
              </li>
            </ul>
          </div>

          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Inventory</h4>
                <h6>View Reports of Inventory</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="card border-0">
            <div className="card-body pb-1">
              <form>
                <div className="row align-items-end">
                  <div className="col-lg-10">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Choose Date</label>
                          <div className="input-icon-start position-relative">
                            <CommonDateRangePicker />
                            <span className="input-icon-left">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Category</label>
                          <CommonSelect
                            className="w-100"
                            options={Category}
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Products</label>
                          <CommonSelect
                            className="w-100"
                            options={ProductName}
                            value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Units</label>
                          <CommonSelect
                            className="w-100"
                            options={units}
                            value={selectedUnit}
                            onChange={(e) => setSelectedUnit(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <button className="btn btn-primary w-100" type="submit">
                        Generate Report
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-body">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={listData}
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
      </div>
      <CommonFooter />
    </>
  );
};

export default InventoryReport;
