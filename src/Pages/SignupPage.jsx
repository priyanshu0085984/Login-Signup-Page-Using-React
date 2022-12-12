import SignupForm from '../components/SignupForm'
import SignupImage from '../Images/Signup.jpg'
import styles from '../Styling/App.module.css'

export default function SignupPage(){
    return (
        <div style={{display :"flex"}}>
            <img className={styles.Image} src={SignupImage} alt="LoginImage" />
            <div className={styles.Form}>
                <SignupForm></SignupForm>
            </div>
        </div>
    )
}   