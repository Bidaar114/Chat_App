import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { createContext, useState , useEffect, useContext} from 'react'
import { onAuthStateChanged, } from "firebase/auth";
import { auth } from './firebase'
import { AuthContext } from "./context/AuthContext";

function App() {
 const {currentUser} = useContext(AuthContext)
 const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return <Navigate to='/login'/>
  }
  return children
 }

  return (
    <div>
   
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element=
            {<ProtectedRoute>
              <Home />
              </ProtectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
