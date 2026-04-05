import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { SupplierService } from "../services/supplier.service";
import { LocationService } from "../services/location.service";
import type { Country, State, City } from "../services/location.service";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import AddSupplier from "./components/addSupplier";
import EditSupplier from "./components/editSupplier";
import DeleteModal from "../../components/delete-modal";
import TableTopHead from "../../components/table-top-head";
import CommonFooter from "../../components/footer/commonFooter";

const Suppliers = () => {
  const [listData, setListData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<any>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);

  const [countryOptions, setCountryOptions] = useState<Country[]>([]);
  const [stateOptions, setStateOptions] = useState<State[]>([]);
  const [cityOptions, setCityOptions] = useState<City[]>([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [editStateOptions, setEditStateOptions] = useState<State[]>([]);
  const [editCityOptions, setEditCityOptions] = useState<City[]>([]);

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
    if (selectedCountry) fetchStates();
  }, [selectedCountry]);

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
    if (selectedState && selectedCountry) fetchCities();
  }, [selectedState, selectedCountry]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    status: "Active"
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    status: "Active"
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditInputChange = (e: any) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const openEditModal = async (supplier: any) => {
    setEditId(supplier._id);
    const names = supplier.name.split(" ");
    setEditFormData({
      firstName: names[0] || "",
      lastName: names.slice(1).join(" ") || "",
      email: supplier.email || "",
      phone: supplier.phone || "",
      address: supplier.address || "",
      city: supplier.city || "",
      state: supplier.state || "",
      country: supplier.country || "",
      postalCode: supplier.postalCode || "",
      status: supplier.status || "Active"
    });

    // Fetch states and cities for edit modal
    if (supplier.country) {
      try {
        const stateRes = await LocationService.getStates({ countryCode: supplier.country, status: "Active" });
        if (stateRes.status && stateRes.dataFound) setEditStateOptions(stateRes.data);
        
        if (supplier.state) {
          const cityRes = await LocationService.getCities({ 
            countryCode: supplier.country, 
            stateCode: supplier.state, 
            status: "Active" 
          });
          if (cityRes.status && cityRes.dataFound) setEditCityOptions(cityRes.data);
        }
      } catch (error) {
        console.error("Failed to fetch location data for edit:", error);
      }
    }
  };

  const handleEditCountryChange = async (val: string) => {
    setEditFormData({ ...editFormData, country: val, state: "", city: "" });
    setEditCityOptions([]);
    try {
      const response = await LocationService.getStates({ countryCode: val, status: "Active" });
      if (response.status && response.dataFound) setEditStateOptions(response.data);
      else setEditStateOptions([]);
    } catch (error) {
      console.error("Failed to fetch states for edit:", error);
      setEditStateOptions([]);
    }
  };

  const handleEditStateChange = async (val: string) => {
    setEditFormData({ ...editFormData, state: val, city: "" });
    try {
      const response = await LocationService.getCities({ 
        countryCode: editFormData.country, 
        stateCode: val, 
        status: "Active" 
      });
      if (response.status && response.dataFound) setEditCityOptions(response.data);
      else setEditCityOptions([]);
    } catch (error) {
      console.error("Failed to fetch cities for edit:", error);
      setEditCityOptions([]);
    }
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        city: selectedCity,
        state: selectedState,
        country: selectedCountry,
        name: `${formData.firstName} ${formData.lastName}`
      };
      const response = await SupplierService.addSupplier(payload as any);
      if (response.status) {
        Swal.fire({ title: "Success!", text: "Supplier added successfully", icon: "success", confirmButtonText: "OK", customClass: { confirmButton: "btn btn-primary" } });
        fetchSuppliers();
        setFormData({ firstName: "", lastName: "", email: "", phone: "", address: "", city: "", state: "", country: "", postalCode: "", status: "Active" });
        setSelectedCity("");
        setSelectedState("");
        setSelectedCountry("");
        document.getElementById("add-supplier")?.classList.remove("show");
        document.body.classList.remove("modal-open");
        const backdrop = document.getElementsByClassName("modal-backdrop")[0];
        if (backdrop) backdrop.parentNode?.removeChild(backdrop);
      }
    } catch (error: any) {
      Swal.fire({ title: "Error!", text: "Failed to add supplier", icon: "error" });
    }
  };

  const handleUpdateSubmit = async (e: any) => {
    e.preventDefault();
    if (!editId) return;
    try {
      const payload = {
        ...editFormData,
        name: `${editFormData.firstName} ${editFormData.lastName}`
      };
      const response = await SupplierService.updateSupplier(editId, payload as any);
      if (response.status) {
        Swal.fire({ title: "Success!", text: "Supplier updated successfully", icon: "success", confirmButtonText: "OK", customClass: { confirmButton: "btn btn-primary" } });
        fetchSuppliers();
        document.getElementById("edit-supplier")?.classList.remove("show");
        document.body.classList.remove("modal-open");
        const backdrop = document.getElementsByClassName("modal-backdrop")[0];
        if (backdrop) backdrop.parentNode?.removeChild(backdrop);
      }
    } catch (error: any) {
      Swal.fire({ title: "Error!", text: "Failed to update supplier", icon: "error" });
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const response = await SupplierService.deleteSupplier(deleteId);
      if (response.status) {
        Swal.fire({ title: "Deleted!", text: "Supplier has been deleted.", icon: "success", customClass: { confirmButton: "btn btn-primary" } });
        fetchSuppliers();
      }
    } catch (error: any) {
      Swal.fire({ title: "Error!", text: "Failed to delete supplier", icon: "error" });
    }
  };

  const fetchSuppliers = async () => {
    try {
      const response = await SupplierService.getSuppliers({
        search: searchQuery,
        page: currentPage,
        limit: rows
      });
      if (response.status) {
        setListData(response.data);
        setTotalRecords(response.pagination.total);
      }
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, [searchQuery, currentPage, rows]);

  const handlePdfExport = async () => {
    try {
      const blob = await SupplierService.exportSuppliers('pdf');
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `suppliers-${Date.now()}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Export PDF failed:", error);
    }
  };

  const handleExcelExport = async () => {
    try {
      const blob = await SupplierService.exportSuppliers('xlsx');
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `suppliers-${Date.now()}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Export Excel failed:", error);
    }
  };

  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleBulkUpdateStatus = async (newStatus: "Active" | "Inactive") => {
    if (selectedProducts.length === 0) return;
    try {
      const ids = selectedProducts.map((p: any) => p._id || p.id);
      await SupplierService.bulkUpdate(ids, newStatus);
      setSelectedProducts([]);
      fetchSuppliers();
    } catch (error) {
      console.error("Bulk update failed:", error);
    }
  };

  const handleBulkDelete = async () => {
    if (selectedProducts.length === 0) return;
    try {
      const ids = selectedProducts.map((p: any) => p._id || p.id);
      await SupplierService.bulkDelete(ids);
      setSelectedProducts([]);
      fetchSuppliers();
    } catch (error) {
      console.error("Bulk delete failed:", error);
    }
  };
  

  const columns = [
    { header: "Code", field: "code", key: "code" },
    {
      header: "Supplier",
      field: "name",
      key: "name",
      body: (data: any) => (
        <div className="d-flex align-items-center">
          <div className="ms-0">
            <p className="text-gray-9 mb-0">
              <Link to="#">{data.name}</Link>
            </p>
          </div>
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
        <span className={`badge ${data.status === "Active" ? "badge-success" : "badge-danger"} d-inline-flex align-items-center badge-xs`} style={{ minWidth: '85px', justifyContent: 'center' }}>
          <i className="ti ti-point-filled me-1"></i>
          {data.status}
        </span>
      ),
    },
    {
      header: "Actions",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (row: any) => (
        <div className="edit-delete-action">
          <Link
            className="me-2 p-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-supplier"
            onClick={() => openEditModal(row)}
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            onClick={() => setDeleteId(row._id)}
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  const handleSearch = useCallback((value: any) => {
    setSearchQuery(value);
  }, []);

  return (
    <>
      {" "}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Suppliers</h4>
                <h6>Manage your suppliers</h6>
              </div>
            </div>
            <TableTopHead 
              onPdfExport={handlePdfExport} 
              onExcelExport={handleExcelExport} 
            />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-supplier"
              >
                <i className="ti ti-circle-plus me-1" />
                Add Supplier
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
                      onClick={handleBulkDelete}
                    >
                      Bulk Delete ({selectedProducts.length})
                    </button>
                    <div className="dropdown">
                      <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Change Status
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item" onClick={() => handleBulkUpdateStatus("Active")}>Active</button>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => handleBulkUpdateStatus("Inactive")}>Inactive</button>
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
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
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
            </div>
          </div>
          {/* /product list */}
        </div>
       <CommonFooter />
      </div>
      {/* Add Supplier */}
      <AddSupplier 
        formData={formData}
        selectedCity={selectedCity}
        selectedState={selectedState}
        selectedCountry={selectedCountry}
        cityOptions={cityOptions.map((c: any) => ({ label: c.name, value: c.name }))}
        stateOptions={stateOptions.map((s: any) => ({ label: s.name, value: s.name }))}
        countryOptions={countryOptions.map((c: any) => ({ label: c.name, value: c.code }))}
        onInputChange={handleInputChange}
        onSubmit={handleFormSubmit}
        setSelectedCity={setSelectedCity}
        setSelectedState={setSelectedState}
        setSelectedCountry={setSelectedCountry}
        setFormData={setFormData}
      />
      {/* /Add Supplier */}
      <EditSupplier
        editFormData={editFormData}
        countryOptions={countryOptions.map(c => ({ label: c.name, value: c.code }))}
        editStateOptions={editStateOptions.map(s => ({ label: s.name, value: s.name }))}
        editCityOptions={editCityOptions.map(c => ({ label: c.name, value: c.name }))}
        onInputChange={handleEditInputChange}
        onCountryChange={handleEditCountryChange}
        onStateChange={handleEditStateChange}
        onCityChange={(val: string) => setEditFormData({...editFormData, city: val})}
        onStatusChange={(checked: boolean) => setEditFormData({...editFormData, status: checked ? "Active" : "Inactive"})}
        onSubmit={handleUpdateSubmit}
      />
      <DeleteModal onConfirm={handleDelete} title="Are you sure you want to delete this supplier?" />
    </>
  );
};

export default Suppliers;
