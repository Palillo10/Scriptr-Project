import { useSelector } from "react-redux"
import { useState } from "react"
import "./AddToAlbumForm.css"


const AddToAlbum = ({ user }) => {

  const pictures = useSelector(state => state.pictures.allPictures)


  let userPictures
  if (user) {
    userPictures = pictures.filter(picture => picture.userId === user.id)
  }
  const [examplePic, setExamplePic] = useState("https://cdnblog.picsart.com/2021/12/mid-post-3.jpg")

  return (<div className="AddToAlbumBackground">
    <div className="AddToAlbumModal">
      <div className="Top">
        <button className="cancelButton" onClick={() => console.log("hello")}>X</button>
        <div className="exampleImageContainer">
          <img className="exampleImage" src={`${examplePic}`} />
        </div>
        <div className="TopBackground" style={{ backgroundImage: `url(${examplePic})` }}></div>
      </div>
      <div className="choosePicture">
        {userPictures.map(picture => {
          return (<img onClick={() => setExamplePic(picture.imageUrl)} key={picture.id} className="pictureChoice" src={`${picture.imageUrl}`} />)
        })}
      </div>
    </div>
  </div>)
}


export default AddToAlbum
