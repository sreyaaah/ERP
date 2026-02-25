import apiClient from "./api.service";

export interface Subcategory {
    id: string;
    name: string;
    slug: string;
    categoryId: string;
    categoryName: string;
    status: "Active" | "Inactive";
    createdAt: string;
    updatedAt: string;
}

export interface SubcategoryListResponse {
    status: boolean;
    message: string;
    data: Subcategory[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        pages: number;
    };
}

export interface SubcategoryResponse {
    status: boolean;
    message: string;
    data: Subcategory;
}

export interface CreateSubcategoryPayload {
    name: string;
    slug: string;
    categoryId: string;
    status?: "Active" | "Inactive";
}

export interface UpdateSubcategoryPayload {
    name?: string;
    slug?: string;
    categoryId?: string;
    status?: "Active" | "Inactive";
}

export const SubcategoryService = {
    // GET all subcategories
    getAll: async (params?: {
        page?: number;
        limit?: number;
        search?: string;
        categoryId?: string;
    }): Promise<SubcategoryListResponse> => {
        try {
            const res = await apiClient.get("/subcategories", { params });
            return res.data;
        } catch (error) {
            console.error("Failed to fetch subcategories:", error);
            throw new Error("Failed to fetch subcategories");
        }
    },

    // GET single
    getById: async (id: string): Promise<SubcategoryResponse> => {
        try {
            const res = await apiClient.get(`/subcategories/${id}`);
            return res.data;
        } catch (error) {
            throw new Error("Failed to fetch subcategory");
        }
    },

    // POST create
    create: async (payload: CreateSubcategoryPayload): Promise<SubcategoryResponse> => {
        try {
            const res = await apiClient.post("/subcategories", payload);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to create subcategory");
        }
    },

    // PUT update
    update: async (id: string, payload: UpdateSubcategoryPayload): Promise<SubcategoryResponse> => {
        try {
            const res = await apiClient.put(`/subcategories/${id}`, payload);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to update subcategory");
        }
    },

    // DELETE single
    delete: async (id: string): Promise<{ status: boolean; message: string }> => {
        try {
            const res = await apiClient.delete(`/subcategories/${id}`);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to delete subcategory");
        }
    },

    // POST bulk delete
    bulkDelete: async (ids: string[]): Promise<{ status: boolean; message: string }> => {
        try {
            const res = await apiClient.post("/subcategories/bulk-delete", { ids });
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Bulk delete failed");
        }
    },

    // POST bulk update status
    bulkUpdateStatus: async (ids: string[], status: "Active" | "Inactive"): Promise<{ status: boolean; message: string }> => {
        try {
            const res = await apiClient.post("/subcategories/bulk-update", { ids, status });
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Bulk update failed");
        }
    },

    // GET export
    export: async (format: "xlsx" | "pdf"): Promise<void> => {
        try {
            const res = await apiClient.get("/subcategories/export", {
                params: { format },
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = `subcategories_${new Date().getTime()}.${format}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Export failed:", error);
            throw new Error("Export failed");
        }
    },
};
