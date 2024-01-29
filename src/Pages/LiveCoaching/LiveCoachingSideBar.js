import profilepopup from "../../assets/images/profilepopup.png";
import notificationpopup from "../../assets/images/icon/notification-popup.svg";
import line from "../../assets/images/icon/line.svg";
import arrowsession from "../../assets/images/icon/arrowsession.svg";
import Line100 from "../../assets/images/icon/Line100.svg";
import ep_copydocument from "../../assets/images/icon/ep_copy-document.svg";
import tickright from "../../assets/images/icon/tickright.png";
import { useEffect, useState } from "react";
import HttpClient from "../../utils/HttpClient";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function LiveCoachingSideBar({ date, teacherId, meetingId }) {
  const [sidebarData, setSidebarData] = useState();
  const Navigate = useNavigate();
  console.log("meetingId", meetingId);
  console.log(date, teacherId);
  useEffect(() => {
    fetchSidebarData();
  }, []);

  const fetchSidebarData = async () => {
    let data = {
      date: date,
      teacherId: teacherId,
    };
    console.log("log", data);
    let result = await HttpClient.requestData(
      `liveCoachingSidebar`,
      "POST",
      data
    );
    console.log("result", result);

    if (result && result.status) {
      let data = result.data[0];
      data?.timeSlotData?.forEach((element) => {
        if (element.acceptedStatus === "Accept") {
          // console.log(moment(element.bookingOn).format("MMM Do YY")==moment().format("MMM Do YY"));
          if (
            moment(element.bookingOn).format("MMM Do YY") ==
            moment().format("MMM Do YY")
          ) {
            console.log(
              parseInt(element?.startTime?.slice(0, 2)) * 60 +
                parseInt(element?.startTime?.slice(3, 5)) <=
                parseInt(moment().format("H")) * 60 +
                  parseInt(moment().format("mm")) &&
                parseInt(element?.endTime?.slice(0, 2)) * 60 +
                  parseInt(element?.endTime?.slice(3, 5)) >=
                  parseInt(moment().format("H")) * 60 +
                    parseInt(moment().format("mm"))
            );
            if (
              parseInt(element?.startTime?.slice(0, 2)) * 60 +
                parseInt(element?.startTime?.slice(3, 5)) <=
                parseInt(moment().format("H")) * 60 +
                  parseInt(moment().format("mm")) &&
              parseInt(element?.endTime?.slice(0, 2)) * 60 +
                parseInt(element?.endTime?.slice(3, 5)) >=
                parseInt(moment().format("H")) * 60 +
                  parseInt(moment().format("mm"))
            ) {
              element.IsInTime = true;
            } else {
              element.IsInTime = false;
              console.log("HH");
            }
          } else {
            element.IsInTime = false;
          }
        }
      });
      setSidebarData(data);
    }
  };
  // console.log(moment().format('mm'));
  let a = "12:30";
  console.log(parseInt(a.slice(0, 2)) * 60 + parseInt(a.slice(3, 5)));
  console.log(sidebarData);
  return (
    <>
      <div className="live-coaching-sidebar" id="live_coaching_sidebar">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "21px",
            textTransform: "uppercase",
            color: "#76808D",
            marginBottom: "2rem",
          }}
        >
          INSTRUCTOR
          <img src={line} />
        </p>
        <div className="sidebar-top">
          <p className="title-booking-name">
            <img src={sidebarData?.image} />
            {sidebarData?.name}
          </p>
          {/* <img src={notificationpopup} /> */}
        </div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "21px",
            textTransform: "uppercase",
            color: "#76808D",
            marginTop: "3rem",
            marginBottom: "2rem",
          }}
        >
          Time Slots
          <img src={line} />
        </p>
        <h1 className="nsessions">Next Sessions</h1>
        <div className="sidebar-slot">
          {sidebarData?.timeSlotData?.map((item, index) => {
            if (item.acceptedStatus == "Accept") {
              return (
                <div
                  className="d-flex align-items-center justify-content-start"
                  key={index}
                >
                  <div>
                    <h4>
                      {index + 1} Session
                      <img src={tickright} />
                    </h4>
                    <p>
                      <img src={arrowsession} alt="" />
                      {moment(item.bookingOn).format("MMM Do")} |{" "}
                      {item.startTime}-{item.endTime}
                    </p>
                  </div>
                  <div className="ml-5">
                    {
                      item?.IsInTime?
                      <button className="btn btn-primary px-5 py-3" onClick={()=>{
                        Navigate(`/video_calling/${meetingId}`)
                      }}
                      >Join Now
                      </button>:
                      null
                    }
                    {/* {index === 0 ? (
                      <button
                        className="btn btn-primary px-5 py-3"
                        onClick={() => {
                          Navigate(`/video_calling/${meetingId}`);
                        }}
                      >
                        Join Now
                      </button>
                    ) : null} */}
                  </div>
                </div>
              );
            }
          })}
          <h2 className="psessions">Pending Sessions</h2>
          {sidebarData?.timeSlotData?.map((item, index) => {
            if (item.acceptedStatus == "Pending") {
              return (
                <div key={index}>
                  <h4>
                    {index + 1} Session
                    <img src={tickright} />
                  </h4>
                  <p>
                    <img src={arrowsession} alt="" />
                    {moment(item.bookingOn).format("MMM Do")} | {item.startTime}
                    -{item.endTime}
                  </p>
                </div>
              );
            }
          })}

          {/* <h1 className="nsessions">Next Sessions</h1>
                    <h4>2nd Session</h4>
                    <p>
                      <img src={arrowsession} alt="" />
                      8th Jan | 11:00-12:00
                    </p>
                    <h4>3rd Session</h4>
                    <p>
                      <img src={arrowsession} alt="" />
                      8th Jan | 11:00-12:00
                    </p>
                    <h4>4th Session</h4>
                    <p>
                      <img src={arrowsession} alt="" />
                      8th Jan | 11:00-12:00
                    </p> */}
        </div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "21px",
            textTransform: "uppercase",
            color: "#76808D",
            marginTop: "25rem",
          }}
        >
          Meeting Link
          <img src={Line100} />
        </p>
        <div className="sidebar-bottom">
          <p>https://meet.google.com/gty-uyd-dhr</p>
          <img src={ep_copydocument} />
        </div>
      </div>
    </>
  );
}
