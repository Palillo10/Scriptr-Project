

import DeleteWarning from "./ProfileModals/DeleteWarningModal";



import EditForm from "./EditForm.js";

const UserSongs = ({ userPictures, currUser, user }) => {


  return (<div>
    {userPictures?.map(picture => {
      return (<div className="imageBoxes" key={picture.id}>
        <h1>{picture.name}</h1>
        <img className="profileImages" src={picture.imageUrl} alt="avatar" />
        <DeleteWarning user={user} currUser={currUser} picture={picture} />
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
