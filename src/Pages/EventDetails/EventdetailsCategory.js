import React from 'react'
import eventbanner from "../../assets/images/bgEvents.png";
import uim_calender from '../../assets/images/icon/uim_calender.png';
import eventprofile from "../../assets/images/commentProfile.png";
import sponsorsimage from "../../assets/images/sponsors1.png";
import sponsorsimage2 from "../../assets/images/sponsors2.png";
import sponsorsimage3 from "../../assets/images/sponsors3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
export default function EventdetailsCategory() {
    var settings = {
        dots: false,
        arrow:false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
           
            }
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className='eventdetails_category'>
                <div className='tab_area'>
                    <div className='tab_box active'>
                        <a href='#aboutthis_event' className='overview'>
                            <span>Overview</span>
                        </a>
                    </div>

                    <div className='tab_box'>
                        <a href='#sessions_event' className='sessions'>
                            <span>Sessions</span>
                        </a>
                    </div>

                    <div className='tab_box'>
                        <a href='#speakerPart' className='speakers'>
                            <span>Host & Speakers</span>
                        </a>
                    </div>

                    <div className='tab_box'>
                        <a href='#sponsorPart' className='sponsors'>
                            <span>Sponsors</span>
                        </a>
                    </div>
                </div>


                <div className='' id='aboutthis_event'>
                    <div className='head_line'>
                        <h4>About this event</h4>
                    </div>
                    <div className='text'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div className='head_line'>
                        <h4>Event Content</h4>
                    </div>
                    <div className='text'>
                        <ul>
                            <li>Over 40 lectures and 60 hours of content</li>
                            <li>Live Project End to End Software Testing Training Included</li>
                            <li>Information packed practical training starting from basics to advanced testing techniques.</li>
                            <li>Course content designed by considering current software testing technology and the job market.</li>
                            <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
                            <li>Practical assignments at the end of every session.</li>
                        </ul>
                    </div>


                </div>

                <hr />


                <div className='' id='sessions_event'>
                    <div className='top_area' style={{ marginBottom: "30px" }}>
                        <div className='row' style={{ alignItems: "center" }}>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='d-flex align-items-center'>
                                    <div className='head'>
                                        <h4>Sessions</h4>
                                    </div>
                                    <div class="form-group p-0 m-0">
                                        <select class="form-control" id="">
                                            <option selected>Up coming</option>
                                            <option>coming</option>
                                            <option>coming</option>
                                            <option>coming</option>
                                            <option>coming</option>
                                            <option>coming</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='d-flex'>
                                    <div className='date_box active'>
                                        <h6>12</h6>
                                        <p>Feb</p>
                                    </div>
                                    <div className='date_box'>
                                        <h6>13</h6>
                                        <p>Feb</p>
                                    </div>
                                    <div className='date_box'>
                                        <h6>14</h6>
                                        <p>Feb</p>
                                    </div>
                                    <div className='date_box'>
                                        <h6>15</h6>
                                        <p>Feb</p>
                                    </div>
                                    <div className='date_box'>
                                        <h6>16</h6>
                                        <p>Feb</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sessions_card'>
                        <div className='row'>
                            <div className='col-lg-5 col-md-12 col-12 mb-3'>
                                <div className='left_cnt p-0 m-0'>
                                   <Link to="/session-details"> <div className='sessions_img'>
                                        <img src={eventbanner} className='img-fluid' alt='image' />
                                    </div></Link>
                                    <div className='time_area'>
                                        <div className='time_box'>
                                            <p>Start Time</p>
                                            <h6>Feb 28, 2:45 PM</h6>
                                        </div>
                                        <div className='time_box'>
                                            <p>End Time</p>
                                            <h6>Feb 28, 6:45 PM</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7 col-md-12 col-12 mb-3'>
                                <div className='right_cnt p-0 m-0'>
                                    <div className='head'>
                                        <h4>Engage excite inspire</h4>
                                        <div className='upcoming_btn'>
                                            <button type='button' className='btn'>Upcoming</button>
                                        </div>
                                    </div>
                                    <div className='Hostedby'>
                                        <h5>Hosted By <span> James Dentley</span></h5>
                                    </div>
                                    <div className="timing-details">
                                        <div className="caleder calenderBg">
                                            <img src={uim_calender} />
                                        </div>
                                        <div className="calender">
                                            <p className="calender-date">October 14</p>
                                            <p className="calender-time">8:00 - 10:00 pm</p>
                                        </div>
                                    </div>

                                    <div className='speakers_area'>
                                        <div className='head'>
                                            <h6>Speakers</h6>
                                        </div>

                                        <div className='eventspeakers_slider'>
                                        <Slider {...settings}>
                                            <div className='speakers_box'>
                                                <div className='profile'>
                                                    <img src={eventprofile} className='img-fluid' alt='profile' />
                                                </div>
                                                <div className='text_area'>
                                                    <h4>Marcus Westervelt</h4>
                                                    <p>CEO, OLX Org.</p>
                                                </div>
                                            </div>
                                            <div className='speakers_box'>
                                                <div className='profile'>
                                                    <img src={eventprofile} className='img-fluid' alt='profile' />
                                                </div>
                                                <div className='text_area'>
                                                    <h4>Marcus Westervelt</h4>
                                                    <p>CEO, OLX Org.</p>
                                                </div>
                                            </div>
                                            <div className='speakers_box'>
                                                <div className='profile'>
                                                    <img src={eventprofile} className='img-fluid' alt='profile' />
                                                </div>
                                                <div className='text_area'>
                                                    <h4>Marcus Westervelt</h4>
                                                    <p>CEO, OLX Org.</p>
                                                </div>
                                            </div>
                                        </Slider>
                                        </div>
                                    </div>


                                    <div className='sponsors_area'>
                                        <div className='head'>
                                            <h6>Sponsors</h6>
                                        </div>

                                        <div className='sponsors_box_all'>
                                            <div className='sponsors_box'>
                                                <img src={sponsorsimage} className='img-fluid' alt='Sponsors' />
                                            </div>
                                            <div className='sponsors_box'>
                                                <img src={sponsorsimage2} className='img-fluid' alt='Sponsors' />
                                            </div>
                                            <div className='sponsors_box'>
                                                <img src={sponsorsimage3} className='img-fluid' alt='Sponsors' />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
