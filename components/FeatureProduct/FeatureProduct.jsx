
import ProductCard from '../ProductCard/ProductCard'

import { useContext } from 'react';
import Loading from '../Loading/Loading';
import { ProductContext } from '../../context/Product.context';

export default function FeatureProduct() {
    const { loading, products } = useContext(ProductContext)
    if (loading) {
        return <Loading />
    }
    return <>
        <div className='container  py-10'>
            <h2 className='text-2xl font-bold'>Feature Product</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {products.map((product) => {
                    return <ProductCard key={product._id} productInfo={product} />
                })}

            </div>

        </div>
    </>
}
