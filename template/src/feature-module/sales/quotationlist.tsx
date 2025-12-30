import { Link } from "react-router-dom";
import EditQuotation from "../../core/modals/sales/editquotation";
import CommonFooter from "../../components/footer/commonFooter";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
import { useState, useEffect } from "react";
import PrimeDataTable from "../../components/data-table";
import AddQuotation from "../../core/modals/sales/addquotation";
import { quotationlistdata } from "../../core/json/quotationlistdata";

const QuotationList = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    let temp = [...dataSource];

    if (selectedStatus) {
      temp = temp.filter(q => q.Status === selectedStatus);
    }

    if (selectedCustomer) {
      temp = temp.filter(q => q.Custmer_Name === selectedCustomer);
    }

    if (selectedProduct) {
      temp = temp.filter(q => q.Product_Name === selectedProduct);
    }

    if (sortBy === "recent" || sortBy === "desc") {
      temp = [...temp].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    if (sortBy === "asc") {
      temp = [...temp].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    if (sortBy === "last7") {
      const last7 = new Date();
      last7.setDate(last7.getDate() - 7);
      temp = temp.filter(q => new Date(q.date) >= last7);
    }

    if (sortBy === "lastMonth") {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      temp = temp.filter(q => new Date(q.date) >= lastMonth);
    }

    setFilteredData(temp);
  }, [dataSource, selectedStatus, selectedCustomer, selectedProduct, sortBy]);

  useEffect(() => {
    const loadData = () => {
      const storedQuotations = JSON.parse(localStorage.getItem("quotationList") || "[]");
      setDataSource([...storedQuotations, ...quotationlistdata]);
    };

    loadData();

    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editingQuotation, setEditingQuotation] = useState<any>(null);

  const columns = [
    {
      header: "Product Name",
      field: "Product_Name",
      sortable: true,
      key: "Product_Name",
      body: (rowData: any) => (
        <div className="d-flex align-items-center me-2">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={`src/assets/img/products/${rowData.Product_image}`} alt="product" />
          </Link>
          <Link to="#">{rowData.Product_Name}</Link>
        </div>
      ),
    },
    {
      header: "Customer",
      field: "Custmer_Name",
      sortable: true,
      key: "Custmer_Name",
      body: (rowData: any) => (
        <div className="d-flex align-items-center me-2">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={`src/assets/img/users/${rowData.Custmer_Image}`} alt="product" />
          </Link>
          <Link to="#">{rowData.Custmer_Name}</Link>
        </div>
      ),
    },
    {
      header: "Status",
      field: "Status",
      sortable: true,
      key: "Status",
      body: (rowData: any) => (
        <span
          className={`badge  ${rowData.Status === "Sent" ? "badge-success" : rowData.Status === "Ordered" ? "badge-warning" : "badge-cyan"}`}
        >
          {rowData.Status}
        </span>
      ),
    },
    {
      header: "Actions",
      field: "actions",
      key: "actions",
      body: (rowData: any) => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link className="me-2 p-2" to="#">
              <i className="feather icon-eye feather-view" />
            </Link>

            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
              onClick={() => setEditingQuotation(rowData)}
            >
              <i className="edit feather-edit"></i>
            </Link>

            <button
              type="button"
              className="me-2 p-2 border-0 bg-transparent"
              title="Download PDF"
            >
              <i className="feather icon-download text-primary"></i>
            </button>

            <button
              type="button"
              className="p-2 border-0 bg-transparent"
              onClick={() => {
                setDeleteId(rowData.id);
                setShowDeleteModal(true);
              }}
            >
              <i className="trash-2 feather icon-trash-2 text-danger"></i>
            </button>
          </div>
        </div>
      ),
    }
  ];

  const handleDeleteQuotation = () => {
    if (!deleteId) return;

    const storedQuotations = JSON.parse(
      localStorage.getItem("quotationList") || "[]"
    );

    const updatedQuotations = storedQuotations.filter(
      (q: any) => q.id !== deleteId
    );

    localStorage.setItem(
      "quotationList",
      JSON.stringify(updatedQuotations)
    );

    setDataSource((prev) =>
      prev.filter((q) => q.id !== deleteId)
    );

    setDeleteId(null);
    setShowDeleteModal(false);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Quotation List</h4>
                <h6>Manage Your Quotation</h6>
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
                <i className="ti ti-circle-plus me-1"></i>
                Add Quotation
              </Link>
            </div>
          </div>
          <div className="card table-list-card ">
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
                    Product
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    {[...new Set(dataSource.map(q => q.Product_Name))].map(product => (
                      <li key={product}>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                          onClick={() => setSelectedProduct(product)}
                        >
                          {product}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Customer
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    {[...new Set(dataSource.map(q => q.Custmer_Name))].map(name => (
                      <li key={name}>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                          onClick={() => setSelectedCustomer(name)}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
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
                      <Link to="#" className="dropdown-item rounded-1"
                        onClick={() => setSelectedStatus("Sent")}>
                        Sent
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1"
                        onClick={() => setSelectedStatus("Pending")}>
                        Pending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1"
                        onClick={() => setSelectedStatus("Ordered")}>
                        Ordered
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
                      <Link to="#" className="dropdown-item rounded-1"
                        onClick={() => setSortBy("recent")}>
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1"
                        onClick={() => setSortBy("asc")}>
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1"
                        onClick={() => setSortBy("desc")}>
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1"
                        onClick={() => setSortBy("lastMonth")}>
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1"
                        onClick={() => setSortBy("last7")}>
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className="btn btn-light ms-2"
                onClick={() => {
                  setSelectedStatus(null);
                  setSelectedCustomer(null);
                  setSelectedProduct(null);
                  setSortBy(null);
                  setFilteredData(dataSource);
                }}
                disabled={
                  !selectedStatus &&
                  !selectedCustomer &&
                  !selectedProduct &&
                  !sortBy
                }
              >
                Clear Filters
              </button>
            </div>
            <div className="card-body">
              <div className=" table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={filteredData}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={dataSource.length}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedProducts}
                  onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      <AddQuotation />
      <EditQuotation quotation={editingQuotation} />
      {showDeleteModal && (
        <div
          className="modal show d-block"
          style={{ background: "rgba(0,0,0,0.4)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Quotation</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                />
              </div>

              <div className="modal-body">
                <p>Are you sure you want to delete this quotation?</p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDeleteQuotation}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationList;