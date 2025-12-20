import { useState } from "react";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import { Link } from "react-router-dom";
import { BestSellerData } from "../../core/json/bestsellerdata";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const BestSeller = () => {
  const data = BestSellerData;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedBestStore, setSelectedBestStore] = useState(null);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const BestStores = [
    { label: "All", value: "1" },
    { label: "Carl Evans", value: "2" },
    { label: "Minerva Rameriz", value: "3" },
    { label: "Robert Lamon", value: "4" },
  ];

  const columns = [
    {
      header: "SKU",
      field: "SKU",
      sorter: (a:any, b:any) => a.SKU.length - b.SKU.length,
    },
    {
      header: "Product Name",
      field: "Product_Name",
      body: (text: any) => (
        <div className="d-flex align-items-center">
          <Link className="avatar avatar-md" to="#">
            <img src={text.img} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">{text.Product_Name}</p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Product_Name.length - b.Product_Name.length,
    },

    {
      header: "Category",
      field: "Category",
      sorter: (a: any, b: any) => a.Category.length - b.Category.length,
    },

    {
      header: "Brand",
      field: "Brand",
      sorter: (a: any, b: any) => a.Brand.length - b.Brand.length,
    },
    {
      header: "Sold Qty",
      field: "Sold_Qty",
      sorter: (a: any, b: any) => a.Sold_Qty.length - b.Sold_Qty.length,
    },

    {
      header: "Sold Amount",
      field: "Sold_Amount",
      sorter: (a: any, b: any) => a.Sold_Amount.length - b.Sold_Amount.length,
    },
    {
      header: "Instock Qty",
      field: "Instock_Qty",
      sorter: (a: any, b: any) => a.Instock_Qty.length - b.Instock_Qty.length,
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="table-tab"></div>
          <div>
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Bestseller Products Report</h4>
                  <h6>View Reports of Best Selling Products</h6>
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
                            <label className="form-label">Store</label>
                            <CommonSelect
                              className="w-100"
                              options={BestStores}
                              value={selectedBestStore}
                              onChange={(e) => setSelectedBestStore(e.value)}
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
                              options={BestStores}
                              value={selectedBestStore}
                              onChange={(e) => setSelectedBestStore(e.value)}
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

export default BestSeller;
