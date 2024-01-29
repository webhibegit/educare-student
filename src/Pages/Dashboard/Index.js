import React, { useEffect } from "react";
import CalenderEvent from "./CalenderEvent";
import LastUploadedClasses from "./LastUploadedClasses";
import Notifications from "./Notifications";
import OnGoingCourses from "./OnGoingCourses";
import UpcomingEvents from "./UpcomingEvents";
import studentuser from "../../assets/images/icon/studentuser.png";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import { setuser } from "../../Redux/reducer/User";
import HttpClient from "../../utils/HttpClient";
import DashboardCard from "./DashboardCard";

export default function Dashboard() {
  const dispatch=useDispatch()
  const userData = reactLocalStorage.getObject("userData");
  const login_status = reactLocalStorage.get("login_status");
  useEffect(()=>{
    setUserData()
    // window.scroll(0,0)
    window.scrollTo(0, 0)

  },[])

  const setUserData = async () => {
    if (userData.regStatus && login_status) {
        const result= await HttpClient.requestData("get-profile","GET")
        console.log(result);
        if(result && result.status){
          dispatch(setuser(result.data))
        }
    }
  };

  return (
    <>
      <div className="container-fluid px-0">
        <div className="p-3 p-md-0">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-9 col-12 py-4 px-4 mt-2">
                <DashboardCard/>
                {/* <div className="_masterclass_main_box">
                  <div className="_masterclass_box_wrapper">
                    <p>Total Completed Course</p>
                    <h2 className=" d-flex justify-content-between text-dark font-weight-bold">
                      06
                      <img src={studentuser} />
                    </h2>
                  </div>
                  <div className="_masterclass_box_wrapper">
                    <p>Total Quizes Completed</p>
                    <h2 className=" d-flex justify-content-between text-dark font-weight-bold">
                      08
                      <img src={studentuser} />
                    </h2>
                  </div>
                  <div className="_masterclass_box_wrapper">
                    <p>Total Loyalty points</p>
                    <h2 className=" d-flex justify-content-between text-dark font-weight-bold">
                      160
                      <img src={studentuser} />
                    </h2>
                  </div>
                </div> */}
                <div className="course-notifications">
                  <OnGoingCourses />
                  <Notifications />
                </div>
                <div className="course-notifications" style={{justifyContent:"flex-start"}}>
                  <LastUploadedClasses />
          
                  {/* <UpcomingEvents /> */}
                </div>
              </div>
              <CalenderEvent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
