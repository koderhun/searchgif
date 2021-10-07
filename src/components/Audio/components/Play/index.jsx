import React from "react"
import { PlayCircleFilled } from "@ant-design/icons"

export const Play = ({ handleClick }) => {
  return (
    <button onClick={() => handleClick()}>
      <PlayCircleFilled style={{ color: "#1890ff", fontSize: "60px" }} />
    </button>
  )
}
