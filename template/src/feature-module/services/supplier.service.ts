import apiClient from "./api.service";

export interface Supplier {
  _id?: string;
  id?: string;
  code?: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  taxId?: string;
  status: "Active" | "Inactive";
}

export interface SupplierListResponse {
  message: string;
  status: boolean;
  dataFound: boolean;
  data: Supplier[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface SupplierResponse {
  message: string;
  status: boolean;
  dataFound: boolean;
  data?: Supplier;
}


export const SupplierService = {
  // Get all suppliers with pagination, search, and filters
  getSuppliers: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<SupplierListResponse> => {
    try {
      const response = await apiClient.get("/suppliers", { params });
      return response.data;
    } catch (error: any) {
      console.error("Get suppliers failed:", error);
      throw error;
    }
  },

  // Get supplier by ID
  getSupplierById: async (id: string): Promise<SupplierResponse> => {
    try {
      const response = await apiClient.get(`/suppliers/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Get supplier by ID failed:", error);
      throw error;
    }
  },

  // Add new supplier
  addSupplier: async (supplierData: Partial<Supplier>): Promise<SupplierResponse> => {
    try {
      const response = await apiClient.post("/suppliers/add", supplierData);
      return response.data;
    } catch (error: any) {
      console.error("Add supplier failed:", error);
      throw error;
    }
  },

  // Update supplier 
  updateSupplier: async (id: string, supplierData: Partial<Supplier>): Promise<SupplierResponse> => {
    try {
      const response = await apiClient.put(`/suppliers/${id}`, supplierData);
      return response.data;
    } catch (error: any) {
      console.error("Update supplier failed:", error);
      throw error;
    }
  },

  // Delete supplier
  deleteSupplier: async (id: string): Promise<SupplierResponse> => {
    try {
      const response = await apiClient.delete(`/suppliers/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Delete supplier failed:", error);
      throw error;
    }
  },

  // Toggle supplier status
  toggleStatus: async (id: string, status: "Active" | "Inactive"): Promise<SupplierResponse> => {
    try {
      const response = await apiClient.patch(`/suppliers/${id}/status`, { status });
      return response.data;
    } catch (error: any) {
      console.error("Toggle status failed:", error);
      throw error;
    }
  },

  // Bulk delete suppliers
  bulkDelete: async (ids: string[]): Promise<SupplierResponse> => {
    try {
      const response = await apiClient.post("/suppliers/bulk-delete", { ids });
      return response.data;
    } catch (error: any) {
      console.error("Bulk delete failed:", error);
      throw error;
    }
  },

  // Bulk update suppliers
  bulkUpdate: async (ids: string[], status: "Active" | "Inactive"): Promise<SupplierResponse> => {
    try {
      const response = await apiClient.post("/suppliers/bulk-update", { ids, status });
      return response.data;
    } catch (error: any) {
      console.error("Bulk update failed:", error);
      throw error;
    }
  },

  // Export suppliers
  exportSuppliers: async (format: "pdf" | "xlsx"): Promise<any> => {
    try {
      const response = await apiClient.get("/suppliers/export", {
        params: { format },
        responseType: "blob",
      });
      return response.data;
    } catch (error: any) {
      console.error("Export suppliers failed:", error);
      throw error;
    }
  },

  // Get single supplier report (PDF)
  getSupplierReport: async (id: string): Promise<Blob> => {
    try {
      const response = await apiClient.get(`/suppliers/${id}/report`, {
        responseType: "blob",
      });
      return response.data;
    } catch (error: any) {
      console.error("Get supplier report failed:", error);
      throw error;
    }
  },
};
