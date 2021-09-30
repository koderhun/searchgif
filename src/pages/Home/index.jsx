import React, { useState, useCallback } from "react"
import { Spin, Layout } from "antd"
import { useSearchQuery } from "../../redux"
import { Item } from "../../components/Item"
import { SearchForm } from "../../components/SearchForm"
import styles from "./styles.module.scss"

const { Content } = Layout

export const Home = () => {
  const [search, setSearch] = useState("")
  const { data, isLoading } = useSearchQuery(search)
  const list = data?.data

  const changeSearch = useCallback((value) => {
    setSearch(value)
  })

  return (
    <div className={styles.container}>
      <div className={styles.blog}>
        <h2>
          Поиск gif анимаций из серивиса{" "}
          <a href="https://giphy.com/" target="_blank"></a>
        </h2>
        <p>
          Если ввести присковый запрос на русском то система автоматические
          переведет текст на английский и выдаст поисковый результат
        </p>
      </div>

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
