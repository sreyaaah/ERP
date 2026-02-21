
const API_URL = "http://localhost:5000/api/brand";

export const BrandService = {
    getBrands: async (page = 1, limit = 10, search = "") => {
        const response = await fetch(`${API_URL}?page=${page}&limit=${limit}&search=${search}`);
        return await response.json();
    },

    getBrand: async (id: string) => {
        const response = await fetch(`${API_URL}/${id}`);
        return await response.json();
    },

    createBrand: async (data: any) => {
        const isFormData = data instanceof FormData;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: isFormData ? {} : {
                "Content-Type": "application/json",
            },
            body: isFormData ? data : JSON.stringify(data),
        });
        return await response.json();
    },

    updateBrand: async (id: string, data: any) => {
        const isFormData = data instanceof FormData;
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: isFormData ? {} : {
                "Content-Type": "application/json",
            },
            body: isFormData ? data : JSON.stringify(data),
        });
        return await response.json();
    },

    deleteBrand: async (id: string) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        return await response.json();
    },

    bulkDelete: async (ids: string[]) => {
        const response = await fetch(`${API_URL}/bulk-delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ids }),
        });
        return await response.json();
    },

    bulkUpdateStatus: async (ids: string[], status: string) => {
        const response = await fetch(`${API_URL}/bulk-update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ids, status }),
        });
        return await response.json();
    },

    exportData: async (format: 'xlsx' | 'pdf') => {
        window.open(`${API_URL}/export?format=${format}`, '_blank');
    }
};
