import { height } from "@mui/system";
import React from "react";
// import Rectangle1755 from "../../assets/images/Rectangle 1755.png";
import { Link } from "react-router-dom";

export default function CourseCard({ courseId, courseData }) {
  // console.log(courseData);
  return (
    <>
      <div className="product-design-part">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 pl-0">
            <div className="product-design-box">
              <div className="product-design-box-wrapper">
                <div className="product-design-box-img">
                  <Link
                    className="mr-2"
                    style={{
                      width: "73px",
                      height: "55px",
                      display: "block",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                    to={`/my_course_overview/${courseData?.courseName}/${courseId}`}
                    state={{
                      TeacherID: courseData?.TeachersData?._id,
                    }}
                  >
                    <img src={courseData?.thumb_image} />
                  </Link>
                </div>
                <div className="product-design-box-img-cont">
                  <Link
                    to={`/my_course_overview/${courseData?.slug}`}
                    state={{
                      TeacherID: courseData?.TeachersData?._id,
                      ID:courseData?._id
                    }}
                  >
                    <h6
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "120px",
                      }}
                    >
                      {courseData?.courseName}
                    </h6>
                  </Link>
                  <span className="dot" />
                  <span>{courseData?.notificationCount} new notifications</span>
                </div>
              </div>
              <div className="download-part">
                <h6>0% Done</h6>
                <div
                  className="progress"
                  style={{ borderRadius: "10px", height: "9px" }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "0%", borderRadius: "10px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
