import React from "react";

import styles from './layout.module.css'

const Layout = (props) => {

    return (
        <div className={styles.layoutContainer}>
            <div className={styles.layoutContent}>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout