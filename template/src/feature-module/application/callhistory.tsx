import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { all_routes } from "../../routes/all_routes";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
import { user08 } from "../../utils/imagepath";
import DeleteModal from "../../components/delete-modal";

const Callhistory = () => {
  const data = useSelector((state: any) => state.rootReducer.callhistory_data);
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(
    undefined
  );
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const route: any = all_routes;

  const columns = [
    {
      header: "UserName",
      field: "username",
      key: "username",
      body: (data: any) => (
        <>
          <div className="userimgname">
            {/* <Link to="#" className="product-img">
               <img alt="product" src={data.image_url} />
            </Link> */}
            <Link to="#">{data.username}</Link>
          </div>
        </>
      ),

      sortable: false,
    },
    {
      header: "Phone Number",
      field: "phone_number",
      sortable: false,
      key: "phone_number",
    },

    {
      header: "Call Type",
      field: "call_type",
      key: "call_type",

      body: (text: any) => (
        <>
          {text.call_type === "Incoming Call" ? (
            <i className="feather icon-phone-incoming income-success text-success me-2" />
          ) : text === "Outgoing Call" ? (
            <i className="feather icon-phone-outgoing income-success text-success me-2" />
          ) : (
            <i className="feather icon-phone-missed text-danger me-2" />
          )}
          {text.call_type}
        </>
      ),
      sortable: false,
    },
    {
      header: "Duration",
      field: "duration",
      key: "duration",

      sortable: false,
    },
    {
      header: "Date & Time",
      field: "date_time",
      key: "date_time",

      sortable: false,
    },

    {
      header: "",
      field: "actions",
      key: "actions",

      body: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <div className="input-block add-lists"></div>
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#user-profile-new"
            >
              <i className="feather icon-eye feather-view" />
            </Link>
            <Link
              className="confirm-text p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
            >
              <i className="feather icon-trash-2"></i>
            </Link>
          </div>
        </div>
      ),
      sortable: false,
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-header menu">
              <div className="page-title">
                <h4>Call History</h4>
                <h6>Manage your call history</h6>
              </div>
            </div>
            <div>
              <TableTopHead />
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
                    Call type
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Incoming
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Outgoing
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Missed Call
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
              <div className="table-responsive product-list">
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

        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © DreamsPOS. All Right Reserved</p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* details popup */}
      <div className="modal fade" id="user-profile-new">
        <div className="modal-dialog history-modal-profile">
          <div className="modal-content">
            <div className="page-wrapper details-blk">
              <div className="content p-4">
                <div className="text-center right-sidebar-profile mb-3">
                  <figure className="avatar">
                    <img className="rounded-circle" src={user08} alt="image" />
                  </figure>
                  <div className="chat-options chat-option-profile">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to={route.videocall}
                          className="bg-secondary-transparent p-2 d-flex align-items-center rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Video Call"
                        >
                          <i className="feather icon-video" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to={route.chat}
                          className="bg-primary p-2 d-flex align-items-center rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Chat"
                        >
                          <i className="feather icon-message-square" />
                        </Link>
                      </li>
                      <li className="list-inline-item ">
                        <Link
                          to={route.audiocall}
                          className="profile-open bg-secondary-transparent p-2 d-flex align-items-center rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Voice Call"
                        >
                          <i className="feather icon-phone"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="modal-profile-detail">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="modal-userlist">
                        <ul>
                          <li>
                            Name<span>Thomas</span>
                          </li>
                          <li>
                            Phone<span>+1 25182 94528</span>
                          </li>
                          <li>
                            Email<span>thomas@example.com</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="modal-userlist d-flex justify-content-center">
                        <ul>
                          <li>
                            Total Calls<span>20</span>
                          </li>
                          <li>
                            Average Call Timing<span>0.30</span>
                          </li>
                          <li>
                            Average Waiting Time<span>00.5</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /details popup */}
      <DeleteModal />
    </>
  );
};

export default Callhistory;
