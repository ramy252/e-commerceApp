import {apiClient} from "./api-client"; 

export async function createOrder({paymentMethod,cartId ,shippingAdress}) {
    try {
        const option = {
          method: "POST",
          data: {
            shippingAdress,
          },
        };
        if (paymentMethod === "cod") {
            option.url = `/orders/${cartId}`;
        }
        if (paymentMethod === "online") {
            option.url = `/orders/checkout-session/${cartId}?url=${location.origin}`;
        }
        const response = await apiClient.request(option);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
    
}