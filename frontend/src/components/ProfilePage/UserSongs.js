

import DeleteWarning from "./ProfileModals/DeleteWarningModal";

const UserSongs = ({ userPictures, currUser, user }) => {


  return (<div>
    {userPictures?.map(picture => {
      return (<div className="imageBoxes" key={picture.id}>
        <h1>{picture.name}</h1>
        <img className="profileImages" src={picture.imageUrl} alt="avatar" />
        <DeleteWarning user={user} currUser={currUser} picture={picture} />
      </div>)
    })}
  </div >)
}



export default UserSongs
