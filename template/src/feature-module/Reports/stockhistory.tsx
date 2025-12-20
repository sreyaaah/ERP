import { useState } from "react";
import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import { Stockhistroydata } from "../../core/json/stockhistorydata";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const Stockhistory = () => {
  const route = all_routes;
  const data = Stockhistroydata;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);

  const Category = [{ label: "Laptop", value: "1" }];
  const ProductName = [{ label: "Lenovo 3rd Generation", value: "1" }];
  const columns = [
    {
      header: "SKU",
      field: "SKU",
      sorter: (a: any, b: any) => a.SKU.length - b.SKU.length,
    },
    {
      header: "Product Name",
      field: "Product_Name",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link className="avatar avatar-md" to="#">
            <img src={record.img} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">
              {text}
              {text}
            </p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Product_Name.length - b.Product_Name.length,
    },

    {
      header: "Initial Quantity",
      field: "Initial_Quantity",
      sorter: (a: any, b: any) =>
        a.Initial_Quantity.length - b.Initial_Quantity.length,
    },

    {
      header: "Added Quantity",
      field: "Added_Quantity",
      sorter: (a: any, b: any) =>
        a.Added_Quantity.length - b.Added_Quantity.length,
    },
    {
      header: "Sold Quantity",
      field: "Sold_Quantity",
      sorter: (a: any, b: any) =>
        a.Sold_Quantity.length - b.Sold_Quantity.length,
    },

    {
      header: "Defective Quantity",
      field: "Defective_Quantity",
      sorter: (a: any, b: any) =>
        a.Defective_Quantity.length - b.Defective_Quantity.length,
    },
    {
      header: "Final Quantity",
      field: "Final_Quantity",
      sorter: (a: any, b: any) =>
        a.Final_Quantity.length - b.Final_Quantity.length,
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
                <Link className="nav-link active" to={route.stockhistory}>
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
          <div>
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Stock History</h4>
                  <h6>View Reports of Stock History</h6>
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

export default Stockhistory;
