
import { useContext, useRef } from 'react'
import styles from '../components/input.module.css'
import { context } from '../context';

const Input=()=>{
    const imageName= useRef();
    const numbers =useRef();
   const {setimage,setnumber}= useContext(context);
  
    const gatData=(event)=>{
        event.preventDefault();
          const imageGiven=imageName.current.value;
          const numberGiven = numbers.current.value;
          setimage(imageGiven);
          setnumber(numberGiven);
         
         

    }
    return(
    <>
    <div className={styles.maindiv}>
        <form onSubmit={(e)=>gatData(e)}>
        <input ref={imageName} className={styles.input} type="text" placeholder='Image'/>
        <input ref={numbers} className={styles.input} type="number" placeholder='Number of Images'/>
        <button className={styles.button} type='submit'>Search</button>
        </form>
    </div>
    
</>
    )

}
export default Input