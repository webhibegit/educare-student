import React from "react";
import { useNavigate } from "react-router-dom";

import bgSignup from "../../assets/images/bgSignup.png";
import logo from "../../assets/logo.png";
import g12 from "../../assets/images/g12.png";
import { useEffect } from "react";
import HttpClient from "../../utils/HttpClient";
import { useDispatch } from "react-redux";
import { setuser } from "../../Redux/reducer/User";
import { reactLocalStorage } from "reactjs-localstorage";

export default function RegistrationSuccesfull() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = reactLocalStorage.getObject("userData");
  const login_status = reactLocalStorage.get("login_status");
  let redirectUrl = reactLocalStorage.get("redirectUrl");
  console.log("redirectUrl", redirectUrl);

  const setUserData = async () => {
    // console.log(userData);
    if (userData && login_status) {
      const result = await HttpClient.requestData("get-profile", "GET");
      // console.log(result);
      if (result && result.status) {
        dispatch(setuser(result.data));
        if (redirectUrl.includes("all_courses")) {
          navigate(`/${redirectUrl}`);
        } else if (redirectUrl.includes("courses_detail")) {
          navigate(`/${redirectUrl.slice(0, 14)}/${redirectUrl.slice(15)}`);
        } else {
          navigate("/dashboard");
        }
      }
    }
  };

  return (
    <>
      <div id="wrapper">
        <div
          id="content-wrapper"
          className="d-flex flex-column"
          style={{ background: "#fff" }}
        >
          <div id="content">
            <div
              className="container-fluid"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <div className="_enrollment" style={{ marginLeft: "0", marginTop: "0"}}>
                <div className="row">
                  <div className="col-md-5 col-lg-5 col-12">
                    <div className="bg">
                      <img src={bgSignup} className="img-fluid" alt="Image" />
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-7 col-12" style={{height: "100vh"}}>
                    <div
                      className="studentUploadrap"
                      style={{ maxWidth: "400px", height: "100%" }}
                    >
                      <div className="successfull text-left">
                        <img src={logo} className="site-logo" />
                        <img src={g12} className="img-fluid" />
                        <p className="successfulText">
                          Registration Successful
                        </p>
                        <div className="text-center">
                          <button
                            className=" btn-successfull"
                            onClick={() => setUserData()}
                            type="button"
                          >
                            Continue
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
