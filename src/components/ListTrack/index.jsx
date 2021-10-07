import React, { useEffect, useState } from "react"
import { List } from "antd"
import { PlayCircleFilled } from "@ant-design/icons"
import { MUSIC_ROOT_URL } from "../../consts"
import { Audio } from "../Audio"
import styles from "./styles.module.scss"

export const ListTrack = ({ folder, tracks }) => {
  const [showPlayer, setShowPlayer] = useState(false)
  const [thisTrack, setThisTrack] = useState({ url: "", name: "" })

  const toggleTrack = ({ name }) => {
    const trackUrl = `${MUSIC_ROOT_URL}${encodeURI(folder)}/${encodeURI(name)}`
    console.log("ttt", trackUrl)
    setThisTrack({ url: thisTrack, name: name })
    setShowPlayer(true)
  }

  return (
    <div className={styles.ListTrack}>
      <List
        header={<div>Music Track</div>}
        bordered
        dataSource={tracks}
        renderItem={(name) => (
          <List.Item
            className={styles.item}
            onClick={() => toggleTrack({ name })}
          >
            <div className={styles.itemTrack}>
              <PlayCircleFilled />
              <div className={styles.text}>{name}</div>
            </div>
          </List.Item>
        )}
      />
      {showPlayer && (
        <div className={styles.playerContainer}>
          <Audio url={thisTrack.url} name={thisTrack.name} />
        </div>
      )}
    </div>
  )
}
