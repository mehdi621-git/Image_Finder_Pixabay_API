import { useContext } from "react"
import { context } from "../context"
import Card from "./card"
const Image =()=>{
    const {data,setload}=useContext(context)
    console.log("the daqta "+data)
  
    return<>
      <div className="cardset">

        {

        data.map((image)=>(<Card img ={image} />))}
        </div>
      
    
    </>
}
export default Image;