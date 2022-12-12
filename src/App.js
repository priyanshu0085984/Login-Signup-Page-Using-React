import LoginImage from './Images/Login.jpg';
import styles from './Styling/App.module.css'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'

export default function App(){
  return (
    <div className={styles.Container}>
        <img className={styles.Image} src={LoginImage} alt="LoginImage" />
        <div className={styles.Form}>
          {/* <LoginForm></LoginForm> */}
          <SignupForm></SignupForm>
        </div>
    </div>
  );
};