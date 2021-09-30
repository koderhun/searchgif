import React from "react"
import { Link } from "react-router-dom"
import { Layout, Menu, Space } from "antd"
import { HeartTwoTone } from "@ant-design/icons"
import styles from "./styles.module.scss"

const { Header } = Layout

export const HeaderPage = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.left}>
        <HeartTwoTone
          className={styles.logo}
          twoToneColor="#eb2f96"
          style={{ fontSize: "20px" }}
        />

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Giphy</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className={styles.right}>
        <span className={styles.copyright}>
          Power by <a href="https://giphy.com/">Giphy</a>
        </span>
      </div>
    </Header>
  )
}
