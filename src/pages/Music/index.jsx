import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Spin, Alert } from "antd"
import { ListFolder } from "../../components/ListFolder"
import { fetchMusics } from "../../redux/api/rtk/music"
import styles from "./styles.module.scss"

export const Music = () => {
  const dispatch = useDispatch()
  const t = useSelector((state) => state.musics)
  console.log("tttttttt", t)
  const { musics, status, error } = useSelector((state) => state.musics)

  console.log("test", musics, status, error)

  useEffect(() => {
    dispatch(fetchMusics())
  }, [dispatch])

  return (
    <div className={styles.music}>
      {status === "loading" && (
        <div className="loader">
          <Spin size="large" />
        </div>
      )}
      {error && (
        <Alert
          message="Error"
          description="Ошибка запроса."
          type="error"
          showIcon
        />
      )}
      <ListFolder {...{ folders: musics }} />
    </div>
  )
}
