

// import { useParams } from "react-router-dom";

// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import ResTaurantCategory from "./ResTaurantCategory";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   const { resId } = useParams();

//   useEffect(() => {
//     fetchMenu();
//   }, [resId]);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.570567164048214&lng=77.38228590609741&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
//     );
//     const json = await data.json();
//     setResInfo(json.data);
//   };

//   if (!resInfo) return <Shimmer />;

//   const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
//   const name = restaurantInfo.name || "Unknown Restaurant";
//   const cuisines = restaurantInfo.cuisines?.join(", ") || "No cuisines available";
//   const costForTwoMessage = restaurantInfo.costForTwoMessage || "Price not available";

//   // Category list
//   let category = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//     (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   ) || [];

//   // Move Recommended category to top
//   category.sort((a, b) => {
//     if (a?.card?.card?.title?.toLowerCase().includes("recommended")) return -1;
//     if (b?.card?.card?.title?.toLowerCase().includes("recommended")) return 1;
//     return 0;
//   });

//   return (
//     <div className="text-center">
//       <h1 className="font-bold text-2xl mb-2">{name}</h1>
//       <p className="text-gray-600 text-center mb-4">
//         {cuisines} - {costForTwoMessage}
//       </p>

//       {/* Category Accordions */}
//       {category.map((cat, index) => (
//         <ResTaurantCategory
//           key={cat?.card?.card?.title}
//           data={cat?.card?.card}
          
//         />
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;



import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ResTaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.570567164048214&lng=77.38228590609741&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
  const name = restaurantInfo.name || "Unknown Restaurant";
  const cuisines = restaurantInfo.cuisines?.join(", ") || "No cuisines available";
  const costForTwoMessage = restaurantInfo.costForTwoMessage || "Price not available";

  const category =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  // Move Recommended category to top
  category.sort((a, b) => {
    if (a?.card?.card?.title?.toLowerCase().includes("recommended")) return -1;
    if (b?.card?.card?.title?.toLowerCase().includes("recommended")) return 1;
    return 0;
  });

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 max-w-4xl mx-auto">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-orange-600 mb-2 text-center">{name}</h1>
      <p className="text-sm sm:text-base text-gray-600 text-center mb-4">
        {cuisines} &bull; {costForTwoMessage}
      </p>

      {/* Category Accordions */}
      <div className="space-y-5">
        {category.map((cat) => (
          <ResTaurantCategory
            key={cat?.card?.card?.title}
            data={cat?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

