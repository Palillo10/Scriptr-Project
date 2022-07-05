import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import "./SingleAlbum.css"
import { updateAlbum } from "../../../store/albums"
import AddToAlbum from "./AddToAlbum"

const SingleAlbum = ({ user }) => {
  const dispatch = useDispatch()
  const { albumId } = useParams()

  const album = useSelector(state => {
    let stateKey = `BELONGS-TO-${user.username}`
    if (state.albums[stateKey] && user) return state.albums[stateKey][albumId]
  })
  const [imageInput, setImageInput] = useState(false)
  const [albumName, setAlbumName] = useState('')
  // const [albumImageUrl, setAlbumImageUrl] = useState('')



  if (!album) return "loading"
  // setAlbumImageUrl(album.coverImage)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!albumName.length) {
      setImageInput(!imageInput)
      return
    }
    const updatedAlbum = {
      albumId: album.id,
      albumName
    }
    dispatch(updateAlbum(updatedAlbum))
    setImageInput(!imageInput)
  }

  const onClick = () => {
    setImageInput(true)
    setAlbumName(album.name)
  }

  return (<div>
    <div >
      <div className="CoverImageContainer">
        <h1 onClick={onClick}>{album.name}</h1>
        {/* <h1>{album.coverImage}</h1> */}
        <div className="coverImageBackground"
          style={{
            backgroundImage: `url(${album.coverImage})`,
            backgroundSize: `cover`,
            backgroundRepeat: "no-repeat",
            filter: "blur(8px)",
            zIndex: `-10`,

          }}
        ></div>
        <AddToAlbum album={album} user={user} />
        {imageInput && <form
          style={{
            border: "black 1px solid",
            position: 'absolute',
            zIndex: "10"
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
          {/* <div>
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

          </div> */}
          <button style={{
            opacity: .01, position: "fixed", zIndex: "-100",
            height: "1000vh", width: "1000vw",
            top: 0, left: 0, backgroundColor: "white"
          }}></button>
        </form>}



      </div>
    </div>
    <div className="albumPicturesContainer">
      <h1>Album Pictures</h1>
      <div className="albumPictures">

        {album.Pictures.map(picture => {
          return (
            <img className="pictureImage" key={picture.id} src={`${picture.imageUrl}`} alt="user posts" />)
        })}
      </div>
    </div>
  </div >)

}


export default SingleAlbum
