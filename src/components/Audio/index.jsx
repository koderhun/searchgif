import React from "react"
import styles from "./styles.module.scss"
import useAudioPlayer from "../../hooks/useAudioPlayer"
import { Play } from "./components/Play"
import { Pause } from "./components/Pause"
import { Bar } from "../Bar"

export const Audio = ({ url }) => {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer()

  return (
    <div className={styles.audio}>
      <audio id="audio">
        <source src={url} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className={styles.control}>
        <div className={styles.playpause}>
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
            <Play handleClick={() => setPlaying(true)} />
          )}
        </div>
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  )
}
