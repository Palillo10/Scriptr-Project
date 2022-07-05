// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (<>
      <ProfileButton user={sessionUser} />
    </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink style={{ position: "absolute", right: "1vh" }} to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navbar">
      <NavLink style={{ marginLeft: "15vw" }} exact to="/">Home</NavLink>
      <NavLink exact style={{ marginLeft: "30vw" }} to='/explore'>Explore</NavLink>
      {isLoaded && sessionLinks}

    </div>
  );
}

export default Navigation;
