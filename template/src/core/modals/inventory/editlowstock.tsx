import CommonSelect from "../../../components/select/common-select";
import  { useState } from "react";
import { Link } from "react-router-dom";

const EditLowStock = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  const Category = [{ label: "Laptop", value: "1" }];
  const WareHouse = [
    { label: "Lavish Warehouse", value: "1" },
    { label: "Quaint Warehouse", value: "2" },
    { label: "Traditional Warehouse", value: "3" },
    { label: "Cool Warehouse", value: "4" },
    { label: "Overflow Warehouse", value: "5" },
    { label: "Nova Storage Hub", value: "6" },
    { label: "Retail Supply Hub", value: "7" },
    { label: "EdgeWare Solutions", value: "8" },
  ];
  const Store = [
    { label: 'Electro Mart', value: '1' },
    { label: 'Quantum Gadgets', value: '2' },
    { label: 'Prime Bazaar', value: '3' },
    { label: 'Gadget World', value: '4' },
    { label: 'Volt Vault', value: '5' },
  ];
  return (
    <>
      {/* Edit Low Stock */}
      <div className="modal fade" id="edit-stock">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Low Stocks</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" className="fs-16">
                      ×
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Warehouse<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={WareHouse}
                          value={selectedWarehouse}
                          onChange={(e) => setSelectedWarehouse(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Store<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Store}
                          value={selectedStore}
                          onChange={(e) => setSelectedStore(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          SKU<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="PT001"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Category<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={Category}
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label className="form-label">
                          Product Name
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Lenevo 3rd Gen"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Qty<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={15}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Qty Alert<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={10}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    data-bs-dismiss="modal"
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / Edit Low Stock */}
    </>
  );
};

export default EditLowStock;
