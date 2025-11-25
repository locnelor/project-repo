import { ref } from "vue";
import type { RequestAction, RequestFn, RequestOptions } from "./types";
export class RequestApi<T> {
  private params = {};
  constructor(
    private readonly action: RequestAction<T>,
    private options: Required<Omit<RequestOptions<T>, "defaultValue">>,
  ) {
    if (options.defaultParams) {
      this.params = options.defaultParams;
    }
    if (options.auto) {
      this.run();
    }
  }
  public async run(params: any = this.params) {
    this.params = params;
    const beforeRequestResult = await this.options.beforeRequest(this.params);
    if (!beforeRequestResult) {
      return;
    }
    const { code, data, msg } = await this.action(this.params);
    this.options.onFinally();
    if (code !== "200") {
      this.options.onError(msg);
      return;
    }
    this.options.onSuccess(data);
  }
  cancel() {}
}
export const useRequest = <T>(
  action: RequestAction<T>,
  options = {} as RequestOptions<T>,
) => {
  const loading = ref(false);
  const data = ref<T>(options.defaultValue);
  const error = ref<any>();
  const api = new RequestApi(action, {
    auto: true,
    defaultParams: {},
    name: "",
    cacheToUrl: false,
    pagination: false,
    debounce: 0,
    throttle: 0,
    dedupe: 0,
    transform: (res) => res,
    watch: false,
    polling: 0,
    ...options,
    onSuccess: (res) => {
      data.value = res;
      error.value = undefined;
      options?.onSuccess?.(res);
    },
    onError: (err) => {
      error.value = err;
      options?.onError?.(err);
    },
    beforeRequest: async (params) => {
      loading.value = true;
      error.value = undefined;
      if (options?.beforeRequest) {
        return await options.beforeRequest(params);
      }
      return true;
    },
    onFinally: () => {
      loading.value = false;
      options?.onFinally?.();
    },
  });

  return [
    {
      loading,
      data,
      error,
    },
    api,
  ] as const;
};
