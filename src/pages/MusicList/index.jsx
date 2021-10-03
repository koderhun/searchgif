import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMusicLists } from "../../redux/api/rtk/music"
import { UtilsPage } from "../../components/UtilsPage"
import { ListTrack } from "../../components/ListTrack"
import styles from "./styles.module.scss"

export const MusicList = ({ match }) => {
  const idFolder = match.params.id
  const dispatch = useDispatch()
  const { musicsList } = useSelector((state) => state.musics)
  const { list, status, error } = musicsList

  useEffect(() => {
    dispatch(fetchMusicLists(idFolder))
  }, [dispatch, idFolder])

  return (
    <div className={styles.music}>
      <UtilsPage {...{ status, error }} />
      <ListTrack {...{ tracks: list }} />
    </div>
  )
}
