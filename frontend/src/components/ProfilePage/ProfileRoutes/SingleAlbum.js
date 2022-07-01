import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "./SingleAlbum.css"

const SingleAlbum = ({ user }) => {
  const { albumId } = useParams()
  const album = useSelector(state => {
    let stateKey = `BELONGS-TO-${user.username}`
    if (state.albums[stateKey] && user) return state.albums[stateKey][albumId]
  })
  if (!album) return "loading"
  console.log(album.Pictures)
  return (<div>
    <div className="CoverImageContainer">
      <h2>{album.name}</h2>
      <img className="CoverImage" src={`${album.coverImage}`} alt="album cover" />
    </div>
    <div className="albumPictures">
      <h2>Album Pictures</h2>
      {album.Pictures.map(picture => {
        return (
          <img className="pictureImage" key={picture.id} src={`${picture.imageUrl}`} />)
      })}
    </div>
  </div>)

}


export default SingleAlbum
