import { createContext, useEffect, useState } from "react";
import { getAllProduct } from "../services/product-service";


// Provider component only - fixes ESLint fast refresh issue
export const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetchProducts() {
        try {
            setLoading(true)
            setError(null) // Clear previous errors
            const response = await getAllProduct()

            if (response.success && response.data) {
                setProducts(response.data.data || response.data)
                setLoading(false)
            } else {
                throw new Error(response.message || 'Failed to fetch products')
            }
        } catch (error) {
            setLoading(false)
            setError(error.message || 'An error occurred while fetching products')
            console.error('Error fetching products:', error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ loading, products, error }}>
            {children}
        </ProductContext.Provider>
    )
}