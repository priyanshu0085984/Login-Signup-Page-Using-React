import styles from '../Styling/Form.module.css'

export default function LoginForm(){
    return (
        <div className={styles.container}>
            <h2>Hello Again!</h2>
            <div className={styles.innerContainer}>
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
            <button className={styles.button}>Login</button>
        </div>
    )
}