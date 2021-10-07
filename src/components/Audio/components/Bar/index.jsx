import React from "react"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format" // нужен для работы moment
import styles from "./styles.module.scss"

const ProgressColor = "#1890ff"
const KnobColor = "#ff4d4f"

export const Bar = (props) => {
  const { duration, curTime, onTimeUpdate } = props

  const curPercentage = (curTime / duration) * 100

  function formatDuration(duration) {
    return moment.duration(duration, "seconds").format("mm:ss", { trim: false })
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX
    const bar = document.querySelector("#progress")
    const barStart = bar.getBoundingClientRect().left + window.scrollX
    const barWidth = bar.offsetWidth
    const clickPositionInBar = clickPositionInPage - barStart
    const timePerPixel = duration / barWidth
    return timePerPixel * clickPositionInBar
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e))

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove))
    }

    document.addEventListener("mousemove", updateTimeOnMove)

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove)
    })
  }

  return (
    <div className={styles.bar}>
      <span className={styles.time1}>{formatDuration(curTime)}</span>

      <div
        className={styles.progress}
        id="progress"
        style={{
          background: `linear-gradient(to right, ${ProgressColor} ${curPercentage}%, white 0)`
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <span
          className={styles.knob}
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>

      <span className={styles.time2}>{formatDuration(duration)}</span>
    </div>
  )
}
