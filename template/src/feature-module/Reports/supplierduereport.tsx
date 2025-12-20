import { useState } from "react";
import { Link } from "react-router-dom";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import CommonFooter from "../../components/footer/commonFooter";
import { supplierduereportdata } from "../../core/json/supplierduereportdata";
import { all_routes } from "../../routes/all_routes";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const SupplierDueReport = () => {
  const data = supplierduereportdata;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const statusOptions = [
    { value: "chooseStatus", label: "Choose Status" },
    { value: "received", label: "Received" },
    { value: "Pending", label: "Pending" },
    { value: "Ordered", label: "Ordered" },
  ];

  const supplierNameOptions = [
    { value: "chooseSupplierName", label: "Choose Supplier Name" },
    { value: "apexComputers", label: "Apex Computers" },
    { value: "beatsHeadphones", label: "Beats Headphones" },
  ];

  const paymentmethode = [
    { value: "Cash", label: "Cash" },
    { value: "Paypal", label: "Paypal" },
    { value: "Credit Card", label: "Credit Card" },
    { value: "Stripe", label: "Stripe" },
  ];

  const columns = [
    {
      header: "Reference",
      field: "Reference",
      body: (text: any) => (
        <>
          <Link to="#" className="text-primary">
            {text.Reference}
          </Link>
        </>
      ),
      sorter: (a: any, b: any) => a.Reference.length - b.Reference.length,
    },
    {
      header: "ID",
      field: "ID",
      sorter: (a: any, b: any) => a.ID.length - b.ID.length,
    },

    {
      header: "Supplier",
      field: "Supplier",
      body: (text: any) => (
        <>
          <div className="d-flex align-items-center">
            <Link to="#" className="avatar avatar-md me-2">
              <img src={text.image} alt="Img" />
            </Link>
            <h6 className="fw-medium">
              <Link to="#">{text.Supplier}</Link>
            </h6>
          </div>
        </>
      ),
      sorter: (a: any, b: any) => a.Supplier.length - b.Supplier.length,
    },

    {
      header: "Total Items",
      field: "Total_Items",
      sorter: (a: any, b: any) => a.Total_Items.length - b.Total_Items.length,
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
          className={`badge  ${text === "Paid" ? "badge-success" : text === "Overdue" ? "badge-purple" : "badge-danger"} d-inline-flex align-items-center badge-xs`}
        >
          {text.Status}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
  ];

  const route = all_routes;

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="table-tab">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link " to={route.supplierreport}>
                Supplier Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={route.supplierduereport}>
                Supplier Due
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Supplier Due</h4>
                <h6>View Reports of Supplier Due</h6>
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
                          <label className="form-label">Supplier</label>
                          <CommonSelect
                            className="w-100"
                            options={supplierNameOptions}
                            value={selectedSupplier}
                            onChange={(e) => setSelectedSupplier(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Status</label>
                          <label className="form-label">Status</label>
                          <CommonSelect
                            className="w-100"
                            options={statusOptions}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
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
                            options={paymentmethode}
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
            <div className="card-body">
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

export default SupplierDueReport;
