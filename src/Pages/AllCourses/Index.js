import React, { useEffect, useState } from "react";
import HttpClient from "../../utils/HttpClient";
import love from "../../assets/images/icon/love.png";
import start from "../../assets/images/icon/ratingStar.png";
import archivetick from "../../assets/images/icon/clock.png";
import hrs from "../../assets/images/icon/remote.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllFavouriteCourse from "./AllFavourite";
import { useRef } from "react";
import { useCallback } from "react";
import AllPopularCourse from "./PopularCourse";
import Loader from "../../Component/Loader/Loader";

export default function AllCourses() {
  const [allCourses, setAllCourses] = useState([]);
  const [show, setShow] = useState("allCourse");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [favouriteData, setFavouriteData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchPopularData, setSearchPopularData] = useState([]);
  const [searchFavouriteData,setSearchFavouriteData]=useState([])

  useEffect(() => {
    fetchCourses();
    fetchFavouriteCourse();
  }, [page]);
  // console.log(allCourses);

  // console.log(page);

  const fetchSearchData = async (value) => {
    if (show === "allCourse") {
      // console.log(value);
      if (value.length > 0) {
        const data = {
          searchname: value,
        };

        let result = await HttpClient.requestData(
          "course/searchCourse",
          "POST",
          data
        );
        // console.log("searchCourse", result);
        if (result && result.status) {
          setAllCourses(result.data);
          setHasMore(false);
        }
      } else if (value == "") {
        setAllCourses([]);
        setPage(1);
        fetchCourses(page);
      }
    }
    if (show === "PopularCourse") {
      if (value.length > 0) {
        const data = {
          searchname: value,
        };

        let result = await HttpClient.requestData(
          "course/PopularSearchCourse",
          "POST",
          data
        );
        if (result && result.status) {
          setSearchPopularData(result.data);
          // setHasMore(false);
        // console.log("searchCourse", result.data);

        }
      }else{
        setSearchPopularData([])
      }
    }
    if(show==="favouriteCourse"){
      if (value.length > 0) {
        const data = {
          searchname: value,
        };

        let result = await HttpClient.requestData(
          "course/FevouriteSearchCourse",
          "POST",
          data
        );
        if (result && result.status) {
          setSearchFavouriteData(result.data);
          // setHasMore(false);
        // console.log("searchCourse", result.data);

        }
      }else{
        setSearchFavouriteData([])
      }
    }
  };

  const fetchFavouriteCourse = async () => {
    let result = await HttpClient.requestData("course/all-fevourite", "GET");
    // console.log(result);
    if (result && result.status) {
      setFavouriteData(result.data);
    }
  };
  const favouriteCourse = async (id) => {
    let data = {
      courseID: id,
    };
    let result = await HttpClient.requestData(
      "course/add-fevourite",
      "POST",
      data
    );
    // console.log("add favourite",result);
    if (result && result.status) {
      // toast.success(result.message);
      fetchFavouriteCourse();
    } else {
      // toast.success(result.message);
      fetchFavouriteCourse();
    }
  };

  const fetchCourses = async () => {
    // let page = 1;
    // alert("hh")
    // console.log(page);
    const result = await HttpClient.requestData(
      `all-course?page=${page}`,
      "GET"
    );
    console.log("res", result);
    if (result && result.status) {
      if (result.data.length < 1) {
        setHasMore(false);
      } else {
        setHasMore(true);
        setAllCourses((prev) => {
          return [...prev, ...result.data];
        });
      }
    }
  };
  // console.log(hasMore);
  let showCourses = async (value) => {
    // console.log(value);
    setShow(value);
  };

  const observer = useRef();

  const lastCourseElement = useCallback((node) => {
    // console.log(node);
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(false);
      }
    });
    if (node) observer.current.observe(node);
  });

  // console.log("allCourses",allCourses);

  return (
    <>
      {allCourses.length >= 1 ? (
        <>
          <div className="container-fluid top-section bg-white">
            <div className="p-3">
              <div className="_enrollment">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-12">
                    <div className="all_course">
                      {show === 'allCourse' ? (
                        <h2>All Courses</h2>
                      ) : show === 'favouriteCourse' ? (
                        <h2>Favourite Courses</h2>
                      ) : show === 'PopularCourse' ? (
                        <h2>Popular Course</h2>
                      ) : (
                        ''
                      )}

                      <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback" />
                        <input
                          onChange={e => {
                            fetchSearchData(e.target.value);
                            setSearchData(e.target.value);
                          }}
                          type="text"
                          value={searchData}
                          className="form-control"
                          placeholder="Search Courses"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="p-3">
              <div className="_enrollment">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-12">
                    <div className="tabmenusection">
                      <ul className="nav mb-2" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link allcourseActive "
                            onClick={() => {
                              setShow('allCourse');
                              setSearchData('');
                            }}
                          >
                            All
                          </a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Development</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Art</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Math</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">More</a>
                      </li> */}
                      </ul>
                      <div style={{ borderRadius: '10px', background: '#fff' }}>
                        <button className="btn">Sory By: </button>
                        <select
                          onChange={e => {
                            showCourses(e.target.value);
                            setSearchData('');
                          }}
                        >
                          <option value="allCourse">All Courses</option>
                          <option value="PopularCourse">Popular Class</option>
                          <option value="favouriteCourse">Favourites</option>
                          <option value="allCourse">Recently Uploaded</option>
                        </select>
                        {/* <ul className="dropdown-menu" style={{width:"100px"}}>
                        <li>
                          <a className="dropdown-item">
                          Popular Class
                          </a>
                        </li>
                        <li>
                          <a onClick={()=>setShow("favouriteCourse")} className="dropdown-item" >
                          Favourite
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                          Recently Uploaded
                          </a>
                        </li>
                      </ul> */}
                      </div>
                    </div>
                    {show === 'allCourse' ? (
                      <div className="uploaded_courses_wrapper">
                        {allCourses.map((item, index) => {
                          if (allCourses.length === index + 1) {
                            return (
                              <div ref={lastCourseElement} key={index} className="uploaded_courses_wrapper_item">
                                <div className="section-details pos-prpr">
                                  <span className="span-tag">Get 50 Loyalty points</span>
                                  {favouriteData.find(value => value._id == item._id) ? (
                                    <span
                                      onClick={() => {
                                        favouriteCourse(item._id);
                                      }}
                                      className="span-whish d-flex align-items-center justify-content-center"
                                      style={{
                                        background: '#ff00004a',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <i className="fa fa-heart" aria-hidden="true" style={{ color: 'red' }}></i>
                                    </span>
                                  ) : (
                                    <span
                                      onClick={() => {
                                        favouriteCourse(item._id);
                                      }}
                                      style={{
                                        cursor: 'pointer',
                                      }}
                                      className="span-whish d-flex align-items-center justify-content-center"
                                    >
                                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </span>
                                  )}
                                </div>
                                <Link to={`/courses_detail/${item.slug}`} className="couseSImage">
                                  <img
                                    // src="./images/design1.png"
                                    src={item.thumb_image}
                                    alt=""
                                    className="img-mob"
                                  />
                                </Link>
                                <h3 className="design-title">{item.courseName}</h3>
                                <div className="section-details">
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: '16px',
                                    }}
                                  >
                                    <img src={start} className="" />
                                    {item.avgRating ?? '0.0'}
                                  </p>
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: '16px',
                                    }}
                                  >
                                    <img src={archivetick} />5 hrs
                                  </p>
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: '16px',
                                    }}
                                  >
                                    <img src={hrs} />
                                    Online
                                  </p>
                                </div>
                                <span className="border-line" />
                                <div className="section-details">
                                  <p>
                                    <div className="courses_Image_Person">
                                      <img src={item?.teachersData?.image} />
                                    </div>
                                    {item?.teachersData?.name}
                                  </p>
                                  <p
                                    style={{
                                      fontStyle: 'normal',
                                      fontWeight: 700,
                                      fontSize: '16px',
                                      lineHeight: '24px',
                                      color: '#171725',
                                    }}
                                  >
                                    ${item.price ?? 0}
                                  </p>
                                </div>
                              </div>
                            );
                          } else {
                            return (
                              <div key={index} className="uploaded_courses_wrapper_item">
                                <div className="section-details pos-prpr">
                                  <span className="span-tag">Get 50 Loyalty points</span>
                                  {favouriteData.find(value => value._id == item._id) ? (
                                    <span
                                      onClick={() => {
                                        favouriteCourse(item._id);
                                      }}
                                      className="span-whish d-flex align-items-center justify-content-center"
                                      style={{
                                        background: '#ff00004a',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <i className="fa fa-heart" aria-hidden="true" style={{ color: 'red' }}></i>
                                    </span>
                                  ) : (
                                    <span
                                      onClick={() => {
                                        favouriteCourse(item._id);
                                      }}
                                      style={{ cursor: 'pointer' }}
                                      className="span-whish d-flex align-items-center justify-content-center"
                                    >
                                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </span>
                                  )}
                                </div>
                                <Link
                                  to={`/courses_detail/${item?.slug}`}
                                  className="couseSImage"
                                  style={{ display: 'block' }}
                                >
                                  <img
                                    // src="./images/design1.png"
                                    src={item.thumb_image}
                                    alt=""
                                    className="img-mob"
                                  />
                                </Link>
                                <h3 className="design-title">{item.courseName}</h3>
                                <div className="section-details">
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: '16px',
                                    }}
                                  >
                                    <img src={start} />
                                    {item.avgRating ?? '0.0'}
                                  </p>
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: '16px',
                                    }}
                                  >
                                    <img src={archivetick} />5 hrs
                                  </p>
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: '16px',
                                    }}
                                  >
                                    <img src={hrs} />
                                    Online
                                  </p>
                                </div>
                                <span className="border-line" />
                                <div className="section-details">
                                  <p>
                                    <div className="courses_Image_Person">
                                      <img src={item.teachersData?.image} />
                                    </div>
                                    {item?.teachersData?.name}
                                  </p>
                                  <p
                                    style={{
                                      fontStyle: 'normal',
                                      fontWeight: 700,
                                      fontSize: '16px',
                                      lineHeight: '24px',
                                      color: '#171725',
                                    }}
                                  >
                                    ${item.price ?? 0}
                                  </p>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    ) : show === 'favouriteCourse' ? (
                      <AllFavouriteCourse searchData={searchFavouriteData} />
                    ) : show === 'PopularCourse' ? (
                      <AllPopularCourse searchData={searchPopularData} />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // :allCourses.length===0?
        // <h1 style={{textAlign:"center"}}>No Course Found</h1>
        <Loader />
      )}
    </>
  );
}
