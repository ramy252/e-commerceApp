import { apiClient } from "./api-client";

export async function getAllCatagoties( ) {
  try {
    const option = {
      method: "GET",
      url: `/categories`,
    };
    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
}
