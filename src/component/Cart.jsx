// import { clearCart } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";



// import { useSelector } from "react-redux";

// const Cart = () => {
//     const cartItems = useSelector((store) => store.cart.items); // Assuming your slice is named 'cart'

//     const dispatch=useDispatch();
//     const handleAddItem = (dish) => {
//         console.log("handleAddItem dish:", dish);
//         dispatch(clearCart());
//     };



//     return (
//         <div className="text-center m-10 p-10">
//             <h2 className="text-2xl font-bold mb-4">Cart</h2>
//             <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 position-bottom-0">
//   Pay Now
// </button>
// <button onClick={()=>{handleAddItem}} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 position-bottom-0">
//   Clear Cart
// </button>
//             {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <ul>
//                     {cartItems.map((item) => (
//                         <li key={item.id} className="border p-2 m-2 h-[200px] w-[80%] rounded-md flex justify-between items-center">
//                             <div className="flex items-center">
//                                 {item.imageId && (
//                                     <img
//                                         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_80,h_80,c_fit/${item.imageId}`}
//                                         alt={item.name}
//                                         className="w-16 h-16 object-cover rounded-md mr-2 h-[120px] w-[180px]"
//                                     />
//                                 )}
//                                 <div>
//                                     <span className="font-semibold">{item.name}</span>
//                                     <span className="ml-2">₹{item.price.toFixed(2)}</span>
//                                     <br></br><span className="ml-2">{item.description}</span>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
                
//             )}
//         </div>
        
//     );
// };

// export default Cart;


// src/components/Cart.jsx

import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, increaseQuantity, decreaseQuantity } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => dispatch(clearCart());
  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));
  const handleRemove = (id) => dispatch(removeItem(id));

  const totalAmount = cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  return (
    <div className="text-center m-10 p-10">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border p-4 m-4 rounded-lg flex items-center shadow-md">
                {item.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_120,c_fit/${item.imageId}`}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">₹{(item.price || 0).toFixed(2)}</p>
                  {item.description && <p className="text-sm text-gray-500 mt-1">{item.description}</p>}
                </div>
                <div className="flex items-center">
                  <button className="bg-gray-300 px-3 py-1 rounded-l text-lg" onClick={() => handleDecrease(item.id)}>-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button className="bg-gray-300 px-3 py-1 rounded-r text-lg" onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md ml-4"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xl font-semibold">Total: ₹{totalAmount.toFixed(2)}</div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => alert("Pay Now functionality coming soon!")}
            >
              Pay Now
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;



// import { useSelector, useDispatch } from "react-redux";
// import {
//   clearCart,
//   removeItem,
//   increaseQuantity,
//   decreaseQuantity,
// } from "../utils/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const handleIncreaseQuantity = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   const totalAmount = cartItems.reduce(
//     (total, item) => total + (item.price || 0) * item.quantity,
//     0
//   );

//   return (
//     <div className="text-center m-10 p-10">
//       <h2 className="text-2xl font-bold mb-4">Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="border p-4 m-4 rounded-lg flex items-center shadow-md"
//               >
//                 {item.imageId && (
//                   <img
//                     src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_120,c_fit/${item.imageId}`}
//                     alt={item.name}
//                     className="w-24 h-24 object-cover rounded-lg mr-4"
//                   />
//                 )}
//                 <div className="flex-1 text-left">
//                   <h3 className="font-semibold text-lg">{item.name}</h3>
//                   <p className="text-gray-600">
//                     ₹{((item.price || 0) / 100).toFixed(2)}
//                   </p>
//                   <p className="text-sm text-gray-500 mt-1">{item.description}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     className="bg-gray-300 px-3 py-1 rounded-l text-lg"
//                     onClick={() => handleDecreaseQuantity(item.id)}
//                   >
//                     -
//                   </button>
//                   <span className="px-4">{item.quantity}</span>
//                   <button
//                     className="bg-gray-300 px-3 py-1 rounded-r text-lg"
//                     onClick={() => handleIncreaseQuantity(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md ml-4"
//                   onClick={() => dispatch(removeItem(item.id))}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="flex flex-col items-center mt-6">
//             <p className="text-xl font-semibold mb-2">
//               Total: ₹{(totalAmount / 100).toFixed(2)}
//             </p>
//             <div className="flex justify-center space-x-4">
//               <button
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300"
//                 onClick={() => alert("Pay Now functionality to be implemented")}
//               >
//                 Pay Now
//               </button>
//               <button
//                 className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300"
//                 onClick={handleClearCart}
//               >
//                 Clear Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

