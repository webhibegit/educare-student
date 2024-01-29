import React from 'react'
import bgEvents from "../../assets/images/Four people at a table discussing and working.jpeg"
import uim_calender from '../../assets/images/icon/uim_calender.png'
import Speaker from './Speaker'
import Sponsor from './Sponsor'

export default function Index() {
    return (
        <>

            <div className="container-fluid top-section">
                <div className="p-3">
                    <div className="_enrollment">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <h1 className="eventsTitle">My Session</h1>
                                <div className="myEventsWrapper">
                                    <div
                                        className="myEventsWrap myeventsessionWrap"
                                        style={{ width: "700px !important" }}
                                    >
                                        <div className="eventItem">
                                            <img src={bgEvents} className="img-fluid" style={{ width: "100%" }} />
                                        </div>
                                        <div className="eventItem">
                                            <h4 className="titleEvenItem">
                                                Hosted By<span style={{ color: "#007bff" }}> James Dentley</span>
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
                                                    Session will start after
                                                </h4>
                                                <p className="time-pending">
                                                    2 <span>days</span> : 12 <span>hours</span> : 20{" "}
                                                    <span>mins</span>
                                                </p>
                                            </div>
                                            <p className='parapara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <Speaker />
                            <Sponsor />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
