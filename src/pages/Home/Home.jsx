import React from 'react'
import {useSearchQuery} from '../../redux'
import {Item} from '../../components/Item/Item'
import styles from './styles.module.scss'


export const Home = ({ }) => {
    const {data, isLoading} = useSearchQuery('fuck')
    const list = data?.data;
    console.log('data', list, isLoading)
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return <div className={styles.container}>
        {list && list.map(gifData => {
            return <Item {...gifData}/>
        })}
    </div>
}
