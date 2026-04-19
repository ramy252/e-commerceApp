import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faArrowRotateLeft, faShieldHalved, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function HomeFeature() {
    return <>
        <div className="bg-white py-4 px-6 grid md:grid-cols-2 lg:grid-cols-4 lg:space-x-4 md:space-x-4 md:space-y-4 space-y-5 ">
            <div className="flex border border-gray-300/40 rounded-xl hover:bg-primary-200/40 transition-colors duration-300 py-5 pe-12 ps-3 items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2">
                    <FontAwesomeIcon icon={faTruckFast} className="h-6 w-6 text-green-600" />
                </div>
                <div >
                    <p className="text-sm font-medium text-gray-800">Free Delivery</p>
                    <p className="text-xs text-gray-500">Orders $50 or more</p>
                </div>
            </div>
            <div className="flex border border-gray-300/40 rounded-xl hover:bg-primary-200/40 transition-colors duration-300 py-5 pe-12 ps-3 items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2">
                    <FontAwesomeIcon icon={faArrowRotateLeft} className="h-6 w-6 text-green-600" />
                </div>
                <div>
                    <div>
                        <p className="text-sm font-medium text-gray-800">30 Days Return</p>
                        <p className="text-xs text-gray-500">Satisfaction guaranteed</p>
                    </div>
                </div>
            </div>
            <div className="flex border border-gray-300/40 rounded-xl hover:bg-primary-200/40 transition-colors duration-300 py-5 pe-12 ps-3 items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2">
                    <FontAwesomeIcon icon={faShieldHalved} className="h-6 w-6 text-green-600" />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-800">Secure Payment</p>
                    <p className="text-xs text-gray-500">100% protected checkout</p>
                </div>
            </div>
            <div className="flex border border-gray-300/40 rounded-xl hover:bg-primary-200/40 transition-colors duration-300 py-5 pe-12 ps-3 items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2">
                    <FontAwesomeIcon icon={faHeadset} className="h-6 w-6 text-green-600" />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-800">24/7 Support</p>
                    <p className="text-xs text-gray-500">Ready to help anytime</p>
                </div>
            </div>
        </div>
    </>
}
