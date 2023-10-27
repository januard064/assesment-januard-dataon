import React from "react"

import styles from './news-card.module.css'

const NewsCard = (props) => {

    const { data } = props

    const { UserAvatar } = data.avatarSrc

    return (
        <div className={styles.cardContainer}
            style={{ display: 'flex', justifyContent: data.imagePosition === 'left' ? 'flex-end' : '' }}
        >
            <div>
                <div className={styles.imageCaption}
                    style={{ right: data.imagePosition === 'right' ? 0 : '', left: data.imagePosition === 'left' ? 0 : '' }}
                >
                    <div className={styles.imageCaptionContent}>
                        <img alt={'image-caption'} src={data.imageSrc} className={styles.image} />
                    </div>
                </div>

                <div className={styles.newsCaption} >
                    <div className={styles.newsDetail} style={{ marginLeft: data.imagePosition === 'left' ? '70px' : '' }}>
                        {
                            data.imagePosition === 'right' && (
                                <div className={styles.imageContainer}>
                                    <img src={data.avatarSrc} alt="user-avatar" className={styles.image} />
                                </div>
                            )
                        }

                        <div className={styles.profileSection}>
                            <div style={{ color: '#454F63', }}>{data.userName}</div>
                            <div style={{ color: '#454F63', fontSize: '12px' }}>{data.newsDate}</div>

                            <div className={styles.captionDetail}>
                                {data.text}
                            </div>
                        </div>

                        {
                            data.imagePosition === 'left' && (
                                <div className={styles.imageContainer}>
                                    <img src={data.avatarSrc} alt="user-avatar" className={styles.image} />
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsCard