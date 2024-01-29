import React from 'react'
import whiteLogo from "../../assets/logo.png";
import eventbanner from "../../assets/images/bgEvents.png";

export default function EventDetails() {
    return (
        <>
            <div className='eventdetails_banner'>
                <div className='row'>
                    <div className='col-lg-7 col-md-12 col-12 m-auto pb-3'>
                        <div className='left_cnt'>
                            <div className="companylogo" style={{ width: '100%', maxWidth: "120px", display: 'block', marginBottom: "40px" }}>
                                <img className='img-fluid' src={whiteLogo} alt="Logo" />
                            </div>
                            <div className='event_date'>
                                <p>10th June 2023</p>
                            </div>
                            <div className='event_heading'>
                                <h4><span>Shaping the future</span><br /><span>of the Diversity Marketing</span></h4>
                            </div>

                            <div className='event_time'>
                                <p>5:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 col-12 mb-2'>
                        <div className="banner_img">
                            <img src={eventbanner} className='img-fluid' alt='image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
