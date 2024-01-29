import React, { useEffect, useState } from "react";
import Background from "../../assets/images/teacher-profile-bg.png";
import PersonBack from "../../assets/images/teacher.png";
import Person from "../../assets/images/dp8.png";
import HttpClient from "../../utils/HttpClient";

export default function FlexibleTimeSingleteacher({showFunc,teacherId,setteacherIdFunc}) {
    const[teacherData,setTeacherData]=useState()
    
    useEffect(()=>{
        fetchTeacher()
    },[])

    const fetchTeacher=async()=>{
        const result= await HttpClient.requestData(`particularTeacherProfile/${teacherId}`)
        if(result && result.status){
            setTeacherData(result.data[0])
        }

    }
    // console.log(teacherData);
  return (
    <>
      <div className="col-md-12 col-lg-12 col-xl-4 col-12">
        <div className="media media-container">
          <button className="btn back_btn_media" onClick={()=>{
            setteacherIdFunc("")
            showFunc(false)
            }}>
            <span>back</span>
          </button>
          <img
            src={Background}
            className=""
            style={{ width: "100%", height: 150 }}
          />
          <img src={teacherData?.image} className="teacher-profile" />
          <div className="media-body">
            <h4 className="media-title">{teacherData?.name}</h4>
            <div className="section-details justify-content-center">
              <p>
                <i
                  class="fa fa-star"
                  aria-hidden="true"
                  style={{ color: "rgb(255, 199, 0)" }}
                ></i>
                <span>{teacherData?.avgRating}</span>
              </p>
              <span className="border_line" />
              <p>
                <i
                  class="fa fa-usd"
                  aria-hidden="true"
                  style={{ color: "#138BFB" }}
                ></i>
                48 /hr
              </p>
            </div>
            <p className="media-para">
             {teacherData?.about}
            </p>
            {/* <button
              type="button"
              className="btn show_more"
              onclick="myFunction()"
              id="myBtn"
              style={{ color: "#C4C4CF", fontSize: "12px" }}
            >
              Show more
            </button> */}
            <div className="social_media_icon py-4">
              <i
                class="fa fa-facebook px-2"
                style={{ color: "#0A81ED" }}
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-twitter px-2"
                style={{ color: "#0A81ED" }}
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-instagram px-2"
                style={{ color: "#8a3ab9" }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <span className="border-line" />
          <div className="media-body">
            <h4 className="media-title">Students Reviews</h4>
            <div
              className="review-description"
              style={{ height: "100vh", overflowY: "scroll" }}
            >
              {teacherData?.review?.map((item, index) => {
                return (
                  <div className="review-description-item" key={index}>
                    <div className="review-box">
                      <div className="review-section p-0 m-0">
                        <img src={item?.student[0].image} alt="" />
                      </div>
                      <div className="review-section p-0 m-0">
                        <p className="review-name">{item?.student[0].name}</p>
                        <p className="review-start">
                          {item.rating}
                          <i
                            class="fa fa-star"
                            aria-hidden="true"
                            style={{ color: "#FFC700" }}
                          ></i>
                        </p>
                      </div>
                    </div>
                    <p className="review-details">
                     {item.review}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
