import React from "react"

import styles from './news-card.module.css'

const NewsCard = (props) => {

    const { data, index } = props


    return (
        <>
            {index == 0 ? (
                <div className={styles.feauteredContainer}>

                    <div className={styles.featuredImageCaptionContent}>
                        <img alt={'image-caption'} src={data.imageSrc} className={styles.image} />
                    </div>

                    <div className={styles.featuredCaption}>
                        <div className={styles.featuredDetail}>
                            <div className={styles.dataProfile}>
                                <div className={styles.imageContainer}>
                                    <img src={data.avatarSrc} alt="user-avatar" className={styles.image} />
                                </div>
                                <div className={styles.profileSection}>
                                    <div style={{ color: '#454F63', }}>{data.userName}</div>
                                    <div style={{ color: '#454F63', fontSize: '12px' }}>{data.newsDate}</div>
                                </div>
                            </div>
                            <div className={styles.captionDetail}>
                                {data.text}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.cardContainer}
                    style={{ display: 'flex', justifyContent: index % 2 == 0 ? 'flex-end' : '' }}
                >
                    <div>
                        <div className={styles.imageCaption}
                            style={{ right: index % 2 == 0 ? '' : 0, left: index % 2 == 0 ? 0 : '' }}
                        >
                            <div className={styles.imageCaptionContent}>
                                <img alt={'image-caption'} src={data.imageSrc} className={styles.image} />
                            </div>
                        </div>

                        <div className={styles.newsCaption} >
                            <div className={styles.newsDetail} style={{ marginLeft: index % 2 == 0 ? '70px' : '' }}>
                                {
                                    index % 2 !== 0 && (
                                        <div className={styles.imageContainer}>
                                            <img src={data.avatarSrc} alt="user-avatar" className={styles.image} />
                                        </div>
                                    )
                                }

                                <div className={styles.profileSection}>

                                    <div style={{ color: '#454F63', fontSize: '12px' }}>{data.newsDate}</div>
                                    <div style={{ color: '#454F63', }}>{data.userName}</div>

                                    <div className={styles.captionDetail} style={{ width: '166px' }}>
                                        {data.text}
                                    </div>
                                </div>

                                {
                                    index % 2 == 0 && (
                                        <div className={styles.imageContainer}>
                                            <img src={data.avatarSrc} alt="user-avatar" className={styles.image} />
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>

                </div >
            )}

        </>
    )
}

export default NewsCard