/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description AxiosClient
 */

import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
