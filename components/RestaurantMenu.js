import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL} from "../constants";
const RestaurantMenu=()=>{
    const param=useParams();
    const {id}=param;
    const [restaurant,setrestaurant]=useState({});
    useEffect(()=>{
      getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
      const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.9890648&lng=82.2474648&restaurantId="+id);
      const json=await data.json();
      setrestaurant(json.data.cards[0].card.card.info);
    }
    
    return(
      <div>
        <h2>Restauarnt name:{restaurant.name}</h2>
        <h3>Rating:{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
        <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} />
      </div>
    )
}
export default RestaurantMenu;