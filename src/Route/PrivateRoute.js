import React from 'react'
import {Route,Navigate,Outlet} from "react-router-dom"
import { reactLocalStorage } from 'reactjs-localstorage'
import { useSelector } from 'react-redux'

function PrivateRoute() {
  const login_status=reactLocalStorage.get("login_status")
  // console.log("login_status",login_status);
    
  return (
    login_status?<Outlet/>:<Navigate to="/" />
  )
}

export default PrivateRoute