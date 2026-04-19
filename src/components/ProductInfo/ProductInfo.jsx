import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from '../Rating/Rating'
import { calcDiscount } from '../../utils/calcDiscount'
import { faArrowRotateLeft, faCartShopping, faHeart, faShareAlt, faTruckFast } from '@fortawesome/free-solid-svg-icons'

import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

export default function ProductInfo({ productInfo }) {
    const { description, quantity, title, images, price, priceAfterDiscount, ratingsAverage, ratingsQuantity , id} = productInfo
    const { fetchCartInfo } = useContext(cartContext)
    
    console.log(id);
    

    return <>
        <div className=" grid  grid-cols-1 lg:grid-cols-3 py-10 gap-10">
            <div className="mainImage mx-10 overflow-hidden  flex flex-col items-center col-span-1 *:md:w-80  lg:col-span-1">
                <ReactImageGallery 
                    {...{ useBrowserFullscreen: true }}
                    showNav={false}
                    
                    showFullscreenButton={false}
                    showPlayButton={false}
                    items={images.map((image) => {
                        return {
                            original: image,
                            thumbnail: image,
                        }
                    })} />
            </div>
            <div className="info col-span-1 lg:col-span-2  shadow-2xl rounded-2xl p-5">
                <div className="flex justify-between">

                    <span className={`${quantity ? "bg-green-200" : "bg-red-200"} text-primary-700 py-1 px-1.5 rounded-md text-sm bg-primary-200 `}>{quantity ? "in Stock" : "out of stock"}</span>
                    <div className="leftInfo">
                        <div className="icons flex gap-2 *:text-gray-500 *:hover:text-primary-600 *:bg-transparent ">
                            <FontAwesomeIcon icon={faShareAlt} />
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                </div>
                <div className="summaryInfo pt-5">
                    <div className="rightInfo space-y-3 ">
                        <h2 className="text-3xl p font-semibold line-clamp-1">{title}</h2>
                        <div className="rating flex items-center gap-2">
                            <Rating value={ratingsAverage} />
                            <p>{ratingsAverage}</p>
                            <p>({ratingsQuantity} reviews)</p>
                        </div>
                        <div className="price flex items-center pb-5 gap-2">
                            {priceAfterDiscount ? <>
                                <p className='text-3xl font-bold'>{priceAfterDiscount} EGP </p>
                                <del>{price}</del>
                                <p className='bg-red-200 text py-1 px-1.5 rounded-md'>save {calcDiscount(price, priceAfterDiscount)}%</p>
                            </> : <p className='text-3xl font-bold'>{price} EGP </p>}

                        </div>

                    </div>
                        <hr className="w-full border-gray-300" />

                </div>
                <div className="description pt-5">
                    <p>{description}</p>
                </div>

                <div className="counterContent pt-5 flex items-center md:flex md:justify-start     justify-between gap-1  md:gap-5">
                    <p className="text-sm" >Quantity:</p>
                    <div className="counter flex md:items-center gap-2 border border-gray-300 p-1 rounded-sm ">
                        <div className="flex  md: md:gap-10 gap-3  justify-evenly items-center ">

                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>
                    <p className="text-[11px]">Only {quantity} items left in stock</p>
                </div>
                <div className="addToCart py-5 grid md:grid-cols-2 gap-2">
                    <button onClick={() => fetchCartInfo({ id })}   className="btn  bg-primary-600 hover:bg-primary-600/90 transition-colors duration-300 text-white">
                        <FontAwesomeIcon icon={faCartShopping} />
                        Add to Cart</button>
                    <button className="btn bg-transparent border border-gray-300 hover:text-primary-600 transition-colors duration-300 text-black">Buy Now</button>
                </div>
                <hr  className="w-full border-gray-300"/>
                <div className=" grid md:grid-cols-2 gap-5 space-y-5 pt-5 ">

                    <div className="flex border border-gray-300/40 rounded-xl hover:bg-primary-200/40 transition-colors duration-300 py-5 pe-12 ps-3 mb-0 items-center space-x-3">
                        <div className="rounded-full bg-green-100 p-2">
                            <FontAwesomeIcon className=" text-green-600" icon={faTruckFast} />
                        </div>
                        <div >
                            <p className="text-sm font-medium text-gray-800">Free Delivery</p>
                            <p className="text-xs text-gray-500">Orders $50 or more</p>
                        </div>
                    </div>
                    <div className="flex border border-gray-300/40 rounded-xl hover:bg-primary-200/40 transition-colors duration-300 py-5 pe-12 ps-3 items-center space-x-3">
                        <div className="rounded-full bg-green-100 p-2">
                            <FontAwesomeIcon icon={faArrowRotateLeft} className=" text-green-600" />
                        </div>
                        <div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">30 Days Return</p>
                                <p className="text-xs text-gray-500">Satisfaction guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}
