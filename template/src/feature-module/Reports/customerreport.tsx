import { useState } from "react";
import { Link } from "react-router-dom";
import { customerreportdata } from "../../core/json/customerreportdata";
import { all_routes } from "../../routes/all_routes";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import PrimeDataTable from "../../components/data-table";
import CommonSelect from "../../components/select/common-select";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";
import SearchFromApi from "../../components/data-table/search";

const CustomerReport = () => {
  const data = customerreportdata;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState(null);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const route = all_routes;

  const columns = [
    {
      header: "Reference",
      field: "Reference",
      body: (text: any) => (
        <Link to="#" className="text-orange">
          {text.Reference}
        </Link>
      ),
      sorter: (a: any, b: any) => a.Reference.length - b.Reference.length,
    },
    {
      header: "Code",
      field: "Code",
      sorter: (a: any, b: any) => a.Code.length - b.Code.length,
    },

    {
      header: "Customer",
      field: "Customer",
      body: (text: any) => (
        <>
          <div className="d-flex align-items-center">
            <Link to="#" className="avatar avatar-md">
              <img src={text.image} className="img-fluid" alt="img" />
            </Link>
            <div className="ms-2">
              <p className="text-dark mb-0">
                <Link to="#">{text.Customer}</Link>
              </p>
            </div>
          </div>
        </>
      ),
      sorter: (a: any, b: any) => a.Customer.length - b.Customer.length,
    },

    {
      header: "Total Orders",
      field: "Total_Orders",
      sorter: (a: any, b: any) => a.Total_Orders.length - b.Total_Orders.length,
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
      header: "Status",
      field: "Status",
      body: (text: any) => (
        <span
          className={`badge ${text === "Completed" ? "badge-success" : "badge-danger"} d-inline-flex align-items-center badge-xs`}
        >
          {text.Status}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
  ];

  const Customer = [
    { value: "All", label: "All" },
    { value: "Carl Evans", label: "Carl Evans" },
    { value: "Minerva Rameriz", label: "Minerva Rameriz" },
    { value: "Robert Lamon", label: "Robert Lamon" },
  ];
  const PaymentMethod = [
    { value: "All", label: "All" },
    { value: "Cash", label: "Cash" },
    { value: "Paypal", label: "Paypal" },
    { value: "Stripe", label: "Stripe" },
  ];
  const PaymentStatus = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Unpaid", label: "Unpaid" },
    { value: "Paid", label: "Paid" },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="table-tab">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link active" to={route.customerreport}>
                Customer Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={route.customerduereport}>
                Customer Due
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Customer Report</h4>
                <h6>View Reports of Customer</h6>
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
                          <label className="form-label">Customer</label>
                          <CommonSelect
                            className="w-100"
                            options={Customer}
                            value={selectedCustomer}
                            onChange={(e) => setSelectedCustomer(e.value)}
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
                            options={PaymentMethod}
                            value={selectedPaymentMethod}
                            onChange={(e) => setSelectedPaymentMethod(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Payment Status</label>
                          <CommonSelect
                            className="w-100"
                            options={PaymentStatus}
                            value={selectedPaymentStatus}
                            onChange={(e) => setSelectedPaymentStatus(e.value)}
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
                  <Link to="#"
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
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
        <p>
          Designed &amp; Developed By{" "}
          <Link to="#" className="text-orange">
            Dreams
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CustomerReport;
