import React, { useState, useRef } from "react";
import { UnitService } from "../../../feature-module/services/unit.service";

interface AddUnitModalProps {
  onUpdate: () => void;
}

const AddUnitModal: React.FC<AddUnitModalProps> = ({ onUpdate }) => {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [loading, setLoading] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !shortName.trim()) return;

    setLoading(true);
    try {
      const response = await UnitService.createUnit({
        name: name.trim(),
        shortName: shortName.trim(),
        status
      });

      if (response.status) {
        setName("");
        setShortName("");
        setStatus("Active");
        onUpdate();
        closeBtnRef.current?.click();
      } else {
        alert(response.message || "Failed to create unit");
      }
    } catch (error: any) {
      alert(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade" id="add-units">
      <div className="modal-dialog modal-dialog-centered custom-modal-two">
        <div className="modal-content">
          <div className="page-wrapper-new p-0">
            <div className="content">
              <div className="modal-header border-0 custom-modal-header">
                <div className="page-title">
                  <h4>Add New Unit</h4>
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
                  <div className="mb-3">
                    <label className="form-label">Unit Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter unit name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Short Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter short name"
                      value={shortName}
                      onChange={(e) => setShortName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-0">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="unit-add-status"
                        className="check"
                        checked={status === "Active"}
                        onChange={(e) => setStatus(e.target.checked ? "Active" : "Inactive")}
                      />
                      <label htmlFor="unit-add-status" className="checktoggle" />
                    </div>
                  </div>
                  <div className="modal-footer px-0 pb-0 pt-3">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-submit fs-13 fw-medium p-2 px-3" disabled={loading}>
                      {loading && <span className="spinner-border spinner-border-sm me-1" />}
                      Add Unit
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

export default AddUnitModal;
