import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddCurrency from "../../../core/modals/settings/addcurrency";
import EditCurrency from "../../../core/modals/editcurrency";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";
import { CurrencyService, type Currency } from "../../services/currency.service";
import Swal from "sweetalert2";


const CurrencySettings = () => {
  /* ---------- STATE ---------- */
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
  const [currencyToDelete, setCurrencyToDelete] = useState<Currency | null>(null);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    try {
      setLoading(true);
      const res = await CurrencyService.getAllCurrencies();
      if (res.status) {
        setCurrencies(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch currencies", error);
      Swal.fire("Error", "Failed to load currencies", "error");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- OPERATIONS ---------- */
  const handleAddCurrency = async (data: Partial<Currency>) => {
    try {
      const res = await CurrencyService.createCurrency(data);
      if (res.status) {
        Swal.fire("Success", "Currency added successfully", "success");
        fetchCurrencies();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add currency", "error");
    }
  };

  const handleUpdateCurrency = async (updated: Currency) => {
    try {
      if (!updated._id) return;
      const res = await CurrencyService.updateCurrency(updated._id, updated);
      if (res.status) {
        Swal.fire("Success", "Currency updated successfully", "success");
        fetchCurrencies();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update currency", "error");
    }
  };

  const handleDeleteCurrency = async () => {
    if (currencyToDelete && currencyToDelete._id) {
      try {
        const res = await CurrencyService.deleteCurrency(currencyToDelete._id);
        if (res.status) {
          Swal.fire("Deleted!", "Currency deleted successfully", "success");
          fetchCurrencies();
          setCurrencyToDelete(null);
        }
      } catch (error) {
        Swal.fire("Error", "Failed to delete currency", "error");
      }
    }
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
                    {loading ? (
                      <tr>
                        <td colSpan={6} className="text-center py-5">
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      currencies.map((c) => (
                        <tr key={c._id}>
                          <td>{c.name}</td>
                          <td>{c.code}</td>
                          <td>{c.symbol}</td>
                          <td>{c.rate}</td>
                          <td>{c.createdAt ? new Date(c.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }) : "-"}</td>
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
                      ))
                    )}

                    {!loading && currencies.length === 0 && (
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
