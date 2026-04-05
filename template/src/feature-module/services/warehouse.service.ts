import apiClient from "./api.service";

export interface Warehouse {
  _id?: string;
  id?: string;
  code?: string;
  name: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  status: "Active" | "Inactive";
  avatar?: string;
}

export interface WarehouseListResponse {
  message: string;
  status: boolean;
  dataFound: boolean;
  data: Warehouse[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface WarehouseResponse {
  message: string;
  status: boolean;
  dataFound: boolean;
  data?: Warehouse;
}


export const WarehouseService = {
  // Get all warehouses with pagination, search, and filters
  getWarehouses: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<WarehouseListResponse> => {
    try {
      const response = await apiClient.get("/warehouses", { params });
      return response.data;
    } catch (error: any) {
      console.error("Get warehouses failed:", error);
      throw error;
    }
  },

  // Get warehouse by ID
  getWarehouseById: async (id: string): Promise<WarehouseResponse> => {
    try {
      const response = await apiClient.get(`/warehouses/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Get warehouse by ID failed:", error);
      throw error;
    }
  },

  // Add new warehouse
  addWarehouse: async (warehouseData: Partial<Warehouse> | FormData): Promise<WarehouseResponse> => {
    try {
      const config = warehouseData instanceof FormData
        ? { headers: { "Content-Type": "multipart/form-data" } }
        : {};

      const response = await apiClient.post("/warehouses/add", warehouseData, config);
      return response.data;
    } catch (error: any) {
      console.error("Add warehouse failed:", error);
      throw error;
    }
  },

  // Update warehouse 
  updateWarehouse: async (id: string, warehouseData: Partial<Warehouse> | FormData): Promise<WarehouseResponse> => {
    try {
      const config = warehouseData instanceof FormData
        ? { headers: { "Content-Type": "multipart/form-data" } }
        : {};

      const response = await apiClient.put(`/warehouses/${id}`, warehouseData, config);
      return response.data;
    } catch (error: any) {
      console.error("Update warehouse failed:", error);
      throw error;
    }
  },

  // Delete warehouse
  deleteWarehouse: async (id: string): Promise<WarehouseResponse> => {
    try {
      const response = await apiClient.delete(`/warehouses/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Delete warehouse failed:", error);
      throw error;
    }
  },

  // Toggle warehouse status
  toggleStatus: async (id: string, status: "Active" | "Inactive"): Promise<WarehouseResponse> => {
    try {
      const response = await apiClient.patch(`/warehouses/${id}/status`, { status });
      return response.data;
    } catch (error: any) {
      console.error("Toggle status failed:", error);
      throw error;
    }
  },

  // Bulk delete warehouses
  bulkDelete: async (ids: string[]): Promise<WarehouseResponse> => {
    try {
      const response = await apiClient.post("/warehouses/bulk-delete", { ids });
      return response.data;
    } catch (error: any) {
      console.error("Bulk delete failed:", error);
      throw error;
    }
  },

  // Bulk update warehouses
  bulkUpdate: async (ids: string[], status: "Active" | "Inactive"): Promise<WarehouseResponse> => {
    try {
      const response = await apiClient.post("/warehouses/bulk-update", { ids, status });
      return response.data;
    } catch (error: any) {
      console.error("Bulk update failed:", error);
      throw error;
    }
  },

  // Export warehouses
  exportWarehouses: async (format: "pdf" | "xlsx"): Promise<any> => {
    try {
      const response = await apiClient.get("/warehouses/export", {
        params: { format },
        responseType: "blob",
      });
      return response.data;
    } catch (error: any) {
      console.error("Export warehouses failed:", error);
      throw error;
    }
  },

  // Get single warehouse report (PDF)
  getWarehouseReport: async (id: string): Promise<Blob> => {
    try {
      const response = await apiClient.get(`/warehouses/${id}/report`, {
        responseType: "blob",
      });
      return response.data;
    } catch (error: any) {
      console.error("Get warehouse report failed:", error);
      throw error;
    }
  },
};
