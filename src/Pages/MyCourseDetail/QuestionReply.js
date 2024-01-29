import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import qaPerson from "../../assets/images/dp8.png";
import HttpClient from "../../utils/HttpClient";
import moment from "moment";
import QuestionReplyBox from "./QuestionReplyBox";
import { ToastContainer, toast ,Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function QuestionReply ({question_id,showFunc}){
  const[showReplyBox,setShowReplyBox]=useState(false)
const [allReply,setAllReply]=useState()

const{course_name,id}=useParams()
// console.log(id);


useEffect(()=>{
    fetchAllReply()
},[])

const fetchAllReply=async()=>{
    const result= await HttpClient.requestData(`viewQuestionAnswerReplyList/${question_id}`,"GET")
    // const result= await HttpClient.requestData(`viewQuestionAnswerList/63493eb7e0c711496005c79b`,"GET")
    if(result && result.status){
        console.log(result);
        setAllReply(result.data[0])
    }
}
    return(
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
     <div className="form-group mt-4 text-left">
          <button className="backtoQuestionBTN" onClick={()=>showFunc(false)} >
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
              <img src={allReply?.student?.image} 
              style={{ width: "40px", borderRadius: "50%" }}
              className="mr-3" alt="..." />
              <div className="media-body">
                <h3>
                  {allReply?.question}
                </h3>
                {
                    allReply?.answer?.answer? <p>
                 {allReply?.answer?.answer}
                    </p>:<p> No Answer Found </p>
                  }
                
                <span className="adam-text">{moment(`${allReply?.createdOn}`).startOf('minute').fromNow()}</span>
               
                <a  onClick={()=>setShowReplyBox(true)} style={{cursor:"pointer"}} className="rply-text">
                  Reply
                </a>
             
              </div>
              
            </div>
            <div className="row col-lg-3 col-md-12 col-sm-12 col-12  media-icon-part">
              <div>
                <a>
                  <i className="fa fa-commenting" aria-hidden="true" />
                  <span>{allReply?.reply.length}</span>
                </a>
              </div>
            </div>
            {
                showReplyBox?<QuestionReplyBox
                quistion_id={question_id}
                  course_id={id}
                  showFunc={setShowReplyBox}
                  fetchReply={fetchAllReply}
                />:""
              }
            
          </div>
          <div style={{ padding: "0 40px" }} className="reply-part-area">
            <h4 className="reply-text">Showing {allReply?.reply.length} replies</h4>
            {
              allReply?.reply.map((item,index)=>{
                return(
                  <div className="media col-lg-9 col-md-12 col-sm-12 col-12" key={index}>
              <img
                src={item.userData?.image}
                className="mr-3"
                alt="..."
                style={{ width: "40px", borderRadius: "50%" }}
              />
              <div className="media-body">
                <p>
                  {item.reply}
                </p>
                {/* <a
                  className="rply-text"
                  style={{ fontSize: 14, textDecoration: "underline" }}
                >
                  Replied By Instructor
                </a> */}
                <span className="adam-text">Adam,   {moment(`${item.createdOn}`).startOf('minute').fromNow()}</span>
              </div>
            </div>
                )
              })
            }
            
            {/* <div
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
            </div> */}
          </div>
        </div>
     </>
    )
}