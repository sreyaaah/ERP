import apiClient from "./api.service";

export interface Category {
    id: string;
    name: string;
    slug: string;
    status: "Active" | "Inactive";
    createdAt?: string;
}

export const CategoryService = {
    // GET all categories
    getAll: async (params?: { search?: string }): Promise<Category[]> => {
        try {
            const res = await apiClient.get("/categories", {
                params: {
                    limit: 1000,
                    page: 1,
                    ...params
                }
            });
            return (res.data.data || []).map((c: any) => ({
                id: c.id || c._id,
                name: c.name,
                slug: c.slug,
                status: c.status,
                createdAt: c.createdAt || c.created_at,
            }));
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            throw error;
        }
    },

    // POST create
    create: async (data: Omit<Category, "id">): Promise<Category> => {
        try {
            const res = await apiClient.post("/categories", data);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to create category");
        }
    },

    // PUT update
    update: async (id: string, data: Partial<Category>): Promise<Category> => {
        try {
            const res = await apiClient.put(`/categories/${id}`, data);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to update category");
        }
    },

    // DELETE single
    delete: async (id: string): Promise<void> => {
        try {
            await apiClient.delete(`/categories/${id}`);
        } catch (error) {
            throw new Error("Failed to delete category");
        }
    },

    // POST bulk delete
    bulkDelete: async (ids: string[]): Promise<void> => {
        try {
            await apiClient.post("/categories/bulk-delete", { ids });
        } catch (error) {
            throw new Error("Failed to delete selected categories");
        }
    },

    // POST bulk update status
    bulkUpdateStatus: async (ids: string[], status: "Active" | "Inactive"): Promise<void> => {
        try {
            await apiClient.post("/categories/bulk-update", { ids, status });
        } catch (error) {
            throw new Error("Failed to update status");
        }
    },

    // GET export
    export: async (format: "xlsx" | "pdf"): Promise<void> => {
        try {
            const res = await apiClient.get("/categories/export", {
                params: { format },
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = `categories_${new Date().getTime()}.${format}`;
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
