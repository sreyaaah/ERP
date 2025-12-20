
import { Link } from 'react-router-dom'

const EditCategoryList = () => {
    return (
        <div className="modal fade" id="edit-category">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="page-wrapper-new p-0">
                        <div className="content">
                            <div className="modal-header">
                                <div className="page-title">
                                    <h4>Edit Category</h4>
                                </div>
                                <button
                                    type="button"
                                    className="close bg-danger text-white fs-16"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Category<span className="text-danger ms-1">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="computers"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Category Slug<span className="text-danger ms-1">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="computers"
                                        />
                                    </div>
                                    <div className="mb-0">
                                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                            <span className="status-label">
                                                Status<span className="text-danger ms-1">*</span>
                                            </span>
                                            <input
                                                type="checkbox"
                                                id="user3"
                                                className="check"
                                                defaultChecked
                                            />
                                            <label htmlFor="user3" className="checktoggle" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <Link
                                    to="#"
                                    data-bs-dismiss="modal"
                                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                                >
                                    Save Changes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditCategoryList
