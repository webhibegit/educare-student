import React, {useState} from 'react'
import videoscreen from "../../assets/images/videocall.png";
import videoscreenadd1 from "../../assets/images/groupimgone.jpg";
import videoscreenadd2 from "../../assets/images/groupimgtwo.jpg";
import videoscreenadd3 from "../../assets/images/groupimgthree.jpg";
import videoscreenadd4 from "../../assets/images/groupimgfour.jpg";
import videorecord from "../../assets/images/icon/record.png";
import sneha from "../../assets/images/sneha.jpg";
export default function Index() {
    const sideNav = () => {
        document.getElementById("mySidebar").style.display = "block";
      };
      const sideNavClose = () => {
        document.getElementById("mySidebar").style.display = "none";
      };
    // const [sidebarOpen, setSideBarOpen] = useState(false);
    // const handleViewSidebar = () => {
    //   setSideBarOpen(!sidebarOpen);
    // };

    return (
        <>
            <div className="container-fluid top-section">
                <div className="p-3">
                    <div className="_enrollment">

                        <section id="video-chat">

                            <div className="cust-row">
                                <div className="col-md-8">
                                    <div className="video-cl-left">
                                        <div className="video-cl_heading">
                                            <div className="previcon">
                                                <a href="#">
                                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                           
                                        </div>

                                        <div className="invite-add">
                                            <div className="invite-cl">
                                                <span className="grp-icon">
                                                    <i className="fa-solid fa-user-group" />
                                                </span>
                                                <span className="ivited-text">Total Member</span>
                                                <span className="invite-no">6</span>
                                            </div>
                                        </div>
                                        <div className="video-screen" style={{ backgroundImage: `url('${videoscreen}')`, position: 'relative' }}>
                                            <div className="timing">
                                                <ul>
                                                    <li>
                                                        <img
                                                            src={videorecord}
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                    </li>
                                                    <li>
                                                        <a href="#">03.15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="video-group">
                                                <ul>
                                                    <li className="group-one" style={{ backgroundImage: `url('${videoscreenadd1}')`, position: 'relative' }} />
                                                    <li className="group-two" style={{ backgroundImage: `url('${videoscreenadd2}')`, position: 'relative' }} />
                                                    <li className="group-three" style={{ backgroundImage: `url('${videoscreenadd3}')`, position: 'relative' }} />
                                                    {/* <li className="group-four" style={{ backgroundImage: `url('${videoscreenadd4}')`, position: 'relative' }} /> */}
                                                    <li  className='moreParticipents'><span><i class="fa-solid fa-ellipsis"></i></span></li>
                                                </ul>
                                            </div>
                                            <div className='SPEAKER'></div>
                                            <div className="call-function">
                                                <ul>
                                                    <li className="full-screen">
                                                        <a href="#">
                                                            <i className="fa-solid fa-minimize" />
                                                        </a>
                                                    </li>
                                                    <li className="full-screen">
                                                        <a href="#">
                                                            <i className="fa-solid fa-volume-xmark" />
                                                        </a>
                                                    </li>
                                                    <li className="hang-out">
                                                        <a href="#">
                                                            <i className="fa-solid fa-phone" />
                                                        </a>
                                                    </li>
                                                    <li className="full-screen">
                                                        <a href="#">
                                                            <i className="fa-solid fa-video" />
                                                        </a>
                                                    </li>
                                                    <li className="full-screen">
                                                        <a href="#" onClick={sideNav}>
                                                            <i className="fa-solid fa-gear" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-4">
                                    <div className="video-cl_rgt">
                                        <div className="group-chat">
                                        <div className="groupcht-heading">
                                                    <h5>Group Chat</h5>
                                                </div>
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button
                                                        className="nav-link active"
                                                        id="nav-home-tab"
                                                        data-toggle="tab"
                                                        data-target="#nav-home"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="nav-home"
                                                        aria-selected="true"
                                                    >
                                                        Message
                                                    </button>
                                                    <button
                                                        className="nav-link"
                                                        id="v-pills-settings-tab"
                                                        data-toggle="pill"
                                                        data-target="#v-pills-settings"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="v-pills-settings"
                                                        aria-selected="false"
                                                    >
                                                        Settings
                                                    </button>


                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="nav-home"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-home-tab"
                                                >
                                                    <div className="chat-box">
                                                        <div className="chat-main mt-3">
                                                            <h4 className="sender-name">Sneha </h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={sneha} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p>Hi how are you</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-main mt-3">
                                                            <h4 className="sender-name">Rajib</h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={videoscreenadd1} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p>Hey! i'm waiting</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-main mt-3">
                                                            <h4 className="sender-name">Aritra</h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={videoscreenadd2} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p>Hellow all</p>
                                                                    <p className='mt-2'>Are we waiting for absesnt teammates?</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-main rgtChat mt-3">
                                                            <h4 className="sender-name text-right">You </h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={videoscreenadd3} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p>Hi how are you</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-main mt-3">
                                                            <h4 className="sender-name">Sneha </h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={sneha} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p> <span className="invite-no"><i class="fa-solid fa-phone-volume"></i></span>Started the call</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='typoShowing'>
                                                            <a><span><i className="fa fa-commenting-o" aria-hidden="true"></i></span>Martin is typing</a>
                                                        </div>

                                                        <div className='typingSpace'>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="exampleFormControlInput1"
                                                                placeholder="Write your message..."
                                                            />
                                                            <span className=""><i class="fa fa-paper-plane" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-settings"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-settings-tab"
                                                >
                                                    ...
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-md-4">
                              
                                    <div id="mySidebar" className="video-cl_rgt">
                                        <div className="group-chat">
                                            <div className="groupcht-heading mb-2">
                                                <h5>Group Chat</h5>
                                                <button onClick={sideNavClose}><i class="fa-regular fa-circle-xmark"></i></button>
                                            </div>
                                        
                                            <ul className="nav nav-pills">
                                                <li className="active">
                                                    <a className="show" data-toggle="pill" href="#message">
                                                        Messages
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-toggle="pill" href="#participants">
                                                        Participants
                                                    </a>
                                                </li>

                                            </ul>
                                            <div className="tab-content">
                                                <div id="message" className="tab-pane fade in active show">
                                                    <div className="chat-box">
                                                        <div className='texoverflow'>
                                                        <div className="chat-main mt-3">
                                                            <h4 className="sender-name">Sneha </h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={sneha} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p>Hi how are you</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-main mt-3">
                                                            <h4 className="sender-name">Rajib</h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={videoscreenadd1} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p>Hey! i'm waiting</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-main mt-3">
                                                            <h4 className="sender-name">Aritra</h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={videoscreenadd2} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p>Hellow all</p>
                                                                    <p className='mt-2'>Are we waiting for absesnt teammates?</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-main rgtChat mt-3">
                                                            <h4 className="sender-name text-right">You </h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={videoscreenadd3} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p>Hi how are you</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-main mt-3">
                                                            <h4 className="sender-name">Sneha </h4>
                                                            <div className="chat-content">
                                                                <div className="chatimg">
                                                                    <img src={sneha} alt="" />
                                                                </div>
                                                                <div className="chattext">
                                                                    <p> <span className="invite-no"><i class="fa-solid fa-phone-volume"></i></span>Started the call</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='typoShowing'>
                                                            <a><span><i className="fa fa-commenting-o" aria-hidden="true"></i></span>Martin is typing</a>
                                                        </div>
                                                        </div>
                                                                 
                                                        <div className='typingSpace'>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="exampleFormControlInput1"
                                                                placeholder="Write your message..."
                                                            />
                                                            <span className=""><i class="fa fa-paper-plane" aria-hidden="true"></i></span>
                                                        </div>

                                                    </div>
                                      
                                                </div>
                                                <div id="participants" className="tab-pane fade">
                                                <div className='participantAll'>
                                                        <div className='participant'>
                                                            <div className='Image'>
                                                                <img src={videoscreenadd3} />
                                                                <div className='activeDot'></div>
                                                            </div>
                                                            <div className='Name'>Rinik</div>
                                                        </div>
                                                        <div className='participant'>
                                                            <div className='Image'>
                                                                <img src={sneha} />
                                                                <div className='offlineDot'></div>
                                                            </div>
                                                            <div className='Name'>Sneha</div>
                                                        </div>
                                                        <div className='participant'>
                                                            <div className='Image'>
                                                                <img src={videoscreenadd4} />
                                                                <div className='activeDot'></div>
                                                            </div>
                                                            <div className='Name'>Rajib</div>
                                                        </div>
                                                        <div className='participant'>
                                                            <div className='Image'>
                                                                <img src={videoscreenadd2} />
                                                                <div className='activeDot'></div>
                                                            </div>
                                                            <div className='Name'>Aritra</div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>








                                        </div>
                                    </div>
                                    
                                </div>

                            </div>

                        </section>

                    </div >
                </div >
            </div >

        </>
    )
}
