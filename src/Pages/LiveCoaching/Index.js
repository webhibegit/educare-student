import React, { useState ,useEffect} from "react";
import prev from "../../assets/images/icon/prev.png";
import next from "../../assets/images/icon/next.png";
import teacher from "../../assets/images/teacher.png";
import yellowstar from "../../assets/images/icon/yellowStar.png";
import dollar from "../../assets/images/icon/dollar.png";
import girl_live from "../../assets/images/icon/girl_live.png";

import LiveCoachingSideBar from "./LiveCoachingSideBar";
import { Link } from "react-router-dom";
import WeeklyLiveCoachingCall from "./WeeklyLiveCoachingCall";
import LiveChoaingCalender from "./LiveCoachingCalender";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import HttpClient from "../../utils/HttpClient";
import FeaturedMentors from "./FeaturedMentors";

export default function LiveChoaing() {

  const [value, onChange] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [teacherId,setTeacherId]=useState("")
  const [date,setDate]=useState("")
  const[showSidebar,setShowSidebar]=useState(false)
  const [meetingId,setMeetingId]=useState("")


  useEffect(() => {
    fetchSlots(value);
    window.scrollTo(0, 0)

  }, []);
  const fetchSlots = async (value) => {
    setDate(formatDate(value))
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
      console.log(parseInt(result.data[0]?.duration?.slice(0, 2)*60+ parseInt(result.data[0]?.duration?.slice(3, 5))));
    }
  };

  // const showSideBar = () => {
  //   if (
  //     document.querySelector("#live_coaching_sidebar").style.display !== "block"
  //   ) {
  //     document.querySelector("#live_coaching_sidebar").style.display = "block";
  //     document.querySelector("#live_coaching_sidebar").style.top = "0px";
  //   } else {
  //     document.querySelector("#live_coaching_sidebar").style.display = "none";
  //   }
  // };
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date <= new Date();
  };
  console.log(slots);

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
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="row">
                  <div className="col-md-12">
                    <WeeklyLiveCoachingCall />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-9">
                    <div className="live-middle-box">
                      <div className="middle-color-box">
                        <div className="color-text-1">
                          <h4 style={{ color: 'white' }}>Individual Live Coaching Call</h4>
                          <p style={{ color: 'white' }}>
                            Join live call to have an interactive session with instructor directly.
                          </p>
                        </div>
                        <div className="color-text-2" style={{ border: 'unset', backdropFilter: 'unset' }}>
                          <Link to={'/book_individual_Call'}>
                            <button
                              type="button"
                              className="openPopUpCoachingCall"
                              style={{
                                border: '1px solid #FFFFFF',
                                background: 'rgba(255, 255, 255, 0.3)',
                              }}
                            >
                              Book an Individual Coaching Call
                            </button>
                          </Link>
                        </div>
                      </div>
                      <hr />
                      {/* <LiveChoaingCalender /> */}
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
                            onChange={e => {
                              onChange(e);
                              fetchSlots(e);
                            }}
                            value={value}
                          />
                        </div>
                        <div className="callender-full-details-wrap" style={{ maxWidth: '364px', width: '100%' }}>
                          <div className="callender-details-wrap">
                            {slots.length >= 1 ? (
                              slots.map((item, index) => {
                                return (
                                  <div
                                    className="callender-details-box "
                                    style={{ position: 'relative' }}
                                    key={index}
                                    onClick={() => {
                                      setTeacherId(item?.teachersData?._id);
                                      setMeetingId(item._id);
                                      setShowSidebar(!showSidebar);
                                    }}
                                  >
                                    <span
                                      className="small-bar"
                                      style={{
                                        position: 'absolute',
                                        width: '5px',
                                        height: '21px',
                                        background: '#BF13FB',
                                        zIndex: 999,
                                        left: 0,
                                        top: 16,
                                      }}
                                    />
                                    <p className="details-main">
                                      {moment(item.bookingOn).format('MMM Do')}, {item.startTime} - {item.endTime}
                                    </p>
                                    {/* <a
                                    onClick={() => showSideBar()}
                                    className=" btn callender-details-btn"
                                  >
                                    4 more classes
                                  </a> */}
                                    <div className="details-text-1">
                                      <p>Duration</p>
                                      <p>Instructor</p>
                                    </div>
                                    <div className="details-text-2">
                                      <p>
                                        {parseInt(
                                          item?.duration?.slice(0, 2) * 60 + parseInt(item?.duration?.slice(3, 5))
                                        )}{' '}
                                        mins
                                      </p>
                                      <p>{item?.teachersData?.name}</p>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <div
                                className="callender-details-box mt-5 "
                                style={{ position: 'relative', width: '300px' }}
                              >
                                <h1 style={{ fontSize: '30px', textAlign: 'center' }}>No Class Found</h1>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <FeaturedMentors slots={slots} />
                  {/* <div className="col-md-12 col-lg-3">
                    <div className="live-last-box">
                      <h3 className="last-heading">Featured Mentors</h3>
                      <div className="last-content-box">
                        <div className="last-top-section"></div>
                        <div className="last-bootom-section">
                          <a href="#" className="last-img">
                            <img src={teacher} />
                          </a>
                          <h5>Kadin Mango</h5>
                          <h6 className="rate">
                            <a href="#">
                              <img src={yellowstar} />
                            </a>
                            4.6/5
                          </h6>
                          <h6 className="rate">
                            <a href="#">
                              <img src={dollar} />
                            </a>
                            4.6/5
                          </h6>
                        </div>
                      </div>
                      <div className="last-content-box">
                        <div
                          className="last-top-section"
                          style={{
                            backgroundImage:
                              "url(../../assets/images/design3.png)",
                          }}
                        ></div>
                        <div className="last-bootom-section">
                          <a href="#" className="last-img">
                            <img src={girl_live} />
                          </a>
                          <h5>Jocelyn Westervelt</h5>
                          <h6 className="rate">
                            <a href="#">
                              <img src={yellowstar} />
                            </a>
                            4.6/5
                          </h6>
                          <h6 className="rate">
                            <a href="#">
                              <img src={dollar} />
                            </a>
                            4.6/5
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                {showSidebar && <LiveCoachingSideBar date={date} teacherId={teacherId} meetingId={meetingId} />}

                {/* <BookIndividalCallPopUp/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
