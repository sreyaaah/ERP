import { useState } from "react";

import { type Currency } from "../../../feature-module/services/currency.service";

interface AddCurrencyProps {
  onAddCurrency: (data: Partial<Currency>) => void;
}

const AddCurrency: React.FC<AddCurrencyProps> = ({ onAddCurrency }) => {
  const [form, setForm] = useState<Partial<Currency>>({
    name: "",
    code: "",
    symbol: "",
    rate: "",
    status: true,
  });

  /* ---------- FIX event any ---------- */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prev: Partial<Currency>) => ({ ...prev, [name]: value }));
  };

  const handleSave = (): void => {
    if (!form.name || !form.code || !form.symbol) return;

    onAddCurrency(form);
    setForm({ name: "", code: "", symbol: "", rate: "" });

    /* ---------- FIX null error ---------- */
    document.getElementById("closeAddCurrency")?.click();
  };

  return (
    <div className="modal fade" id="add-currency">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5>Add Currency</h5>
            <button
              id="closeAddCurrency"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>

          <div className="modal-body">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Currency Name"
            />
            <input
              name="code"
              value={form.code}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Code"
            />
            <input
              name="symbol"
              value={form.symbol}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Symbol"
            />
            <input
              name="rate"
              value={form.rate}
              onChange={handleChange}
              className="form-control"
              placeholder="Exchange Rate"
            />
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCurrency;
