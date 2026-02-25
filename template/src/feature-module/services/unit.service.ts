import apiClient from "./api.service";

export interface Unit {
    id: string;
    name: string;
    shortName: string;
    status: "Active" | "Inactive";
    createdAt: string;
    updatedAt: string;
}

export const UnitService = {
    getUnits: async (page = 1, limit = 10, search = "") => {
        try {
            const res = await apiClient.get("/units", {
                params: { page, limit, search }
            });
            return res.data;
        } catch (error) {
            console.error("Failed to fetch units:", error);
            throw error;
        }
    },

    getUnit: async (id: string) => {
        try {
            const res = await apiClient.get(`/units/${id}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    createUnit: async (data: any) => {
        try {
            const res = await apiClient.post("/units", data);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to create unit");
        }
    },

    updateUnit: async (id: string, data: any) => {
        try {
            const res = await apiClient.put(`/units/${id}`, data);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to update unit");
        }
    },

    deleteUnit: async (id: string) => {
        try {
            const res = await apiClient.delete(`/units/${id}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    bulkDelete: async (ids: string[]) => {
        try {
            const res = await apiClient.post("/units/bulk-delete", { ids });
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    bulkUpdateStatus: async (ids: string[], status: string) => {
        try {
            const res = await apiClient.post("/units/bulk-update", { ids, status });
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    exportData: async (format: 'xlsx' | 'pdf') => {
        try {
            const res = await apiClient.get("/units/export", {
                params: { format },
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = `units_${new Date().getTime()}.${format}`;
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
