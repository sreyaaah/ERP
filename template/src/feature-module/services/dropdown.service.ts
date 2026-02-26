import apiClient from "./api.service";

export const DropdownService = {
    getStores: async () => {
        try {
            const res = await apiClient.get("/stores");
            return res.data.data;
        } catch (error) {
            console.error("Failed to fetch stores", error);
            return [];
        }
    },

    getWarehouses: async () => {
        try {
            const res = await apiClient.get("/warehouses");
            return res.data.data;
        } catch (error) {
            console.error("Failed to fetch warehouses", error);
            return [];
        }
    },

    getSellingTypes: async () => {
        try {
            const res = await apiClient.get("/selling-types");
            return res.data.data;
        } catch (error) {
            console.error("Failed to fetch selling types", error);
            return [];
        }
    },

    getBarcodeSymbologies: async () => {
        try {
            const res = await apiClient.get("/barcode-symbology");
            return res.data.data;
        } catch (error) {
            console.error("Failed to fetch barcode symbology", error);
            return [];
        }
    },

    getWarranties: async () => {
        try {
            const res = await apiClient.get("/warranties");
            return res.data.data;
        } catch (error) {
            console.error("Failed to fetch warranties", error);
            return [];
        }
    }
};
