import apiClient from "./api.service";

export interface Product {
    id: string;
    product: string;
    slug: string;
    sku: string;
    itemCode: string;
    sellingType: string;
    categoryId: any;
    subCategoryId?: any;
    brandId?: any;
    unitId?: any;
    unit: string;
    storeId?: string;
    warehouseId?: string;
    barcodeSymbology: string;
    description: string;
    taxType: string;
    taxRate: number;
    priceBeforeTax: number;
    taxAmount: number;
    priceAfterTax: number;
    quantity: number;
    status: string;
    images?: any[];
    customFields?: any;
    createdAt?: string;
}

export const ProductService = {
    // GET all products
    getAll: async (params?: any): Promise<{ data: Product[], total: number }> => {
        try {
            const res = await apiClient.get("/products", {
                params: {
                    limit: 10,
                    page: 1,
                    ...params
                }
            });
            return {
                data: res.data.data,
                total: res.data.pagination?.total || res.data.data.length
            };
        } catch (error) {
            console.error("Failed to fetch products:", error);
            throw error;
        }
    },

    // GET single product
    getById: async (id: string): Promise<Product> => {
        try {
            const res = await apiClient.get(`/products/${id}`);
            return res.data.data;
        } catch (error) {
            console.error(`Failed to fetch product ${id}:`, error);
            throw error;
        }
    },

    // POST create
    create: async (data: any): Promise<Product> => {
        try {
            const res = await apiClient.post("/products", data);
            return res.data.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to create product");
        }
    },

    // PUT update
    update: async (id: string, data: any): Promise<Product> => {
        try {
            const res = await apiClient.put(`/products/${id}`, data);
            return res.data.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to update product");
        }
    },

    // DELETE single
    delete: async (id: string): Promise<void> => {
        try {
            await apiClient.delete(`/products/${id}`);
        } catch (error) {
            throw new Error("Failed to delete product");
        }
    },

    // Bulk Delete
    bulkDelete: async (ids: string[]): Promise<void> => {
        try {
            await apiClient.post("/products/bulk-delete", { ids });
        } catch (error) {
            throw new Error("Failed to delete selected products");
        }
    },

    // Bulk Update Status
    bulkUpdateStatus: async (ids: string[], status: string): Promise<void> => {
        try {
            await apiClient.post("/products/bulk-update", { ids, status });
        } catch (error) {
            throw new Error("Failed to update status");
        }
    },

    // Export
    export: async (format: "xlsx" | "pdf", id?: string): Promise<void> => {
        try {
            const res = await apiClient.get("/products/export", {
                params: { format, id },
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = id ? `product_${id}.${format}` : `products_${new Date().getTime()}.${format}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Export failed:", error);
            throw new Error("Export failed");
        }
    },

    // Upload Image
    uploadImage: async (productId: string, file: File): Promise<void> => {
        try {
            const formData = new FormData();
            formData.append("image", file);
            await apiClient.post(`/products/${productId}/images`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
        } catch (error) {
            console.error(`Failed to upload image for product ${productId}:`, error);
            throw new Error("Failed to upload image");
        }
    },

    // Delete Image
    deleteImage: async (productId: string, imageId: string): Promise<void> => {
        try {
            await apiClient.delete(`/products/${productId}/images/${imageId}`);
        } catch (error) {
            console.error(`Failed to delete image ${imageId} for product ${productId}:`, error);
            throw new Error("Failed to delete image");
        }
    },

    // Generate SKU
    generateSku: async (): Promise<string> => {
        try {
            const res = await apiClient.get("/products/generate-sku");
            return res.data.sku;
        } catch (error) {
            console.error("Failed to generate SKU:", error);
            throw error;
        }
    },

    // Generate Item Code
    generateItemCode: async (): Promise<string> => {
        try {
            const res = await apiClient.get("/products/generate-item-code");
            return res.data.itemCode;
        } catch (error) {
            console.error("Failed to generate Item Code:", error);
            throw error;
        }
    }
};
