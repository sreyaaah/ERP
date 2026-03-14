import apiClient from "./api.service";

export const dashboardService = {
  getSummary: async (startDate?: string, endDate?: string) => {
    let url = "/dashboard/summary";
    if (startDate && endDate) {
        url += `?startDate=${startDate}&endDate=${endDate}`;
    }
    const response = await apiClient.get(url);
    return response.data;
  },
  getCharts: async (year?: number) => {
    const url = year ? `/dashboard/charts?year=${year}` : "/dashboard/charts";
    const response = await apiClient.get(url);
    return response.data;
  },
  getOrdersChart: async (period: string) => {
    const response = await apiClient.get(`/dashboard/orders-chart?period=${period}`);
    return response.data;
  },
  getTopSelling: async (period: string) => {
    const response = await apiClient.get(`/dashboard/top-selling?period=${period}`);
    return response.data;
  },
  getRecentTransactions: async (period: string) => {
    const response = await apiClient.get(`/dashboard/recent-transactions?period=${period}`);
    return response.data;
  },
  getTopCustomers: async (period: string) => {
    const response = await apiClient.get(`/dashboard/top-customers?period=${period}`);
    return response.data;
  },
  getTopCategories: async (period: string) => {
    const response = await apiClient.get(`/dashboard/top-categories?period=${period}`);
    return response.data;
  },
  getOrdersHeatmap: async (period: string) => {
    const response = await apiClient.get(`/dashboard/orders-heatmap?period=${period}`);
    return response.data;
  }
};
