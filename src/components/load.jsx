import { useContext } from "react";
import { context } from "../context";

const Load=()=>{
   const{load}=useContext(context)
   
    return <>
      {
        load &&
        
        <div class="text-center setload"  >
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
 
 
}
    
    </>
}
export default Load;