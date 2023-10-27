import React from "react"

import TitleHead from "../component/title-head/title-head"

import LoginSection from "../component/login-section/login-section"


const LoginPage = () => {

    return (
        <div style={{ paddingTop: '20px' }}>
            <TitleHead title={"Login"} />
            <LoginSection />
        </div>
    )
}

export default LoginPage