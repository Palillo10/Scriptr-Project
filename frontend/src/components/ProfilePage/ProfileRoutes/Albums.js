import { useSelector } from "react-redux"
import { NavLink, Route } from "react-router-dom";
;

const Albums = ({ user }) => {

  const albums = useSelector(state => state.albums)

  let stateKey = `BELONGS-TO-${user.username}`
  let userAlbums = albums[stateKey]

  if (userAlbums) userAlbums = Object.values(userAlbums)


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
