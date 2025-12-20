import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import CollapesIcon from "../../components/tooltip-content/collapes";
import RefreshIcon from "../../components/tooltip-content/refresh";
import { all_routes } from "../../routes/all_routes";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import { taxreportdata } from "../../core/json/taxreport";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const TaxReport = () => {
  const [listData, _setListData] = useState<any[]>(taxreportdata);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedStore, setSelectedStore] = useState(null);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const columns = [
    {
      header: "Reference",
      field: "Reference",
      body: (text: any) => (
        <Link to="#" className="text-orange">
          {text.Reference}
        </Link>
      ),
      sorter: (a: any, b: any) => a.Customer.length - b.Customer.length,
    },
    {
      header: "Supplier",
      field: "Supplier",
      sorter: (a: any, b: any) => a.Supplier.length - b.Supplier.length,
    },

    {
      header: "Date",
      field: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      header: "Store",
      field: "Store",
      sorter: (a: any, b: any) => a.Store.length - b.Store.length,
    },
    {
      header: "Amount",
      field: "Amount",
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      header: "Payment Method",
      field: "Payment_Method",
      sorter: (a: any, b: any) =>
        a.Payment_Method.length - b.Payment_Method.length,
    },
    {
      header: "Discount",
      field: "Discount",
      sorter: (a: any, b: any) => a.Discount.length - b.Discount.length,
    },
    {
      header: "Tax Amount",
      field: "Tax_Amount",
      sorter: (a: any, b: any) => a.Tax_Amount.length - b.Tax_Amount.length,
    },
  ];

  const Store = [
    { value: "All", label: "All" },
    { value: "Electro Mart", label: "Electro Mart" },
    { value: "Quantum Gadgets", label: "Quantum Gadgets" },
    { value: "Prime Bazaar", label: "Prime Bazaar" },
  ];
  const Supplier = [
    { value: "All", label: "All" },
    { value: "Apex Computers", label: "Apex Computers" },
    { value: "Beats Headphones", label: "Beats Headphones" },
    { value: "Dazzle Shoes", label: "Dazzle Shoes" },
  ];
  const Payment_Method = [
    { value: "All", label: "All" },
    { value: "Stripe", label: "Stripe" },
    { value: "Paypal", label: "Paypal" },
    { value: "Cash", label: "Cash" },
  ];

  const route = all_routes;

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="table-tab">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link active" to={route.taxreport}>
                Purchase tax
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={route.saletaxreport}>
                Sales Tax
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Purchase Tax</h4>
                <h6>View Reports of Purchase Tax</h6>
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
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Supplier</label>
                          <CommonSelect
                            className="w-100"
                            options={Supplier}
                            value={selectedSupplier}
                            onChange={(e) => setSelectedSupplier(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Payment Method</label>
                          <CommonSelect
                            className="w-100"
                            options={Payment_Method}
                            value={selectedPaymentMethod}
                            onChange={(e) => setSelectedPaymentMethod(e.value)}
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
            <div className="card-body">
              <div className="table-responsive custome-search">
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
  );
};

export default TaxReport;
