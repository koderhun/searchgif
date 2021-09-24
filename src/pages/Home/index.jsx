import React, { useState, useCallback } from "react"
import { Button, Input, Space } from "antd"
import { useSearchQuery } from "../../redux"
import { Item } from "../../components/Item"
import styles from "./styles.module.scss"

const { Search } = Input

export const Home = () => {
  const { data, isLoading } = useSearchQuery("fuck")
  const list = data?.data
  const [search, setSearch] = useState("")

  console.log("data", list, isLoading)

  const changeSearch = useCallback((value) => {
    console.log("val", value)
    setSearch(value)
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

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
      </div>
    </div>
  )
}
