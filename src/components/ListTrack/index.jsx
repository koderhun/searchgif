import React, { useState, useCallback } from "react"
import { List } from "antd"
import { PlayCircleFilled } from "@ant-design/icons"
import { MUSIC_ROOT_URL, FILE_EXTEN } from "../../consts"
import { Audio } from "../Audio"
import styles from "./styles.module.scss"

export const ListTrack = ({ folder, tracks }) => {
  const [showPlayer, setShowPlayer] = useState(false)
  const [thisTrack, setThisTrack] = useState({ url: "", name: "" })
  let tracksMod = []

  if(tracks.length !== 0) {
    tracks.map((v, k) => {
      const ext = v.substr(v.lastIndexOf('.'), v.length);
      FILE_EXTEN.map((v2) => {
        if(v2 === ext) {
          tracksMod.push(v)
        }
      })
    })
  }



  const toggleTrack = useCallback(({ name }) => {
    const trackUrl = `${MUSIC_ROOT_URL}${encodeURI(folder)}/${encodeURI(name)}`
    setThisTrack({ url: trackUrl, name: name })
    setShowPlayer(true)
  }, [showPlayer, thisTrack])

  return (
    <div className={styles.ListTrack}>
      <List
        header={<div>Music Track</div>}
        bordered
        dataSource={tracksMod}
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
