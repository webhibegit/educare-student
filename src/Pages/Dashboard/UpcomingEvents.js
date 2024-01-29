import unsplashImage from "../../assets/images/unsplashImage.png"
import eventscalender from "../../assets/images/icon/eventscalender.png"
import profiledetails from "../../assets/images/icon/profile-details.png"

export default function UpcomingEvents(){
    return(
        <>
        <div className="course-notifications-item">
                    <div className="entry-title">
                      <p className="entry-header">Upcoming Events</p>
                      <p
                        className="entry-ongoing"
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "right",
                          letterSpacing: "0.1px",
                          color: "#727272",
                        }}
                      >
                        10 events
                      </p>
                    </div>
                    <div className="upcomingEventssection">
                      <img src={unsplashImage} alt="" />
                      <h4 className="upcoingEventPara">
                        I do not know how to spell a lot of things.
                      </h4>
                      <div className="eventswrap">
                        <div className="eventswrapper">
                          <img src={eventscalender} />
                        </div>
                        <div className="eventswrapper">
                          <h4 className="dateEvents">October 14</h4>
                          <h5 className="timeEvents">8:00 - 10:00 pm</h5>
                        </div>
                      </div>
                      <div className="eventProfile">
                        <div className="eventProfileWrap">
                          <img src={profiledetails}/>
                          <p className="eventsHost">Hanna Septimus</p>
                        </div>
                        <div className="eventProfileWrap">
                          <p className="eventPrice">$45</p>
                        </div>
                      </div>
                    </div>
                  </div>
        </>
    )
}