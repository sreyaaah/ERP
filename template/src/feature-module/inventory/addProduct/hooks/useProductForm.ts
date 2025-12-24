import { useState, useEffect } from "react";
import type { ProductFormData, VariantRow, ImageFile } from "../types";

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
    barcodeSymbol: null,
    itemCode: "",
    description: "",
    quantity: "",
    taxMode: "exclusive",
    taxRate: "",
    priceBeforeTax: "",
    taxAmount: "",
    priceAfterTax: "",
    discountType: null,
    discountValue: "",
    quantityAlert: "",
    variantAttribute: null,
    warranty: null,
    manufacturer: "",
    manufacturedDate: new Date(),
    expiryDate: new Date(),
    hasWarranty: false,
    hasManufacturer: false,
    hasExpiry: false,
  });

  const [variants, setVariants] = useState<VariantRow[]>([
    {
      id: "1",
      variation: "color",
      variantValue: "red",
      sku: "1234",
      quantity: 0,
      price: 50000,
      isActive: true,
    },
    {
      id: "2",
      variation: "color",
      variantValue: "black",
      sku: "2345",
      quantity: 0,
      price: 50000,
      isActive: true,
    },
  ]);
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
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

  const generateSKU = () => {
    const sku = `SKU - ${Date.now()} `;
    updateField("sku", sku);
  };

  const generateItemCode = () => {
    const code = `ITEM - ${Date.now()} `;
    updateField("itemCode", code);
  };

  const validateProduct = () => {
  if (!formData.productName.trim()) {
    return "Product name is required";
  }

  if (!formData.sku.trim()) {
    return "SKU is required";
  }

  if (!formData.priceBeforeTax || Number(formData.priceBeforeTax) <= 0) {
    return "Price must be greater than zero";
  }

  if (!formData.taxRate || Number(formData.taxRate) < 0) {
    return "Tax rate must be valid";
  }

  return null;
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const error = validateProduct();
  if (error) {
    return { success: false, error };
  }

  try {
    const newProduct = {
      id: crypto.randomUUID(),
      ...formData,
      images: images.map((img) => ({
        id: img.id,
        url: img.url,
      })),
      imageCount: images.length,
      createdAt: new Date().toISOString(),
    };

    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    localStorage.setItem(
      "products",
      JSON.stringify([...existingProducts, newProduct])
    );

    return { success: true };

  } catch (err) {
    console.error("Add product failed:", err);
    return { success: false, error: "Something went wrong" };
  }
};



  useEffect(() => {
    const rate = Number(formData.taxRate);
    const inputPrice = Number(formData.priceBeforeTax);
    if (!rate || !inputPrice) {
      setFormData((prev) => ({
        ...prev,
        taxAmount: "",
        priceAfterTax: "",
      }));
      return;
    }

    if (formData.taxMode === "exclusive") {
      const tax = (inputPrice * rate) / 100;
      const finalPrice = inputPrice + tax;

      setFormData((prev) => ({
        ...prev,
        taxAmount: tax.toFixed(2),
        priceAfterTax: finalPrice.toFixed(2),
      }));
    } else {
      const basePrice = inputPrice / (1 + rate / 100);
      const tax = inputPrice - basePrice;

      setFormData((prev) => ({
        ...prev,
        taxAmount: tax.toFixed(2),
        priceAfterTax: basePrice.toFixed(2),
      }));
    }
  }, [formData.taxMode, formData.taxRate, formData.priceBeforeTax]);



  return {
    formData,
    variants,
    images,
    updateField,
    addVariant,
    removeVariant,
    updateVariant,
    addImage,
    removeImage,
    generateSKU,
    generateItemCode,
    handleSubmit,
    updateSlugManually,
  };
};