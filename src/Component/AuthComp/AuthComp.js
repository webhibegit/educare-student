import React from "react";
import { ToastContainer, toast,Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgSignup from "../../assets/images/bgSignup.png";


export default function AuthComp({children}) {
  return (
    <>
      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Zoom}
      limit={3}
      theme="colored"
       />
      <div id="wrapper">
        <div
          id="content-wrapper"
          className="d-flex flex-column"
          style={{ background: "#fff" }}
        >
          <div id="content">
            <div
              className="container-fluid"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <div
                className="_enrollment"
                style={{ marginLeft: "0", marginTop: "0" }}
              >
                <div className="row">
                  <div className="col-md-5 col-lg-5 col-12">
                    <div className="bg">
                      <img src={bgSignup} className="img-fluid" alt="Image" />
                    </div>
                  </div>
                    {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
