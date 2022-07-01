import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Route, NavLink, Redirect } from "react-router-dom";

import { getAllUsers } from "../../store/users";
import { explorePictures } from "../../store/pictures";

import UserPictures from "./ProfileRoutes/UserPictures";
import UploadForm from "./ProfileModals/UploadForm";
import Albums from "./ProfileRoutes/Albums"
import ProfileAbout from "./ProfileRoutes/About";
import { getAlbums } from "../../store/albums";


import './ProfilePage.css'
import SingleAlbum from "./ProfileRoutes/SingleAlbum";




const ProfilePage = () => {
  const dispatch = useDispatch()
  const { username } = useParams();


  const user = useSelector(state => state.users[username])
  const currUser = useSelector(state => state.session.user)


  React.useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAlbums())
  }, [dispatch])




  if (user) return (<div className="profilePageContainer">
    <div className="profileHeader">
      <img id="avatar" src={user.profilePic} alt="avatar" />
      <h1>{user.username}</h1>
    </div>
    <div className="profileNavbar">
      <div>
        <NavLink to={`/people/${user.username}/about`}>About</NavLink>
      </div>
      <div>
        <NavLink to={`/people/${user.username}/photostream`}>Photostream</NavLink>
      </div>
      <div>
        <NavLink to={`/people/${user.username}/albums`}>Albums</NavLink>
      </div>

    </div>
    <Route exact path="/people/:username" >
      <Redirect to={`/people/${user.username}/about`} />
    </Route>
    <Route exact path="/people/:username/about">
      <ProfileAbout />
    </Route>
    <Route exact path="/people/:username/photostream">
      <UserPictures user={user} currUser={currUser} />
      <UploadForm user={user} currUser={currUser} />
    </Route>
    <Route exact path="/people/:username/albums">
      <Albums user={user} />
    </Route>
    <Route exact path="/people/:username/albums/:albumId">
      <SingleAlbum user={user} />
    </Route>
  </div>)

  return ("loading")

}


export default ProfilePage
