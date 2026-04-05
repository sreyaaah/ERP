import apiClient from "./api.service";

export interface Store {
  _id?: string;
  id?: string;
  code?: string;
  name: string;
  username?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  gstin?: string;
  status: "Active" | "Inactive";
  avatar?: string;
}

export interface StoreListResponse {
  message: string;
  status: boolean;
  dataFound: boolean;
  data: Store[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface StoreResponse {
  message: string;
  status: boolean;
  dataFound: boolean;
  data?: Store;
}


export const StoreService = {
  // Get all stores with pagination, search, and filters
  getStores: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<StoreListResponse> => {
    try {
      const response = await apiClient.get("/stores", { params });
      return response.data;
    } catch (error: any) {
      console.error("Get stores failed:", error);
      throw error;
    }
  },

  // Get store by ID
  getStoreById: async (id: string): Promise<StoreResponse> => {
    try {
      const response = await apiClient.get(`/stores/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Get store by ID failed:", error);
      throw error;
    }
  },

  // Add new store
  addStore: async (storeData: Partial<Store> | FormData): Promise<StoreResponse> => {
    try {
      const config = storeData instanceof FormData
        ? { headers: { "Content-Type": "multipart/form-data" } }
        : {};

      const response = await apiClient.post("/stores/add", storeData, config);
      return response.data;
    } catch (error: any) {
      console.error("Add store failed:", error);
      throw error;
    }
  },

  // Update store 
  updateStore: async (id: string, storeData: Partial<Store> | FormData): Promise<StoreResponse> => {
    try {
      const config = storeData instanceof FormData
        ? { headers: { "Content-Type": "multipart/form-data" } }
        : {};

      const response = await apiClient.put(`/stores/${id}`, storeData, config);
      return response.data;
    } catch (error: any) {
      console.error("Update store failed:", error);
      throw error;
    }
  },

  // Delete store
  deleteStore: async (id: string): Promise<StoreResponse> => {
    try {
      const response = await apiClient.delete(`/stores/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Delete store failed:", error);
      throw error;
    }
  },

  // Toggle store status
  toggleStatus: async (id: string, status: "Active" | "Inactive"): Promise<StoreResponse> => {
    try {
      const response = await apiClient.patch(`/stores/${id}/status`, { status });
      return response.data;
    } catch (error: any) {
      console.error("Toggle status failed:", error);
      throw error;
    }
  },

  // Bulk delete stores
  bulkDelete: async (ids: string[]): Promise<StoreResponse> => {
    try {
      const response = await apiClient.post("/stores/bulk-delete", { ids });
      return response.data;
    } catch (error: any) {
      console.error("Bulk delete failed:", error);
      throw error;
    }
  },

  // Bulk update stores
  bulkUpdate: async (ids: string[], status: "Active" | "Inactive"): Promise<StoreResponse> => {
    try {
      const response = await apiClient.post("/stores/bulk-update", { ids, status });
      return response.data;
    } catch (error: any) {
      console.error("Bulk update failed:", error);
      throw error;
    }
  },

  // Export stores
  exportStores: async (format: "pdf" | "xlsx"): Promise<any> => {
    try {
      const response = await apiClient.get("/stores/export", {
        params: { format },
        responseType: "blob",
      });
      return response.data;
    } catch (error: any) {
      console.error("Export stores failed:", error);
      throw error;
    }
  },

  // Get single store report (PDF)
  getStoreReport: async (id: string): Promise<Blob> => {
    try {
      const response = await apiClient.get(`/stores/${id}/report`, {
        responseType: "blob",
      });
      return response.data;
    } catch (error: any) {
      console.error("Get store report failed:", error);
      throw error;
    }
  },
};
