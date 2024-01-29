import React from "react";

export default function CalenderDay(){
    return(
        <>
        <div className="calenderBottom" style={{ width: "100%" }}>
                  <h1 className="dayCalenderTitle">Tuesday 15</h1>
                  <div className="table-responsive">
                    <table className="table table-bordered calender-day-schedule">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>01:00 PM</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>02:00 PM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>03:00 PM</td>
                          <td>
                            <div className="live-coaching-data">
                              <p className="subjectLineCalenderDay">
                                Live Coaching Cl...
                              </p>
                              <p className="scheduledTimeClassCalenderDay">
                                03:15 PM
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>04:00 PM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>05:00 PM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>06:00 PM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>07:00 PM</td>
                          <td>
                            <div className="weekley-coaching-data1">
                              <p className="subjectLineCalenderDay">
                                Weekly Coaching Cla....
                              </p>
                              <p className="scheduledTimeClassCalenderDay">
                                07:30 PM
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>08:00 PM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>9:00 PM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>10:00 PM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>11:00 PM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>12:00 AM</td>
                          <td />
                        </tr>
                        <tr>
                          <td>01:00 AM</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
        </>
    )
}