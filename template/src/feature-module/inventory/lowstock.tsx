import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditLowStock from "../../core/modals/inventory/editlowstock";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonFooter from "../../components/footer/commonFooter";
import {
  stockImg01,
  stockImg02,
  stockImg03,
  stockImg04,
  stockImg05,
} from "../../utils/imagepath";
import PrimeDataTable from "../../components/data-table";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";


export const lowstockdata = [
  {
    id: 1,
    img: stockImg01,
    warehouse: "Lavish Warehouse",
    store: "Crinol",
    product: 'Lenovo 3rd Generation{" "}',
    category: "Laptop",
    sku: "PT001",
    qty: "15",
    qtyalert: "10",
  },
  {
    id: 2,
    img: stockImg02,
    warehouse: "Lobar Handy",
    store: "Selosy",
    product: "Nike Jordan",
    category: "Shoe",
    sku: "PT002",
    qty: "17",
    qtyalert: "08",
  },
  {
    id: 3,
    img: stockImg03,
    warehouse: "Quaint Warehouse",
    store: "Logerro",
    product: 'Apple Series 5 Watch{" "}',
    category: "Electronics",
    sku: "PT003",
    qty: "14",
    qtyalert: "12",
  },
  {
    id: 4,
    img: stockImg04,
    warehouse: "Traditional Warehouse",
    store: "Vesloo",
    product: "Amazon Echo Dot",
    category: "Speaker",
    sku: "PT004",
    qty: "20",
    qtyalert: "15",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
  {
    id: 5,
    img: stockImg05,
    warehouse: "Cool Warehouse",
    store: "Crompy",
    product: "Lobar Handy",
    category: "Furnitures",
    sku: "PT005",
    qty: "18",
    qtyalert: "13",
  },
];

// Interface for low stock data item
interface LowStockItem {
  warehouse: string;
  store: string;
  product: string;
  category: string;
  sku: string;
  qty: string;
  qtyalert: string;
  img: string;
}

const LowStock: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(lowstockdata.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

 
    const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
 

  const columns = [
    {
      header: "Warehouse",
      field: "warehouse",
      key: "warehouse",
      sortable: true,
      style: { width: "5%" },
    },
    {
      header: "Store",
      field: "store",
      key: "store",
      sortable: true,
    },
    {
      header: "Product",
      field: "product",
      key: "product",
      sortable: true,
      body: (data: LowStockItem) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <img alt="" src={data.img} />
          </Link>
          {data.product}
        </span>
      ),
    },
    {
      header: "Category",
      field: "category",
      key: "category",
      sortable: true,
    },
    {
      header: "SkU",
      field: "sku",
      key: "sku",
      sortable: true,
    },
    {
      header: "Qty",
      field: "qty",
      key: "qty",
      sortable: true,
    },
    {
      header: "Qty Alert",
      field: "qtyalert",
      key: "qtyalert",
      sortable: true,
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
            data-bs-target="#edit-customer"
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

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title me-auto">
              <h4 className="fw-bold">Low Stocks</h4>
              <h6>Manage your low stocks</h6>
            </div>
            <ul className="table-top-head low-stock-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
              <li>
                <Link
                  to="#"
                  className="btn btn-secondary w-auto shadow-none"
                  data-bs-toggle="modal"
                  data-bs-target="#send-email"
                >
                  <i className="feather icon-mail feather-mail me-1" />
                  Send Email
                </Link>
              </li>
            </ul>
          </div>
          <div className="table-tab">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
              <ul
                className="nav nav-pills low-stock-tab d-flex me-2 mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Low Stocks
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Out of Stocks
                  </button>
                </li>
              </ul>
              <div className="notify d-flex bg-white p-1 px-2 border rounded">
                <div className="status-toggle text-gray d-flex justify-content-between align-items-center">
                  <input
                    type="checkbox"
                    id="user2"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="user2" className="checktoggle me-2">
                    checkbox
                  </label>
                  Notify
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
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
                          Warehouse
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Lenovo IdeaPad 3
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Beats Pro{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Nike Jordan
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Apple Series 5 Watch
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
                          Store
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              James Kirwin
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Francis Chang
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Antonio Engle
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Leo Kelly
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
                          Category
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Computers
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Electronics
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Shoe
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Electronics
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
                          Product
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Lenovo
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Beats
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Nike
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Apple
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
                        data={lowstockdata}
                        rows={rows}
                        setRows={setRows}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalRecords={totalRecords}
                        searchQuery={searchQuery}
                        selectionMode="checkbox"
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* /product list */}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
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
                          Warehouse
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Lenovo IdeaPad 3
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Beats Pro{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Nike Jordan
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Apple Series 5 Watch
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
                          Store
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              James Kirwin
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Francis Chang
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Antonio Engle
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Leo Kelly
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
                          Category
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Computers
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Electronics
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Shoe
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Electronics
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
                          Product
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Lenovo
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Beats
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Nike
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Apple
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
                        data={lowstockdata}
                        rows={rows}
                        setRows={setRows}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalRecords={totalRecords}
                        searchQuery={searchQuery}
                        selectionMode="checkbox"
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* /product list */}
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      {/* Send Mail */}
      <div className="modal fade" id="send-email">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="success-email-send modal-body .custom-modal-body text-center">
              <span className="rounded-circle d-inline-flex p-2 bg-success-transparent mb-2">
                <i className="ti ti-checks fs-24 text-success" />
              </span>
              <h4 className="fs-20 fw-semibold">Success</h4>
              <p>Email Sent Successfully</p>
              <Link
                to="#"
                className="btn btn-primary p-1 px-2 fs-13 fw-normal"
                data-bs-dismiss="modal"
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Send Mail */}

      <EditLowStock />
      <DeleteModal />
    </div>
  );
};

export default LowStock;
