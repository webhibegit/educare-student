import React from "react";
import love from "../../assets/images/icon/love.png";
import design1 from "../../assets/images/design1.png";
import start from "../../assets/images/icon/ratingStar.png";
import duration1 from "../../assets/images/icon/clock.png";
import hrs from "../../assets/images/icon/remote.png";
import profiledetails from "../../assets/images/icon/profile-details.png";
import HttpClient from "../../utils/HttpClient";
import { Link } from "react-router-dom";

export default function FavouriteCourseCard({
  courseName,
  thumb_image,
  avgRating,
  courseType,
  duration,
  TeachersData,
  price,
  fetchFunc,
  id,
  slug
}) {


    const favouriteCourseNew=async()=>{
        let data={
          courseID:id
        }
        let result=await HttpClient.requestData("course/add-fevourite","POST",data)
        // console.log("add favourite",result);
        fetchFunc()
        // toast.success(result.message)
    
     }
  return (
    <>
      <div className="uploaded_courses_wrapper_item">
        <div
          className="section-details pos-prpr"
          style={{ justifyContent: "space-between" }}
        >
          <span className="span-tag">Get 50 Loyalty points</span>
          <span
          onClick={()=>favouriteCourseNew()}
            className="span-whish d-flex align-items-center justify-content-center"
            style={{ background: "#ff00004a", cursor: "pointer" }}
          >
            <i
              className="fa fa-heart"
              aria-hidden="true"
              style={{ color: "red" }}
            ></i>
          </span>
        </div>
        <Link to={`/courses_detail/${slug}`}>

        <img src={thumb_image} alt="" className="img-mob" />
        </Link>
        <h3 className="design-title">{courseName}</h3>
        <div
          className="section-details"
          style={{ justifyContent: "space-between" }}
        >
          <p style={{ fontWeight: 500, fontSize: "16px" }}>
            <img
              src={start}
              className="img-fluid mr-1"
              style={{
                width: "19px",
                height: "18px",
                borderRadius: "50%",
              }}
            />
            <span>{avgRating}</span>
          </p>
          <p style={{ fontWeight: 500, fontSize: "16px" }}>
            <img
              src={duration1}
              className="img-fluid mr-1"
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
              }}
            />
            <span>{duration}</span>
          </p>
          <p style={{ fontWeight: 500, fontSize: "16px" }}>
            <img
              src={hrs}
              className="img-fluid mr-1"
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "0",
              }}
            />
            <span>{courseType}</span>
          </p>
        </div>
        <span className="border-line" />
        <div
          className="section-details"
          style={{ justifyContent: "space-between",marginBottom: '6px' }}
        >
          <p>
            <img src={TeachersData?.image} style={{width: '29px',height: '29px',borderRadius: '50%'}} />
            {TeachersData?.name}
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
            ${price ?? "00"}
          </p>
        </div>
      </div>
    </>
  );
}
