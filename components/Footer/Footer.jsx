import { faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";
import LogoFreshCart from "../../assets/Images/freshcart-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import miniLogo from "../../assets/Images/mini-logo.png";

export default function Footer() {
  return (
    <>
      <div className="footer  pt-10 ">
        <hr className="text-gray-300/50 pt-5"/>
        <div className="container mx-auto py-5">
          <div className=" md:grid md:grid-cols-2 grid-cols-2 flex flex-wrap items-center justify-center  lg:grid-cols-5">

            {/* Logo & Social */}
            <div className="lg:col-span-2 flex ">
              <div className="space-y-6">
                <img src={LogoFreshCart} alt="" />
                <p className="text-gray-500">
                  Best online store for fresh groceries and more products from around the world at an affordable price
                </p>
                <ul className="flex gap-x-2 py-3 *:hover:text-primary-300 *:transition-colors *:duration-300 *:text-gray-500">
                  <li><FontAwesomeIcon icon={faFacebookF} /></li>
                  <li><FontAwesomeIcon icon={faTwitter} /></li>
                  <li><FontAwesomeIcon icon={faInstagram} /></li>
                  <li><FontAwesomeIcon icon={faPinterestP} /></li>
                </ul>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Categories</h2>
              <ul className="space-y-2  *:hover:text-primary-300 *:transition-colors *:duration-300 ">
                <li><Link to="#"><span>Men's fashion</span></Link></li>
                <li><Link to="#"><span>Woman's fashion</span></Link></li>
                <li><Link to="#"><span>Baby & Toys</span></Link></li>
                <li><Link to="#"><span>Beauty & Health</span></Link></li>
                <li><Link to="#"><span>Electronics</span></Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul className="space-y-2 *:hover:text-primary-300 *:transition-colors *:duration-300 ">
                <li><Link to="#"><span>About Us</span></Link></li>
                <li><Link to="#"><span>Contact Us</span></Link></li>
                <li><Link to="#"><span>Privacy Policy</span></Link></li>
                <li><Link to="#"><span>Terms of Service</span></Link></li>
                <li><Link to="#"><span>Shipping Policy</span></Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Customer Service</h2>
              <ul className="space-y-2  *:hover:text-primary-300 *:transition-colors *:duration-300 ">
                <li><Link to="#"><span>My Account</span></Link></li>
                <li><Link to="/Orders"><span>My Orders</span></Link></li>
                <li><Link to="/Wishlist"><span>Wishlist</span></Link></li>
                <li><Link to="#"><span>Return & Refunds</span></Link></li>
                <li><Link to="#"><span>Help Center</span></Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="container border-t-2 border-gray-400/30 pt-5 mx-auto CopyRight flex justify-between items-center w-full">
          <p className="text-gray-500"> &copy; {new Date().getFullYear()} FreshCart All rights reserved.</p>
          <div>
            <img className="w-10" src={miniLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
