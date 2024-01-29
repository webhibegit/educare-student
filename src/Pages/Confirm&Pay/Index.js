import React from "react";
import Vector4 from "../../assets/images/icon/Vector (4).png"
import commentProfile from "../../assets/images/commentProfile.png"
import Vector1 from "../../assets/images/icon/Vector (1).png"
import Vector2 from "../../assets/images/icon/Vector (2).png"
import Vector5 from "../../assets/images/icon/Vector (5).png"
import logos_mastercard from "../../assets/images/icon/logos_mastercard.png"





export default function ConfirmAndPay() {
  return (
    <>
      <div className="container-fluid p-md-0">
        <div className="p-3 p-md-0">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-12 col-12 max_width">
                    <div className="card confirm_pay">
                      <div className="card-body">
                        <h3 className="py-2 confirm_pay_text d-flex align-items-center justify-content-between">
                          Confirm &amp; Pay{" "}
                          <span>
                            <img
                              src={Vector4}
                              alt="edit icons"
                              className="img-fluid "
                            />
                          </span>
                        </h3>
                        <div className="d-lg-block d-sm-flex d-md-flex d-block align-items-center justify-content-start justify-content-md-between justify-content-sm-between">
                          <div className="d-flex align-items-center justify-content-start py-4">
                            <div className="instructor_img mr-3">
                              <img
                                src={commentProfile}
                                alt="calender icons"
                                className="img-fluid"
                              />
                            </div>
                            <div className="">
                              <span className="d-block instructor_text">
                                Instructor
                              </span>
                              <span className="jordyn_saris_Time">
                                Jordyn Saris
                              </span>
                            </div>
                          </div>
                          <span className="border_line" />
                          <div className="d-flex align-items-center justify-content-start py-4">
                            <div className="calender_img mr-3">
                              <img
                                src={Vector1}
                                alt="calender icons"
                                className="img-fluid"
                              />
                            </div>
                            <div className="">
                              <span className="d-block instructor_text">
                                Total Payment
                              </span>
                              <span className="jordyn_saris_Time">500 USD</span>
                            </div>
                          </div>
                          <span className="border_line" />
                          <div className="d-flex align-items-center justify-content-start py-4">
                            <div className="calender_img mr-3">
                              <img
                                src={Vector2}
                                alt="calender icons"
                                className="img-fluid person_image"
                              />
                            </div>
                            <div className="">
                              <span className="d-block instructor_text">
                                Time &amp; Date
                              </span>
                              <span className="jordyn_saris_Time">
                                8th Jan | 11:00-12:00
                              </span>
                            </div>
                          </div>
                          <span className="border_line" />
                        </div>
                        <div className="form_readonly py-5">
                          <div className="form-group">
                            <label htmlFor="" className="field_label">
                              Name -{" "}
                            </label>
                            <span className="d-block field_value">
                              Abdun Nur Wasit
                            </span>
                          </div>
                          <div className="form-group">
                            <label htmlFor="" className="field_label">
                              Email -{" "}
                            </label>
                            <span className="d-block field_value">
                              abdunnurwasit1562000@gmail.com
                            </span>
                          </div>
                          <div className="form-group">
                            <label htmlFor="" className="field_label">
                              Note -
                            </label>
                            <span className="d-block field_value">
                              Last month we designed Testerz.io web platform
                              where Amazon sellers can get better reviews for
                              their products.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                    <div className="master_card">
                      <div className="d-flex py-4 my-3">
                        <button className="btn cancel_btn mr-3">
                          <span>Cancel</span>
                        </button>
                        <button className="btn back_btn">
                          <span>Back</span>
                        </button>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="pb-4">
                            <h3 className="card_no">Card Number</h3>
                            <span className="card_span">use 3-4 word code</span>
                          </div>
                          <div className="d-flex d-md-flex d-lg-flex align-items-center justify-content-between master_input mb-5 ">
                            <div className="">
                              <img
                                src={logos_mastercard}
                                alt="master card icons"
                                className="img-fluid mr-4"
                              />
                              <span className="number mr-4 mr-lg-2 mr-xl-4 mr-md-1">
                                2412
                              </span>
                              <span className="highpen mr-4 mr-lg-2 mr-xl-4 mr-md-1">
                                -
                              </span>
                              <span className="number mr-4 mr-lg-2 mr-xl-4 mr-md-1">
                                2412
                              </span>
                              <span className="highpen mr-4 mr-lg-2 mr-xl-4 mr-md-1">
                                -
                              </span>
                              <span className="number mr-4 mr-lg-2 mr-xl-4 mr-md-1">
                                2412
                              </span>
                              <span className="highpen mr-4 mr-lg-2 mr-xl-4 mr-md-1">
                                -
                              </span>
                              <span className="number mr-4 mr-lg-2 mr-xl-4 mr-md-1">
                                2412
                              </span>
                            </div>
                            <div className="">
                              <img
                                src={Vector4}
                                alt="tick icons"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="form-group row cvv mb-5 align-items-center">
                            <label
                              htmlFor=""
                              className="col-md-4 col-sm-4 col-12"
                            >
                              <span className="d-block cvv_number">
                                CVV Number{" "}
                              </span>
                              <span className="d-block userword">
                                use 3-4 word code
                              </span>
                            </label>
                            <input
                              type="number"
                              className="form-control offset-md-1 col-md-6 col-sm-7 col-12"
                            />
                          </div>
                          <div className="form-group row cvv mb-5 align-items-center">
                            <label
                              htmlFor=""
                              className="col-md-4 col-sm-4 col-12"
                            >
                              <span className="d-block cvv_number">
                                Expiry Date{" "}
                              </span>
                              <span className="d-block userword">
                                use 3-4 word code
                              </span>
                            </label>
                            <input
                              type="number"
                              className="form-control col-md-3 col-sm-3 col-12"
                            />
                            <div className="col-md-1 col-sm-1 col-1  text-center">
                              /
                            </div>
                            <input
                              type="number"
                              className="form-control col-md-3 col-sm-3 col-12"
                            />
                          </div>
                          <div className="form-group row cvv mb-5 align-items-center">
                            <label
                              htmlFor=""
                              className="col-md-4 col-sm-4 col-12"
                            >
                              <span className="d-block cvv_number">
                                Password{" "}
                              </span>
                              <span className="d-block userword">
                                use 3-4 word code
                              </span>
                            </label>
                            <input
                              type="password"
                              className="form-control col-md-7 col-sm-7 col-12"
                            />
                          </div>
                          <button className="btn pay_usd mb-3 mt-2">
                            <span>Pay - 500 USD</span>
                          </button>
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
