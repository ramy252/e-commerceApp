import { faArrowsRotate, faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { calcDiscount } from '../../utils/calcDiscount'

import Rating from '../Rating/Rating'
import { Link } from 'react-router'
import { cartContext } from '../../context/CartContext'

export default function ProductCard({ productInfo }) {
    const { category, title, imageCover, price, priceAfterDiscount, ratingsAverage, ratingsQuantity, id } = productInfo
    const discount = calcDiscount(price, priceAfterDiscount)
    const { fetchCartInfo } = useContext(cartContext)

    return <>
        <div className='card p-5 relative shadow-md mx-3 my-5 rounded-2xl '>
            <div>
                <div className="cardImage pb-3  flex justify-center items-center ">
                    <Link to={`/product/${id}`}>
                        <img className='h-60 object-contain ' src={imageCover} alt="" />
                    </Link>
                </div>
                <div className="cardInfo space-y-2">
                    <div className="cardCatagory text-sm text-gray-500">
                        <p>{category?.name}</p>
                    </div>
                    <div className="cardName">
                        <h2 className='font-semibold'>
                            <Link className='line-clamp-1' to={`/product/${id}`}>
                                {title}
                            </Link>
                        </h2>
                    </div>
                    <div className="rateCard flex items-center gap-1">
                        <div className="rate *:text-yellow-200">
                            <Rating value={ratingsAverage} />

                        </div>
                        <div className="rateNumber">
                            <p>{ratingsAverage}</p>
                        </div>
                        <div className="rateCount">
                            <p>({ratingsQuantity})</p>
                        </div>
                    </div>
                    <div className="cardPrice flex items-center  justify-between">
                        <div className="flex items-center gap-2">
                            {(priceAfterDiscount) ? <>
                                <p className='font-bold text-primary-600 text-lg'>{priceAfterDiscount} EGP</p>
                                <del className='text-gray-500'>{price} EGP</del>
                            </> : <p className='font-bold text-primary-600 text-lg'>{price} EGP</p>

                            }
                        </div>
                        <button onClick={() => fetchCartInfo({id})} className='btn size-10 p-0 text-lg hover:bg-primary-400 transition-color duration-300 bg-primary-300 flex items-center justify-center  rounded-full'>+</button>
                    </div>
                </div>
            </div>
            <div className="actions absolute top-4 right-4 ">
                <div className="flex flex-col gap-5 text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-300  *:cursor-pointer  ">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faArrowsRotate} />
                    <Link to={`/product/${id}`}>
                        <FontAwesomeIcon icon={faEye} />
                    </Link>
                </div>
            </div>
            {priceAfterDiscount &&
                <div className="discount absolute top-2 left-4 bg-primary-600 text-white px-2 py-1 rounded-full">

                    <span>{discount}%</span>
                </div>
            }

        </div>
    </>
}
