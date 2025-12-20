
import { CashFlowData } from "../../../core/json/cashFlowData";
import PrimeDataTable from "../../../components/data-table";
import TableTopHead from "../../../components/table-top-head";
import SearchFromApi from "../../../components/data-table/search";
import { Link } from "react-router";
import { useState } from "react";

const Cashflow = () => {
  const dataSource = CashFlowData;
  const columns = [
    {
      header: "Date",
      field: "Date",
    },
    {
      header: "Bank & Account Number",
      field: "Bank_Account",
    },
    {
      header: "Credit",
      field: "Credit",
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
      header: "Debit",
      field: "Debit",
    },
    {
      header: "Account balance",
      field: "Account_balance",
    },
    {
      header: "Total Balance ",
      field: "Total_Balance",
    },
    {
      header: "Payment Method",
      field: "Payment_Method",
    },
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(dataSource.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4 className="fw-bold">Cash Flow</h4>
              <h6>View Your Cashflows </h6>
            </div>
          </div>
         <TableTopHead />
        </div>
        {/* /product list */}
        <div className="card table-list-card">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
            <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Payment Method
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Stripe
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Cash
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Paypal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <PrimeDataTable
                column={columns}
                data={dataSource}
                totalRecords={totalRecords}
                rows={rows}
                setRows={setRows}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                searchQuery={searchQuery}
                selectionMode="checkbox"
                selection={selectedProducts}
                onSelectionChange={(e: any) => setSelectedProducts(e.value)}
              />{" "}
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0 text-gray-9">
          2014-2025 © DreamsPOS. All Right Reserved
        </p>
        <p>
          Designed &amp; Developed By{" "}
          <Link to="#" className="text-primary">
            Dreams
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Cashflow;
