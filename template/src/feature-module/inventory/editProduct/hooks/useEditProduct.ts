import { useState, useEffect } from "react";
import type { ProductFormData, VariantRow, ImageFile, Product } from "../types";

export const useEditProduct = (productId: string) => {
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

  const [variants, setVariants] = useState<VariantRow[]>([]);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = () => {
      try {
        const existingProducts = JSON.parse(
          localStorage.getItem("products") || "[]"
        );
        
        const product = existingProducts.find((p: Product) => p.id === productId);
        
        if (product) {
          setFormData({
            store: product.store,
            warehouse: product.warehouse,
            productName: product.productName,
            slug: product.slug,
            sku: product.sku,
            sellingType: product.sellingType,
            category: product.category,
            subCategory: product.subCategory,
            brand: product.brand,
            unit: product.unit,
            barcodeSymbol: product.barcodeSymbol,
            itemCode: product.itemCode,
            description: product.description,
            quantity: product.quantity,
            taxMode: product.taxMode,
            taxRate: product.taxRate,
            priceBeforeTax: product.priceBeforeTax,
            taxAmount: product.taxAmount,
            priceAfterTax: product.priceAfterTax,
            discountType: product.discountType,
            discountValue: product.discountValue,
            quantityAlert: product.quantityAlert,
            variantAttribute: product.variantAttribute,
            warranty: product.warranty,
            manufacturer: product.manufacturer,
            manufacturedDate: product.manufacturedDate ? new Date(product.manufacturedDate) : new Date(),
            expiryDate: product.expiryDate ? new Date(product.expiryDate) : new Date(),
            hasWarranty: product.hasWarranty,
            hasManufacturer: product.hasManufacturer,
            hasExpiry: product.hasExpiry,
          });

          // Load existing images
          if (product.images && product.images.length > 0) {
            setImages(product.images.map((img: any) => ({
              id: img.id,
              url: img.url,
            })));
          }
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Failed to load product:", err);
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  const generateSlugFromName = (name: string) =>
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    if (!formData.productName || loading) return;

    if (!isSlugManuallyEdited) {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlugFromName(formData.productName),
      }));
    }
  }, [formData.productName, loading]);

  const updateSlugManually = (value: string) => {
    setIsSlugManuallyEdited(true);
    updateField("slug", value);
  };

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
    const sku = `SKU-${Date.now()}`;
    updateField("sku", sku);
  };

  const generateItemCode = () => {
    const code = `ITEM-${Date.now()}`;
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
      const existingProducts = JSON.parse(
        localStorage.getItem("products") || "[]"
      );

      const updatedProduct = {
        id: productId,
        ...formData,
        images: images.map((img) => ({
          id: img.id,
          url: img.url,
        })),
        imageCount: images.length,
        createdAt: existingProducts.find((p: Product) => p.id === productId)?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const updatedProducts = existingProducts.map((p: Product) =>
        p.id === productId ? updatedProduct : p
      );

      localStorage.setItem("products", JSON.stringify(updatedProducts));

      return { success: true };
    } catch (err) {
      console.error("Update product failed:", err);
      return { success: false, error: "Something went wrong" };
    }
  };

  // Tax calculation effect
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
    loading,
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