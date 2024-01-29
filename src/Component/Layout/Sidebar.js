import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Union from "../../assets/images/icon/Union.svg";
import courses from "../../assets/images/icon/courses.svg";
import mycourses from "../../assets/images/icon/mycourses.svg";
import events from "../../assets/images/icon/events.svg";
import livecoaching from "../../assets/images/icon/live-coaching.svg";
import community from "../../assets/images/icon/community.svg";
import calender from "../../assets/images/icon/calender.svg";
import setting from "../../assets/images/icon/setting.svg";
import { Link } from "react-router-dom";
import { logDOM } from "@testing-library/react";

export default function Sidebar() {
  const [currenPage, setCurrentPage] = useState("")
  useEffect(() => {
    window.$(".nav-link").click(function () {
      window.$('.nav-link.active').removeClass('active');
      window.$(this).addClass("active");
    });

    // console.log(window.location.href)
    setCurrentPage(window.location.href)
  }, [])
  const mobileNav = () => {
    let display = document.querySelector("#mobile_sideBar").style.display;
    // console.log(display)
    document.getElementById("mobile_sideBar").style.display =
      display == "block" ? "none" : "block";
  };
  return (
    <>
      <ul
        className="navbar-nav bg-white sidebar sidebar-dark accordion mobile_sideBar"
        id="mobile_sideBar"
      >
        <div className="">
          <button
            type="button"
            className="sidebar-brand-icon bg-transparent border-0"
            id="sidebar_close"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
          <Link to={"/dashboard"} className="sidebar-brand ml-xl-n5" href="#">
            <div className="sidebar-brand-text text-center mx-3 text-dark">
              <img src={logo} />
            </div>
          </Link>
        </div>
        <li className="nav-item mt-3 ">
          <Link
            to={"/dashboard"}
            aria-current="page"
            className={currenPage.includes("dashboard") ? "nav-link active" : "nav-link"}
          >
            <span>
              <img src={Union} style={{ marginRight: "15px" }} />
              Dashboard
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/all_courses"} className={currenPage.includes("all_courses") ? "nav-link active" : "nav-link"} >
            <span>
              <img
                src={courses}
                style={{ marginRight: "15px" }}
              />
              Courses
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/my_courses"} className={currenPage.includes("my_courses") ? "nav-link active" : "nav-link"} >
            <span>
              <img
                src={mycourses}
                style={{ marginRight: "15px" }}
              />
              My Courses
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/events"} className={currenPage.includes("events") ? "nav-link active" : "nav-link"} >
            <span>
              <img src={events} style={{ marginRight: "15px" }} />
              Events
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/live_coaching_call"} className={currenPage.includes("live_coaching_call") ? "nav-link active" : "nav-link"} >
            <span>
              <img
                src={livecoaching}
                style={{ marginRight: "15px" }}
              />
              Live Coaching
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/community"} className={currenPage.includes("community") ? "nav-link active" : "nav-link"} >
            <span>
              <img
                src={community}
                style={{ marginRight: "15px" }}
              />
              Community
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/calender"} className={currenPage.includes("calender") ? "nav-link active" : "nav-link"}>
            <span>
              <img
                src={calender}
                style={{ marginRight: "15px" }}
              />
              Calendar
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/my_profile"} className={currenPage.includes("my_profile") ? "nav-link active" : "nav-link"} >
            <span>
              <img
                src={setting}
                style={{ marginRight: '15px' }}
              />
              Settings
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
}
