import React,{useEffect, useState} from "react";
import facebook from "../../assets/images/icon/facebook.png";
import twitter from "../../assets/images/icon/twitter.png";
import instagram from "../../assets/images/icon/instagram.png";
import reviewstar from "../../assets/images/icon/review-star.png";
import dollar from "../../assets/images/icon/dollar.png";
import totalcors from "../../assets/images/icon/totalcors.png";
import bluestar from "../../assets/images/icon/bluestar.png";
import Union from "../../assets/images/icon/Union.png";
import HttpClient from "../../utils/HttpClient";
import { Link } from "react-router-dom";


export default function CourseTeacher({teacherData,teacherID}){
  // const [teacherData, setTeacherData] = useState(null);
  // useEffect(()=>{
  //       fetchTeacherData()
  // },[])
  // const fetchTeacherData = async () => {
  //   let result = await HttpClient.requestData(
  //     `course/techersDetails/${teacherId}`,
  //     "GET"
  //   );
  //   if (result && result.status) {
  //     setTeacherData(result.data);
  //   }
  // };

    return(
        <>
        <div className="profile" id="section3">
                  <div className="profileimage">
                    <img src={teacherData?.image} alt="Profile" />
                  </div>
                  <div className="profileDescription">
                    <div className="nameSocial">
                      <h3 className="socialName">{teacherData?.name}</h3>
                      <div className="social-icons">
                        <a href="#">
                          <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="#">
                          <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="#">
                          <img src={instagram} alt="Instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="profileDetails">
                      <p>
                        <img src={reviewstar} />
                        4.8
                      </p>
                      <p>
                        <img src={dollar} />
                        48/hr{" "}
                      </p>
                      <p>
                        <img src={totalcors} />
                        {teacherData?.CourseData?.totalCourse} Total courses
                      </p>
                      <p>
                        <img src={bluestar} />
                        5k+ Reviews
                      </p>
                    </div>
                    <div className="totalClassAttend">
                      <p style={{ fontWeight: 600 }}>
                        <img src={Union} style={{ marginRight: 10 }} />
                        200 coaching classes attended
                      </p>
                      <p style={{ fontWeight: 400, margin: "35px 0" }}>
                        {teacherData?.about}
                      </p>
                      <Link to={`/booking_live_choaing/${teacherID}`}>
                      <button type="button" className="btn book_call">
                        Book an Individual Coaching Call
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
        </>
    )
}