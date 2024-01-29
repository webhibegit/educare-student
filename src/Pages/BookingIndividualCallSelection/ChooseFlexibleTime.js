import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import HttpClient from "../../utils/HttpClient";
import Background from "../../assets/images/teacher-profile-bg.png";
import PersonBack from "../../assets/images/teacher.png";
import FlexibleTimeTeacherList from "./FlexibleTimeTeacherList";
import BookLiveChoachingByFlexbleTime from "./BookLivechoingByFlexibleTime";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import FlexibleTimeSingleteacher from "./FlexibleTimeSingleTeacher";
import { ToastContainer, toast ,Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChooseFlexibleTime() {
  const [value, onChange] = useState(new Date());
  const [bookingSlot, setBookingSlot] = useState([]);
  const [userSelectedSlot, setUserSelectedSlot] = useState([]);
  const [showSingleTeacher, setShowSingleTeacher] = useState(false);
  const [teacherList, setTeacherList] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const [showInputFild, setShowInputFild] = useState(false);

  useEffect(() => {
    fetchBookingSlot();
  }, []);
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  const fetchBookingSlot = async (value) => {
    let momentData = moment(value).format("dddd");
    // let dateMonth= moment(value).format("MMM Do YY");
    let date=moment(value).format()
    let data = {
      day: momentData,
      date:date
    };
    // console.log(data);
    
    let result = await HttpClient.requestData("fetchTimeSlot", "POST", data);
    if (result && result.status) {
      setBookingSlot(result.data);
    }
    if (result.data.length < 1) {
      // toast.warn(`No Time Slot on ${momentData}`);
      setShowInputFild(false)
      setTeacherList([])

    }
  };

  // console.log(bookingSlot);

  const selectSlot = async (id, startTime, endTime) => {
    let data = {
      startTime: startTime,
      endTime: endTime,
      scheduleId: id,
    };
    // fetchTeacher()
    setUserSelectedSlot([data]);
    let momentData = moment(value).format("dddd");
    let fetchData = {
      day: momentData,
      start: startTime,
      end: endTime,
    };
    let result = await HttpClient.requestData(
      "fetchTeachers",
      "POST",
      fetchData
    );
    if (result && result.status) {
      setTeacherList(result.data);
    }
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
  // console.log(teacherList);

  //   const fetchTeacher=async()=>{
  //     if(userSelectedSlot.length>0){
  //          let momentData = moment(value).format("dddd");
  //     let data={
  //             day:momentData,
  //             start:userSelectedSlot[0]?.startTime,
  //             end:userSelectedSlot[0]?.endTime
  //     }
  //    console.log(data);
  //     let result=await HttpClient.requestData("fetchTeachers","POST",data)
  //     if(result&& result.status){
  //         setTeacherList([result.data])
  //     }
  //     }
  // }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        limit={3}
        theme="colored"
      />
      <div className="row">
        <div className="col-md-11 col-lg-11 col-xl-11 col-11">
          <div className="pl-4 d-xl-flex d-lg-block align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center session_coaching my-xl-5 my-lg-3 my-3 px-4">
              <i
                className="fa fa-info-circle mr-2"
                aria-hidden="true"
                style={{ color: '#038890', fontSize: '21px' }}
              ></i>
              <span className="text_color">You can select only one date and time slot for your coaching session.</span>
            </div>
            <div className="live-top-right-box ml-0 mb-3" style={{ float: 'none', borderRadius: '10px' }}>
              <a href="#" className="btn sort-btn" style={{ color: '#858796' }}>
                Sort By:
              </a>
              <select className="option-live ml-auto" style={{ padding: '0 22px 0 0' }}>
                <option>Most Popular</option>
                <option>Most Popular</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-xl-8 col-12">
          <div className="px-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-xl-8">
                    <div className="callender-wrap">
                      <div>
                        <Calendar
                          onClickDay={(value, event) => {
                            fetchBookingSlot(value);
                          }}
                          tileDisabled={tileDisabled}
                          onChange={e => {
                            onChange(e);
                            setUserSelectedSlot([]);
                          }}
                          value={value}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12 col-xl-4">
                    <div className="callender-box pt-0">
                      <div className="calenderflex pb-4">
                        <h3 className="hr_format" style={{ color: '#44444F' }}>
                          24 HR Format
                        </h3>
                        <div className="time_Table">
                          {bookingSlot?.map((item, index) => {
                            if (item.existCount === 0) {
                              return (
                                <button
                                  className={
                                    userSelectedSlot?.find(data => data.scheduleId === item._id)
                                      ? 'btn time_btn active my-2'
                                      : 'btn time_btn my-2'
                                  }
                                  key={index}
                                  onClick={() => {
                                    selectSlot(item._id, item.startTime, item.endTime);
                                    // fetchTeacher()
                                    setShowInputFild(true);
                                  }}
                                >
                                  <span>
                                    {item.startTime}-{item.endTime}
                                  </span>
                                </button>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showInputFild ? (
            <BookLiveChoachingByFlexbleTime teacherId={teacherId} date={value} selecledSlot={userSelectedSlot} />
          ) : (
            ''
          )}
        </div>
        {showSingleTeacher ? (
          <FlexibleTimeSingleteacher
            showFunc={setShowSingleTeacher}
            teacherId={teacherId}
            setteacherIdFunc={setTeacherId}
          />
        ) : (
          <div className="col-md-12 col-lg-12 col-xl-3 col-12">
            <div className="px-4 px-xl-0">
              {teacherList?.map((item, index) => {
                return (
                  <FlexibleTimeTeacherList
                    key={index}
                    name={item.name}
                    image={item.image}
                    review={item.review}
                    onClick={() => {
                      setTeacherId(item._id);
                      setShowSingleTeacher(true);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* {
          showTeacherList?<FlexibleTimeTeacherList
        selectedSlots={userSelectedSlot}
        date={value}
        shoeFunc={setShowTeacherList}
        />:""
        } */}

        {/* <div className="col-md-12 col-lg-12 col-xl-3 col-12">
          <div className="px-4 px-xl-0">
            <div className="last-content-box mb-4">
              <div
                className="last-top-section"
                style={{
                  backgroundImage: `url("${Background}")`,
                }}
              ></div>
              <div className="last-bootom-section">
                <a href="#" className="last-img">
                  <img src={PersonBack} />
                </a>
                <h5>Kadin Mango</h5>
                <h6 className="rate">
                  <a href="#">
                    <i
                      class="fa fa-star"
                      aria-hidden="true"
                      style={{ color: "#FFC700" }}
                    ></i>
                  </a>
                  4.6/5
                </h6>
                <h6 className="rate">
                  <a href="#">
                    <i class="fa fa-usd" aria-hidden="true"></i>
                  </a>
                  4.6/5
                </h6>
                <div className="ins-details-wrap">
                  <div className="ins-tap-btn-box">
                    <a href="#" className="btn ins-tap-btn">
                      Speacking
                    </a>
                  </div>
                  <div className="ins-tap-btn-box">
                    <a href="#" className="btn ins-tap-btn">
                      English
                    </a>
                  </div>
                  <div className="number-box">
                    <h6>+3</h6>
                  </div>
                </div>
                <div className="ins-view-btn-box">
                  <a href="#" className="btn ins-view-btn">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="last-content-box mb-4">
              <div
                className="last-top-section"
                style={{
                  backgroundImage: `url("${Background}")`,
                }}
              ></div>
              <div className="last-bootom-section">
                <a href="#" className="last-img">
                  <img src={PersonBack} />
                </a>
                <h5>Kadin Mango</h5>
                <h6 className="rate">
                  <a href="#">
                    <i
                      class="fa fa-star"
                      aria-hidden="true"
                      style={{ color: "#FFC700" }}
                    ></i>
                  </a>
                  4.6/5
                </h6>
                <h6 className="rate">
                  <a href="#">
                    <i class="fa fa-usd" aria-hidden="true"></i>
                  </a>
                  4.6/5
                </h6>
                <div className="ins-details-wrap">
                  <div className="ins-tap-btn-box">
                    <a href="#" className="btn ins-tap-btn">
                      Speacking
                    </a>
                  </div>
                  <div className="ins-tap-btn-box">
                    <a href="#" className="btn ins-tap-btn">
                      English
                    </a>
                  </div>
                  <div className="number-box">
                    <h6>+3</h6>
                  </div>
                </div>
                <div className="ins-view-btn-box">
                  <a href="#" className="btn ins-view-btn">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
