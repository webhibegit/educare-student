import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import CourseContent from "./CourseContent";
import { useSelector } from "react-redux";
import PlayVideo from "../../Redux/reducer/PlayVideo";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { setCourseData } from "../../Redux/reducer/SingleCourseData";
import sample from "../../assets/sample.pdf";
import { SocketConnect } from "../../Socket/socket";
import { toast, ToastContainer ,Zoom} from "react-toastify";


export default function MyCourseDetail() {
  const [showContent, setShowContent] = useState(false);
  const [courseData, setCourseDataa] = useState();
  // const { course_name, id } = useParams();
  const {slug}=useParams()
  const { videoData } = useSelector((state) => state.PlayVideo);
  const dispatch = useDispatch();
  // console.log(videoData);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [currenPage, setCurrentPage] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const[videoDuration,setVideoDuration]=useState()
  const [videoPlayed,setVideoPlayed]=useState()
  const [lastPausedTime,setLastPausedTime]=useState(0)
  const[id,setID]=useState("")
//  let id="63b54a7c51466950123c2448"
  function onDocumentLoadSuccess({ numPages }) {
    // console.log(numPages);
    setNumPages(numPages);
  }

  useEffect(() => {
    SocketConnect()

    window.$(".nav-link").click(function () {
      window.$(".nav-link.active").removeClass("active");
      window.$(this).addClass("active");
    });
    fetchCourseData();
    window.scrollTo(0,0)
    if(id!==""){
      setShowContent(true)
    }
  }, [id]);

  const fetchCourseData = async () => {
    let data= await HttpClient.requestData(`fetchSlugToId/${slug}`)
    // console.log(data);
    if(data && data.status){
      setID(data.data?._id)
      let result = await HttpClient.requestData(`course/single/${data.data?._id}`, "GET");
    // console.log("contentData", result);

    if (result && result.status) {
      setCourseDataa(result.data);
      setTeacherId(result.data.teacherId);
      dispatch(setCourseData(result.data));
    }
    }
    
  };
  const incrisePage = () => {
    if (numPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  const dicrisePage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const VideoDuration=(data)=>{
    // console.log(data);
    setVideoDuration(data)
  }
  const viewedVideo=async()=>{
    let data={
      courseId:id,
      sectionID:videoData.sectionID,
      contentID:videoData.contentID
    }
    let result = await HttpClient.requestData("course/video-view","POST",data)
    if(result && result.status){
      // alert(result.message)
    }
  }

const setWatchTime=async()=>{
  let data={
    time:videoPlayed-lastPausedTime,
    courseId:id
  }
  console.log("data",data);
  let result = await HttpClient.requestData("course/watchVideo","POST",data)
  // console.log(result,"result");
  if(result && result.status){
    setTimeout(() => {
      setLastPausedTime(videoPlayed-1)
    }, 1000);
  }
}
// console.log(lastPausedTime,"lastPausedTime");
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
      <div className="container-fluid p-md-0">
        <div className="p-3 p-md-0">
          <div className="_enrollment" style={{ marginLeft: "0" }}>
            <div className="row">
              <div
                className={
                  showContent
                    ? "col-md-9 col-lg-9 col-12"
                    : "col-md-12 col-lg-12 col-12"
                }
                style={{ padding: "0px" }}
              >
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-12">
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <div className="video_Cover">
                          {videoData?.type === "video" ? (
                            <ReactPlayer
                              url={videoData.link}
                              autoPlay={false}
                              controls={true}
                              playing={true}
                              width="100%"
                              height="430px"
                              onProgress={(e)=>{
                                if((videoDuration-e.playedSeconds).toFixed(0)==5){
                                  // alert("call Function")
                                  viewedVideo()
                                }
                                // console.log((videoDuration-e.playedSeconds).toFixed(0));
                                // console.log(e.playedSeconds.toFixed(0));
                                setVideoPlayed(e.playedSeconds.toFixed(0))
                              }}
                              onPause={(e)=>{
                                setWatchTime()
                              }}
                              onDuration={(e)=>{
                                VideoDuration(e)
                              }}
                            />
                          ) : videoData?.type === "doc" ? (
                            <Document
                              className="pdfView"
                              file={videoData.link}
                              onLoadSuccess={onDocumentLoadSuccess}
                            >
                              <div
                                className="align_ReactBTN d-flex justify-content-between align-items-center top-0 w-100 h-100 position-absolute"
                                style={{ padding: "0 70px" }}
                              >
                                <button className="left_PDFICONS">
                                  <i
                                    className="fa fa-chevron-left"
                                    aria-hidden="true"
                                    onClick={()=>dicrisePage()}
                                  ></i>
                                </button>
                                <button className="right_PDFICONS">
                                  <i
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                    onClick={() => incrisePage()}
                                  ></i>
                                </button>
                              </div>
                              <Page pageNumber={pageNumber} />
                            </Document>
                          ) : (
                            <ReactPlayer
                              url={courseData?.video}
                              autoPlay={false}
                              controls={true}
                              width="100%"
                              height="430px"
                            />
                          )}

                          <img
                            src="./images/Vector.png"
                            alt=""
                            className="img-fluid play_btn"
                          />
                          {showContent ? (
                            ""
                          ) : (
                            <button
                              className="btn open_CourseSidebar"
                              onClick={() => {
                                setShowContent(true);
                              }}
                            >
                              Open Course Content
                            </button>
                          )}
                        </div>
                        <div className="courses_header ">
                          <div className="container">
                            <nav className="nav nav-pills nav-justified">
                              <Link
                                to={"overview"}
                                state={{ 
                                  TeacherID: teacherId,
                                  ID:id 
                                }}
                                className={
                                  currenPage.includes("overview")
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                              >
                                Overview
                              </Link>
                              <Link
                                to={"quiz"}
                                className={
                                  currenPage.includes("quiz")
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                              >
                                Quiz
                              </Link>
                              <Link
                                to={"discussion"}
                                className={
                                  currenPage.includes("discussion")
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                              >
                                Discussion
                              </Link>
                              {/* <Link
                                to={"Workbook"}
                                className={
                                  currenPage.includes("Workbook")
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                              >
                                Workbook
                              </Link> */}
                              <Link
                                to={"Books&Resourses"}
                                className={
                                  currenPage.includes("Books&Resourses")
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                              >
                                Books &amp; Resourses
                              </Link>
                              <Link
                                to={"announcements"}
                                className={
                                  currenPage.includes("announcements")
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                              >
                                Announcements
                              </Link>
                              <Link
                                to={"notifications"}
                                className={
                                  currenPage.includes("notifications")
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                              >
                                Notifications
                              </Link>
                              <Link
                                to={"Q&A"}
                                className={
                                  currenPage.includes("Q&A")
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                              >
                                Q&amp;A
                              </Link>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Outlet context={{ id: id, teacherId: teacherId }} />
                  </div>
                </div>
              </div>
              {/* Course Content Start */}
              {showContent ? (
                <CourseContent id={id} showFunc={setShowContent} />
              ) : null}

              {/* Course Content End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
