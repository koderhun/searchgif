import React from "react"
import { Spin, Alert } from "antd"
import styles from "./styles.module.scss"
import { useGetMusicQuery } from "../../redux"

export const Music = () => {
  const { data, isLoading, isError } = useGetMusicQuery("")
  console.log("data", data)

  return (
    <div className={styles.music}>
      {isLoading && (
        <div className="loader">
          <Spin size="large" />
        </div>
      )}
      {isError && (
        <Alert
          message="Error"
          description="Ошибка запроса."
          type="error"
          showIcon
        />
      )}
    </div>
  )
}
