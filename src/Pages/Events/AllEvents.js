import React from "react";
import love from '../../assets/images/icon/love.png'
import events1 from '../../assets/images/events1.png'
import events2 from '../../assets/images/events2.png'
import event3 from '../../assets/images/events3.png'
import event4 from '../../assets/images/events4.png'
import events5 from '../../assets/images/events5.png'
import events6 from '../../assets/images/events6.png'
import events7 from '../../assets/images/events7.png'
import events8 from '../../assets/images/events8.png'
import events9 from '../../assets/images/events9.png'

import uim_calender from '../../assets/images/icon/uim_calender.png'
import profiledetails from '../../assets/images/icon/profile-details.png'
import { Link } from "react-router-dom";



export default function AllEvents() {
  return (
    <>
      <div className="container-fluid">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="tabmenusection m-0">
                  <div className="all_course2">
                    <h2>All Events</h2>
                    <div className="form-group has-search">
                      <span className="fa fa-search form-control-feedback" />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search more events"
                      />
                    </div>
                  </div>
                  <div className="sortBySection">
                    <span>Sory By: </span>
                    <select>
                      <option value="monthly">Recent</option>
                      <option value="monthly">7 Days Ago</option>
                      <option value="monthly">30 Months Ago</option>
                    </select>
                  </div>
                </div>
                <div className="uploaded_courses_wrapper">
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                      <div className="section-details pos-prpr2">
                        <span className="span-tag">Get 50 Loyalty points</span>
                        <span className="span-whish">
                          <img
                            src={love}
                            style={{ margin: "10px auto" }}
                          />
                        </span>
                      </div>
                      <img
                        src={events1}
                        alt=""
                        className="img-mob"
                      />
                      <h3 className="design-title">
                        Product Design in Blender : 3D modeling, rendering and
                        sculpting
                      </h3>
                      <div className="timing-details">
                        <div className="caleder calenderBg">
                          <img src={uim_calender} />
                        </div>
                        <div className="calender">
                          <p className="calender-date">October 14</p>
                          <p className="calender-time">8:00 - 10:00 pm</p>
                        </div>
                      </div>
                      <span className="border-line" />
                      <div className="section-details">
                        <p>
                          <img src={profiledetails} />
                          Hanna Septimus
                        </p>
                        <p
                          style={{
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "24px",
                            color: "#171725",
                          }}
                        >
                          $45
                        </p>
                      </div>
                  </Link>
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                      <span className="span-tag">Get 50 Loyalty points</span>
                      <span className="span-whish">
                        <img
                          src={love}
                          style={{ margin: "10px auto" }}
                        />
                      </span>
                    </div>
                    <img
                      src={events2}
                      alt=""
                      className="img-mob"
                    />
                    <h3 className="design-title">
                      Product Design in Blender : 3D modeling, rendering and
                      sculpting
                    </h3>
                    <div className="timing-details">
                      <div className="caleder calenderBg">
                        <img src={uim_calender} />
                      </div>
                      <div className="calender">
                        <p className="calender-date">October 14</p>
                        <p className="calender-time">8:00 - 10:00 pm</p>
                      </div>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                      <p>
                        <img src={profiledetails} />
                        Hanna Septimus
                      </p>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#171725",
                        }}
                      >
                        $45
                      </p>
                    </div>
                  </Link>
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                      <span className="span-tag">Get 50 Loyalty points</span>
                      <span className="span-whish">
                        <img
                          src={love}
                          style={{ margin: "10px auto" }}
                        />
                      </span>
                    </div>
                    <img
                      src={event3}
                      alt=""
                      className="img-mob"
                    />
                    <h3 className="design-title">
                      Product Design in Blender : 3D modeling, rendering and
                      sculpting
                    </h3>
                    <div className="timing-details">
                      <div className="caleder calenderBg">
                        <img src={uim_calender} />
                      </div>
                      <div className="calender">
                        <p className="calender-date">October 14</p>
                        <p className="calender-time">8:00 - 10:00 pm</p>
                      </div>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                      <p>
                        <img src={profiledetails} />
                        Hanna Septimus
                      </p>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#171725",
                        }}
                      >
                        $45
                      </p>
                    </div>
                  </Link>
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                      <span className="span-tag">Get 50 Loyalty points</span>
                      <span className="span-whish">
                        <img
                          src={love}
                          style={{ margin: "10px auto" }}
                        />
                      </span>
                    </div>
                    <img
                      src={event4}
                      alt=""
                      className="img-mob"
                    />
                    <h3 className="design-title">
                      Product Design in Blender : 3D modeling, rendering and
                      sculpting
                    </h3>
                    <div className="timing-details">
                      <div className="caleder calenderBg">
                        <img src={uim_calender} />
                      </div>
                      <div className="calender">
                        <p className="calender-date">October 14</p>
                        <p className="calender-time">8:00 - 10:00 pm</p>
                      </div>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                      <p>
                        <img src={profiledetails} />
                        Hanna Septimus
                      </p>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#171725",
                        }}
                      >
                        $45
                      </p>
                    </div>
                  </Link>
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                      <span className="span-tag">Get 50 Loyalty points</span>
                      <span className="span-whish">
                        <img
                          src={love}
                          style={{ margin: "10px auto" }}
                        />
                      </span>
                    </div>
                    <img
                      src={events5}
                      alt=""
                      className="img-mob"
                    />
                    <h3 className="design-title">
                      Product Design in Blender : 3D modeling, rendering and
                      sculpting
                    </h3>
                    <div className="timing-details">
                      <div className="caleder calenderBg">
                        <img src={uim_calender} />
                      </div>
                      <div className="calender">
                        <p className="calender-date">October 14</p>
                        <p className="calender-time">8:00 - 10:00 pm</p>
                      </div>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                      <p>
                        <img src={profiledetails} />
                        Hanna Septimus
                      </p>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#171725",
                        }}
                      >
                        $45
                      </p>
                    </div>
                  </Link>
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                      <span className="span-tag">Get 50 Loyalty points</span>
                      <span className="span-whish">
                        <img
                          src={love}
                          style={{ margin: "10px auto" }}
                        />
                      </span>
                    </div>
                    <img
                      src={events6}
                      alt=""
                      className="img-mob"
                    />
                    <h3 className="design-title">
                      Product Design in Blender : 3D modeling, rendering and
                      sculpting
                    </h3>
                    <div className="timing-details">
                      <div className="caleder calenderBg">
                        <img src={uim_calender} />
                      </div>
                      <div className="calender">
                        <p className="calender-date">October 14</p>
                        <p className="calender-time">8:00 - 10:00 pm</p>
                      </div>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                      <p>
                        <img src={profiledetails} />
                        Hanna Septimus
                      </p>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#171725",
                        }}
                      >
                        $45
                      </p>
                    </div>
                  </Link>
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                      <span className="span-tag">Get 50 Loyalty points</span>
                      <span className="span-whish">
                        <img
                          src={love}
                          style={{ margin: "10px auto" }}
                        />
                      </span>
                    </div>
                    <img
                      src={events7}
                      alt=""
                      className="img-mob"
                    />
                    <h3 className="design-title">
                      Product Design in Blender : 3D modeling, rendering and
                      sculpting
                    </h3>
                    <div className="timing-details">
                      <div className="caleder calenderBg">
                        <img src={uim_calender} />
                      </div>
                      <div className="calender">
                        <p className="calender-date">October 14</p>
                        <p className="calender-time">8:00 - 10:00 pm</p>
                      </div>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                      <p>
                        <img src={profiledetails} />
                        Hanna Septimus
                      </p>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#171725",
                        }}
                      >
                        $45
                      </p>
                    </div>
                  </Link>
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                      <span className="span-tag">Get 50 Loyalty points</span>
                      <span className="span-whish">
                        <img
                          src={love}
                          style={{ margin: "10px auto" }}
                        />
                      </span>
                    </div>
                    <img
                      src={events8}
                      alt=""
                      className="img-mob"
                    />
                    <h3 className="design-title">
                      Product Design in Blender : 3D modeling, rendering and
                      sculpting
                    </h3>
                    <div className="timing-details">
                      <div className="caleder calenderBg">
                        <img src={uim_calender} />
                      </div>
                      <div className="calender">
                        <p className="calender-date">October 14</p>
                        <p className="calender-time">8:00 - 10:00 pm</p>
                      </div>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                      <p>
                        <img src={profiledetails} />
                        Hanna Septimus
                      </p>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#171725",
                        }}
                      >
                        $45
                      </p>
                    </div>
                  </Link>
                  <Link to={"/events-details"} className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                      <span className="span-tag">Get 50 Loyalty points</span>
                      <span className="span-whish">
                        <img
                          src={love}
                          style={{ margin: "10px auto" }}
                        />
                      </span>
                    </div>
                    <img
                      src={events9}
                      alt=""
                      className="img-mob"
                    />
                    <h3 className="design-title">
                      Product Design in Blender : 3D modeling, rendering and
                      sculpting
                    </h3>
                    <div className="timing-details">
                      <div className="caleder calenderBg">
                        <img src={uim_calender} />
                      </div>
                      <div className="calender">
                        <p className="calender-date">October 14</p>
                        <p className="calender-time">8:00 - 10:00 pm</p>
                      </div>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                      <p>
                        <img src={profiledetails} />
                        Hanna Septimus
                      </p>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#171725",
                        }}
                      >
                        $45
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
