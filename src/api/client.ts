import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
  timeout: 10000,
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error: unknown) =>
    Promise.reject(error instanceof Error ? error : new Error('API request failed')),
)
