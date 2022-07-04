import { useSelector } from "react-redux"
import "./AddToAlbumForm.css"


const AddToAlbum = ({ user }) => {

  const pictures = useSelector(state => state.pictures.allPictures)


  let userPictures
  if (user) {
    userPictures = pictures.filter(picture => picture.userId === user.id)
  }


  return (<div className="AddToAlbumBackground">
    <div className="AddToAlbumModal">
      <div className="Top"></div>
      <div className="choosePicture">
        {userPictures.map(picture => {
          return (<img key={picture.id} className="pictureChoice" src={`${picture.imageUrl}`} />)
        })}
      </div>
    </div>
  </div>)
}


export default AddToAlbum
