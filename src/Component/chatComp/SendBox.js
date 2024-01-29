import React, { useRef, useState } from "react";
import mic from "../../assets/images/icon/mic.png";
import attachment from "../../assets/images/icon/upload.png";
import Send from "../../assets/images/icon/share.png";
import { db } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import moment from "moment";
import { socket } from "../../Socket/socket";
import HttpClient from "../../utils/HttpClient";
import img from "../../assets/images/design3.png";
import { toast, ToastContainer } from "react-toastify";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";


function SendBox({ conversationId, receiverId, setAllMessages, allMessages }) {
  const [btn, setBtn] = useState(false);

  const messageRef = useRef();
  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const { userData } = useSelector((state) => state.User);
  // console.log("userData", userData);

  const SendMessage = async () => {
    if (messageRef.current.value != "") {
      // let result =  await setDoc(doc(db, "Chat",conversationId,"message",uniqueId()), {
      //      message: messageRef.current.value,
      //      createOn: moment().format() ,
      //      senderId:userData._id,
      //      receiverId: receiverId
      //    });
      let dataSend = {
        senderId: receiverId,
        chatData: {
          message: messageRef.current.value,
          type: "text",
          room_id: conversationId,
          created_at: moment().format(),
        },
      };

      // console.log("dataSend", dataSend);
      socket.emit("chat", dataSend);

      //    console.log("send",result);
      let messegeData = {
        created_at: moment().format(),
        message: messageRef.current.value,
        type: "text",
        sender_id: userData?._id,
      };
      setAllMessages([...allMessages, messegeData]);
      messageRef.current.value = "";
    }

    if (fileType !== "" && fileUrl !== "") {
      let dataSend = {
        senderId: receiverId,
        chatData: {
          message: fileUrl,
          type: fileType,
          room_id: conversationId,
          created_at: moment().format(),
          fileName: fileName,
          fileSize: fileSize,
        },
      };
      // console.log("dataSend",dataSend);
      socket.emit("chat", dataSend);

      let messegeData = {
        created_at: moment().format(),
        message: fileUrl,
        type: fileType,
        sender_id: userData?._id,
        fileName: fileName,
        fileSize: fileSize,
      };
      setAllMessages([...allMessages, messegeData]);
      setFileType("");
      setFileUrl("");
    }
  };

  // const uniqueId = () => parseInt(Date.now() * Math.random(), 10).toString();

  let uploadImage = async (e) => {
    setFileSize(`${e.size / 1000} KB`);

    let data = new FormData();
    data.append("files", e);
    let result = await HttpClient.fileUplode(
      "upload/filesUpload",
      "POST",
      data
    );
    // console.log(result);
    if (result && result.status) {
      setFileUrl(result.url);
      setFileName(result.originalname);
    }
  };

  let fileUpload = async (e) => {
    // console.log(e);
    setFileSize(`${e.size / 1000} KB`);

    if (!e.name.match(/\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$/)) {
      toast.warn("select valid document.");
      return false;
    } else {
      let data = new FormData();
      data.append("files", e);
      let result = await HttpClient.fileUplode(
        "upload/filesUpload",
        "POST",
        data
      );
      // console.log(result);
      if (result && result.status) {
        setFileUrl(result.url);
        setFileName(result.originalname);
      }
    }
  };

  // For Audio
  const addAudioElement = async (blob) => {
    // console.log(blob);

    let data = new FormData()
    data.append("audio", blob)

    let result = await HttpClient.fileUplode("upload/audioUpload", "POST", data)
    // console.log(result);
    if (result && result.status) {
      setFileUrl(result.url)
      setFileType("audio")
    }

    // const url = URL.createObjectURL(blob);
    // // setAudiolink(url)
    // const audio = document.createElement('audio');
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);
  };

  return (
    <form
      className="commentBox"
      onSubmit={(e) => {
        e.preventDefault();
        SendMessage();
      }}
    >
      <div className="commentBoxleft">
        {/* <img src={mic} className="mic" /> */}
        <AudioRecorder onRecordingComplete={addAudioElement} />
        <input type="text" placeholder="Write a message" ref={messageRef}
        disabled={fileUrl!==""?true:false}
        />
      </div>
      <div className="commentBoxright">
        <img
          src={attachment}
          className="upload"
          onClick={() => {
            setBtn(!btn);
          }}
        />
        <button type="submit" style={{ border: "none" }}>
          <img src={Send} className="share" onClick={SendMessage} />
        </button>
      </div>

      {btn && (
        <div className="whtspbtnShow">
          <div>
            <a style={{ cursor: "pointer" }}>
              <label className="form_label">
                <i
                  style={{ cursor: "pointer" }}
                  className="fa-solid fa-image"
                ></i>
                <input
                  type="file"
                  className="form-control"
                  id="uploadFile"
                  accept="image/*"
                  onChange={(e) => {
                    uploadImage(e.target.files[0]);
                    setFileType("image");
                    setBtn(!btn);
                  }}
                />
              </label>
            </a>
          </div>
          <div>
            <a style={{ cursor: "progress" }}>
              <label className="form_label">
                <i className="fa-solid fa-file"></i>
                <input
                  type="file"
                  className="form-control"
                  id="uploadFile"
                  onChange={(e) => {
                    fileUpload(e.target.files[0]);
                    setFileType("doc");
                    setBtn(!btn);
                  }}
                />
              </label>
            </a>
          </div>
          {/* <div>
            <a style={{ cursor: "pointer" }}>
              <label className="form_label">
                <i
                  style={{ cursor: "pointer" }}
                  className="fa-brands fa-whatsapp"
                ></i>
                <input type="file" className="form-control" id="uploadFile" />
              </label>
            </a>
          </div> */}
        </div>
      )}

      {fileType === "image" && fileUrl !== "" ? (
        <div className="uploadImgWrap">
          <a>
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFileType("");
                setFileUrl("");
              }}
            ></i>
          </a>
          <div className="uploadImg">
            <img src={fileUrl} className="img-fluid" />
          </div>
        </div>
      ) : fileType === "doc" && fileUrl !== "" ? (
        <div className="uploadImgWrap">
          <a>
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFileType("");
                setFileUrl("");
              }}
            ></i>
          </a>
          <div className="uploadImg" style={{ justifyContent: "center" }}>
            <p className="m-0 mb-3 text-center">{fileName}</p>
            {/* <img src={fileUrl} className="img-fluid" /> */}
            <i
              className="fa-regular fa-file"
              style={{
                fontSize: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></i>
          </div>
        </div>
      ) : fileType === "audio" && fileUrl !== "" ?
        <div className="uploadImgWrap">
          <a>
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFileType("");
                setFileUrl("");
              }}
            ></i>
          </a>
          <div className="uploadImg" style={{ justifyContent: "center" }}>
            <p className="m-0 mb-3 text-center">{fileName}</p>
            {/* <img src={fileUrl} className="img-fluid" /> */}
            <i class="fa-solid fa-microphone text-center mb-4" style={{ fontSize: '100px' }}></i>
            <audio controls>
              <source src={fileUrl} type="audio/ogg" />
            </audio>
          </div>
        </div>
        : null}
    </form>
  );
}

export default SendBox;
