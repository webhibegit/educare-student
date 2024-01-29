import React, { useEffect, useState } from "react";
// import 'react-big-calendar/lib/sass/styles';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link, Outlet } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import HttpClient from "../../utils/HttpClient";
import SideCalender from "./SideCalender";

const localizer = momentLocalizer(moment);

export default function Calender() {
  const [events, setEvents] = useState(null);
  const [weeklyEvents, setWeeklyEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    fetchEvents();
    fetchWeeklyEvents();
    window.scrollTo(0, 0)

  }, []);

  const fetchEvents = async () => {
    let result = await HttpClient.requestData(
      "view-calender-live-cooching",
      "GET"
    );

    if (result && result.status) {
      setEvents(
        result.data.map((data) => ({
          title: data.title,
          start: new Date(data.start),
          end: new Date(data.end),
        }))
      );
      // console.log(moment(result.data[0].start).format('MMMM Do YYYY, h:mm:ss a'));
      // console.log("result===",result.data);
    }
  };
  const fetchWeeklyEvents = async () => {
    let result = await HttpClient.requestData(
      "view-calender-weekly-cooching",
      "GET"
    );
    if (result && result.status) {
      setWeeklyEvents(
        result.data.map((data) => ({
          title: data.title,
          start: new Date(data.start),
          end: new Date(data.end),
        }))
      );
    }
  };

  // console.log(events.concat(weeklyEvents));
  // console.log(date);
  return (
    <>
      <div className="container-fluid">
        <div className="_enrollment">
          <div className="row">
            <div
              className="col-md-3 col-lg-3 col-12"
              style={{ background: "#fff", borderRight: "1px solid #E2E2EA" }}
            >
              <div className="row">
                <div className="calenderFull-box">
                  <SideCalender setDate={setDate} />
                  {/* <div className="callenderFull_Item_Box">
                    <h3>Calender</h3>
                    <div className="calenderMonthly">
                      <div className="calenderItemWrapperCustom">
                        <h4 className="date">February 2022</h4>
                      </div>
                      <div className="calenderItemWrapperCustom">
                        <img
                          src="./images/icon/prev.png"
                          alt=""
                          className="img-fluid mr-2"
                        />
                        <img
                          src="./images/icon/next.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      className="table table-calender-left"
                      bgcolor="white"
                      align="center"
                      cellSpacing={21}
                      cellPadding={21}
                    >
                      <thead>
                        <tr>
                          <th>Sun</th>
                          <th>Mon</th>
                          <th>Tue</th>
                          <th>Wed</th>
                          <th>Thu</th>
                          <th>Fri</th>
                          <th>Sat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="last-date">30</td>
                          <td className="last-date">31</td>
                          <td>01</td>
                          <td>02</td>
                          <td>03</td>
                          <td>04</td>
                          <td>05</td>
                        </tr>
                        <tr />
                        <tr>
                          <td>06</td>
                          <td className="active-date">07</td>
                          <td>08</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>14</td>
                          <td className="active-CalenderNewDate">15</td>
                          <td>16</td>
                          <td>17</td>
                          <td>18</td>
                          <td>19</td>
                        </tr>
                        <tr>
                          <td>20</td>
                          <td>21</td>
                          <td>22</td>
                          <td>23</td>
                          <td>24</td>
                          <td>25</td>
                          <td>26</td>
                        </tr>
                        <tr>
                          <td>27</td>
                          <td>28</td>
                          <td className="last-date">30</td>
                          <td className="last-date">31</td>
                          <td className="last-date">01</td>
                          <td className="last-date">02</td>
                          <td className="last-date">03</td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}
                  <div className="marking-color">
                    <h1>My Schedule</h1>
                    <h4>
                      <span className="marker-live-coaching" />
                      Live Coaching Class
                    </h4>
                    <h4>
                      <span className="marker-weekly-coaching" />
                      Weekly Coaching Class
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-9 col-12">
              {/* <div className="row">
                <div className="calender-top1">
                  <div className="searchBar">
                    <div
                      className="form-group has-search chat-search"
                      style={{ position: "relative" }}
                    >
                      <span
                        className="fa fa-search form-control-feedback"
                        style={{ top: "4px" }}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        style={{ minHeight: "44px", minWidth: "375px" }}
                      />
                    </div>
                  </div>
                  <div className="dwm">
                    <div className="buttonsCalender">
                      <Link to={"day"}>
                      <button type="button" className="btn mr-3 calender_btn">
                        Day
                      </button>
                      </Link>
                      <Link to={"weekly"}>
                      <button type="button" className="btn mr-3 calender_btn">
                        Week
                      </button>
                      </Link>
                      <Link to={"monthly"}>
                      <button type="button" className="btn calender_btn">
                        Month
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <Outlet />
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
              </div> */}
              {events != null ? (
                <Calendar
                  localizer={localizer}
                  // events={myEventsList}
                  startAccessor="start"
                  endAccessor="end"
                  // view="day"
                  style={{ height: 500 }}
                  events={events.concat(weeklyEvents)}
                  views={["month", "week", "day"]}
                  eventPropGetter={(event=events.concat(weeklyEvents)) => {
                    const backgroundColor = event.title==="Live Cooching Calls" ? "#138bfb" : "#ffae00";                  
                    return { style: { backgroundColor } };
                  }}
                  // drilldownView={"agenda"|null}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
