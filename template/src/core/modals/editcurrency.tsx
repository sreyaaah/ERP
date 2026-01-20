import { useEffect, useState } from "react";

interface Currency {
  id: number;
  name: string;
  code: string;
  symbol: string;
  rate: string;
  createdOn: string;
}

interface EditCurrencyProps {
  currency: Currency | null;
  onSave: (currency: Currency) => void;
}

const EditCurrency: React.FC<EditCurrencyProps> = ({ currency, onSave }) => {
  const [form, setForm] = useState<Currency | null>(null);

  useEffect(() => {
    setForm(currency);
  }, [currency]);

  if (!form) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    onSave(form);
  };

  return (
    <div className="modal fade" id="edit-currency">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Edit Currency</h4>
            <button className="btn-close" data-bs-dismiss="modal" />
          </div>

          <div className="modal-body">
            <label className="form-label">Currency Name</label>
            <input
              name="name"
              className="form-control mb-2"
              value={form.name}
              onChange={handleChange}
            />

            <label className="form-label">Currency Code</label>
            <input
              name="code"
              className="form-control mb-2"
              value={form.code}
              onChange={handleChange}
            />

            <label className="form-label">Currency Symbol</label>
            <input
              name="symbol"
              className="form-control mb-2"
              value={form.symbol}
              onChange={handleChange}
            />

            <label className="form-label">Rate</label>
            <input
              name="rate"
              className="form-control"
              value={form.rate}
              onChange={handleChange}
            />
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCurrency;
