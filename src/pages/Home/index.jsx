import React, { useState, useCallback } from "react"
import { Spin } from "antd"
import { useSearchQuery } from "../../redux"
import { Item } from "../../components/Item"
import { SearchForm } from "../../components/SearchForm"
import styles from "./styles.module.scss"

export const Home = () => {
  const [search, setSearch] = useState("")
  const { data, isLoading } = useSearchQuery(search)
  const list = data?.data

  const changeSearch = useCallback((value) => {
    console.log("val", value)
    setSearch(value)
  })

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <SearchForm {...{ changeSearch }} />
      </div>
      <div className={styles.list}>
        {list &&
          list.map((gifData, key) => {
            return <Item key={key} gifData={gifData} />
          })}

        {isLoading && (
          <div className={styles.loader}>
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  )
}
