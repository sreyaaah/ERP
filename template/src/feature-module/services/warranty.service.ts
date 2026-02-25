import apiClient from "./api.service";

export interface Warranty {
    id: string;
    name: string;
    duration: number;
    type: "Days" | "Months" | "Years";
    description: string;
    status: "Active" | "Inactive";
    createdAt: string;
    updatedAt: string;
}

export const WarrantyService = {
    getWarranties: async (page = 1, limit = 10, search = "") => {
        try {
            const res = await apiClient.get("/warranties", { params: { page, limit, search } });
            return res.data;
        } catch (error) {
            console.error("Failed to fetch warranties:", error);
            throw error;
        }
    },

    getWarranty: async (id: string) => {
        try {
            const res = await apiClient.get(`/warranties/${id}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    createWarranty: async (data: Partial<Warranty>) => {
        try {
            const res = await apiClient.post("/warranties", data);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to create warranty");
        }
    },

    updateWarranty: async (id: string, data: Partial<Warranty>) => {
        try {
            const res = await apiClient.put(`/warranties/${id}`, data);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to update warranty");
        }
    },

    deleteWarranty: async (id: string) => {
        try {
            const res = await apiClient.delete(`/warranties/${id}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    bulkDelete: async (ids: string[]) => {
        try {
            const res = await apiClient.post("/warranties/bulk-delete", { ids });
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    bulkUpdateStatus: async (ids: string[], status: string) => {
        try {
            const res = await apiClient.post("/warranties/bulk-update", { ids, status });
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    exportData: async (format: "xlsx" | "pdf") => {
        try {
            const res = await apiClient.get("/warranties/export", {
                params: { format },
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = `warranties_${new Date().getTime()}.${format}`;
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
