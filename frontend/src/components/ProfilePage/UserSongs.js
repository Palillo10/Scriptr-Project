const UserSongs = ({ userPictures }) => {
  // {console.log(userPictures)}
  return (<div>
    {userPictures?.map(picture => {
      return (<div key={picture.id}>
        <img className="profileImages" src={picture.imageUrl} />
      </div>)
    })}
  </div>)
}



export default UserSongs
