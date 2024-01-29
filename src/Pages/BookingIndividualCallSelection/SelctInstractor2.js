import React from "react";
import Background from "../../assets/images/teacher-profile-bg.png";
import PersonBack from "../../assets/images/teacher.png";
export default function SelctInstractor2() {
  return (
    <>
      <div className="container-fluid  pl-0 pr-0">
        <div className="_enrollment">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="instructor-top-box">
                    <div className="instructor-main-box">
                      <h4>Book Individual Live Coaching Call</h4>
                      <div className="cancel-btn-box">
                        <a
                          href="#"
                          className="btn cancel-btn"
                          style={{
                            border: '1px solid #92929D',
                            borderRadius: '10px',
                            fontSize: '14px',
                            color: '#858796',
                            padding: '6px 30px',
                          }}
                        >
                          Cancel
                        </a>
                      </div>
                      <div className="instructor-tap-box">
                        <div className="tap-click-box">
                          <h6>Choose Teacher First</h6>
                          <p>This approach is for choosing your preferred teacher first, then timetable.</p>
                        </div>
                        <div className="tap-click-box">
                          <h6>Choose Teacher First</h6>
                          <p>This approach is for choosing your preferred teacher first, then timetable.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-11 col-lg-11 col-xl-11 col-11">
                  <div className="pl-4 d-xl-flex d-lg-block align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-center session_coaching my-xl-5 my-lg-3 my-3 px-4">
                      <i
                        class="fa fa-info-circle mr-2"
                        aria-hidden="true"
                        style={{ color: '#038890', fontSize: '21px' }}
                      ></i>
                      <span className="text_color">
                        You can select only one date and time slot for your coaching session.
                      </span>
                    </div>
                    <div className="live-top-right-box ml-0 mb-3" style={{ float: 'none', borderRadius: '10px' }}>
                      <a href="#" className="btn sort-btn" style={{ color: '#858796' }}>
                        Sort By:
                      </a>
                      <select className="option-live ml-auto" style={{ padding: '0 22px 0 0' }}>
                        <option>Most Popular</option>
                        <option>Most Popular</option>
                        <option>Most Popular</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-8 col-12">
                  <div className="px-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-12 col-xl-8">
                            <div className="callender-wrap">
                              <div className="callender-box">
                                <div className="calenderflex d-flex align-items-center justify-content-between">
                                  <div className="d-sm-flex d-block align-items-center ">
                                    <h4 className="mr-3 m-0 pb-3 pb-sm-0">January 2022</h4>
                                    <img src="./images/icon/prev.png" alt="" className="img-fluid mr-2" />
                                    <img src="./images/icon/next.png" alt="" className="img-fluid" />
                                  </div>
                                  <div>
                                    <span className="time_Zone">8th jan, Time Zone : (UTC)+6</span>
                                  </div>
                                </div>
                                <div className="mobile_Tableresponsive">
                                  <table
                                    className="table_calender"
                                    bgcolor="white"
                                    align="center"
                                    cellSpacing={21}
                                    cellPadding={21}
                                  >
                                    <thead>
                                      <tr>
                                        <th>Sun</th>
                                        <th>Mon</th>
                                        <th>Tue</th>
                                        <th>Wed</th>
                                        <th>Thu</th>
                                        <th>Fri</th>
                                        <th>sat</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="last-date">30</td>
                                        <td className="last-date">31</td>
                                        <td>01</td>
                                        <td>03</td>
                                        <td>04</td>
                                        <td>05</td>
                                        <td>06</td>
                                      </tr>
                                      <tr />
                                      <tr>
                                        <td className="">07</td>
                                        <td className="active-date">08</td>
                                        <td>09</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>13</td>
                                      </tr>
                                      <tr>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                        <td>17</td>
                                        <td>18</td>
                                        <td>19</td>
                                        <td>20</td>
                                      </tr>
                                      <tr>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                      </tr>
                                      <tr>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td className="last-date">31</td>
                                        <td className="last-date">01</td>
                                        <td className="last-date">02</td>
                                        <td className="last-date">03</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-12 col-xl-4">
                            <div className="callender-box">
                              <div className="calenderflex py-4">
                                <h3 className="hr_format" style={{ color: '#44444F' }}>
                                  24 HR Format
                                </h3>
                                <div className="time_Table">
                                  <button className="btn time_btn my-2">
                                    <span>10:00-11:00</span>
                                  </button>
                                  <button className="btn time_btn active my-2">
                                    <span>10:00-11:00</span>
                                  </button>
                                  <button className="btn time_btn my-2">
                                    <span>10:00-11:00</span>
                                  </button>
                                  <button className="btn time_btn my-2">
                                    <span>10:00-11:00</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="card my-5">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between form_option">
                          <div>
                            <h3 className="fill_up">Fill up neccessarry information</h3>
                          </div>
                          <div className="d-flex align-items-center">
                            <input type="checkbox" className="checkbox mr-2" />
                            <span className="grab">Grab Info from profile</span>
                          </div>
                        </div>
                        <div className="row my-4 form_info">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">Your Name</label>
                              <input type="text" className="form-control" placeholder="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">Your E-mail</label>
                              <input type="text" className="form-control" placeholder="" />
                            </div>
                          </div>
                          <div className="col-md-12 col-12">
                            <div className="form-group">
                              <label htmlFor="">Note</label>
                              <textarea className="form-control" defaultValue={''} />
                            </div>
                          </div>
                          <div className="col-md-12 col-12">
                            <div className="form-group">
                              <button className="btn submit_btn">
                                <span>Submit</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-3 col-12">
                  <div className="px-4 px-xl-0">
                    <div className="last-content-box mb-4">
                      <div
                        className="last-top-section"
                        style={{
                          backgroundImage: `url("${Background}")`,
                        }}
                      ></div>
                      <div className="last-bootom-section">
                        <a href="#" className="last-img">
                          <img src={PersonBack} />
                        </a>
                        <h5>Kadin Mango</h5>
                        <h6 className="rate">
                          <a href="#">
                            <i class="fa fa-star" aria-hidden="true" style={{ color: '#FFC700' }}></i>
                          </a>
                          4.6/5
                        </h6>
                        <h6 className="rate">
                          <a href="#">
                            <i class="fa fa-usd" aria-hidden="true"></i>
                          </a>
                          4.6/5
                        </h6>
                        <div className="ins-details-wrap">
                          <div className="ins-tap-btn-box">
                            <a href="#" className="btn ins-tap-btn">
                              Speacking
                            </a>
                          </div>
                          <div className="ins-tap-btn-box">
                            <a href="#" className="btn ins-tap-btn">
                              English
                            </a>
                          </div>
                          <div className="number-box">
                            <h6>+3</h6>
                          </div>
                        </div>
                        <div className="ins-view-btn-box">
                          <a href="#" className="btn ins-view-btn">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="last-content-box mb-4">
                      <div
                        className="last-top-section"
                        style={{
                          backgroundImage: `url("${Background}")`,
                        }}
                      ></div>
                      <div className="last-bootom-section">
                        <a href="#" className="last-img">
                          <img src={PersonBack} />
                        </a>
                        <h5>Kadin Mango</h5>
                        <h6 className="rate">
                          <a href="#">
                            <i class="fa fa-star" aria-hidden="true" style={{ color: '#FFC700' }}></i>
                          </a>
                          4.6/5
                        </h6>
                        <h6 className="rate">
                          <a href="#">
                            <i class="fa fa-usd" aria-hidden="true"></i>
                          </a>
                          4.6/5
                        </h6>
                        <div className="ins-details-wrap">
                          <div className="ins-tap-btn-box">
                            <a href="#" className="btn ins-tap-btn">
                              Speacking
                            </a>
                          </div>
                          <div className="ins-tap-btn-box">
                            <a href="#" className="btn ins-tap-btn">
                              English
                            </a>
                          </div>
                          <div className="number-box">
                            <h6>+3</h6>
                          </div>
                        </div>
                        <div className="ins-view-btn-box">
                          <a href="#" className="btn ins-view-btn">
                            View Profile
                          </a>
                        </div>
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
  );

}