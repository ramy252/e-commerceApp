import { faEye, faEyeSlash, faShieldHalved, faStar, faTruckFast, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviewImage from "../../../assets/Images/review-author.png"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup"
import { toast } from "react-toastify";
import { useState } from "react";
import { API_CONFIG } from "../../../config";
import { sendDataToSignUp } from "../../../services/auth-service";
import { checkPasswordStrength } from "../../../utils/validation";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setshowRePassword] = useState(false)
  const [isExistEmail, setisExistEmail] = useState(null)
  const navigate = useNavigate();
  const phoneRegex = /^01[0-2,5]\d{8}$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required').matches(passwordRegex, 'Password must be Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'),
    rePassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
    phone: yup.string().required('Phone is required').matches(phoneRegex, 'Phone is invalid'),
    terms: yup.bool().oneOf([true], 'Accept Terms is required')
  });
  async function handleSignUp(values) {
    try {
      const response = await sendDataToSignUp(values)

      if (response.success) {
        toast.success("Account created successfully")
        setTimeout(() => {
          navigate('/login')
        }, 3000)

      }
    }
    catch (error) {
      setisExistEmail(error.message)



    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false
    },
    validationSchema: validationSchema,
    onSubmit: handleSignUp,

  })
  let feedback = checkPasswordStrength(formik.values.password);

  return <>
    <div className="bg-gray-100  py-12">
      <div className="container grid gap-y-10 lg:gap-12 lg:grid-cols-2 mx-auto">
        {/* left-side */}
        <div className="ContentPage space-y-7 pt-5 ">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">Welcome to <span className="text-3xl font-semibold text-primary-500">FreshCart</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
          </div>
          <div>
            <ul className="*:flex *:space-x-4 space-y-8">
              <li className=" ">
                <div className="icon size-12 rounded-full bg-primary-200 flex justify-center items-center text-primary-700  ">
                  <FontAwesomeIcon className="" icon={faStar} />
                </div>
                <div>
                  <h3 className="font-semibold">Premim Quality</h3>
                  <p> premium quality products sourced from trusted suppliers</p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-primary-200 flex justify-center items-center text-primary-700 ">
                  <FontAwesomeIcon className="" icon={faTruckFast} />
                </div>
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p> Some-dat delivery available in most areas</p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-primary-200 flex justify-center items-center text-primary-700 ">
                  <FontAwesomeIcon className="" icon={faShieldHalved} />
                </div>
                <div>
                  <h3 className="font-semibold">Secure Shopping</h3>
                  <p> Your data and payment are completely secure</p>
                </div>
              </li>

            </ul>
          </div>


          <div className="cardSignUp bg-gray-100 rounded-2xl shadow-2xl w-full p-5">
            <div className="images flex space-x-4">
              <img className="size-12 rounded-full" src={reviewImage} alt="" />
              <div >
                <p>Sarah Smith</p>

                <FontAwesomeIcon className="text-yellow-200" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-200" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-200" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-200" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-200" icon={faStar} />
              </div>
            </div>
            <p className="text-sm italic pt-3">  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sed voluptates expedita quam, culpa eaque mollitia error vitae accusantium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit" </p>
          </div>


        </div>
        {/* right-side */}
        <div className="  bg-white shadow-2xl rounded-2xl p-5">
          <div>
            <h2 className="text-4xl text-center font-bold">Create Your Account</h2>
            <p className="text-xl text-center">Start your fresh journey with us today</p>
          </div>
          <div className="btnSignUp py-10 flex justify-center items-center space-x-5">
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
            <span className="mx-2">or</span>
            <div className="h-0.5 bg-gray-300/40 grow"></div>

          </div>


          <div className="loginInputs  space-y-8 ">
            <form className="space-y-5 border-b border-gray-300/40 pb-8" action="" onSubmit={formik.handleSubmit}>
              <div className="name flex flex-col items-start">

                <label htmlFor="Name">Name*</label>
                <input placeholder="Ramy" className="w-full form-control" name="name" id="name" type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.name && formik.touched.name && <span className="text-red-600">{formik.errors.name}</span>}
              </div>
              <div className="Email flex flex-col items-start">
                <label htmlFor="Email">Email*</label>
                <input placeholder="ramyzaky80@gmail.com" className="w-full form-control" name="email" id="email" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email && <span className="text-red-600">*{formik.errors.email}</span>}
                {isExistEmail && <span className="text-red-600">{isExistEmail}</span>}
              </div>
              <div className=" phone flex flex-col items-start ">
                <label htmlFor="phone">Phone Number*</label>
                <input className="w-full form-control" placeholder="Phone Number" type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.phone && formik.touched.phone && <span className="text-red-600">{formik.errors.phone}</span>}
              </div>
              <div className="Password  flex flex-col items-start">

                <label htmlFor="password">Password*</label>
                <div className="relative w-full">


                  <input className="w-full form-control " placeholder="Password" id="password" name="password" type={showPassword ? "text" : "password"} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                </div>
                {formik.values.password && (<div className="password-strenght  w-full flex justify-center items-center gap-2">

                  <div className="bar w-full h-1 overflow-hidden bg-gray-200 rounded-2xl ">

                    <div className={`progressPass ${feedback.width}  rounded-2xl ${feedback.color} h-1 `}></div>
                  </div>
                  <span className="text-nowrap text-center text-sm"> {feedback.text} </span>

                </div>)}
              </div>
              {(formik.errors.password && formik.touched.password) ? <span className="text-red-600">{formik.errors.password}</span> : <p className="text-sm text-gray-500 -mt-1">Use 8 or more characters with a mix of letters, numbers & symbols</p>
              }
              <br />

              <label htmlFor="confirmPassword">Confirm Password*</label>
              <div className="ConfirmPassword relative flex flex-col items-start">
                <input className="w-full form-control" placeholder="Confirm Password" id="rePassword" name="rePassword" type={showRePassword ? "text" : "password"} value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <FontAwesomeIcon icon={showRePassword ? faEyeSlash : faEye} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setshowRePassword(!showRePassword)} />
              </div>
              {formik.errors.rePassword && formik.touched.rePassword && <span className="text-red-600">{formik.errors.rePassword}</span>}


              <div className="flex justify-start items-center space-x-2">
                <input type="checkbox" className="accent-primary-400" id="checkbox" checked={formik.values.terms} onChange={formik.handleChange} name="terms" onBlur={formik.handleBlur} />
                <label className="text-sm" htmlFor="checkbox" >I agree to the <Link className="text-primary-400 underline" to={'/Terms'}>Terms & of Service</Link> and <Link className="text-primary-400 underline" to={'/Privacy'}>Privacy Policy*</Link> </label>
                {formik.errors.terms && formik.touched.terms && <span className="text-red-600">{formik.errors.terms}</span>}
              </div>
              <button type="submit" className="btn bg-primary-500 text-white w-full">
                <FontAwesomeIcon icon={faUserPlus} />
                Create My Account
              </button>

            </form>
            <p>Already have an account? <Link className="text-primary-400 underline" to={'/login'}>Sign in</Link></p>
          </div>
          authoutacation
        </div>
      </div>
    </div>


  </>
}
