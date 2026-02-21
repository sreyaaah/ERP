import apiClient from "./api.service";

// Customer interface
export interface Customer {
  _id?: string;
  id?: string;
  code?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  gstin?: string;
  status: "Active" | "Inactive";
  avatar?: string;
  customer?: string; // Combined name for display
}

export interface CustomerListResponse {
  message: string;
  status: boolean;
  dataFound: boolean;
  data: Customer[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface CustomerResponse {
  message: string;
  status: boolean;
  dataFound: boolean;
  data?: Customer;
}

export const CustomerService = {
  // Get all customers with pagination, search, and filters
  getCustomers: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<CustomerListResponse> => {
    try {
      const response = await apiClient.get("/customers", { params });
      return response.data;
    } catch (error: any) {
      console.error("Get customers failed:", error);
      throw error;
    }
  },

  // Get customer by ID
  getCustomerById: async (id: string): Promise<CustomerResponse> => {
    try {
      const response = await apiClient.get(`/customers/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Get customer by ID failed:", error);
      throw error;
    }
  },

  // Add new customer
  addCustomer: async (customerData: Partial<Customer> | FormData): Promise<CustomerResponse> => {
    try {
      const config = customerData instanceof FormData
        ? { headers: { "Content-Type": "multipart/form-data" } }
        : {};

      const response = await apiClient.post("/customers/add", customerData, config);
      return response.data;
    } catch (error: any) {
      console.error("Add customer failed:", error);
      throw error;
    }
  },

  // Update customer 
  updateCustomer: async (id: string, customerData: Partial<Customer> | FormData): Promise<CustomerResponse> => {
    try {
      const config = customerData instanceof FormData
        ? { headers: { "Content-Type": "multipart/form-data" } }
        : {};

      const response = await apiClient.put(`/customers/${id}`, customerData, config);
      return response.data;
    } catch (error: any) {
      console.error("Update customer failed:", error);
      throw error;
    }
  },

  // Delete customer
  deleteCustomer: async (id: string): Promise<CustomerResponse> => {
    try {
      const response = await apiClient.delete(`/customers/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Delete customer failed:", error);
      throw error;
    }
  },

  // Toggle customer status
  toggleStatus: async (id: string, status: "Active" | "Inactive"): Promise<CustomerResponse> => {
    try {
      const response = await apiClient.patch(`/customers/${id}/status`, { status });
      return response.data;
    } catch (error: any) {
      console.error("Toggle status failed:", error);
      throw error;
    }
  },

  // Bulk delete customers
  bulkDelete: async (ids: string[]): Promise<CustomerResponse> => {
    try {
      const response = await apiClient.post("/customers/bulk-delete", { ids });
      return response.data;
    } catch (error: any) {
      console.error("Bulk delete failed:", error);
      throw error;
    }
  },

  // Bulk update customers
  bulkUpdate: async (ids: string[], status: "Active" | "Inactive"): Promise<CustomerResponse> => {
    try {
      const response = await apiClient.post("/customers/bulk-update", { ids, status });
      return response.data;
    } catch (error: any) {
      console.error("Bulk update failed:", error);
      throw error;
    }
  },

  // Export customers
  exportCustomers: async (format: "pdf" | "xlsx"): Promise<any> => {
    try {
      const response = await apiClient.get("/customers/export", {
        params: { format },
        responseType: "blob",
      });
      return response.data;
    } catch (error: any) {
      console.error("Export customers failed:", error);
      throw error;
    }
  },

  // Get single customer report (PDF)
  getCustomerReport: async (id: string): Promise<Blob> => {
    try {
      const response = await apiClient.get(`/customers/${id}/report`, {
        responseType: "blob",
      });
      return response.data;
    } catch (error: any) {
      console.error("Get customer report failed:", error);
      throw error;
    }
  },
};
