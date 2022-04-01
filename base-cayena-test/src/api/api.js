import axios from "axios";

const authApi = axios.create({
  //baseURL: "https://psad9m6vrj.execute-api.sa-east-1.amazonaws.com/test",
  baseURL: "http://localhost:5000",
});

export default authApi;