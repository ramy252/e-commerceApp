import { faShieldAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";

export default function OrderSummary() {
    const { cartInfo } = useContext(CartContext);
    const { numOfCartItems = 0, data = {} } = cartInfo;
    const { products = [], totalCartPrice = 0 } = data;
    return <>
        <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6">Order Summary</h3>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal ({numOfCartItems} items)</span>
                        <span className="font-medium">{totalCartPrice} EGP</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        {products.length > 0 ? <span className="text-green-600 font-medium">70 EGP</span> : "0 EGP"}

                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        {products.length > 0 ? <span className="font-medium">{Math.trunc(totalCartPrice * 0.14)} EGP</span> : "0 EGP"}
                    </div>

                    <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            {products.length > 0 ? <span>{Math.trunc(totalCartPrice + 70 + (totalCartPrice * 0.14))} EGP</span> : "0 EGP"}
                        </div>
                    </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-8">
                    <Link to="/CheckOut" >
                        Proceed to Checkout
                    </Link>
                </button>

                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors mt-3">
                    Continue Shopping
                </button>

                {/* Delivery Info */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start">
                        <FontAwesomeIcon icon={faTruck} className="text-blue-600 mt-1 mr-3" />
                        <div>
                            <h4 className="font-medium text-gray-900">Free Delivery</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Your order qualifies for free delivery. Estimated delivery: 2-3 business days
                            </p>
                        </div>
                    </div>
                </div>

                {/* Security Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-gray-600 mt-1 mr-3" />
                        <div>
                            <h4 className="font-medium text-gray-900">Secure Checkout</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Your payment information is protected with 256-bit SSL encryption
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
