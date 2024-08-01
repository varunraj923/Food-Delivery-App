import React from "react";

import {CDN_URL} from "./utils/constants";

function RestroCards({resData}) {
 

  return (
  <>
       <div className="m-4 p-4 w-full sm:w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg h-48 w-full sm:w-64 object-cover"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg text-center">{resData.info.name}</h3>
        <h4 className="text-center">{resData.info.cuisines.join(", ")}</h4>
        <h4 className="text-center">{resData.info.avgRating} ⭐</h4>
        <h4 className="text-center">{resData.info.costForTwo}</h4>
        <h4 className="text-center">{resData.info.sla.slaString}</h4>
        {/* <h4>User : {loggedInUser} </h4> */}
      </div>
  
  
  </>
  );
}



export default RestroCards;
