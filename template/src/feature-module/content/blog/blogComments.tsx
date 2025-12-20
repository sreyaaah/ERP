import  { useState } from "react";
import { Link } from "react-router-dom";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import PrimeDataTable from "../../../components/data-table";
import CommonSelect from "../../../components/select/common-select";
import DeleteModal from "../../../components/delete-modal";
import SearchFromApi from "../../../components/data-table/search";
import CommonFooter from "../../../components/footer/commonFooter";
const BlogComments = () => {
   const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
   const [selectedOption, setSelectedOption] = useState(null);

  const data = [
    {
      Comment: "Thanks for the detailed guide on POS System",
      Created_Date: "24 Dec 2024",
      Blog: "What is a POS System? A Beginner’s Guide",
      By: "Gertrude",
    },
    {
      Comment: "Thanks for sharing these insights!",
      Created_Date: "10 Dec 2024",
      Blog: "Best POS Systems for Retail Businesses",
      By: "Edward",
    },
    {
      Comment: "Helpful info on POS features - thank you!",
      Created_Date: "27 Nov 2024",
      Blog: "Key Features of a Modern POS",
      By: "Mark",
    },
    {
      Comment: "Fantastic content, thank you for sharing!",
      Created_Date: "18 Nov 2024",
      Blog: "Integrating POS with E-Commerce",
      By: "Nidia",
    },
    {
      Comment: "This really cleared things up, I appreciate it",
      Created_Date: "20 Jul 2024",
      Blog: "AI & the Future of POS Systems",
      By: "Rebecca",
    },
    {
      Comment: "Awesome post, thanks for sharing!",
      Created_Date: "25 Oct 2024",
      Blog: "Retail vs Restaurant POS: Key Differences",
      By: "Jimmy",
    },
    {
      Comment: "I learned a lot from thi - thanks!",
      Created_Date: "14 Oct 2024	",
      Blog: "Understanding PCI Compliance for POS",
      By: "Richard",
    },
  ];
  const option = [
    { value: "1", label: "Unpublish" },
    { value: "2", label: "Publish" },
  ];

  const columns = [
    {
      header: "Comment",
      field: "Comment",
    },
    {
      header: "Created Date",
      field: "Created_Date",
    },

    {
      header: "Ratings",
      field: "rate",
      body: () => (
        <>
          <i className="ti ti-star-filled text-warning" />
          <i className="ti ti-star-filled text-warning" />
          <i className="ti ti-star-filled text-warning" />
          <i className="ti ti-star-filled text-warning" />
          <i className="ti ti-star-filled text-warning" />
        </>
      ),
    },
    {
      header: "Blog",
      field: "Blog",
    },
    {
      header: "By",
      field: "By",
    },
    {
      header: "",
      field: "Status",
      sortable: false,
      body: () => (
        <CommonSelect
          className="w-100"
          options={option}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.value)}
          placeholder="Select"
          filter={false}
        />
      ),
    },

    {
      title: "",
      field: "action",
      sortable: false,
      body: () => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="confirm-text p-2 d-flex align-items-center border rounded"
            to="#"
          >
            <i  className="feather icon-trash-2" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Blog Comments</h4>
                <h6>Manage your blog tags</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
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
            <div className="card-body p-0">
              <div className="table-responsive table-comments">
                <PrimeDataTable
                  column={columns}
                  data={data}
                  totalRecords={10}
                  rows={10}
                  setRows={() => {}}
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
       <CommonFooter/>
      </div>
      <DeleteModal />
    </>
  );
};

export default BlogComments;
