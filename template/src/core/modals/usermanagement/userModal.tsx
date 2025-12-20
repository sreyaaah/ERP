import { useState } from "react";
import CommonSelect from "../../../components/select/common-select";
import { user49 } from "../../../utils/imagepath";

const UserModal = () => {
    const status = [
        { value: "Choose", label: "Choose" },
        { value: "Manager", label: "Manager" },
        { value: "Admin", label: "Admin" },
      ];
      const [showPassword, setShowPassword] = useState(false);
      const [selectedStatus, setSelectedStatus] = useState(null);
      const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
      const [showConfirmPassword, setConfirmPassword] = useState(false);
      const handleToggleConfirmPassword = () => {
        setConfirmPassword((prevShowPassword) => !prevShowPassword);
      };

  return (
    <>
      {/* Add User */}
      <div className="modal fade" id="add-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add User</h4>
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
                <form action="users.html">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="new-employee-field">
                          <div className="profile-pic-upload mb-2">
                            <div className="profile-pic">
                              <span>
                                <i className="feather icon-plus-circle plus-down-add" />
                                Add Image
                              </span>
                            </div>
                            <div className="mb-0">
                              <div className="image-upload mb-0">
                                <input type="file" />
                                <div className="image-uploads">
                                  <h4>Upload Image</h4>
                                </div>
                              </div>
                              <p className="fs-13 mt-2">JPEG, PNG up to 2 MB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            User<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Role<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={status}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Email<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="tel" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Password<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="pass-input form-control"
                              placeholder="Enter your password"
                            />
                            <span
                              className={`ti toggle-password text-gray-9 ${showPassword ? "ti-eye" : "ti-eye-off"}`}
                              onClick={handleTogglePassword}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Confirm Password
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              className="pass-input form-control"
                              placeholder="Enter your password"
                            />
                            <span
                              className={`ti  toggle-password text-gray-9 ${showConfirmPassword ? "ti-eye" : "ti-eye-off"}`}
                              onClick={handleToggleConfirmPassword}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user1"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user1" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add User */}
      {/* Edit User */}
      <div className="modal fade" id="edit-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit User</h4>
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
                <form action="users.html">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="new-employee-field">
                          <div className="profile-pic-upload image-field">
                            <div className="profile-pic p-2">
                              <img
                                src={user49}
                                className="object-fit-cover h-100 rounded-1"
                                alt="user"
                              />
                              <button type="button" className="close rounded-1">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="mb-3">
                              <div className="image-upload mb-0">
                                <input type="file" />
                                <div className="image-uploads">
                                  <h4>Change Image</h4>
                                </div>
                              </div>
                              <p className="mt-2">JPEG, PNG up to 2 MB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            User<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Henry Bryant"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Role<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={status}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Email<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue="henry@example.com"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            defaultValue={+12498345785}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Password<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="pass-input form-control"
                              placeholder="Enter your password"
                            />
                            <span
                              className={`ti toggle-password text-gray-9 ${showPassword ? "ti-eye" : "ti-eye-off"}`}
                              onClick={handleTogglePassword}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Confirm Password
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              className="pass-input form-control"
                              placeholder="Enter your password"
                            />
                            <span
                              className={`ti   toggle-password text-gray-9 ${showConfirmPassword ? "ti-eye" : "ti-eye-off"}`}
                              onClick={handleToggleConfirmPassword}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user2"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user2" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit User */}
    </>
  );
};

export default UserModal;
