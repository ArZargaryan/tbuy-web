import axios from "axios";

const fetcherBase = axios.create({
  baseURL: "https://api.tbuy.am/",
  timeout: 15000
});

export enum HttpMethods {
  POST = "post",
  GET = "get",
  PUT = "put",
  Patch = "patch",
  Delete = "delete"
}

export const fetcher = (
  method: HttpMethods = HttpMethods.GET,
  headers: { page: string; lang: string; req?: string }
) => {
  return fetcherBase({
    url: "https://api.tbuy.am/",
    method: method,
    headers: {
      ReqData: `{ "agent":"web","route":"${headers.page}","lang":"${headers.lang || "hy"}"${
        headers.req ? "," + headers.req : ""
      } }`
    }
  });
};
