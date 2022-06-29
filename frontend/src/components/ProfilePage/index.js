import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllUsers } from "../../store/users";
import './ProfilePage.css'
const ProfilePage = () => {
  const dispatch = useDispatch()
  const { userUrl } = useParams();
  const user = useSelector(state => state.users[userUrl[0]])

  const handleClick = () => {
    //create song
  }

  React.useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  if (user) return (<>
    <div className="profileHeader">
      <img src={user.profilePic} alt="avatar" />
      <h1>{user.username}</h1>
    </div>
    <div>
      <button onClick={handleClick}>Upload Picture</button>
    </div>
  </>)
  return ('loading')
}


export default ProfilePage
