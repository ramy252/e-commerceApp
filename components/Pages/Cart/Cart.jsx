import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, }
  from '@fortawesome/free-solid-svg-icons';
import CartItem from '../../CartItem/CartItem';
import { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { CartContext } from '../../../context/CartContext';
import OrderSummary from '../../OrderSummary/OrderSummary';
export default function Cart() {



  const { cartInfo, loading, } = useContext(CartContext);
  const { numOfCartItems = 0, data = {} } = cartInfo;
  const { products = [], } = data;
  if (loading) {

    return <Loading />
  }

  return <>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}


      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
          {products.length > 0 && <p className="text-gray-600 mt-1">You have {numOfCartItems} items in your cart</p>}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:w-2/3">
            {/* Cart Items Container */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Item 1 */}

              {products.length > 0 ? products.map((product) => (
                <CartItem key={product._id} productInfo={product} />
              )) : <>
                <div className="flex items-center">

                  <p className="text-gray-600">No items in cart</p>
                </div>
              </>}


            </div>

            {/* Coupon Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faTag} className="text-green-600 mr-3" />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Apply Coupon</h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
                      Apply Coupon
                    </button>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-medium">
                      FRESH20 Applied
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-4">You might also like</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-green-600 font-medium text-sm mb-2">Fruits & Vegetables</p>
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Hass Avocados (2pcs)</h4>
                  <div className="flex text-yellow-400">
                    <FontAwesomeIcon icon={faStar} size="xs" />
                    <FontAwesomeIcon icon={faStar} size="xs" />
                    <FontAwesomeIcon icon={faStar} size="xs" />
                    <FontAwesomeIcon icon={faStar} size="xs" />
                    <FontAwesomeIcon icon={faStar} size="xs" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Order Summary */}
          <OrderSummary />
        </div>
      </main>
    </div>
  </>
}
