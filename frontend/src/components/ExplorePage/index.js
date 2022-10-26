import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './ExplorePage.css'

const ExplorePage = () => {
  const pictures = useSelector(state => state.pictures.allPictures)

  return <div className="exploreBody">
    <div className='exploreMainContainer'>
      <div>
        <h2 style={{ borderBottom: "1px solid black" }}>Explore</h2>
      </div>
      <div className='ExploreImagesContainer'>
        {pictures.map((picture) => <div key={picture.id}>
          <NavLink to={`/photos/${picture.id}`}>

            {/* <div className='imagesContainer' style={{ fontSize: "28px" }}>
            {picture.name}~
            <NavLink style={{ fontSize: "28px", color: "rgb(1, 182, 182)" }} to={`/people/${picture.User.username}`}>By: {picture.User.username}</NavLink>
          </div> */}

            <img className="images" src={`${picture.imageUrl}`} alt="hello" />
          </NavLink>
        </div>
        )}
      </div>
    </div>
  </div>
}

export default ExplorePage
