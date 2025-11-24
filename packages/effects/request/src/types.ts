import type { Ref } from "vue";
import type { RequestApi } from "./useRequest";

export type RequestAction<T> = (params: any) => Promise<T>;
export type RequestOptions<T> = {
  /** 是否自动请求
   * @default true
   */
  auto?: boolean;

  /** 默认请求的参数（当启用缓存时，若缓存存在则失效） */
  defaultParams?: any;

  /** 默认值，用于初始化 data 状态 */
  defaultValue?: any;

  /** 请求名称，用于缓存标识 */
  name?: string;

  /**
   * 是否将请求缓存至 url 中
   * @default false
   */
  cacheToUrl?: boolean;

  /** 是否启用分页请求（自动在请求参数中添加分页标识，并在返回时自动更新分页器） */
  pagination?: boolean;

  /** 请求前，若返回 false 或 Promise<false> 时则取消请求 */
  beforeRequest?: (params: any) => boolean | Promise<boolean>;

  /** 请求成功钩子 */
  onSuccess?: (data: any) => void;

  /** 请求失败钩子 */
  onError?: (error: any) => void;

  /** 无论是否请求都执行的钩子 */
  onFinally?: () => void;

  /** 防抖延迟时间（毫秒） */
  debounce?: number;

  /** 节流间隔时间（毫秒） */
  throttle?: number;

  /** 短时间相同请求复用时间（毫秒），若不为0则应用 */
  dedupe?: number;

  /** 数据转换函数，用于处理响应数据 */
  transform?: (data: any) => any;

  /** 是否监听参数变化时自动请求，默认 false */
  watch?: boolean;

  /** 轮询时间（毫秒），若不为0则执行轮询请求 */
  polling?: number;
};

export type RequestFn = <T>(
  action: RequestAction<T>,
  options?: RequestOptions<T>
) => [
  {
    loading: Ref<boolean>;
    data: Ref<T>;
    error: Ref<any>;
  },
  RequestApi<T>,
];
