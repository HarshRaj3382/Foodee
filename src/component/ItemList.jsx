// import { addItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";
// const ItemList=({items})=>{

//     const dispatch=useDispatch();
//     const handleAddItem = (dish) => {
//         console.log("handleAddItem dish:", dish);
//         dispatch(addItem(dish));
//     };
     
//     const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

//      return (    
//      <div>
//       {items.map((item)=>(
//         <div key={item.card.info.id}
//         className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between" >
           
        
//             <div className="w-9/12">
//                 <div className="py-2">
//                     <span>{item.card.info.name}</span>
//                     <span>
//                         -₹ 
//                         {
//                         item.card.info.price
//                         ? item.card.info.price/100
//                         : item.card.info.defaultPrice/100
//                         }
//                     </span>
//                 </div>
//                 <p className="text-x5">{item.card.info.description}</p>
//             </div>
//             <div className="w-3/12 p-4">
//             <div className="absolute">
//                 <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handleAddItem(item)}>
//                     Add +
//                 </button>

//             </div>
//                 <img src={url+ item.card.info.imageId} className="w-50" />  
//             </div>
        
//         </div>
//       ))}  
       
//      </div>
//     )
// }

// export default ItemList;
// import { addItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";

// const ItemList = ({ items }) => {
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     alert("Item added to cart:", item.info.name);
//     const dish = {
//       id: item.card.info.id,
//       name: item.card.info.name,
//       price: item.card.info.price
//         ? item.card.info.price / 100
//         : item.card.info.defaultPrice / 100,
//       description: item.card.info.description,
//       imageId: item.card.info.imageId,
//     };

//     dispatch(addItem(dish));
//   };

//   const url =
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_350,c_fit/";

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white transition-transform hover:shadow-lg hover:scale-[1.01]"
//         >
//           {/* Image */}
//           <img
//             src={url + item.card.info.imageId}
//             alt={item.card.info.name}
//             className="w-full h-48 object-cover"
//           />

//           {/* Content */}
//           <div className="p-4 flex flex-col gap-2">
//             <h3 className="text-lg font-semibold text-gray-900 truncate">
//               {item.card.info.name}
//             </h3>
//             <p className="text-sm text-gray-500 line-clamp-2">
//               {item.card.info.description}
//             </p>
//             <div className="flex items-center justify-between mt-2">
//               <span className="text-orange-600 font-bold text-md">
//                 ₹
//                 {item.card.info.price
//                   ? item.card.info.price / 100
//                   : item.card.info.defaultPrice / 100}
//               </span>

//               <button
//                 onClick={() => handleAddItem(item)}
//                 className="text-sm bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-all shadow"
//               >
//                 Add +
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;



import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState(null);

  const handleAddItem = (item) => {
    console.log("Item added to cart:", item.card.info.name);
    setAlertMessage(`${item.card.info.name} added to cart!`);
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000); // Alert disappears after 3 seconds

    const dish = {
      id: item.card.info.id,
      name: item.card.info.name,
      price: item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100,
      description: item.card.info.description,
      imageId: item.card.info.imageId,
    };

    dispatch(addItem(dish));
  };

  const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_350,c_fit/";

  return (
    <div className="relative">
      {alertMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md z-50 animate-fade-in-out">
          {alertMessage}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white transition-transform hover:shadow-lg hover:scale-[1.01]"
          >
            {/* Image */}
            <img
              src={url + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {item.card.info.name}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.card.info.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-orange-600 font-bold text-md">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>

                <button
                  onClick={() => handleAddItem(item)}
                  className="text-sm bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-all shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;