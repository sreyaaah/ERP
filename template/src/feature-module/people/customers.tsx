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
import { LocationService } from "../services/location.service";
import type { Country, State, City } from "../services/location.service";
import AddCustomers from "./components/addCustomers";
import EditCustomers from "./components/editCustomers";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const IMG_BASE_URL = API_URL.replace("/api", "");


const Customers = () => {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [customerImage, setCustomerImage] = useState<string | null>(null);
  const [customerImageFile, setCustomerImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<any>({});
  const [deleteCustomerId, setDeleteCustomerId] = useState<string | null>(null);
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [editCustomer, setEditCustomer] = useState<any | null>(null);
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [listData, setListData] = useState<any[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");
  const [deleteType, setDeleteType] = useState<"single" | "bulk">("single");

  const [countryOptions, setCountryOptions] = useState<Country[]>([]);
  const [stateOptions, setStateOptions] = useState<State[]>([]);
  const [cityOptions, setCityOptions] = useState<City[]>([]);

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
          // Display uploaded avatar from backend or fallback to default
          avatar: c.avatar ? `${IMG_BASE_URL}${c.avatar}` : user41,
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
            <img 
              src={data.avatar || user41} 
              alt="customer" 
            />
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
          className={`badge ${data.status === "Active" ? "bg-success" : "bg-danger"} fw-medium fs-10`}
          style={{ width: "80px", textAlign: "center", display: "inline-block" }}
        >
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
            onClick={async (e) => {
              e.preventDefault();
              try {
                const blob = await CustomerService.getCustomerReport(_row.id);
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `customer-report-${_row.code || 'details'}.pdf`);
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.URL.revokeObjectURL(url);
              } catch (error) {
                console.error("Failed to generate report:", error);
                alert("Failed to generate customer report. Please try again.");
              }
            }}
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
            onClick={() => {
              setDeleteCustomerId(_row.id || _row._id);
              setDeleteType("single");
            }}
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
    setCurrentPage(1);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be less than 5MB");
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setCustomerImage(imageUrl);
      setCustomerImageFile(file);
    }
  };

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case "firstName":
        if (!value.trim()) newErrors.firstName = "First name is required";
        else if (value.length < 2) newErrors.firstName = "First name must be at least 2 characters";
        else delete newErrors.firstName;
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) newErrors.email = "Please provide a valid email address";
        else delete newErrors.email;
        break;
      case "phone":
        const phoneRegex = /^\+?[0-9\s-]{10,20}$/;
        if (!value.trim()) newErrors.phone = "Phone number is required";
        else if (!phoneRegex.test(value)) newErrors.phone = "Phone number must be 10-20 characters (digits, spaces, dashes or +)";
        else delete newErrors.phone;
        break;
      case "address":
        if (!value.trim()) newErrors.address = "Address is required";
        else delete newErrors.address;
        break;
      case "postalCode":
        const postalRegex = /^[A-Za-z0-9\s-]{3,10}$/;
        if (!value.trim()) newErrors.postalCode = "Postal code is required";
        else if (!postalRegex.test(value)) newErrors.postalCode = "Invalid postal code format";
        else delete newErrors.postalCode;
        break;
      case "gstin":
        if (value && value.length > 15) newErrors.gstin = "GSTIN should not exceed 15 characters";
        else delete newErrors.gstin;
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      if (deleteType === "single" && deleteCustomerId) {
        await CustomerService.deleteCustomer(deleteCustomerId);
        setDeleteCustomerId(null);
      } else if (deleteType === "bulk" && selectedProducts.length > 0) {
        const ids = selectedProducts.map((p: any) => p.id);
        await CustomerService.bulkDelete(ids);
        setSelectedProducts([]);
      }
      fetchCustomers();
    } catch (error: any) {
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    const trimmedData = {
      firstName: formData.firstName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      postalCode: formData.postalCode.trim(),
    };

    if (!trimmedData.firstName)
      newErrors.firstName = "First name is required";
    if (!trimmedData.phone) newErrors.phone = "Phone number is required";
    
    const phoneRegex = /^\+?[0-9\s-]{10,20}$/;
    if (trimmedData.phone && !phoneRegex.test(trimmedData.phone))
      newErrors.phone = "Phone number must be 10-20 characters (digits, spaces, dashes or +)";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (trimmedData.email && !emailRegex.test(trimmedData.email))
      newErrors.email = "Please provide a valid email address";

    if (!trimmedData.address) newErrors.address = "Address is required";
    if (!selectedCity) newErrors.city = "City is required";
    if (!selectedState) newErrors.state = "State is required";
    if (!selectedCountry) newErrors.country = "Country is required";
    if (!trimmedData.postalCode)
      newErrors.postalCode = "Postal code is required";
    
    const postalRegex = /^[A-Za-z0-9\s-]{3,10}$/;
    if (trimmedData.postalCode && !postalRegex.test(trimmedData.postalCode))
      newErrors.postalCode = "Invalid postal code format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please check the form for errors. Ensure all required fields (marked with *) are filled correctly.");
      return;
    }

    try {
      setLoading(true);
      
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', String(formData.firstName.trim()));
      formDataToSend.append('lastName', String(formData.lastName.trim()));
      formDataToSend.append('email', String(formData.email.trim()));
      formDataToSend.append('phone', String(formData.phone.trim()));
      formDataToSend.append('address', String(formData.address.trim()));
      formDataToSend.append('city', String(selectedCity));
      formDataToSend.append('state', String(selectedState));
      formDataToSend.append('country', String(selectedCountry));
      formDataToSend.append('postalCode', String(formData.postalCode.trim()));
      formDataToSend.append('gstin', String(formData.gstin.trim() || ''));
      formDataToSend.append('status', String(status));
      if (customerImageFile) {
        formDataToSend.append('avatar', customerImageFile);
      }

      await CustomerService.addCustomer(formDataToSend);

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
      setCustomerImageFile(null);
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
      
      // Show backend validation errors if available
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
        alert("Please fix the validation errors shown on the form.");
      } else if (error.response?.data?.message) {
        const message = error.response.data.message;
        alert(message);
        if (message.includes("email")) setErrors({ email: message });
        else if (message.includes("phone")) setErrors({ phone: message });
        else if (message.includes("gstin")) setErrors({ gstin: message });
        else setErrors({ firstName: message });
      } else {
        alert("An error occurred while adding the customer. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];

    if (file.size > 5 * 1024 * 1024) {
      console.error("Image must be less than 5MB");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setEditCustomer({
      ...editCustomer,
      avatar: imageUrl,
    });
    
    setEditImageFile(file);
  };

  const handleEditSave = async () => {
    if (!editCustomer || !editCustomer.id) return;

    try {
      setLoading(true);
      const nameParts = editCustomer.customer?.split(" ") || ["", ""];
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const formDataToSend = new FormData();
      formDataToSend.append('firstName', String(firstName.trim()));
      formDataToSend.append('lastName', String(lastName.trim()));
      formDataToSend.append('email', String(editCustomer.email.trim()));
      formDataToSend.append('phone', String(editCustomer.phone.trim()));
      formDataToSend.append('address', String(editCustomer.address.trim()));
      formDataToSend.append('city', String(selectedCity));
      formDataToSend.append('state', String(selectedState));
      formDataToSend.append('country', String(selectedCountry));
      formDataToSend.append('postalCode', String(editCustomer.postalCode.trim()));
      formDataToSend.append('gstin', String(editCustomer.gstin?.trim() || ''));
      formDataToSend.append('status', String(editCustomer.status));
      
      if (editImageFile) {
        formDataToSend.append('avatar', editImageFile);
      }

      await CustomerService.updateCustomer(editCustomer.id as string, formDataToSend)
      setEditImageFile(null);
      
      // Close modal
      const closeBtn = document.getElementById(
        "editCustomerModalClose"
      ) as HTMLButtonElement | null;
      closeBtn?.click();

      fetchCustomers(); 
    } catch (error: any) {
      console.error("Update failed:", error);
      
      // Show backend validation errors if available
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
        alert("Please fix the validation errors shown on the form.");
      } else if (error.response?.data?.message) {
        const message = error.response.data.message;
        alert(message);
        if (message.includes("email")) setErrors({ email: message });
        else if (message.includes("phone")) setErrors({ phone: message });
        else if (message.includes("gstin")) setErrors({ gstin: message });
        else setErrors({ firstName: message });
      } else {
        alert("An error occurred while updating the customer. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Export handlers
  const handleExportExcel = async () => {
    try {
      setLoading(true);
      const blob = await CustomerService.exportCustomers('xlsx');
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `customers-${Date.now()}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error("Export Excel failed:", error);
      alert("Failed to export Excel file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleExportPDF = async () => {
    try {
      setLoading(true);
      const blob = await CustomerService.exportCustomers('pdf');
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `customers-${Date.now()}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error("Export PDF failed:", error);
      alert("Failed to export PDF file. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleBulkUpdateStatus = async (newStatus: "Active" | "Inactive") => {
    if (selectedProducts.length === 0) {
      console.warn("Please select customers to update");
      return;
    }


    try {
      setLoading(true);
      const ids = selectedProducts.map((p: any) => p.id);
      await CustomerService.bulkUpdate(ids, newStatus);
      setSelectedProducts([]);
      fetchCustomers();
    } catch (error: any) {
      console.error("Bulk update failed:", error);
    } finally {
      setLoading(false);
    }
  };


  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await LocationService.getCountries({ status: "Active" });
        if (response.status && response.dataFound) {
          setCountryOptions(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) {
        setStateOptions([]);
        return;
      }

      try {
        const response = await LocationService.getStates({
          countryCode: selectedCountry,
          status: "Active"
        });
        if (response.status && response.dataFound) {
          setStateOptions(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch states:", error);
        setStateOptions([]);
      }
    };
    fetchStates();
  }, [selectedCountry]);

  // Fetch cities when state changes
  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState || !selectedCountry) {
        setCityOptions([]);
        return;
      }

      try {
        const response = await LocationService.getCities({
          countryCode: selectedCountry,
          stateCode: selectedState,
          status: "Active"
        });
        if (response.status && response.dataFound) {
          setCityOptions(response.data);
        } else {
          setCityOptions([]);
        }
      } catch (error) {
        console.error("Failed to fetch cities:", error);
        setCityOptions([]);
      }
    };
    fetchCities();
  }, [selectedState, selectedCountry]);

  const resetAddForm = () => {
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
    setCustomerImageFile(null);
    setErrors({});
  };

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
              <TooltipIcons 
                onExcelClick={handleExportExcel}
                onPdfClick={handleExportPDF}
              />
              <RefreshIcon onClick={fetchCustomers} />
              <CollapesIcon />
            </ul>


            <div className="page-btn">
              <Link
                to="#"
                id="add-customer-btn"
                className="btn btn-primary text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-customer"
                onClick={resetAddForm}
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
                {selectedProducts.length > 0 && (
                  <div className="d-flex align-items-center me-2">
                    <button 
                      className="btn btn-danger btn-sm me-2" 
                      data-bs-toggle="modal" 
                      data-bs-target="#delete-modal"
                      onClick={() => setDeleteType("bulk")}
                    >
                      Bulk Delete ({selectedProducts.length})
                    </button>
                    <div className="dropdown">
                      <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Change Status
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button 
                            className="dropdown-item" 
                            onClick={() => handleBulkUpdateStatus("Active")}
                          >
                            Active
                          </button>
                        </li>
                        <li>
                          <button 
                            className="dropdown-item" 
                            onClick={() => handleBulkUpdateStatus("Inactive")}
                          >
                            Inactive
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
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
              setSelectedCountry={(val) => {
                setSelectedCountry(val);
                setSelectedState("");
                setSelectedCity("");
              }}
              setSelectedState={(val) => {
                setSelectedState(val);
                setSelectedCity("");
              }}
              setSelectedCity={setSelectedCity}
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
              errors={errors}
              validateField={validateField}
              selectedCity={selectedCity}
              selectedState={selectedState}
              selectedCountry={selectedCountry}
              cityOptions={cityOptions}
              stateOptions={stateOptions}
              countryOptions={countryOptions}
              onImageChange={handleEditImageChange}
              onSave={handleEditSave}
              setSelectedCity={setSelectedCity}
              setSelectedState={(val) => {
                setSelectedState(val);
                setSelectedCity("");
              }}
              setSelectedCountry={(val) => {
                setSelectedCountry(val);
                setSelectedState("");
                setSelectedCity("");
              }}
            />
          </div>
        </div>
      </div>
      <DeleteModal onConfirm={handleConfirmDelete} />
    </>
  );
};

export default Customers;
