import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/image1.png";
import HttpClient from "../../utils/HttpClient";
import moment from "moment";
import { Link } from "react-router-dom";
import Loader from "../../Component/Loader/DotLoading"



export default function LastUploadClass() {
    const[lastUploadCourse,setLastUploadCourse]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        fetchLastUploadClass()
    },[])

    const fetchLastUploadClass=async()=>{
      setLoading(true)
        let result=await HttpClient.requestData(`course/lastUploadedClasses`,"GET")
        // console.log(result);
        if(result && result.status){
            setLastUploadCourse(result.data)
        }
        setLoading(false)
    }
  return (
    <>
      <div className="col-xl-7 col-lg-7 col-md-12 col-12 pl-0">
        <div className="course-notifications p-0" style={{borderRadius: '25px'}}>
          <div
            className="course-notifications-item ml-0"
            style={{
              width: "100%",
              padding: "30px 30px 20px",
              margin: "0 5px 20px",
              maxWidth:'unset'
            }}
          >
            <div className="entry-title mb-4">
              <p className="entry-header m-0">Last Uploaded Classes</p>
            </div>
            {loading && <div style={{position:"sticky",textAlign:"center",width:"90%"}}><Loader/></div>}
            {lastUploadCourse.map((item, index) => {
              return (
                <div className="uploaded-box" key={index}>
                  <Link to={`/courses_detail/${item.slug}`}>
                  <div className="uploadedBox-wrap-article">
                    <h2 className="video-tool-header">
                      {item.courseName}
                    </h2>
                    <div className="video-tool-para"
                        dangerouslySetInnerHTML={{
                          __html: item?.courseDesc,
                        }}
                      />
                    <p className="uploaded-time">{moment(`${item.created_on}`).startOf('minute').fromNow()}</p>
                  </div>
                  </Link>
                  <div className="uploadedBox-wrap-image">
                  <Link to={`/courses_detail/${item.slug}`} className="d-block"  style={{maxWidth: '101px',height: '70px',width: '100%'}}>
                    <img src={item.thumb_image} alt="" />
                  </Link>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
