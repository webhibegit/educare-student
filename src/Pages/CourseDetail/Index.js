import React, { useEffect, useState } from "react";
import ratingStar from "../../assets/images/icon/ratingStar.png";
import duration from "../../assets/images/icon/duration.png";
import formatonline from "../../assets/images/icon/formatonline.png";
import loyalty from "../../assets/images/icon/loyalty.png";
import dashicons_arrowdownalt2 from "../../assets/images/icon/dashicons_arrow-down-alt2.png";
import ReactHlsPlayer from "react-hls-player";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import ReactPlayer from "react-player";
import { RatingStar } from "rating-star";
import { useNavigate } from "react-router-dom";
import ReactStars1 from "react-rating-stars-component";
import CourseTeacher from "./CourseTeacher";
import CourseCurriculum from "./CourseCurriculum";
import Loader from "../../Component/Loader/Loader";
import StripePayment from "../../Component/StripePayment/stripePayment";

export default function CourseDetail() {
  const [shom, upMoree] = useState();
  const [singleCourse, setSingleCourse] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState();
  const [reviewText, setReviewText] = useState("");
  const [reviewData, setReviewData] = useState([]);
  const [averageRating, setAverageRating] = useState();
  // const [viewReviewByRating,setViewReviewByRating]=useState([])
  const [review5, setReview5] = useState([]);
  const [review4, setReview4] = useState([]);
  const [review3, setReview3] = useState([]);
  const [review2, setReview2] = useState([]);
  const [review1, setReview1] = useState([]);
  const [totalRating, setTotalRating] = useState([]);
  const [teacherData, setTeacherData] = useState();
  const [teacherID, setTeacherID] = useState("");
  const [id, setID] = useState("");
  const [stripeModal,setStripeModal]=useState(false)
  const[coursePrice,setCoursePrice]=useState()
  // console.log(reviewData);

  //  const id="63b54a7c51466950123c2448"

  // console.log(teacherId);
  useEffect(() => {
    fetchCourseId();
    fetchCourse();
    fetchAverageRating();
    checkEnrollCourse();
    fetchReview();
    fetchViewReviewByRating();
    window.scrollTo(0, 0);
  }, [id]);
  // console.log(teacherData);

  const fetchCourseId = async () => {
    let result = await HttpClient.requestData(`fetchSlugToId/${slug}`, "GET");
    if (result && result.status) {
      setID(result?.data?._id);
    }
  };

  const checkEnrollCourse = async () => {
    let data = {
      courseId: id,
    };
    const result = await HttpClient.requestData("checkBuyStatus", "POST", data);
    if (result && result.status && result.BuyStatus) {
      setShowReview(true);
    }
  };

  const fetchCourse = async () => {
    let result = await HttpClient.requestData(`course/single/${id}`, "GET");
    if (result && result.status) {
      setSingleCourse(result.data);
      setTeacherID(result.data.teacherId);
      let result1 = await HttpClient.requestData(
        `course/techersDetails/${result.data.teacherId}`,
        "GET"
      );
      // console.log(result1);
      if (result1 && result1.status) {
        setTeacherData(result1.data);
      }
    }
  };

  const enrollCourse = async () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    let data = {
      courseId: id,
      paymentId: "likh4g56hljkiu" + getRandomInt(1000),
      clientId: "fcgdgfg64564gd",
      teacherId: teacherID,
    };
    // console.log(data);
    // console.log(Math.random());
    let result = await HttpClient.requestData("course/addEnroll", "POST", data);
    if (result && result.status) {
      toast.success(result.message);
      checkEnrollCourse();
    } else {
      toast.warn(result.message);
    }
  };

  const onRatingChange = (score) => {
    setRating(score);
  };

  const postReview = async () => {
    if (reviewText !== "" && rating >= 1) {
      const data = {
        courseId: id,
        teacherId: teacherID,
        review: reviewText,
        rating: rating,
      };
      // console.log(rating);
      const result = await HttpClient.requestData("addReview", "POST", data);
      // console.log(result);
      if (result && result.status) {
        toast.success(result.message);
        fetchReview();
        fetchAverageRating();
        fetchViewReviewByRating();
      } else {
        toast.warn(result.message);
      }
    } else {
      toast.warn("please fill All field");
    }
  };
  // console.log(rating);

  const fetchReview = async () => {
    const result = await HttpClient.requestData(`viewReview/${id}`);
    // console.log(result);
    if (result && result.status) {
      setReviewData(result.data);
    }
  };
  const fetchAverageRating = async () => {
    let result = await HttpClient.requestData(`viewAverageRating/${id}`, "GET");
    if (result && result.status) {
      // console.log(result);
      setAverageRating(result.data[0].averageRating);
    }
  };
  const fetchViewReviewByRating = async () => {
    const result = await HttpClient.requestData(
      `viewReviewByRating/${id}`,
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

  const toggleMre = () => {
    upMoree(!shom);
    console.log(shom);
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        limit={3}
        theme="colored"
      />
      {singleCourse ? (
        <div className="container-fluid" style={{ padding: '0px' }}>
          <div className="p-3">
            <div className="_enrollment">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-12">
                  <div className="back_btn">
                    <input
                      type="button"
                      className="btn btn-back"
                      defaultValue="Back"
                      onClick={() => navigate('/all_courses')}
                    />
                    <h1 className="video-course-title">{singleCourse?.courseName}</h1>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-12 col-xl-9">
                  <div className="video-wrapper" id="section1">
                    <div className="video-wrap">
                      <ReactPlayer
                        // src={this.props.src}
                        // url={
                        //   "https://marrydimonds3-output.s3.us-east-1.amazonaws.com/educare/8925be40-3bcd-11ed-88ed-1d95f78b66de-8925be41-3bcd-11ed-88ed-1d95f78b66de/playlist.m3u8"
                        // }
                        url={singleCourse?.video}
                        autoPlay={false}
                        controls={true}
                        playing={true}
                        width="100%"
                        height="auto"
                      />
                      {/* <video
                      style={{ width: "800px" }}
                      autoPlay=""
                      muted=""
                      loop=""
                      id="myVideo"
                    >
                    <source src="https://marrydimonds3-output.s3.us-east-1.amazonaws.com/educare/8925be40-3bcd-11ed-88ed-1d95f78b66de-8925be41-3bcd-11ed-88ed-1d95f78b66de/playlist.m3u8" type="video/m3u8" />   */}
                      {/* <ReactHlsPlayer
                      src={singleCourse?.video}
                      autoPlay={true}
                      controls={true}
                      width="100%"
                      height="auto"
                    /> */}
                      {/* </video> */}
                      {/* <div
                      className="play_btn"
                      onClick={() => playVideo()}
                      id="myBtn"
                    >
                      <img src="" />
                    </div> */}
                    </div>
                  </div>
                  <div className="courseIntroWrapper">
                    <div className="courseIntroWrap rating">
                      <div className="iconBoxItem">
                        <div className="iconBox" style={{ background: 'rgba(255, 199, 0, 0.1)' }}>
                          <img src={ratingStar} />
                        </div>
                        <div className="textBox">
                          <h6>Rating</h6>
                          <h5>{averageRating ?? 0}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="courseIntroWrap duration">
                      <div className="iconBoxItem">
                        <div className="iconBox" style={{ background: 'rgba(147, 33, 175, 0.1)' }}>
                          <img src={duration} />
                        </div>
                        <div className="textBox">
                          <h6>Duration</h6>
                          <h5>{singleCourse?.duration}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="courseIntroWrap f4mat">
                      <div className="iconBoxItem">
                        <div className="iconBox" style={{ background: 'rgba(175, 33, 76, 0.1)' }}>
                          <img src={formatonline} />
                        </div>
                        <div className="textBox">
                          <h6>Format</h6>
                          <h5>{singleCourse?.courseType}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="courseIntroWrap loyalty">
                      <div className="iconBoxItem">
                        <div className="iconBox" style={{ background: 'rgba(255, 168, 0, 0.1)' }}>
                          <img src={loyalty} />
                        </div>
                        <div className="textBox">
                          <h6>Loyalty Points</h6>
                          <h5>50</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="descriptionBox">
                    <div
                      className={shom ? '' : 'opacityHEight'}
                      dangerouslySetInnerHTML={{
                        __html: singleCourse?.courseDesc,
                      }}
                    ></div>
                    <button type="button" className="btn showmore" onClick={toggleMre}>
                      {shom ? 'Show Less' : 'Show More'}
                      {shom ? <i className="fa-solid fa-angle-up"></i> : <img src={dashicons_arrowdownalt2} />}
                      {/* <img src={dashicons_arrowdownalt2} /> */}
                    </button>
                  </div>
                  <div className="learn">
                    <h1 className="learn-title">What will you learn? </h1>
                    <div className="learnBox">
                      <div className="leranBoxItem p-0">
                        <ul className="d-flex align-items-center flex-wrap px-3">
                          {singleCourse?.learnAbout.map((item, index) => {
                            return (
                              <li key={index}>
                                <span>{item}</span>
                              </li>
                            );
                          })}
                        </ul>
                        <a href="" className="d-block showMoreBTn pb-4">
                          Show More <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*---Accordian---*/}

                  <CourseCurriculum id={id} />

                  {/*--End Accordian--*/}

                  <div
                    className="accordion md-accordion custom-accordian"
                    id="accordionEx1"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <h1 className="faq-title">FAQ’s</h1>
                    {singleCourse?.FAQ.map((value, index) => (
                      <div className="card" key={index}>
                        <div className="card-header" role="tab" id="headingTwo1">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            data-parent={`#accordionEx${index + 1}`}
                            href={`#collapseTwo${index + 1}`}
                            aria-expanded="false"
                            aria-controls={`#collapseTwo${index + 1}`}
                          >
                            <h5 className="mb-0">
                              {value.question}
                              <i className="fa fa-angle-down rotate-icon" />
                            </h5>
                          </a>
                        </div>
                        <div
                          id={`collapseTwo${index + 1}`}
                          className="collapse"
                          role={`tabpane${index + 1}`}
                          aria-labelledby={`headingTwo1${index + 1}`}
                          data-parent={`#accordionEx1${index + 1}`}
                        >
                          <div className="card-body customBOdyCard">{value.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/*--End Accordian--*/}
                  <CourseTeacher teacherData={teacherData} teacherID={teacherID} />

                  <div className="review-section" id="section4">
                    <h1 className="review-title">Reviews</h1>
                    <h6 className="givenReview">Total {reviewData.length} reviews given</h6>
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

                              background: '#FFA927',
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
                              background: '#FFA927',
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
                              background: '#FFA927',
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
                              background: '#FFA927',
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
                              background: '#FFA927',
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
                          <div key={index} className="commentWrap" style={{ justifyContent: 'start' }}>
                            <div
                              className="profileImage"
                              style={{
                                borderRadius: '50%',
                                maxWidth: '54px',
                                height: '54px',
                                width: '100%',
                                overflow: 'hidden',
                              }}
                            >
                              <img
                                src={value?.studentDetails[0]?.image}
                                alt="Profile"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                }}
                              />
                            </div>
                            <div className="commentdetails ml-md-4 w-100">
                              <div className="commentTop">
                                <div className="commenttopLeft d-flex" style={{ alignItems: 'start' }}>
                                  <h6 className="name mb-0">
                                    {value?.studentDetails[0]?.fristName} {value?.studentDetails[0]?.lastName}{' '}
                                  </h6>
                                  {/* </div>
                              <div> */}
                                  <span className="d-block " style={{ marginTop: '-7px' }}>
                                    <ReactStars1
                                      count={5}
                                      edit={false} // onChange={ratingChanged}
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

                      <div style={{ textAlign: 'center' }}>
                        <button
                          type="button"
                          className="btn btn_more_reviews"
                          style={{ border: reviewData.length < 10 && 'none' }}
                        >
                          {reviewData.length > 10
                            ? 'Show more review'
                            : reviewData.length === 0
                            ? 'No Review Found'
                            : ''}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3 col-12">
                  <div
                    className="course_CurriculAM"
                    style={{
                      position: 'fixed',
                      width: '17rem',
                      right: '0',
                      bottom: '-30px',
                      top: '100px',
                    }}
                  >
                    <div className="course_btn">
                      {showReview ? (
                        <div>
                          <button
                            type="button"
                            className="btn btn_course"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Add Review
                          </button>

                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h2 className="modal-title" id="exampleModalLabel" style={{ fontSize: '18px' }}>
                                    Add a new review
                                  </h2>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="supaviews">
                                    <div className="supaviews__add">
                                      <div className="supaview">
                                        <form id="review">
                                          <div className="mb-1 new_rate">
                                            <span className="d-block">Rating</span>
                                            <RatingStar
                                              clickable
                                              maxScore={5}
                                              id="123"
                                              rating={rating}
                                              value
                                              onRatingChange={onRatingChange}
                                            />
                                          </div>
                                          <div className="supaview__copy">
                                            <label htmlFor="exampleFormControlTextarea1">
                                              We are happy for you . Tell us more
                                            </label>
                                            <textarea
                                              name="message"
                                              placeholder="Message"
                                              rows={5}
                                              style={{ color: 'black' }}
                                              onChange={e => setReviewText(e.target.value)}
                                              defaultValue={''}
                                            />
                                          </div>
                                          <h1
                                            style={{
                                              width: '200px',
                                              fontSize: '18px',
                                            }}
                                            className="supaview__submit m-0"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            onClick={() => {
                                              postReview();
                                            }}
                                          >
                                            Submit review
                                          </h1>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setStripeModal(true);
                            // enrollCourse()
                            setCoursePrice(singleCourse?.price ?? 0);
                          }}
                          className="btn btn_course"
                        >
                          Enroll Course for {singleCourse?.price ?? 0} USD
                          <span>0$</span>
                        </button>
                      )}
                    </div>

                    <div className="">
                      <nav id="myScrollspy" className="menuWrapper">
                        <ul>
                          {/* <button style={{ border: 0, background: "transparent" }}>
                        <li>
                          <span className="round-focus" />
                          <a href="#section1">Course Description</a>
                          <span className="line-focus" />
                        </li>
                      </button> */}
                          <li>
                            <a href="#section2" className="active_Scrollspy">
                              <span className="course_DescriptionSpan">Course Description </span>
                              <span className="line-focus" />
                            </a>
                          </li>
                          <li>
                            <a href="#section2">
                              <span className="course_DescriptionSpan">Curriculum </span>
                              <span className="line-focus" />
                            </a>
                          </li>
                          <li>
                            <a href="#accordionEx1">
                              <span className="course_DescriptionSpan">FAQ’s</span>
                              <span className="line-focus" />
                            </a>
                          </li>
                          <li>
                            <a href="#section3">
                              <span className="course_DescriptionSpan">Instructor Details</span>
                              <span className="line-focus" />
                            </a>
                          </li>
                          <li>
                            <a href="#section4">
                              <span className="course_DescriptionSpan">Reviews</span>
                              <span className="line-focus" />
                            </a>
                          </li>

                          {/* <button style={{ border: 0, background: "transparent" }}>
                        <li>
                          <span className="round-focus" />
                          <a href="#section1">Course Description</a>
                          <span className="line-focus" />
                        </li>
                      </button>
                      <li>
                        <a href="#section2">Curriculum</a>
                      </li>
                      <li>
                        <a href="#accordionEx1">FAQ’S</a>
                      </li>
                      <li>
                        <a href="#section3">Instructor Details</a>
                      </li>
                      <li>
                        <a href="#section4">Reviews</a>
                      </li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      {stripeModal && (
        <StripePayment
          coursePrice={coursePrice}
          setStripeModel={setStripeModal}
          id={id}
          teacherID={teacherID}
          checkEnrollCourse={checkEnrollCourse}
        />
      )}
    </>
  );
}
