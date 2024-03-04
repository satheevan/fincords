import ApiServices from "./apiServices"
import apiPath from "./pathAllocation"

const getResourcePath = (resource) => {
    return apiPath?.resources[resource] || `/${resource}`;
}

const CrudOperation = {
    getAll: async (resource) => {
        try {
            const response = await ApiServices.get(getResourcePath(resource))
            return response.data;
        } catch (error) {
            console.error(`error in getAll ${resource}`, error);
            throw error;
        }
    },
    create: async (resource, payload) => {
        try {
            const response = await ApiServices.post(getResourcePath(resource), payload)
            return response.data;
        } catch (error) {
            console.error(`error in create ${resource}`, error);
            throw error;
        }
    },

}

export default CrudOperation;