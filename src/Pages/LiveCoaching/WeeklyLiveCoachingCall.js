import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import downarrow from "../../assets/images/icon/downarrow.png";
import uim_calender from "../../assets/images/icon/uim_calender.png";
import mdi_clock from "../../assets/images/icon/mdi_clock.png";
import mommy from "../../assets/images/mommy.png";
import HttpClient from "../../utils/HttpClient";
import WeeklyLiveCoachingCard from "./WeeklyLiveCoachingCard";

export default function WeeklyLiveCoachingCall() {
  const [weeklyCall, setWeeklyCall] = useState([]);

  useEffect(() => {
    fetchWeeklyCoaching();
  }, []);

  const fetchWeeklyCoaching = async () => {
    const result = await HttpClient.requestData("weeklyLiveCoacingCall", "GET");
    // console.log(result);
    if (result && result.status) {
      let activeWeekly = result.data.filter((data) => {
        return data.weklymeetingsData.isExpired === "No";
      });
      setWeeklyCall(activeWeekly);
      // console.log(activeWeekly);
    }
  };

  // console.log(weeklyCall);
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="live-top-box">
        <div className="live-top-left-box">
          <h4>Weekly Live Coaching Call</h4>
          <p>
            Join live call to have an interactive session with instructor and guests
            <br /> directly and enrich your knowledge.
          </p>
        </div>
        <div className="live-top-right-box mb-4">
          <a href="#" className="btn sort-btn">
            Sort By:
          </a>
          <select className="option-live ml-auto">
            <option>Date</option>
            <option>Month</option>
            <option>Year</option>
          </select>
          <div className="img_arrow">
            <img src={downarrow} className="img-fluid" />
          </div>
        </div>
        <div className="sliderarroW position-relative">
          <Slider {...settings}>
            {weeklyCall.map((item, index) => {
              return (
                <WeeklyLiveCoachingCard key={index} meetingData={item.weklymeetingsData} courseData={item.courses} />
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
