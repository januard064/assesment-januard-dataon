import React from "react";

import styles from './title-head.module.css'

const TitleHead = (props) => {

    const { title } = props

    return (
        <div className={styles.titleContainer}>
            <div className={styles.titleContent}>
                {title}
            </div>
        </div>
    )

}

export default TitleHead