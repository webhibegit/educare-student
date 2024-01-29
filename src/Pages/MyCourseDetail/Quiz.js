import React, { useEffect, useState } from "react";

import HttpClient from "../../utils/HttpClient";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Quiz() {
  const { CourseData } = useSelector((state) => state.SingleCourseData);
  // console.log(CourseData);

  return (
    <div className="quiz_CustomContainer">
      {CourseData?.quizData?.length >= 1 ? (
        CourseData?.quizData?.map((item, index) => {
          return (
            <div className="card quiz_Section my-4" key={item._id}>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-4 col-md-12 col-12 py-2">
                    <h5 className="d-flex justify-content-start align-items-center">
                      <div>{item.quizName}</div>
                      <div className="ml-4 d-none">
                        <img src="./images/icon/eye.png" alt="" />{" "}
                        <span className="view_Status">VIEW STATUS</span>
                      </div>
                    </h5>
                  </div>
                  <div className="col-xl-6 col-lg-8 col-md-12 col-12 py-2">
                    <div className="d-flex justify-content-between align-items-center px-lg-3 px-0">
                      <p className="total_point">
                        Total Points - <span>{item.totalPoint}</span>
                      </p>
                      <span className="border_line" />
                      <p className="total_attempts">
                        Total Attempts - <span>{item.attendQuizQuestion}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-2 col-12 py-2">
                    {
                      item.playingQuizStatus?
                    <button className="btn start_quiz  ">
                      <span className="start_quiz_text">Start Quiz</span>
                    </button> :
                    <Link to={`/live_quiz/${item.quizName}/${item.totalPoint}/${item._id}`}>
                    <button className="btn start_quiz active ">
                      <span className="start_quiz_text">Start Quiz</span>
                    </button>
                    </Link>
                    }
                   
                    <div className="after_btnclick d-none">
                      <p>Completed</p>
                      <span>30/50 Points</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>NO QUIZ FOUND</h1>
      )}

      {/* <div className="card quiz_Section my-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 py-2">
              <h5>Quiz Number 01</h5>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-12 col-12 py-2">
              <div className="d-flex justify-content-between align-items-center px-3">
                <p className="total_point">
                  Total Points - <span>50</span>
                </p>
                <span className="border_line" />
                <p className="total_attempts">
                  Total Attempts - <span>01</span>
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-2 col-12 py-2">
              <button className="btn start_quiz active">
                <span className="start_quiz_text">Start Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card quiz_Section my-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 py-2">
              <h5>Quiz Number 01</h5>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-12 col-12 py-2">
              <div className="d-flex justify-content-between align-items-center px-3">
                <p className="total_point">
                  Total Points - <span>50</span>
                </p>
                <span className="border_line" />
                <p className="total_attempts">
                  Total Attempts - <span>01</span>
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-2 col-12 py-2">
              <button className="btn start_quiz">
                <span className="start_quiz_text">Start Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card quiz_Section my-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 py-2">
              <h5>Quiz Number 01</h5>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-12 col-12 py-2">
              <div className="d-flex justify-content-between align-items-center px-3">
                <p className="total_point">
                  Total Points - <span>50</span>
                </p>
                <span className="border_line" />
                <p className="total_attempts">
                  Total Attempts - <span>01</span>
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-2 col-12 py-2">
              <button className="btn start_quiz">
                <span className="start_quiz_text">Start Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card quiz_Section my-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 py-2">
              <h5>Quiz Number 01</h5>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-12 col-12 py-2">
              <div className="d-flex justify-content-between align-items-center px-3">
                <p className="total_point">
                  Total Points - <span>50</span>
                </p>
                <span className="border_line" />
                <p className="total_attempts">
                  Total Attempts - <span>01</span>
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-2 col-12 py-2">
              <button className="btn start_quiz">
                <span className="start_quiz_text">Start Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card quiz_Section my-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 py-2">
              <h5>Quiz Number 01</h5>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-12 col-12 py-2">
              <div className="d-flex justify-content-between align-items-center px-3">
                <p className="total_point">
                  Total Points - <span>50</span>
                </p>
                <span className="border_line" />
                <p className="total_attempts">
                  Total Attempts - <span>01</span>
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-2 col-12 py-2">
              <button className="btn start_quiz">
                <span className="start_quiz_text">Start Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
