import LoginForm from "../components/LoginForm";
import styles from "../Styling/App.module.css";
import LoginImage from "../Images/Login.jpg";

export default function LoginPage() {
  return (
    <div style={{display :"flex"}}>
      <img className={styles.Image} src={LoginImage} alt="LoginImage" />
      <div className={styles.Form}>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
