import React, { useEffect, useState } from "react";
import img from "../../assets/images/design3.png"
import createContext from "react";

import ArrowImage from "../../assets/images/icon/arrow.png";
import Chatperson from "../../assets/images/chatperson.png";
import ChatpersonTwo from "../../assets/images/chatperson2.png";
import ChatpersonThree from "../../assets/images/chatperson3.png";
import ChatSound from "../../assets/images/audio.png";
import mic from "../../assets/images/icon/mic.png";
import attachment from "../../assets/images/icon/upload.png";
import Send from "../../assets/images/icon/share.png";
import { useOutletContext } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import HttpClient from "../../utils/HttpClient";
import { async } from "@firebase/util";
import { doc, onSnapshot, collection } from "firebase/firestore";
import SendBox from "../../Component/chatComp/SendBox";
import Messages from "../../Component/chatComp/Messages";
import { socket, SocketConnect } from "../../Socket/socket";

export default function Discussion() {
  const { id, teacherId } = useOutletContext();
  const { userData } = useSelector((state) => state.User);
  // console.log("otletid",id);
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    socket.on("chat", (payload) => {
      setAllMessages([...allMessages, payload]);
      // console.log("medd", payload);
    });
    return () => {};
  });

  useEffect(() => {
    fetchChat();
  }, [teacherId]);

  //    const  fetchConversation = (id)=>{
  //     // const unsubscribe=  onSnapshot(
  //     //     collection(db, "Chat", id, "message"),
  //     //     (data) => {
  //     //       let list = [];
  //     //       // Respond to data
  //     //       console.log(data.docs);
  //     //       data.forEach((documentSnapshot) => {
  //     //         list.push(documentSnapshot.data());
  //     //         console.log(
  //     //           "User ID: ",
  //     //           documentSnapshot.id,
  //     //           documentSnapshot.data()
  //     //         );
  //     //       });

  //     //       setAllMessages(list.sort(function (a,b) {
  //     //           return b.createOn < a.createOn ? -1
  //     //               : b.createOn > a.createOn ? 1
  //     //                   : 0
  //     //       }))
  //     //     }
  //     //   )

  //    }

  const fetchAllChat = async (id) => {
    let result = await HttpClient.requestChat(
      `viewallchatdetails/${id}`,
      "GET"
    );
    // console.log("result",result)
    setAllMessages(result.data);
  };

  const [conversationId, setConversationId] = useState("");
  const fetchChat = async () => {
    // alert("k")
    let dataSend = {
      receiverId: teacherId,
      senderType: "student",
      receiverType: "teacher",
      message: "hii",
      lastMsgBy: "student",
    };
    // console.log("dadadfa df",dataSend);
    let result = await HttpClient.requestData("createChat", "POST", dataSend);
    // console.log("conver",result);
    if (result && result.status) {
      setConversationId(result.data._id);
      fetchAllChat(result.data._id);
      // fetchConversation(result.data._id)
    }
  };
  return (
    <>
      <div className="chatProfile_Discuss">
        <div className="chaTprofile">
          <div className="col-md-12 col-lg-12 col-12">
            {/* <a href="" className="d-block text-center text-decoration-none">
                            <img src={ArrowImage} className="img-fluid mr-2" />
                            <span className="view_Prev">View previous messages</span>
                        </a> */}
            <div className="" style={{ height: "370px", overflow: "hidden" }}>
              <div
                className=""
                style={{ height: "370px", overflowY: "auto" }}
                id="your_div"
              >
                {allMessages.map((item, index) => {
                  return (
                    <Messages
                      key={index}
                      message={item.message}
                      sender={item.sender_id}
                      time={item.created_at}
                      type={item.type}
                      fileName={item.fileName}
                      fileSize={item.fileSize}
                    />
                  );
                })}
              </div>
              
            </div>
            <SendBox
              conversationId={conversationId}
              receiverId={teacherId}
              setAllMessages={setAllMessages}
              allMessages={allMessages}
            />
          </div>
        </div>

        
      </div>
    </>
  );
}
