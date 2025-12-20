import { useState } from "react";
import { Link } from "react-router-dom";
import { purchasereportdata } from "../../core/json/purchasereportdata";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const PurchaseReport = () => {
  const data = purchasereportdata;
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
      header: "Product Amount",
      field: "productAmount",
      sorter: (a: any, b: any) =>
        a.productAmount.length - b.productAmount.length,
    },

    {
      header: "Product Qty",
      field: "productQty",
      sorter: (a: any, b: any) => a.productQty.length - b.productQty.length,
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
            <div className="page-title">
              <h4>Purchase report</h4>
              <h6>Manage your Purchase report</h6>
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
      <CommonFooter />
    </div>
  );
};

export default PurchaseReport;
