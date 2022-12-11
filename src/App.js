import LoginImage from './Images/LoginImage.png'
import styles from './Image.module.css'
export default function App(){
  return (
    <div>
        <div>
            <img className={styles.Image} src={LoginImage} alt="LoginImage" />
        </div>
    </div>
  );
}