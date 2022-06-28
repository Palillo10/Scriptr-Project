import React, { useEffect } from 'react';
import { explorePictures } from '../../store/pictures';
import { useDispatch, useSelector } from 'react-redux'

const ExplorePage = () => {
  const dispatch = useDispatch()
  const pictures = useSelector(state => state.pictures)
  // const picture = pictures[0]
  // console.log(pictures)
  useEffect(() => {
    dispatch(explorePictures())
  }, [dispatch])
  if (!pictures.length) return <div>hello</div>
  // return (
  //   // <ul>
  //   //   {pictures.map(picture => (<li key={picture.id}>
  //   //     {/* <img src={`${picture.imageUrl}`} /> */}
  //   //     {picture.name}
  //   //   </li>
  //   //   ))}
  //   </ul >)
}

export default ExplorePage
