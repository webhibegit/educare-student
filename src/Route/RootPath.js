import React from "react";
import {Route,Navigate,Outlet} from "react-router-dom"
import { reactLocalStorage } from 'reactjs-localstorage'
import { useSelector } from 'react-redux'


const RootPath=()=>{
    const {login_status} = useSelector((state)=>state.User)
    if(login_status){
     return  <Navigate to="/dashboard" />
      
    }
    return <Navigate to="/sign_up"/>
    
}

export default RootPath