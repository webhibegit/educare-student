import moment from "moment";
import React, { useEffect, useState } from "react";
import Background from "../../assets/images/teacher-profile-bg.png";
import PersonBack from "../../assets/images/teacher.png";
import HttpClient from "../../utils/HttpClient";

export default function FlexibleTimeTeacherList({name,image,review,onClick}) {

  return (
    <>
          <div className="last-content-box mb-4" >
            <div
              className="last-top-section"
              style={{
                backgroundImage: `url("${Background}")`,
              }}
            ></div>
            <div className="last-bootom-section">
              <a  className="last-img">
                <img src={image}
                style={{cursor:"pointer"}}
                onClick={()=>{
                    onClick()
                }}
                 />
              </a>
              <h5>{name}</h5>
              <h6 className="rate">
                <a href="#">
                  <i
                    className="fa fa-star"
                    aria-hidden="true"
                    style={{ color: "#FFC700" }}
                  ></i>
                </a>
                {review}/5
              </h6>
              {/* <h6 className="rate">
                <a href="#">
                  <i className="fa fa-usd" aria-hidden="true"></i>
                </a>
                4.6/5
            </h6> */}
              <div className="ins-view-btn-box">
                <a href="#" className="btn ins-view-btn">
                  View Profile
                </a>
              </div>
            </div>
          </div>
    </>
  );
}
