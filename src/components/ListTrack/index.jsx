import React, { useEffect, useState } from "react"
import { List } from "antd"
import { PlayCircleFilled } from "@ant-design/icons"
import styles from "./styles.module.scss"

export const ListTrack = ({ tracks }) => {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <div className={styles.ListTrack}>
      <List
        header={<div>Music Track</div>}
        bordered
        dataSource={tracks}
        renderItem={(name) => (
          <List.Item
            className={styles.item}
            onClick={() => setShowPlayer(!showPlayer)}
          >
            <div className={styles.itemTrack}>
              <PlayCircleFilled />
              <div className={styles.text}>{name}</div>
            </div>
          </List.Item>
        )}
      />
      {showPlayer && <div className={styles.playerContainer}>Player</div>}
    </div>
  )
}
