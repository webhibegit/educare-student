import eventscalender from "../../assets/images/icon/eventscalender.png"
import Group69541 from "../../assets/images/icon/Group 69541.png"
import unsplash_QJEVpydulGs from "../../assets/images/icon/unsplash_QJEVpydulGs.png"
import unsplash_QwoNAhbmLLo from "../../assets/images/unsplash_QwoNAhbmLLo.png"
import unsplash_4BXWIQoS8Fo from "../../assets/images/unsplash_4BXWIQoS8Fo.png"
import Calendar from "../../assets/Custom/Calender/Calender"
import React,{useState,useEffect} from "react"
import HttpClient from "../../utils/HttpClient"
import moment from "moment"
import Loader from '../../Component/Loader/DotLoading'


export default function CalenderEvent() {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  const[slots,setSlots]=useState([])
  const [loading ,setLoading]=useState(false)

  const showDetailsHandle = (dayStr) => {
    // console.log(dayStr);
    setData(dayStr);
    setShowDetails(true);
  };

  const fetchSlots=async(dayStr)=>{
    setLoading(true)
    //  console.log(formatDate(dayStr));
     let data={
      date:formatDate(dayStr)
     }
    //  console.log(data);
     let result= await HttpClient.requestData("individualLiveCochingCall","POST",data)
    //  console.log(result);
     if(result && result.status){
        setSlots(result.data)
     }
     setLoading(false)
  }
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-12 col-12 py-3 py-lg-0 pr-lg-0">
        <div className="card" style={{borderRadius: 0, height: "100%"}} >
          <div className="card-body">
            <Calendar showDetailsHandle={showDetailsHandle} fetchSlots={fetchSlots}/>
            {/* <div className="d-flex align-items-center justify-content-between calender">
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="calender_month_text">October 2022</span>
              <i className="fa fa-angle-right" aria-hidden="true" />
            </div> */}
            {/* <div className="d-flex align-items-center justify-content-between calender py-4">
              <div className="calender_date_div">
                <span className="d-block py-1">T</span>
                <span className="d-block">14</span>
              </div>
              <div className="calender_date_div active">
                <span className="d-block py-1">W</span>
                <span className="d-block">15</span>
              </div>
              <div className="calender_date_div">
                <span className="d-block py-1">T</span>
                <span className="d-block">16</span>
              </div>
              <div className="calender_date_div">
                <span className="d-block py-1">F</span>
                <span className="d-block">17</span>
              </div>
              <div className="calender_date_div">
                <span className="d-block py-1">S</span>
                <span className="d-block">18</span>
              </div>
              <i className="fa fa-angle-right next_month" aria-hidden="true" />
            </div> */}
            <div className="call_individual">
              <p className="">Individual Live Coaching Call</p>
              {
               slots.length>=1?
               slots.map((item,index)=>{
                return(
                  <div className="d-lg-block d-sm-flex d-md-flex align-items-center justify-content-start justify-content-md-between justify-content-sm-between" key={index}>
                <div className="d-flex align-items-center justify-content-start py-2">
                  <div className="calender_img mr-2">
                    <img
                      src={eventscalender}
                      alt="calender icons"
                      className="img-fluid"
                    />
                  </div>
                  <div className="">
                    <span className="d-block event_Date">{moment(item.bookingOn).format('MMMM Do')}</span>
                    <span className="event_Time">{item.startTime} - {item.endTime}</span>
                  </div>
                </div>
                {/* <div className="d-flex align-items-center justify-content-start py-2">
                  <div className="calender_img mr-2">
                    <img
                      src={Group69541}
                      alt="calender icons"
                      className="img-fluid"
                    />
                  </div>
                  <div className="">
                    <span className="d-block event_Date">October 14</span>
                    <span className="event_Time">8:00 - 10:00 pm</span>
                  </div>
                </div> */}
                <div className="d-flex align-items-center justify-content-start py-2">
                  <div className="calender_img mr-2">
                    <img
                      src={item?.teachersData?.image}
                      alt="calender icons"
                      className="img-fluid person_image"
                      style={{height:"50px",width:"50px",borderRadius:"50%"}}
                    />
                  </div>
                  <div className="">
                    <span className="d-block event_Date">Instructor</span>
                    <span className="event_Time">{item?.teachersData?.name}</span>
                  </div>
                </div>
              </div>
                )
               }) :
               <h5 style={{textAlign:"center"}}>No classes Found</h5>
              }
              {loading && <div style={{position:"sticky",textAlign:"center",width:"90%"}}><Loader/> </div>}
              
            </div>
            {/* <br /> */}
            {/* <span className="border-line" /> */}
            {/* <div className="online_Events">
              <div className="online_Events_img py-2 pb-3">
                <img
                  src={unsplash_QwoNAhbmLLo}
                  alt="Online Events place"
                  className="img-fluid w-100"
                />
              </div>
              <p className="">Online Event</p>
              <div className="d-lg-block d-sm-flex d-md-flex align-items-center justify-content-start justify-content-md-between justify-content-sm-between">
                <div className="d-flex align-items-center justify-content-start py-2">
                  <div className="calender_img mr-2">
                    <img
                      src={eventscalender}
                      alt="calender icons"
                      className="img-fluid "
                    />
                  </div>
                  <div className="">
                    <span className="d-block event_Date">October 14</span>
                    <span className="event_Time">8:00 - 10:00 pm</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start py-2">
                  <div className="calender_img mr-2">
                    <img
                      src={Group69541}
                      alt="calender icons"
                      className="img-fluid"
                    />
                  </div>
                  <div className="">
                    <span className="d-block event_Date">Duration</span>
                    <span className="event_Time">2 hour</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <br /> */}
            {/* <span className="border-line" /> */}
            {/* <div className="online_Events">
              <div className="online_Events_img py-2 pb-3">
                <img
                  src={unsplash_4BXWIQoS8Fo}
                  alt="Online Events place"
                  className="img-fluid w-100"
                />
              </div>
              <p className="">Online Event</p>
              <div className="d-lg-block d-sm-flex d-md-flex align-items-center justify-content-start justify-content-md-between justify-content-sm-between">
                <div className="d-flex align-items-center justify-content-start py-2">
                  <div className="calender_img mr-2">
                    <img
                      src={eventscalender}
                      alt="calender icons"
                      className="img-fluid "
                    />
                  </div>
                  <div className="">
                    <span className="d-block event_Date">October 14</span>
                    <span className="event_Time">8:00 - 10:00 pm</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start py-2">
                  <div className="calender_img mr-2">
                    <img
                      src={Group69541}
                      alt="calender icons"
                      className="img-fluid"
                    />
                  </div>
                  <div className="">
                    <span className="d-block event_Date">Duration</span>
                    <span className="event_Time">2 hour</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
