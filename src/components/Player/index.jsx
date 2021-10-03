import React from "react"

export const Player = ({ trackUrl }) => {
  return (
    <div>
      <h1>player</h1>
      <audio id="audio">
        <source src={trackUrl} />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  )
}
