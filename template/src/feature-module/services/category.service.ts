const BASE_URL = "http://localhost:5000/api";

export interface Category {
    id: string;
    name: string;
    slug: string;
    status: "Active" | "Inactive";
}

const getHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,
});

export const CategoryService = {
    // GET all categories
    getAll: async (params?: { search?: string }): Promise<Category[]> => {
        const query = new URLSearchParams();
        if (params?.search) query.set("search", params.search);
        const res = await fetch(`${BASE_URL}/categories?limit=1000&page=1&${query}`, {
            headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        return (data.data || []).map((c: any) => ({
            id: c.id || c._id,
            name: c.name,
            slug: c.slug,
            status: c.status,
            createdAt: c.createdAt || c.created_at,
        }));
    },

    // POST create
    create: async (data: Omit<Category, "id">): Promise<Category> => {
        const res = await fetch(`${BASE_URL}/categories`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || "Failed to create category");
        }
        return res.json();
    },

    // PUT update
    update: async (id: string, data: Partial<Category>): Promise<Category> => {
        const res = await fetch(`${BASE_URL}/categories/${id}`, {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || "Failed to update category");
        }
        return res.json();
    },

    // DELETE single
    delete: async (id: string): Promise<void> => {
        const res = await fetch(`${BASE_URL}/categories/${id}`, {
            method: "DELETE",
            headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to delete category");
    },

    // POST bulk delete
    bulkDelete: async (ids: string[]): Promise<void> => {
        const res = await fetch(`${BASE_URL}/categories/bulk-delete`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ ids }),
        });
        if (!res.ok) throw new Error("Failed to delete selected categories");
    },

    // POST bulk update status
    bulkUpdateStatus: async (ids: string[], status: "Active" | "Inactive"): Promise<void> => {
        const res = await fetch(`${BASE_URL}/categories/bulk-update`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ ids, status }),
        });
        if (!res.ok) throw new Error("Failed to update status");
    },

    // GET export
    export: async (format: "xlsx" | "pdf"): Promise<void> => {
        const res = await fetch(`${BASE_URL}/categories/export?format=${format}`, {
            headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Export failed");
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `categories_${new Date().getTime()}.${format === "xlsx" ? "xlsx" : "pdf"}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    },
};
