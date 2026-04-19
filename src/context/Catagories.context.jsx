import { createContext, useEffect, useState } from "react"
import { getAllCatagoties } from "../services/catagoties-service"


export const CatagoriesContext = createContext(null);
export default function CatagoriesProvider({ children }) {
    const [catagories, setCatagories] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchCategories() {
        try {
            setLoading(true)
            const response = await getAllCatagoties()
            if (response.success) {
                setLoading(false)
                setCatagories(response.data.data)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }

    }

    useEffect(() => {
        fetchCategories()

    }, [])

    return (
        <CatagoriesContext.Provider value={{ catagories, loading }}>
            {children}
        </CatagoriesContext.Provider>
    )

}