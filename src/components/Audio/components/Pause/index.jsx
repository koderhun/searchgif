import React from "react"
import { PauseCircleFilled } from "@ant-design/icons"

export const Pause = ({ handleClick }) => {
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PauseCircleFilled />
    </button>
  )
}
