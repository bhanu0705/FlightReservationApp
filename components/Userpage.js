import { Outlet, useParams } from "react-router-dom";
const Userpage=()=>{
    return(
   <div>
        <p>This is user page</p>
        <Outlet />
    </div>
    )
    
}
export default Userpage;