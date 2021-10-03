import React, { useEffect } from "react"
import styles from "./styles.module.scss"

export const MusicList = ({ match }) => {
  return <div className={styles.music}>{match.params.id}</div>
}
