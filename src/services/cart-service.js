import { apiClient } from "./api-client";

export function addProductToCart({ id }) {
  try {
    const option = {
      url: `/cart`,
      method: "post",
      data: {
        productId: id,
      },
    };

    const response = apiClient.request(option);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getProductToCart() {
  try {
    const option = {
      url: `/cart`,
      method: "GET",
    };

    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function deleteProductToCart({ id }) {
  try {
    const option = {
      url: `/cart/${id}`,
      method: "DELETE",
    };

    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateProductToCart({ id, count }) {
  try {
    const option = {
      url: `/cart/${id}`,
      method: "PUT",
      data: {
        count: count,
      },
    };

    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
