import React from "react"
import { Image, Card, Button } from "antd"
import styles from "./styles.module.scss"

export const Item = ({ gifData }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card hoverable className={styles.card}>
      <Image
        className={styles.img}
        title={gifData.title}
        src={gifData.images.preview_gif.url}
        width={"100%"}
        preview={{
          src: gifData.images.original.url
        }}
      />
      <Button
        type="default"
        onClick={() => handleCopy(gifData.images.original.url)}
        className={styles.btn}
      >
        Копировать
      </Button>
    </Card>
  )
}
