import React, { useEffect, useState } from "react";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";
import Ellipse3 from "../../assets/images/Ellipse3.png";
import downarrow from "../../assets/images/downarrow.png";
import HttpClient from "../../utils/HttpClient";
import Loader from "../../Component/Loader/DotLoading";
import { Link } from "react-router-dom";

export default function OnGoingCourses() {
  const [page, setPage] = useState(1);
  const [onGoingCourse, setOngoingCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOngoingCourse();
  }, []);

  const fetchOngoingCourse = async () => {
    setLoading(true);
    let result = await HttpClient.requestData(`course/myCourse`, "GET");
    console.log(result);
    if (result && result.status) {
      setOngoingCourse(result.data);
    }
    setLoading(false);
  };
  return (
    <>
      <div
        className="course-notifications-item"
        style={{ float: "left", borderRadius: "20px" }}
      >
        <div className="entry-title mb-4">
          <p className="entry-header m-0">Ongoing Courses</p>
          <p className="entry-ongoing m-0" style={{ color: "#727272" }}>
            {onGoingCourse.length} ongoing
          </p>
        </div>
        <div className="progress-section">
          {loading && (
            <div
              style={{ position: "sticky", textAlign: "center", width: "90%" }}
            >
              <Loader />
            </div>
          )}
          {onGoingCourse.map((item, index) => {
            return (
              <div className="progressimgtext" key={index}>
                <Link
                  to={`/my_course_overview/${item?.courseData[0]?.slug}`}
                  state={{
                    TeacherID:item?.courseData[0]?.TeachersData?._id,
                  }}
                >
                  <div className="ongoing-img">
                    <img src={item?.courseData[0]?.thumb_image} />
                  </div>
                </Link>
                <div className="ongoing-text">
                  <div className="ongoing-text-sec">
                    <Link
                      to={`/my_course_overview/${item?.courseData[0]?.slug}`}
                      state={{
                        TeacherID: item?.courseData[0]?.TeachersData?._id,
                        ID:item?.courseData[0]?._id,
                      }}
                    >
                      <p
                        className="para_OnGoing"
                        style={{ marginBottom: "5px" }}
                      >
                        {item?.courseData[0]?.courseName}
                      </p>
                    </Link>
                    <p style={{ marginBottom: "5px" }} className="percentage">
                      0%
                    </p>
                  </div>
                  <div className="ongoing-text-sec">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "0%" }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <img src={downarrow} />
          </div>
        </div>
      </div>
    </>
  );
}
