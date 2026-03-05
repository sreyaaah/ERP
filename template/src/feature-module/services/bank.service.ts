import apiClient from "./api.service";

export interface BankAccount {
    _id?: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    branch: string;
    ifsc: string;
    status: boolean;
    isDefault: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface BankAccountResponse {
    status: boolean;
    message: string;
    data: BankAccount[];
}

export const BankService = {
    // GET all bank accounts
    getAllBankAccounts: async (params?: { search?: string; status?: boolean }): Promise<BankAccountResponse> => {
        try {
            const response = await apiClient.get("/bank-accounts", { params });
            return response.data;
        } catch (error) {
            console.error("Get bank accounts failed:", error);
            throw error;
        }
    },

    // GET bank account by ID
    getBankAccountById: async (id: string): Promise<{ status: boolean; data: BankAccount }> => {
        try {
            const response = await apiClient.get(`/bank-accounts/${id}`);
            return response.data;
        } catch (error) {
            console.error("Get bank account by ID failed:", error);
            throw error;
        }
    },

    // POST add bank account
    createBankAccount: async (data: Partial<BankAccount>): Promise<{ status: boolean; message: string; data: BankAccount }> => {
        try {
            const response = await apiClient.post("/bank-accounts/add", data);
            return response.data;
        } catch (error) {
            console.error("Create bank account failed:", error);
            throw error;
        }
    },

    // PUT update bank account
    updateBankAccount: async (id: string, data: Partial<BankAccount>): Promise<{ status: boolean; message: string; data: BankAccount }> => {
        try {
            const response = await apiClient.put(`/bank-accounts/update/${id}`, data);
            return response.data;
        } catch (error) {
            console.error("Update bank account failed:", error);
            throw error;
        }
    },

    // DELETE bank account
    deleteBankAccount: async (id: string): Promise<{ status: boolean; message: string }> => {
        try {
            const response = await apiClient.delete(`/bank-accounts/delete/${id}`);
            return response.data;
        } catch (error) {
            console.error("Delete bank account failed:", error);
            throw error;
        }
    },

    // PATCH toggle status
    toggleStatus: async (id: string): Promise<{ status: boolean; message: string; data: BankAccount }> => {
        try {
            const response = await apiClient.patch(`/bank-accounts/toggle-status/${id}`);
            return response.data;
        } catch (error) {
            console.error("Toggle status failed:", error);
            throw error;
        }
    },

    // PATCH set default
    setDefault: async (id: string): Promise<{ status: boolean; message: string; data: BankAccount }> => {
        try {
            const response = await apiClient.patch(`/bank-accounts/set-default/${id}`);
            return response.data;
        } catch (error) {
            console.error("Set default failed:", error);
            throw error;
        }
    }
};
