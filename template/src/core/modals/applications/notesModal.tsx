import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Editor } from "primereact/editor";
import CommonSelect from "../../../components/select/common-select";
import CommonDateRangePicker from "../../../components/date-range-picker/common-date-range-picker";
import DeleteModal from "../../../components/delete-modal";


const NotesModal = () => {
  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [text, setText] = useState("");

  const optionsChoose = [
    { value: "Choose", label: "Choose" },
    { value: "Recent1", label: "Recent1" },
    { value: "Recent2", label: "Recent2" },
  ];

  const optionsSelect = [
    { value: "Select", label: "Select" },
    { value: "Recent1", label: "Recent1" },
    { value: "Recent2", label: "Recent2" },
  ];

  const optionsOnHold = [{ value: "Onhold", label: "Onhold" }];

  const optionsPriority = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  return (
    <div>
      {/* Add Note */}
      <div className="modal fade" id="note-units">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Notes</h4>
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
                  <form action="todo">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Notes Title</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Assignee</label>
                          <CommonSelect
                            filter={false}
                            options={optionsChoose}
                            value={selectedAssignee}
                            onChange={(e) => setSelectedAssignee(e.value)}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label className="form-label">Tag</label>
                          <CommonSelect
                            filter={false}
                            options={optionsSelect}
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.value)}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label className="form-label">Priority</label>
                          <CommonSelect
                            filter={false}
                            options={optionsSelect}
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.value)}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-blocks todo-calendar">
                          <label className="form-label">Due Date</label>
                          <div className="input-groupicon calender-input">
                           <CommonDateRangePicker/>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label className="form-label">Status</label>
                          <CommonSelect
                            filter={false}
                            options={optionsSelect}
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.value)}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 summer-description-box notes-summernote">
                          <label className="form-label">Descriptions</label>
                           <Editor
                              value={text}
                              onTextChange={(e: any) => setText(e.htmlValue)}
                              style={{ height: "200px" }}
                            />               
                          <p>Maximum 60 Characters</p>
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
                      <button type="submit" className="btn btn-submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Note */}
      {/* Edit Note */}
      <div className="modal fade" id="edit-note-units">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Notes</h4>
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
                  <form action="todo">
                    <div className="row">
                      <div className="col-12">
                        <div className="input-blocks">
                          <label className="form-label">Note Title</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Meet Lisa to discuss project details"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-blocks">
                          <label className="form-label">Assignee</label>
                          <CommonSelect
                            filter={false}
                            options={optionsSelect}
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.value)}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-blocks">
                          <label className="form-label">Tag</label>
                          <CommonSelect
                            filter={false}
                            options={optionsOnHold}
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.value)}
                            placeholder="Onhold"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-blocks">
                          <label className="form-label">Priority</label>

                          <CommonSelect
                            filter={false}
                            options={optionsPriority}
                            value={selectedPriority}
                            onChange={(e) => setSelectedPriority(e.value)}
                            placeholder="Priority"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-blocks todo-calendar">
                          <label className="form-label">Due Date</label>
                          <div className="input-groupicon calender-input">
                            <input
                              type="text"
                              className="form-control date-range bookingrange"
                              placeholder="Select"
                              defaultValue="13 Aug 1992"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-blocks">
                          <label className="form-label">Status</label>
                          <CommonSelect
                            filter={false}
                            options={optionsChoose}
                            value={selectedAssignee}
                            onChange={(e) => setSelectedAssignee(e.value)}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-blocks summer-description-box notes-summernote">
                          <label className="form-label">Descriptions</label>
                           <Editor
                              value={text}
                              onTextChange={(e: any) => setText(e.htmlValue)}
                              style={{ height: "200px" }}
                            />               
                          <p>Maximum 60 Characters</p>
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
                      <button type="submit" className="btn btn-submit">
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
      {/* /Edit Note */}
     <DeleteModal />
      {/* View Note */}
      <div className="modal fade" id="view-note-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title edit-page-title">
                    <h4>Notes</h4>
                    <p>Personal</p>
                  </div>
                  <div className=" edit-noted-head d-flex align-items-center">
                    <Link to="#">
                      <span>
                        <i  className="feather icon-trash-2"/>
                      </span>
                    </Link>
                    <Link to="#" className="me-2">
                      <span>
                        <i  className="feather icon-star" />
                      </span>
                    </Link>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div>
                <div className="modal-body custom-modal-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="edit-head-view">
                        <h6>Meet Lisa to discuss project details</h6>
                        <p>
                          Hiking is a long, vigorous walk, usually on trails or
                          footpaths in the countryside. Walking for pleasure
                          developed in Europe during the eighteenth century.
                          Religious pilgrimages have existed much longer but
                          they involve walking long distances for a spiritual
                          purpose associated with specific religions and also we
                          achieve inner peace while we hike at a local park.
                        </p>
                        <p className="badged high">
                          <i className="fas fa-circle" /> High
                        </p>
                      </div>
                      <div className="modal-footer-btn edit-footer-menu">
                        <Link
                          to="#"
                          className="btn btn-cancel me-2"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Note */}
    </div>
  );
};

export default NotesModal;
