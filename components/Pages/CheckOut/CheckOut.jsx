import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderSummary from "../../OrderSummary/OrderSummary";
import { faCircleInfo, faCreditCard, faLock, faMoneyBillWave, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link, useNavigate, } from "react-router";
import CartItem from "../../CartItem/CartItem";
import { useFormik } from "formik";
import * as yup from "yup"
import Loading from "../../Loading/Loading";
import { createOrder } from "../../../services/payment-service";
import { toast } from "react-toastify";

export default function CheckOut() {
    const { cartInfo, loading, setCartInfo } = useContext(CartContext);
    const navigate = useNavigate();
    const phoneRegex = /^01[0-2,5]\d{8}$/;


    const validatianSchema = yup.object({
        paymentMethod: yup.string().required("Payment Method is required"),
        shippingAddress: yup.object({
            details: yup.string().required("Address is required"),
            phone: yup.string().required("Phone is required").matches(phoneRegex, 'Phone is invalid'),
            city: yup.string().required("City is required"),
        }).required()


    })

    async function handelSubmit(values) {
        try {
            const respon = await createOrder({ cartId: cartInfo.cartId, paymentMethod: values.paymentMethod, shippingAdress: values.shippingAddress });
            console.log(respon);
            if (respon.success) {
                toast.success("Order created successfully");
                setCartInfo({
                    numOfCartItems: 0,
                    data: {
                        products: [],
                        totalCartPrice: 0
                    }
                });
                setTimeout(() => {
                    navigate("/Orders")
                }, 3000)

                if (respon.data.session) {
                    setTimeout(() => {
                        window.location.href = respon.data.session.url;
                    }, 3000)
                }

            }






        }
        catch (error) {
            console.log("error", error);
        }
    }

    const formik = useFormik({
        initialValues: {
            paymentMethod: "online",
            shippingAddress: {
                details: "",
                phone: "",
                city: ""
            }
        }
        , validationSchema: validatianSchema,
        onSubmit: handelSubmit
    })



    if (loading) {
        return <Loading />
    }
    const {  numOfCartItems, data } = cartInfo;
    const { products, totalCartPrice } = data;



    return <>
        <div className="container xl:px-50 mx-auto  ">
            <form onSubmit={formik.handleSubmit}>
                <h2 className="text-2xl font-bold">CheakOut</h2>
                <div className="cheakOutContent  grid lg:grid-cols-3 gap-5">
                    <div className="gap-10 lg:col-span-2">
                        <div className="paymentMethod lg:col-span-2 shadow-2xl  rounded-2xl p-5 ">
                            <h3 className="text-xl font-bold">Payment Method</h3>
                            <label htmlFor="paymentMethodCash" className={` relative ${formik.values.paymentMethod === "cod" && "bg-primary-50 border-primary-300"} p-2 mt-5 flex justify-between border border-primary-200/80 rounded-lg`}>
                                <div className="">
                                    <div className="grid grid-cols-2 " >

                                        <div className="flex items-start  w-full gap-3">
                                            <input type="radio" name="paymentMethod" value="cod" id="paymentMethodCash" radioGroup="" className="mt-2" onChange={() => (formik.setFieldValue("paymentMethod", "cod"))} checked={formik.values.paymentMethod === "cod"} />
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon className="text-xl text-primary-600" icon={faMoneyBillWave} />
                                                <div className="*:md:text-md text-sm">
                                                    <h3>Cash On Delivery</h3>
                                                    <p>Pay when your order arrives</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-end ">

                                            <p className="text-primary-600 absolute right-3 text-sm text-end">
                                                no extra charges
                                            </p>
                                        </div>
                                    </div>
                                    {formik.values.paymentMethod === "cod" && <div className="md:ms-15 flex gap-2 my-2 pe-6 p-3 bg-blue-100 text-gray-600 border border-blue-300/80 rounded-xl">
                                        <FontAwesomeIcon icon={faCircleInfo} className="h-5 w-5 text-primary-600" />
                                        <p >
                                            You will be redirected to a secure payment gateway to complete your transaction </p>

                                    </div>}


                                </div>
                            </label>

                            <label htmlFor="paymentMethodOnline" className={`${formik.values.paymentMethod === "online" && "bg-primary-50 border-primary-300"} p-2 mt-5 flex justify-between border border-primary-200/80 rounded-lg`} >

                                <div >
                                    <div className="grid grid-cols-2 "  >
                                        <div className="flex items-start w-full gap-3">

                                            <input type="radio" name="paymentMethod" value="online" id="paymentMethodOnline" className="mt-2" onChange={() => formik.setFieldValue("paymentMethod", "online")} checked={formik.values.paymentMethod === "online"} />
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon className="text-xl text-primary-600" icon={faCreditCard} />
                                                <div className="*:md:text-md text-sm" >
                                                    <h3>Online Payment</h3>
                                                    <p>Pay securely with card or digital wallet</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-primary-600 md:text-md text-sm text-end">
                                            Recommendation
                                        </p>
                                        <br />

                                    </div>
                                    {formik.values.paymentMethod === "online" && <div className="md:ms-15 flex gap-2 my-2 pe-6 p-3 bg-blue-100 text-gray-600 border border-blue-300/80 rounded-xl">
                                        <FontAwesomeIcon icon={faCircleInfo} className="h-5 w-5 text-primary-600" />
                                        <p >
                                            You will be redirected to a secure payment gateway to complete your <br /> transaction</p>

                                    </div>}


                                </div>
                            </label>

                        </div>
                        <div className="shippingAddress p-5 mt-6   rounded-2xl shadow-2xl ">
                            <h2 children="" className="text-xl font-bold">Shipping Address</h2>
                            <div className="pt-4">
                                <label htmlFor="details" >Address Details *</label>
                                <textarea name="shippingAddress.details" id="details" cols="30" rows="5" className="form-control min-h-30 max-h-60 w-full border p-2 border-gray-300/85 rounded-lg" placeholder="Address Details" value={formik.values.shippingAddress.details} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
                                {formik.touched.shippingAddress?.details && formik.errors.shippingAddress?.details ? <div className="text-sm text-red-600">{formik.errors.shippingAddress.details}</div> : null}
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="text-sm  md:text-md" htmlFor="phone">Phone Number *</label>
                                    <input className="form-control w-full border p-2 border-gray-300/85 rounded-lg" type="tel" name="shippingAddress.phone" id="phone" value={formik.values.shippingAddress.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.shippingAddress?.phone && formik.errors.shippingAddress?.phone ? <div className="text-sm text-red-600">{formik.errors.shippingAddress.phone}</div> : null}
                                </div>
                                <div>
                                    <label className="text-sm md:text-md" htmlFor="city">City *</label>
                                    <input className="form-control w-full border p-2 border-gray-300/85 rounded-lg" type="text" name="shippingAddress.city" id="city" value={formik.values.shippingAddress.city} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="City" />
                                    {formik.touched.shippingAddress?.city && formik.errors.shippingAddress?.city ? <div className="text-sm text-red-600">{formik.errors.shippingAddress.city}</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="orderSummary   border border-gray-200/80 rounded-lg shadow-2xl">
                        <div className="">
                            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                                <h3 className="font-bold text-gray-900 text-xl mb-6">Order Summary</h3>


                                <ul className="space-y-4 max-h-60 overflow-y-auto px-3">
                                    {products.map((item) => (
                                        <Link to={`/product/${item.product._id}`} key={item._id || item.product._id} className="flex items-center justify-between">
                                            <img
                                                src={item.product.imageCover}
                                                alt={item.product.title}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div className="flex-1 ml-4">
                                                {/* ✅ هنا عدل: استخدم item.product.title */}
                                                <p className="text-gray-700 font-medium">{item.product.title}</p>
                                                <p className="text-sm text-gray-500">Qty: {item.count}</p>
                                            </div>
                                            <div className="text-right text-gray-800 font-semibold">
                                                {item.price} EGP
                                            </div>
                                        </Link>
                                    ))}
                                </ul>



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

                                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-8">

                                    Proceed to Payment

                                </button>

                                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors mt-3">
                                    previous Step
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
                                    <div className="">
                                        <h4 className="font-medium text-gray-900">Secure Checkout</h4>
                                        <div>
                                            <FontAwesomeIcon icon={faLock} className="text-gray-600 mt-1 mr-3" />
                                            <p className="text-sm text-gray-600 mt-1">
                                                Your payment information is secure
                                            </p>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </form >
        </div >
    </>
}
