import React from "react";
import start from "../../assets/images/icon/start.png";
import archivetick from "../../assets/images/icon/archive-tick.png";
import hrs from "../../assets/images/icon/hrs.png";
import HttpClient from "../../utils/HttpClient";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setCourseData } from "../../Redux/reducer/SingleCourseData";
import { useNavigate } from "react-router-dom";

export default function MyCourse() {
  const Navigate = useNavigate();
  const [enrollCourse, setEnrollCourse] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const observer = useRef();
  const lastCourseElement = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        // console.log("visible");
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(false);
      }
    });
    if (node) observer.current.observe(node);
  });

  useEffect(() => {
    fetchMyCourseData();
    // fetchFavouriteCourse()
  }, [page]);
  // let dataPage = 1;
  const fetchMyCourseData = async () => {
    // let page = 3;
    const result = await HttpClient.requestData(
      `course/myCourse?page=${page}`,
      "GET"
    );
    // console.log(result);
    if (result && result.status) {
      if (result.data.length < 1) {
        setHasMore(false);
      } else {
        setHasMore(true);
        setEnrollCourse((prev) => {
          return [...prev, ...result.data];
        });
      }
    }
  };
  // console.log(page);

  const fetchSearchData = async (value) => {
    if (value.length > 0) {
      const data = {
        searchname: value,
      };

      let result = await HttpClient.requestData(
        "course/MySearchCourse",
        "POST",
        data
      );
      console.log("searchCourse", result);
      if (result && result.status) {

        let validCourse=result.data.filter((data)=>data.courseData.length>=1)
        setEnrollCourse(validCourse);
        setHasMore(false);
      }
    } else if (value == "") {
      setEnrollCourse([]);
      setPage(1);
      fetchMyCourseData(page);
    }
  };
  return (
    <>
      <div className="container-fluid top-section">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="all_course">
                  <h2>Enrolled Courses</h2>
                  <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search more courses"
                      onChange={(e) => {
                        fetchSearchData(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="uploaded_courses_wrapper">
                  {enrollCourse?.map((item, index) => {
                    if (enrollCourse.length === index + 1) {
                      return (
                        <div
                          ref={lastCourseElement}
                          key={index}
                          className="uploaded_courses_wrapper_item"
                        >
                          {/* <div className="section-details pos-prpr">
                              <span className="span-tag">
                                Get 50 Loyalty points
                              </span> 
                              {
                                item?.favouritesData?.enableStatus?
                              <span onClick={()=>favouriteCourseNew(item._id)} className="span-whish d-flex align-items-center justify-content-center" style={{background:'#ff00004a',cursor:"pointer"}}>
                               <i className="fa fa-heart" aria-hidden="true" style={{color:'red'}}></i>
                              </span>:
                              <span onClick={()=>favouriteCourseNew(item._id)} 
                              style={{cursor:"pointer"}}
                              className="span-whish d-flex align-items-center justify-content-center">
                              <i className="fa fa-heart-o" aria-hidden="true" ></i>
                             </span>
                              }
                              
                            </div> */}
                          <Link
                            to={`/my_course_overview/${item?.courseData[0]?.courseName}/${item?.courseId}`}
                            state={{
                              TeacherID: item?.courseData[0]?.TeachersData?._id,
                            }}
                          >
                            <img
                              // src="./images/design1.png"
                              src={item?.courseData[0]?.thumb_image}
                              style={{ height: "200px" }}
                              alt=""
                              className="img-mob"
                            />
                          </Link>
                          <h3 className="design-title">
                            {item?.courseData[0]?.courseName}
                          </h3>
                          <div className="section-details">
                            <p style={{ fontWeight: 500, fontSize: "16px" }}>
                              <img src={start} />
                              {item?.courseData[0]?.avgRating ?? "00"}
                            </p>
                            <p style={{ fontWeight: 500, fontSize: "16px" }}>
                              <img src={archivetick} />5 hrs
                            </p>
                            <p style={{ fontWeight: 500, fontSize: "16px" }}>
                              <img src={hrs} />
                              Online
                            </p>
                          </div>
                          <span className="border-line" />
                          <div className="section-details">
                            <p>
                              <img
                                src={item?.courseData[0]?.TeachersData?.image}
                              />
                              {item?.courseData[0]?.TeachersData?.name}
                            </p>
                            <p
                              style={{
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#171725",
                              }}
                            >
                              ${item?.price ?? 0}
                            </p>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index}
                          className="uploaded_courses_wrapper_item"
                        >
                          {/* <div className="section-details pos-prpr">
                            <span className="span-tag">
                              Get 50 Loyalty points
                            </span> 
                            {
                              item?.favouritesData?.enableStatus?
                            <span onClick={()=>favouriteCourseNew(item._id)} className="span-whish d-flex align-items-center justify-content-center" style={{background:'#ff00004a',cursor:"pointer"}}>
                             <i className="fa fa-heart" aria-hidden="true" style={{color:'red'}}></i>
                            </span>:
                            <span onClick={()=>favouriteCourseNew(item._id)} 
                            style={{cursor:"pointer"}}
                            className="span-whish d-flex align-items-center justify-content-center">
                            <i className="fa fa-heart-o" aria-hidden="true" ></i>
                           </span>
                            }
                            
                          </div> */}
                          <Link
                            to={`/my_course_overview/${item?.courseData[0]?.courseName}/${item?.courseId}`}
                            state={{
                              TeacherID: item?.courseData[0]?.TeachersData?._id,
                            }}
                          >
                            <img
                              // src="./images/design1.png"
                              src={item?.courseData[0]?.thumb_image}
                              style={{ height: "200px" }}
                              alt=""
                              className="img-mob"
                            />
                          </Link>
                          <h3 className="design-title">
                            {item?.courseData[0]?.courseName}
                          </h3>
                          <div className="section-details">
                            <p style={{ fontWeight: 500, fontSize: "16px" }}>
                              <img src={start} />
                              {item?.courseData[0]?.avgRating ?? "00"}
                            </p>
                            <p style={{ fontWeight: 500, fontSize: "16px" }}>
                              <img src={archivetick} />5 hrs
                            </p>
                            <p style={{ fontWeight: 500, fontSize: "16px" }}>
                              <img src={hrs} />
                              Online
                            </p>
                          </div>
                          <span className="border-line" />
                          <div className="section-details">
                            <p>
                              <img
                                src={item?.courseData[0]?.TeachersData?.image}
                              />
                              {item?.courseData[0]?.TeachersData?.name}
                            </p>
                            <p
                              style={{
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#171725",
                              }}
                            >
                              ${item?.price ?? 0}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
