import React from "react";
import teacher from "../../assets/images/teacher.png";
import yellowstar from "../../assets/images/icon/yellowStar.png";
import dollar from "../../assets/images/icon/dollar.png";
import girl_live from "../../assets/images/icon/girl_live.png";

export default function FeaturedMentors({ slots }) {
  return (
    <>
      <div className="col-md-12 col-lg-3">
        <div className="live-last-box">
          <h3 className="last-heading">Featured Mentors</h3>
          {slots.map((item, index) => {
            return (
              <div className="last-content-box" key={index}>
                <div className="last-top-section"></div>
                <div className="last-bootom-section">
                  <a href="#" className="last-img">
                    <img src={item?.teachersData?.image} />
                  </a>
                  <h5>{item?.teachersData?.name}</h5>
                  <h6 className="rate">
                    <a href="#">
                      <img src={yellowstar} />
                    </a>
                    {item?.teachersData?.avgRating}/5
                  </h6>
                  <h6 className="rate">
                    {/* <a href="#">
                  <img src={dollar} />
                </a> */}
                    4.6/5
                  </h6>
                </div>
              </div>
            );
          })}

          {/* <div className="last-content-box">
            <div
              className="last-top-section"
              style={{
                backgroundImage: "url(../../assets/images/design3.png)",
              }}
            ></div>
            <div className="last-bootom-section">
              <a href="#" className="last-img">
                <img src={girl_live} />
              </a>
              <h5>Jocelyn Westervelt</h5>
              <h6 className="rate">
                <a href="#">
                  <img src={yellowstar} />
                </a>
                4.6/5
              </h6>
              <h6 className="rate">
                <a href="#">
                  <img src={dollar} />
                </a>
                4.6/5
              </h6>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
