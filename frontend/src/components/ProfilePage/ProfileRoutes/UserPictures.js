import DeleteWarning from "../ProfileModals/DeleteWarningModal";
import { useSelector } from "react-redux";
import UploadForm from "../ProfileModals/UploadForm";

const UserPictures = ({ currUser, user }) => {
  const pictures = useSelector(state => state.pictures.allPictures)


  let userPictures
  if (user) {
    userPictures = pictures.filter(picture => picture.userId === user.id)
  }

  return (<div>
    <UploadForm user={user} currUser={currUser} />
    <div style={{ position: "relative" }}>
      {userPictures?.map(picture => {
        return (<div className="imageBoxes" key={picture.id}>
          <h1 className="PictureName">{picture.name}</h1>
          <img className="profileImages" src={picture.imageUrl} alt="avatar" />
          <div className="pictureInfo">
            Description:
            <div style={{ width: "90%", height: "50%", position: "relative", left: '3%' }}>
              {picture.description}
            </div>
            Album:
            <div style={{ width: "90%", height: "30%", position: "relative", left: '3%' }}>
              {picture.Album && picture.Album.name || "'No Album'"}
            </div>
          </div>
          <div>
            <DeleteWarning user={user} currUser={currUser} picture={picture} />
          </div>
        </div>
        )
      })}
    </div>
  </div >)
}



export default UserPictures
