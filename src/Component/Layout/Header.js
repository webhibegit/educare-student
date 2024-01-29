import React,{useState,useEffect,useMemo} from "react";
import Profile from "../../assets/Profile.png";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/reducer/User";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link, useNavigate,useLocation } from "react-router-dom";
import User from "../../Redux/reducer/User";
import whiteLogo from "../../assets/whiteLogo.png"
import { useParams } from "react-router-dom";


export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location=useLocation()
  // console.log(location.pathname);
  const {course_name} = useParams()

  const {userData}=useSelector(state=>state.User)
  const { CourseData } = useSelector((state) => state.SingleCourseData);
// console.log(CourseData);
  // console.log(userData);

//   useEffect(()=>{
//     window.addEventListener("scroll", handleScrool)
//     return () => {
//       window.removeEventListener("scroll", handleScrool)
//     };
//   },[])

//   const handleScrool = () => {
//     let height = window.scrollY
//     // console.log(height)
//     if (height >= 1) {
//       document.getElementById("wrapper_header").style.position = "fixed"

//     } else {
//       document.getElementById("wrapper_header").style.position = "relative"

//     }
//     // console.log("jj",window.screenTop); 
//   }

// const showSideBar=async()=>{
//   // let width = document.querySelector("#mobile_sideBar").style.width;
//   // document.getElementById("mobile_sideBar").style.width= width=="0" ?"100% !important":"0"
//   // document.getElementById("mobile_sideBar").style.width="100% !important"

//   let width = document.querySelector("#mobile_sideBar").style.width;
//   document.getElementById("mobile_sideBar").style.width= width=="0" ? "100% !important" : "0"
// }
const mobileNav = () => {
  let display = document.querySelector("#mobile_sideBar").style.display;
  // console.log(display)
  document.getElementById("mobile_sideBar").style.display =
    display == "block" ? "none" : "block";
};
  const Logout = () => {
    dispatch(logout());
    reactLocalStorage.remove("userData");
    reactLocalStorage.remove("login_status");
    reactLocalStorage.remove("redirectUrl")
    navigate("/sign_up");
  };
  const HeaderChang=useMemo(()=>{
    return checkLocation()
  },[])

function checkLocation (){
    if(location.pathname.includes("/my_course_overview")) return true
    else return false

  }
  // console.log(course_name);
  return (
    <>
      <nav 
      className=
      {HeaderChang?"navbar navbar-expand navbar-light topbar static-top  blackHeader  "
    :"navbar navbar-expand navbar-light topbar static-top bg-white  "  }
      
      id="wrapper_header" >
        <button
          id="sidebarToggleTop"
          type="button"
          className="btn btn-light d-md-none rounded-circle"
          
        >
          <i className="fa fa-bars" onClick={mobileNav}/>
        </button>
        <Link to={"/dashboard"} className="navbar-brand" href="#" style={{width: '100%',maxWidth: "120px", display: 'block'}}>
          <img src={HeaderChang?whiteLogo: logo} alt="Logo" />
        </Link>
        {
          HeaderChang?<>
          <hr style={{width: '1px',height: '28px',background: '#fff',marginLeft: '60px'}}/>
          <Link to={"/my_courses"}>
        <div className="bredcrumb_Arrow text-white">
          <i className="fa fa-chevron-left mr-4" aria-hidden="true"></i>
          <span className="">{CourseData?.courseName}</span>
        </div> </Link></>:""
        }
        
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-bell-o" />
              <h6 className="_bell_notifi">0</h6>
            </a>
          </li>
          <li
            className="nav-item dropdown no-arrow"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a className="nav-link" href="#">
              <img
                className=""
                style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                src={userData?.image}
                alt="img"
              />
              <span className="ml-2 d-none d-lg-flex  _superamn _marketing_info _marketing_title" style={{color:HeaderChang&&"#fff"}}>
                {userData?.fristName} {userData?.lastName}
                <br />
                <span className="_marketing_Adminor _marketing_info _marketing_administrator">
                  {" "}
                  {userData?.occupation}
                </span>
                <i className="ri-arrow-drop-down-line font-weight-bold _user_text" />
              </span>
            </a>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <Link to={"my_profile"} className="dropdown-item" href="#">
                <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </Link>
              <div className="dropdown-divider" />
              <a
              onClick={()=>Logout()}
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fa fa-sign-out fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
