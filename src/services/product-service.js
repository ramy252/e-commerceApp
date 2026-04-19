import { apiClient } from "./api-client";

export async function getAllProduct({ 
  page,
  keyword,
  priceGreterThan,
  priceLessThan,
  category,
  brand,
  sortedBy,
} = {}) {
  try {
    const option = {
      url: `/products?${page ? `page=${page}` : ""}${
        keyword ? `&keyword=${keyword}` : ""
      }${priceGreterThan ? `&price[gte]=${priceGreterThan}` : ""}${
        priceLessThan ? `&price[lte]=${priceLessThan}` : ""
      }${category ? `&category[in]=${category}` : ""}${
        brand ? `&brand=${brand}` : ""
      }${sortedBy ? `&sort=${sortedBy}` : ""}`,
      method: "GET",
    };
    const response = await apiClient.request(option);

    return response;
  } catch (error) {
    console.log(error);

    throw error;
  }
}

export async function getProductById({ id }) {
  try {
    const option = {
      url: `/products/${id}`,
      method: "GET",
    };
    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
