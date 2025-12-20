import { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../routes/all_routes";
import { pageDataTablesData } from "../../../core/json/pageDataTables";
import PrimeDataTable from "../../../components/data-table";
import SearchFromApi from "../../../components/data-table/search";
import CommonFooter from "../../../components/footer/commonFooter";


const DataTables = () => {
  const data = pageDataTablesData;
  const route = all_routes;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const columns = [
    {
      header: "Name",
      field: "name",
      sortable: true,
      key: "name",
    },
    {
      header: "Position",
      field: "position",
      sortable: true,
      key: "position",
    },
    {
      header: "Office",
      field: "office",
      sortable: true,
      key: "office",
    },
    {
      header: "Age",
      field: "age",
      sortable: true,
      key: "age",
    },
    {
      header: "Start Date",
      field: "startDate",
      sortable: true,
      key: "startDate",
    },
    {
      header: "Salary",
      field: "salary",
      sortable: true,
      key: "salary",
    },
  ];
  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Data Tables</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={route.dashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Data Tables</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Default Datatable</h4>
                  <p className="card-text">
                    This is the most basic example of the datatables with zero
                    configuration. Use the <code>.datatable</code> class to
                    initialize datatables.
                  </p>
                </div>
                <div className="card-body">
                  <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <SearchFromApi
                      callback={handleSearch}
                      rows={rows}
                      setRows={setRows}
                    />
                  </div>
                  <div className="table-responsive data-table">
                    <PrimeDataTable
                      column={columns}
                      data={data}
                      rows={rows}
                      setRows={setRows}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      totalRecords={data.length}
                      searchQuery={searchQuery}
                      selectionMode="checkbox"
                      selection={selectedProducts}
                      onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter/>
      </div>
    </div>
  );
};

export default DataTables;
