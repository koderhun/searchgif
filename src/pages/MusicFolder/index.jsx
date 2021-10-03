import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UtilsPage } from "../../components/UtilsPage"
import { ListFolder } from "../../components/ListFolder"
import { fetchMusicFolders } from "../../redux/api/rtk/music"
import styles from "./styles.module.scss"

export const MusicFolder = () => {
  const dispatch = useDispatch()
  const { musicsFolder } = useSelector((state) => state.musics)
  const { list, status, error } = musicsFolder

  useEffect(() => {
    dispatch(fetchMusicFolders())
  }, [dispatch])

  return (
    <div className={styles.music}>
      <UtilsPage {...{ status, error }} />
      <ListFolder {...{ folders: list }} />
    </div>
  )
}
