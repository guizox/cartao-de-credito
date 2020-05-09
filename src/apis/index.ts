import axios from "axios";
import { ApiCall } from "./interfaces";
export const TOKEN_TYPE = "bearer";

const axiosErrorsInterceptor = (req: XMLHttpRequest) => {
  if (!req.response) {
    return Promise.reject(new Error());
  }

  //here we could handle any status for the whole application.
  if (req.response.status === 401) {
    console.log("status 401");
  }

  return Promise.reject(req);
};

const request = async (params: any) => {
  axios.interceptors.response.use(
    (response) => response,
    axiosErrorsInterceptor
  );
  return axios({
    ...params,
    headers: {
      ...params.headers,
      // here we could add any wanted header, such as Authorization bearer
    },
  });
};

export default ({ baseURL }: ApiCall) => ({
  get: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "GET",
    }),
  post: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "POST",
    }),
  put: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "PUT",
    }),
  patch: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "PATCH",
    }),
  delete: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "DELETE",
    }),
});
