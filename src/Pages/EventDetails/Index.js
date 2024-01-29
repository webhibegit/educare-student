import React from 'react'
import Speaker from '../SessionDetails/Speaker';
import Sponsor from '../SessionDetails/Sponsor';
import EventdetailsBanner from './EventdetailsBanner';
import EventdetailsCategory from "./EventdetailsCategory";

export default function Index() {
    return (
        <>
            <div className="container-fluid top-section">
                <div className="_enrollment p-3 ">
                    <div className='cust-row'>
                        <div className='col-lg-8 col-md-12 col-12'>
                            <div className='' style={{ width: "100%", }}>
                                <EventdetailsBanner />
                                
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-12 col-12'>
                            <div className='' style={{ width: "100%", }}>
                                <div className='engage_excite_box'>
                                    <div className='top_area'>
                                        <div className='head'>
                                            <h4>Engage excite inspire</h4>
                                        </div>
                                        <div className='date'>
                                            <p>28 Oct - 2 Nov</p>
                                        </div>
                                        <div className='text'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum ac diam at convallis. Nulla diam libero, maximus sed justo et, convallis tempus dolor. Etiam non magna vel felis.</p>
                                        </div>
                                        <div className='hosted_by'>
                                            <p>Hosted By<span> James Dentley</span></p>
                                        </div>
                                    </div>
                                    <div className='bottom_area'>
                                        <div className='d-flex align-aitms-center justify-content-between'>
                                            <div className='start_time'>
                                                <p>Start Time</p>
                                                <h5>2:45 PM <span>BST</span></h5>
                                            </div>
                                            <div className='end_time'>
                                                <p>End Time</p>
                                                <h5>6:20 PM <span>BST</span></h5>
                                            </div>
                                        </div>
                                        <div className='buy_ticket'>
                                            <button type='button' className='btn'>Buy Ticket</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <EventdetailsCategory />
                    <Speaker/>
                    <Sponsor/>
                </div>
            </div>
        </>
    )
}
