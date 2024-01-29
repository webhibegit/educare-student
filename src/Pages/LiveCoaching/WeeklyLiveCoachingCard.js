import React from "react";
import uim_calender from "../../assets/images/icon/uim_calender.png";
import mdi_clock from "../../assets/images/icon/mdi_clock.png";
import mommy from "../../assets/images/mommy.png";
import moment from "moment";

export default function WeeklyLiveCoachingCard({meetingData,courseData}) {
  return (
    <div className="live-top-owl-box" style={{width:"100%"}}>
      <div className="time-wrap">
        <div className="time-box">
          <a href="#">
            <img src={uim_calender} />
            {moment(meetingData.date).format('Do MMMM')}
          </a>
        </div>
        <div className="time-box">
          <a href="#">
            <img src={mdi_clock} />
            {meetingData?.startTime}
            {/* 22:00 (BST) */}
          </a>
        </div>
      </div>
      <div className="owl-content">
        <h4>From Course</h4>
        <div className="owl-content-text">
          <img src={courseData.thumb_image} style={{width:"55px"}} />
          <p>
           {courseData.courseName}
          </p>
        </div>
      </div>
    </div>
  );
}
