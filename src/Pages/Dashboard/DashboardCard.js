import React, { useEffect, useState } from "react";
import studentuser from "../../assets/images/icon/studentuser.png";
import Vector from "../../assets/images/note_Dashboard.png"
import Vector1 from "../../assets/images/tropy.png"
import Vector2 from "../../assets/images/total_gainPoint.png"
import HttpClient from "../../utils/HttpClient";




export default function DashboardCard(){
 const [cardData,setCardData]=useState()

 useEffect(()=>{
    fetchcardData()
 },[])

 const fetchcardData=async()=>{
    let result= await HttpClient.requestData(`dashboard/dashboardCard`,"GET")
    if(result && result.status){
        setCardData(result.data[0])
    }
 }
        // console.log(cardData);

    return (
      <div className="_masterclass_main_box">
        <div className="_masterclass_box_wrapper" style={{ borderRadius: '18.8019px' }}>
          <p className="title_Dashboard">Total Courses Completed</p>
          <h2 className=" d-flex justify-content-between align-items-center text-dark font-weight-bold">
            {cardData?.totalCompletedCourses ?? '00'}
            <img src={Vector} />
          </h2>
        </div>
        <div className="_masterclass_box_wrapper" style={{ borderRadius: '18.8019px' }}>
          <p className="title_Dashboard">Total Quizzes Completed</p>
          <h2 className=" d-flex justify-content-between align-items-center text-dark font-weight-bold">
            {cardData?.totalQuizCompleted ?? '00'}
            <img src={Vector1} />
          </h2>
        </div>
        <div className="_masterclass_box_wrapper" style={{ borderRadius: '18.8019px' }}>
          <p className="title_Dashboard">Total Loyalty points</p>
          <h2 className=" d-flex justify-content-between align-items-center text-dark font-weight-bold">
            {cardData?.totalLoyaltyPoints ?? '00'}
            <img src={Vector2} />
          </h2>
        </div>
      </div>
    );
}