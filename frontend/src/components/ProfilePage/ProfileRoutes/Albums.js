import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Route } from "react-router-dom";
import CreateAlbumForm from '../ProfileModals/CreateAlbumForm'
import { getAlbums } from "../../../store/albums";
import { deleteAlbum } from "../../../store/albums";
import './Albums.css'

const Albums = ({ user, currUser }) => {

  const dispatch = useDispatch()
  const albums = useSelector(state => state.albums)
  const [render, setRender] = useState(false)

  let stateKey = `BELONGS-TO-${user.username}`
  let userAlbums = albums[stateKey]

  if (userAlbums) userAlbums = Object.values(userAlbums)

  useEffect(() => {
    dispatch(getAlbums())
  }, [dispatch])

  return (<div className="albumsPageContainer">
    {currUser && currUser.username === user.username && <CreateAlbumForm user={user} />}
    <div className="allAlbumsContainer">
      {userAlbums && userAlbums.map(album => {
        return (
          <div className="albumContainer" key={`${album.id}`}>
            <h2 className="albumName">
              {album.name}
            </h2>
            {currUser && currUser.username === user.username && <button className="deleteAlbumButton"
              onClick={async () => {
                await dispatch(deleteAlbum(album))
                setRender(!render)
              }}
            >Delete Album</button>}
            <NavLink to={`/people/${user.username}/albums/${album.id}`}>
              <img className="albumImage" src={`${album.coverImage}`} />
            </NavLink>
          </div>
        )
      })}
    </div>
  </div>)
}

export default Albums
