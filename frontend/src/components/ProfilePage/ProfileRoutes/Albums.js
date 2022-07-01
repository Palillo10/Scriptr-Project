import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAlbums } from "../../../store/albums";

const Albums = ({ user }) => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums)
  let stateKey = `BELONGS-TO-${user.username}`
  const userAlbums = albums[stateKey]
  console.log(userAlbums)
  useEffect(() => {
    dispatch(getAlbums())
  }, [dispatch])
  return (<div>
    {/* {albums && albums.map(album => {
      return (
        <div>ehllo</div>
      )
    })} */}
  </div>)
}

export default Albums
