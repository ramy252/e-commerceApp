import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faClock, faEye, faEyeSlash, faLock, faShieldHalved, faStar, faTruckFast, faUsers } from "@fortawesome/free-solid-svg-icons";
import { StarIcon } from "flowbite-react";
import loginImg from "../../../assets/Images/login-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup"
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { API_CONFIG } from "../../../config";
import { sendDataToLogin } from "../../../services/auth-service";
import { AuthContext } from "../../../context/Auth.context.jsx";


export default function Login() {

  
  
  const location = useLocation();
  const from = location?.state?.from || { from: { pathname: "/" } };
    
  const navigate = useNavigate();

  const [isExistEmail, setisExistEmail] = useState("")
  const {  setToken } = useContext(AuthContext)
  function handeChange(e) {
    setisExistEmail("")
    formik.handleChange(e)

  }
  const validationSchema = yup.object({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required'),
  })

  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(values) {
    try {

      const response = await sendDataToLogin(values)
      if (response.success) {
        toast.success("Welcome Back")

        setToken(response.data.token)

        if (values.keepSignedIn) {
        localStorage.setItem("token", response.data.token)
        }
        else {
          localStorage.removeItem("token")
          sessionStorage.removeItem("token")
        }
        
        setTimeout(() => {
          navigate(from.pathname, { replace: true })

        }, 3000)
      }
    } catch (error) {
      setisExistEmail(error.message)

    }


  }


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      keepSignedIn: false

    },
    validationSchema: validationSchema,
    onSubmit: handleLogin

  })
  return <>
    <div className="">
      <div className="container mx-auto gap-10 py-5 grid grid-cols-2">
        <div className="leftSide   flex flex-col items-center justify-center">
          <img className="size-9/12 h-1/2 rounded-3xl object-cover shadow-2xl" src={loginImg} alt="" />
          <h2 className="text-2xl font-bold text-center pt-8">freshCart - Your One - Shop for fresh Product </h2>
          <p className="text-center text-sm">join thousands of happy customers who trust freshCart for their daily grocey needs</p>
          <div>
            <ul className="flex gap-x-5 py-5 *:hover:text-primary-500/90 *:text-primary-600 *:transition-colors *:duration-300  *:flex *:gap-2 *:text-[11px] ">
              <li className="">
                <FontAwesomeIcon className="" icon={faTruckFast} />
                <span>Free Delivery</span>
              </li>
              <li>
                <FontAwesomeIcon className="" icon={faShieldHalved} />
                <span>Secure Payment</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightSide rounded-4xl shadow-2xl p-5 ">
          <div className="text-center">
            <h2 className="text-2xl font-bold"> <span className="text-primary-500">Fresh </span> Cart</h2>
            <h3 className="font-semibold">Welcome Back!</h3>
            <p>Sign in continue your fresh shopping experience</p>
          </div>
          <div className="">
            <div className="btnLogin space-y-3  py-10 flex flex-col justify-center items-center ">
              <button className="btn border border-gray-300 bg-transparent hover:bg-gray-100 transition-colors duration-300 w-full space-x-1.5 ">
                <FontAwesomeIcon className="text-red-600" icon={faGoogle} />
                <span>Google</span>
              </button>
              <button className="btn border border-gray-300 bg-transparent hover:bg-gray-100 transition-colors duration-300 w-full space-x-1.5 ">
                <FontAwesomeIcon className="text-blue-600" icon={faFacebook} />
                <span>Facebook</span>
              </button>

            </div>
            <div className="divider flex items-center">
              <div className="h-0.5  bg-gray-300/40 grow"></div>
              <span className="text-gray-400 text-sm mx-2">OR CONTINUE WITH EMAIL</span>
              <div className="h-0.5 bg-gray-300/40 grow"></div>

            </div>
            <form className="space-y-5 py-8" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col ">
                <label htmlFor="email">Email Address</label>
                <input className="form-control" type="email" placeholder="Email Address" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.errors.email && formik.touched.email && <span className="text-red-600 text-sm ">*{formik.errors.email}</span>}
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label htmlFor="password">Password</label>
                  <Link className="text-primary-600 underline" to={'/ForgotPassword'}>ForgotPassword</Link>
                </div>




                <div className="relative">
                  <input className="form-control w-full" type={showPassword ? "text" : "password"} placeholder="Password" id="password" name="password" value={formik.values.password} onChange={handeChange} onBlur={formik.handleBlur} />

                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                </div>
                {formik.errors.password && formik.touched.password && <span className="text-red-600 text-sm ">*{formik.errors.password}</span>}
                {isExistEmail && <span className="text-red-600 text-sm ">*{isExistEmail}</span>}
              </div>
              <div>
                <div className="pb-4 flex gap-x-2">
                  <input className="accent-primary-400" type="checkbox" id="keepSignedIn" name="keepSignedIn" checked={formik.values.keepSignedIn} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                  <span>Keep me signed in</span>
                </div>
                <button type="submit" className="btn  bg-primary-600 text-white w-full">Sign In</button>
              </div>
            </form>
            <div className=" pt-10 text-center ">
              <p>New to freshCart? <Link className="text-primary-400 underline" to={'/SignUp'}>Create an account</Link></p>
              <ul className="flex justify-center items-center gap-x-5 py-5 *:flex *:gap-0.5 text-[11px]">
                <li>
                  <FontAwesomeIcon icon={faLock} />
                  <span>SSL Secure</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  <span>50K Users</span>
                </li>
                <li>
                  <FontAwesomeIcon className="" icon={faStar} />
                  <span>4.9 Rating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
