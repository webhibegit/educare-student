import { useEffect } from "react";
import { useState } from "react";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import start from "../../assets/images/icon/start.png";
import archivetick from "../../assets/images/icon/archive-tick.png";
import hrs from "../../assets/images/icon/hrs.png";
import { useRef } from "react";
import { useCallback } from "react";
import Loader from '../../Component/Loader/DotLoading'


export default function AllPopularCourse({searchData}) {

  const [PopularCourse, setPopularCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [favouriteData, setFavouriteData] = useState([]);
  const observer = useRef();
  const [loading,setLoading]=useState(false)


console.log(page);

  const lastPopularElement = useCallback((node) => {
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
    // fetchPopularCourse();
    fetchFavouriteCourse();
    if(searchData.length>=1){
      setHasMore(false);
      setPopularCourse(searchData)
      // console.log("sdufgvsudfhds");
    }
    else{
      // setPopularCourse([])
      fetchPopularCourse()
    }

  }, [page,searchData]);

  const fetchFavouriteCourse = async () => {
    let result = await HttpClient.requestData("course/all-fevourite", "GET");
    // console.log(result);
    if (result && result.status) {
      setFavouriteData(result.data);
    }
  };
  const fetchPopularCourse = async () => {
    console.log("fetchPopularCourse");
    let result = await HttpClient.requestData(
      `course/Popular?page=${page}`,
      "GET"
    );
    if (result && result.status) {
      if (result.data.length < 1) {
        setHasMore(false);
      } else {
        setPopularCourse((prev) => {
          // setHasMore(true)
          return [...prev, ...result.data];
        });
      }
    }
  };
  const favouriteCourseNew = async (id) => {
    let data = {
      courseID: id,
    };
    let result = await HttpClient.requestData(
      "course/add-fevourite",
      "POST",
      data
    );
    // console.log("add favourite",result);
    fetchFavouriteCourse();
    toast.success(result.message);
  };
  //  console.log("favouriteData",favouriteData);
  //  console.log("PopularCourse",PopularCourse );
  return (
    <>
      <div className="uploaded_courses_wrapper">
        {PopularCourse?.map((item, index) => {
          if (PopularCourse.length === index + 1) {
            return (
              <div
                key={index}
                className="uploaded_courses_wrapper_item"
                ref={lastPopularElement}
              >
                <div className="section-details pos-prpr">
                  <span className="span-tag">Get 50 Loyalty points</span>
                  {favouriteData.find(
                    (value) => value._id == item.CourseData._id
                  ) ? (
                    <span
                      onClick={() => favouriteCourseNew(item.CourseData._id)}
                      className="span-whish d-flex align-items-center justify-content-center"
                      style={{ background: "#ff00004a", cursor: "pointer" }}
                    >
                      <i
                        className="fa fa-heart"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                    </span>
                  ) : (
                    <span
                      onClick={() => favouriteCourseNew(item.CourseData._id)}
                      style={{ cursor: "pointer" }}
                      className="span-whish d-flex align-items-center justify-content-center"
                    >
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </span>
                  )}
                </div>
                <Link
                  to={`/courses_detail/${item?.slug}`}
                >
                  <img
                    // src="./images/design1.png"
                    src={item?.CourseData?.thumb_image}
                    style={{ height: "200px" }}
                    alt=""
                    className="img-mob"
                  />
                </Link>
                <h3 className="design-title">{item?.CourseData?.courseName}</h3>
                <div className="section-details">
                  <p style={{ fontWeight: 500, fontSize: "16px" }}>
                    <img src={start} />
                    {item?.CourseData?.avgRating ?? "00"}
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
                    <div className="courses_Image_Person">
                      <img src={item?.CourseData?.TeachersData?.image} />
                    </div>
                    {item?.CourseData?.TeachersData?.name}
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
                    ${item?.CourseData?.price ?? 0}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="uploaded_courses_wrapper_item">
                <div className="section-details pos-prpr">
                  <span className="span-tag">Get 50 Loyalty points</span>
                  {favouriteData.find(
                    (value) => value._id == item.CourseData._id
                  ) ? (
                    <span
                      onClick={() => favouriteCourseNew(item.CourseData._id)}
                      className="span-whish d-flex align-items-center justify-content-center"
                      style={{ background: "#ff00004a", cursor: "pointer" }}
                    >
                      <i
                        className="fa fa-heart"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                    </span>
                  ) : (
                    <span
                      onClick={() => favouriteCourseNew(item.CourseData._id)}
                      style={{ cursor: "pointer" }}
                      className="span-whish d-flex align-items-center justify-content-center"
                    >
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </span>
                  )}
                </div>
                <Link
                  to={`/courses_detail/${item?.slug}`}
                >
                  <img
                    // src="./images/design1.png"
                    src={item?.CourseData?.thumb_image}
                    style={{ height: "200px" }}
                    alt=""
                    className="img-mob"
                  />
                </Link>
                <h3 className="design-title">{item?.CourseData?.courseName}</h3>
                <div className="section-details">
                  <p style={{ fontWeight: 500, fontSize: "16px" }}>
                    <img src={start} />
                    {item?.CourseData?.avgRating ?? "00"}
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
                  <div className="courses_Image_Person">
                    <img src={item?.CourseData?.TeachersData?.image} />
                    </div>
                    {item?.CourseData?.TeachersData?.name}
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
                    ${item?.CourseData?.price ?? 0}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
