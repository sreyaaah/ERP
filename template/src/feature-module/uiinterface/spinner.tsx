import CommonFooter from "../../components/footer/commonFooter";

const Spinner = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Spinner</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Border Spinner</h5>
                </div>
                <div className="card-body pb-2">
                  <p>
                    Use the border spinners for a lightweight loading indicator.
                  </p>
                  <div className="spinner-border m-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>{" "}
                {/* end card body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Colors</h5>
                </div>
                <div className="card-body pb-2">
                  <p>
                    You can use any of our text color utilities on the standard
                    spinner.
                  </p>
                  <div
                    className="spinner-border text-primary m-2"
                    role="status"
                  />
                  <div
                    className="spinner-border text-secondary m-2"
                    role="status"
                  />
                  <div
                    className="spinner-border text-success m-2"
                    role="status"
                  />
                  <div
                    className="spinner-border text-danger m-2"
                    role="status"
                  />
                  <div
                    className="spinner-border text-warning m-2"
                    role="status"
                  />
                  <div className="spinner-border text-info m-2" role="status" />
                  <div
                    className="spinner-border text-light m-2"
                    role="status"
                  />
                  <div className="spinner-border text-dark m-2" role="status" />
                </div>{" "}
                {/* end card body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Growing Spinner</h5>
                </div>
                <div className="card-body pb-2">
                  <p>
                    If you don’t fancy a border spinner, switch to the grow
                    spinner. While it doesn’t technically spin, it does
                    repeatedly grow!
                  </p>
                  <div className="spinner-grow m-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>{" "}
                {/* end card body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
            <div className="col-xl-6">
              <div className="card card-h-100">
                <div className="card-header">
                  <h5 className="card-title">Color Growing Spinner</h5>
                </div>
                <div className="card-body pb-2">
                  <p>
                    You can use any of our text color utilities on the standard
                    spinner.
                  </p>
                  <div
                    className="spinner-grow text-primary m-2"
                    role="status"
                  />
                  <div
                    className="spinner-grow text-secondary m-2"
                    role="status"
                  />
                  <div
                    className="spinner-grow text-success m-2"
                    role="status"
                  />
                  <div className="spinner-grow text-danger m-2" role="status" />
                  <div
                    className="spinner-grow text-warning m-2"
                    role="status"
                  />
                  <div className="spinner-grow text-info m-2" role="status" />
                  <div className="spinner-grow text-light m-2" role="status" />
                  <div className="spinner-grow text-dark m-2" role="status" />
                </div>{" "}
                {/* end card body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Alignment</h5>
                </div>
                <div className="card-body">
                  <p>
                    Use flexbox utilities, float utilities, or text alignment
                    utilities to place spinners exactly where you need them in
                    any situation.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status" />
                  </div>
                </div>{" "}
                {/* end card body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Placement</h5>
                </div>
                <div className="card-body">
                  <p>
                    Use <code>flexbox utilities</code>,{" "}
                    <code>float utilities</code>, or <code>text alignment</code>{" "}
                    utilities to place spinners exactly where you need them in
                    any situation.
                  </p>
                  <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div
                      className="spinner-border ms-auto"
                      role="status"
                      aria-hidden="true"
                    />
                  </div>
                </div>{" "}
                {/* end card body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
          {/* Buttons Spinner */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Buttons</h5>
              </div>
              <div className="card-body">
                <div className="btn-list">
                  <button
                    className="btn btn-primary-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading...</span>
                  </button>
                  <button
                    className="btn btn-primary-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                  <button
                    className="btn btn-primary-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading...</span>
                  </button>
                  <button
                    className="btn btn-primary-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                  <button
                    className="btn btn-secondary-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                  <button
                    className="btn btn-success-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                  <button
                    className="btn btn-info-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                  <button
                    className="btn btn-warning-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                  <button
                    className="btn btn-danger-light"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                  <button className="btn btn-light" type="button" disabled>
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                  <button
                    className="btn btn-dark text-fixed-white"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm align-middle"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Buttons Spinner */}
        </div>
        <CommonFooter/>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default Spinner;
