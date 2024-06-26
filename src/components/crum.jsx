
import { useContext } from "react";
import { IoAlertCircleSharp } from "react-icons/io5";
import { context } from "../context";
const Crum=()=>{
 const {crum}=useContext(context)
    return (<>
    
{crum &&
    <div class="alert alert-primary d-flex align-items-center crum" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
  <div className="word">
  <IoAlertCircleSharp />
    Amount Should be min 3 & max 200
  </div>
  </div>}
    </>)
}
export default Crum;