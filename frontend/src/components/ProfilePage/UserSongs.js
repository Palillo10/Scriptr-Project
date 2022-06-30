import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { deletePicture } from "../../store/pictures";



import EditForm from "./EditForm.js";

const UserSongs = ({ userPictures, currUser, user }) => {
  const dispatch = useDispatch();
  const [deletePictureWarning, setDeletePictureWarning] = useState(false)

  return (<div>
    {userPictures?.map(picture => {
      return (<div className="imageBoxes" key={picture.id}>
        <h1>{picture.name}</h1>
        <img className="profileImages" src={picture.imageUrl} />
        <div>{picture.description}
          {currUser && currUser.username === user.username && <button className="deleteButtons" onClick={() => dispatch(deletePicture(picture.id))}>Delete Picture</button>}
          {currUser && currUser.username === user.username && <EditForm picture={picture} />}
          {/* <button>Edit Picture</button> */}
        </div>
      </div>)
    })}
  </div >)
}



export default UserSongs
