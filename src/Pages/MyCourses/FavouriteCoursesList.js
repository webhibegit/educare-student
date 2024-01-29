import React, { useEffect, useState } from "react";
import love from "../../assets/images/icon/love.png";
import design1 from "../../assets/images/design1.png";
import start from "../../assets/images/icon/start.png";
import duration from "../../assets/images/icon/duration.png";
import hrs from "../../assets/images/icon/hrs.png";
import profiledetails from "../../assets/images/icon/profile-details.png";
import HttpClient from "../../utils/HttpClient";
import FavouriteCourseCard from "./FavouriteCoursesCard";
import Loader from "../../Component/Loader/DotLoading"

export default function FavouriteCoursesList() {

    const [FavouriteCourse,setFavouriteCourse]=useState([])
    const[loading ,setLoading]=useState(false)

    useEffect(()=>{
        fetchFavouriteCourse()
    },[])

    const fetchFavouriteCourse=async()=>{
      setLoading(true)
        const result=await HttpClient.requestData(`course/all-fevourite`,"GET")
        // console.log(result);
        if(result&& result.data){
            setFavouriteCourse(result.data)
        }
        setLoading(false)
    }

    
  return (
    <>
      <div className="col-xl-5 col-lg-5 col-md-12 col-12 pl-0">
        <div className="card favourite_courses" style={{border:'0'}}>
          <div className="d-flex align-items-center justify-content-between">
            <p className="entry-header">Favourite Courses</p>
            <span>{FavouriteCourse.length} courses</span>
          </div>
          {loading && <div style={{position:"sticky",textAlign:"center",width:"90%"}}><Loader/></div>}
          {FavouriteCourse.map((item, index) => {
            return (
                <FavouriteCourseCard
                key={index}
                courseName={item.courseName}
                thumb_image={item.thumb_image}
                avgRating={item.avgRating}
                courseType={item.courseType}
                duration={item.duration}
                TeachersData={item.TeachersData}
                price={item.price}
                fetchFunc={fetchFavouriteCourse}
                id={item._id}
                slug={item.slug}
                />
            );
          })}
        </div>
      </div>
    </>
  );
}
