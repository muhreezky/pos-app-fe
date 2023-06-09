import axios from "axios";
import Cookies from "js-cookie";
import endpoint from "../endpoint";

export default async function addCategory (data) {
  const loginData = Cookies.get("token");

  await axios.post(`${endpoint}/products/categories`, data, {
    headers: {
      Authorization: `Bearer ${loginData}`
    }
  });
}