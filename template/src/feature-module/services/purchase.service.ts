import apiClient from "./api.service";

export interface PurchaseData {
    _id?: string;
    purchaseNumber?: string;
    supplierName: string;
    date: Date | string;
    reference: string;
    status: string;
    orderTax: number;
    discount: number;
    shipping: number;
    grandTotal: number;
    paidAmount: number;
    dueAmount?: number;
    paymentStatus?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface PurchaseResponse {
    status: boolean;
    message: string;
    data: PurchaseData[];
    pagination?: {
        total: number;
        page: number;
        limit: number;
        pages: number;
    };
}

export const PurchaseService = {
    // GET all purchases
    getAllPurchases: async (params?: any): Promise<PurchaseResponse> => {
        try {
            const response = await apiClient.get("/purchases", { params });
            return response.data;
        } catch (error) {
            console.error("Get purchases failed:", error);
            throw error;
        }
    },

    // POST add purchase
    createPurchase: async (data: Partial<PurchaseData>): Promise<{ status: boolean; message: string; data: PurchaseData }> => {
        try {
            const response = await apiClient.post("/purchases/add", data);
            return response.data;
        } catch (error) {
            console.error("Create purchase failed:", error);
            throw error;
        }
    },

    // DELETE purchase
    deletePurchase: async (id: string): Promise<{ status: boolean; message: string }> => {
        try {
            const response = await apiClient.delete(`/purchases/delete/${id}`);
            return response.data;
        } catch (error) {
            console.error("Delete purchase failed:", error);
            throw error;
        }
    },

    // PUT update purchase
    updatePurchase: async (id: string, data: Partial<PurchaseData>): Promise<{ status: boolean; message: string; data: PurchaseData }> => {
        try {
            const response = await apiClient.put(`/purchases/update/${id}`, data);
            return response.data;
        } catch (error) {
            console.error("Update purchase failed:", error);
            throw error;
        }
    },

    // GET purchase by ID
    getPurchaseById: async (id: string): Promise<{ status: boolean; data: PurchaseData }> => {
        try {
            const response = await apiClient.get(`/purchases/${id}`);
            return response.data;
        } catch (error) {
            console.error("Get purchase by ID failed:", error);
            throw error;
        }
    },

    // Bulk Delete
    bulkDelete: async (ids: string[]): Promise<{ status: boolean; message: string }> => {
        try {
            const response = await apiClient.post("/purchases/bulk-delete", { ids });
            return response.data;
        } catch (error) {
            console.error("Bulk delete failed:", error);
            throw error;
        }
    },

    // Bulk Update
    bulkUpdate: async (ids: string[], updateData: any): Promise<{ status: boolean; message: string }> => {
        try {
            const response = await apiClient.post("/purchases/bulk-update", { ids, updateData });
            return response.data;
        } catch (error) {
            console.error("Bulk update failed:", error);
            throw error;
        }
    },

    // Export PDF
    exportPdf: async () => {
        try {
            const response = await apiClient.get("/purchases/export/pdf", { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `purchases-${Date.now()}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("PDF Export failed:", error);
            throw error;
        }
    },

    // Export Excel
    exportExcel: async () => {
        try {
            const response = await apiClient.get("/purchases/export/xlsx", { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `purchases-${Date.now()}.xlsx`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("Excel Export failed:", error);
            throw error;
        }
    }
};
