import styles from '../Styling/Form.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../BaseAxios';
 const SignupForm = ()=>{

        const [SignupInfo,setSignupInfo] = useState({
            name:"",
            email:"",
            password:""
    });
    const [message,setmessage] = useState(null);

    const signup = () =>{
        axios.post('/',{...SignupInfo})
        .then((result)=>{
            if(result.request.status===200){
               return  setmessage(result.data.message)
            }
            else setmessage(result.response.data.message)
        })
        .catch((err)=>{
            setmessage(err.response.data.message)
        })
    }
    return (
        <div className={styles.container}>
            {message && <p>{message}</p>}
            <h2>Welcome</h2>
            <div className={styles.innerContainer}>
                <div className={styles.fields}>
                    <label className={styles.NameLabel}>Name:</label>
                    <input className={styles.input} onChange={(e)=>{setSignupInfo({...SignupInfo,name:e.target.value})}} type='text' placeholder='Enter your Full Name'/>
                </div>
                <div className={styles.fields}>
                    <label className={styles.emailLabel}>Email:</label>
                    <input className={styles.input} type='email' onChange={(e)=>{setSignupInfo({...SignupInfo,email:e.target.value})}} placeholder='Enter your Email'/>
                </div>
                <div className={styles.fields}>
                    <label>Password: </label>
                    <input className={styles.input} onChange={(e)=>{setSignupInfo({...SignupInfo,password:e.target.value})}} type='text' placeholder='Enter your password'/>
                </div>
            </div>
            <button onClick={signup} className={styles.button} >Signup</button>
            <p>Already have an Account? <Link to="/login">Sign in</Link></p>
        </div>
    );
};

export default SignupForm