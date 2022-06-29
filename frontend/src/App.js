// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ExplorePage from "./components/ExplorePage";
import ProfilePage from "./components/ProfilePage";


import * as sessionActions from "./store/session";
import { getAllUsers } from "./store/users";
import { explorePictures } from "./store/pictures";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(getAllUsers())
    // dispatch(explorePictures())
  }, [dispatch]);


  // if (!user) return <Redirect to="/" />
  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            Splash Page
          </Route>
          <Route exact path="/explore">
            <ExplorePage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/people/:username" >
            <ProfilePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
