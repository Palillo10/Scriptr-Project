import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { explorePictures } from "../../store/pictures";
const ProfilePage = () => {
  const dispatch = useDispatch()
  const { userId } = useParams();
  const pictures = useSelector(state => state.pictures)
  let users = pictures.map(picture => picture.User.username.toLowerCase())

  React.useEffect(() => {
    dispatch(explorePictures())
  }, [dispatch])

  if (users.includes(userId)) return ("hello")
  else return ("Not found")
}


export default ProfilePage
