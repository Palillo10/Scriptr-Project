import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { getAlbums } from "../../../store/albums";

const Albums = ({ user }) => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums)
  let stateKey = `BELONGS-TO-${user.username}`
  let userAlbums = albums[stateKey]
  if (userAlbums) userAlbums = Object.values(userAlbums)
  useEffect(() => {
    dispatch(getAlbums())
  }, [dispatch])
  return (<div>
    {userAlbums && userAlbums.map(album => {
      return (
        <div key={`${album.id}`}>
          <NavLink to={`/people/${user.username}/albums/${album.id}`}>
            <img src={`${album.coverImage}`} />
          </NavLink>
          <div>
            {album.name}
          </div>
        </div>
      )
    })}
  </div>)
}

export default Albums
