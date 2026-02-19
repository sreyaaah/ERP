const BASE_URL = "http://localhost:5000/api";

export interface Subcategory {
    id: string;
    name: string;
    slug: string;
    categoryId: string;
    categoryName: string;
    status: "Active" | "Inactive";
    createdAt: string;
    updatedAt: string;
}

export interface SubcategoryListResponse {
    status: boolean;
    message: string;
    data: Subcategory[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        pages: number;
    };
}

export interface SubcategoryResponse {
    status: boolean;
    message: string;
    data: Subcategory;
}

export interface CreateSubcategoryPayload {
    name: string;
    slug: string;
    categoryId: string;
    status?: "Active" | "Inactive";
}

export interface UpdateSubcategoryPayload {
    name?: string;
    slug?: string;
    categoryId?: string;
    status?: "Active" | "Inactive";
}

const getHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,
});

export const SubcategoryService = {
    // GET all subcategories with pagination & filters
    getAll: async (params?: {
        page?: number;
        limit?: number;
        search?: string;
        categoryId?: string;
    }): Promise<SubcategoryListResponse> => {
        const query = new URLSearchParams();
        if (params?.page) query.set("page", String(params.page));
        if (params?.limit !== undefined) query.set("limit", String(params.limit));
        if (params?.search) query.set("search", params.search);
        if (params?.categoryId) query.set("categoryId", params.categoryId);

        const res = await fetch(`${BASE_URL}/subcategories?${query}`, {
            headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to fetch subcategories");
        return res.json();
    },

    // GET single subcategory
    getById: async (id: string): Promise<SubcategoryResponse> => {
        const res = await fetch(`${BASE_URL}/subcategories/${id}`, {
            headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to fetch subcategory");
        return res.json();
    },

    // POST create
    create: async (payload: CreateSubcategoryPayload): Promise<SubcategoryResponse> => {
        const res = await fetch(`${BASE_URL}/subcategories`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to create subcategory");
        return data;
    },

    // PUT update
    update: async (
        id: string,
        payload: UpdateSubcategoryPayload
    ): Promise<SubcategoryResponse> => {
        const res = await fetch(`${BASE_URL}/subcategories/${id}`, {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to update subcategory");
        return data;
    },

    // DELETE single
    delete: async (id: string): Promise<{ status: boolean; message: string }> => {
        const res = await fetch(`${BASE_URL}/subcategories/${id}`, {
            method: "DELETE",
            headers: getHeaders(),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to delete subcategory");
        return data;
    },

    // POST bulk delete
    bulkDelete: async (
        ids: string[]
    ): Promise<{ status: boolean; message: string }> => {
        const res = await fetch(`${BASE_URL}/subcategories/bulk-delete`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ ids }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Bulk delete failed");
        return data;
    },

    // POST bulk update status
    bulkUpdateStatus: async (
        ids: string[],
        status: "Active" | "Inactive"
    ): Promise<{ status: boolean; message: string }> => {
        const res = await fetch(`${BASE_URL}/subcategories/bulk-update`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ ids, status }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Bulk update failed");
        return data;
    },

    // GET export
    export: async (format: "xlsx" | "pdf"): Promise<void> => {
        const res = await fetch(
            `${BASE_URL}/subcategories/export?format=${format}`,
            { headers: getHeaders() }
        );
        if (!res.ok) throw new Error("Export failed");
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `subcategories.${format}`;
        a.click();
        window.URL.revokeObjectURL(url);
    },
};
