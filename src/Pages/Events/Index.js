import React, { useEffect } from "react";
import bgEvents from "../../assets/images/bgEvents.png"
import uim_calender from '../../assets/images/icon/uim_calender.png'
import AllEvents from "./AllEvents";
export default function Events() {
    useEffect(()=>{
        window.$('#Cours_Provid_slider').not(".slick-initialized").slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
    },[])



  return (
    <>
        <div className="container-fluid top-section">
          <div className="p-3">
            <div className="_enrollment">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-12">
                  <h1 className="eventsTitle">My Events</h1>
                  <div className="myEventsWrapper">
                    <div
                      className="myEventsWrap"
                      style={{ width: "700px !important" }}
                    >
                      <div className="eventItem">
                        <img src={bgEvents} />
                      </div>
                      <div className="eventItem">
                        <h4 className="titleEvenItem">
                          I do not know how to spell a lot of things.
                        </h4>
                        <p style={{ margin: "25px 0", display: "flex" }}>
                          <img
                            src={uim_calender}
                            style={{ marginRight: 10 }}
                          />
                          <span className="date">October 14</span> |{" "}
                          <span className="timing">8:00 - 10:00 pm</span>
                        </p>
                        <div className="scheduledEvent">
                          <h4 className="scheduledEvent">
                            Event will start after
                          </h4>
                          <p className="time-pending">
                            2 <span>days</span> : 12 <span>hours</span> : 20{" "}
                            <span>mins</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      className="myEventsWrap"
                      style={{ width: "700px !important" }}
                    >
                      <div className="eventItem">
                        <img src="./images/bgEvents2.png" />
                      </div>
                      <div className="eventItem">
                        <h4 className="titleEvenItem">
                          I do not know how to spell a lot of things.
                        </h4>
                        <p style={{ margin: "25px 0", display: "flex" }}>
                          <img
                            src="./images/icon/uim_calender.png"
                            style={{ marginRight: 10 }}
                          />
                          <span className="date">October 14</span> |{" "}
                          <span className="timing">8:00 - 10:00 pm</span>
                        </p>
                        <div className="scheduledEvent">
                          <h4 className="scheduledEvent">
                            Event will start after
                          </h4>
                          <p className="time-pending">
                            2 <span>days</span> : 12 <span>hours</span> : 20{" "}
                            <span>mins</span>
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AllEvents/>
    </>
  );
}
