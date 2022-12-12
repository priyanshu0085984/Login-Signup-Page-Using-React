import styles from '../Styling/Form.module.css'

export default function signupForm(){
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
            <button className={styles.button}>Login</button>
        </div>
    )
}