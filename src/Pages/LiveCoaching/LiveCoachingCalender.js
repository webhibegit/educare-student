import React, { useEffect, useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import HttpClient from "../../utils/HttpClient";

export default function LiveChoaingCalender() {
  const [value, onChange] = useState(new Date());
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchSlots(value);
  }, []);

  const fetchSlots = async (value) => {
    let data = {
      date: formatDate(value),
    };
    console.log(data);
    const result = await HttpClient.requestData(
      "featuredMentors",
      "POST",
      data
    );
    console.log(result);
    if (result && result.status) {
      setSlots(result.data);
    }
  };

  const showSideBar = () => {
    if (
      document.querySelector("#live_coaching_sidebar").style.display !== "block"
    ) {
      document.querySelector("#live_coaching_sidebar").style.display = "block";
      document.querySelector("#live_coaching_sidebar").style.top = "0px";
    } else {
      document.querySelector("#live_coaching_sidebar").style.display = "none";
    }
  };
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  return (
    <>
      <div className="callender-wrap d-lg-block d-xl-flex">
        <div className="callender-box">
          <div className="callender_box_inner">
            <div>
              <h3>Your Calls On</h3>
            </div>
          </div>
          <br />
          <Calendar
            onClickDay={(value, event) => {
              //   fetchBookingSlot(value);
            }}
            tileDisabled={tileDisabled}
            onChange={(e) => {
              onChange(e);
              fetchSlots(e);
            }}
            value={value}
          />
        </div>
        <div className="callender-full-details-wrap">
          <div className="callender-details-wrap">
            {slots.map((item, index) => {
              return (
                <div
                  className="callender-details-box "
                  style={{ position: "relative" }}
                >
                  <span
                    className="small-bar"
                    style={{
                      position: "absolute",
                      width: "5px",
                      height: "21px",
                      background: "#BF13FB",
                      zIndex: 999,
                      left: 0,
                      top: 16,
                    }}
                  />
                  <p className="details-main">8th junuary, 22:00</p>
                  <a
                    onClick={() => showSideBar()}
                    className=" btn callender-details-btn"
                  >
                    4 more classes
                  </a>
                  <div className="details-text-1">
                    <p>Duration</p>
                    <p>Instructor</p>
                  </div>
                  <div className="details-text-2">
                    <p>120 mins</p>
                    <p>Mike Anderson</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
