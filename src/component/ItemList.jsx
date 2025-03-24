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


import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const dish = {
      id: item.card.info.id,
      name: item.card.info.name,
      price: item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100,
      description: item.card.info.description,
      imageId: item.card.info.imageId,
    };

    console.log("handleAddItem dish:", dish);
    dispatch(addItem(dish));
  };

  const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={url + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
