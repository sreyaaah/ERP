

import { Link } from "react-router-dom";

const QRcodeModelPopup = () => {
  return (
    <>
      {/* Print Qrcode */}
      <div className="modal fade" id="prints-barcode">
        <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>QR Code</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16 shadow-none"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="d-flex justify-content-end">
                    <Link
                      to="#"
                      className="btn btn-cancel close-btn bg-danger text-white shadow-none"
                    >
                      <span>
                        <i className="fas fa-print me-2" />
                      </span>
                      Print QR Code
                    </Link>
                  </div>
                  <div className="barcode-scan-header">
                    <h5>Nike Jordan</h5>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="barcode-scanner-link text-center">
                        <div className="barscaner-img">
                          <img
                            src="./assets/img/barcode/qr-code.png"
                            alt="Barcode"
                            className="img-fluid"
                          />
                        </div>
                        <p className="fs-12">Ref No :32RRR554 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Print Qrcode */}

      <>
        {/* Print Qrcode */}
        <div className="modal fade" id="prints-barcode">
          <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>QR Code</h4>
                    </div>
                    <button
                      type="button"
                      className="close bg-danger text-white fs-16 shadow-none"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="d-flex justify-content-end">
                      <Link
                        to="#"
                        className="btn btn-cancel close-btn bg-danger text-white shadow-none"
                      >
                        <span>
                          <i className="fas fa-print me-2" />
                        </span>
                        Print QR Code
                      </Link>
                    </div>
                    <div className="barcode-scan-header">
                      <h5>Nike Jordan</h5>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="barcode-scanner-link text-center">
                          <div className="barscaner-img">
                            <img
                              src="./assets/img/barcode/qr-code.png"
                              alt="Barcode"
                              className="img-fluid"
                            />
                          </div>
                          <p className="fs-12">Ref No :32RRR554 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Print Qrcode */}
        {/* delete modal */}
        <div className="modal fade" id="delete-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content p-5 px-3 text-center">
                  <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                    <i className="ti ti-trash fs-24 text-danger" />
                  </span>
                  <h4 className="fs-20 fw-bold mb-2 mt-1">Delete product</h4>
                  <p className="mb-0 fs-16">
                    Are you sure you want to delete product?
                  </p>
                  <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                      data-bs-dismiss="modal"
                    >
                      Yes Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default QRcodeModelPopup;
