import DeleteWarning from "../ProfileModals/DeleteWarningModal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { explorePictures } from "../../../store/pictures";

const UserPictures = ({ currUser, user }) => {
  const dispatch = useDispatch()
  const pictures = useSelector(state => state.pictures.allPictures)


  let userPictures
  if (user) {
    userPictures = pictures.filter(picture => picture.userId === user.id)
  }

  useEffect(() => {
    dispatch(explorePictures())
  }, [dispatch])

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
