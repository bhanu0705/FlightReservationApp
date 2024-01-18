import { useEffect, useState } from "react";
import { resList } from "../constants";
import ResCard from "./ResCard";
import {Shimmer,Image} from "react";

function filterData(searchVal, resList){
    const filData=resList.filter((res)=>{

        return res.name.includes(searchVal);
    }
    );
    return filData;
}
const Body=()=>{
    const[allRestaurants,setallRestaurants]=useState(resList);
   const[filteredRestaurants,setfilteredRestaurants]=useState([]);
    const [restaurants, setrestaurants]=useState(resList);
    const [searchVal, setsearchVal]=useState("");
    useEffect(()=>{
        console.log(1);
       // setallRestaurants(allRestaurants);
        setfilteredRestaurants(allRestaurants);
    },[]);
    return(
        <>
        
        <div className="search-container">
           <input 
           type="text"
           className="search-input"
           placeholder="search"
           value={searchVal}
           onChange={(e)=>{
            setsearchVal(e.target.value);
             }
        }
           />
           
           <button 
           className="search-btn" 
           onClick={()=>{
            const data=filterData(searchVal,allRestaurants);
            setfilteredRestaurants(data);
           }}>
            Search
            </button> 

        </div>
        <div className="res-list">
            {
                
                filteredRestaurants.map((r) =>{
                    return  <ResCard {...r} key={r.name}/>
                })
            }
            
        </div> 
        </>
        
    );
};

export default Body;