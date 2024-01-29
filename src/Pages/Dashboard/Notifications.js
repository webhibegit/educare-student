import videoeditingicon from "../../assets/images/icon/video-editing-icon.png"
import profileimg from "../../assets/images/icon/profileimg.png"
import ladyprofiel from "../../assets/images/icon/ladyprofiel.png"
import { useEffect, useState } from "react";
import HttpClient from "../../utils/HttpClient";
import Loader from '../../Component/Loader/DotLoading'
import moment from "moment";


export default function Notifications() {
 const [notifications,setNotifications]=useState([])
 const [loading,setLoading]=useState(false)


    useEffect(()=>{
        fetchNotification()
    },[])

 const fetchNotification=async()=>{
  setLoading(true)
  let result =await HttpClient.requestData("notification","GET")
  // console.log(result);
  if(result && result.status){
    setNotifications(result.data)
  }
  setLoading(false)
 }
//  console.log(notifications);

  return (
    <>
      <div className="course-notifications-item" style={{ borderRadius: '20px' }}>
        <div className="entry-title mb-4">
          <p className="entry-header m-0">Notification</p>
          <p
            className="entry-ongoing m-0"
            style={{
              fontSize: '12px',
              lineHeight: '20px',
              letterSpacing: '0.06em',
              color: '#138BFB',
              fontWeight: 700,
            }}
          >
            Mark as all read
          </p>
        </div>
        <div className="notification-box">
          {loading && (
            <div style={{ position: 'sticky', textAlign: 'center', width: '90%' }}>
              <Loader />{' '}
            </div>
          )}
          {notifications.map((item, index) => {
            return (
              <div className="notification-box-wrapper" key={index}>
                <div className="icon-box">
                  <img src={item.icon} />
                </div>
                <div className="text-box-details">
                  <p className="video-editing-title">{item?.title}</p>
                  <p className="upload-course-text">{item.desc}</p>
                </div>
                <div className="msg-time">
                  <p>{moment(`${item.createdOn}`).startOf('minute').fromNow()}</p>
                </div>
              </div>
            );
          })}

          {/* <div className="notification-box-wrapper">
            <div className="icon-box">
              <img src={profileimg}/>
            </div>
            <div className="text-box-details">
              <p className="video-editing-title">Alfonso George</p>
              <p className="upload-course-text">
                <span className="sent-reply">sent a reply :</span> hey this is
                the file we all wanted this far{" "}
              </p>
            </div>
            <div className="msg-time">
              <p>2 hrs ago</p>
            </div>
          </div>
          <div className="notification-box-wrapper">
            <div className="icon-box">
              <img src={ladyprofiel} />
            </div>
            <div className="text-box-details">
              <p className="video-editing-title">Miracle Aminoff</p>
              <p className="upload-course-text">
                <span className="sent-reply">sent a reply :</span> hey this is
                the file we all wanted this far
              </p>
            </div>
            <div className="msg-time">
              <p>2 hrs ago</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
