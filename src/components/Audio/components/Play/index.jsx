import React from "react"
import { PlayCircleFilled } from "@ant-design/icons"

export const Play = ({ handleClick }) => {
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayCircleFilled />
    </button>
  )
}
