import { createContext, useEffect, useState } from "react";
import { addProductToCart, deleteProductToCart, getProductToCart, updateProductToCart } from "../services/cart-service";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const cartContext = createContext(null);
export default function CartProvider({ children }) {
    const [cartInfo, setCartInfo] = useState({});
    const [loading, setLoading] = useState(true);


    async function fetchCartInfo({ id }) {

        try {
            setLoading(true);
            const response = await addProductToCart({ id });
            console.log(response);

            if (response.success) {
                setCartInfo(response.data);
                setLoading(false);
                toast.success(response.data.message);
            }
        }
        catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error.message);
        }

    }

    async function featchCart() {
        try {
            setLoading(true);
            const respon = await getProductToCart();
            if (respon.success) {
                setCartInfo(respon.data);
                setLoading(false);

            }
        }
        catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
    async function handelRemoveItem({ id }) {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });
            if (result.isConfirmed) {
                const loading = toast.loading("Removing from cart");
                const response = await deleteProductToCart({ id });
                console.log(response);
                if (response.success) {
                    setCartInfo(response.data);
                    toast.dismiss(loading);

                    toast.success("Product removed from cart successfully");
                }
            }
        }
        catch (error) {
            console.log(error);
        }


    }
    async function updateCountProduct({ id, count }) {
        try {
            const loading = toast.loading("Updating cart");
            const respon = await updateProductToCart({ id, count });
            if (respon.success) {
                toast.dismiss(loading);
                setCartInfo(respon.data);
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        featchCart();
    }, [])

    return (
        <cartContext.Provider value={{ cartInfo, loading, fetchCartInfo, setCartInfo, handelRemoveItem, updateCountProduct, featchCart }}>
            {children}
        </cartContext.Provider>
    )
}
