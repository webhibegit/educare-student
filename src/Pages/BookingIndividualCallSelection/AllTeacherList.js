import React, { useEffect, useState } from "react";
import live_man from "../../assets/images/icon/girl_live.png";
import teacher_profile_bg from "../../assets/images/teacher-profile-bg.png";
import star from "../../assets/images/icon/start.png";
import dollar from "../../assets/images/icon/dollar.png";
import HttpClient from "../../utils/HttpClient";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useCallback } from "react";


export default function AllTeacherList() {
  const [allTeacher, setAllTeacher] = useState([]);
  const [page,setPage]=useState(1)
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  const lastTeacherElement = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        // console.log("visible");
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(false)
      }
    });
    if (node) observer.current.observe(node);
  });


  useEffect(() => {
    fetchAllTeacher();
  }, [page]);

  const fetchAllTeacher = async () => {
    // let page=1
    let result = await HttpClient.requestData(`teacherList?page=${page}`, "GET");

    if (result && result.status) {
    if(result.data.length<1){
      setHasMore(false);

    }else{
      setHasMore(true)
      setAllTeacher((prev)=>{
        return [...prev, ...result.data];
      })

    }
    }
  };
  const fetchSearchTeacher=async(value)=>{
    if (value.length > 0) {
      const data = {
        searchname: value,
      };

      let result = await HttpClient.requestData(
        "SearchteacherList",
        "POST",
        data
      );
      console.log("searchTeacher", result);
      if (result && result.status) {
        setAllTeacher(result.data);
        setHasMore(false);
      }
    } else if (value == "") {
      setAllTeacher([]);
      setPage(1);
      fetchAllTeacher(page);
    }
  }

  // console.log(page);
  return (
    <>
    <div className="p-5">
    <div className="row">
        <div className="col-md-12">
          <div className="instructor-bottom-box">
            <form className="search">
              <div className="form-group" id="from-search" style={{position: "relative"}}>
                <input
                  type="search"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search Instructor"
                  onChange={(e)=>{
                    fetchSearchTeacher(e.target.value)
                  }}
                />
                <i
                  className="fa fa-search"
                  aria-hidden="true"
                  style={{ position: "absolute", top: 12, left: 25 }}
                />
              </div>
            </form>
            <div className="live-top-right-box">
              <a href="#" className="btn sort-btn">
                Sort By:
              </a>
              <select className="option-live ml-auto">
                <option>Most Popular</option>
                <option>Most Popular</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {allTeacher?.map((item, Index) => {
          if(allTeacher.length===Index +1){
            return(
              <div className="col-md-3" key={Index} ref={lastTeacherElement}> 
              <div className="last-content-box">
                <Link to={`/booking_live_choaing/${item._id}`}>
                <div className="last-top-section" style={{height:"106px",background:`url(${item?.image ?? teacher_profile_bg})`}}>
                  {/* <img src={item?.image ?? teacher_profile_bg} />{" "} */}
                </div>
                </Link>
                <div className="last-bootom-section">
                  <Link to={`/booking_live_choaing/${item._id}`}  className="last-img">
                    <img src={item?.image ?? live_man} />
                  </Link>
                  <h5>{item?.name ?? "Kadin Mango"}</h5>
                  
                  <h6 className="rate">
                    <a>
                      <img src={star} />
                    </a>
                    {item?.review ?? "00"}
                  </h6>
                  {/* <h6 className="rate">
                    <a href="#">
                      <img src={dollar} />
                    </a>
                    4.6/5
                  </h6> */}
                  {/* <div className="ins-details-wrap">
                <div className="ins-tap-btn-box">
                  <a href="#" className="btn ins-tap-btn">
                    Speacking
                  </a>
                </div>
                <div className="ins-tap-btn-box">
                  <a href="#" className="btn ins-tap-btn">
                    English
                  </a>
                </div>
                <div className="number-box">
                  <h6>+3</h6>
                </div>
              </div> */}
                  <div className="ins-view-btn-box">
                    <a href="#" className="btn ins-view-btn">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            )
          }else{
            return (
            <div className="col-md-3" key={Index}>
              <div className="last-content-box">
                <Link to={`/booking_live_choaing/${item._id}`}>
                <div className="last-top-section" style={{height:"106px",background:`url(${item?.image ?? teacher_profile_bg})`}}>
                  {/* <img src={item?.image ?? teacher_profile_bg} />{" "} */}
                </div>
                </Link>
                <div className="last-bootom-section">
                  <Link to={`/booking_live_choaing/${item._id}`}  className="last-img">
                    <img src={item?.image ?? live_man} />
                  </Link>
                  <h5>{item?.name ?? "Kadin Mango"}</h5>
                  
                  <h6 className="rate">
                    <a>
                      <img src={star} />
                    </a>
                    {item?.review ?? "00"}
                  </h6>
                  {/* <h6 className="rate">
                    <a href="#">
                      <img src={dollar} />
                    </a>
                    4.6/5
                  </h6> */}
                  {/* <div className="ins-details-wrap">
                <div className="ins-tap-btn-box">
                  <a href="#" className="btn ins-tap-btn">
                    Speacking
                  </a>
                </div>
                <div className="ins-tap-btn-box">
                  <a href="#" className="btn ins-tap-btn">
                    English
                  </a>
                </div>
                <div className="number-box">
                  <h6>+3</h6>
                </div>
              </div> */}
                  <div className="ins-view-btn-box">
                    <a href="#" className="btn ins-view-btn">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
          }
          
        })}
      </div>
    </div>
     
    </>
  );
}
