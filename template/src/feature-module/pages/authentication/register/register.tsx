import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { appleLogo, facebookLogo, googleLogo, logo, logoWhite } from "../../../../utils/imagepath";
import { register } from "../../../../utils/auth";

const Register = () => {
  const navigate = useNavigate();
  const route = all_routes;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prevState: any) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    setSubmitError("");
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the Terms & Privacy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await register(formData.name, formData.email, formData.password);

      if (response.success) {
        // Redirect to dashboard on success
        navigate(route.dashboard);
      } else {
        setSubmitError(response.message);
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper register-wrap bg-img">
            <div className="login-content authent-content">
              <form onSubmit={handleSubmit}>
                <div className="login-userset">
                  <div className="login-logo logo-normal">
                    <img src={logo} alt="img" />
                  </div>
                  <Link to={route.dashboard} className="login-logo logo-white">
                    <img src={logoWhite} alt="Img" />
                  </Link>
                  <div className="login-userheading">
                    <h3>Register</h3>
                    <h4>Create New Dreamspos Account</h4>
                  </div>
                  
                  {submitError && (
                    <div className="alert alert-danger" role="alert">
                      {submitError}
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">
                      Name <span className="text-danger"> *</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-control border-end-0 ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Enter your name"
                      />
                      <span className="input-group-text border-start-0">
                        <i className="ti ti-user" />
                      </span>
                    </div>
                    {errors.name && (
                      <div className="text-danger small mt-1">{errors.name}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger"> *</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-control border-end-0 ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Enter your email"
                      />
                      <span className="input-group-text border-start-0">
                        <i className="ti ti-mail" />
                      </span>
                    </div>
                    {errors.email && (
                      <div className="text-danger small mt-1">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Password <span className="text-danger"> *</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={passwordVisibility.password ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`pass-input form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Enter your password"
                      />
                      <span
                        className={`ti toggle-password text-gray-9 ${
                          passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("password")}
                      ></span>
                    </div>
                    {errors.password && (
                      <div className="text-danger small mt-1">{errors.password}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Confirm Password <span className="text-danger"> *</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={
                          passwordVisibility.confirmPassword
                            ? "text"
                            : "password"
                        }
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`pass-inputs form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                        placeholder="Confirm your password"
                      />
                      <span
                        className={`ti toggle-passwords text-gray-9 ${
                          passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("confirmPassword")}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <div className="text-danger small mt-1">{errors.confirmPassword}</div>
                    )}
                  </div>
                  <div className="form-login authentication-check">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="custom-control custom-checkbox justify-content-start">
                          <div className="custom-control custom-checkbox">
                            <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                              <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleInputChange}
                              />
                              <span className="checkmarks" />I agree to the{" "}
                              <Link to="#" className="text-primary">
                                Terms &amp; Privacy
                              </Link>
                            </label>
                          </div>
                        </div>
                        {errors.agreeToTerms && (
                          <div className="text-danger small ms-4">{errors.agreeToTerms}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-login">
                    <button
                      type="submit"
                      className="btn btn-login w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                  </div>
                  <div className="signinform">
                    <h4>
                      Already have an account ?{" "}
                      <Link to={route.signin} className="hover-a">
                        Sign In Instead
                      </Link>
                    </h4>
                  </div>
                  <div className="form-setlogin or-text">
                    <h4>OR</h4>
                  </div>
                  <div className="mt-2">
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <div className="text-center me-2 flex-fill">
                        <Link
                          to="#"
                          className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                        >
                          <img
                            className="img-fluid m-1"
                            src={facebookLogo}
                            alt="Facebook"
                          />
                        </Link>
                      </div>
                      <div className="text-center me-2 flex-fill">
                        <Link
                          to="#"
                          className="btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center"
                        >
                          <img
                            className="img-fluid m-1"
                            src={googleLogo}
                            alt="Facebook"
                          />
                        </Link>
                      </div>
                      <div className="text-center flex-fill">
                        <Link
                          to="#"
                          className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                        >
                          <img
                            className="img-fluid m-1"
                            src={appleLogo}
                            alt="Apple"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                    <p>Copyright © 2025 DreamsPOS</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Register;
