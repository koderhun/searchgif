import React from 'react'
import styles from './styles.module.scss'


export const Item = (gifData) => {
    return (
        <div className={styles.item}>
            <img src={gifData.images.fixed_width.url} alt={gifData.title} />
        </div>
    )
}
