import endpoint from "../endpoint";
import Cookies from "js-cookie";
import axios from "axios";

export default async function editProduct(itemId, data) {
  const loginData = Cookies.get("token");

  await axios.putForm(`${endpoint}/products/${itemId}`, data, {
    headers: {
      Authorization: `Bearer ${loginData}`
    }
  });
}