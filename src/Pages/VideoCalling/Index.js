import React, { useState, useEffect } from 'react'
import video1 from "../../assets/images/Rectangle 1886.jpg";
import video2 from "../../assets/images/Rectangle 1887.jpg";
import video3 from "../../assets/images/Rectangle 1888.jpg";
import video4 from "../../assets/images/Rectangle 1889.jpg";
import video5 from "../../assets/images/pin.png";
import video6 from "../../assets/images/Rectangle 1893.jpg";
import imo1 from "../../assets/images/emoji.png";
import Participants from './Participants';
import AllParticipantsList from './AllParticipantsList';
import VideoCallingBottomBar from './VideoCallingBottomBar';
import { socket, SocketConnect } from '../../Socket/socket';
import HttpClient from '../../utils/HttpClient';
import Peer from 'peerjs';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';




const ICESERVER = [
    {
        url: "stun:global.stun.twilio.com:3478?transport=udp",
        urls: "stun:global.stun.twilio.com:3478?transport=udp",
    },
    {
        url: "turn:global.turn.twilio.com:3478?transport=udp",
        username:
            "f0320b05e37b10c5b5a821f2b975ff2a56a7184080ab6d037dc93e7d84e23e5d",
        urls: "turn:global.turn.twilio.com:3478?transport=udp",
        credential: "1YTo3i45XDrLNovU7GTHF4SHhaQTSu34KmUqftVTSk0=",
    },
    {
        url: "turn:global.turn.twilio.com:3478?transport=tcp",
        username:
            "f0320b05e37b10c5b5a821f2b975ff2a56a7184080ab6d037dc93e7d84e23e5d",
        urls: "turn:global.turn.twilio.com:3478?transport=tcp",
        credential: "1YTo3i45XDrLNovU7GTHF4SHhaQTSu34KmUqftVTSk0=",
    },
    {
        url: "turn:global.turn.twilio.com:443?transport=tcp",
        username:
            "f0320b05e37b10c5b5a821f2b975ff2a56a7184080ab6d037dc93e7d84e23e5d",
        urls: "turn:global.turn.twilio.com:443?transport=tcp",
        credential: "1YTo3i45XDrLNovU7GTHF4SHhaQTSu34KmUqftVTSk0=",
    },
];
var my_uniStream = null;
var peerServer = null;
var allPeers = [];
var re = false;

