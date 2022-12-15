import styles from '../Styling/Form.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../BaseAxios';
export default function LoginForm(){

    const [message,setmessage] = useState(null);

    const [LoginInfo,setLoginInfo] = useState({
        email:"",
        password:""
    })

    const login = ()=>{
        axios.get('/login',{ params:LoginInfo})
        .then((result)=>{
            if(result.request.status===200){
                return  setmessage(result.data.message)
             }
             else setmessage(result.response.data.message)
        })
        .catch((err)=>{
            console.log(err.response.data.message);
            setmessage(err.response.data.message)
        })
        console.log(message);
    }

    return (
        <div className={styles.container}>
            {message && <p>{message}</p>}
            <h2>Hello Again!</h2>
            <div className={styles.innerContainer}>
                <div className={styles.fields}>
                    <label className={styles.emailLabel}>Email:</label>
                    <input onChange={(e)=>{setLoginInfo({...LoginInfo,email:e.target.value})}} className={styles.input} type='email' placeholder='Enter your Email'/>
                </div>
                <div className={styles.fields}>
                    <label>Password: </label>
                    <input onChange={(e)=>{setLoginInfo({...LoginInfo,password:e.target.value})}} className={styles.input} type='text' placeholder='Enter your password'/>
                </div>
            </div>
            <button onClick={login} className={styles.button}>Login</button>
            <p>New User? <Link to='/'>Register Here</Link></p>
        </div>
    )
}