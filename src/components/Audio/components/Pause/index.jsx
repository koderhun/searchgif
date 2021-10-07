import React from "react"
import { PauseCircleFilled } from "@ant-design/icons"

export const Pause = ({ handleClick }) => {
  return (
    <button onClick={() => handleClick()}>
      <PauseCircleFilled style={{ color: "#52c41a", fontSize: "60px" }} />
    </button>
  )
}
