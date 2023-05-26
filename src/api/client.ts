import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://localhost:5000/api',
});

async function getResources<T>(): Promise<T[]> {
  try {
    const response: AxiosResponse<T[]> = await apiClient.get<T[]>('');
    return response.data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
}

async function createResource<T>(resourceData: T): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.post<T>('', resourceData);
    return response.data;
  } catch (error) {
    console.error('Error creating resource:', error);
    throw error;
  }
}

async function getResource<T>(resourceId: number): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.get<T>(`/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching resource with ID ${resourceId}:`, error);
    throw error;
  }
}

async function updateResource<T>(resourceId: number, resourceData: Partial<T>): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.put<T>(`/${resourceId}`, resourceData);
    return response.data;
  } catch (error) {
    console.error(`Error updating resource with ID ${resourceId}:`, error);
    throw error;
  }
}

async function deleteResource(resourceId: number): Promise<void> {
  try {
    await apiClient.delete(`/${resourceId}`);
    console.log(`Resource with ID ${resourceId} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting resource with ID ${resourceId}:`, error);
    throw error;
  }
}

export const ApiClient = {
  get: getResources,
  create: createResource,
  getById: getResource,
  update: updateResource,
  remove: deleteResource,
};

