import React from "react"
import { Image } from "antd"
import styles from "./styles.module.scss"

export const Item = (gifData) => {
  console.log("gifData.images.original.url", gifData.images.original.url)
  return (
    <Image
      title={gifData.title}
      width={200}
      src={gifData.images.preview_gif.url}
      preview={{
        src: gifData.images.original.url
      }}
    />
  )
}
