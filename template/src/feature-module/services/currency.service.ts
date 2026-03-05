import apiClient from "./api.service";

export interface Currency {
    _id?: string;
    name: string;
    code: string;
    symbol: string;
    rate: string;
    status: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface CurrencyResponse {
    status: boolean;
    message: string;
    data: Currency[];
}

export const CurrencyService = {
    // GET all currencies
    getAllCurrencies: async (params?: { search?: string }): Promise<CurrencyResponse> => {
        try {
            const response = await apiClient.get("/currencies", { params });
            return response.data;
        } catch (error) {
            console.error("Get currencies failed:", error);
            throw error;
        }
    },

    // GET currency by ID
    getCurrencyById: async (id: string): Promise<{ status: boolean; data: Currency }> => {
        try {
            const response = await apiClient.get(`/currencies/${id}`);
            return response.data;
        } catch (error) {
            console.error("Get currency by ID failed:", error);
            throw error;
        }
    },

    // POST add currency
    createCurrency: async (data: Partial<Currency>): Promise<{ status: boolean; message: string; data: Currency }> => {
        try {
            const response = await apiClient.post("/currencies/add", data);
            return response.data;
        } catch (error) {
            console.error("Create currency failed:", error);
            throw error;
        }
    },

    // PUT update currency
    updateCurrency: async (id: string, data: Partial<Currency>): Promise<{ status: boolean; message: string; data: Currency }> => {
        try {
            const response = await apiClient.put(`/currencies/update/${id}`, data);
            return response.data;
        } catch (error) {
            console.error("Update currency failed:", error);
            throw error;
        }
    },

    // DELETE currency
    deleteCurrency: async (id: string): Promise<{ status: boolean; message: string }> => {
        try {
            const response = await apiClient.delete(`/currencies/delete/${id}`);
            return response.data;
        } catch (error) {
            console.error("Delete currency failed:", error);
            throw error;
        }
    },

    // PATCH toggle status
    toggleStatus: async (id: string): Promise<{ status: boolean; message: string; data: Currency }> => {
        try {
            const response = await apiClient.patch(`/currencies/toggle-status/${id}`);
            return response.data;
        } catch (error) {
            console.error("Toggle status failed:", error);
            throw error;
        }
    }
};
