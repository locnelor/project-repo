import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'

type InterceptorRequestFulfilled = (req: InternalAxiosRequestConfig) => any
type InterceptorResponseFulfilled = (res: AxiosResponse<any, any>) => any
export class RequestClient {
  private readonly instance: AxiosInstance
  private download = ''
  private upload = ''
  constructor(options: CreateAxiosDefaults) {
    this.instance = axios.create(options)
  }

  addRequestInterceptor(
    fulfilled: InterceptorRequestFulfilled,
    rejected = (error: any) => error,
  ) {
    this.instance.interceptors.request.use(fulfilled, rejected)
  }

  addResponseInterceptor(
    fulfilled: InterceptorResponseFulfilled,
    rejected = (error: any) => error,
  ) {
    this.instance.interceptors.response.use(fulfilled, rejected)
  }

  /**
   * DELETE请求方法
   */
  public delete<T = any>(url: string, config?: RequestClient): Promise<T> {
    return this.request<T>(url, { ...config, method: 'DELETE' })
  }

  /**
   * GET请求方法
   */
  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>(url, { ...config, method: 'GET' })
  }

  /**
   * POST请求方法
   */
  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>(url, { ...config, data, method: 'POST' })
  }

  /**
   * PUT请求方法
   */
  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>(url, { ...config, data, method: 'PUT' })
  }

  /**
   * 通用的请求方法
   */
  public async request<T>(url: string, config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance({
        url,
        ...config,
      })
      return response.data as T
    } catch (error: any) {
      throw error.response ? error.response.data : error
    }
  }
}
