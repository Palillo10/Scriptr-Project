import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import "./AddToAlbumForm.css"
import { add, addPictureToAlbum } from "../../../store/albums"
import { explorePictures } from "../../../store/pictures"


const AddToAlbum = ({ user, album }) => {
  const dispatch = useDispatch()
  const pictures = useSelector(state => state.pictures.allPictures)
  const [examplePic, setExamplePic] = useState({ imageUrl: "https://cdnblog.picsart.com/2021/12/mid-post-3.jpg" })
  const [addToAlbumForm, setAddToAlbumForm] = useState(false)
  let userPictures
  if (user) {
    userPictures = pictures.filter(picture => picture.userId === user.id)
  }

  const addPicture = async () => {
    await dispatch(addPictureToAlbum(album, examplePic))
    setExamplePic({ imageUrl: "https://cdnblog.picsart.com/2021/12/mid-post-3.jpg" })
    setAddToAlbumForm(false)
  }


  return (<> <button className="openFormButton" onClick={() => setAddToAlbumForm(true)}>
    <i className="fas thin fa-plus" />
    {/* <i className="fas fa-user-circle" /> */}
    Add To Album</button>
    {addToAlbumForm && <div className="AddToAlbumBackground">
      <div className="AddToAlbumModal">
        <div className="Top">
          <button className="cancelButton" onClick={() => {
            setAddToAlbumForm(false)
            setExamplePic({ imageUrl: "https://cdnblog.picsart.com/2021/12/mid-post-3.jpg" })
          }
          }>X</button>
          <button className="addButton" onClick={addPicture}>Add To  "{album.name}"</button>
          <div className="exampleImageContainer">
            <img className="exampleImage" src={`${examplePic.imageUrl}`} alt="Example" />
          </div>
          <div className="TopBackground" style={{ backgroundImage: `url(${examplePic.imageUrl})` }}></div>
        </div>
        <div className="choosePicture">
          {(userPictures.length && userPictures.map(picture => {
            if (picture.albumId !== album.id) return (<img
              onClick={() => setExamplePic(picture)} key={picture.id}
              className="pictureChoice" src={`${picture.imageUrl}`} alt="User Option" />)
            else return null
          })) || <h1 style={{ alignSelf: "center", justifySelf: "center", marginLeft: "150px" }}>You currently have no pictures</h1>}
        </div>
      </div>
    </div>}
  </>)
}


export default AddToAlbum
