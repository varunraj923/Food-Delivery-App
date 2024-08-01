import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { lazy } from "react";
import { useSelector } from "react-redux";

const Instamart = lazy(() => import("./Instamart"));

function Navbar() {
  
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store)=> store.cart.Items);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <div className="flex justify-between items-center bg-white ">
            <div className="w-44">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2022/10/12/food-delivery-logo-design-template-Graphics-41271638-1-580x380.jpg" alt="logo" />
            </div>

            <div className="">
                <ul className="flex font-sans text-lg">
                  <li className="m-5 font-semibold"><Link to={"/"}>Home</Link></li>
                  <li className="m-5 font-semibold"><Link to={"./about"}>About Us</Link></li>
                  <li className="m-5 font-semibold"><Link to={"./contact"}>Contact Us</Link></li>
                  <li className="m-5 font-semibold">Cart</li>
                  <li className="m-5 font-semibold">Status  : {onlineStatus=== true ? "✅" : "🔴"}</li>
                  <Link to={"./instamart"}><li className="m-5 font-semibold">Instamart</li></Link>
                  <button className="m-5 font-semibold" onClick={loginfn}>{loginbtn}</button>
                </ul>
            </div>

        </div> */}
      {/* <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className="h-16 w-32" src="https://www.creativefabrica.com/wp-content/uploads/2022/10/12/food-delivery-logo-design-template-Graphics-41271638-1-580x380.jpg" alt="Logo" />
          </div>
          <div className="flex space-x-14 items-center">
            <Link className={"text-gray-900 text-lg hover:text-orange-500 hover:text-gray-700  font-medium"}to={"./"}> Home</Link>
            <Link className={"text-gray-900 text-lg hover:text-orange-500 hover:text-gray-700  font-medium"}>Login</Link>
            <Link className={"text-gray-900 text-lg hover:text-orange-500 hover:text-gray-700  font-medium relative left-4"} to={"./Cart"} >({cartItems.length} Items)🛒</Link>
            <Link className={"text-gray-900 text-lg hover:text-orange-500 hover:text-gray-700  font-medium"}to={"./About"}></Link>
            <Link className={"text-gray-900 text-lg hover:text-orange-500 hover:text-gray-700  font-medium "} to={"./About"}>About Us</Link>
            <Link className={"text-gray-900 text-lg hover:text-orange-500 hover:text-gray-700  font-medium"} to={"./Contact"}>Contact Us</Link>

 
            
          </div>
        </div>
      </div>
    </nav> */}

    

    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="https://www.creativefabrica.com/wp-content/uploads/2022/10/12/food-delivery-logo-design-template-Graphics-41271638-1-580x380.jpg">Logo</Link>
        </div>
        <div className="hidden md:flex space-x-6 font-bold ">
          <Link to="./" className="text-gray-600 hover:text-orange-500">Home</Link>
          <Link to="./Cart" className="text-gray-600 hover:text-orange-500">({cartItems.length} Items)🛒</Link>
          <Link to="/About" className="text-gray-600 hover:text-orange-500">About Us</Link>
          <Link to="./Contact" className="text-gray-600 hover:text-orange-500">Contact Us</Link>
        </div>
        <div className="md:hidden">
          <button type="button" className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.creativefabrica.com/wp-content/uploads/2022/10/12/food-delivery-logo-design-template-Graphics-41271638-1-580x380.jpg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="./" className="block text-gray-600 hover:text-gray-800 px-4 py-2">Home</Link>
          <Link to="./Cart" className="block text-gray-600 hover:text-gray-800 px-4 py-2">({cartItems.length} Items)🛒</Link>
          <Link to="./About" className="block text-gray-600 hover:text-gray-800 px-4 py-2">About Us</Link>
          <Link to="./Contact" className="block text-gray-600 hover:text-gray-800 px-4 py-2">Contact Us</Link>
        </div>
      )}
    </nav>
    
    </>
  );
}

export default Navbar;





