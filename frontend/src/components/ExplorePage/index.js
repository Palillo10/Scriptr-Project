import React, { useEffect } from 'react';
import { explorePictures } from '../../store/pictures';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './ExplorePage.css'

const ExplorePage = () => {
  const dispatch = useDispatch()
  const pictures = useSelector(state => state.pictures.allPictures)

  useEffect(() => {
    dispatch(explorePictures())
  }, [dispatch])


  return <div>
    {pictures.map((picture) => <div key={picture.id}>
      <div>
        <NavLink to={`/people/${picture.User.id}${picture.User.username}`}>By: {picture.User.username}</NavLink>~~~~~~{picture.name}</div>
      <img className="images" src={`${picture.imageUrl}`} alt="hello" />
    </div>
    )}
  </div>
}

export default ExplorePage
