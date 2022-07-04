import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import "./SingleAlbum.css"
import { updateAlbum } from "../../../store/albums"
import AddToAlbum from "./AddToAlbum"

const SingleAlbum = ({ user }) => {
  const dispatch = useDispatch()
  const { albumId } = useParams()
  const [imageInput, setImageInput] = useState(false)
  const [albumName, setAlbumName] = useState('')
  const [albumImageUrl, setAlbumImageUrl] = useState('')

  const album = useSelector(state => {
    let stateKey = `BELONGS-TO-${user.username}`
    if (state.albums[stateKey] && user) return state.albums[stateKey][albumId]
  })

  if (!album) return "loading"


  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedAlbum = {
      albumId: album.id,
      albumName,
      albumImageUrl
    }
    dispatch(updateAlbum(updatedAlbum))
    setImageInput(!imageInput)
  }



  return (<div>
    <div >
      <div className="CoverImageContainer">
        {/* <button onClick={add}>Add To Album</button> */}
        <AddToAlbum album={album} user={user} />

        < img onClick={() => {
          setAlbumImageUrl(album.coverImage)
          setAlbumName(album.name)
          setImageInput(!imageInput)
        }}
          className="CoverImage Clickable"
          style={{ border: "black solid 1px" }}
          src={`${album.coverImage}`}
          alt="album cover"
        />
        {imageInput && <form
          style={{
            border: "black 1px solid",
            position: 'relative',
            // top: "300px"
          }}
          id="updateAlbum" onSubmit={handleSubmit}
        >

          <div>
            <input
              type="text"
              // form="updateAlbum"
              style={{
                // position: 'absolute',
                backgroundColor: "rgb(0,0,0, .8)",
                color: "white",
                height: "50px",
                fontSize: "24px"
              }}
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              // form="updateAlbum"
              style={{
                // position: 'absolute',
                backgroundColor: "rgb(0,0,0, .8)",
                top: "52px",
                color: "white",
                height: "50px",
                fontSize: "24px"
              }}
              value={albumImageUrl}
              onChange={(e) => setAlbumImageUrl(e.target.value)}
            />

          </div>
          <button style={{ opacity: 0 }}></button>
        </form>}



      </div>
    </div>
    <div className="albumPictures">
      <h2>Album Pictures</h2>
      {album.Pictures.map(picture => {
        return (
          <img className="pictureImage" key={picture.id} src={`${picture.imageUrl}`} alt="user posts" />)
      })}
    </div>
  </div >)

}


export default SingleAlbum
