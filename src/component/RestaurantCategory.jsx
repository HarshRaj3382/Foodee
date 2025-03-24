import { useState } from "react";
import ItemList from "./ItemList"
const ResTaurantCategory= ({data})=>{

    const [showItems,setshowItems]=useState(false);   
    
    const handleClick = () =>{
        setshowItems(!showItems);
    };

    return <div>              
           
    <div className="w-6/12 mx-auto bg-gray-58 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span> 
        </div>
        {showItems &&  <ItemList items={data.itemCards}/>}
    </div>
    </div>
}

export default ResTaurantCategory;