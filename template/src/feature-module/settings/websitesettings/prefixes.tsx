import SettingsSideBar from "../settingssidebar";
import CommonFooter from "../../../components/footer/commonFooter";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";

const Prefixes = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header settings-pg-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Settings</h4>
                <h6>Manage your settings on portal</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="settings-wrapper d-flex">
                <SettingsSideBar />
                <div className="card flex-fill mb-0">
                  <div className="card-header">
                    <h4 className="fs-18 fw-bold">Prefixes</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Product (SKU)</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="SKU -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Supplier</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="SUP -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Purchase</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="PU -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Purchase Return
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="PR -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Sales</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="SA -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Sales Return</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="SR -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Customer</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="CT -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Expense</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="EX -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Stock Transfer</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="ST -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Stock Adjustmentt
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="SA -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Sales Order</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="SO -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">POS Invoice</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="PINV -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Estimation</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="EST -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Transaction</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="TRN -"
                            />
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Employee</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="EMP -"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-end settings-bottom-btn mt-0">
                        <button
                          type="button"
                          className="btn btn-secondary me-2"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default Prefixes;
