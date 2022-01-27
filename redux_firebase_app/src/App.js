import React, { useEffect } from 'react';
import Register from "./Pages/Register";
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useDispatch } from 'react-redux';
import { userSliceActions } from './Slices/User';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appCongif from './firebase-config';


const App = () => {

  const auth = getAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(userSliceActions.setUser(user))
      } else {
        return
      }
    })
  }, [auth, dispatch]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>

      </Routes>
    </div>
  );
}

export default App;
