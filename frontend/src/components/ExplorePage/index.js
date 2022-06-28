import React, { useEffect } from 'react';
import { explorePictures } from '../../store/pictures';
import { useDispatch, useSelector } from 'react-redux';
import './ExplorePage.css'

const ExplorePage = () => {
  const dispatch = useDispatch()
  const pictures = useSelector(state => state.pictures.allPictures)


  const handleClick = () => {
    //create song
  }

  useEffect(() => {
    dispatch(explorePictures())
  }, [dispatch])


  return <div>
    <button onClick={handleClick}>Upload Picture</button>
    {pictures.map((picture) => <div key={picture.id}>
      <div>By: {picture.User.username}~~~~~~{picture.name}</div>
      <img className="images" src={`${picture.imageUrl}`} alt="hello" />
    </div>
    )}
  </div>
}

export default ExplorePage
