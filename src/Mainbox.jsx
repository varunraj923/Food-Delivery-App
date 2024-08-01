import React from "react";
import Navbar from "./Navbar";
import RestroCards from "./RestroCards";
import "./App.css";
import restaurantList from "./utils/mockData";
import { useState,useEffect } from "react";
import "./Mainbox.css";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";

function Mainbox(){

    const [filterlist,setfilterList] = useState([]);
    const[filternewlist,setfilterNewlist] = useState([]);
    const [filtertext, setfilterText] = useState("");

   
    

    useEffect(()=>{
        fetchData();

    },[]);
    const fetchData = async()=>{
        const data = await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
        setfilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterNewlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
      
    //    setfilterList();

   
       
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
        return (
        <h1>It seems that you are offline!!! please check the internet connection </h1>
        )
    }
    

    if(filterlist.length===0){
        return <Shimmer/>
    }

  
    return(

        <>

        <div>

         

        <div className="flex justify-center items-center mt-4 sm:mt-10 sm:ml-36">
  <div className="bg-white rounded-full shadow-lg flex w-full max-w-sm sm:max-w-md">
    <input
      type="text"
      className="px-3 py-2 w-full rounded-l-full focus:outline-none"
      placeholder="Search Restaurants..."
      value={filtertext}
      onChange={(e) => {
        setfilterText(e.target.value);
      }}
    />
    <button
      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-r-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500"
      onClick={() => {
        const newsearch = filterlist.filter((res) =>
          res.info.name.toLowerCase().includes(filtertext.toLowerCase())
        );
        setfilterNewlist(newsearch);
      }}
    >
      Search
    </button>
  </div>
</div>

<div className="flex justify-center items-center mt-4">
  <div className="flex items-center bg-white rounded-full shadow-lg p-2 w-full max-w-xs sm:max-w-sm sm:ml-36">
    <button
      className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={() => {
        const newlist = filterlist.filter((res) => res.info.avgRating > 4);
        setfilterNewlist(newlist);
      }}
    >
      Click Here For Top Rated Restaurant
    </button>
  </div>
</div>

    </div>

        
    

     
  

    
            
        

            <div className="maincard">
       { 
       filternewlist.map((restaurant) =>( <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> 
        <RestroCards resData={restaurant}></RestroCards>
        </Link>
       ))
     
  }

  
      </div>
        
        </>

    );
}

export default Mainbox;