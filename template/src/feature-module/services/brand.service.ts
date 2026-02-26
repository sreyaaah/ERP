import apiClient from "./api.service";

export interface Brand {
    id: string;
    name: string;
    slug: string;
    image: string;
    status: "Active" | "Inactive";
    createdon: string;
}

export const BrandService = {
    getBrands: async (page = 1, limit = 10, search = "") => {
        try {
            const res = await apiClient.get("/brands", {
                params: { page, limit, search }
            });
            return res.data;
        } catch (error) {
            console.error("Failed to fetch brands:", error);
            throw error;
        }
    },

    getBrand: async (id: string) => {
        try {
            const res = await apiClient.get(`/brands/${id}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    createBrand: async (data: any) => {
        try {
            const isFormData = data instanceof FormData;
            const config = isFormData ? { headers: { "Content-Type": "multipart/form-data" } } : {};
            const res = await apiClient.post("/brands", data, config);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to create brand");
        }
    },

    updateBrand: async (id: string, data: any) => {
        try {
            const isFormData = data instanceof FormData;
            const config = isFormData ? { headers: { "Content-Type": "multipart/form-data" } } : {};
            const res = await apiClient.put(`/brands/${id}`, data, config);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to update brand");
        }
    },

    deleteBrand: async (id: string) => {
        try {
            const res = await apiClient.delete(`/brands/${id}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    bulkDelete: async (ids: string[]) => {
        try {
            const res = await apiClient.post("/brands/bulk-delete", { ids });
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    bulkUpdateStatus: async (ids: string[], status: string) => {
        try {
            const res = await apiClient.post("/brands/bulk-update", { ids, status });
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    exportData: async (format: 'xlsx' | 'pdf') => {
        try {
            const res = await apiClient.get("/brands/export", {
                params: { format },
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = `brands_${new Date().getTime()}.${format}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Export error:", error);
            alert("Failed to export data");
        }
    }
};