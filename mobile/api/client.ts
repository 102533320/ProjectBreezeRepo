import { create } from "apisauce";

const client = create({
  baseURL: "http://192.168.0.43:8443/api",
});

export default client;
