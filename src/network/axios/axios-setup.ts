import { AxiosRequestConfig } from 'axios'

/** 定义axios基础配置 */
export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL as string, // If cross-domain is configured locally, then .env.development VITE_API_BASE_URL please modify it to your replacement string e.g. '/api'
  timeout: 8000,
}
