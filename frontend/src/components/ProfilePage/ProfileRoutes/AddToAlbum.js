import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import "./AddToAlbumForm.css"
import { add } from "../../../store/albums"


const AddToAlbum = ({ user, album }) => {
  const dispatch = useDispatch()
  const pictures = useSelector(state => state.pictures.allPictures)
  const [examplePic, setExamplePic] = useState({ imageUrl: "https://cdnblog.picsart.com/2021/12/mid-post-3.jpg" })
  const [addToAlbumForm, setAddToAlbumForm] = useState(false)
  let userPictures
  if (user) {
    userPictures = pictures.filter(picture => picture.userId === user.id)
  }

  const addPicture = () => {
    dispatch(add(album, examplePic))
  }

  return (<> <button onClick={() => setAddToAlbumForm(true)}>Add To Album</button>
    {addToAlbumForm && <div className="AddToAlbumBackground">
      <div className="AddToAlbumModal">
        <div className="Top">
          <button className="cancelButton" onClick={() => setAddToAlbumForm(false)}>X</button>
          <button className="addButton" onClick={addPicture}>Add To  "{album.name}"</button>
          <div className="exampleImageContainer">
            <img className="exampleImage" src={`${examplePic.imageUrl}`} alt="Example" />
          </div>
          <div className="TopBackground" style={{ backgroundImage: `url(${examplePic.imageUrl})` }}></div>
        </div>
        <div className="choosePicture">
          {(userPictures.length && userPictures.map(picture => {
            return (<img onClick={() => setExamplePic(picture)} key={picture.id} className="pictureChoice" src={`${picture.imageUrl}`} alt="User Option" />)
          })) || "Hello"}
        </div>
      </div>
    </div>}
  </>)
}


export default AddToAlbum
