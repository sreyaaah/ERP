import apiClient from "./api.service";

// Interfaces
export interface QuotationItem {
    id?: string;
    productId: string;
    productName?: string;
    qty: number;
    rate: number;
    discountPercent: number;
    taxPercent: number;
    taxAmount?: number;
    unitCost?: number;
    totalCost?: number;
}

export interface Quotation {
    id: string;
    quotationNo: string;
    customerId: string;
    customerName?: string;
    customerAvatar?: string;
    date: string;
    validity: string;
    reference?: string;
    quotationType: "Interstate" | "Intrastate" | "International";
    items: QuotationItem[];
    subtotal: number;
    grandTotal: number;
    amountInWords?: string;
    description?: string;
    status: "Pending" | "Sent" | "Ordered" | "Converted";
    convertedToSalesOrderId?: string | null;
    createdAt?: string;
    updatedAt?: string;
}

export interface QuotationListResponse {
    message: string;
    status: boolean;
    dataFound: boolean;
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    data: Quotation[];
}

export interface QuotationResponse {
    message: string;
    status: boolean;
    dataFound: boolean;
    data?: Quotation;
}

export interface CreateQuotationPayload {
    customerId: string;
    date: string;
    validity: string;
    reference?: string;
    quotationType: string;
    description?: string;
    status: string;
    items: {
        productId: string;
        qty: number;
        rate: number;
        discountPercent: number;
        taxPercent: number;
    }[];
}

// Service

export const QuotationService = {

    // 1. GET /api/quotations
    getAll: async (params?: {
        page?: number;
        limit?: number;
        search?: string;
        status?: string;
        customerId?: string;
        productId?: string;
        sortBy?: string;
        sortOrder?: string;
    }): Promise<QuotationListResponse> => {
        const res = await apiClient.get("/quotations", { params });
        return res.data;
    },

    // 2. POST /api/quotations/add
    create: async (payload: CreateQuotationPayload): Promise<QuotationResponse> => {
        try {
            const res = await apiClient.post("/quotations/add", payload);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to create quotation");
        }
    },

    // 3. GET /api/quotations/:id
    getById: async (id: string): Promise<QuotationResponse> => {
        const res = await apiClient.get(`/quotations/${id}`);
        return res.data;
    },

    // 4. PUT /api/quotations/update/:id
    update: async (id: string, payload: Partial<CreateQuotationPayload>): Promise<QuotationResponse> => {
        try {
            const res = await apiClient.put(`/quotations/update/${id}`, payload);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to update quotation");
        }
    },

    // 5. DELETE /api/quotations/delete/:id
    delete: async (id: string): Promise<QuotationResponse> => {
        try {
            const res = await apiClient.delete(`/quotations/delete/${id}`);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to delete quotation");
        }
    },

    // 6. PATCH /api/quotations/:id/status
    updateStatus: async (id: string, status: string): Promise<QuotationResponse> => {
        try {
            const res = await apiClient.patch(`/quotations/${id}/status`, { status });
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to update status");
        }
    },

    // 7. POST /api/quotations/bulk-delete
    bulkDelete: async (ids: string[]): Promise<QuotationResponse> => {
        try {
            const res = await apiClient.post("/quotations/bulk-delete", { ids });
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to bulk delete quotations");
        }
    },

    // 8. POST /api/quotations/bulk-update
    bulkUpdate: async (ids: string[], status: string): Promise<QuotationResponse> => {
        try {
            const res = await apiClient.post("/quotations/bulk-update", { ids, status });
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to bulk update quotations");
        }
    },

    // 9. GET /api/quotations/:id/export/pdf
    downloadSinglePdf: async (id: string, quotationNo: string): Promise<void> => {
        try {
            const res = await apiClient.get(`/quotations/${id}/export/pdf`, { responseType: "blob" });
            const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
            const a = document.createElement("a");
            a.href = url;
            a.download = `quotation-${quotationNo}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("PDF download error:", error);
            throw new Error("Failed to download PDF");
        }
    },

    // 10. GET /api/quotations/export/pdf
    exportAllPdf: async (): Promise<void> => {
        try {
            const res = await apiClient.get("/quotations/export/pdf", { responseType: "blob" });
            const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
            const a = document.createElement("a");
            a.href = url;
            a.download = `quotations-${Date.now()}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("PDF export error:", error);
            throw new Error("Failed to export PDF");
        }
    },

    // 11. GET /api/quotations/export/xlsx
    exportXlsx: async (): Promise<void> => {
        try {
            const res = await apiClient.get("/quotations/export/xlsx", { responseType: "blob" });
            const url = window.URL.createObjectURL(
                new Blob([res.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
            );
            const a = document.createElement("a");
            a.href = url;
            a.download = `quotations-${Date.now()}.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("XLSX export error:", error);
            throw new Error("Failed to export XLSX");
        }
    },

    // 12. GET /api/quotations/generate-number
    generateNumber: async (): Promise<string> => {
        try {
            const res = await apiClient.get("/quotations/generate-number");
            return res.data.quotationNo;
        } catch (error) {
            // Fallback: generate locally
            const today = new Date();
            const datePart = today.toISOString().slice(0, 10).replace(/-/g, "");
            const rand = Math.floor(1000 + Math.random() * 9000);
            return `QT-${datePart}-${rand}`;
        }
    },

    // 13. POST /api/quotations/:id/convert
    convertToInvoice: async (id: string): Promise<any> => {
        try {
            const res = await apiClient.post(`/quotations/${id}/convert`);
            return res.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Failed to convert quotation");
        }
    },
};
