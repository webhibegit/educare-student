import { useEffect } from "react";
import { useState } from "react";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import start from "../../assets/images/icon/start.png"
import archivetick from '../../assets/images/icon/archive-tick.png'
import hrs from '../../assets/images/icon/hrs.png'
import nocoursefound from "../../assets/no-course-found.png"
import Loader from '../../Component/Loader/DotLoading'
import { textAlign } from "@mui/system";


export default function AllFavouriteCourse({searchData}){
    const [favouriteCourse,setFvouriteCourse]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        if(searchData.length>=1){
          setFvouriteCourse(searchData)
          // console.log("sdufgvsudfhds");
        }
        else{
          setFvouriteCourse([])
          fetchFavouriteCourse()
        }
    },[searchData])

  const fetchFavouriteCourse=async()=>{
    setLoading(true)
    let result=await HttpClient.requestData("course/all-fevourite","GET")
    if(result && result.status){
        setFvouriteCourse(result.data)
    }
     setLoading(false)
  }
  const favouriteCourseNew=async(id)=>{
    let data={
      courseID:id
    }
    let result=await HttpClient.requestData("course/add-fevourite","POST",data)
    // console.log("add favourite",result);
    fetchFavouriteCourse()
    toast.success(result.message)

 }
//  console.log(favouriteCourse );
// console.log(searchData);


    return(
        <>
            {loading ? <div style={{position:"sticky",textAlign:"center",width:"90%"}}><Loader/></div>
      :  <div className="uploaded_courses_wrapper">
                    { favouriteCourse.length>=1 ?
                    favouriteCourse.map((item, index) => {
                      return (
                        <div key={index} className="uploaded_courses_wrapper_item">
                          <div className="section-details pos-prpr">
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
                            
                          </div>
                          <Link to={`/courses_detail/${item?.slug}`}>
                          <img
                            // src="./images/design1.png"
                            src={item?.thumb_image}
                            style={{height:"200px"}}

                            alt=""
                            className="img-mob"
                          />
                          </Link>
                          <h3 className="design-title">
                            {
                                item?.courseName
                            }
                          </h3>
                          <div className="section-details">
                            <p style={{ fontWeight: 500, fontSize: "16px" }}>
                              <img src={start} />
                              {item?.avgRating??"00"}
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
                                <img src={item?.TeachersData?.image} />
                              </div>
                              {item?.TeachersData?.name}
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
                    })
                  :
                 <div style={{position:"sticky",width:"100%",height:"100vh", textAlign:"center"}}> <img style={{height:"200px"}}  src={nocoursefound}></img></div>
                  }
                  </div>}
        </>
    )
}