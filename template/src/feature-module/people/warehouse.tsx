import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { WarehouseService } from "../services/warehouse.service";
import { LocationService } from "../services/location.service";
import type { Country, State, City } from "../services/location.service";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import AddWarehouse from "./components/addWarehouse";
import EditWarehouse from "./components/editWarehouse";
import DeleteModal from "../../components/delete-modal";
import TableTopHead from "../../components/table-top-head";
import CommonFooter from "../../components/footer/commonFooter";

const Warehouse = () => {
  const [listData, setListData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<any>(0);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [selectedWarehouses, setSelectedWarehouses] = useState<any[]>([]);

  const [countryOptions, setCountryOptions] = useState<Country[]>([]);
  const [stateOptions, setStateOptions] = useState<State[]>([]);
  const [cityOptions, setCityOptions] = useState<City[]>([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [editStateOptions, setEditStateOptions] = useState<State[]>([]);
  const [editCityOptions, setEditCityOptions] = useState<City[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    status: "Active",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    status: "Active",
  });

  const fetchWarehouses = useCallback(async () => {
    try {
      const response = await WarehouseService.getWarehouses({
        page: currentPage,
        limit: rows,
        search: searchQuery,
      });
      if (response.status) {
        setListData(response.data);
        setTotalRecords(response.pagination.total);
      }
    } catch (error) {
      console.error("Failed to fetch warehouses:", error);
    }
  }, [currentPage, rows, searchQuery]);

  useEffect(() => {
    fetchWarehouses();
  }, [fetchWarehouses]);

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

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditInputChange = (e: any) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditCountryChange = async (val: string) => {
    setEditFormData({ ...editFormData, country: val, state: "", city: "" });
    try {
      const response = await LocationService.getStates({ countryCode: val, status: "Active" });
      if (response.status && response.dataFound) {
        setEditStateOptions(response.data);
      } else {
        setEditStateOptions([]);
      }
    } catch (error) {
      console.error("Failed to fetch states for edit:", error);
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
      if (response.status && response.dataFound) {
        setEditCityOptions(response.data);
      } else {
        setEditCityOptions([]);
      }
    } catch (error) {
      console.error("Failed to fetch cities for edit:", error);
    }
  };

  const openEditModal = async (warehouse: any) => {
    setEditId(warehouse._id);
    const countryRes = await LocationService.getCountries({ status: "Active" });
    const countryObj = countryRes.data?.find((c: any) => c.name === warehouse.country || c.code === warehouse.country);
    const countryCode = countryObj?.code || warehouse.country;

    setEditFormData({
      name: warehouse.name || "",
      contactPerson: warehouse.contactPerson || "",
      email: warehouse.email || "",
      phone: warehouse.phone || "",
      address: warehouse.address || "",
      postalCode: warehouse.postalCode || "",
      city: warehouse.city || "",
      state: warehouse.state || "",
      country: countryCode || "",
      status: warehouse.status || "Active",
    });

    if (countryCode) {
      const stateRes = await LocationService.getStates({ countryCode: countryCode, status: "Active" });
      setEditStateOptions(stateRes.data || []);
      
      if (warehouse.state) {
        const cityRes = await LocationService.getCities({
          countryCode: countryCode,
          stateCode: warehouse.state,
          status: "Active"
        });
        setEditCityOptions(cityRes.data || []);
      }
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
      };
      const response = await WarehouseService.addWarehouse(payload as any);
      if (response.status) {
        Swal.fire({ title: "Success!", text: "Warehouse added successfully", icon: "success", confirmButtonText: "OK", customClass: { confirmButton: "btn btn-primary" } });
        fetchWarehouses();
        setFormData({
          name: "",
          contactPerson: "",
          email: "",
          phone: "",
          address: "",
          postalCode: "",
          city: "",
          state: "",
          country: "",
          status: "Active"
        });
        setSelectedCity("");
        setSelectedState("");
        setSelectedCountry("");
        document.getElementById("add-warehouse")?.classList.remove("show");
        document.body.classList.remove("modal-open");
        const backdrop = document.getElementsByClassName("modal-backdrop")[0];
        if (backdrop) backdrop.parentNode?.removeChild(backdrop);
      }
    } catch (error) {
      Swal.fire({ title: "Error!", text: "Failed to add warehouse", icon: "error" });
    }
  };

  const handleUpdateSubmit = async (e: any) => {
    e.preventDefault();
    if (!editId) return;
    try {
      const response = await WarehouseService.updateWarehouse(editId, editFormData as any);
      if (response.status) {
        Swal.fire({ title: "Success!", text: "Warehouse updated successfully", icon: "success", confirmButtonText: "OK", customClass: { confirmButton: "btn btn-primary" } });
        fetchWarehouses();
        document.getElementById("edit-warehouse")?.classList.remove("show");
        document.body.classList.remove("modal-open");
        const backdrop = document.getElementsByClassName("modal-backdrop")[0];
        if (backdrop) backdrop.parentNode?.removeChild(backdrop);
      }
    } catch (error) {
      Swal.fire({ title: "Error!", text: "Failed to update warehouse", icon: "error" });
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const response = await WarehouseService.deleteWarehouse(deleteId);
      if (response.status) {
        Swal.fire({ title: "Deleted!", text: "Warehouse has been deleted.", icon: "success", confirmButtonText: "OK", customClass: { confirmButton: "btn btn-primary" } });
        fetchWarehouses();
      }
    } catch (error) {
      Swal.fire({ title: "Error!", text: "Failed to delete warehouse", icon: "error" });
    }
  };

  const handleBulkDelete = async () => {
    if (selectedWarehouses.length === 0) return;
    try {
      const ids = selectedWarehouses.map((w: any) => w._id || w.id);
      const response = await WarehouseService.bulkDelete(ids);
      if (response.status) {
        Swal.fire({ title: "Deleted!", text: "Selected warehouses have been deleted.", icon: "success" });
        setSelectedWarehouses([]);
        fetchWarehouses();
      }
    } catch (error) {
      console.error("Bulk delete failed:", error);
    }
  };

  const handleBulkUpdateStatus = async (newStatus: "Active" | "Inactive") => {
    if (selectedWarehouses.length === 0) return;
    try {
      const ids = selectedWarehouses.map((w: any) => w._id || w.id);
      const response = await WarehouseService.bulkUpdate(ids, newStatus);
      if (response.status) {
        Swal.fire({ title: "Updated!", text: `Selected warehouses set to ${newStatus}.`, icon: "success" });
        setSelectedWarehouses([]);
        fetchWarehouses();
      }
    } catch (error) {
      console.error("Bulk update failed:", error);
    }
  };

  const handlePdfExport = async () => {
    try {
      const resp = await WarehouseService.exportWarehouses('pdf');
      const url = window.URL.createObjectURL(new Blob([resp]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'warehouses.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Export PDF failed:", error);
    }
  };

  const handleExcelExport = async () => {
    try {
      const resp = await WarehouseService.exportWarehouses('xlsx');
      const url = window.URL.createObjectURL(new Blob([resp]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'warehouses.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Export Excel failed:", error);
    }
  };

  const columns = [
    { header: "Warehouse", field: "name", key: "name", sortable: true },
    { header: "Contact Person", field: "contactPerson", key: "contactPerson", sortable: true },
    { header: "Email", field: "email", key: "email", sortable: true },
    { header: "Phone", field: "phone", key: "phone", sortable: true },
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
            data-bs-target="#edit-warehouse"
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
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Warehouses</h4>
                <h6>Manage your warehouses</h6>
              </div>
            </div>
            <TableTopHead onPdfExport={handlePdfExport} onExcelExport={handleExcelExport} />
            <div className="page-btn">
              <Link to="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-warehouse">
                <i className="ti ti-circle-plus me-1" />
                Add Warehouse
              </Link>
            </div>
          </div>
          <div className="card table-list-card">
            <div className="card-body">
              <div className="table-top">
                <SearchFromApi
                  callback={handleSearch}
                  rows={rows}
                  setRows={setRows}
                />
                <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                  {selectedWarehouses.length > 0 && (
                    <div className="d-flex align-items-center me-2">
                      <button className="btn btn-danger btn-sm me-2" onClick={handleBulkDelete}>
                        Bulk Delete ({selectedWarehouses.length})
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
                </div>
              </div>
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={listData}
                  totalRecords={totalRecords}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  selectionMode="checkbox"
                  selection={selectedWarehouses}
                  onSelectionChange={(e: any) => setSelectedWarehouses(e.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddWarehouse
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
      <EditWarehouse
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
      <DeleteModal onConfirm={handleDelete} title="Are you sure you want to delete this warehouse?" />
      <CommonFooter />
    </>
  );
};

export default Warehouse;
