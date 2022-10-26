// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ExplorePage from "./components/ExplorePage";
import ProfilePage from "./components/ProfilePage";
import PhotoPage from "./components/PhotoPage";


import * as sessionActions from "./store/session";
import { getAllUsers } from "./store/users";
import { explorePictures } from "./store/pictures";
import SplashPage from "./components/SplashPage/splashPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(getAllUsers())
    dispatch(explorePictures())
  }, [dispatch]);

  // {isLoaded && !user && <Redirect to="/" />}
  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/explore">
            <ExplorePage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/people/:username" >
            <ProfilePage />
          </Route>
          <Route path="/photos/:pictureId" >
            <PhotoPage />
          </Route>
        </Switch>
      )}
      <div className="Footer">Hello</div>
    </>
  );
}

export default App;
