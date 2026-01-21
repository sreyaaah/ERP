import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AddTaxRates from "../../../core/modals/settings/addtaxrates";
import EditTaxRates from "../../../core/modals/settings/edittaxrates";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";


type TaxType = "GST" | "VAT" | "CGST" | "SGST" | "IGST";

interface TaxRate {
  id: number;
  name: string;
  type: TaxType;
  rate: number;
  createdOn: string;
}

interface TaxForm {
  name: string;
  type: TaxType;
  rate: number;
}
const currentDate = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export const INITIAL_TAX_RATES: TaxRate[] = [
  { id: 1, name: "GST 5%", type: "GST", rate: 5, createdOn: currentDate },
  { id: 2, name: "GST 12%", type: "GST", rate: 12, createdOn: currentDate },
  { id: 3, name: "GST 18%", type: "GST", rate: 18, createdOn: currentDate },
  { id: 4, name: "GST 28%", type: "GST", rate: 28, createdOn: currentDate },
  { id: 5, name: "VAT 5%", type: "VAT", rate: 5, createdOn: currentDate },
  { id: 6, name: "VAT 10%", type: "VAT", rate: 10, createdOn: currentDate },
  { id: 7, name: "VAT 20%", type: "VAT", rate: 20, createdOn: currentDate },
];

const TaxRates = () => {
  const [taxRates, setTaxRates] = useState<TaxRate[]>(() => {
    const saved = localStorage.getItem("taxRates");
    return saved ? JSON.parse(saved) : INITIAL_TAX_RATES;
  });

  const [selectedTax, setSelectedTax] = useState<TaxRate | null>(null);
  const [taxToDelete, setTaxToDelete] = useState<TaxRate | null>(null);

  useEffect(() => {
    localStorage.setItem("taxRates", JSON.stringify(taxRates));
    window.dispatchEvent(new Event("storage"));
  }, [taxRates]);

  const renderRate = (tax: TaxRate): string => {
    if (tax.type === "GST") {
      const half = tax.rate / 2;
      return `${tax.rate}% (Intrastate: CGST ${half}% + SGST ${half}% | Interstate: IGST ${tax.rate}%)`;
    }
    return `${tax.rate}%`;
  };

  const handleAddTax = (data: TaxForm) => {
    if (data.type !== "GST" && data.type !== "VAT") return;

    setTaxRates((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...data,
        createdOn: currentDate,
      },
    ]);
  };

  const handleUpdateTax = (updated: TaxRate) => {
    setTaxRates((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
    setSelectedTax(null);
  };
  const handleDeleteTax = () => {
    if (!taxToDelete) return;
    setTaxRates((prev) =>
      prev.filter((t) => t.id !== taxToDelete.id)
    );
    setTaxToDelete(null);
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
                    {taxRates.map((t) => (
                      <tr key={t.id}>
                        <td>{t.name}</td>
                        <td>
                          <span className="badge bg-info">{t.type}</span>
                        </td>
                        <td>{renderRate(t)}</td>
                        <td>{t.createdOn}</td>
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
                    ))}

                    {taxRates.length === 0 && (
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
