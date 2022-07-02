import { useSelector } from "react-redux"
import { NavLink, Route } from "react-router-dom";
import CreateAlbumForm from '../ProfileModals/CreateAlbumForm'

const Albums = ({ user }) => {

  const albums = useSelector(state => state.albums)

  let stateKey = `BELONGS-TO-${user.username}`
  let userAlbums = albums[stateKey]

  if (userAlbums) userAlbums = Object.values(userAlbums)


  return (<div>
    <CreateAlbumForm user={user} />
    {userAlbums && userAlbums.map(album => {
      return (
        <div key={`${album.id}`}>
          <h2>
            {album.name}
          </h2>
          <NavLink to={`/people/${user.username}/albums/${album.id}`}>
            <img src={`${album.coverImage}`} />
          </NavLink>
        </div>
      )
    })}
  </div>)
}

export default Albums
