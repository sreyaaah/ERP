import { customersData } from "../../core/json/customers-data";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import DeleteModal from "../../components/delete-modal";
import CommonSelect from "../../components/select/common-select";
import { user41 } from "../../utils/imagepath";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { CustomerService } from "../services/customer.service";

const Customers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [customerImage, setCustomerImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<any>({});
  const [deleteCustomerCode, setDeleteCustomerCode] = useState<string | null>(null);
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [editCustomer, setEditCustomer] = useState<any | null>(null);

  const normalizeCustomer = (c: any) => ({
    ...c,
    address: c?.address ?? "",
    postalCode: c?.postalCode ?? "",
    city: c?.city ?? "",
    state: c?.state ?? "",
    country: c?.country ?? "",
    gstin: c?.gstin ?? "",
    avatar: c?.avatar ?? user41,
  });

  const [listData, setListData] = useState<any[]>(() => {
    try {
      const stored = CustomerService.getAll();
      const data = Array.isArray(stored) && stored.length
        ? stored
        : customersData;

      return data.map(normalizeCustomer);
    } catch (error) {
      console.error("Customer load failed:", error);
      return [];
    }
  });

  const [statusFilter, setStatusFilter] = useState<
    "All" | "Active" | "Inactive"
  >("All");


  const filteredListData = listData.filter((customer) => {
    if (statusFilter === "All") return true;
    return customer.status === statusFilter;
  });


  const columns = [
    { header: "Code", field: "code", key: "code" },
    {
      header: "Customer",
      field: "customer",
      key: "customer",
      body: (data: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={data.avatar} alt="product" />
          </Link>
          <Link to="#">{data.customer}</Link>
        </div>
      ),
    },
    { header: "Email", field: "email", key: "email" },
    { header: "Phone", field: "phone", key: "phone" },
    { header: "Country", field: "country", key: "country" },
    {
      header: "Status",
      field: "status",
      key: "status",
      body: (data: any) => (
        <span
          className={`d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-${data.status === "Active" ? "success" : "danger"
            } fs-10`}
        >
          <i className="ti ti-point-filled me-1 fs-11"></i>
          {data.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row: any) => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
          >
            <i className="feather icon-eye"></i>
          </Link>
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-customer"
            onClick={() => {
              setEditCustomer({
                ..._row,
                address: _row.address || "",
                postalCode: _row.postalCode || "",
                city: _row.city || "",
                state: _row.state || "",
                country: _row.country || "",
              });

              setSelectedCity(_row.city || "");
              setSelectedState(_row.state || "");
              setSelectedCountry(_row.country || "");
            }}
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            onClick={() => setDeleteCustomerCode(_row.code)}
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    gstin: "",
  });

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert("Image must be less than 2MB");
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setCustomerImage(imageUrl);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteCustomer = () => {
    if (!deleteCustomerCode) return;

    const updated = CustomerService.remove(deleteCustomerCode);
    setListData(updated);


    setDeleteCustomerCode(null);
  };


  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!selectedCity) newErrors.city = "City is required";
    if (!selectedState) newErrors.state = "State is required";
    if (!selectedCountry) newErrors.country = "Country is required";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateCustomerCode = (customers: any[]) => {
    if (!customers || customers.length === 0) return "CU001";

    const numbers = customers
      .map(c => {
        if (typeof c.code === "string" && c.code.startsWith("CU")) {
          return parseInt(c.code.replace("CU", ""), 10);
        }
        return 0;
      })
      .filter(n => !isNaN(n));

    const maxNumber = numbers.length > 0 ? Math.max(...numbers) : 0;
    const nextNumber = maxNumber + 1;

    return `CU${String(nextNumber).padStart(3, "0")}`;
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newCustomer = {
      code: generateCustomerCode(listData),
      customer: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: selectedCity,
      state: selectedState,
      country: selectedCountry,
      postalCode: formData.postalCode,
      gstin: formData.gstin,
      status,
      avatar: customerImage || user41,
    };


    const updated = CustomerService.add(newCustomer);
    setListData(updated.map(normalizeCustomer));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      gstin: "",
    });

    setSelectedCity("");
    setSelectedState("");
    setSelectedCountry("");
    setCustomerImage(null);
    setErrors({});

    const closeBtn = document.getElementById(
      "addCustomerModalClose"
    ) as HTMLButtonElement | null;

    closeBtn?.click();
  };

  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setEditCustomer({
      ...editCustomer,
      avatar: imageUrl,
    });
  };



  const cityOptions = [
    { label: "Select", value: "" },
    { label: "Los Angles", value: "los-angles" },
    { label: "New York City", value: "new-york-city" },
    { label: "Houston", value: "houston" },
  ];

  const stateOptions = [
    { label: "Select", value: "" },
    { label: "California", value: "california" },
    { label: "New York", value: "new-york" },
    { label: "Texas", value: "texas" },
  ];

  const countryOptions = [
    { label: "Select", value: "" },
    { label: "United States", value: "united-states" },
    { label: "Canada", value: "canada" },
    { label: "Germany", value: "germany" },
  ];

  useEffect(() => {
    const stored = CustomerService.getAll();
    if (!stored || stored.length === 0) {
      CustomerService.saveAll(customersData.map(normalizeCustomer));
    }
  }, []);




  return (
    <>
      {" "}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Customers</h4>
                <h6>Manage your customers</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-customer"
              >
                <i className="ti ti-circle-plus me-1" />
                Add Customer
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <button
                        className="dropdown-item rounded-1"
                        onClick={() => setStatusFilter("All")}
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item rounded-1"
                        onClick={() => setStatusFilter("Active")}
                      >
                        Active
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item rounded-1"
                        onClick={() => setStatusFilter("Inactive")}
                      >
                        Inactive
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={filteredListData}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={filteredListData.length}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedProducts}
                  onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0 text-gray-9">
            2014 - 2025 © DreamsPOS. All Right Reserved
          </p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* Add Customer */}
      <div className="modal fade" id="add-customer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Customer</h4>
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
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="new-employee-field">
                  <div className="profile-pic-upload">
                    <div className="profile-pic">
                      {customerImage ? (
                        <img
                          src={customerImage}
                          alt="Customer"
                          className="img-fluid rounded"
                          style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        />
                      ) : (
                        <span>
                          <i className="feather icon-plus-circle plus-down-add" /> Add Image
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <div className="image-upload mb-0">
                        <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} />
                        <div className="image-uploads">
                          <h4>Upload Image</h4>
                        </div>
                      </div>
                      <p className="mt-2">JPEG, PNG up to 2 MB</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Phone<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      className={`form-control ${errors.address ? "is-invalid" : ""}`}
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    {errors.address && <small className="text-danger">{errors.address}</small>}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      City<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      className={`w-100 ${errors.city ? "is-invalid" : ""}`}
                      options={cityOptions}
                      value={selectedCity}
                      filter={true}
                      onChange={(e) => setSelectedCity(e.value)}
                      placeholder="Select City"
                    />
                    {errors.city && <small className="text-danger">{errors.city}</small>}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      State<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      className={`w-100 ${errors.state ? "is-invalid" : ""}`}
                      options={stateOptions}
                      value={selectedState}
                      filter={true}
                      onChange={(e) => setSelectedState(e.value)}
                      placeholder="Select State"
                    />
                    {errors.state && <small className="text-danger">{errors.state}</small>}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Country<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      className={`w-100 ${errors.country ? "is-invalid" : ""}`}
                      options={countryOptions}
                      value={selectedCountry}
                      filter={true}
                      onChange={(e) => setSelectedCountry(e.value)}
                      placeholder="Select Country"
                    />
                    {errors.country && <small className="text-danger">{errors.country}</small>}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Postal Code<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      className={`form-control ${errors.postalCode ? "is-invalid" : ""}`}
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                    {errors.postalCode && <small className="text-danger">{errors.postalCode}</small>}
                  </div>
                  <div className="col-lg-10 mb-3">
                    <label className="form-label">GSTIN</label>
                    <input
                      type="text"
                      name="gstin"
                      className="form-control"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="user-status"
                        className="check"
                        checked={status === "Active"}
                        onChange={(e) =>
                          setStatus(e.target.checked ? "Active" : "Inactive")
                        }
                      />
                      <label htmlFor="user-status" className="checktoggle"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Add Customer
                </button>
                <button
                  type="button"
                  id="addCustomerModalClose"
                  className="d-none"
                  data-bs-dismiss="modal"
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Edit Customer */}
      <div className="modal fade" id="edit-customer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Customer</h4>
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
                <form>
                  <div className="modal-body">
                    <div className="new-employee-field">
                      <div className="profile-pic-upload image-field">
                        <div className="profile-pic p-2">
                          <img
                            src={editCustomer?.avatar || user41}
                            className="object-fit-cover h-100 rounded-1"
                            alt="customer"
                          />
                          <button type="button" className="close rounded-1">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="mb-3">
                          <div className="image-upload mb-0">
                            <input
                              type="file"
                              accept="image/png, image/jpeg"
                              onChange={handleEditImageChange}
                            />
                            <div className="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                          <p className="mt-2">JPEG, PNG up to 2 MB</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          First Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={editCustomer?.customer?.split(" ")[0] || ""}
                          onChange={(e) =>
                            setEditCustomer({
                              ...editCustomer,
                              customer: `${e.target.value} ${editCustomer?.customer?.split(" ")[1] || ""}`,
                            })
                          }
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Last Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={editCustomer?.customer?.split(" ")[1] || ""}
                          onChange={(e) =>
                            setEditCustomer({
                              ...editCustomer,
                              customer: `${editCustomer?.customer?.split(" ")[0] || ""} ${e.target.value}`,
                            })
                          }
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Email<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={editCustomer?.email || ""}
                          onChange={(e) =>
                            setEditCustomer({ ...editCustomer, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Phone<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          value={editCustomer?.phone || ""}
                          onChange={(e) =>
                            setEditCustomer({ ...editCustomer, phone: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Address<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={editCustomer?.address || ""}
                          onChange={(e) =>
                            setEditCustomer({
                              ...editCustomer,
                              address: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          City<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={cityOptions}
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}
                          placeholder="Select City"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          State<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={stateOptions}
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.value)}
                          placeholder="Select State"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Country<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={countryOptions}
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.value)}
                          placeholder="Select Country"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Postal Code<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={editCustomer?.postalCode || ""}
                          onChange={(e) =>
                            setEditCustomer({
                              ...editCustomer,
                              postalCode: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-lg-10 mb-3">
                        <label className="form-label">GSTIN</label>
                        <input
                          type="text"
                          name="gstin"
                          className="form-control"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user2"
                            className="check"
                            checked={editCustomer?.status === "Active"}
                            onChange={(e) =>
                              setEditCustomer({
                                ...editCustomer,
                                status: e.target.checked ? "Active" : "Inactive",
                              })
                            }
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
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        const updated = listData.map((c) =>
                          c.code === editCustomer.code ? editCustomer : c
                        );
                        setListData(updated);
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal onConfirm={handleDeleteCustomer} />
    </>
  );
};

export default Customers;
