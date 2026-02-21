
const API_URL = 'http://localhost:5000/api/categories';

export const categoryService = {
    getCategories: async (params?: { page?: number; limit?: number; search?: string }) => {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.append('page', params.page.toString());
        if (params?.limit !== undefined) queryParams.append('limit', params.limit.toString());
        if (params?.search) queryParams.append('search', params.search);

        const response = await fetch(`${API_URL}?${queryParams.toString()}`);
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        return response.json();
    },

    createCategory: async (data: any) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create category');
        }
        return response.json();
    },

    updateCategory: async (id: string, data: any) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update category');
        }
        return response.json();
    },

    deleteCategory: async (id: string) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete category');
        }
        return response.json();
    },

    bulkDeleteCategories: async (ids: string[]) => {
        const response = await fetch(`${API_URL}/bulk-delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to bulk delete categories');
        }
        return response.json();
    },

    bulkUpdateStatus: async (ids: string[], status: string) => {
        const response = await fetch(`${API_URL}/bulk-update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids, status }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update status');
        }
        return response.json();
    },

    exportCategories: async (format: 'pdf' | 'xlsx') => {
        const response = await fetch(`${API_URL}/export?format=${format}`);
        if (!response.ok) {
            throw new Error('Failed to export categories');
        }
        return response.blob();
    }
};
