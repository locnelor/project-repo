import { RequestClient } from "@repo/request";
import { useAccessStore } from "@repo/stores";
import { message } from "ant-design-vue";
const createRequestClient = (baseURL: string) => {
  const client = new RequestClient({
    baseURL,
  });
  client.addRequestInterceptor((config) => {
    const accessStore = useAccessStore();
    config.headers["X-Decrypt-Flag"] = import.meta.env.VITE_DECRYPT_FLAG;
    config.headers.Authorization = accessStore.accessToken;
    return config;
  });
  client.addResponseInterceptor(
    (response) => {
      // console.log(response,"response");
      // const data = response.data;
      // if (data.code !== '200') {
      //   message.error(data.message);
      // }
      return response;
    },
    (error) => {
      message.error(error.message);
      return error;
    }
  );
  return client;
};

const request = createRequestClient(import.meta.env.VITE_API_BASE_URL);
export default request;
