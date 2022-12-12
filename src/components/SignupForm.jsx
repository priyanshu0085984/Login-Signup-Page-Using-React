import styles from '../Styling/Form.module.css'
import { Link } from 'react-router-dom'
export default function signupForm(){


    // const [user, setUser] = useState({
    //     name: "", email: "", phone:"", work: "", password: "", cpassword: ""
    // });
    // let name, value;
    // const handleInputs = (e)=>{
    //     console.log(e);
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({ ... user, [name]:value});
    // }


    return (
        <div className={styles.container}>
            <h2>Welcome</h2>
            <div className={styles.innerContainer}>
                <div className={styles.fields}>
                    <label className={styles.NameLabel}>Name:</label>
                    <input className={styles.input} type='text' placeholder='Enter your Full Name'/>
                </div>
                <div className={styles.fields}>
                    <label className={styles.emailLabel}>Email:</label>
                    <input className={styles.input} type='email' placeholder='Enter your Email'/>
                </div>
                <div className={styles.fields}>
                    <label>Password: </label>
                    <input className={styles.input} type='password' placeholder='Enter your password'/>
                </div>
                <div className={styles.fields}>
                    <label>Show Password: </label>
                    <input type='checkbox' />
                </div>
            </div>
            <button className={styles.button}>Signup</button>
            <p>Already have an Account? <Link to="/login">Sign in</Link></p>
        </div>
    )
}