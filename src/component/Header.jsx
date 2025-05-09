// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";


// const Header = () => {

//     //subscribibg to the store using a selector
//    const cartItem=useSelector((store)=>store.cart.items);

    

    

//     return (
//         <header className="bg-orange-500 text-white p-4 shadow-md">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="flex items-center">
//                     <img
//                         className="h-12 w-12 mr-2 rounded-full" // Adjusted size
//                         src="https://img.freepik.com/premium-vector/restaurant-logo-vector-design-white-background_1277164-10430.jpg?semt=ais_hybrid"
//                         alt="Restaurant Logo"
//                     />
//                     <span className="text-2xl font-bold">SWIGGY</span>
//                 </div>
//                 <nav>
//                     <ul className="flex space-x-4 gap-4">
//                         <li>
//                             <Link to="/" className="hover:text-orange-200 transition-colors text-lg font-semibold"> {/* Corrected font-boldl to font-semibold and text-2xl to text-lg*/}
//                                 Home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/about" className="hover:text-orange-200 transition-colors text-lg font-semibold"> {/* Corrected font-boldl to font-semibold and text-2xl to text-lg*/}
//                                 About us
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/contact" className="hover:text-orange-200 transition-colors text-lg font-semibold"> {/* Corrected font-boldl to font-semibold and text-2xl to text-lg*/}
//                                 Contact us
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/cart" className="hover:text-orange-200 transition-colors text-lg font-semibold"> {/* Corrected font-boldl to font-semibold and text-2xl to text-lg, changed / to /cart*/}
//                                 Cart ({cartItem.length} item)
//                             </Link>
//                         </li>
                     
//                         <li>
//                             <button  className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors">
//                                 Login
//                             </button>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logoutUser } from "../utils/authSlice";
import { useState } from "react";

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.freepik.com/premium-vector/restaurant-logo-vector-design-white-background_1277164-10430.jpg?semt=ais_hybrid"
            alt="Logo"
          />
          <span className="text-2xl font-extrabold tracking-tight">SWAGGY</span>
        </Link>

        {/* Hamburger for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav links - Desktop */}
        <nav className="hidden sm:flex space-x-6 font-semibold text-lg items-center">
          <Link to="/" className="hover:text-orange-200 transition">Home</Link>
          <Link to="/about" className="hover:text-orange-200 transition">About Us</Link>
          <Link to="/contact" className="hover:text-orange-200 transition">Contact</Link>
          <Link to="/cart" className="relative hover:text-orange-200 transition">
            Cart ({cartItem.length})
           
            {cartItem.length > 0 && (
              <span className="absolute top-[-8px] right-[-8px] bg-white text-orange-600 rounded-full text-xs font-bold px-2 py-0.5">
                {cartItem.length}
              </span>
            )}
          </Link>

          {!user ? (
            <>
              <Link to="/login">
                <button className="bg-white text-orange-600 px-4 py-1.5 rounded-full font-bold hover:bg-orange-100 transition">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-white text-orange-600 px-4 py-1.5 rounded-full font-bold hover:bg-orange-100 transition">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="font-medium">Hello, {user.displayName || "User"}</span>
              <button onClick={handleLogout} className="hover:text-orange-200 transition">
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-6 pb-6 space-y-4 font-medium text-lg bg-orange-500 transition-all duration-300 ">
          <Link to="/" onClick={toggleMobileMenu} className="flex hover:text-orange-200 justify-center">Home</Link>
          <Link to="/about" onClick={toggleMobileMenu} className="flex hover:text-orange-200 justify-center">About Us</Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="flex hover:text-orange-200 justify-center">Contact</Link>
          <Link to="/cart" onClick={toggleMobileMenu} className="flex hover:text-orange-200 justify-center">
            Cart ({cartItem.length})
            {cartItem.length > 0 && (
              <span className="absolute top-[-8px] right-[-8px] bg-white text-orange-600 rounded-full text-xs font-bold px-2 py-0.5">
                {cartItem.length}
              </span>
            )}
          </Link>

          {!user ? (
            <>
              {/* <Link to="/login" onClick={toggleMobileMenu} className="block">
                <button className="w-full bg-white text-orange-600 px-4 py-2 rounded-full font-bold hover:bg-orange-100 transition">
                  Login
                </button>
              </Link> */}
              <Link to="/signup" onClick={toggleMobileMenu} className="block">
                <button className="w-full bg-white text-orange-600 px-4 py-2 rounded-full font-bold hover:bg-orange-100 transition">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <>
              <span className="block font-medium text-left">Hello, {user.displayName || "User"}</span>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                className="w-full text-left hover:text-orange-200 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
