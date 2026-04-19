import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import { calcTimeLeft } from '../../services/counter-down'
import { ProductContext } from '../../context/product.context'


export default function HomeDeals() {
    const { loading, products } = useContext(ProductContext)

    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimmeLeft = calcTimeLeft()
            setTimeLeft(newTimmeLeft)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    if (loading) {
        return <Loading />
    }
    const deals = products.filter((product) => product.priceAfterDiscount).slice(0, 5)

    return <>
        <div className="deals py-10">
            <div className="container mx-auto">
                <div className='flex justify-between items-center py-5 '>
                    <div className='space-y-1'>
                        <h2 className='text-2xl font-bold'>Deals of the day</h2>
                        <div className='flex items-center gap-2 justify-center'>


                            <span className='text-gray-500'>Offers end in: </span>
                            <div className='flex items-center justify-center gap-2'>
                                <span className='size-7  flex items-center justify-center bg-black text-sm text-white rounded-lg '>{String(timeLeft.hours).padStart(2, '0')}</span>
                                <span >:</span>
                                <span className='size-7 flex items-center justify-center bg-black text-sm text-white rounded-lg '>{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <span>:</span>
                                <span className='size-7 flex items-center justify-center bg-black text-sm text-white rounded-lg '>{String(timeLeft.seconds).padStart(2, '0')}</span>
                            </div>
                        </div>
                    </div>
                    <Link to={'/Deals'}>
                        <span className='text-primary-600 hover:text-primary-500 '>View All</span>
                    </Link>
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {deals.map((product) => <ProductCard key={product.id} productInfo={product} />)}

                </div>
            </div>
        </div>
    </>
}
