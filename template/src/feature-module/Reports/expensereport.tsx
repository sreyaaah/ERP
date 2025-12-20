import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import { expensereportdata } from "../../core/json/expensereportdata";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const ExpenseReport = () => {
  const data = expensereportdata;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedExpenseCategory, setSelectedExpenseCategory] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const ExpenseCategory = [
    { value: "All", label: "All" },
    { value: "Electricity Payment", label: "Electricity Payment" },
    { value: "Stationery Purchase", label: "Stationery Purchase" },
    { value: "AC Repair Service", label: "AC Repair Service" },
  ];
  const PaymentMethode = [
    { value: "All", label: "All" },
    { value: "Paypal", label: "Paypal" },
    { value: "Cash", label: "Cash" },
    { value: "Credit Card", label: "Credit Card" },
  ];
  const Status = [
    { value: "All", label: "All" },
    { value: "Approved", label: "Approved" },
    { value: "Pending", label: "Pending" },
  ];

  const columns = [
    {
      header: "Expense Name",
      field: "Expense_Name",
      sorter: (a: any, b: any) => a.Expense_Name.length - b.Expense_Name.length,
    },
    {
      header: "Category",
      field: "Category",

      sorter: (a: any, b: any) => a.Category.length - b.Category.length,
    },

    {
      header: "Description",
      field: "Description",
      sorter: (a: any, b: any) => a.Description.length - b.Description.length,
    },

    {
      header: "Date",
      field: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      header: "Amount",
      field: "Amount",
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      header: "Status",
      field: "Status",
      body: (text: any) => (
        <>
          <span
            className={`badge ${text === "Approved" ? "badge-success" : "badge-cyan"} d-inline-flex align-items-center badge-xs`}
          >
            {text.Status}
          </span>
        </>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Expense Report</h4>
              <h6>View Reports of Expenses</h6>
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
                        <label className="form-label">Expense Category</label>
                        <CommonSelect
                          className="w-100"
                          options={ExpenseCategory}
                          value={selectedExpenseCategory}
                          onChange={(e) => setSelectedExpenseCategory(e.value)}
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
                          options={PaymentMethode}
                          value={selectedPaymentMethod}
                          onChange={(e) => setSelectedPaymentMethod(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
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
      <CommonFooter />
    </div>
  );
};

export default ExpenseReport;
