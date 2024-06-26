import { createContext, useEffect ,useState} from "react";
import Fetch from "./components/api.js";



export const context = createContext();

const Main = ({children})=>{
    const [data,setdata]=useState([]);
   const [image,setimage]=useState("Pakistan");
   const [number,setnumber]=useState("8")
   const [crum,setcrum]=useState(false)
   const [load,setload]=useState(false)
 useEffect(()=>
      { const Api=async ()=>{
      if(number>=3 && number<=200) { 
        setcrum(false)
        setload(true)
        const ans = await Fetch(image,number);
        
        console.log(ans)
      setdata(ans)
      
          console.log("context"+data)
          setload(false)  
          
        }else{
             setcrum(true)
        }
        
       }
       
    Api();
    
    }
,[image,number])
    return <>
    <context.Provider value={{setimage,setnumber,image,number,data,crum,load,setload}}>

        {children}
    </context.Provider>
    
    </>
}
export default Main;