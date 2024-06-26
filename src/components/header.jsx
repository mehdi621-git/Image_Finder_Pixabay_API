import { MdCollections } from "react-icons/md";
import styles from '../components/header.module.css'

const Header=()=>{

    return<>
    <div className={styles.mainn}>
      <div className={styles.main}>
      <MdCollections />
      <h4>Find any Image</h4>
      </div>
      </div>
    </> 
}
export default Header;