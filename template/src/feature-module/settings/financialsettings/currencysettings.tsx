import { useState } from "react";
import { Link } from "react-router-dom";

import AddCurrency from "../../../core/modals/settings/addcurrency";
import EditCurrency from "../../../core/modals/editcurrency";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";

import { ALL_SELECTED_CURRENCIES } from "./currencies";

/* ---------- TYPES ---------- */
interface Currency {
  id: number;
  name: string;
  code: string;
  symbol: string;
  rate: string;
  createdOn: string;
}

interface CurrencyForm {
  name: string;
  code: string;
  symbol: string;
  rate: string;
}

const CurrencySettings = () => {
  /* ---------- STATE ---------- */
  const [currencies, setCurrencies] = useState<Currency[]>(
    ALL_SELECTED_CURRENCIES.map((c, index) => ({
      id: index + 1,
      name: c.name,
      code: c.code,
      symbol: c.symbol,
      rate: "Default",
      createdOn: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    }))
  );

  const [selectedCurrency, setSelectedCurrency] =
    useState<Currency | null>(null);

  const [currencyToDelete, setCurrencyToDelete] =
    useState<Currency | null>(null);

  /* ---------- ADD ---------- */
  const handleAddCurrency = (data: CurrencyForm): void => {
    setCurrencies((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...data,
        createdOn: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      },
    ]);
  };

  /* ---------- UPDATE ---------- */
  const handleUpdateCurrency = (updated: Currency): void => {
    setCurrencies((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
    setSelectedCurrency(null);
  };

  /* ---------- DELETE ---------- */
  const handleDeleteCurrency = (): void => {
    if (!currencyToDelete) return;

    setCurrencies((prev) =>
      prev.filter((c) => c.id !== currencyToDelete.id)
    );

    setCurrencyToDelete(null);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header settings-pg-header">
            <div className="page-title">
              <h4>Settings</h4>
              <h6>Manage your settings on portal</h6>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>

          <div className="settings-wrapper d-flex">
            <SettingsSideBar />

            <div className="card flex-fill mb-0 w-50">
              <div className="card-header d-flex justify-content-between">
                <h4>Currency</h4>
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add-currency"
                >
                  <i className="ti ti-circle-plus me-1" />
                  Add New Currency
                </Link>
              </div>

              <div className="card-body p-0">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Symbol</th>
                      <th>Rate</th>
                      <th>Created</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currencies.map((c) => (
                      <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>{c.code}</td>
                        <td>{c.symbol}</td>
                        <td>{c.rate}</td>
                        <td>{c.createdOn}</td>
                        <td className="text-end">
                          {/* EDIT */}
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-currency"
                            onClick={() => setSelectedCurrency(c)}
                          >
                            <i className="feather icon-edit" />
                          </Link>

                          {/* DELETE */}
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                            onClick={() => setCurrencyToDelete(c)}
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </td>
                      </tr>
                    ))}

                    {currencies.length === 0 && (
                      <tr>
                        <td colSpan={6} className="text-center">
                          No currencies found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <CommonFooter />
      </div>

      {/* MODALS */}
      <AddCurrency onAddCurrency={handleAddCurrency} />

      <EditCurrency
        currency={selectedCurrency}
        onSave={handleUpdateCurrency}
      />

      <DeleteModal onConfirm={handleDeleteCurrency} />
    </>
  );
};

export default CurrencySettings;
