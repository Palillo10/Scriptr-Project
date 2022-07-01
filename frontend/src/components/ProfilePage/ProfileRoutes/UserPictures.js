import DeleteWarning from "../ProfileModals/DeleteWarningModal";
import { useSelector } from "react-redux";

const UserPictures = ({ currUser, user }) => {
  const pictures = useSelector(state => state.pictures.allPictures)


  let userPictures
  if (user) {
    userPictures = pictures.filter(picture => picture.userId === user.id)
  }

  return (<div>
    {userPictures?.map(picture => {
      return (<div className="imageBoxes" key={picture.id}>
        <h1>{picture.name}</h1>
        <img className="profileImages" src={picture.imageUrl} alt="avatar" />
        <div>
          <DeleteWarning user={user} currUser={currUser} picture={picture} />
        </div>
      </div>)
    })}
  </div >)
}



export default UserPictures
