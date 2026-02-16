import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import DeleteModal from "../../components/delete-modal";
import { user41 } from "../../utils/imagepath";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { CustomerService } from "../services/customer.service";
import type { Customer } from "../services/customer.service";
import AddCustomers from "./components/addCustomers";
import EditCustomers from "./components/editCustomers";

const Customers = () => {
  const location = useLocation();

  // State management
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [customerImage, setCustomerImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<any>({});
  const [deleteCustomerId, setDeleteCustomerId] = useState<string | null>(null);
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [editCustomer, setEditCustomer] = useState<any | null>(null);
  const [listData, setListData] = useState<any[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");

  // Open add customer modal if navigated from another page
  useEffect(() => {
    if (location.state?.openAddCustomer) {
      const btn = document.getElementById("add-customer-btn");
      if (btn) {
        btn.click();
      }
    }
  }, [location]);

  // Fetch customers from backend
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await CustomerService.getCustomers({
        page: currentPage,
        limit: rows,
        search: searchQuery,
        status: statusFilter === "All" ? undefined : statusFilter,
        sortBy: "createdAt",
        sortOrder: "desc",
      });

      if (response.status && response.dataFound) {
        // Transform data to match frontend structure
        const transformedData = response.data.map((c: any) => ({
          ...c,
          id: c.id || c._id,
          customer: c.customer || `${c.firstName || ""} ${c.lastName || ""}`.trim(),
          avatar: c.avatar || user41,
          address: c.address || "",
          postalCode: c.postalCode || "",
          city: c.city || "",
          state: c.state || "",
          country: c.country || "",
          gstin: c.gstin || "",
        }));
        setListData(transformedData);
        setTotalRecords(response.pagination.total);
      } else {
        setListData([]);
        setTotalRecords(0);
      }
    } catch (error: any) {
      console.error("Failed to fetch customers:", error);

      // Show specific error message based on error type
      let errorMessage = "Failed to load customers.";

      if (error.response) {
        // Server responded with error
        const status = error.response.status;
        if (status === 401) {
          errorMessage = "Authentication required. Please login first.";
        } else if (status === 403) {
          errorMessage = "You don't have permission to view customers.";
        } else if (status === 500) {
          errorMessage = "Server error. Please try again later.";
        } else {
          errorMessage = `Error ${status}: ${error.response.data?.message || "Failed to load customers"}`;
        }
      } else if (error.request) {
        // Request made but no response
        errorMessage = "Cannot connect to server. Please check if the backend is running on http://localhost:5000";
      }

      alert(errorMessage);
      setListData([]);
      setTotalRecords(0);
    } finally {
      setLoading(false);
    }
  };

  // Fetch customers on mount and when dependencies change
  useEffect(() => {
    fetchCustomers();
  }, [currentPage, rows, searchQuery, statusFilter]);

  const columns = [
    { header: "Code", field: "code", key: "code" },
    {
      header: "Customer",
      field: "customer",
      key: "customer",
      body: (data: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={data.avatar} alt="customer" />
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
            onClick={() => setDeleteCustomerId(_row.id || _row._id)}
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
    setCurrentPage(1); // Reset to first page on search
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

  const handleDeleteCustomer = async () => {
    if (!deleteCustomerId) return;

    try {
      setLoading(true);
      await CustomerService.deleteCustomer(deleteCustomerId);
      alert("Customer deleted successfully!");
      fetchCustomers(); // Refresh the list
      setDeleteCustomerId(null);
    } catch (error: any) {
      console.error("Delete failed:", error);
      alert("Failed to delete customer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!selectedCity) newErrors.city = "City is required";
    if (!selectedState) newErrors.state = "State is required";
    if (!selectedCountry) newErrors.country = "Country is required";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      const customerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: selectedCity,
        state: selectedState,
        country: selectedCountry,
        postalCode: formData.postalCode,
        gstin: formData.gstin,
        status,
      };

      await CustomerService.addCustomer(customerData);
      alert("Customer added successfully!");

      // Reset form
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

      // Close modal
      const closeBtn = document.getElementById(
        "addCustomerModalClose"
      ) as HTMLButtonElement | null;
      closeBtn?.click();

      // Refresh list
      fetchCustomers();
    } catch (error: any) {
      console.error("Add customer failed:", error);
      alert("Failed to add customer. Please try again.");
    } finally {
      setLoading(false);
    }
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

  const handleEditSave = async () => {
    if (!editCustomer || !editCustomer.id) return;

    try {
      setLoading(true);

      // Extract first and last name from customer field
      const nameParts = editCustomer.customer?.split(" ") || ["", ""];
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const updateData = {
        firstName,
        lastName,
        email: editCustomer.email,
        phone: editCustomer.phone,
        address: editCustomer.address,
        city: selectedCity,
        state: selectedState,
        country: selectedCountry,
        postalCode: editCustomer.postalCode,
        gstin: editCustomer.gstin,
        status: editCustomer.status,
      };

      await CustomerService.updateCustomer(editCustomer.id, updateData);
      alert("Customer updated successfully!");
      fetchCustomers(); // Refresh the list
    } catch (error: any) {
      console.error("Update failed:", error);
      alert("Failed to update customer. Please try again.");
    } finally {
      setLoading(false);
    }
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
                id="add-customer-btn"
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
                        onClick={() => {
                          setStatusFilter("All");
                          setCurrentPage(1);
                        }}
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setStatusFilter("Active");
                          setCurrentPage(1);
                        }}
                      >
                        Active
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item rounded-1"
                        onClick={() => {
                          setStatusFilter("Inactive");
                          setCurrentPage(1);
                        }}
                      >
                        Inactive
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              {loading && (
                <div className="text-center p-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {!loading && (
                <div className="table-responsive">
                  <PrimeDataTable
                    column={columns}
                    data={listData}
                    rows={rows}
                    setRows={setRows}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalRecords={totalRecords}
                    searchQuery={searchQuery}
                    selectionMode="checkbox"
                    selection={selectedProducts}
                    onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                  />
                </div>
              )}
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
      <div className="modal fade" id="add-customer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <AddCustomers
              formData={formData}
              errors={errors}
              status={status}
              selectedCity={selectedCity}
              selectedState={selectedState}
              selectedCountry={selectedCountry}
              customerImage={customerImage}
              cityOptions={cityOptions}
              stateOptions={stateOptions}
              countryOptions={countryOptions}
              onInputChange={handleInputChange}
              onImageChange={handleImageChange}
              onSubmit={handleSubmit}
              setSelectedCity={setSelectedCity}
              setSelectedState={setSelectedState}
              setSelectedCountry={setSelectedCountry}
              setStatus={setStatus}
            />
          </div>
        </div>
      </div>
      <div className="modal fade" id="edit-customer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <EditCustomers
              editCustomer={editCustomer}
              setEditCustomer={setEditCustomer}
              selectedCity={selectedCity}
              selectedState={selectedState}
              selectedCountry={selectedCountry}
              cityOptions={cityOptions}
              stateOptions={stateOptions}
              countryOptions={countryOptions}
              onImageChange={handleEditImageChange}
              onSave={handleEditSave}
              setSelectedCity={setSelectedCity}
              setSelectedState={setSelectedState}
              setSelectedCountry={setSelectedCountry}
            />
          </div>
        </div>
      </div>
      <DeleteModal onConfirm={handleDeleteCustomer} />
    </>
  );
};

export default Customers;
