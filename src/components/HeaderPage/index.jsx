import React from "react"
import { Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import { HeartTwoTone } from "@ant-design/icons"
import styles from "./styles.module.scss"

const { Header } = Layout

export const HeaderPage = () => {
  return (
    <Header className={styles.header}>
      <HeartTwoTone
        className={styles.logo}
        twoToneColor="#eb2f96"
        style={{ fontSize: "20px" }}
      />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
