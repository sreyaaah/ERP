import { useState, useEffect } from "react";
import type { ProductFormData, VariantRow, ImageFile } from "../types";
import { ProductService } from "../../../services/product.service";

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
    barcodeSymbol: "CODE128",
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
    manufacturedDate: new Date(),
    expiryDate: new Date(),
    hasWarranty: false,
    hasManufacturer: false,
    hasExpiry: false,
  });

  const [variants, setVariants] = useState<VariantRow[]>([]);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (!productId) return;
      setLoading(true);
      try {
        const product = await ProductService.getById(productId);

        if (product) {
          setFormData({
            store: product.storeId || null,
            warehouse: product.warehouseId || null,
            productName: product.product || "",
            slug: product.slug || "",
            sku: product.sku || "",
            sellingType: product.sellingType || "Transactional",
            category: product.categoryId?._id || product.categoryId || null,
            subCategory: product.subCategoryId?._id || product.subCategoryId || null,
            brand: product.brandId?._id || product.brandId || null,
            unit: product.unitId?._id || product.unitId || null,
            barcodeSymbol: product.barcodeSymbology || "CODE128",
            itemCode: product.itemCode || "",
            description: product.description || "",
            quantity: String(product.quantity || 0),
            taxMode: ((product.taxType?.toLowerCase() === "exclusive" || product.taxType?.toLowerCase() === "inclusive") ? product.taxType.toLowerCase() : "no-tax") as "inclusive" | "exclusive" | "no-tax",
            taxRate: String(product.taxRate || 0),
            priceBeforeTax: product.taxType?.toLowerCase() === "inclusive" ? String(product.priceAfterTax || 0) : String(product.priceBeforeTax || 0),
            taxAmount: String(product.taxAmount || 0),
            priceAfterTax: product.taxType?.toLowerCase() === "inclusive" ? String(product.priceBeforeTax || 0) : String(product.priceAfterTax || 0),
            discountType: product.customFields?.discountType || null,
            discountValue: product.customFields?.discountValue || "",
            quantityAlert: product.customFields?.quantityAlert || "",
            variantAttribute: null,
            warranty: null,
            manufacturer: product.customFields?.manufacturer || "",
            manufacturedDate: product.customFields?.manufacturedDate ? new Date(product.customFields.manufacturedDate) : new Date(),
            expiryDate: product.customFields?.expiryDate ? new Date(product.customFields.expiryDate) : new Date(),
            hasWarranty: !!product.customFields?.hasWarranty,
            hasManufacturer: !!product.customFields?.manufacturer,
            hasExpiry: !!product.customFields?.expiryDate,
          });

          if (product.images && product.images.length > 0) {
            setImages(product.images.map((img: any) => ({
              id: img._id || img.id || Math.random().toString(),
              url: img.url,
            })));
          }
        }
      } catch (err) {
        console.error("Failed to load product:", err);
      } finally {
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
    // If it's an existing image from DB, queue it for deletion
    const img = images.find((i) => i.id === id);
    if (img && !img.file) {
      setDeletedImages((prev) => [...prev, id]);
    }
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



  const validateProduct = () => {
    if (!formData.productName.trim()) return "Product name is required";
    if (!formData.sku.trim()) return "SKU is required";
    if (!formData.itemCode?.trim()) return "HSN/SAC Number is required";
    if (!formData.priceBeforeTax || Number(formData.priceBeforeTax) < 0) return "Price must be valid";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    const error = validateProduct();
    if (error) return { success: false, error };

    setIsUpdating(true);
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
        customFields: {
          discountType: formData.discountType,
          discountValue: formData.discountValue,
          quantityAlert: formData.quantityAlert,
          manufacturer: formData.manufacturer,
          manufacturedDate: formData.manufacturedDate,
          expiryDate: formData.expiryDate,
        }
      };

      await ProductService.update(productId, payload);

      // Handle image deletions
      if (deletedImages.length > 0) {
        for (const imgId of deletedImages) {
          try {
            await ProductService.deleteImage(productId, imgId);
          } catch (e) {
            console.error("Failed to delete image:", e);
          }
        }
      }

      // Handle new image uploads (ones with a file attached)
      const newImages = images.filter((img) => img.file);
      if (newImages.length > 0) {
        for (const img of newImages) {
          if (img.file) {
            try {
              await ProductService.uploadImage(productId, img.file);
            } catch (imgErr) {
              console.error("Image upload failed for one image", imgErr);
            }
          }
        }
      }

      return { success: true };
    } catch (err: any) {
      console.error("Update product failed:", err);
      return { success: false, error: err.message || "Something went wrong" };
    } finally {
      setIsUpdating(false);
    }
  };

  // Tax calculation effect
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
    loading,
    isUpdating,
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
