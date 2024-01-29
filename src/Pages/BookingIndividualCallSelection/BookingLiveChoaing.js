import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import teacherprofilebg from "../../assets/images/teacher-profile-bg.png";
import teacher from "../../assets/images/teacher.png";
import ratingStar from "../../assets/images/icon/ratingStar.png";
import doller from "../../assets/images/icon/dollar.png";
import facebook from "../../assets/images/icon/facebook.png";
import twitter from "../../assets/images/icon/twitter.png";
import instagram from "../../assets/images/icon/instagram.png";
import diannerussel from "../../assets/images/icon/diannerussel.png";
import reviewstar from "../../assets/images/icon/review-star.png";
import Bookdatetime from "../../assets/images/icon/Bookdatetime.png";
import { Link, useParams } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import moment from "moment";
import { ToastContainer, toast ,Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function BookingLiveChoaching() {
  const Navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  // const [day, onClickDay] = useState("");
  const [teacherData, setTeacherData] = useState();
  const [bookingSlot, setBookingSlot] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const { id } = useParams();
  const { userData } = useSelector((state) => state.User);
  // console.log(userData);
  useEffect(() => {
    fetchTeacherData();
    fetchBookingSlot();
  }, []);

  const fetchTeacherData = async () => {
    let result = await HttpClient.requestData(
      `/particularTeacherProfile/${id}`,
      "GET"
    );
    if ((result, result.status)) {
      setTeacherData(result.data[0]);
    }
  };
  const fetchBookingSlot = async (value) => {
    let momentData = moment(value).format("dddd");
    // let dateMonth= moment(value).format("MMM Do YY");
    let date=moment(value).format()

    let dayData = momentData;
    // console.log(dayData);
    let data = {
      teacherId: id,
      day: dayData,
      date:date
    };
    let result = await HttpClient.requestData("fetchSlotTime", "POST", data);
    if (result && result.status) {
      setBookingSlot(result.data);
    }
    if (result.data.length < 1) {
      // toast.warn(`No Time Slot on ${momentData}`);
    }
  };

  const SelectedSlot = (startTime, EndTime, id) => {
    // let dateMonth = moment(value).format("MMM Do YY");
    let momentData = moment(value).format("dddd");
     console.log(id);
    // if (selectedSlot.find((item) => item.day == momentData)) {
    //   let data = {
    //     startTime: startTime,
    //     endTime: EndTime,
    //   };
    //   let indexofslot = selectedSlot.findIndex(
    //     (item) => item.day == momentData
    //   );
    //   let updatedSlot = [...selectedSlot];
    //   // console.log(updatedSlot);
    //   updatedSlot[indexofslot].slot.push(data);
    //   setSelectedSlot(updatedSlot);
    // } else {
    //   let data = {
    //     day: momentData,
    //     slot: [
    //       {
    //         startTime: startTime,
    //         endTime: EndTime,
    //       },
    //     ],
    //   };

    //   setSelectedSlot((prev) => [...prev, data]);
    // }
    let data={
      startTime:startTime,
      endTime:EndTime,
      scheduleId:id
    }
    setSelectedSlot((prev)=>[...prev,data])
  };

  const postBookLiveChoing = async () => {

    if(selectedSlot.length>0 &&name!==""&&email!==""){
    // const day = value.getDate();
    // const month = value.getMonth() + 1;
    // const year = value.getFullYear();
    let date=moment(value).format()
    // console.log(`${day}-${month}-${year}`);
    let momentData = moment(value).format("dddd");

    let data = {
      teacherId: id,
      bookingOn: date,
      bookingDay:momentData,
      slot: selectedSlot,
      name: name,
      email: email,
      note: note,
    };
    console.log(data);
    let result = await HttpClient.requestData("bookLiveCoacing", "POST", data);
    console.log(result);
    if (result && result.status) {
      toast.success(result.message)
      setTimeout(() => {
        Navigate("/live_coaching_call");       
      }, 3000);
    }
    }else{
      toast.warn("Required Fild ****")
    }

  };




  const setProfileInfo = () => {
    setName(userData.fristName);
    setEmail(userData.email);
  };
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };
  //  console.log(teacherData);
  //  let date=moment(value).format()
  //  console.log(date);
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
      {teacherData ? (
        <div className="container-fluid  pl-0 pr-0">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="instructor-top-box">
                      <div className="instructor-main-box">
                        <h4>Book Individual Live Coaching Call</h4>
                        <div className="cancel-btn-box">
                          <Link to={'/live_coaching_call'} className="btn cancel-btn">
                            Cancel
                          </Link>
                        </div>
                        <div className="instructor-tap-box">
                          <div className="tap-click-box" style={{ background: '#138BFB' }}>
                            <h6>Choose Teacher First</h6>
                            <p>This approach is for choosing your preferred teacher first, then timetable.</p>
                          </div>
                          <Link to={'/book_individual_Call/choose_flexible_time'}>
                            <div className="tap-click-box">
                              <h6>Choose Flexible Time</h6>
                              <p>This approach is for choosing your preferred teacher first, then timetable.</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 col-12">
                    <div className="media media-container">
                      <Link to={'/book_individual_Call'}>
                        <button className="btn back_btn_media">
                          <span>back</span>
                        </button>
                      </Link>
                      <img
                        src={teacherData?.bcgImage ?? teacherData?.image}
                        className=""
                        style={{ width: '100%', height: 150 }}
                      />
                      <img src={teacherData?.image} className="teacher-profile" />
                      <div className="media-body">
                        <h4 className="media-title">{teacherData?.name}</h4>
                        <div className="section-details">
                          <p>
                            <img src={ratingStar} className="img-fluid" />
                            <span>{teacherData?.avgRating}</span>
                          </p>
                          <span className="border_line" />
                          <p>
                            <img src={doller} className="img-fluid" />
                            48 /hr
                          </p>
                        </div>
                        <p className="media-para">{teacherData?.about}</p>
                        {/* <button
                        type="button"
                        className="btn show_more"
                        id="myBtn"
                      >
                        Show more
                      </button> */}
                        <div className="social_media_icon py-4">
                          <img src={facebook} alt="facebook icons" className="img-fluid px-2" />
                          <img src={twitter} alt="twitter icons" className="img-fluid px-2" />
                          <img src={instagram} alt="instagram icons" className="img-fluid px-2" />
                        </div>
                      </div>
                      <span className="border-line" />
                      <div className="media-body">
                        <h4 className="media-title">Students Reviews</h4>
                        <div className="review-description">
                          {teacherData?.review?.map((item, index) => {
                            return (
                              <div className="review-description-item" key={index}>
                                <div className="review-box">
                                  <div className="review-section p-0 m-0">
                                    <img src={item.student[0].image} alt="" />
                                  </div>
                                  <div className="review-section  p-0 m-0">
                                    <p className="review-name">{item.student[0].name}</p>
                                    <p className="review-start">
                                      {item.rating}
                                      <img src={reviewstar} className="review-star" alt="" />
                                    </p>
                                  </div>
                                </div>
                                <p className="review-details">{item.review}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-9 col-xl-8 col-12">
                    <div className="">
                      <div className="d-flex align-items-center justify-content-center session_coaching my-5">
                        <img src={Bookdatetime} className="img-fluid mr-2" />
                        <span className="text_color">
                          You can select only one date and time slot for your coaching session.
                        </span>
                      </div>
                      <div className="card  my-5">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-8">
                              <div className="callender-wrap">
                                <div>
                                  <Calendar
                                    onClickDay={(value, event) => {
                                      fetchBookingSlot(value);
                                    }}
                                    tileDisabled={tileDisabled}
                                    onChange={e => {
                                      onChange(e);
                                      setSelectedSlot([]);
                                    }}
                                    value={value}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="callender-box pt-0">
                                <div className="calenderflex pb-4">
                                  <h3 className="hr_format">24 HR Format</h3>
                                  <div className="time_Table">
                                    {bookingSlot?.map((value, index) => {
                                      if (value.existCount === 0) {
                                        return (
                                          <button
                                            className={
                                              selectedSlot?.find(data => data.scheduleId === value._id)
                                                ? 'btn time_btn active my-2'
                                                : 'btn time_btn my-2'
                                            }
                                            key={index}
                                            onClick={() => {
                                              SelectedSlot(value.startTime, value.endTime, value._id);
                                              // AllSlotData(
                                              //   value.startTime,
                                              //   value.endTime,

                                              //   )
                                            }}
                                          >
                                            <span>
                                              {value.startTime}-{value.endTime}
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
                          <span className="border-line2" />
                          <div className="selected_timeslots">
                            <h3 className="py-3">Selected Timeslots</h3>

                            <div className="d-flex align-items-center justify-content-start py-2">
                              <div className="mr-5">
                                <span className="calender_timeslots">{moment(value).format('dddd')}</span>
                              </div>
                              {selectedSlot?.map((data, index) => {
                                return (
                                  <div
                                    className="all_time_btn d-flex align-items-center justify-content-start"
                                    key={index}
                                  >
                                    <button className="mr-3">
                                      <span>
                                        {data.startTime}-{data.endTime}
                                      </span>
                                    </button>
                                  </div>
                                );
                              })}
                            </div>

                            {/* <div className="d-flex align-items-center justify-content-start py-2">
                            <div className="mr-5">
                              <span className="calender_timeslots">
                                8th Feb
                              </span>
                            </div>
                            <div className="all_time_btn d-flex align-items-center justify-content-start">
                              <button className="mr-3">
                                <span>11:00-12:00</span>
                              </button>
                            </div>
                          </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="card my-5">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between form_option">
                            <div>
                              <h3 className="fill_up">Fill up neccessarry information</h3>
                            </div>
                            <div className="d-flex align-items-center">
                              <input onChange={() => setProfileInfo()} type="checkbox" className="checkbox mr-2" />
                              <span className="grab">Grab Info from profile</span>
                            </div>
                          </div>
                          <div className="row my-4 form_info">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Your Name</label>
                                <input
                                  type="text"
                                  onChange={e => setName(e.target.value)}
                                  className="form-control"
                                  value={name}
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Your E-mail</label>
                                <input
                                  type="text"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="col-md-12 col-12">
                              <div className="form-group">
                                <label htmlFor="">Note (optional)</label>
                                <textarea
                                  onChange={e => setNote(e.target.value)}
                                  className="form-control"
                                  defaultValue={''}
                                  // value={note}
                                />
                              </div>
                            </div>
                            <div className="col-md-12 col-12">
                              <div className="form-group">
                                <button
                                  className="btn submit_btn"
                                  onClick={postBookLiveChoing}
                                  style={{
                                    backgroundColor: '#138BFB',
                                    borderRadius: '12px',
                                    fontSize: '15px',
                                  }}
                                >
                                  <span>Submit</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
