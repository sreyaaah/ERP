export interface ProductFormData {
  store: string | null;
  warehouse: string | null;
  productName: string;
  slug: string;
  sku: string;
  sellingType: string | null;
  category: string | null;
  subCategory: string | null;
  brand: string | null;
  unit: string | null;
  barcodeSymbol: string | null;
  itemCode: string;
  description: string;

  quantity: string;
  taxMode: "inclusive" | "exclusive";
  taxRate: string;
  priceBeforeTax: string;
  taxAmount: string;
  priceAfterTax: string;

  discountType: string | null;
  discountValue: string;
  quantityAlert: string;
  variantAttribute: string | null;

  warranty: string | null;
  manufacturer: string;
  manufacturedDate: Date | null;
  expiryDate: Date | null;

  hasWarranty: boolean;
  hasManufacturer: boolean;
  hasExpiry: boolean;
}

export interface VariantRow {
  id: string;
  variation: string;
  variantValue: string;
  sku: string;
  quantity: number;
  price: number;
  isActive: boolean;
}

export interface ImageFile {
  id: string;
  url: string;
  file?: File;
}

export interface Product extends ProductFormData {
  id: string;
  images: Array<{
    id: string;
    url: string;
  }>;
  imageCount: number;
  createdAt: string;
}