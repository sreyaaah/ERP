import { useState } from "react";
import { Link } from "react-router-dom";
import { Editor } from "primereact/editor";
import { plus1, qrCodeImage } from "../../../utils/imagepath";
import CommonSelect from "../../../components/select/common-select";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";

const AddQuotation = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [text, setText] = useState("");

  const customer = [
    { value: "Choose", label: "Choose" },
    { value: "Benjamin", label: "Benjamin" },
    { value: "Nydia Fitzgerald", label: "Nydia Fitzgerald" },
  ];

  const Status  = [
    { label: 'Sent', value: '1' },
    { label: 'Pending', value: '2' },
  ];

  return (
    <div>
      <>
        {/*Add Quotation */}
        <div className="modal fade" id="add-units">
          <div className="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Quotation</h4>
                </div>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3 add-product">
                        <label className="form-label">
                          Customer Name
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <div className="row">
                          <div className="col-lg-10 col-sm-10 col-10">
                            <CommonSelect
                              className="w-100"
                              options={customer}
                              value={selectedCustomer}
                              onChange={(e) => setSelectedCustomer(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                          <div className="col-lg-2 col-sm-2 col-2 p-0">
                            <div className="add-icon tab">
                              <Link to="#"
                                className="bg-dark text-white p-2 rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#add-units"
                              >
                                <img
                                  src={plus1}
                                  alt="img"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Date<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-groupicon calender-input">
                          <CommonDatePicker
                            value={date}
                            onChange={setDate}
                            className="w-100"
                          />
                          <i className="feather icon-calendar info-img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Reference<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Product<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-groupicon select-code">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please type product code and select"
                          />
                          <div className="addonset">
                            <img
                              src={qrCodeImage}
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="modal-body-table">
                        <div className="table-responsive">
                          <table className="table datanew">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Purchase Price($)</th>
                                <th>Discount($)</th>
                                <th>Tax(%)</th>
                                <th>Tax Amount($)</th>
                                <th>Unit Cost($)</th>
                                <th>Total Cost(%)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{ background: "#ffffff" }}>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Order Tax<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Discount<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Shipping<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={Status}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 summer-description-box">
                      <label className="form-label">Description</label>
                      <Editor
                        value={text}
                        onTextChange={(e: any) => setText(e.htmlValue)}
                        style={{ height: "200px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Quotation */}
      </>
    </div>
  );
};

export default AddQuotation;
