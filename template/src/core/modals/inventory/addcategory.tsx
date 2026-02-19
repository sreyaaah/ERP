import { useState } from "react";
import { Link } from "react-router-dom";
import { categoryService } from "../../../feature-module/inventory/categoryService";

const AddCategory = () => {
  const [name, setName] = useState("");
  
  const handleSubmit = async () => {
      try {
          const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
          await categoryService.createCategory({
              name,
              slug,
              status: "Active"
          });
          setName("");
      } catch (error) {
          console.error(error);
      }
  };

  return (
    <>
      {/* Add Category */}
      <div className="modal fade" id="add-units-category">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Add New Category</h4>
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
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="#"
                    className="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button 
                    type="button" 
                    className="btn btn-submit"
                    data-bs-dismiss="modal"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
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
