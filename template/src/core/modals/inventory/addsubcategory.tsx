import React, { useState, useRef } from "react";
import { SubcategoryService } from "../../../feature-module/services/subcategory.service";
import { type Category } from "../../../feature-module/services/category.service";
import CommonSelect from "../../../components/select/common-select";

interface AddSubCategoryProps {
  categories: Category[];
  onUpdate: () => void;
}

const AddSubCategory: React.FC<AddSubCategoryProps> = ({ categories, onUpdate }) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Sub category name is required";
    if (!categoryId) errs.categoryId = "Please select a category";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;
      
      setLoading(true);
      try {
          await SubcategoryService.create({
              name: name.trim(),
              slug: slug.trim() || slugify(name),
              categoryId,
              status
          });
          setName("");
          setSlug("");
          setCategoryId("");
          setStatus("Active");
          setErrors({});
          onUpdate();
          closeBtnRef.current?.click();
      } catch (error: any) {
          alert(error.message || "Failed to create subcategory");
      } finally {
          setLoading(false);
      }
  };

  const categoryOptions = categories.map((c) => ({ label: c.name, value: c.id }));

  return (
    <div className="modal fade" id="add-subcategory">
      <div className="modal-dialog modal-dialog-centered custom-modal-two">
        <div className="modal-content">
          <div className="page-wrapper-new p-0">
            <div className="content">
              <div className="modal-header border-0 custom-modal-header">
                <div className="page-title">
                  <h4>Add New Sub Category</h4>
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
                    <label className="form-label">
                      Parent Category<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      className="w-100"
                      options={categoryOptions}
                      value={categoryId}
                      onChange={(e: any) => setCategoryId(e.value)}
                      placeholder="Select a category"
                      filter={true}
                    />
                    {errors.categoryId && <div className="text-danger small mt-1">{errors.categoryId}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Enter sub category name"
                        value={name}
                        onChange={(e) => {
                          const val = e.target.value;
                          setName(val);
                          setSlug(slugify(val));
                        }}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Slug</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Enter slug"
                        value={slug}
                        onChange={(e) => setSlug(slugify(e.target.value))}
                    />
                  </div>
                  <div className="mb-0">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="subcategory-add-status-checkbox"
                        className="check"
                        checked={status === "Active"}
                        onChange={(e) => setStatus(e.target.checked ? "Active" : "Inactive")}
                      />
                      <label htmlFor="subcategory-add-status-checkbox" className="checktoggle" />
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
                      Create Sub Category
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

export default AddSubCategory;
