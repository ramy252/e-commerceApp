import { Link, NavLink } from "react-router";
import LogoFreshCart from "../../assets/Images/freshcart-logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage, faBars, faBolt, faCartShopping, faChevronDown, faMagnifyingGlass, faPerson, faPersonDress, faPhone, faRightFromBracket, faSpinner, faSuitcaseMedical, faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard, faEnvelope, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth.context.jsx";
import { CartContext } from "../../context/CartContext";
import Loading from "../Loading/Loading";



export default function Header() {
  const { logOut, token } = useContext(AuthContext)
  const { cartInfo, loading } = useContext(CartContext)

  const [isToggle, setIsToggle] = useState(false)


  function toggleOfCanvas() {
    setIsToggle(!isToggle)



  }

  return (
    <header className="">
      <div className="container mx-auto pt-5 ">
        {/* Top NavBar */}
        <div className="hidden lg:flex justify-between mx-auto border-b-2 border-gray-200" >
          <ul className=" flex gap-x-7  justify-center items-center ">
            <li className=" ">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <a className="px-2" href="tel:800 123-4567">+1 800 123-4567</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <a className="px-2" href="mailto:support@freshcart.com">support@freshcart.com</a>

            </li>
          </ul>
          <ul className="flex gap-x-5 gap-y-5 justify-center items-center ">
            <li><NavLink to={'TrackOrder'}>Track Order</NavLink></li>
            <li><NavLink to={'About'}>About</NavLink></li>
            <li><NavLink to={'Contact'}>Contact</NavLink></li>
            <li>
              <select className="border-none">
                <option value="EGP">EGP</option>
                <option value="SAR">SAR</option>
                <option value="AED">AED</option>
              </select>
            </li>
            <li>
              <select className="border-none" name="" id="">
                <option value="English">English</option>
                <option value="العربية">العربية</option>
              </select>
            </li>

          </ul>
        </div>
        {/* Main NavBar */}

        <nav className=" mx-auto flex  justify-between items-center py-5">


          <div className="logo ">
            <h1>
              <NavLink >
                <img src={LogoFreshCart} alt="" />
              </NavLink>
            </h1>

          </div>
          <search className=" hidden lg:relative ">
            <input className="border-primary-400 rounded-xl pe-30" placeholder='Search' type="search" />
            <FontAwesomeIcon className="absolute top-3 right-3" icon={faMagnifyingGlass} />

          </search>
          <nav >
            <ul className="hidden lg:flex justify-center items-center gap-x-8  *:flex *:flex-col *:justify-center *:items-center *:gap-y-2 *:hover:text-primary-500  ">
              <NavLink
                className={({ isActive }) => `flex justify-center items-center gap-x-1 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-gray-700'}`}

                to={'wishList'}>
                <FontAwesomeIcon icon={faHeart} />
                <span>wishList</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => `flex justify-center items-center gap-x-1 transition-colors duration-300  ${isActive ? 'text-primary-500 relative' : 'text-gray-700 relative'}`}
                to={'Cart'}>
                <div className="relative">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="bg-primary-400 rounded-full  px-1 text-[10px] absolute top-1 right-0 translate-x-1/2 -translate-y-1/2">{loading ? <FontAwesomeIcon icon={faSpinner} /> : cartInfo.numOfCartItems}</span>
                </div>

                <span>Cart</span>

              </NavLink>
              {token && <NavLink
                className={({ isActive }) => `flex justify-center items-center gap-x-1 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-gray-700'}`}
                to={'Account'}>
                <FontAwesomeIcon icon={faUser} />
                <span>Account</span>
              </NavLink>}

              {token ? <div onClick={logOut} className="cursor-pointer ">
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span>Logout</span>
              </div> :
                <>
                  <NavLink className={({ isActive }) => `flex justify-center items-center gap-x-1 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-gray-700'}`}
                    to={'Signup'}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Sign up</span>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `flex justify-center items-center gap-x-1 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-gray-700'}`}
                    to={'Login'}>
                    <FontAwesomeIcon icon={faAddressCard} />
                    <span>Login</span>
                  </NavLink>
                </>
              }



            </ul>
          </nav>
          <div onClick={toggleOfCanvas} className="lg:hidden cursor-pointer bg-primary-400 text-white rounded-lg p-2">

            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>


      </div>
      { /* Category NavBar */}

      <nav className="hidden lg:block CategoryNav bg-gray-100 py-4">
        <div className="container mx-auto flex gap-x-5 items-center ">
          <div className="relative group">
            <button className="btn   flex gap-x-3 items-center hover:bg-primary-300">
              <FontAwesomeIcon icon={faBars} />
              <span>All Categories</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <menu className=" group-hover:block  hidden bg-white shadow-2xl absolute rounded-xl min-w-52 top-12    ">
              <ul className="*:hover:bg-gray-200 divide-y-2  divide-gray-400/20 *:p-3">
                <li>
                  <Link>
                    <FontAwesomeIcon className="pe-2 text-primary-600" icon={faPerson} />
                    <span>Men's fashion</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <FontAwesomeIcon className="pe-2 text-primary-600" icon={faPersonDress} />
                    <span>Woman's fashion</span>
                  </Link>
                </li>
                <li>
                  <Link >
                    <FontAwesomeIcon className="pe-2 text-primary-600" icon={faBabyCarriage} />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <FontAwesomeIcon className="pe-2 text-primary-600" icon={faSuitcaseMedical} />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <FontAwesomeIcon className="pe-2 text-primary-600" icon={faBolt} />
                    <span>Electronics</span>
                  </Link>
                </li>
              </ul>
            </menu>
          </div>
          <ul className="flex gap-x-4 *:hover:text-primary-500">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'RecentlyAdded'}>Recently Added</NavLink>
            </li>
            <li>
              <NavLink to={'FeaturedProduct'}>Featured Product</NavLink>
            </li>
            <li>
              <NavLink to={'Offers'}>Offers</NavLink>
            </li>
            <li>
              <NavLink to={'Brands'}>Brands</NavLink>
            </li>
          </ul>
        </div>
      </nav>


      {/* ofCanvas */}
      {isToggle && <>
        <div onClick={toggleOfCanvas} className="  blackScreen fixed z-40 inset-0 bg-black/50 "></div>
        <div className="ofCanvas animate-slid-in  fixed z-50 min-w-64 top-0 bottom-0 p-4 bg-white">
          <div className="logo border-b-2 border-gray-300/50 mb-5 flex justify-between items-center pb-5">
            <img src={LogoFreshCart} alt="" srcset="" />
            <button onClick={toggleOfCanvas} className="btn py-2 px-2 rounded-full bg-gray-300"><FontAwesomeIcon icon={faXmark} /></button>
          </div>
          <search className=" relative ">
            <input className="border-primary-400 rounded-xl min-w-40" placeholder='Search' type="search" />
            <FontAwesomeIcon className="absolute top-3 right-3" icon={faMagnifyingGlass} />

          </search>
          <div className="ps-1 pt-5">
            <h2 className="text-xl font-semibold pb-3 ">Main menu</h2>
            <ul className=" *:ps-3 space-y-4 *:hover:bg-gray-200 *:rounded-sm">
              <li>
                <NavLink
                  className={({ isActive }) => `flex py-2 items-center gap-x-1 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-gray-700'}`}

                  to={'wishList'}>
                  <FontAwesomeIcon icon={faHeart} />
                  <span>wishList</span>
                </NavLink>

              </li>
              <li>
                <NavLink
                  className={({ isActive }) => `flex py-2 items-center gap-x-1 transition-colors duration-300  ${isActive ? 'text-primary-500' : 'text-gray-700'}`}
                  to={'Cart'}>
                  <div className="relative">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="bg-primary-400 rounded-full  px-1 text-[10px] absolute top-1 right-0 translate-x-1/2 -translate-y-1/2">3</span>
                  </div>
                  <span>Cart</span>
                </NavLink>

              </li>
              {token &&
                <li>
                  {token && <NavLink
                    className={({ isActive }) => `flex py-2 items-center gap-x-1 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-gray-700'}`}
                    to={'Account'}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Account</span>
                  </NavLink>}

                </li>}
            </ul>
          </div>
          <div className="ps-1 pt-3 mt-3 border-t-2 border-gray-300/50">

            <h2 className="text-xl font-semibold pb-3 ">Account</h2>
            <ul className=" *:ps-3 space-y-4 *:hover:bg-gray-200 *:rounded-sm">
              {token ? <li>

                <div onClick={logOut} className="cursor-pointer hover:bg-gray-200 py-2 rounded-sm">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span>Logout</span>
                </div>
              </li> : <> <li>

                <NavLink
                  className={({ isActive }) => `flex py-2 items-center gap-x-1 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-gray-700'}`}
                  to={'Sign up'}>
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>Sign up</span>
                </NavLink>

              </li>
                <li>
                  <NavLink
                    className={({ isActive }) => `flex py-2 items-center gap-x-1 transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-gray-700'}`}
                    to={'Login'}>
                    <FontAwesomeIcon icon={faAddressCard} />
                    <span>Login</span>
                  </NavLink>
                </li>

              </>}


            </ul>
          </div>

        </div>

      </>}
    </header >
  );
}