import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getAllUsers } from "../../store/users";
import { createPicture, explorePictures } from "../../store/pictures";

import UserSongs from "./UserSongs";
import PictureModal from "./PictureModal";


import './ProfilePage.css'



const ProfilePage = () => {
  const dispatch = useDispatch()
  const { username } = useParams();


  const user = useSelector(state => state.users[username])
  const currUser = useSelector(state => state.session.user)
  const pictures = useSelector(state => state.pictures.allPictures)


  let userPictures
  if (user) {
    userPictures = pictures.filter(picture => picture.userId === user.id)
  }


  React.useEffect(() => {
    dispatch(getAllUsers())
    dispatch(explorePictures())
  }, [dispatch])




  if (user) return (<div className="profilePageContainer">
    <div className="profileHeader">
      <img id="avatar" src={user.profilePic} alt="avatar" />
      <h1>{user.username}</h1>
    </div>
    <PictureModal user={user} currUser={currUser} />
    <UserSongs userPictures={userPictures} user={user} currUser={currUser} />
  </div>)

  return ("loading")

}


export default ProfilePage
