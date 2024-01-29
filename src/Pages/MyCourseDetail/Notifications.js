import React, { useEffect, useState } from "react";
import noti from "../../assets/images/noti.png";
import lcc from "../../assets/images/lcc.png";
import oe from "../../assets/images/oe.png";
import ghr from "../../assets/images/ghr.png";
import pch from "../../assets/images/pch.png";
import HttpClient from "../../utils/HttpClient";
import moment from "moment";
import { useParams } from "react-router-dom";

export default function Notifications() {
  const [allNotification, setAllNotification] = useState([]);
  // const [toDayNotification, setToDayNotification] = useState([]);
  // const [yesterdayNotifation, setYesterdayNotifation] = useState([]);
  // const [twoDaysAgoNotifaction, setTwoDaysAgoNotifaction] = useState([]);
  const { course_name, id } = useParams();

  useEffect(() => {
    fetchNotification();
  }, []);
  const fetchNotification = async () => {
    let result = await HttpClient.requestData(
      `particularCourseNotification/${id}`,
      "GET"
    );
    // console.log(result);
    if (result && result.status) {
      setAllNotification(result.data);
    }
  };
  // const fetchNotification = async () => {
  //   let result = await HttpClient.requestData("fetchNotification", "GET");
  //   // console.log(result);
  //   if (result && result.status) {
  //     setAllNotification(result.data);
  //     // console.log("gdczsgdasd   ",moment(`${result.data[0].createdOn}`).startOf('hour').fromNow());
  //     let todayNoti = result.data.filter(
  //       (data) =>
  //         moment().format("L") === moment(`${data.createdOn}`).format("L")
  //     );
  //     // console.log(todayNoti);
  //     var yesterday = new Date(Date.now() - 864e5);
  //     var towDayAgo = new Date(Date.now() - 864e5*2);
  //     let oneDayAgoNoti = result.data.filter(
  //       (data) =>
  //         moment(`${yesterday}`).format("L") ===
  //         moment(`${data.createdOn}`).format("L")
  //     );
  //     let twoDayAgoNoti = result.data.filter(
  //       (data) =>
  //         moment(`${towDayAgo}`).format("L") ===
  //         moment(`${data.createdOn}`).format("L")
  //     );
  //     // console.log(oneDayAgoNoti);
  //     if (oneDayAgoNoti.length >= 1) {
  //       setToDayNotification(oneDayAgoNoti);
  //     }else{
  //       setToDayNotification(null)
  //     }
  //     if (todayNoti.length >= 1) {
  //       setYesterdayNotifation(todayNoti);
  //     }else{setYesterdayNotifation(null)}
  //     if (twoDayAgoNoti.length >= 1) {
  //       setTwoDaysAgoNotifaction(twoDayAgoNoti);
  //     }else{setTwoDaysAgoNotifaction(null)}
  //   }
  // };

  //  console.log(toDayNotification);
  //  console.log(yesterdayNotifation);
  //  console.log(twoDaysAgoNotifaction);

  return (
    <>
      <div className="noti-title-wrapper">
        <h3 className="noti-title">Notifications ({allNotification.length})</h3>
        <p className="mark-read-text">Mark all as read</p>
      </div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        {allNotification.map((item, index) => {
          return (
            <div className="_notifications_box_course" key={index}>
              <div className="media">
                <img className="mr-30" src={item.icon} alt="image" style={{}} />
                <div className="media-body">
                  <div className="notification-box-wrapper1">
                    <h6
                      className="mt-0 text-dark font-weight-bold"
                      style={{ fontSize: "18px" }}
                    >
                      {item.title}
                    </h6>
                    <span className="circle" />
                    <p
                      className=""
                      style={{
                        color: "#92929D",
                        fontSize: "14px line-height:19px",
                      }}
                    >
                      {moment(`${item.createdOn}`).startOf('minute').fromNow()}
                    </p>
                  </div>
                  <h6
                    className=""
                    style={{
                      fontSize: "15px",
                      color: "#44444F",
                      fontWeight: 500,
                      lineHeight: "23px",
                    }}
                  >
                    {item.desc}
                  </h6>
                </div>
              </div>
              <div className="border-btm mt-5 mb-5" />
            </div>
          );
        })}
        {/* <div className=" mb-5 border-wrapper">
          <span />
          <button>Today</button>
        </div>
        <div className="_notifications_box_course">
          <div className="media">
            <img className="mr-30" src={noti} alt="image" style={{}} />
            <div className="media-body">
              <div className="notification-box-wrapper1">
                <h6
                  className="mt-0 text-dark font-weight-bold"
                  style={{ fontSize: "18px" }}
                >
                  Python Course
                </h6>
                <span className="circle" />
                <p
                  className=""
                  style={{
                    color: "#92929D",
                    fontSize: "14px line-height:19px",
                  }}
                >
                  11 months ago
                </p>
              </div>
              <h6
                className=""
                style={{
                  fontSize: "15px",
                  color: "#44444F",
                  fontWeight: 500,
                  lineHeight: "23px",
                }}
              >
                Akash, I ave explained it in next lectures. you can watch linked
                list creation videos. in this lecture just focus on Display. if
                you continue lectures in same order it will be better.
              </h6>
            </div>
          </div>
          <div className="border-btm mt-5 mb-5" />
        </div>
        <div className="mt-5 mb-5 border-wrapper">
          <span />
          <button>Yesterday</button>
        </div>
        <div className="_notifications_box_course">
          <div className="media">
            <img className="mr-30" src={oe} alt="image" style={{}} />
            <div className="media-body">
              <div className="notification-box-wrapper1">
                <h6
                  className="mt-0 text-dark font-weight-bold"
                  style={{ fontSize: "18px" }}
                >
                  Online Event
                </h6>
                <span className="circle" />
                <p
                  className=""
                  style={{
                    color: "#92929D",
                    fontSize: "14px line-height:19px",
                  }}
                >
                  11 months ago
                </p>
              </div>
              <h6
                className=""
                style={{
                  fontSize: "15px",
                  color: "#44444F",
                  fontWeight: 500,
                  lineHeight: "23px",
                }}
              >
                Akash, I ave explained it in next lectures. you can watch linked
                list creation videos. in this lecture just focus on Display. if
                you continue lectures in same order it will be better.
              </h6>
            </div>
          </div>
          <div className="border-btm mt-5 mb-5" />
          <div className="media">
            <img className="mr-30" src={ghr} alt="image" style={{}} />
            <div className="media-body">
              <div className="notification-box-wrapper1">
                <h6
                  className="mt-0 text-dark font-weight-bold"
                  style={{ fontSize: "18px" }}
                >
                  Guy Hawkins replied to your comment
                </h6>
                <span className="circle" />
                <p
                  className=""
                  style={{
                    color: "#92929D",
                    fontSize: "14px line-height:19px",
                  }}
                >
                  11 months ago
                </p>
              </div>
              <h6
                className=""
                style={{
                  fontSize: "15px",
                  color: "#44444F",
                  fontWeight: 500,
                  lineHeight: "23px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis penatibus viverra eget ornare sit. Tincidunt sem
                felis, orci, nec. Tincidunt sed faucibus fusce tincidunt.
                Feugiat mattis eget massa purus. Aliquam volutpat elit potenti
                donec odio tincidunt sed. Ac consectetur pulvinar posuere
                rhoncus purus et. Purus pellentesque.
              </h6>
            </div>
          </div>
          <div className="border-btm mt-5 mb-5" />
          <div className="media">
            <img className="mr-30" src={pch} alt="image" style={{}} />
            <div className="media-body">
              <div className="notification-box-wrapper1">
                <h6
                  className="mt-0 text-dark font-weight-bold"
                  style={{ fontSize: 18 }}
                >
                  Python course have a new quiz for you
                </h6>
                <span className="circle" />
                <p
                  className=""
                  style={{
                    color: "#92929D",
                    fontSize: "14px line-height:19px",
                  }}
                >
                  11 months ago
                </p>
              </div>
              <h6
                className=""
                style={{
                  fontSize: "15px",
                  color: "#44444F",
                  fontWeight: 500,
                  lineHeight: "23px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis penatibus viverra eget ornare sit. Tincidunt sem
                felis, orci, nec. Tincidunt sed faucibus fusce tincidunt.
                Feugiat mattis eget massa purus. Aliquam volutpat elit potenti
                donec odio tincidunt sed. Ac consectetur pulvinar posuere
                rhoncus purus et. Purus pellentesque.
              </h6>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5 border-wrapper">
          <span />
          <button>2 days ago</button>
        </div>
        <div className="_notifications_box_course">
          <div className="media">
            <img className="mr-30" src={noti} alt="image" style={{}} />
            <div className="media-body">
              <div className="notification-box-wrapper1">
                <h6
                  className="mt-0 text-dark font-weight-bold"
                  style={{ fontSize: 18 }}
                >
                  New Course AI Course Just launched
                </h6>
                <span className="circle" />
                <p
                  className=""
                  style={{
                    color: "#92929D",
                    fontSize: "14px line-height:19px",
                  }}
                >
                  11 months ago
                </p>
              </div>
              <h6
                className=""
                style={{
                  fontSize: "15px",
                  color: "#44444F",
                  fontWeight: 500,
                  lineHeight: "23px",
                }}
              >
                Akash, I ave explained it in next lectures. you can watch linked
                list creation videos. in this lecture just focus on Display. if
                you continue lectures in same order it will be better.
              </h6>
            </div>
          </div>
          <div className="border-btm mt-5 mb-5" />
          <div className="media">
            <img className="mr-30" src={lcc} alt="image" style={{}} />
            <div className="media-body">
              <div className="notification-box-wrapper1">
                <h6
                  className="mt-0 text-dark font-weight-bold"
                  style={{ fontSize: "18px" }}
                >
                  Live Coaching Call
                </h6>
                <span className="circle" />
                <p
                  className=""
                  style={{
                    color: "#92929D",
                    fontSize: "14px line-height:19px",
                  }}
                >
                  11 months ago
                </p>
              </div>
              <h6
                className=""
                style={{
                  fontSize: "15px",
                  color: "#44444F",
                  fontWeight: 500,
                  lineHeight: "23px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis penatibus viverra eget ornare sit. Tincidunt sem
                felis, orci, nec. Tincidunt sed faucibus fusce tincidunt.
                Feugiat mattis eget massa purus. Aliquam volutpat elit potenti
                donec odio tincidunt sed. Ac consectetur pulvinar posuere
                rhoncus purus et. Purus pellentesque .
              </h6>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
