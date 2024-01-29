import React from 'react'
import host1 from "../../assets/images/WhatsApp Image 2023-01-12 at 16.44.19.jpeg"
import host2 from "../../assets/images/WhatsApp Image 2023-01-12 at 16.44.23.jpeg"
import host3 from "../../assets/images/WhatsApp Image 2023-01-12 at 16.44.28.jpeg"
import host4 from "../../assets/images/WhatsApp Image 2023-01-12 at 16.44.05.jpeg"
import host5 from "../../assets/images/WhatsApp Image 2023-01-12 at 16.44.35.jpeg"
import host6 from "../../assets/images/WhatsApp Image 2023-01-12 at 16.44.38.jpeg"
import host7 from "../../assets/images/WhatsApp Image 2023-01-12 at 16.44.42.jpeg"
import host8 from "../../assets/images/WhatsApp Image 2023-01-12 at 16.44.31.jpeg"
import { Link } from 'react-router-dom'
export default function Speaker() {
    return (
        <>
        <div id="speakerPart">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                <div className="row">
                    <div className="col-md-4 col-12 host_top_heading">
                        <h4>Host &amp; Speakers</h4>
                    </div>
                    <div className="col-md-8 col-12 host_description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            malesuada luctus est, venenatis placerat velit aliquet id. Integer
                            porta nunc nec est faucibus convallis. Morbi et felis a lorem pharetra
                            consectetur nec eget ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <section id="hosting_members">
                <div className="container-fluid">
                    <div className="row mb-3">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-2">
                            <Link to="/speaker-details">
                                <div className="main-box">
                                    <div className="member_image">
                                        <img src={host1} alt="pic" />
                                    </div>
                                    <div className="member_content">
                                        <h5>James Dentley</h5>
                                        <h6>Founder, JD3 TV</h6>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-2">
                            <Link to="/speaker-details">
                                <div className="main-box">
                                    <div className="member_image">
                                        <img src={host2} alt="pic" />
                                    </div>
                                    <div className="member_content">
                                        <h5>Lydia Dokidis</h5>
                                        <h6>Managing Director, Green Co.</h6>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-2">
                            <Link to="/speaker-details">
                                <div className="main-box">
                                    <div className="member_image">
                                        <img src={host3} alt="pic" />
                                    </div>
                                    <div className="member_content">
                                        <h5>Aspen Philips</h5>
                                        <h6>Managing Director, Green Co.</h6>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-2">
                            <Link to="/speaker-details">
                                <div className="main-box">
                                    <div className="member_image">
                                        <img src={host4} alt="pic" />
                                    </div>
                                    <div className="member_content">
                                        <h5>Nolan Westervelt</h5>
                                        <h6>Managing Director, Green Co.</h6>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-2">
                            <Link to="/speaker-details">
                                <div className="main-box">
                                    <div className="member_image">
                                        <img src={host5} alt="pic" />
                                    </div>
                                    <div className="member_content">
                                        <h5>Haylie Dias</h5>
                                        <h6>Managing Director, Green Co.</h6>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-2">
                            <Link to="/speaker-details">
                                <div className="main-box">
                                    <div className="member_image">
                                        <img src={host6} alt="pic" />
                                    </div>
                                    <div className="member_content">
                                        <h5>Ryan Kenter</h5>
                                        <h6>Managing Director, Green Co.</h6>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-2">
                            <Link to="/speaker-details">
                                <div className="main-box">
                                    <div className="member_image">
                                        <img src={host7} alt="pic" />
                                    </div>
                                    <div className="member_content">
                                        <h5>Anika Dokidis</h5>
                                        <h6>Managing Director, Green Co.</h6>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-2">
                            <Link to="/speaker-details">
                                <div className="main-box">
                                    <div className="member_image">
                                        <img src={host8} alt="pic" />
                                    </div>
                                    <div className="member_content">
                                        <h5>Ahmad George</h5>
                                        <h6>Managing Director, Green Co.</h6>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            </div>

        </>
    )
}
