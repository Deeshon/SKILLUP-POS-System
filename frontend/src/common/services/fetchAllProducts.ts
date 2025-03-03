import { ADMIN_DASHBOARD_APIS } from "../config/api";

const fetchAllProducts = async () => {
  const response = await fetch(ADMIN_DASHBOARD_APIS.GET_PRODUCTS);
  return response.json();
};

export default fetchAllProducts;
