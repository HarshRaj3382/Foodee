
// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Body = () => {
//     const [listOfRestaurants, setListOfRestaurants] = useState([]);
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const data = await fetch(
//                 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//             );

//             const json = await data.json();
//             console.log("API Response:", json);

//             // Safely extract restaurants
//             const restaurants =
//                 json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

//             setListOfRestaurants(restaurants);
//             setFilteredRestaurants(restaurants); // Keep a separate filtered list
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     const handleSearch = () => {
//         const filteredList = listOfRestaurants.filter((res) =>
//             res.info.name.toLowerCase().includes(searchText.toLowerCase())
//         );
//         setFilteredRestaurants(filteredList); // Update only filtered list, not original data
//     };

//     const onlineStatus=useOnlineStatus();
//     if(onlineStatus===false)return <h1>Lokks like you are ofline ,please check your 
//         internet Conne tion!!!!!!!
//     </h1>

//     return (
//         <div className="body">
//             <div className="filter">
//             <div className="flex justify-center items-center h-20 mt-4">
//     <input
//         type="text"
//         className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         placeholder="Search restaurants..."
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//     />
//     <button
//         onClick={handleSearch}
//         className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
//     >
//         Search
//     </button>
// </div>

//             </div>

//             <button
//                 className="filter-btn"
//                 onClick={() => {
//                     const filteredList = listOfRestaurants.filter(
//                         (res) => parseFloat(res?.info?.avgRating) > 4
//                     );
//                     setFilteredRestaurants(filteredList);
//                 }}
//             >
//                 Top Rated Restaurants
//             </button>

//             <div className="res-container">
//                 {filteredRestaurants.length > 0 ? (
//                     filteredRestaurants.map((restaurant) => (
//                         <Link
//                         key={restaurant?.info?.id}
//                          to={"/restaurants/"+restaurant?.info?.id}
//                         >
//                             <RestaurantCard  resData={restaurant} />
//                         </Link>
                        
//                     ))
//                 ) : (
//                     (<Shimmer />)
//                 )}
//             </div>
//         </div>
//     );
// };

// // export default Body;
// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Body = () => {
//     const [listOfRestaurants, setListOfRestaurants] = useState([]);
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const data = await fetch(
//                 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//             );

//             const json = await data.json();
//             console.log("API Response:", json);

//             const restaurants =
//               //  json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//                 json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
//             setListOfRestaurants(restaurants);
//             setFilteredRestaurants(restaurants);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     const handleSearch = () => {
//         const filteredList = listOfRestaurants.filter((res) =>
//             res.info.name.toLowerCase().includes(searchText.toLowerCase())
//         );
//         setFilteredRestaurants(filteredList);
//     };

//     const onlineStatus = useOnlineStatus();
//     if (!onlineStatus)
//         return (
//             <h1 className="text-center text-red-500 text-xl font-semibold mt-10">
//                 Looks like you are offline, please check your internet connection!
//             </h1>
//         );

//     return (
//         <div className="p-4">
            
//             {/* Search Bar */}
//             <div className="flex justify-center items-center mt-6">
//                 <input
//                     type="text"
//                     className="w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
//                     placeholder="Search for restaurants..."
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                 />
//                 <button
//                     onClick={handleSearch}
//                     className="ml-2 px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
//                 >
//                     Search
//                 </button>
//             </div>

//             {/* Filters (Swiggy-like Horizontal Scroll Categories) */}
//             <div className="flex justify-center gap-4 overflow-x-auto mt-6 px-4 scrollbar-hide">
//                 <button
//                     className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
//                     onClick={() => setFilteredRestaurants(listOfRestaurants)}
//                 >
//                     All
//                 </button>
//                 <button
//                     className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
//                     onClick={() => {
//                         const filteredList = listOfRestaurants.filter(
//                             (res) => parseFloat(res?.info?.avgRating) > 4
//                         );
//                         setFilteredRestaurants(filteredList);
//                     }}
//                 >
//                     Top Rated
//                 </button>
//                 <button
//                     className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
//                     onClick={() => {
//                         const filteredList = listOfRestaurants.filter(
//                             (res) => res?.info?.cuisines?.includes("Chinese")
//                         );
//                         setFilteredRestaurants(filteredList);
//                     }}
//                 >
//                     Chinese
//                 </button>
//                 <button
//                     className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
//                     onClick={() => {
//                         const filteredList = listOfRestaurants.filter(
//                             (res) => res?.info?.cuisines?.includes("Indian")
//                         );
//                         setFilteredRestaurants(filteredList);
//                     }}
//                 >
//                     Indian
//                 </button>
//                 <button
//                     className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
//                     onClick={() => {
//                         const filteredList = listOfRestaurants.filter(
//                             (res) => res?.info?.cuisines?.includes("Fast Food")
//                         );
//                         setFilteredRestaurants(filteredList);
//                     }}
//                 >
//                     Fast Food
//                 </button>
//             </div>

            
//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {filteredRestaurants.length > 0 ? (
//                     filteredRestaurants.map((restaurant) => (
//                         <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
//                             <RestaurantCard resData={restaurant} />
//                         </Link>
//                     ))
//                 ) : (
//                     <Shimmer />
//                 )}
//             </div> */}
//               <div className="px-4 py-8"> {/* Removed container class */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> {/* Added xl:grid-cols-5 */}
//         {filteredRestaurants.length > 0 ? (
//           filteredRestaurants.map((restaurant) => (
//             <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
//               <RestaurantCard resData={restaurant} />
//             </Link>
//           ))
//         ) : (
//           <Shimmer />
//         )}
//       </div>
//     </div>
//         </div>
//     );
// };

// export default Body;


import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";





const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);



    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();
            console.log("API Response:", json);

            const restaurants =
                json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSearch = () => {
        const filteredList = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filteredList);
    };

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus)
        return (
            <h1 className="text-center text-red-500 text-xl font-semibold mt-10">
                Looks like you are offline, please check your internet connection!
            </h1>
        );

    return (
        <div className="p-4">
            {/* Search Bar */}
            <div className="flex justify-center items-center mt-6">
                <input
                    type="text"
                    className="w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="Search for restaurants..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
                >
                    Search
                </button>
            </div>

            {/* Filters (Swiggy-like Horizontal Scroll Categories) */}
           
<div className="flex justify-center gap-4 overflow-x-auto mt-6 px-4 scrollbar-hide">
                <button
                    className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
                    onClick={() => setFilteredRestaurants(listOfRestaurants)}
                >
                    All
                </button>
                <button
                    className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => parseFloat(res?.info?.avgRating) > 4
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Top Rated
                </button>
                <button
                    className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res?.info?.cuisines?.includes("Chinese")
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Chinese
                </button>
                <button
                    className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res?.info?.cuisines?.includes("Indian")
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Indian
                </button>
                <button
                    className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition-all"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res?.info?.cuisines?.includes("Fast Food")
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Fast Food
                </button>
            </div>


            {/* Restaurant Grid */}
            <div className=" px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => (
                            <Link
                                key={restaurant?.info?.id}
                                to={"/restaurants/" + restaurant?.info?.id}
                            >
                                {restaurant.info.promoted ? (RestaurantCardPromoted):
                                (<RestaurantCard resData={restaurant} />)
                                }
                            </Link>
                        ))
                    ) : (
                        <Shimmer />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;











