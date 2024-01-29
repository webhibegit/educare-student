import React, { useEffect, useState } from "react";

import HttpClient from "../../utils/HttpClient";
import { useSelector } from "react-redux";
import { CourseData } from "../../Redux/reducer/SingleCourseData";
import { Link, useParams } from "react-router-dom";
import ratingStar from "../../assets/images/icon/ratingStar.png";
import ReactStars1 from "react-rating-stars-component";
import { useOutletContext } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { RatingStar } from "rating-star";
import CourseOverViewCard from "./CourseOverViewCard";
import TotalSrusentAndRatind from "./TotalStudent&Rating";
import TotalStudentAndRatind from "./TotalStudent&Rating";

export default function CourseOverview() {
  const [contentData, setContentData] = useState([]);
  const { CourseData } = useSelector((state) => state.SingleCourseData);
  const [reviewData, setReviewData] = useState([]);
  const [averageRating, setAverageRating] = useState();
  const {id,teacherId} = useOutletContext()

  // const [viewReviewByRating,setViewReviewByRating]=useState([])
  const [review5, setReview5] = useState([]);
  const [review4, setReview4] = useState([]);
  const [review3, setReview3] = useState([]);
  const [review2, setReview2] = useState([]);
  const [review1, setReview1] = useState([]);
  const [totalRating, setTotalRating] = useState([]);
  const[teacher,setTeacher]=useState([])

  const {state} = useLocation();
  const{TeacherID,ID}=state
  
  // console.log(TeacherID);

  // console.log(id);
  useEffect(() => {
    fetchCourseContent();
    fetchAverageRating();
    fetchViewReviewByRating();
    fetchReview();
     fetchTeacher()
  }, []);

  async function fetchCourseContent() {
    const result = await HttpClient.requestData(
      `course/Curriculum/${ID}`,
      "GET"
    );
    if (result && result.status) {
      setContentData(result.data);
    }
  }
  // console.log(contentData);

  const fetchReview = async () => {
    const result = await HttpClient.requestData(`viewReview/${ID}`);
    // console.log(result);
    if (result && result.status) {
      setReviewData(result.data);
    }
  };
  const fetchAverageRating = async () => {
    let result = await HttpClient.requestData(`viewAverageRating/${ID}`, "GET");
    if (result && result.status) {
      // console.log(result);
      setAverageRating(result.data[0]?.averageRating);
    }
  };
  const fetchViewReviewByRating = async () => {
    const result = await HttpClient.requestData(
      `viewReviewByRating/${ID}`,
      "GET"
    );
    if (result && result.status) {
      setTotalRating(result.data);

      const filterReview5 = result.data.filter((e) => {
        return e.rating == 5;
      });
      const filterReview4 = result.data.filter((e) => {
        return e.rating == 4;
      });
      const filterReview3 = result.data.filter((e) => {
        return e.rating == 3;
      });
      const filterReview2 = result.data.filter((e) => {
        return e.rating == 2;
      });
      const filterReview1 = result.data.filter((e) => {
        return e.rating == 1;
      });
      // console.log(filterReview5);
      setReview5(filterReview5);
      setReview4(filterReview4);
      setReview3(filterReview3);
      setReview2(filterReview2);
      setReview1(filterReview1);
    }
  };
  //  console.log(review4);
  const calculateRating = (val) => {
    let Rating = totalRating.reduce((total, item) => total + item.total, 0);
    // console.log("totalrating",Rating);
    // console.log("totalrating",totalRating);
    if (totalRating.length > 0) {
      let filter = totalRating.filter((item) => item.rating == val);
      let avgRating = ((filter[0]?.total ?? 0) * 100) / Rating;
      // console.log("avg",avgRating);
      return avgRating;
    }
  };

 
const fetchTeacher=async()=>{
     let result= await HttpClient.requestData(`course/techersDetails/${TeacherID}`,"GET")
      // console.log(result);
    if(result && result.status){
      setTeacher(result.data)
    }
   
}

  return (
    <>
      <div className="row">
        <div className="col-md-11 col-11 max_width_Added">
          <div className="dashboard_Style_Back">
            <div
              className="py-4 px-0"
              style={{ maxWidth: "1000px", margin: "0 auto" }}
            >
              <div className="_masterclass_main_box1 py-2">
                <div className="row">
                  <CourseOverViewCard id={ID}/>
                  
                  <div className="col-lg-8 col-md-12 col-12 mb-2">
                    <div className="_masterclass_box_wrapper1 pt-3">
                      <div className="d-block justify-content-between d-md-flex d-lg-block d-xl-flex">
                        <div className="d-flex justify-content-start skylar py-2">
                          <div className="skylar_inner" style={{maxWidth: '100%',width: '129px', height: '129px',borderRadius: '12px',overflow: 'hidden'}}>
                            <img
                              src={teacher?.image}
                              alt="Skylar Siphron"
                              className="img-fluid"
                              style={{width:"129px",height:"auto", objectFit : 'cover'}}
                            />
                          </div>
                          <div className="ml-3">
                            <span>Instructor</span>
                            <p>{teacher?.name}</p>
                            <a href="">View Profile</a>
                          </div>
                        </div>
                        <Link to={`/booking_live_choaing/${TeacherID}`} className="">
                          <button className="btn mt-3">
                            Book Individual Coaching Call
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <TotalStudentAndRatind
                  TeacherID={TeacherID}
                  CourseID={ID}
                  />
                  <div className="col-xl-7 col-lg-6 col-md-6 col-12 mb-2">
                    <div className="_masterclass_box_wrapper1">
                      <h5 className="shor_Des pb-2">Short Description</h5>
                      <div className="short_DesParaPtag"
                        dangerouslySetInnerHTML={{
                          __html: CourseData?.courseDesc,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-12 mb-2">
                    <div className="learn1">
                      <h1 className="learn-title">what you will learn?</h1>
                      <div className="learnBox pb-1">
                        <div className="leranBoxItem gappingstate p-0">
                          <ul>
                            {CourseData?.learnAbout.map((item, index) => {
                              return (
                                <li key={index}>
                                  <span>{item}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10 col-12 mb-2">
                    {/*---Accordian---*/}
                    <div
                      className="accordion md-accordion custom-accordian1"
                      id="accordionEx1"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <h1 className="faq-title">Curriculum</h1>
                      {contentData?.map((item, index) => {
                        return (
                          <div className="card" key={index}>
                            <div
                              className="card-header"
                              role="tab"
                              id="Curriheading1"
                            >
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-parent="#accordionEx1"
                                href={"#Curricollapse" + index}
                                aria-expanded="false"
                                aria-controls={"Curricollapse" + index}
                              >
                                <h5 className="mb-0">
                                  <div>
                                    {item.secTitle}
                                    <span className="videos">
                                      {item.sectionData.length} item
                                    </span>
                                  </div>{" "}
                                  <div className="d-flex aling-items-center">
                                    <span className="mins">24 mins</span>
                                    <i className="fa fa-angle-down rotate-icon" />
                                  </div>
                                </h5>
                              </a>
                            </div>

                            <div
                              id={"Curricollapse" + index}
                              className="collapse"
                              role="tabpanel"
                              aria-labelledby="Curriheading1"
                              data-parent="#accordionEx1"
                            >
                              {item.sectionData.map((data, ind) => {
                                return (
                                  <div key={ind} className="card-body customBOdyCard">
                                    {data.contentName}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/*--End Accordian--*/}
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10 col-12 mb-2">
                    {/*---Accordian---*/}
                    <div
                      className="accordion md-accordion custom-accordian1"
                      id="accordionEx2"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <h1 className="faq-title">FAQ’S</h1>
                      {CourseData?.FAQ.map((item, index) => {
                        return (
                          <div className="card" key={index}>
                            <div
                              className="card-header"
                              role="tab"
                              id="headingTwo1"
                            >
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-parent="#accordionEx2"
                                href={`#collapseTwo${index}`}
                                aria-expanded="false"
                                aria-controls={"collapseTwo" + index}
                              >
                                <h5 className="mb-0">
                                  {item.question}
                                  <i className="fa fa-angle-down rotate-icon" />
                                </h5>
                              </a>
                            </div>
                            <div
                              id={"collapseTwo" + index}
                              className="collapse"
                              role="tabpanel"
                              aria-labelledby="headingTwo1"
                              data-parent="#accordionEx2"
                            >
                              <div className="card-body customBOdyCard">{item.answer}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/*--End Accordian--*/}
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10 col-12 mb-2">
                    <div className="review-section" id="section4">
                      <h1 className="review-title">Reviews</h1>
                      <h6 className="givenReview">
                        Total {reviewData?.length} reviews given
                      </h6>
                      <div className="review-wrapper">
                        <div className="reviewStar">
                          <h1>{averageRating ?? 0}</h1>
                          <h2 className="outOf">out of</h2>
                          <h3 className="totalPoint">5.00</h3>
                        </div>
                        <div className="reviewProgress">
                          <div className="reviewItem">
                            <h4>5</h4>
                            <img src={ratingStar} />
                            <div
                              className="progress"
                              style={{
                                width: `${calculateRating(5)}%`,

                                background: "#FFA927",
                                borderRadius: 0,
                              }}
                            />
                          </div>
                          <div className="reviewItem">
                            <h4>4</h4>
                            <img src={ratingStar} />
                            <div
                              className="progress"
                              style={{
                                width: `${calculateRating(4)}%`,
                                background: "#FFA927",
                                borderRadius: 0,
                              }}
                            />
                          </div>
                          <div className="reviewItem">
                            <h4>3</h4>
                            <img src={ratingStar} />
                            <div
                              className="progress"
                              style={{
                                width: `${calculateRating(3)}%`,
                                background: "#FFA927",
                                borderRadius: 0,
                              }}
                            />
                          </div>
                          <div className="reviewItem">
                            <h4>2</h4>
                            <img src={ratingStar} />
                            <div
                              className="progress"
                              style={{
                                width: `${calculateRating(2)}%`,
                                background: "#FFA927",
                                borderRadius: 0,
                              }}
                            />
                          </div>
                          <div className="reviewItem">
                            <h4>1</h4>
                            <img src={ratingStar} />
                            <div
                              className="progress"
                              style={{
                                width: `${calculateRating(1)}%`,
                                background: "#FFA927",
                                borderRadius: 0,
                              }}
                            />
                          </div>
                        </div>
                        <div className="reviewCount">
                          <h5>{review5[0]?.total ?? 0}</h5>
                          <h5>{review4[0]?.total ?? 0}</h5>
                          <h5>{review3[0]?.total ?? 0}</h5>
                          <h5>{review2[0]?.total ?? 0}</h5>
                          <h5>{review1[0]?.total ?? 0}</h5>
                        </div>
                      </div>
                      <div className="commentWrapper">
                        {reviewData?.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="commentWrap"
                              style={{ justifyContent: "start" }}
                            >
                              <div
                                className="profileImage"
                                style={{maxWidth: '54px', width: '100%' ,height: '54px',overflow : 'hidden', borderRadius: '50%'}}
                              >
                                <img
                                  src={value?.studentDetails[0]?.image}
                                  alt="Profile"
                                  style={{ width: "100%", height: '100%', objectFit : "cover" }}
                                />
                              </div>
                              <div className="commentdetails ml-md-4 w-100">
                                <div className="commentTop">
                                  <div
                                    className="commenttopLeft d-flex"
                                    style={{ alignItems: "start" }}
                                  >
                                    <h6 className="name mb-0">
                                      {value?.studentDetails[0]?.fristName}{" "}
                                      {value?.studentDetails[0]?.lastName}{" "}
                                    </h6>
                                    {/* </div>
                              <div> */}
                                    <span
                                      className="d-block "
                                      style={{ marginTop: "-7px" }}
                                    >
                                      <ReactStars1
                                        count={5}
                                        edit={false}
                                        // onChange={ratingChanged}
                                        value={value.rating}
                                        size={24}
                                        activeColor="#ffd700"
                                      />
                                    </span>
                                  </div>
                                  {/* <div className="commenttopRight">
                                  <h5 className="time m-0">5 months ago</h5>
                                </div> */}
                                </div>
                                <div className="commentBottom">
                                  <p>{value.review}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        <div style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            className="btn btn_more_reviews"
                            style={{ border: reviewData.length < 10 && "none" }}
                          >
                            {reviewData.length > 10
                              ? "Show more review"
                              : reviewData.length === 0
                              ? "No Review Found"
                              : ""}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
