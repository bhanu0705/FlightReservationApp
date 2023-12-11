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
    console.log("Checking if this log appears");
    const [restaurants, setrestaurants]=useState(resList);
    const [searchVal, setsearchVal]=useState("");
    useEffect(()=>{
        
    },[]);
    
    return(
        <>
        
        <div className="search-container">
           <input 
           type="text"
           className="search-input"
           placeholder="search"
           value={searchVal}
           onChange={(e)=>
            setsearchVal(e.target.value)
        }
           />
           
           <button 
           className="search-btn" 
           onClick={()=>{
            console.log("s");
            const data=filterData(searchVal,restaurants);
            setrestaurants(data);
           }}>
            Search
            </button> 

        </div>
        <div className="res-list">
            {
                restaurants.map((r) =>{
                    return  <ResCard {...r} key={r.name}/>
                })
            }
            
        </div> 
        </>
        
    );
};

export default Body;