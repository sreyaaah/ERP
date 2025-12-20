import { useState } from "react";
import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import { Link } from "react-router-dom";
import { SoldStockData } from "../../core/json/soldstockdata";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const SoldStock = () => {
  const route = all_routes;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const data = SoldStockData;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const ProductName = [{ label: "Lenovo 3rd Generation", value: "1" }];

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const Category = [{ label: "Laptop", value: "1" }];
  const columns = [
    {
      header: "SKU",
      field: "SKU",
      sorter: (a: any, b: any) => a.SKU.length - b.SKU.length,
    },
    {
      header: "Product Name",
      field: "Product_Name",
      body: (data: any) => (
        <div className="d-flex align-items-center">
          <Link className="avatar avatar-md" to="#">
            <img src={data.img} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">{data.Product_Name}</p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Product_Name.length - b.Product_Name.length,
    },

    {
      header: "Unit",
      field: "Unit",
      sorter: (a: any, b: any) => a.Unit.length - b.Unit.length,
    },

    {
      header: "Quantity",
      field: "Quantity",
      sorter: (a: any, b: any) => a.Quantity.length - b.Quantity.length,
    },
    {
      header: "Tax Value",
      field: "Tax_Value",
      sorter: (a: any, b: any) => a.Tax_Value.length - b.Tax_Value.length,
    },

    {
      header: "Total",
      field: "Total",
      sorter: (a: any, b: any) => a.Total.length - b.Total.length,
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="table-tab">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to={route.inventoryreport}>
                  Inventory Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={route.stockhistory}>
                  Stock History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={route.soldstock}>
                  Sold Stock
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Sold Stock</h4>
                  <h6>View Reports of Sold Stock</h6>
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
                        <div className="col-md-4">
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
                        <div className="col-md-4">
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
                        <div className="col-md-4">
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
            <div className="card table-list-card no-search">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <SearchFromApi
                  callback={handleSearch}
                  rows={rows}
                  setRows={setRows}
                />
                <ul className="table-top-head">
                  <TooltipIcons />
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Print"
                    >
                      <i className="ti ti-printer" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="card-body p-0">
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
      </div>
    </div>
  );
};

export default SoldStock;
