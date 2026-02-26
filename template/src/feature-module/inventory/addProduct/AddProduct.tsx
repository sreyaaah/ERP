import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { all_routes } from "../../../routes/all_routes";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import AddCategory from "../../../core/modals/inventory/addcategory";
import AddVariant from "../../../core/modals/inventory/addvariant";
import AddVarientNew from "../../../core/modals/inventory/addVarientNew";
import AddSubCategory from "../../../core/modals/inventory/addsubcategory";

import { useProductForm } from "./hooks/useProductForm";
import ProductInfoSection from "./components/ProductInfoSection";
import PricingStocksSection from "./components/PricingStocksSection";
import ImagesSection from "./components/ImagesSection";
import CustomFieldsSection from "./components/CustomFieldsSection";
import { useNavigate } from "react-router-dom";


import { CategoryService } from "../../services/category.service";
import { BrandService } from "../../services/brand.service";
import { UnitService } from "../../services/unit.service";
import { SubcategoryService } from "../../services/subcategory.service";
import { DropdownService } from "../../services/dropdown.service";

const AddProduct = () => {
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

  const navigate = useNavigate();

  const fetchOptions = async () => {
    try {
      const categoriesData = await CategoryService.getAll();
      setCategories(categoriesData);
      const catOpts = categoriesData.map((c: any) => ({ label: c.name, value: c.id }));
      setCategoryOptions(catOpts);

      const brandsRes = await BrandService.getBrands(1, 1000);
      const brandOpts = (brandsRes.data || []).map((b: any) => ({ label: b.name, value: b.id }));
      setBrandOptions(brandOpts);

      const unitsRes = await UnitService.getUnits(1, 1000);
      const unitOpts = (unitsRes.data || []).map((u: any) => ({ label: u.name, value: u.id }));
      setUnitOptions(unitOpts);

      const subcatsRes = await SubcategoryService.getAll({ limit: 1000 });
      const rawSubcats = subcatsRes.data || [];
      setAllSubcategories(rawSubcats);
      const subcatOpts = rawSubcats.map((s: any) => ({ label: s.name, value: s.id, categoryId: s.categoryId }));
      setSubcategoryOptions(subcatOpts);

      const stores = await DropdownService.getStores();
      const storeOpts = stores.map((s: any) => ({ label: s.name, value: s.id }));
      setStoreOptions(storeOpts);

      const warehouses = await DropdownService.getWarehouses();
      const warehouseOpts = warehouses.map((w: any) => ({ label: w.name, value: w.id }));
      setWarehouseOptions(warehouseOpts);

      const sellingTypes = await DropdownService.getSellingTypes();
      setSellingTypeOptions(sellingTypes.map((t: any) => ({ label: t.name, value: t.id })));

      const barcodes = await DropdownService.getBarcodeSymbologies();
      setBarcodeOptions(barcodes.map((b: any) => ({ label: b.name, value: b.id })));

      const warranties = await DropdownService.getWarranties();
      setWarrantyOptions(warranties.map((w: any) => ({ label: w.name, value: w.id })));

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

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const result = await handleSubmit(e);

    if (!result.success) {
      setError(result.error ?? "Unable to add product");
      return;
    }

    setError(null);
    navigate(all_routes.productlist);
  };


  const route = all_routes;
  const {
    formData,
    images,
    isLoading,
    updateField,
    addImage,
    removeImage,
    generateSKU,
    generateItemCode,
    handleSubmit,
    updateSlugManually
  } = useProductForm();

  useEffect(() => {
    if (formData.category) {
      console.log("Filtering subcategories for category:", formData.category);
      const filtered = allSubcategories
        .filter((s: any) => String(s.categoryId) === String(formData.category))
        .map((s: any) => ({ label: s.name, value: s.id }));
      setSubcategoryOptions(filtered);
      
      // If current subcategory is not in the filtered list, clear it
      if (formData.subCategory && !filtered.find((opt) => opt.value === formData.subCategory)) {
        updateField("subCategory", null);
      }
    } else {
      setSubcategoryOptions([]);
      updateField("subCategory", null);
    }
  }, [formData.category, allSubcategories]);



  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Create Product</h4>
                <h6>Create new product</h6>
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
                <div className="alert alert-danger mb-3">
                  {error}
                </div>
              )}
              <div className="add-product">
              <div
                className="accordions-items-seperate"
                id="accordionSpacingExample"
              >
                <ProductInfoSection
                  formData={formData}
                  updateField={updateField}
                  generateSKU={generateSKU}
                  generateItemCode={generateItemCode}
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

                <PricingStocksSection
                  formData={formData}
                  updateField={updateField}
                />

                <ImagesSection images={images} addImage={addImage} removeImage={removeImage} />

                <CustomFieldsSection
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
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Adding...
                    </>
                  ) : (
                    "Add Product"
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

export default AddProduct;