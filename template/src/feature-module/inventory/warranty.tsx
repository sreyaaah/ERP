import React, { useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import { Editor } from "primereact/editor";
import SearchFromApi from "../../components/data-table/search";
interface WarrantyData {
  name: string;
  description: string;
  duration: string;
  status: string;
  actions?: string;
}

interface RootState {
  rootReducer: {
    warranty_data: WarrantyData[];
  };
}

const Warranty: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const dataSource: WarrantyData[] = useSelector(
    (state: RootState) => state.rootReducer.warranty_data
  );
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const Period = [
    { label: "Month", value: "1" },
    { label: "Year", value: "2" },
  ];
    const [text, setText] = useState("");
  
  const columns = [
    {
      field: "name",
      header: "Name",
      key: "name",
      sortable: true,
    },
    {
      field: "description",
      header: "Description",
      key: "description",
      sortable: true,
    },
    {
      field: "duration",
      header: "Duration",
      key: "duration",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      key: "status",
      sortable: true,
      body: (rowData: any) => (
        <span className="badge table-badge bg-success fw-medium fs-10">
          {rowData.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row: any) => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-units"
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  // const columns: ColumnType[] = [
  //   {
  //     title: (
  //       <label className="checkboxs">
  //         <input type="checkbox" id="select-all" />
  //         <span className="checkmarks" />
  //       </label>
  //     ),
  //     dataIndex: "checkbox",
  //     key: "checkbox",
  //     render: () => (
  //       <label className="checkboxs">
  //         <input type="checkbox" />
  //         <span className="checkmarks" />
  //       </label>
  //     ),
  //     sorter: false,
  //     width: "10px",
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     sorter: (a: WarrantyData, b: WarrantyData) =>
  //       a.name.length - b.name.length,
  //     width: "10px",
  //   },
  //   {
  //     title: "Description",
  //     dataIndex: "description",
  //     sorter: (a: WarrantyData, b: WarrantyData) =>
  //       a.description.length - b.description.length,
  //     width: "10px",
  //   },
  //   {
  //     title: "Duration",
  //     dataIndex: "duration",
  //     sorter: (a: WarrantyData, b: WarrantyData) =>
  //       a.duration.length - b.duration.length,
  //     width: "10px",
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //     render: (text: string): JSX.Element => (
  //       <span className="badge table-badge bg-success fw-medium fs-10">
  //         {text}
  //       </span>
  //     ),
  //     sorter: (a: WarrantyData, b: WarrantyData) =>
  //       a.status.length - b.status.length,
  //   },
  //   {
  //     title: "",
  //     dataIndex: "actions",
  //     key: "actions",
  //     render: (): JSX.Element => (
  //       <div className="edit-delete-action d-flex align-items-center">
  //         <Link
  //           className="me-2 p-2 d-flex align-items-center border rounded"
  //           to="#"
  //           data-bs-toggle="modal"
  //           data-bs-target="#edit-units"
  //         >
  //           <i  className="feather icon-edit"></i>
  //         </Link>
  //         <Link
  //           className="p-2 d-flex align-items-center border rounded"
  //           to="#"
  //           data-bs-toggle="modal"
  //           data-bs-target="#delete-modal"
  //         >
  //           <i  className="feather icon-trash-2"></i>
  //         </Link>
  //       </div>
  //     ),
  //   },
  // ];


  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Warranties</h4>
                <h6>Manage your warranties</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
              >
                <i className="ti ti-circle-plus me-1"></i> Add Warranty
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
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={dataSource}
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

      {/* Add Warranty */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Warrranty</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Warranty<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Duration<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Period<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={Period}
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Description
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <Editor
                            value={text}
                            onTextChange={(e: any) => setText(e.htmlValue)}
                            style={{ height: "200px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input type="checkbox" id="user2" className="check" />
                        <label htmlFor="user2" className="checktoggle" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Add Warranty
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Warranty */}
      {/* Edit Warranty */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Warrranty</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Warranty<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Replacement Warranty"
                      />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Duration<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={2}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Period<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={Period}
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Description
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <Editor
                            value={text}
                            onTextChange={(e: any) => setText(e.htmlValue)}
                            style={{ height: "200px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input type="checkbox" id="user3" className="check" />
                        <label htmlFor="user3" className="checktoggle" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Warranty */}
      <DeleteModal />
    </>
  );
};

export default Warranty;
