import React from "react";

import { useNavigate } from "react-router-dom";

import styles from './login-section.module.css'

const LoginSection = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/news-page')
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContent}>
                <form>
                    <div>
                        <input placeholder="Email" name="email" className={styles.form} />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <input placeholder="Password" name="password" className={styles.form} />
                    </div>

                    <div className={styles.flexCenter}>
                        <div className={styles.loginButton} onClick={handleLogin}>
                            Login
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginSection