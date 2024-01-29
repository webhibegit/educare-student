import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import puzzlepiece from "../../assets/images/puzzle-piece.png"
import QuizOnGoing from "./QuizOnGoing";

export default function LiveQuiz() {
    const navigate=useNavigate()
    const [showOngoingQuiz,setShowOngoingQuiz]=useState(false)
  
    const {quiz_name,quiz_point,quiz_id}=useParams()

  return (
    <>
      <div id="wrapper">
        <div
          id="content-wrapper"
          className="d-flex flex-column"
          style={{ background: "#fff" }}
        >
          <div id="content">
            <div className="container-fluid" style={{ padding: "0px" }}>
              <div className="row">
                <div className="quiz_ColumnLeft">
                  <div className="box-wrapper">
                    <h4 className="quiz-title">{quiz_name}</h4>
                    <p className="points">Points : {quiz_point}</p>
                    <p className="custom-para">
                      I was wrong, apparently, because it took me only two weeks
                      of school to get suspended. Oops.
                    </p>
                  </div>
                </div>
                {
                   showOngoingQuiz?<QuizOnGoing/>:
                    <div className="quiz_Columnright">
                  <div className="mainBoxQuiz">
                    <div className="mainBoxQuizItem">
                      <img src={puzzlepiece} alt="Puzzle Image" />
                      <p>Are you ready to take the quiz?</p>
                      <button type="button" onClick={()=>setShowOngoingQuiz(true) } className="btn btn_start_quiz " style={{backgroundColor:"#138BFB",color:"#FFFFFF"}}>
                        Start The Quiz
                      </button>
                      <a onClick={()=>navigate(-1)} className="btn exit_btn">
                        Exit Quiz
                      </a>
                    </div>
                  </div>
                </div>
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
