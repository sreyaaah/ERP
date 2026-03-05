import apiClient from "./api.service";

export type TaxType = "GST" | "VAT" | "CGST" | "SGST" | "IGST";

export interface TaxRate {
    _id?: string;
    name: string;
    type: TaxType;
    rate: number;
    status: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface TaxResponse {
    status: boolean;
    message: string;
    data: TaxRate[];
}

export const TaxService = {
    // GET all tax rates
    getAllTaxes: async (params?: { search?: string; type?: string }): Promise<TaxResponse> => {
        try {
            const response = await apiClient.get("/taxes", { params });
            return response.data;
        } catch (error) {
            console.error("Get taxes failed:", error);
            throw error;
        }
    },

    // GET tax by ID
    getTaxById: async (id: string): Promise<{ status: boolean; data: TaxRate }> => {
        try {
            const response = await apiClient.get(`/taxes/${id}`);
            return response.data;
        } catch (error) {
            console.error("Get tax by ID failed:", error);
            throw error;
        }
    },

    // POST add tax
    createTax: async (data: Partial<TaxRate>): Promise<{ status: boolean; message: string; data: TaxRate }> => {
        try {
            const response = await apiClient.post("/taxes/add", data);
            return response.data;
        } catch (error) {
            console.error("Create tax failed:", error);
            throw error;
        }
    },

    // PUT update tax
    updateTax: async (id: string, data: Partial<TaxRate>): Promise<{ status: boolean; message: string; data: TaxRate }> => {
        try {
            const response = await apiClient.put(`/taxes/update/${id}`, data);
            return response.data;
        } catch (error) {
            console.error("Update tax failed:", error);
            throw error;
        }
    },

    // DELETE tax
    deleteTax: async (id: string): Promise<{ status: boolean; message: string }> => {
        try {
            const response = await apiClient.delete(`/taxes/delete/${id}`);
            return response.data;
        } catch (error) {
            console.error("Delete tax failed:", error);
            throw error;
        }
    },

    // PATCH toggle status
    toggleStatus: async (id: string): Promise<{ status: boolean; message: string; data: TaxRate }> => {
        try {
            const response = await apiClient.patch(`/taxes/toggle-status/${id}`);
            return response.data;
        } catch (error) {
            console.error("Toggle status failed:", error);
            throw error;
        }
    }
};
