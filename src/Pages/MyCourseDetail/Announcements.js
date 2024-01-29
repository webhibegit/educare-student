import React, { useEffect } from "react";
import HttpClient from "../../utils/HttpClient";
import { useSelector } from "react-redux";
import moment from "moment";

import Annoucement from "../../assets/images/announcement.png";

export default function Announcements() {
  const { CourseData } = useSelector((state) => state.SingleCourseData);

  return (
    <>
      <div className="announcements-item-wrapper bg-clr">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-12">
            {CourseData?.announcementsData?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="_announcement_box_course_wrapper mt-4">
                    {/* <p className="entry-header">Post Announcements</p> */}
                    <div className="notice-box">
                      <div className="notice-box-wrapper">
                        <div className="question-box-announcements">
                          <p style={{ maxWidth: "80%" }}>
                           {item.title}
                          </p>
                          <p
                            className="announce-date"
                            style={{ marginLeft: "auto", maxWidth: "20%" }}
                          >
                            {moment(`${item.createdOn}`).format("MMM Do YY")}
                          </p>
                        </div>
                        <div className="answers-box">
                          <p>
                           {item.description}
                          </p>
                        </div>
                        <div className="media">
                          <img
                            src={item.teachersData.image}
                            alt="image"
                            width="40px"
                            height="40px"
                            className="mr-3"
                            style={{borderRadius:"50%"}}
                          />
                          <div className="media-body" style={{ marginTop: 5 }}>
                            <h6
                              className="text-dark author-desig"
                              style={{ fontSize: "14px" }}
                            >
                              <span className="text-dark author-name">
                                {item?.teachersData?.name} -
                              </span>
                              course instructor
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-btm mt-5 mb-5" />
                </div>
              );
            })}

            {/* <div className="notice-box">
              <div className="notice-box-wrapper">
                <div className="question-box-announcements">
                  <p style={{ maxWidth: "80%" }}>
                    The More Important the Work, the More Important the Rest
                  </p>
                  <p
                    className="announce-date"
                    style={{ marginLeft: "auto", maxWidth: "20%" }}
                  >
                    10 Dec, 2021
                  </p>
                </div>
                <div className="answers-box">
                  <p>
                    The long barrow was built on land previously inhabited in
                    the Mesolithic period. It consisted of a sub-rectangular
                    earthen tumulus, estimated to have been 15 metres (50 feet)
                    in length, with a chamber built from sarsen megaliths on its
                    eastern end. Both inhumed and cremated human remains were
                    placed within this chamber during the Neolithic period,
                    representing at least nine or ten individuals.
                  </p>
                </div>
                <div className="media">
                  <img
                    src={Annoucement}
                    alt="image"
                    width="40px"
                    height="40px"
                    className="mr-3"
                  />
                  <div className="media-body" style={{ marginTop: 5 }}>
                    <h6
                      className="text-dark author-desig"
                      style={{ fontSize: 14 }}
                    >
                      <span className="text-dark author-name">
                        Jane Cooper -
                      </span>
                      course instructor
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-btm mt-5 mb-5" />
            <div className="notice-box">
              <div className="notice-box-wrapper">
                <div className="question-box-announcements">
                  <p style={{ maxWidth: "80%" }}>
                    Yo Reddit! What’s a small thing that anyone can do at nearly
                    anytime to improve their mood and make them happier?
                  </p>
                  <p
                    className="announce-date"
                    style={{ marginLeft: "auto", maxWidth: "20%" }}
                  >
                    05 Nov, 2021
                  </p>
                </div>
                <div className="answers-box">
                  <p>
                    The long barrow was built on land previously inhabited in
                    the Mesolithic period. It consisted of a sub-rectangular
                    earthen tumulus, estimated to have been 15 metres (50 feet)
                    in length, with a chamber built from sarsen megaliths on its
                    eastern end. Both inhumed and cremated human remains were
                    placed within this chamber during the Neolithic period,
                    representing at least nine or ten individuals.
                  </p>
                </div>
                <div className="media">
                  <img
                    src={Annoucement}
                    alt="image"
                    width="40px"
                    height="40px"
                    className="mr-3"
                  />
                  <div className="media-body" style={{ marginTop: 5 }}>
                    <h6
                      className="text-dark author-desig"
                      style={{ fontSize: 14 }}
                    >
                      <span className="text-dark author-name">
                        Jane Cooper -
                      </span>
                      course instructor
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-btm mt-5 mb-5" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
