import React from "react"
import { Link } from "react-router-dom"
import { List } from "antd"

export const ListFolder = ({ folders }) => {
  console.log("folders", folders)
  return (
    <List
      header={<div>Music folders</div>}
      bordered
      dataSource={folders}
      renderItem={(item) => (
        <List.Item>
          <Link to={"/music/" + item}>{item}</Link>
        </List.Item>
      )}
    />
  )
}
