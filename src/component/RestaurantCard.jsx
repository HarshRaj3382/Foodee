

import React from "react";

import PropTypes from "prop-types";

const CLOUDINARY_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ resData }) => {
  if (!resData || !resData.info) {
    return <h3>Loading...</h3>;
  }

  const {
    name,
    cuisines = [],
    avgRatingString,
    costForTwo,
    areaName,
    cloudinaryImageId,
    sla,
    aggregatedDiscountInfoV3,
  } = resData.info;

  const distance = sla?.lastMileTravelString || "N/A";
  const discount = aggregatedDiscountInfoV3?.header || null;
  const discountSub = aggregatedDiscountInfoV3?.subHeader || null;

  return (
    <div className="w-full sm:w-[240px] m-2 cursor-pointer transition-transform duration-200 hover:scale-105 font-sans">
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="relative">
          <img
            src={`${CLOUDINARY_BASE_URL}${cloudinaryImageId}`}
            alt={name}
            className="w-full h-[150px] object-cover aspect-square" // Added aspect-square
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/240x160";
            }}
          />
          {discount && (
            <div className="absolute bottom-2 left-2 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
              {discount}
              {discountSub && <span className="ml-1 text-[10px] font-normal">{discountSub}</span>}
            </div>
          )}
        </div>

        <div className="p-3">
          <h2 className="text-lg font-bold text-gray-800 truncate">{name}</h2>
          <p className="text-sm text-gray-600 mt-1 truncate">{cuisines.slice(0, 3).join(", ")}</p>

          <div className="flex items-center text-sm text-gray-700 font-medium mt-2 space-x-1">
            <span className="text-green-700 font-semibold">{avgRatingString || "★"}</span>
            <span>•</span>
            <span>{distance}</span>
            <span>•</span>
            <span>{costForTwo}</span>
          </div>

          <p className="text-xs text-gray-500 mt-1">{areaName}</p>
        </div>
      </div>
    </div>
  );
};


export const withPromtedLabel=(resData) => {
  return (props)=>{
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};


RestaurantCard.propTypes = {
  resData: PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string),
      avgRatingString: PropTypes.string,
      costForTwo: PropTypes.string,
      areaName: PropTypes.string,
      cloudinaryImageId: PropTypes.string,
      sla: PropTypes.shape({
        lastMileTravelString: PropTypes.string,
      }),
      aggregatedDiscountInfoV3: PropTypes.shape({
        header: PropTypes.string,
        subHeader: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default RestaurantCard;