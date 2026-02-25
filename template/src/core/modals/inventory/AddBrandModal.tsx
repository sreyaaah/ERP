import React, { useState, useRef } from "react";
import { BrandService } from "../../../feature-module/services/brand.service";

interface AddBrandModalProps {
  onUpdate: () => void;
}

const AddBrandModal: React.FC<AddBrandModalProps> = ({ onUpdate }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      const slug = name.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("slug", slug);
      formData.append("status", status);
      if (image) {
        formData.append("image", image);
      }

      const response = await BrandService.createBrand(formData);
      if (response.status) {
        setName("");
        setStatus("Active");
        setImage(null);
        setImagePreview(null);
        onUpdate();
        closeBtnRef.current?.click();
      } else {
        alert(response.message || "Failed to create brand");
      }
    } catch (error: any) {
      alert(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade" id="add-brand">
      <div className="modal-dialog modal-dialog-centered custom-modal-two">
        <div className="modal-content">
          <div className="page-wrapper-new p-0">
            <div className="content">
              <div className="modal-header border-0 custom-modal-header">
                <div className="page-title">
                  <h4>Add New Brand</h4>
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
                  <div className="profile-pic-upload mb-3">
                    <div className="profile-pic brand-pic">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Brand"
                          className="img-fluid rounded"
                          style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        />
                      ) : (
                        <span>
                          <i className="feather icon-plus-circle plus-down-add" />
                          Add Image
                        </span>
                      )}
                    </div>
                    <div className="image-upload mb-0">
                      <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} />
                      <div className="image-uploads">
                        <h4>Upload Logo</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Brand Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter brand name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-0">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="brand-add-status"
                        className="check"
                        checked={status === "Active"}
                        onChange={(e) => setStatus(e.target.checked ? "Active" : "Inactive")}
                      />
                      <label htmlFor="brand-add-status" className="checktoggle" />
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
                      Add Brand
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

export default AddBrandModal;
