import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import ResMenuCard from './ResMenuCard';
import ResCategry from './ResCategry';
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
  
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      setResInfo(json);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!resInfo) {
    return <Shimmer />;
  }

  const categry = resInfo?.data?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  

  return (
    <>
      <ResMenuCard newdata={resInfo} />
      {categry && categry.length > 0 ? (
        categry.map((category) => (
          <ResCategry key={category?.card?.card?.title} data={category?.card?.card} />
        ))
      ) : (
        <div>No categories found</div>
      )}
    </>
  );
};

export default RestaurantMenu;



