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
import { logoutUser } from "../utils/authslice";

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  return (
    <header className="bg-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-12 w-12 mr-2 rounded-full"
            src="https://img.freepik.com/premium-vector/restaurant-logo-vector-design-white-background_1277164-10430.jpg?semt=ais_hybrid"
            alt="Restaurant Logo"
          />
          <span className="text-2xl font-bold">SWIGGY</span>
        </div>
        <nav>
          <ul className="flex space-x-4 gap-4">
            <li>
              <Link to="/" className="hover:text-orange-200 transition-colors text-lg font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-200 transition-colors text-lg font-semibold">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-200 transition-colors text-lg font-semibold">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-orange-200 transition-colors text-lg font-semibold">
                Cart ({cartItem.length} items)
              </Link>
            </li>

            {/* Conditional Login/Signup or Logout */}
            {!user ? (
              <>
                <li>
                  <Link to="/login">
                    <button className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors">
                      Signup
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

