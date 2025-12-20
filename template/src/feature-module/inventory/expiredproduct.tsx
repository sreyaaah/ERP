import React, {useState } from "react";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../components/data-table";
import CommonFooter from "../../components/footer/commonFooter";
import {
  expireProduct01,
  expireProduct02,
  expireProduct03,
  stockImg01,
  stockImg02,
  stockImg03,
  stockImg04,
  stockImg05,
  stockImg06,
} from "../../utils/imagepath";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

export const expiredproduct = [
  {
    id: 1,
    img: stockImg01,
    product: "Lenovo 3rd Generation",
    sku: "PT001",
    manufactureddate: "19 Nov 2022",
    expireddate: "02 Jan 2023",
  },
  {
    id: 2,
    img: stockImg02,

    product: "Nike Jordan",
    sku: "PT002",
    manufactureddate: "24 Nov 2022",
    expireddate: "23 Jan 2023",
  },
  {
    id: 3,
    img: stockImg03,

    product: "Apple Series 5 Watch",
    sku: "PT003",
    manufactureddate: "11 Dec 2022",
    expireddate: "18 Feb 2023",
  },
  {
    id: 4,
    img: stockImg04,

    product: "Amazon Echo Dot",
    sku: "PT004",
    manufactureddate: "27 Dec 2022",
    expireddate: "24 Feb 2023",
  },
  {
    id: 5,
    img: stockImg05,

    product: "Lobar Handy",
    sku: "PT005",
    manufactureddate: "08 Jan 2023",
    expireddate: "16 Mar 2023",
  },
  {
    id: 6,
    img: stockImg06,

    product: "Red Premium Handy",
    sku: "PT006",
    manufactureddate: "17 Jan 2023",
    expireddate: "29 Mar 2023",
  },
  {
    id: 7,
    img: expireProduct02,

    product: "Red Premium Handy",
    sku: "PT007",
    manufactureddate: "22 Feb 2023",
    expireddate: "04 Apr 2023",
  },
  {
    id: 8,
    img: expireProduct01,

    product: "Black Slim 200",
    sku: "PT008",
    manufactureddate: "18 Mar 2023",
    expireddate: "13 May 2023",
  },
  {
    id: 9,
    img: expireProduct03,

    product: "Woodcraft Sandal",
    sku: "PT009",
    manufactureddate: "29 Mar 2023",
    expireddate: "27 May 2023",
  },
];
interface ExpiredProductData {
  sku: string;
  product: string;
  img: string;
  manufactureddate: string;
  expireddate: string;
}

const ExpiredProduct: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [expiredProductList, _setExpiredProductList] =
    useState<any>(expiredproduct);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const ProductName = [{ label: "Lenovo 3rd Generation", value: "1" }];

  const columns = [
    {
      header: "SKU",
      field: "sku",
      key: "sku",
      sortable: true,
    },
    {
      header: "Product",
      field: "product",
      key: "product",
      sortable: true,
      style: { width: "5%" },
      body: (data: ExpiredProductData) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <img alt="" src={data.img} />
          </Link>
          {data.product}
        </span>
      ),
    },
    {
      header: "Manufactured Date",
      field: "manufactureddate",
      key: "manufactureddate",
      sortable: true,
    },
    {
      header: "Expired Date",
      field: "expireddate",
      key: "expireddate",
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
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Expired Products</h4>
                <h6>Manage your expired products</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <>
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
                      Product
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
                    data={expiredProductList}
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
          </>
        </div>
        <CommonFooter />
      </div>

      {/* edit */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Expired Product</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            SKU<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Product Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={ProductName}
                            value={selectedProductName}
                            onChange={(e) => setSelectedProductName(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label>
                            Manufacturer Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <CommonDatePicker
                              value={date1}
                              onChange={setDate1}
                              className="w-100"
                            />
                            <i className="feather icon-calendar info-img" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label>
                            Expiry Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <CommonDatePicker
                              value={date2}
                              onChange={setDate2}
                              className="w-100"
                            />
                            <i className="feather icon-calendar info-img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal />
    </div>
  );
};

export default ExpiredProduct;
