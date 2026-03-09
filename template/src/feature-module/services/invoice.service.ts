import apiClient from "./api.service";

export interface InvoiceItem {
  itemId?: number;
  productId?: string;
  productName: string;
  quantity: number;
  rate: number;
  discount: number;
  taxPercent: number;
  hsnSac?: string;
  amount: number;
}

export interface Invoice {
  invoiceId?: string;
  invoiceNumber: string;
  invoiceType: "Intrastate" | "Interstate" | "International";
  customer?: {
    customerId: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  customerId?: string; // For creating/updating
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  customerAddress?: string;
  customerGstin?: string;
  invoiceDate: string;
  dueDate: string;
  paymentStatus: "Paid" | "Unpaid" | "Partially Paid" | "Overdue";
  items: InvoiceItem[];
  subtotal: number;
  taxAmount: number;
  grandTotal: number;
  paidAmount?: number;
  amountDue?: number;
  notes?: string;
  terms?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface InvoiceListResponse {
  status: boolean;
  message: string;
  totalRecords: number;
  currentPage: number;
  totalPages: number;
  data: Invoice[];
}

export const InvoiceService = {
  // GET all invoices
  getAllInvoices: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    customerId?: string;
    sortBy?: string;
  }): Promise<InvoiceListResponse> => {
    try {
      const response = await apiClient.get("/invoices", { params });
      return response.data;
    } catch (error) {
      console.error("Get invoices failed:", error);
      throw error;
    }
  },

  // GET invoice by ID
  getInvoiceById: async (id: string): Promise<{ status: boolean; data: Invoice }> => {
    try {
      const response = await apiClient.get(`/invoices/${id}`);
      return response.data;
    } catch (error) {
      console.error("Get invoice by ID failed:", error);
      throw error;
    }
  },

  // POST add invoice
  saveInvoice: async (invoiceData: Partial<Invoice>): Promise<{ status: boolean; message: string; invoiceId: string; invoiceNumber: string }> => {
    try {
      const response = await apiClient.post("/invoices/add", invoiceData);
      return response.data;
    } catch (error) {
      console.error("Save invoice failed:", error);
      throw error;
    }
  },

  // PUT update invoice
  updateInvoice: async (id: string, invoiceData: Partial<Invoice>): Promise<{ status: boolean; message: string }> => {
    try {
      const response = await apiClient.put(`/invoices/update/${id}`, invoiceData);
      return response.data;
    } catch (error) {
      console.error("Update invoice failed:", error);
      throw error;
    }
  },

  // DELETE invoice
  deleteInvoice: async (id: string): Promise<{ status: boolean; message: string }> => {
    try {
      const response = await apiClient.delete(`/invoices/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Delete invoice failed:", error);
      throw error;
    }
  },

  // PATCH status
  updateStatus: async (id: string, status: string): Promise<{ status: boolean; message: string }> => {
    try {
      const response = await apiClient.patch(`/invoices/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error("Update status failed:", error);
      throw error;
    }
  },

  // POST bulk delete
  bulkDelete: async (invoiceIds: string[]): Promise<{ status: boolean; message: string }> => {
    try {
      const response = await apiClient.post("/invoices/bulk-delete", { invoiceIds });
      return response.data;
    } catch (error) {
      console.error("Bulk delete failed:", error);
      throw error;
    }
  },

  // POST bulk update
  bulkUpdate: async (invoiceIds: string[], status: string): Promise<{ status: boolean; message: string }> => {
    try {
      const response = await apiClient.post("/invoices/bulk-update", { invoiceIds, status });
      return response.data;
    } catch (error) {
      console.error("Bulk update failed:", error);
      throw error;
    }
  },

  // GET generate number
  generateInvoiceNumber: async (): Promise<{ status: boolean; invoiceNumber: string }> => {
    try {
      const response = await apiClient.get("/invoices/generate-number");
      return response.data;
    } catch (error) {
      console.error("Generate invoice number failed:", error);
      throw error;
    }
  },

  // Export PDF (Single)
  downloadInvoicePdf: async (id: string, invoiceNumber?: string): Promise<void> => {
    try {
      const response = await apiClient.get(`/invoices/${id}/export/pdf`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${invoiceNumber || id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download PDF failed:", error);
      throw error;
    }
  },

  // Export Bulk
  exportBulk: async (format: "pdf" | "xlsx"): Promise<void> => {
    try {
      const response = await apiClient.get(`/invoices/export/${format}`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `invoices-export-${new Date().getTime()}.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(`Export ${format} failed:`, error);
      throw error;
    }
  },

  // Utility: Number to Words (INR)
  numberToWords(num: number, invoiceType: string): string {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
      "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
      "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    const convert = (n: number): string => {
      if (n === 0) return "";
      if (n < 20) return ones[n] + " ";
      if (n < 100) return tens[Math.floor(n / 10)] + " " + ones[n % 10] + " ";
      if (n < 1000) return ones[Math.floor(n / 100)] + " Hundred " + convert(n % 100);
      if (n < 100000) return convert(Math.floor(n / 1000)) + "Thousand " + convert(n % 1000);
      if (n < 10000000) return convert(Math.floor(n / 100000)) + "Lakh " + convert(n % 100000);
      return convert(Math.floor(n / 10000000)) + "Crore " + convert(n % 10000000);
    };

    const rounded = Math.round(num);
    if (rounded === 0) return invoiceType === 'international' ? "Zero Dollars Only" : "Zero Rupees Only";

    const words = convert(rounded).trim();
    return invoiceType === 'international' ? `${words} Dollars Only` : `${words} Rupees Only`;
  }
};