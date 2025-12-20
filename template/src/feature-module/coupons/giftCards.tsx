
import { Link } from "react-router-dom";
import PrimeDataTable from "../../components/data-table";
import CommonFooter from "../../components/footer/commonFooter";
import GiftCardModals from "../../core/modals/coupons/giftCardModals";
import { GiftData } from "../../core/json/giftCardData";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import { useState } from "react";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

const GiftCards = () => {
  const dataSource = GiftData;

  const columns = [
    {
      header: "Gift Card",
      field: "GiftCard",
    },
    {
      header: "Customer",
      field: "Customer",
      body: (text: any) => (
        <div className="userimgname">
          <span className="avatar avatar-md me-2">
            <Link to="#">
              <img src={text?.Image} alt="user" />
            </Link>
          </span>
          <Link to="#">{text?.Customer}</Link>
        </div>
      ),
    },
    {
      header: "IssuedDate",
      field: "IssuedDate",
    },
    {
      header: "ExpiryDate",
      field: "ExpiryDate",
    },
    {
      header: "Amount",
      field: "Amount",
    },
    {
      header: "Balance",
      field: "Balance",
    },
    {
      header: "Status",
      field: "Status",
      body: (text: any) => (
        <span
          className={`badge table-badge ${text?.Status === "Active" ? "bg-success" : text === "Redeemed" ? "bg-pink" : text === "Expired" ? "bg-light" : "bg-danger"} fw-medium fs-10`}
        >
          {text?.Status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      body: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              data-bs-toggle="modal"
              data-bs-target="#gift-card-details"
              className="me-2 edit-icon  p-2"
              to="#"
            >
              <i className="ti ti-eye" />
            </Link>
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <i className="ti ti-edit" />
            </Link>
            <Link
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              className="p-2"
              to="#"
            >
              <i className="ti ti-trash" />
            </Link>
          </div>
        </div>
      ),
      sortable: false,
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
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Gift Cards</h4>
                <h6>Manage your gift cards</h6>
              </div>
            </div>
           <ul className="table-top-head">
                        <TooltipIcons />
                        <RefreshIcon />
                        <CollapesIcon />
                      </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Gift Card
              </Link>
            </div>
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
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Type
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Fixed
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Percentage
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last 7 Days
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
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <GiftCardModals />
      <DeleteModal />
    </div>
  );
};

export default GiftCards;

