import axios from "axios"
const Fetch=async (image,count)=>{
    const API_URL = import.meta.env.VITE_APP_URL
    const API_KEY = import.meta.env.VITE_APP_API
       try {
       const a= await axios.get(`${API_URL}?key=${API_KEY}&q=${image}&per_page=${count}&image_type=photo`)
       return a.data.hits;
       }
       catch(error){
        console.log("An error occur" +error.message);
        throw error;
       }
       
    }
export default Fetch;