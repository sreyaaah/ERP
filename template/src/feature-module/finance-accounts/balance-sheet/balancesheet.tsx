
import TableTopHead from "../../../components/table-top-head";
import SearchFromApi from "../../../components/data-table/search";
import { useState } from "react";

const Balancesheet = () => {
  const [rows, setRows] = useState<number>(10);
  const [_searchQuery, setSearchQuery] = useState<string | undefined>(
    undefined
  );

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4 className="fw-bold">Balance Sheet</h4>
              <h6>View Your Balance Sheet </h6>
            </div>
          </div>
          <TableTopHead />
        </div>
        {/* /product list */}
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table datatable">
                <thead className="thead-light">
                  <tr>
                    <th>Name</th>
                    <th>Bank &amp; Account Number</th>
                    <th>Credit</th>
                    <th>Debit</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Zephyr Indira</td>
                    <td className="p-3">HBSC - 3298784309485</td>
                    <td className="p-3">$4565</td>
                    <td className="p-3">-$200</td>
                    <td className="p-3">$4365</td>
                  </tr>
                  <tr>
                    <td className="p-3">Quillon Elysia</td>
                    <td className="p-3">SWIZ - 5475878970090</td>
                    <td className="p-3">$4494</td>
                    <td className="p-3">-$50</td>
                    <td className="p-3">$4444</td>
                  </tr>
                  <tr>
                    <td className="p-3">Thaddeus Juniper</td>
                    <td className="p-3">SWIZ - 3255465758698</td>
                    <td className="p-3">$65945</td>
                    <td className="p-3">-$800</td>
                    <td className="p-3">$65145</td>
                  </tr>
                  <tr>
                    <td className="p-3">Orion Astrid</td>
                    <td className="p-3">IBO - 4353689870544</td>
                    <td className="p-3">$1948</td>
                    <td className="p-3">-$100</td>
                    <td className="p-3">$1848</td>
                  </tr>
                  <tr>
                    <td className="p-3">Caspian Marigold</td>
                    <td className="p-3">NBC - 4324356677889</td>
                    <td className="p-3">$1686</td>
                    <td className="p-3">-$700</td>
                    <td className="p-3">$986</td>
                  </tr>
                  <tr>
                    <td className="p-3">Emma James</td>
                    <td className="p-3">NBC - 2343547586900</td>
                    <td className="p-3">$16547</td>
                    <td className="p-3">-$1000</td>
                    <td className="p-3">$15547</td>
                  </tr>
                  <tr>
                    <td className="p-3">Olivia Ethan</td>
                    <td className="p-3">IBO - 3453647664889</td>
                    <td className="p-3">$141845</td>
                    <td className="p-3">-$1200</td>
                    <td className="p-3">$141645</td>
                  </tr>
                  <tr>
                    <td className="p-3">Sophia Liam</td>
                    <td className="p-3">SWIZ - 3354456565687</td>
                    <td className="p-3">$44188</td>
                    <td className="p-3">-$750</td>
                    <td className="p-3">$4356</td>
                  </tr>
                  <tr>
                    <td className="p-3">Ava Mason</td>
                    <td className="p-3">SWIZ - 3456565767787</td>
                    <td className="p-3">$614848</td>
                    <td className="p-3">-$450</td>
                    <td className="p-3">$614389</td>
                  </tr>
                  <tr>
                    <td className="p-3">Isabella Jackson</td>
                    <td className="p-3">IBO - 3434565776768</td>
                    <td className="p-3">$77818</td>
                    <td className="p-3">-$300</td>
                    <td className="p-3">$77518</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      className="bg-light text-dark fw-bold p-3 fs-16"
                      colSpan={2}
                    >
                      Total
                    </td>
                    <td className="bg-light text-dark fw-bold p-3 fs-16">
                      $332642.53
                    </td>
                    <td className="bg-light text-dark fw-bold p-3 fs-16">
                      - $16590.96
                    </td>
                    <td className="bg-light text-dark fw-bold p-3 fs-16">
                      $332687442.53
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0 text-gray-9">
          2014 - 2025 © DreamsPOS. All Right Reserved
        </p>
        <p>
          Designed &amp; Developed by{" "}
          <a href="javascript:void(0);" className="text-primary">
            Dreams
          </a>
        </p>
      </div>
    </div>
  );
};

export default Balancesheet;
