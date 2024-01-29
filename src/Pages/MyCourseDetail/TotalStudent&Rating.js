import React, { useState,useEffect } from "react";
import HttpClient from "../../utils/HttpClient";

export default function TotalStudentAndRatind({TeacherID,CourseID}) {
    const [totalStudent,setTotalStudent]=useState()
    const[review,setReview]=useState()
    

    useEffect(() => {
      fetchTotalStudent()
      fetchTeacherRating()
    }, [])
    

  const fetchTotalStudent=async()=>{
    let result= await HttpClient.requestData(`viewtotalStudent/${CourseID}`,"GET")
    // console.log(result);
    if(result && result.status){
      setTotalStudent(result.data[0])
    }
  }
  const fetchTeacherRating=async()=>{
    let result=await HttpClient.requestData(`teacherRating/${TeacherID}/${CourseID}`)
    // console.log(result);
    if(result && result.status){
      setReview(result.data[0])
    }
  }
  return (
    <>
      <div className="col-12 total_Student mb-2">
        <div className="_masterclass_box_wrapper1">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
              <p className="m-0 my-2">Total Students</p>
              <span>{totalStudent?.TotalStudent}</span>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
              <p className="m-0 my-2">Rating</p>
              <span>{review?.Rating?.toFixed(2)}</span>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
              <p className="m-0 my-2">Reviews</p>
              <span>{review?.Review} reviews</span>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 py-2">
              <p className="m-0 my-2">Format</p>
              <span>{totalStudent?.courseType}</span>
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
              <p className="m-0 my-2">Address</p>
              {/* <span>20 Glasshouse St, London W1B 5AR, United Kingdom</span> */}
              <span> --------</span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
