import React, { useEffect, useState } from "react";
import Refresh from "../../assets/images/rotate.png";
import Note from "../../assets/images/note_Dashboard.png";
import prize from "../../assets/images/tropy.png";
import gainpOint from "../../assets/images/total_gainPoint.png";
import girl_Photo from "../../assets/images/Rectangle 1861.png";
import reviewProfile from "../../assets/images/commentProfile.png";
import HttpClient from "../../utils/HttpClient";
import { useParams } from "react-router-dom";


export default function CourseOverViewCard() {
    const{course_name,id}=useParams()
    const [data,setData]=useState()
    useEffect(()=>{
        fetchCourseData()
    },[])


    const fetchCourseData=async()=>{
        const result=await HttpClient.requestData(`viewCourseOverview/${id}`,"GET")
        if(result && result.status){
            setData(result.data[0])
        }
    }
    // console.log(data);

  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 mb-2">
        <div className="_masterclass_box_wrapper1" style={{height:'180px'}}>
          <p className="course_TTitle">Course Completion</p>
          <h2 className=" d-flex justify-content-between text-dark font-weight-bold align-items-center">
            {data?.CourseCompletion}%
            <img
              src={Refresh}
              className="img-fluid"
              style={{ width: "55px" }}
            />
          </h2>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12 mb-2">
        <div className="_masterclass_box_wrapper1" style={{height:'180px'}}>
          <p className="course_TTitle">Total Lectures Completed</p>
          <h2 className=" d-flex justify-content-between text-dark font-weight-bold align-items-center">
            {data?.TotalLectureCompleted}
            <img src={Note} className="img-fluid" />
          </h2>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12 mb-2">
        <div className="_masterclass_box_wrapper1" style={{height:'180px'}}>
          <p className="course_TTitle">Total Quizes Completed</p>
          <h2 className=" d-flex justify-content-between text-dark font-weight-bold align-items-center">
            {data?.TotalQuizCompleted}
            <img src={prize} className="img-fluid" />
          </h2>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12 mb-2">
        <div className="_masterclass_box_wrapper1" style={{height:'180px'}}>
          <p className="course_TTitle">Total points Gained</p>
          <h2 className=" d-flex justify-content-between text-dark font-weight-bold">
            {data?.TotalPointsGained}
            <img src={gainpOint} />
          </h2>
        </div>
      </div>
    </>
  );
}