export default function VideoCalling() {

    const myStream = useSelector((state) => state.MyStream);
    const { userData } = useSelector((state) => state.User)
    const { id } = useParams()
    // console.log("roomID",id);
    // console.log("userData",userData);
    console.log(myStream, "kkk");
    const navigate = useNavigate();
    const [Stream, setMyStream] = useState(null);
    // const [leaveId, setLeaveId] = useState(location.leaveId)
    const [videoToggle, setVideoToggle] = useState(true);
    const [audioToggle, setAudioToggle] = useState(true)
    const [refress, setRefress] = useState(false);
    const [remoteStreams, setRemoteStreams] = useState();
    const [remoteStreamStatus, setRemoteStreamStatus] = useState(false)
    const [RoomId, setRoomId] = useState(null);
    const [UserId, setUserId] = useState(null);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        meet();
        // return () => {
        //     // let track = Stream.getTracks();
        //     console.log("my_uniStream", my_uniStream);

        //     let track = my_uniStream.getTracks();

        //     track.forEach((element) => {
        //         element.stop();
        //     });
        //     alert("Called End");

        //     navigate(-1);
        // };
    }, []);
    useEffect(() => {
        SocketConnect()
    }, []);

    //   console.log(typeof Stream);
    const meet = () => {
        if (!navigator.mediaDevices?.enumerateDevices) {
            console.log("enumerateDevices() not supported.");
        } else {
            // List cameras and microphones.
            navigator.mediaDevices
                .enumerateDevices()
                .then((devices) => {
                    let video = devices.findIndex((it) => it.kind == "videoinput") >= 0;
                    let audio = devices.findIndex((it) => it.kind == "audioinput") >= 0;
                    // console.log(devices);
                    // let videoSourceId= devices.
                    if (!video && !audio) {
                        alert("No available Devices!");
                        navigate(-1);
                        return;
                    }

                    if (!video) {
                        alert("No Video devices are available !");
                    }

                    getUserStream(video, audio);
                })
                .catch((err) => {
                    console.error(`${err.name}: ${err.message}`);
                });
        }
    };

    const getUserStream = (video, audio) => {
        navigator.mediaDevices
            .getUserMedia({
                audio,
                video: video
                    ? {
                        frameRate: 30,
                    }
                    : false,
            })
            .then((stream) => {
                my_uniStream = stream;
                setMyStream(stream);
                console.log(stream, "stream");
                // dispatch(addStream(stream));
                addVideoStream("own_video", stream);
                initCall(stream);
                // addAudioStream('own_audio')
            })
            .catch((err) => console.log(err, "error"));
    };
    const initCall = (stream) => {
        peerServer = new Peer(undefined, {
            host: "peer.mylearnr.app",
            port: 443,
            path: "/",
            secure: true,
            config: {
                iceServers: ICESERVER,
            },
        });
        peerServer.on("open", (userId) => {
            // setUserId(userId);
            // let roomId = location.tableId;
            // setRoomId(roomId);
            let myData = {
                roomID: id,
                data: {
                    name: `${userData?.fristName} ${userData?.lastName}`,
                    Image: userData?.image,
                    id: userData?._id,
                    userId: userId
                }
            }


            console.log(userId);

            // socket.emit("videocall", { userId, roomId, myData });
            socket.emit("joinRoom", myData);


        });

        peerServer.on("call", (call) => {
            call.answer(stream);
            console.log("call", call);
            console.log("call");
            let userId = call.peer;
            call.on("stream", (remoteVideoStream) => {
                remoteVideoStream.peerId = userId;
                setRemoteStreamStatus(true)
                console.log("remoteVideoStream", remoteVideoStream);
                setRemoteStreams(remoteVideoStream)
                setTimeout(() => {
                    addRemoteStream("remote_stream", remoteVideoStream)

                }, 1000);
                // if (allPeers.findIndex((it) => it.peerId == userId) < 0) {
                //     setRemoteStreams((state) => [...state, remoteVideoStream]);
                //     allPeers = [...allPeers, remoteVideoStream];
                //     setRefress(!refress);

                //     setTimeout(() => {
                //         addVideoStream(`vid_${userId}`, remoteVideoStream);
                //     }, 1000);
                // }
            });
        });

        socket.on("joinRoom", ({data}) => {
            console.log("connected", data);
            connectTonewUser(data.userId, stream);
        });

        socket.on("left", ({userId, data}) => {
            console.log("userId, data", userId, data);
            console.log(stream);
               let track = stream.getTracks();
             track.forEach((element) => {
                  element.stop();
                });
                navigate("/dashboard")
                alert("Your Partner has Left")
        })

        // socket.on("video_status", (remoteUserId, status, track) => {
        //     console.log("videoToggle", remoteUserId, status, track);
        //     if (status?.status) {
        //         let streamIndex = allPeers.findIndex((it) => it.peerId == remoteUserId);

        //         if (streamIndex >= 0) {
        //             allPeers[streamIndex].addTrack(JSON.parse(track));
        //             setRemoteStreams(allPeers);
        //             setRefress(!re);
        //         }
        //     }
        // });
    };
    const connectTonewUser = (userId, stream) => {
        console.log(userId,stream);
        const call = peerServer.call(userId, stream);
        if (call) {
            call.on("stream", (remoteVideoStream) => {
                setRemoteStreamStatus(true)
                console.log(
                    "remoteVideoStream",
                    remoteVideoStream
                );
                setTimeout(() => {
                    addRemoteStream("remote_stream", remoteVideoStream)
                }, 1000);
                

                // remoteVideoStream.peerId = userId;

                // if (allPeers.findIndex((it) => it.peerId == userId) < 0) {
                //     setRemoteStreams((state) => [...state, remoteVideoStream]);
                //     allPeers = [...allPeers, remoteVideoStream];
                //     setRefress(!refress);

                //     setTimeout(() => {
                //         addVideoStream(`vid_${userId}`, remoteVideoStream);
                //     }, 1000);
                // }
            });
        }
    };
    const addVideoStream = (id, stream) => {
        let vid = document.getElementById(id);
        vid.srcObject = stream;
        vid.addEventListener("loadedmetadata", () => {
            vid.play();
        });
    };

    const offCamera = () => {
        let streamTrack = Stream.getVideoTracks();
        console.log("VideoTrack", streamTrack);
        // if (videoToggle) {
        streamTrack[0].enabled = !videoToggle;
        // streamTrack[0].stop();
        // socket.emit('video', { status: !videoToggle }, null)
        // } else {
        //     Stream.removeTrack(streamTrack[0]);
        //     navigator.mediaDevices
        //         .getUserMedia({
        //             video: {
        //                 width: 640,
        //                 height: 480,
        //                 frameRate: 30,
        //             },
        //         })
        //         .then((stream) => {
        //             let newVideoTrack = stream.getVideoTracks()[0]
        //             Stream.addTrack(newVideoTrack)

        //             // socket.emit('video', { status: !videoToggle }, newStream, stream)
        //             // fs.createReadStream(stream).pipe(newStream);
        //         });
        // }

        setVideoToggle(!videoToggle);
        // streamTrack[0].enabled = !(Stream.getVideoTracks()[0].enabled)
    };


    const offMic = () => {
        let audioTrack = Stream.getAudioTracks();
        // console.log("audioTrack",audioTrack);
        audioTrack[0].enabled = !audioTrack
        setAudioToggle(!audioToggle)
    }
    // const muteAudio = () => {
    //     alert("muted");
    //     socket.on("audio", (status) => {
    //         console.log(status, "status");
    //         socket.to().broadcast.emit("audio_status", UserId, status.status);
    //     });
    // };

    // const endCall = () => {
    //     console.log("geTract", Stream);
    //     HttpClient.requestData("event/-table", "POST", { id: leaveId }).then(
    //         (res) => {
    //             console.log(res, "res");
    //             socket.emit("bye_bye", { userId: UserId, status: "leave" });
    //             peerServer.destroy();
    //             socket.close();
    //             let track = Stream.getTracks();

    //             track.forEach((element) => {
    //                 element.stop();
    //             });
    //             alert("Called End");

    //             navigate(-1);
    //         }
    //     );
    // };

    // const toggleModal = () => {
    //     setModal(!modal);
    // };

    const addRemoteStream = (id, stream) => {
        let video = document.getElementById(id)
        video.srcObject = stream
        video.addEventListener("loadedmetadata", () => {
            video.play();
        });
    }
    const endCall=()=>{
        let track = Stream.getTracks();
        console.log(Stream);
        track.forEach((element) => {
          element.stop();
        });
        console.log("sdgcshbjnkmlz");
        socket.emit("left",{roomID: id, data:{}})
        alert("You Left the Call")
        navigate("/dashboard")

    }

    return (
        <div className='video-main'>
            <section className="video__chat_page clearfix">
                <div className="container-fluid px-lg-0">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-9 col-12">
                            <div className="main_display">
                                {/* <img src={video1} /> */}
                                <video id='own_video' className='videoElement' />

                                <div className="Ann_Rosserbtnall d-flex">
                                    <div className="Ann_Rosser_btn mr-3">
                                        <a href="#">Ann Rosser</a>
                                    </div>
                                    <div className="pin_btn">
                                        <a href="#">
                                            <img src={video5} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="main_dis_bar-chat">
                                <a href="#">
                                    <i className="fa-solid fa-chart-simple" />
                                </a>
                            </div>

                            {/* <Participants /> */}
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className='video_scroll'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        {
                                            remoteStreamStatus ? <div className='box-video'>
                                                <div className='not_video'>
                                                    <video src="" id="remote_stream" height="100%" className='videoElement'></video>
                                                </div>
                                            </div> :
                                                <div className='box-video'>
                                                    <div className='not_video'>
                                                        <img src={video2} />
                                                    </div>
                                                </div>

                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <AllParticipantsList /> */}
                    </div>
                </div>

            </section>
            <VideoCallingBottomBar offCamera={offCamera} videoToggle={videoToggle} offMic={offMic} audioToggle={audioToggle} endCall={endCall} />

        </div>
    )
}
