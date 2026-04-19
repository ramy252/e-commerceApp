import { useEffect, useState } from "react";
import { getAllProduct } from "../services/product-service";
import { ProductContext } from "./Product.context";

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchProducts() {
        try {
            setLoading(true);
            setError(null);
            const response = await getAllProduct();
            if (response.success && response.data) {
                setProducts(response.data.data || response.data);
                setLoading(false);
            } else {
                throw new Error(response.message || 'Failed to fetch products');
            }
        } catch (error) {
            setLoading(false);
            setError(error.message || 'An error occurred while fetching products');
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ loading, products, error }}>
            {children}
        </ProductContext.Provider>
    );
}
