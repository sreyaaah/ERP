import React, { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { appleLogo, facebookLogo, googleLogo, logoSvg, logoWhitePng } from "../../../../utils/imagepath";
import { login } from "../../../../utils/auth";

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const route = all_routes;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const togglePasswordVisibility = (): void => {
    setPasswordVisible((prevState: boolean) => !prevState);
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
      const response = await login(formData.email, formData.password);

      if (response.success) {
        // Save remember me preference
        if (formData.rememberMe) {
          localStorage.setItem("remember_email", formData.email);
        } else {
          localStorage.removeItem("remember_email");
        }

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

  // Load remembered email on component mount, or use hardcoded credentials
  React.useEffect(() => {
    const rememberedEmail = localStorage.getItem("remember_email");
    if (rememberedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: rememberedEmail,
        rememberMe: true,
      }));
    } else {
      // Pre-fill with hardcoded credentials if no remembered email
      setFormData((prev) => ({
        ...prev,
        email: "example@example.com",
        password: "123456",
      }));
    }
  }, []);

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper bg-img">
            <div className="login-content authent-content">
              <form onSubmit={handleSubmit}>
                <div className="login-userset">
                  <div className="login-logo logo-normal">
                    <img src={logoSvg} alt="img" />
                  </div>
                  <Link to={route.newdashboard} className="login-logo logo-white">
                    <img src={logoWhitePng} alt="Img" />
                  </Link>
                  <div className="login-userheading">
                    <h3>Sign In</h3>
                    <h4 className="fs-16">
                      Access the Dreamspos panel using your email and passcode.
                    </h4>
                  </div>

                  {submitError && (
                    <div className="alert alert-danger" role="alert">
                      {submitError}
                    </div>
                  )}

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
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`pass-input form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Enter your password"
                      />
                      <span
                        className={`ti toggle-password text-gray-9 ${
                          isPasswordVisible ? "ti-eye" : "ti-eye-off"
                        }`}
                        onClick={togglePasswordVisibility}
                      ></span>
                    </div>
                    {errors.password && (
                      <div className="text-danger small mt-1">{errors.password}</div>
                    )}
                  </div>
                  <div className="form-login authentication-check">
                    <div className="row">
                      <div className="col-12 d-flex align-items-center justify-content-between">
                        <div className="custom-control custom-checkbox">
                          <label className="checkboxs ps-4 mb-0 pb-0 line-height-1 fs-16 text-gray-6">
                            <input
                              type="checkbox"
                              name="rememberMe"
                              checked={formData.rememberMe}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            <span className="checkmarks" />
                            Remember me
                          </label>
                        </div>
                        <div className="text-end">
                          <Link
                            className="text-orange fs-16 fw-medium"
                            to={route.forgotPassword}
                          >
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-login">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                  </div>
                  <div className="signinform">
                    <h4>
                      New on our platform?
                      <Link to={route.register} className="hover-a">
                        {" "}
                        Create an account
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
                            alt="google"
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

export default Signin;
