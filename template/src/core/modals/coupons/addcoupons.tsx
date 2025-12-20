import  { useState } from "react";
import { Link } from "react-router-dom";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";
import CommonSelect from "../../../components/select/common-select";
import { Editor } from "primereact/editor";

type OptionType = {
  value: string;
  label: string;
};

const AddCoupons = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [selectedType, setSelectedType] = useState<OptionType | null>(null);
  const [selectedList, setSelectedList] = useState<OptionType | null>(null);
  const [text, setText] = useState("");
  const price: OptionType[] = [
    { value: "choose", label: "Choose Type" },
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
  ];
  const list: OptionType[] = [
    { value: "choose", label: "Choose" },
    { value: "nikeJordan", label: "Nike Jordan" },
    { value: "amazonEchoDot", label: "Amazon Echo Dot" },
  ];



  return (
    <div>
      {/* Add coupons */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Add Coupons</h4>
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
                        <div className="mb-3">
                          <label className="form-label">
                            Coupon Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Coupon Code
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Type<span className="text-danger ms-1">*</span>
                          </label>

                          <CommonSelect
                            options={price}
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.value)}
                            placeholder="Choose Type"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Discount<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            {" "}
                            Limit<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
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
                            <i className="feather icon-calendar info-img" />
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
                            <i className="feather icon-calendar info-img" />
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
                              id="user4"
                              className="check"
                              defaultChecked={true}
                            />
                            <label
                              htmlFor="user4"
                              className="checktoggle mb-0 me-1"
                            />
                            <span className="customer-toggle">
                              Once Per Customer
                            </span>
                          </div>
                        </div>
                        <CommonSelect
                          options={list}
                          value={selectedList}
                          onChange={(e) => setSelectedList(e.value)}
                          placeholder="Choose"
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
                            id="user3"
                            className="check"
                            defaultChecked={true}
                          />
                          <label htmlFor="user3" className="checktoggle">
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
                        Create Coupon
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Coupons */}
    </div>
  );
};

export default AddCoupons;
