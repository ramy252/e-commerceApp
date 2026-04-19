import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


export default function CartItem({ productInfo }) {
    const { handelRemoveItem, updateCountProduct } = useContext(CartContext)
    const { count, price, product } = productInfo;
    const [isUpdating, setIsUpdating] = useState(false)
    const { id } = product
     async function handelUpdate({id, count}) {
        setIsUpdating(true)
      await  updateCountProduct({ id, count })
        setIsUpdating(false)
    
}


    return <>
        <div className={`flex flex-col sm:flex-row items-start sm:items-center border-b pb-6 mb-6 gap-4 ${isUpdating && "opacity-50"} `}>
            <div className="w-40 h-40  rounded-lg shrink-0">
                <img src={product.imageCover} className="w-full h-full object-contain" alt="" />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{product.title}</h3>
                <p className="text-green-600 text-sm mt-1">{product.category?.name || ""}</p>
                <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                        <Rating value={product.ratingsAverage} />
                    </div>
                    <span className="ml-2 text-sm text-gray-600"> {product.ratingsAverage} </span>
                </div>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-6">
                <div className="flex items-center border rounded-lg">
                    <button className="px-3 py-1" onClick={() => {
                        handelUpdate({ id, count: count - 1 })
                    }}>
                        <FontAwesomeIcon icon={faMinus} size="xs" />
                    </button>
                    <span className="px-3 py-1">{count}</span>
                    <button className="px-3 py-1 " onClick={() => {
                        handelUpdate({ id, count: count + 1 })
                    }}>
                        <FontAwesomeIcon icon={faPlus} size="xs" />
                    </button>
                </div>
                <p className="font-semibold">{price} EGP</p>
                <button className="text-red-500 hover:text-red-700 ml-4" onClick={() => handelRemoveItem({ id })}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    </>
}
