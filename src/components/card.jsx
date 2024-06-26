
import { IoMdDownload } from "react-icons/io";


const Card=({img})=>{
 
   const handleclick=()=>{

    const a =document.createElement('a');
    
    a.href=img.largeImageURL;
    document.body.appendChild(a)
    a.click()
    document.body.removeChild('a')
   }
 
   const downloadHandle=()=>{
    
       const b=document.createElement('a');
       b.href=img.pageURL;
       b.target='_blank'
       document.body.appendChild(b);
       
       b.click();
       document.body.removeChild(b);
       
      
   }
  
  
    return <>
<div class="card singCard" style={{width:" 18rem"}}>
  <img src={img.largeImageURL} class="card-img-top" alt="..." onClick={(e)=>handleclick(e)}/>
  <button type="button" class="btn btn-primary buttondownload" onClick={(e)=>downloadHandle(e)}>{
    
   <IoMdDownload />}</button>

 
</div>
    </>
}
export default Card;