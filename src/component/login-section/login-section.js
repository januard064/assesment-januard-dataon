import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from './login-section.module.css'

const LoginSection = () => {

    const navigate = useNavigate()

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const [isErrorMessage, setIsErrorMessage] = useState(false)

    const handleInputChangeEmail = (e) => {
        e.preventDefault()
        setInputEmail(e.target.value)

    }

    const handleInputChangePassword = (e) => {
        e.preventDefault()
        setInputPassword(e.target.value)

    }

    const handleLogin = () => {
        if (inputEmail !== '' && inputPassword !== '') {
            navigate('/news-page')
            setInputEmail('')
            setInputPassword('')
            setIsErrorMessage(false)
        } else {
            setIsErrorMessage(true)
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContent}>
                <form>
                    <div>
                        <input placeholder="Email" name="email" className={styles.form} value={inputEmail} onChange={handleInputChangeEmail} />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <input placeholder="Password" name="password" className={styles.form} value={inputPassword} onChange={handleInputChangePassword} />
                    </div>

                    {isErrorMessage && (
                        <div className={styles.errorMessage}>
                            Email or Password is Incorrect
                        </div>
                    )}

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