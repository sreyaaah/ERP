import { useState } from "react";
import CommonFooter from "../../../components/footer/commonFooter";
import { Link } from "react-router-dom";
import { AccountStatementData } from "../../../core/json/accountstatementData";
import PrimeDataTable from "../../../components/data-table";
import TableTopHead from "../../../components/table-top-head";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";

const Accountstatement = () => {
  const dataSource = AccountStatementData;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(dataSource.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, _setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [date, setDate] = useState<Date | null>(new Date());
  const columns = [
    {
      header: "Reference Number",
      field: "Reference_Number",
    },
    {
      header: "Date",
      field: "Date",
    },
    {
      header: "Category",
      field: "Category",
    },
    {
      header: "Description",
      field: "Description",
    },
    {
      header: "Credit",
      field: "Credit",
    },
    {
      header: "Amount",
      field: "Amount",
    },
    {
      header: "Transaction Type",
      field: "Transaction_Type",
      body: (text: any) => (
        <span
          className={`d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white ${text?.Transaction_Type === "Debit" ? "bg-danger" : "bg-success"} fs-10`}
        >
          <i className="ti ti-point-filled me-1 fs-11" />
          {text?.Transaction_Type}
        </span>
      ),
    },
    {
      header: "Balance",
      field: "Balance",
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Account Statement</h4>
                <h6>View Your Statement</h6>
              </div>
            </div>
           <TableTopHead />
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-body">
              <div className="row row-gap-2 align-items-end">
                <div className="col-md-4">
                  <div className="dropdown me-2">
                    <label className="form-label">Choose Your Date</label>
                    <div className="input-groupicon trail-balance">
                      <i className="feather icon-calendar info-img"/>
                    <CommonDatePicker
                            value={date}
                            onChange={setDate}
                            className="w-100"
                          />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dropdown">
                    <label className="form-label">Account</label>
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center w-100"
                      data-bs-toggle="dropdown"
                    >
                      Select
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Zephyr Indira
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Quillon Elysia
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary shadow-none w-100">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4>
                Statement of Account :{" "}
                <span className="badge bg-soft-primary">
                  HBSC - 3298784309485
                </span>
              </h4>
            </div>
            <div className="table-responsive">
              <PrimeDataTable
                totalRecords={totalRecords}
                rows={rows}
                setRows={setRows}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                column={columns}
                data={dataSource}
                searchQuery={searchQuery}
                selectionMode="checkbox"
                selection={selectedProducts}
                onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                footer={() => (
                  <>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>Total</h5>
                      <h5>$33268.53</h5>
                    </div>
                  </>
                )}
              />
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default Accountstatement;
