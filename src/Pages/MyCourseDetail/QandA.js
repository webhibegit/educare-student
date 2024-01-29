import React, { useEffect, useState } from "react";
import HttpClient from "../../utils/HttpClient";
import { useParams } from "react-router-dom";
import moment from "moment";
import QuestionReply from "./QuestionReply";
import { ToastContainer, toast ,Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function QandA() {
  const [addQuestion, setAddQuestion] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [allQuestion, setAllQuestion] = useState([]);
  const [questionId, setQuestionId] = useState("");
  const[question,setQuestion]=useState("")
  const { course_name, id } = useParams();

  useEffect(() => {
    fetchQuestions();
  }, []);
  // console.log(allQuestion);
  // console.log(moment("2022-10-21T13:04:24.369Z").format('MMMM Do YYYY, h:mm:ss a'));

  const fetchQuestions = async () => {
    const result = await HttpClient.requestData(
      `viewQuestionAnswerList/${id}`,
      "GET"
    );
    if (result && result.status) {
      // console.log(result);
      setAllQuestion(result.data);
    }
  };
  const postQuestion=async()=>{
    if(question!==""){
      let data={
        courseId:id,
        question:question
      }
      console.log(data);
      let result= await HttpClient.requestData("addQuestion","POST",data)
      console.log(result);
      if(result && result.status){
        fetchQuestions()
        toast.success(result.message)
      }else{
        toast.warn(result.message)
      }
    }else{
      toast.warn("Please Enter A Question")
    }
  }

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
      <div className="questions_answers_section px-5 mt-4">
        {showReply == false ? (
          <div>
            {addQuestion ? (
              <>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Ask question"
                    onChange={(e)=>{
                      setQuestion(e.target.value)
                    }}
                    defaultValue={""}
                    style={{ height: "167px", resize: "none" }}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="ask_Question_BTN mb-4"
                    onClick={() => {
                      postQuestion()
                      setAddQuestion(false);
                    }}
                  >
                    Ask this question
                  </button>
                  <button
                    className="cancel_Question_BTN"
                    onClick={() => {
                      
                      setAddQuestion(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : null}

            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <h4 className="question_TAgline">
                  Questions & Answer for this video
                </h4>
                <p className="questIonscount">{allQuestion?.length ?? 0} questions</p>
              </div>
              {addQuestion == false ? (
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <button
                      className="ask_Question"
                      onClick={() => {
                        setAddQuestion(true);
                      }}
                    >
                      Ask A Question
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <form className="form-inline my-2 my-lg-0">
                  <i className="fa fa-search" aria-hidden="true" />
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div
                  className="dropdown"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Sort by:</span>
                    Popular Class
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mediaObjectPart ">
          <div className="media-part row">
            <div className="media col-lg-9 col-md-12 col-sm-12 col-12">
              <img src={qaPerson} className="mr-3" alt="..." />
              <div className="media-body">
                <h3>
                  Sir, did you update list of the videos? (Find missing elements
                  in an...
                </h3>
                <p>
                  Akash, I ave explained it in next lectures. you can watch
                  linked list creation videos. in this lecture just focus on
                  Display. if you continue lectures in same order it will be
                  better.
                </p>
                <span>Adam, 11 months ago</span>
              </div>
            </div>
            <div className="row col-lg-3 col-md-12 col-sm-12 col-12  media-icon-part">
              <div>
                <a href="#">
                  <i className="fa fa-arrow-circle-up" aria-hidden="true" />
                  <span>200</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fa fa-commenting" aria-hidden="true" />
                  <span>200</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 post-answer-part">
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Reply question"
                defaultValue={""}
              />
            </div>
            <div className="mt-2 mb-5">
              <button type="submit" className="btn btn1 mb-2">
                Post Answer
              </button>
              <button type="submit" className="btn btn2 mb-2">
                Cancel
              </button>
            </div>
          </div>
        </div> */}
            {allQuestion?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mediaObjectPart mediaobjectpart_again"
                  style={{ height: "auto" }}
                >
                  <div className="media-part row">
                    <div className="media col-lg-9 col-md-12 col-sm-12 col-12">
                      <div className="mr-4" style={{maxWidth: '52px',height: '52px', overflow : 'hidden', width: '100%' }}>
                        <img
                          src={item?.student?.image}
                          className="mr-3"
                          style={{ width: "100%", height: '52px', borderRadius: "50%", objectFit : 'cover' }}
                          alt="..."
                        />
                      </div>
                      <div className="media-body">
                        <h3>{item.question}</h3>
                        <p>{item?.answer?.answer ?? `No Answer Found`}</p>
                        <span className="adam-text ml-0">
                          {moment(`${item.createdOn}`).startOf('minute').fromNow()}
                        </span>
                        <a
                          onClick={() => {
                            setQuestionId(item._id);
                            setShowReply(true);
                          }}
                          style={{cursor:"pointer"}}
                          className="rply-text"
                        >
                          Reply
                        </a>
                      </div>
                    </div>
                    {/* <div className="row col-lg-3 col-md-12 col-sm-12 col-12  media-icon-part">
                      <a href="#">
                        <i
                          className="fa fa-commenting"
                          aria-hidden="true"
                        />
                        <span>200</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              );
            })}
            {
              allQuestion.length===0?
              <div className="form-group mt-4 text-center">
              <button className="showMoreQuestionBTN">
                No Questions Found
              </button>
            </div> :allQuestion.length>10?<div className="form-group mt-4 text-center">
              <button className="showMoreQuestionBTN">
                Show More Questions
              </button>
            </div>:""
            }
            
          </div>
        ) : (
          <QuestionReply question_id={questionId} showFunc={setShowReply} />
        )}

        {/* <div className="form-group mt-4 text-left">
          <button className="backtoQuestionBTN">
            <i className="fa fa-chevron-left mx-2" aria-hidden="true"></i>{" "}
            <span>Back to All Questions</span>
          </button>
        </div>
        <div
          className="mediaObjectPart mediaobjectpart_again mediaobjectpart_again_wrap"
          style={{ height: "auto" }}
        >
          <div className="media-part row">
            <div className="media col-lg-9  col-md-12 col-sm-12 col-12">
              <img src={qaPerson} className="mr-3" alt="..." />
              <div className="media-body">
                <h3>
                  Sir, did you update list of the videos? (Find missing elements
                  in an...
                </h3>
                <p>
                  Akash, I ave explained it in next lectures. you can watch
                  linked list creation videos. in this lecture just focus on
                  Display. if you continue lectures in same order it will be
                  better.
                </p>
                <span className="adam-text">Adam, 11 months ago</span>
                <a href="#" className="rply-text">
                  Reply
                </a>
              </div>
            </div>
            <div className="row col-lg-3 col-md-12 col-sm-12 col-12  media-icon-part">
              <div>
                <a href="#">
                  <i className="fa fa-arrow-circle-up" aria-hidden="true" />
                  <span>200</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fa fa-commenting" aria-hidden="true" />
                  <span>200</span>
                </a>
              </div>
            </div>
          </div>
          <div style={{ padding: "0 40px" }} className="reply-part-area">
            <h4 className="reply-text">Showing 16 replies</h4>
            <div className="media col-lg-9 col-md-12 col-sm-12 col-12">
              <img
                src={qaPerson}
                className="mr-3"
                alt="..."
                style={{ width: 50 }}
              />
              <div className="media-body">
                <p>
                  Akash, I ave explained it in next lectures. you can watch
                  linked list creation videos. in this lecture just focus on
                  Display. if you continue lectures in same order it will be
                  better.
                </p>
                <a
                  href="#"
                  className="rply-text"
                  style={{ fontSize: 14, textDecoration: "underline" }}
                >
                  Replied By Instructor
                </a>
                <span className="adam-text">Adam, 11 months ago</span>
              </div>
            </div>
            <div
              className="media col-lg-9 col-md-12 col-sm-12 col-12"
              style={{ marginTop: 30 }}
            >
              <img
                src={qaPerson}
                className="mr-3"
                alt="..."
                style={{ width: 50 }}
              />
              <div className="media-body">
                <p>
                  Akash, I ave explained it in next lectures. you can watch
                  linked list creation videos. in this lecture just focus on
                  Display. if you continue lectures in same order it will be
                  better.
                </p>
                <a
                  href="#"
                  className="rply-text"
                  style={{ fontSize: 14, textDecoration: "underline" }}
                >
                  Replied By Instructor
                </a>
                <span className="adam-text">Adam, 11 months ago</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
