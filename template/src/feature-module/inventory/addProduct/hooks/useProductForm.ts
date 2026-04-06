import { useState, useEffect } from "react";
import type { ProductFormData, VariantRow, ImageFile } from "../types";
import { ProductService } from "../../../services/product.service";

export const useProductForm = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    store: null,
    warehouse: null,
    productName: "",
    slug: "",
    sku: "",
    sellingType: null,
    category: null,
    subCategory: null,
    brand: null,
    unit: null,
    barcodeSymbol: "",
    itemCode: "",
    description: "",
    quantity: "0",
    taxMode: "exclusive",
    taxRate: "0",
    priceBeforeTax: "0",
    taxAmount: "0",
    priceAfterTax: "0",
    discountType: null,
    discountValue: "",
    quantityAlert: "",
    variantAttribute: null,
    warranty: null,
    manufacturer: "",
    manufacturedDate: null,
    expiryDate: null,
    hasWarranty: false,
    hasManufacturer: true,
    hasExpiry: true,
  });

  const [variants, setVariants] = useState<VariantRow[]>([]);
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateSlugFromName = (name: string) =>
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    if (!formData.productName) return;

    if (!isSlugManuallyEdited) {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlugFromName(formData.productName),
      }));
    }
  }, [formData.productName]);

  const updateSlugManually = (value: string) => {
    setIsSlugManuallyEdited(true);
    updateField("slug", value);
  };

  const [images, setImages] = useState<ImageFile[]>([]);

  const updateField = <K extends keyof ProductFormData>(
    key: K,
    value: ProductFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const addVariant = (variant: VariantRow) => {
    setVariants((prev) => [...prev, variant]);
  };

  const removeVariant = (id: string) => {
    setVariants((prev) => prev.filter((v) => v.id !== id));
  };

  const updateVariant = (id: string, updates: Partial<VariantRow>) => {
    setVariants((prev) =>
      prev.map((v) => (v.id === id ? { ...v, ...updates } : v))
    );
  };

  const addImage = (image: ImageFile) => {
    setImages((prev) => [...prev, image]);
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const generateSKU = async () => {
    try {
      const sku = await ProductService.generateSku();
      updateField("sku", sku);
    } catch (error) {
      const fallback = `PRD-${Date.now().toString().slice(-6)}`;
      updateField("sku", fallback);
    }
  };

  // Auto-generate codes on mount
  useEffect(() => {
    generateSKU();
  }, []);

  const validateProduct = () => {
    if (!formData.productName.trim()) return "Product name is required";
    if (!formData.sku.trim()) return "SKU is required";
    if (!formData.itemCode?.trim()) return "HSN/SAC Number is required";
    if (!formData.priceBeforeTax || Number(formData.priceBeforeTax) < 0) return "Price must be valid";
    
    if (formData.hasManufacturer) {
      if (!formData.manufacturer.trim()) return "Manufacturer name is required";
      if (!formData.manufacturedDate) return "Manufactured date is required";
    }
    
    if (formData.hasExpiry && !formData.expiryDate) {
      return "Expiry date is required";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    const error = validateProduct();
    if (error) return { success: false, error };

    setIsLoading(true);
    try {
      const payload = {
        storeId: formData.store,
        warehouseId: formData.warehouse,
        product: formData.productName,
        slug: formData.slug,
        sku: formData.sku,
        itemCode: formData.itemCode,
        sellingType: formData.sellingType || null,
        categoryId: formData.category,
        subCategoryId: formData.subCategory,
        brandId: formData.brand,
        unitId: formData.unit,
        barcodeSymbology: formData.barcodeSymbol || "CODE128",
        description: formData.description,
        taxType: formData.taxMode === "exclusive" ? "Exclusive" : formData.taxMode === "no-tax" ? "None" : "Inclusive",
        taxRate: Number(formData.taxRate),
        priceBeforeTax: formData.taxMode === "inclusive" ? Number(formData.priceAfterTax) : Number(formData.priceBeforeTax),
        taxAmount: Number(formData.taxAmount),
        priceAfterTax: formData.taxMode === "inclusive" ? Number(formData.priceBeforeTax) : Number(formData.priceAfterTax),
        quantity: Number(formData.quantity) || 0,
        quantityAlert: Number(formData.quantityAlert) || 10,
        status: "Available",
        manufacturedDate: formData.manufacturedDate,
        expiryDate: formData.expiryDate,
        customFields: {
          discountType: formData.discountType,
          discountValue: formData.discountValue,
          manufacturer: formData.manufacturer,
        }
      };

      const product = await ProductService.create(payload);

      if (images.length > 0) {
        for (const img of images) {
          if (img.file) {
            try {
              await ProductService.uploadImage(product.id, img.file);
            } catch (imgErr) {
              console.error("Image upload failed for one image", imgErr);
            }
          }
        }
      }

      return { success: true };

    } catch (err: any) {
      console.error("Add product failed:", err);
      return { success: false, error: err.message || "Something went wrong" };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const inputPrice = Number(formData.priceBeforeTax);
    if (!inputPrice) {
      setFormData((prev) => ({ ...prev, taxAmount: "0.00", priceAfterTax: "0.00" }));
      return;
    }

    if (formData.taxMode === "no-tax") {
      setFormData((prev) => ({ ...prev, taxAmount: "0.00", priceAfterTax: inputPrice.toFixed(2) }));
      return;
    }

    const rate = Number(formData.taxRate);
    if (!rate) {
      setFormData((prev) => ({ ...prev, taxAmount: "0.00", priceAfterTax: inputPrice.toFixed(2) }));
      return;
    }

    if (formData.taxMode === "exclusive") {
      const tax = (inputPrice * rate) / 100;
      const finalPrice = inputPrice + tax;
      setFormData((prev) => ({ ...prev, taxAmount: tax.toFixed(2), priceAfterTax: finalPrice.toFixed(2) }));
    } else {
      const basePrice = inputPrice / (1 + rate / 100);
      const tax = inputPrice - basePrice;
      setFormData((prev) => ({ ...prev, taxAmount: tax.toFixed(2), priceAfterTax: basePrice.toFixed(2) }));
    }
  }, [formData.taxMode, formData.taxRate, formData.priceBeforeTax]);

  return {
    formData,
    variants,
    images,
    isLoading,
    updateField,
    addVariant,
    removeVariant,
    updateVariant,
    addImage,
    removeImage,
    generateSKU,
    handleSubmit,
    updateSlugManually,
  };
};
