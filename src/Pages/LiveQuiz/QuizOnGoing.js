import React, { useEffect, useState } from "react";
import sad from "../../assets/images/sad.png"
import { useNavigate } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export default function QuizOnGoing() {
  const {quiz_name,quiz_point,quiz_id}=useParams()
  const[allQuestion,setAllQuestion]=useState([])
  const[questionIndex,setQuestionIndex]=useState(0)
  const[currectStatus,setCurrectStatus]=useState(false)
  const[answer,setAnswer]=useState('')
  // const { CourseData } = useSelector((state) => state.SingleCourseData);


  useEffect(()=>{
    fetchQuizQuestion()
  },[])

    const navigate=useNavigate()
    const exitQuizPopup=()=>{
        if( document.querySelector(".exit_PopUp").style.display=="none"){
           document.querySelector(".exit_PopUp").style.display="block" 
        }else{
            document.querySelector(".exit_PopUp").style.display="none"
        }
        
    }
    // console.log("CourseData",CourseData);

    // console.log(quiz_id);
    const fetchQuizQuestion=async()=>{
      let result=await HttpClient.requestData(`get-quiz-question/${quiz_id}`,"GET")
      console.log(result);
      if(result && result.status){
          setAllQuestion(result.data)
      }
    }
    const QuestionIndexSet=()=>{
      if(questionIndex+1<allQuestion.length){
        setQuestionIndex(questionIndex+1)
      }
    }
    const setAnswerStatus=(data)=>{
      // console.log(data);
        if(data===allQuestion[questionIndex]?.answer){
          setCurrectStatus(true)
        }else{
          setCurrectStatus(false)
        }
    }
  const postAnswer=async()=>{
    if(answer!==""){
      let data={
        quizID:quiz_id ,
        questionID: allQuestion[questionIndex]?._id,
        currectStatus: currectStatus,
        postAnswareByStudent:  answer,
        quizPoints:allQuestion[questionIndex]?.questionPoints
      }
      console.log(data);
      const result= await HttpClient.requestData("post-answare","POST",data)
      if(result && result.status){
        QuestionIndexSet()
        setAnswer("")
      }
    }else{
      toast.warn("Please Select  a Answer")
    }
  }
  // console.log(currectStatus);
  return (
    <>
    <ToastContainer/>
      <div className="quiz_Columnright">
        <div className="quiz-ongoing">
          <div className="quiz-progress">
            <p>Question {questionIndex+1}/{allQuestion?.length}</p>
            <div className="progress" style={{ marginBottom: 20 }}>
              <div className="progress-bar" style={{ width: `${(questionIndex+1)/allQuestion.length*100}%` }} />
            </div>
            <span className="exit_close_btn" onClick={()=>exitQuizPopup()}>Exit Quiz</span>
          </div>
          <div className="quiz-choose">
            <p>
              {allQuestion[questionIndex]?.question}
            </p>
            {
            allQuestion[questionIndex]?.questionType==='mcq'?
            <>
            <div className="chooseCountry">
              <div className="countryName">
                <h4>A</h4>
                <h1>{allQuestion[questionIndex]?.choice[0].A}</h1>
              </div>
              <div className="country-select">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  value={answer}
                  name="optradio"
                  onClick={()=>{
                    setAnswer('A')
                    setAnswerStatus("A")
                  }}
                />
              </div>
            </div>
            <div className="chooseCountry">
              <div className="countryName">
                <h4>B</h4>
                <h1>{allQuestion[questionIndex]?.choice[0].B}</h1>
              </div>
              <div className="country-select">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  value={answer}
                  name="optradio"
                  onClick={()=>{
                    setAnswer('B')
                    setAnswerStatus("B")

                  }}
                />
              </div>
            </div>
            <div className="chooseCountry">
              <div className="countryName">
                <h4>C</h4>
                <h1>{allQuestion[questionIndex]?.choice[0].C}</h1>
              </div>
              <div className="country-select">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  value={answer}
                  name="optradio"
                  onClick={()=>{
                    setAnswer('C')
                    setAnswerStatus("C")

                  }}
                />
              </div>
            </div>
            <div className="chooseCountry">
              <div className="countryName">
                <h4>D</h4>
                <h1>{allQuestion[questionIndex]?.choice[0].D}</h1>
              </div>
              <div className="country-select">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  value={answer}
                  name="optradio"
                  onClick={()=>{
                    setAnswer('D')
                    setAnswerStatus("D")

                  }}
                />
              </div>
            </div>
            </> :""
          }
            
            <div className="buttonGroup">
              <button type="button" className="btn skip_btn" onClick={()=>{QuestionIndexSet()}}>
                Skip
              </button>
              {
                questionIndex+1===allQuestion?.length ?
                <button type="button" onClick={()=>{
                  postAnswer() 
                  navigate(-1)
                  }} className="btn btn_submit" style={{background: "#138BFB",
                    borderRadius: "10px"}}>
                Finish
              </button>:<button type="button"  onClick={()=>{postAnswer()}} className="btn btn_submit" style={{background: "#138BFB",
                    borderRadius: "10px"}}>
                Submit
              </button>
              }
              
            </div>
          </div>
        </div>
        <div className="exit_PopUp">
          <div className="exit_popUpBox">
            <img src={sad} />
            <p>Are you sure want to exit the quiz?</p>
            <button type="button" onClick={()=>{
                navigate(-1)
                exitQuizPopup()
            }}
             className="btn exit_pop_up">
              Exit
            </button>
            <button type="button"onClick={()=>exitQuizPopup()} className="btn btn_not_exit">
              Do not Exit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
