import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddTaxRates from "../../../core/modals/settings/addtaxrates";
import EditTaxRates from "../../../core/modals/settings/edittaxrates";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";
import { TaxService, type TaxRate } from "../../services/tax.service";
import Swal from "sweetalert2";


// TaxType and TaxRate are now imported from tax.service, so local definitions are removed.

const TaxRates = () => {
  const [taxRates, setTaxRates] = useState<TaxRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTax, setSelectedTax] = useState<TaxRate | null>(null);
  const [taxToDelete, setTaxToDelete] = useState<TaxRate | null>(null);

  useEffect(() => {
    fetchTaxes();
  }, []);

  const fetchTaxes = async () => {
    try {
      setLoading(true);
      const res = await TaxService.getAllTaxes();
      if (res.status) {
        setTaxRates(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch tax rates", error);
      Swal.fire("Error", "Failed to load tax rates", "error");
    } finally {
      setLoading(false);
    }
  };

  const renderRate = (tax: TaxRate): string => {
    if (tax.type === "GST") {
      const half = tax.rate / 2;
      return `${tax.rate}% (Intrastate: CGST ${half}% + SGST ${half}% | Interstate: IGST ${tax.rate}%)`;
    }
    return `${tax.rate}%`;
  };

  /* ---------- OPERATIONS ---------- */
  const handleAddTax = async (data: any) => {
    try {
      const res = await TaxService.createTax(data);
      if (res.status) {
        Swal.fire("Success", "Tax rate added successfully", "success");
        fetchTaxes();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add tax rate", "error");
    }
  };

  const handleUpdateTax = async (updated: TaxRate) => {
    try {
      if (!updated._id) return;
      const res = await TaxService.updateTax(updated._id, updated);
      if (res.status) {
        Swal.fire("Success", "Tax rate updated successfully", "success");
        fetchTaxes();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update tax rate", "error");
    }
  };

  const handleDeleteTax = async () => {
    if (taxToDelete && taxToDelete._id) {
      try {
        const res = await TaxService.deleteTax(taxToDelete._id);
        if (res.status) {
          Swal.fire("Deleted!", "Tax rate deleted successfully", "success");
          fetchTaxes();
          setTaxToDelete(null);
        }
      } catch (error) {
        Swal.fire("Error", "Failed to delete tax rate", "error");
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
                <h4>Tax Rates</h4>
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add-tax"
                >
                  <i className="ti ti-circle-plus me-1" />
                  Add New Tax Rate
                </Link>
              </div>

              <div className="card-body">
                <table className="table border">
                  <thead>
                    <tr>
                      <th>Tax Name</th>
                      <th>Tax Type</th>
                      <th>Tax Rate</th>
                      <th>Created On</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="text-center py-5">
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      taxRates.map((t) => (
                        <tr key={t._id}>
                          <td>{t.name}</td>
                          <td>
                            <span className="badge bg-info">{t.type}</span>
                          </td>
                          <td>{renderRate(t)}</td>
                          <td>{t.createdAt ? new Date(t.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }) : "-"}</td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-tax"
                              onClick={() => setSelectedTax(t)}
                            >
                              <i className="ti ti-edit" />
                            </Link>

                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                              onClick={() => setTaxToDelete(t)}
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </td>
                        </tr>
                      ))
                    )}

                    {!loading && taxRates.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center">
                          No tax rates found
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
      <AddTaxRates onAdd={handleAddTax} />
      <EditTaxRates tax={selectedTax} onSave={handleUpdateTax} />
      <DeleteModal onConfirm={handleDeleteTax} />
    </>
  );
};

export default TaxRates;
