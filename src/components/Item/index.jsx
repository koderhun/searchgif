import React from "react"
import { Image, Card } from "antd"
import styles from "./styles.module.scss"

export const Item = (gifData) => {
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
    </Card>
  )
}
