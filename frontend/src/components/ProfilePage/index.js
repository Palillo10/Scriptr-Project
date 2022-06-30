import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getAllUsers } from "../../store/users";
import { createPicture, explorePictures } from "../../store/pictures";

import UserSongs from "./UserSongs";

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



  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [modalBackground, setModalBackground] = useState(null);
  // const [doneLoading, setDoneLoading] = useState(false)




  const pictureSubmit = (e) => {
    e.preventDefault()
    const newPictureInfo = {
      name,
      imageUrl,
      userId: user.id
    }
    dispatch(createPicture(newPictureInfo))

    setName('')
    setImageUrl('')
    modalBackground.style.display = "none"
  }

  const handleClick = () => {
    modalBackground.style.display = "flex"
    // modalBackground.addEventListener("click", () => {
    //   console.log("hello")
    //   modalBackground.style.display = "none"
    // })
  }



  React.useEffect(() => {
    const ele = document.getElementsByClassName('modalBackground')[0]
    setModalBackground(ele)
  }, [user])

  React.useEffect(() => {
    dispatch(getAllUsers())
    dispatch(explorePictures())
  }, [dispatch])



  // React.useEffect(() => {
  //   let func = async () => {
  //     console.log('func')
  //     return await setDoneLoading(true)
  //   }
  //   func()
  // }, [])
  // if (!doneLoading) return ("Loading")
  // if (doneLoading && !user) return ("Not Found")



  if (user) return (<div className="profilePageContainer">
    <div className="modalBackground">
      <div className="modal">
        <button onClick={() => modalBackground.style.display = "none"}>X</button>
        <fieldset>
          <form onSubmit={pictureSubmit}>
            <div>
              <label htmlFor="name">Name </label>
              <input type="text" id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Picture URL </label>
              <input type="text" id="imageUrl"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
              />
            </div>
            <button>Upload</button>
          </form>
        </fieldset>
      </div>
    </div>
    <div className="profileHeader">
      <img id="avatar" src={user.profilePic} alt="avatar" />
      <h1>{user.username}</h1>
    </div>
    <div>
      {currUser && currUser.username === user.username && <button onClick={() => handleClick()}>Upload Picture</button>}
    </div>
    <UserSongs userPictures={userPictures} user={user} currUser={currUser} />
  </div>)

  return ("loading")

}


export default ProfilePage
