import React, { useState, useRef } from "react";
import { CategoryService } from "../../../feature-module/services/category.service";

interface AddCategoryProps {
  onUpdate: () => void;
}

const AddCategory: React.FC<AddCategoryProps> = ({ onUpdate }) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [loading, setLoading] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim()) return;
      
      setLoading(true);
      try {
          await CategoryService.create({
              name: name.trim(),
              slug: slug.trim() || slugify(name),
              status
          });
          setName("");
          setSlug("");
          setStatus("Active");
          onUpdate();
          closeBtnRef.current?.click();
      } catch (error: any) {
          alert(error.message || "Failed to create category");
      } finally {
          setLoading(false);
      }
  };

  return (
    <>
      {/* Add Category */}
      <div className="modal fade" id="add-category">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Add New Category</h4>
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
                <div className="modal-body custom-modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name <span className="text-danger">*</span></label>
                      <input 
                          type="text" 
                          className="form-control"
                          placeholder="Enter category name"
                          value={name}
                          onChange={(e) => {
                            const val = e.target.value;
                            setName(val);
                            setSlug(slugify(val));
                          }}
                          required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Slug <span className="text-danger">*</span></label>
                      <input 
                          type="text" 
                          className="form-control"
                          placeholder="Enter slug"
                          value={slug}
                          onChange={(e) => setSlug(slugify(e.target.value))}
                          required
                      />
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="category-add-status-checkbox"
                          className="check"
                          checked={status === "Active"}
                          onChange={(e) => setStatus(e.target.checked ? "Active" : "Inactive")}
                        />
                        <label htmlFor="category-add-status-checkbox" className="checktoggle" />
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
                      <button 
                        type="submit" 
                        className="btn btn-submit fs-13 fw-medium p-2 px-3"
                        disabled={loading}
                      >
                        {loading && <span className="spinner-border spinner-border-sm me-1" />}
                        Add Category
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Category */}
    </>
  );
};

export default AddCategory;
