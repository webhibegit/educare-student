import moment from "moment";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Chatperson from "../../assets/images/chatperson.png";
import ChatSound from "../../assets/images/audio.png";
import { height } from "@mui/system";

function Messages({ message, time = "", sender, type, fileName, fileSize }) {
  const divRef = useRef(null);
  // console.log(fileSize,fileName);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  const { userData } = useSelector((state) => state.User);
  if (userData?._id == sender) {
    return (
      <div className="ReplyMsg" ref={divRef} style={{ textAlign: "right" }}>
        <p className="ChatTime">{moment(time).format("LT")}</p>
        {type === "image" ? (
          <div style={{ width: "156px", height: "150px" }}>
            <img src={message} />
          </div>
        ) : type === "doc" ?
          <div className="chatDoc">
            <div className="media">
              <i className="fa-regular fa-file icons_MEdia"></i>
              <div className="media-body ml-3">


                <div className="d-flex align-items-center justify-content-between">
                  <div style={{ maxWidth: '104px', width: '100%' }}>
                    <h4 className="text-left title_TExt">{fileName}</h4>
                    <div className="d-flex align-items-center">
                      {/* <span className="jsonFIle mr-2">Json</span>  <i className="fa-solid fa-circle circle_SIze"></i>  */}
                      <span className="size">{fileSize}</span>
                    </div>
                  </div>

                  <div >
                    <a href={message} download>
                      <i className="fa-solid fa-circle-arrow-down downloadiCOns"></i>
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>
          : type === "audio" ?
            <div>
              <audio controls>
                <source src={message} type="audio/ogg" />
              </audio>
            </div>
            :
            (
              <p className="chatText">{message}</p>
            )}
        {/* <p className="chatText">{message}</p> */}
      </div>
    );
  } else {
    return (
      <div className="chatMsg" ref={divRef}>
        <div className="">
          {/* <img src={Chatperson} className="img-fluid"/> */}
        </div>
        <div className="ml-3">
          {/* <h4 className="name_TItle">Esther Howard</h4> */}
          {/* <div className="d-flex align-items-center">
            <div>
                <img src={ChatSound} className="img-fluid" />
            </div>
            <div>
                <p className="ChatTime">09:47pm </p>
            </div>
        </div> */}
          <div className="d-flex align-items-center">
            <div>
              {type === "image" ? (
                <div style={{ width: "156px", height: "150px", overflow : 'hidden' }}>
                  <img src={message} className="img-fluid" style={{ width: "100%", height: "100%", objectFit : 'cover' }}/>
                </div>
              ) : type === "doc" ?
                <div className="chatDocWhite">
                  <div className="media">
                    <i className="fa-regular fa-file icons_MEdia"></i>
                    <div className="media-body ml-3">


                      <div className="d-flex align-items-center justify-content-between">
                        <div style={{ maxWidth: '104px', width: '100%' }}>
                          <h4 className="text-left title_TExt">{fileName}</h4>
                          <div className="d-flex align-items-center">
                            {/* <span className="jsonFIle mr-2">Json</span>  <i className="fa-solid fa-circle circle_SIze"></i>  */}
                            <span className="size">{fileSize}</span>
                          </div>
                        </div>

                        <div >
                          <a href={message} download>
                            <i className="fa-solid fa-circle-arrow-down downloadiCOns"></i>
                          </a>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
                : type === "audio" ?
                  <div>
                    <audio controls>
                      <source src={message} type="audio/ogg" />
                    </audio>
                  </div>
                  : (
                    <p className="chatText">{message}</p>
                  )}
            </div>
            <div>
              <p className="ChatTime">{moment(time).format("LT")} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
