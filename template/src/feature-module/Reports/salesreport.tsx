import { useState } from "react";
import { Link } from "react-router-dom";
import { salesreportdata } from "../../core/json/salesreportdata";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const SalesReport = () => {
  const data = salesreportdata;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const ProductName = [{ label: "Lenovo 3rd Generation", value: "1" }];
  const Store = [
    { label: "Electro Mart", value: "1" },
    { label: "Quantum Gadgets", value: "2" },
    { label: "Prime Bazaar", value: "3" },
    { label: "Gadget World", value: "4" },
    { label: "Volt Vault", value: "5" },
  ];

  const columns = [
    {
      header: "Product Name",
      field: "productName",
      body: (text: any) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <img alt="" src={text.img} />
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
      header: "Sold Qty",
      field: "soldQty",
      sorter: (a: any, b: any) => a.soldQty.length - b.soldQty.length,
    },
    {
      header: "Sold Amount",
      field: "soldAmount",
      sorter: (a: any, b: any) => a.soldAmount.length - b.soldAmount.length,
    },
    {
      header: "Instock Qty",
      field: "instockQty",
      sorter: (a: any, b: any) => a.instockQty.length - b.instockQty.length,
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-header">
              <h4>Sales Report</h4>
              <h6>Manage your Sales report</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <RefreshIcon />
            <CollapesIcon />
          </ul>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card border border-success sale-widget flex-fill">
              <div className="card-body d-flex align-items-center">
                <span className="sale-icon bg-success text-white">
                  <i className="ti ti-align-box-bottom-left-filled fs-24" />
                </span>
                <div className="ms-2">
                  <p className="fw-medium mb-1">Total Amount</p>
                  <div>
                    <h3>$4,56,000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card border border-info sale-widget flex-fill">
              <div className="card-body d-flex align-items-center">
                <span className="sale-icon bg-info text-white">
                  <i className="ti ti-align-box-bottom-left-filled fs-24" />
                </span>
                <div className="ms-2">
                  <p className="fw-medium mb-1">Total Paid</p>
                  <div>
                    <h3>$2,56,42</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card border border-orange sale-widget flex-fill">
              <div className="card-body d-flex align-items-center">
                <span className="sale-icon bg-orange text-white">
                  <i className="ti ti-moneybag fs-24" />
                </span>
                <div className="ms-2">
                  <p className="fw-medium mb-1">Total Unpaid</p>
                  <div>
                    <h3>$1,52,45</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card border border-danger sale-widget flex-fill">
              <div className="card-body d-flex align-items-center">
                <span className="sale-icon bg-danger text-white">
                  <i className="ti ti-alert-circle-filled fs-24" />
                </span>
                <div className="ms-2">
                  <p className="fw-medium mb-1">Overdue</p>
                  <div>
                    <h3>$2,56,12</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0">
          <div className="card-body pb-1">
            <form>
              <div className="row align-items-end">
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Choose Date&nbsp;</label>
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
                          options={Store}
                          value={selectedStore}
                          onChange={(e) => setSelectedStore(e.value)}
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
        <div className="card table-list-card hide-search">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <SearchFromApi
              callback={handleSearch}
              rows={rows}
              setRows={setRows}
            />
            <ul className="table-top-head">
              <TooltipIcons />
              <li>
                <Link data-bs-toggle="tooltip" data-bs-placement="top" to="#">
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
      <CommonFooter />
    </div>
  );
};

export default SalesReport;
