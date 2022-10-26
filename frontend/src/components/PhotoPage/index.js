import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Route, NavLink, Redirect } from "react-router-dom";


import './photopage.css'


const PhotoPage = () => {
  const dispatch = useDispatch()
  const { pictureId } = useParams()

  const picture = useSelector(state => state.pictures[pictureId])

  if (!picture) return "loading"
  return (<div className="PhotoPageBackground">
    <div >
      <img src={`${picture.imageUrl}`} className="MainPhoto" alt="photo" />

    </div>
    <div>
      <NavLink to={`/people/${picture.User.username}`} style={{ color: "aliceblue" }}>
        <div className="PhotoPageUserInfo">
          <img src={picture.User.profilePic} className="SinglePhotoProfilePic" alt="profile" />
          <h1>{picture.User.username}</h1>
        </div>
      </NavLink>
      <h2 style={{ color: "aliceblue" }}> {picture.description} </h2>
    </div>
  </div>

  )

}


export default PhotoPage
