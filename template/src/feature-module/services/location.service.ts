import apiClient from "./api.service";

// Location interfaces
export interface Country {
    id: string;
    label: string;
    value: string;
    name: string;
    code: string;
    phoneCode: string;
    status: string;
}

export interface State {
    id: string;
    label: string;
    value: string;
    name: string;
    stateCode: string;
    countryCode: string;
    status: string;
}

export interface City {
    id: string;
    label: string;
    value: string;
    name: string;
    stateCode?: string;
    countryCode: string;
    status: string;
}

export interface LocationResponse<T> {
    message: string;
    status: boolean;
    dataFound: boolean;
    data: T[];
}

export const LocationService = {
    // Get all countries
    getCountries: async (params?: {
        search?: string;
        status?: string;
    }): Promise<LocationResponse<Country>> => {
        try {
            const response = await apiClient.get("/locations/countries", { params });
            return response.data;
        } catch (error: any) {
            console.error("Get countries failed:", error);
            throw error;
        }
    },

    // Get states by country
    getStates: async (params?: {
        countryCode?: string;
        search?: string;
        status?: string;
    }): Promise<LocationResponse<State>> => {
        try {
            const response = await apiClient.get("/locations/states", { params });
            return response.data;
        } catch (error: any) {
            console.error("Get states failed:", error);
            throw error;
        }
    },

    // Get cities by state and country
    getCities: async (params?: {
        countryCode?: string;
        stateCode?: string;
        search?: string;
        status?: string;
    }): Promise<LocationResponse<City>> => {
        try {
            const response = await apiClient.get("/locations/cities", { params });
            return response.data;
        } catch (error: any) {
            console.error("Get cities failed:", error);
            throw error;
        }
    },


};
