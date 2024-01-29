import moment from "moment";
import React, { useState, useEffect } from "react";
import HttpClient from "../../utils/HttpClient";
import Loader from '../../Component/Loader/DotLoading'
// import moment from "moment";
import { Link } from "react-router-dom";

export default function LastUploadedClasses() {
  const [lastUploadCourse, setLastUploadCourse] = useState([]);

  useEffect(() => {
    fetchLastUploadClass();
  }, []);

  const fetchLastUploadClass = async () => {
    let result = await HttpClient.requestData(
      `course/lastUploadedClasses`,
      "GET"
    );
    // console.log(result);
    if (result && result.status) {
      setLastUploadCourse(result.data);
    }
  };
  return (
    <>
      <div className="course-notifications-item" style={{float:"left",borderRadius: '25px'}}>
        <div className="entry-title mb-4">
          <p className="entry-header m-0">Last Uploaded Classes</p>
        </div>
        { lastUploadCourse.length>=1
        ?
        lastUploadCourse.map((item, index) => {
          return (
            <div className="uploaded-box" key={index}>
              <Link to={`/courses_detail/${item.slug}`}>
              <div className="uploadedBox-wrap-article">
                <h2 className="video-tool-header">{item.courseName}</h2>
                <div className="video-tool-para"
                  dangerouslySetInnerHTML={{
                    __html: item?.courseDesc,
                  }}
                />
                <p className="uploaded-time">{moment(`${item.created_on}`).startOf('minute').fromNow()}</p>
              </div>
              </Link>
              <Link to={`/courses_detail/${item.slug}`}>
              <div className="uploadedBox-wrap-image">
                <img src={item.thumb_image} alt="" />
              </div>
              </Link>
            </div>
          );
        }):<div style={{position:"sticky",textAlign:"center",width:"90%"}}><Loader/></div>
      }

      </div>
    </>
  );
}
