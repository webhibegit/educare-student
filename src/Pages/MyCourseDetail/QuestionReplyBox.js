import React, { useState } from "react";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function QuestionReplyBox({quistion_id,course_id,showFunc,fetchReply}){
  const[reply,setReply]=useState("")


  const addReply=async()=>{
    if(reply!==""){
      let data={
        questionId:quistion_id,
        courseId:course_id,
        reply:reply
      }
      let result=await HttpClient.requestData("addReply","POST",data)
      if(result && result.status){
          toast.success(result.message)
          fetchReply()
      }else{
        toast.warn(result.message)
      }
    }else{
      toast.warn("Please Write Somthing in Reply")
    }

  }
    return(
        <>
         <div className="col-lg-12 col-md-12 col-sm-12 col-12 post-answer-part">
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                onChange={(e)=>{
                  setReply(e.target.value)
                }}
                placeholder="Reply question"
                defaultValue={""}
              />
            </div>
            <div className="mt-2 mb-5">
              <button onClick={()=>{
                addReply()
                showFunc(false)}}  className="btn btn1 mb-2">
                Post Answer
              </button>
              <button onClick={()=>showFunc(false)} className="btn btn2 mb-2">
                Cancel
              </button>
            </div>
          </div>
        </>
    )
}