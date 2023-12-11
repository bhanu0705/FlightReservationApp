import { IMG_URL } from "../constants";

const ResCard=({name,rating})=>{
    return(
        <div className="card">
        <img src={IMG_URL} alt="burgerking" />
           <h2>{name}</h2>
           <h3>{rating}</h3>
        </div>
    );
};
export default ResCard;