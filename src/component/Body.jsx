
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
  const [activeFilter, setActiveFilter] = useState("All"); // To track the active filter

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
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const handleFilter = (filterType) => {
    setActiveFilter(filterType);
    let filteredList = [];
    switch (filterType) {
      case "Top Rated":
        filteredList = listOfRestaurants.filter(
          (res) => parseFloat(res?.info?.avgRating) > 4
        );
        break;
      case "Chinese":
        filteredList = listOfRestaurants.filter((res) =>
          res?.info?.cuisines?.includes("Chinese")
        );
        break;
      case "Indian":
        filteredList = listOfRestaurants.filter((res) =>
          res?.info?.cuisines?.includes("Indian")
        );
        break;
      case "Fast Food":
        filteredList = listOfRestaurants.filter((res) =>
          res?.info?.cuisines?.includes("Fast Food")
        );
        break;
      default:
        filteredList = listOfRestaurants;
        break;
    }
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

      {/* Filters - Centered on larger screens, attractive mobile style */}
      <div className="mt-6">
        <div className="flex justify-center overflow-x-auto scroll-smooth pb-4">
          <button
            className={`px-4 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
              activeFilter === "All"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } mr-2 sm:mr-4`}
            onClick={() => handleFilter("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
              activeFilter === "Top Rated"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } mr-2 sm:mr-4`}
            onClick={() => handleFilter("Top Rated")}
          >
            Top Rated
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
              activeFilter === "Chinese"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } mr-2 sm:mr-4`}
            onClick={() => handleFilter("Chinese")}
          >
            Chinese
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
              activeFilter === "Indian"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } mr-2 sm:mr-4`}
            onClick={() => handleFilter("Indian")}
          >
            Indian
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
              activeFilter === "Fast Food"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } mr-2 sm:mr-4`}
            onClick={() => handleFilter("Fast Food")}
          >
            Fast Food
          </button>
          {/* Add more filter buttons here as needed */}
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurants/" + restaurant?.info?.id}
              >
                {restaurant?.info?.promoted ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
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