import { useState } from "react";
import CommonFooter from "../../../components/footer/commonFooter";
import TooltipIcons from "../../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import { all_routes } from "../../../routes/all_routes";
import { Link } from "react-router-dom";
import { productreportdata } from "../../../core/json/productreportdata";
import PrimeDataTable from "../../../components/data-table";
import SearchFromApi from "../../../components/data-table/search";
import CommonSelect from "../../../components/select/common-select";
import CommonDateRangePicker from "../../../components/date-range-picker/common-date-range-picker";

const Productreport = () => {
  const data = productreportdata;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const route = all_routes;

  const columns = [
    {
      header: "SKU",
      field: "SKU",
      body: (text: any) => (
        <Link to="#" >
          {text.SKU}
        </Link>
      ),
    },
    {
      header: "Product Name",
      field: "Product_Name",
      body: (text: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <img src={text.image} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">
              <Link to="#">{text.Product_Name}</Link>
            </p>
          </div>
        </div>
      ),
    },

    {
      header: "Category",
      field: "Category",
    },

    {
      header: "Brand",
      field: "Brand",
    },
    {
      header: "Qty",
      field: "Qty",
    },

    {
      header: "Price",
      field: "Price",
    },
    {
      header: "Total Ordered",
      field: "Total_Ordered",
    },
    {
      header: "Revenue",
      field: "Revenue",
    },
  ];

  const Store = [
    { value: "All", label: "All" },
    { value: "Electro Mart", label: "Electro Mart" },
    { value: "Quantum Gadgets", label: "Quantum Gadgets" },
    { value: "Prime Bazaar", label: "Prime Bazaar" },
  ];
  const Category = [
    { value: "All", label: "All" },
    { value: "Computers", label: "Computers" },
    { value: "Electronics", label: "Electronics" },
    { value: "Shoe", label: "Shoe" },
  ];
  const Brand = [
    { value: "All", label: "All" },
    { value: "Lenovo", label: "Lenovo" },
    { value: "Beats", label: "Beats" },
    { value: "Nike", label: "Nike" },
  ];
  const Product = [
    { value: "All", label: "All" },
    { value: "Lenovo IdeaPad 3", label: "Lenovo IdeaPad 3" },
    { value: "Beats Pro", label: "Beats Pro" },
    { value: "Nike Jordan", label: "Nike Jordan" },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="table-tab">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link active" to={route.productreport}>
                  Product Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={route.productexpiredreport}>
                  Product Expiry Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={route.productquantityreport}>
                  Product Quantity Alert
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Product Report</h4>
                  <h6>View Reports of Products</h6>
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
                        <div className="col-lg-9">
                          <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="mb-3">
                                <label className="form-label">Store</label>
                                <CommonSelect
                                  options={Store}
                                  value={selectedStore}
                                  onChange={(e) => setSelectedStore(e.value)}
                                  placeholder="Choose"
                                  filter={false}
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="mb-3">
                                <label className="form-label">Category</label>
                                <CommonSelect
                                  options={Category}
                                  value={selectedCategory}
                                  onChange={(e) => setSelectedCategory(e.value)}
                                  placeholder="Choose"
                                  filter={false}
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="mb-3">
                                <label className="form-label">Brand</label>
                                <CommonSelect
                                  options={Brand}
                                  value={selectedBrand}
                                  onChange={(e) => setSelectedBrand(e.value)}
                                  placeholder="Choose"
                                  filter={false}
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="mb-3">
                                <label className="form-label">Product</label>
                                <CommonSelect
                                  options={Product}
                                  value={selectedProduct}
                                  onChange={(e) => setSelectedProduct(e.value)}
                                  placeholder="Choose"
                                  filter={false}
                                />
                              </div>
                            </div>
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
              <div className="card-body p-0">
                <div className="table-responsive">
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
    </div>
  );
};

export default Productreport;
