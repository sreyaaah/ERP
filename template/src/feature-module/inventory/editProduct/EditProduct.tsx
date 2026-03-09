import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { all_routes } from "../../../routes/all_routes";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import AddCategory from "../../../core/modals/inventory/addcategory";
import AddVariant from "../../../core/modals/inventory/addvariant";
import AddVarientNew from "../../../core/modals/inventory/addVarientNew";
import AddSubCategory from "../../../core/modals/inventory/addsubcategory";

import { useEditProduct } from "./hooks/useEditProduct";
import ProductInformation from "./components/productInformation";
import PriceCalculation from "./components/priceCalculation";
import ProductImages from "./components/ProductImages";
import CustomFields from "./components/CustomFields";
import { CategoryService } from "../../services/category.service";
import { BrandService } from "../../services/brand.service";
import { UnitService } from "../../services/unit.service";
import { SubcategoryService } from "../../services/subcategory.service";
import { DropdownService } from "../../services/dropdown.service";
import { TaxService } from "../../services/tax.service";
import { useEffect } from "react";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const route = all_routes;
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    formData,
    images,
    loading,
    isUpdating,
    updateField,
    addImage,
    removeImage,
    generateSKU,
    handleSubmit,
    updateSlugManually,
  } = useEditProduct(id || "");

  const [categories, setCategories] = useState<any[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<any[]>([]);
  const [brandOptions, setBrandOptions] = useState<any[]>([]);
  const [unitOptions, setUnitOptions] = useState<any[]>([]);
  const [subcategoryOptions, setSubcategoryOptions] = useState<any[]>([]);
  const [allSubcategories, setAllSubcategories] = useState<any[]>([]);
  const [storeOptions, setStoreOptions] = useState<any[]>([]);
  const [warehouseOptions, setWarehouseOptions] = useState<any[]>([]);
  const [sellingTypeOptions, setSellingTypeOptions] = useState<any[]>([]);
  const [barcodeOptions, setBarcodeOptions] = useState<any[]>([]);
  const [warrantyOptions, setWarrantyOptions] = useState<any[]>([]);
  const [taxOptions, setTaxOptions] = useState<any[]>([]);

  const fetchOptions = async () => {
    try {
      const categoriesData = await CategoryService.getAll();
      setCategories(categoriesData);
      setCategoryOptions(categoriesData.map((c: any) => ({ label: c.name, value: c.id })));

      const brandsRes = await BrandService.getBrands(1, 1000);
      setBrandOptions((brandsRes.data || []).map((b: any) => ({ label: b.name, value: b.id })));

      const unitsRes = await UnitService.getUnits(1, 1000);
      setUnitOptions((unitsRes.data || []).map((u: any) => ({ label: u.name, value: u.id })));

      const subcatsRes = await SubcategoryService.getAll({ limit: 1000 });
      const rawSubcats = subcatsRes.data || [];
      setAllSubcategories(rawSubcats);
      setSubcategoryOptions(rawSubcats.map((s: any) => ({ label: s.name, value: s.id })));

      const stores = await DropdownService.getStores();
      setStoreOptions(stores.map((s: any) => ({ label: s.name, value: s.id })));

      const warehouses = await DropdownService.getWarehouses();
      setWarehouseOptions(warehouses.map((w: any) => ({ label: w.name, value: w.id })));

      const sellingTypes = await DropdownService.getSellingTypes();
      setSellingTypeOptions(sellingTypes.map((t: any) => ({ label: t.name, value: t.id })));

      const barcodes = await DropdownService.getBarcodeSymbologies();
      setBarcodeOptions(barcodes.map((b: any) => ({ label: b.name, value: b.id })));

      const warranties = await DropdownService.getWarranties();
      setWarrantyOptions(warranties.map((w: any) => ({ label: w.name, value: w.id })));

      const taxesRes = await TaxService.getAllTaxes();
      setTaxOptions((taxesRes.data || []).map((t: any) => ({ label: t.name, value: String(t.rate) })));

    } catch (error) {
      console.error("Failed to fetch options", error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const onUpdate = () => {
    fetchOptions();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const result = await handleSubmit(e);

    if (!result.success) {
      setError(result.error ?? "Unable to update product");
      setSuccessMessage(null);
      return;
    }

    setError(null);
    setSuccessMessage("Product updated successfully!");
    
    setTimeout(() => {
      navigate(route.productlist);
    }, 1500);
  };

  useEffect(() => {
    if (formData.category && allSubcategories.length > 0) {
      const filtered = allSubcategories
        .filter((s: any) => String(s.categoryId) === String(formData.category))
        .map((s: any) => ({ label: s.name, value: s.id }));
      
      setSubcategoryOptions(filtered);

      // Only auto-clear if the current subCategory value is not in the new filtered list
      // and we are NOT in the initial loading state (where allSubcategories might have just arrived)
      if (formData.subCategory && filtered.length > 0 && !filtered.find(opt => opt.value === formData.subCategory)) {
         updateField("subCategory", null);
      }
    } else if (!formData.category) {
      setSubcategoryOptions([]);
    }
  }, [formData.category, allSubcategories]);

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Edit Product</h4>
                <h6>Update product information</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
              <li>
                <div className="page-btn">
                  <Link to={route.productlist} className="btn btn-secondary">
                    <i className="feather icon-arrow-left me-2" />
                    Back to Product
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit}>
            {error && (
              <div className="alert alert-danger alert-dismissible fade show mb-3" role="alert">
                {error}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setError(null)}
                  aria-label="Close"
                />
              </div>
            )}

            {successMessage && (
              <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
                <i className="feather icon-check-circle me-2" />
                {successMessage}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSuccessMessage(null)}
                  aria-label="Close"
                />
              </div>
            )}

            <div className="add-product">
              <div
                className="accordions-items-seperate"
                id="accordionSpacingExample"
              >
                <ProductInformation
                  formData={formData}
                  updateField={updateField}
                  generateSKU={generateSKU}
                  updateSlugManually={updateSlugManually}
                  categoryOptions={categoryOptions}
                  brandOptions={brandOptions}
                  unitOptions={unitOptions}
                  subcategoryOptions={subcategoryOptions}
                  storeOptions={storeOptions}
                  warehouseOptions={warehouseOptions}
                  sellingTypeOptions={sellingTypeOptions}
                  barcodeOptions={barcodeOptions}
                />

                <PriceCalculation
                  formData={formData}
                  updateField={updateField}
                  taxOptions={taxOptions}
                />

                <ProductImages
                  images={images}
                  addImage={addImage}
                  removeImage={removeImage}
                />

                <CustomFields
                  formData={formData}
                  updateField={updateField}
                  warrantyOptions={warrantyOptions}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="d-flex align-items-center justify-content-end mb-4">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => navigate("/product-list")}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={isUpdating}>
                  {isUpdating ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Updating...
                    </>
                  ) : (
                    <>
                      <i className="feather icon-check me-2" />
                      Update Product
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
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

      {/* Modals */}
      <AddCategory onUpdate={onUpdate} />
      <AddVariant />
      <AddVarientNew />
      <AddSubCategory categories={categories} onUpdate={onUpdate} />
    </>
  );
};

export default EditProduct;