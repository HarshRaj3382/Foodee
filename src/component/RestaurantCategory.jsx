// import { useState } from "react";
// import ItemList from "./ItemList"
// const ResTaurantCategory= ({data})=>{

//     const [showItems,setshowItems]=useState(false);   
    
//     const handleClick = () =>{
//         setshowItems(!showItems);
//     };

//     return <div>              
           
//     <div className="w-6/12 mx-auto bg-gray-58 shadow-lg p-4 ">
//             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
//             <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
//             <span>⬇️</span> 
//         </div>
//         {showItems &&  <ItemList items={data.itemCards}/>}
//     </div>
//     </div>
// }

// export default ResTaurantCategory;

import { useState } from "react";
import ItemList from "./ItemList";

const ResTaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="px-4 sm:px-6 md:px-0">
      <div className="w-full md:w-12/12 mx-auto rounded-lg overflow-hidden shadow-xl mb-4 border border-gray-200">
        <div
          className={`bg-white py-4 px-5 flex justify-between items-center cursor-pointer transition-colors duration-300 ease-in-out ${
            showItems ? "bg-orange-50" : "hover:bg-gray-50"
          }`}
          onClick={handleClick}
        >
          <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
            {data.title} ({data.itemCards.length})
          </h3>
          <span
            className={`text-xl transition-transform duration-300 ease-in-out ${
              showItems ? "rotate-180 text-orange-500" : "text-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={showItems ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </span>
        </div>

        {showItems && (
          <div className="py-2 px-5 bg-gray-50 border-t border-gray-200">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResTaurantCategory;
