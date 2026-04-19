import { API_CONFIG } from "../config";
import { apiClient } from "./api-client";

export async function sendDataToSignUp(values) {
  try {
    const option = {
      method: "POST",
      url: `/auth/signup`,
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
        rePassword: values.rePassword,
        phone: values.phone,
      },
    };

    const response = await apiClient.request(option);

    return response;
  } catch (error) {
    console.log(error);

    throw error;
  }
}

export async function sendDataToLogin(values) {
  try {
    const option = {
      method: "POST",
      url: `/auth/signin`,
      data: {
        email: values.email,
        password: values.password,
      },
    };

    const response = await apiClient.request(option);

    return response;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
