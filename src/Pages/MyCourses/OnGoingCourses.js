import React, { useEffect } from "react";
import Rectangle1755 from "../../assets/images/Rectangle 1755.png";
import image1 from "../../assets/images/image1.png";
import profiledetails from "../../assets/images/icon/profile-details.png";
import eventscalender from "../../assets/images/icon/eventscalender.png"
import Group69541 from '../../assets/images/icon/Group 69541.png'
import unsplash_QJEVpydulGs from '../../assets/images/icon/unsplash_QJEVpydulGs.png'
import unsplash_QwoNAhbmLLo from "../../assets/images/unsplash_QwoNAhbmLLo.png"
import OngoingCourseList from "./OnGoingCourseList";
import FavouriteCoursesList from "./FavouriteCoursesList";
import LastUploadClass from "./LastUploadClass";
import CalenderEvent from "../Dashboard/CalenderEvent";
import SpandHourChat from "./SpandHourChat";
// import unsplash_4BXWIQoS8Fo from '../../assets/images/icon/unsplash_4BXWIQoS8Fo.png'

export default function MyOnGoingCourses() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="container-fluid pr-md-0">
        <div className="p-3 p-md-0">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-9 col-12">
                
                <OngoingCourseList/>

                <div className="row">
                  
                  <LastUploadClass/>
                  
                  <FavouriteCoursesList/>

                  <SpandHourChat/>

                </div>
              </div>
              <CalenderEvent/>
              {/* <div className="col-xl-3 col-lg-3 col-md-12 col-12 py-3 py-lg-0">
                <div className="card" style={{ borderRadius: 0 }}>
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between calender">
                      <i className="fa fa-angle-left" aria-hidden="true" />
                      <span className="calender_month_text">October 2022</span>
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between calender py-4">
                      <div className="calender_date_div">
                        <span className="d-block py-1">T</span>
                        <span className="d-block">14</span>
                      </div>
                      <div className="calender_date_div active">
                        <span className="d-block py-1">W</span>
                        <span className="d-block">15</span>
                      </div>
                      <div className="calender_date_div">
                        <span className="d-block py-1">T</span>
                        <span className="d-block">16</span>
                      </div>
                      <div className="calender_date_div">
                        <span className="d-block py-1">F</span>
                        <span className="d-block">17</span>
                      </div>
                      <div className="calender_date_div">
                        <span className="d-block py-1">S</span>
                        <span className="d-block">18</span>
                      </div>
                      <i
                        className="fa fa-angle-right next_month"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="call_individual">
                      <p className="">Individual Live Coaching Call</p>
                      <div className="d-lg-block d-sm-flex d-md-flex align-items-center justify-content-start justify-content-md-between justify-content-sm-between">
                        {

                        }
                        <div className="d-flex align-items-center justify-content-start py-2">
                          <div className="calender_img mr-2">
                            <img
                              src={eventscalender}
                              alt="calender icons"
                              className="img-fluid"
                            />
                          </div>
                          <div className="">
                            <span className="d-block event_Date">
                              October 14
                            </span>
                            <span className="event_Time">8:00 - 10:00 pm</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start py-2">
                          <div className="calender_img mr-2">
                            <img
                              src={Group69541}
                              alt="calender icons"
                              className="img-fluid"
                            />
                          </div>
                          <div className="">
                            <span className="d-block event_Date">
                              October 14
                            </span>
                            <span className="event_Time">8:00 - 10:00 pm</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start py-2">
                          <div className="calender_img mr-2">
                            <img
                              src={unsplash_QJEVpydulGs}
                              alt="calender icons"
                              className="img-fluid person_image"
                            />
                          </div>
                          <div className="">
                            <span className="d-block event_Date">
                              Instructor
                            </span>
                            <span className="event_Time">Mike Anderson</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <span className="border-line" />
                    <div className="online_Events">
                      <div className="online_Events_img py-2 pb-3">
                        <img
                          src={unsplash_QwoNAhbmLLo}
                          alt="Online Events place"
                          className="img-fluid w-100"
                        />
                      </div>
                      <p className="">Online Event</p>
                      <div className="d-lg-block d-sm-flex d-md-flex align-items-center justify-content-start justify-content-md-between justify-content-sm-between">
                        <div className="d-flex align-items-center justify-content-start py-2">
                          <div className="calender_img mr-2">
                            <img
                              src={eventscalender}
                              alt="calender icons"
                              className="img-fluid "
                            />
                          </div>
                          <div className="">
                            <span className="d-block event_Date">
                              October 14
                            </span>
                            <span className="event_Time">8:00 - 10:00 pm</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start py-2">
                          <div className="calender_img mr-2">
                            <img
                              src={Group69541}
                              alt="calender icons"
                              className="img-fluid"
                            />
                          </div>
                          <div className="">
                            <span className="d-block event_Date">Duration</span>
                            <span className="event_Time">2 hour</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <span className="border-line" />
                    <div className="online_Events">
                      <div className="online_Events_img py-2 pb-3">
                        <img
                          src={unsplash_QwoNAhbmLLo}
                          alt="Online Events place"
                          className="img-fluid w-100"
                        />
                      </div>
                      <p className="">Online Event</p>
                      <div className="d-lg-block d-sm-flex d-md-flex align-items-center justify-content-start justify-content-md-between justify-content-sm-between">
                        <div className="d-flex align-items-center justify-content-start py-2">
                          <div className="calender_img mr-2">
                            <img
                              src={eventscalender}
                              alt="calender icons"
                              className="img-fluid "
                            />
                          </div>
                          <div className="">
                            <span className="d-block event_Date">
                              October 14
                            </span>
                            <span className="event_Time">8:00 - 10:00 pm</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start py-2">
                          <div className="calender_img mr-2">
                            <img
                              src={Group69541}
                              alt="calender icons"
                              className="img-fluid"
                            />
                          </div>
                          <div className="">
                            <span className="d-block event_Date">Duration</span>
                            <span className="event_Time">2 hour</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
