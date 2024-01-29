import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";

import bgSignup from "../../assets/images/bgSignup.png";
import logo from "../../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthComp from "../../Component/AuthComp/AuthComp";
import Loader from "../../Component/Loader/DotLoadinButton"


export default function ChoosePreference() {
  const [preference, setPreference] = useState([]);
  const [uploadPreference, setUploadPreference] = useState([]);
  const[loader,setLoader]=useState(false)

  const navigate = useNavigate();
  useEffect(() => {
    fatchPreference();
  }, []);
  // console.log("====", preference);
  const fatchPreference = async () => {
    const result = await HttpClient.requestData("get-prefrence", "GET");
    if (result && result.status) {
      setPreference(result.data);
    }
  };
  const uploadedData = (name, id) => {
    let data = {
      name: name,
      PrefrenceID: id,
    };
    let find = uploadPreference.find((item) => item.PrefrenceID === id);
    if (find) {
      // console.log(find);
      let updatedPref = uploadPreference.filter((item)=>item.PrefrenceID != id)
      setUploadPreference(updatedPref)

      // let a = uploadPreference.indexOf(find);
      // console.log(a);
      // uploadPreference.splice(a, 1);
      // toast.warn("Removed Preference");
    } else {
      setUploadPreference((prev) => [...prev, data]);
    }
  };
  // console.log(uploadPreference);
  const choose_preference_post = async () => {
    setLoader(true)
    if (uploadPreference != "") {
      let data = {
        prefrence: uploadPreference,
        nextRoute: "/upload_profile_image",
      };
      // console.log("new Data",data);
      let result = await HttpClient.requestData("update", "PUT", data);
      // console.log(result);
      if (result && result.status) {
        toast.success("Preference Added Successfully");
        setTimeout(() => {
          navigate("/upload_profile_image");
        }, 2000);
        
      } else {
        toast.warn(result.message);
      }
    } else {
      toast.warning("please select at least one  Preference");
    }
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  };
  return (
    <AuthComp>
      <div className="col-md-7 col-lg-7 col-12">
        <div className="choose-preference">
          <div className="choose-preference-item">
            <div className="siteLogo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="studentchoosePreference">
              <p className="entry-para">Choose Your Preferences </p>
            </div>
            <div className="multiple-buttons" id="multi-select-demo">
              {preference.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="multiple-buttons-item"
                    style={{
                      border: uploadPreference.some(
                        (item) => item.PrefrenceID == value._id
                      )
                        ? "1px solid blue"
                        : "",
                    }}
                  >
                    <button
                      id="preferenceBtn"
                      onClick={() => uploadedData(value.name, value._id)}
                      type="button"
                      className="btn selected"
                      style={{
                        textTransform: "capitalize"
                      }}
                    >
                      <img src={value.image} alt="" />
                      {value.name}
                    </button>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              onClick={choose_preference_post}
              className="btn btn-continue"
              style={{ marginTop: 18 }}
              disabled={loader}
            >
              {
                loader?
                <div
                style={{
                  position: "relative",
                  top: "-22px",
                  textAlign: "center",
                  width: "90%",
                }}
              >
                <Loader />
              </div>
              :
              "Continue"
              
              }
            </button>
          </div>
        </div>
      </div>
    </AuthComp>
  );
}
