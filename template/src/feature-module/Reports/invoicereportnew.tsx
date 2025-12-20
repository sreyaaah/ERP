import { useState } from "react";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../components/data-table";
import CommonSelect from "../../components/select/common-select";
import { invoicereportsdata } from "../../core/json/invoicereportsdata";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const Invoicereportnew = () => {
  const data = invoicereportsdata;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, _setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

 
  const CustomerName = [{ label: "Customer Name", value: "1" }];
  const Status = [
    { label: "Sent", value: "1" },
    { label: "Pending", value: "2" },
  ];

  const columns = [
    {
      header: "Invoice Number",
      field: "invoiceNo",
      body: (text: any) => (
        <>
          <Link to="#" className="text-primary">
            {text.invoiceNo}
          </Link>
        </>
      ),
      sorter: (a: any, b: any) => a.invoiceNo.length - b.invoiceNo.length,
    },
    {
      header: "Customer",
      field: "customer",
      sorter: (a: any, b: any) => a.customer.length - b.customer.length,
    },

    {
      header: "Due Date",
      field: "dueDate",
      sorter: (a: any, b: any) => a.dueDate.length - b.dueDate.length,
    },

    {
      header: "Amount",
      field: "amount",
      sorter: (a: any, b: any) => a.amount.length - b.amount.length,
    },
    {
      header: "Paid",
      field: "paid",
      sorter: (a: any, b: any) => a.paid.length - b.paid.length,
    },

    {
      header: "Amount Due",
      field: "amountDue",
      sorter: (a: any, b: any) => a.amountDue.length - b.amountDue.length,
    },
    {
      header: "Status",
      field: "status",
      render: (text: any) => (
        <>
          <span
            className={`badge ${text === "Paid" ? "badge-success " : "badge-danger"} d-inline-flex align-items-center badge-xs`}
          >
            <i className="ti ti-point-filled me-1" />
            {text}
          </span>
        </>
      ),
      sorter: (a: any, b: any) => a.status.length - b.status.length,
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Invoice Report </h4>
                <h6>Manage Your Invoice Report</h6>
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
                          <label className="form-label">
                            Choose Date&nbsp;
                          </label>
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
                          <label className="form-label">Customer</label>
                          <CommonSelect
                            className="w-100"
                            options={CustomerName}
                            value={selectedCustomer}
                            onChange={(e) => setSelectedCustomer(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Status</label>
                          <CommonSelect
                            className="w-100"
                            options={Status}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
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
              <div>
                <h4>Invoice Report</h4>
              </div>
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
    </div>
  );
};

export default Invoicereportnew;
