import React, { useEffect } from 'react';
import { explorePictures } from '../../store/pictures';
import { useDispatch, useSelector } from 'react-redux';
import './ExplorePage.css'

const ExplorePage = () => {
  const dispatch = useDispatch()
  const pictures = useSelector(state => state.pictures)
  // const picture = pictures[0]
  console.log(pictures)
  useEffect(() => {
    dispatch(explorePictures())
  }, [dispatch])
  if (!pictures.length) return null
  return pictures.map((picture) => <div>
    <div>By: {picture.User.username}~~~~~~{picture.name}</div>
    <img className="images" key={picture.id} src={`${picture.imageUrl}`} />
  </div>
  )
}

export default ExplorePage
