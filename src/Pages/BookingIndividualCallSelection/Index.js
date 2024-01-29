import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AllTeacherList from "./AllTeacherList";
import ChooseFlexibleTime from "./ChooseFlexibleTime";

export default function BookingIndividualCallSelection() {
  const [showAllTeacher,setShowAllTeacher]=useState(false)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="container-fluid " style={{padding: 0}}>
        {/* <div className="p-3"> */}
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="instructor-top-box">
                      <div className="instructor-main-box">
                        <h4>Book Individual Live Coaching Call</h4>
                        <div className="cancel-btn-box" >
                          <Link to={"/live_coaching_call"} className="btn cancel-btn">
                            Cancel
                          </Link>
                        </div>
                        <div className="instructor-tap-box" >
                          <Link to={'select_teacher'}>
                          <div className="tap-click-box" >
                            <h6 >Choose Teacher First</h6>
                            <p>
                              This approach is for choosing your preferred
                              teacher first, then timetable.
                            </p>
                          </div>
                          </Link>
                          <Link to={"choose_flexible_time"}>
                          <div className="tap-click-box"
                          >
                            <h6>Choose Flexible Time</h6>
                            <p >
                              This approach is for choosing your preferred
                              teacher first, then timetable.
                            </p>
                          </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Outlet/>
                
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}
    