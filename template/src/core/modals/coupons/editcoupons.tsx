import { useState } from "react";
import { Link } from "react-router-dom";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";
import CommonSelect from "../../../components/select/common-select";
import { Editor } from "primereact/editor";

type OptionType = {
  value: string;
  label: string;
};

const EditCoupons = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [selectedType, setSelectedType] = useState<OptionType | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<OptionType | null>(
    null
  );
  const [text, setText] = useState("");
  const price: OptionType[] = [
    { value: "choose", label: "Choose Type" },
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
  ];
  const options: OptionType[] = [
    { value: "nike-jordan", label: "Nike Jordan" },
    { value: "amazon-echo-dot", label: "Amazon Echo Dot" },
  ];

  return (
    <div>
      {/* Edit coupons */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Edit Coupons</h4>
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
                <div className="modal-body custom-modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>
                            Coupon Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" defaultValue="Coupons 21" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>
                            Coupon Code
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" defaultValue="Christmas" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>
                            Type<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={price}
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.value)}
                            placeholder="Choose Type"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>
                            Discount<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" defaultValue="$20" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-blocks">
                          <label>
                            Limit<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" defaultValue="04" />
                          <span className="unlimited-text">
                            0 for Unlimited
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>
                            Start Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <CommonDatePicker
                              value={date1}
                              onChange={setDate1}
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>
                            End Date<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <CommonDatePicker
                              value={date2}
                              onChange={setDate2}
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-blocks">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center mb-2">
                          <span className="status-label">All Products</span>
                          <div className="d-flex align-items-center">
                            <input
                              type="checkbox"
                              id="user5"
                              className="check"
                            />
                            <label
                              htmlFor="user5"
                              className="checktoggle mb-0 me-1"
                            />
                            <span className="customer-toggle">
                              Once Per Customer
                            </span>
                          </div>
                        </div>

                        <CommonSelect
                          className="w-100"
                          options={options}
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.value)}
                          placeholder="Select an option"
                          filter={false}
                        />
                      </div>
                      <div className="mb-3 summer-description-box">
                        <label className="form-label">Description</label>
                        <Editor
                          value={text}
                          onTextChange={(e: any) => setText(e.htmlValue)}
                          style={{ height: "200px" }}
                        />
                        <p>Maximum 60 Words</p>
                      </div>

                      <div className="input-blocks m-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user6"
                            className="check"
                            defaultChecked={true}
                          />
                          <label htmlFor="user6" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <Link
                        to="#"
                        data-bs-dismiss="modal"
                        className="btn btn-submit"
                      >
                        Save Changes
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Coupons */}
    </div>
  );
};

export default EditCoupons;
