import React, { useState, useCallback } from "react"
import { Button, Input, Spin } from "antd"
import { useSearchQuery } from "../../redux"
import { Item } from "../../components/Item"
import styles from "./styles.module.scss"

const { Search } = Input

export const Home = () => {
  const [search, setSearch] = useState("")
  const { data, isLoading } = useSearchQuery(search)
  let list = []
  list = data?.data

  console.log("data", list, isLoading)

  const changeSearch = useCallback((value) => {
    console.log("val", value)
    setSearch(value)
  })

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Search
          placeholder="input search text"
          onSearch={changeSearch}
          enterButton={
            <Button type="primary" size="large">
              Поиск
            </Button>
          }
          className={styles.search}
        />
      </div>
      <div className={styles.list}>
        {list &&
          list.map((gifData, key) => {
            return <Item key={key} {...gifData} />
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
