import React, { useState, useEffect, useRef } from "react";
import { Editor } from "primereact/editor";
import { WarrantyService, type Warranty } from "../../../feature-module/services/warranty.service";
import CommonSelect from "../../../components/select/common-select";

interface EditWarrantyModalProps {
  warranty: Warranty | null;
  onUpdate: () => void;
}

const PERIOD_OPTIONS = [
  { label: "Days", value: "Days" },
  { label: "Months", value: "Months" },
  { label: "Years", value: "Years" },
];

const EditWarrantyModal: React.FC<EditWarrantyModalProps> = ({ warranty, onUpdate }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (warranty) {
      setName(warranty.name);
      setDuration(String(warranty.duration));
      setType(warranty.type);
      setDescription(warranty.description || "");
      setStatus(warranty.status as "Active" | "Inactive");
      setErrors({});
    }
  }, [warranty]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Warranty name is required";
    if (!duration || isNaN(Number(duration)) || Number(duration) < 1) errs.duration = "Enter a valid duration (min 1)";
    if (!type) errs.type = "Please select a period type";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!warranty || !validate()) return;

    setLoading(true);
    try {
      const response = await WarrantyService.updateWarranty(warranty.id, {
        name: name.trim(),
        duration: Number(duration),
        type: type as "Days" | "Months" | "Years",
        description,
        status,
      });

      if (response.status) {
        setErrors({});
        onUpdate();
        closeBtnRef.current?.click();
      } else {
        alert(response.message || "Failed to update warranty");
      }
    } catch (error: any) {
      alert(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade" id="edit-warranty">
      <div className="modal-dialog modal-dialog-centered custom-modal-two">
        <div className="modal-content">
          <div className="page-wrapper-new p-0">
            <div className="content">
              <div className="modal-header border-0 custom-modal-header">
                <div className="page-title">
                  <h4>Edit Warranty</h4>
                </div>
                <button
                  ref={closeBtnRef}
                  type="button"
                  className="close bg-danger text-white fs-16"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="modal-body custom-modal-body new-employee-field">
                <form onSubmit={handleSubmit}>
                  {/* Warranty Name */}
                  <div className="mb-3">
                    <label className="form-label">
                      Warranty <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      placeholder="e.g. 1 Year Standard"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  {/* Duration + Period side by side */}
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label className="form-label">
                        Duration <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className={`form-control ${errors.duration ? "is-invalid" : ""}`}
                        placeholder="e.g. 12"
                        min={1}
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                      {errors.duration && <div className="invalid-feedback">{errors.duration}</div>}
                    </div>
                    <div className="col-6">
                      <label className="form-label">
                        Period <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className={`w-100 ${errors.type ? "border-danger" : ""}`}
                        options={PERIOD_OPTIONS}
                        value={type}
                        onChange={(e: any) => setType(e.value)}
                        placeholder="Choose"
                        filter={false}
                      />
                      {errors.type && <div className="text-danger small mt-1">{errors.type}</div>}
                    </div>
                  </div>

                  {/* Description rich text */}
                  <div className="mb-3">
                    <label className="form-label">
                      Description <span className="text-danger">*</span>
                    </label>
                    <Editor
                      value={description}
                      onTextChange={(e: any) => setDescription(e.htmlValue ?? "")}
                      style={{ height: "200px" }}
                    />
                  </div>

                  {/* Status toggle */}
                  <div className="mb-0">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="warranty-edit-status"
                        className="check"
                        checked={status === "Active"}
                        onChange={(e) => setStatus(e.target.checked ? "Active" : "Inactive")}
                      />
                      <label htmlFor="warranty-edit-status" className="checktoggle" />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="modal-footer px-0 pb-0 pt-3">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-submit fs-13 fw-medium p-2 px-3"
                      disabled={loading}
                    >
                      {loading && <span className="spinner-border spinner-border-sm me-1" />}
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
  );
};

export default EditWarrantyModal;
