import React, { useEffect, useState } from "react";
import Rectangle1755 from "../../assets/images/Rectangle 1755.png";
import HttpClient from "../../utils/HttpClient";
import CourseCard from "./CourseCard";
import Loader from "../../Component/Loader/DotLoading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OngoingCourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    const result = await HttpClient.requestData(
      `course/myCourse`,
      "GET"
    );
    console.log(result);
    if (result && result.status) {
      setCourses(result.data);
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <div className="ongoing_courses py-3 px-1">
          <h2 className="ongoing_courses_text">Ongoing Courses</h2>
          <span className="five_courses">{courses.length} Courses</span>
        </div>
        {/* Slider Start */}
        {loading && (
          <div
            style={{ position: "sticky", textAlign: "center", width: "90%" }}
          >
            <Loader />
          </div>
        )}
        <div className="ongoing_Slider">
        <Slider {...settings}>
     
          {courses.map((item, index) => {
              return (
                <CourseCard 
                key={item.courseId}
                courseId={item.courseId}
                courseData={item.courseData[0]}
                />

              );
            })}
        </Slider>
        </div>

        {/* Slider End */}
      </div>
    </>
  );
}
