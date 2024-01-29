import React, { useState } from "react";
import bgSignup from "../../assets/images/bgSignup.png";
import logo from "../../assets/logo.png";
import uploadimg from "../../assets/images/uploadimg.png";
import { useNavigate } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthComp from "../../Component/AuthComp/AuthComp";
import Loader from "../../Component/Loader/DotLoadinButton"


export default function UploadProfilePicture() {
  const [image, setImage] = useState("");
  const [imagePrv, setImagePrv] = useState("");
  const[loader,setLoader]=useState(true)


  const navigate = useNavigate();
  const uploadProfilePicture = async (e) => {
    let image = e;
    // console.log(image.size);
    if (image.size > 512000) {
      toast.error("image should be 500kb ** ");
    }
    let data = new FormData();
    data.append("image", e);
    let result = await HttpClient.fileUplode(
      "upload/profile-image",
      "POST",
      data
    );
    // console.log(result);
    if (result && result.status) {
      setImagePrv(result.url);
      setImage(result.url);
      // toast.success("Profile Image Uploaded")
    } else {
      toast.warn("Some Problem in Image Upload");
    }
  };
  // console.log(image);
  const postProfileImage = async () => {
    setLoader(true)
    if (image !== "") {
      let data = {
        image: image,
        nextRoute: "/upload_your_information",
      };
      const result = await HttpClient.requestData("update", "PUT", data);
      // console.log(result);
      if (result && result.status) {
        toast.success(result.message);
        setTimeout(() => {
          
          navigate("/upload_your_information");
        }, 2000);
      } else {
        toast.warn(result.status);
      }
    } else {
      toast.warning("Please upload a Image");
    }
    setTimeout(() => {
      
      setLoader(false)
    }, 2000);
  };
  return (
    <AuthComp>
      <div className="col-md-7 col-lg-7 col-12">
        <div className="studentUploadrap">
          <div className="studentUpload">
            <img src={logo} alt="LOGO" className="site-logo" />
            <p className="studenTName">Welcome</p>
            <div className="form-group" style={{ marginBottom: "30px" }}>
              <label
                className="form_label"
                style={{
                  display: "table",
                  margin: "auto",
                  color: "#44444F",
                  fontSize: "24px",
                  lineHeight: "30px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {imagePrv !== "" ? (
                  <img
                    src={imagePrv}
                    alt=""
                    style={{
                      marginBottom: 30,
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      display: "block",
                      objectFit: "cover",
                      margin: "0 auto 30px",
                    }}
                  />
                ) : (
                  <img
                    src={uploadimg}
                    alt=""
                    style={{
                      marginBottom: 30,
                      width: "100%",
                      display: "block",
                    }}
                  />
                )}
                <input
                  type="file"
                  className="form-control"
                  id="uploadFile"
                  accept="image/*"
                  onChange={(e) => uploadProfilePicture(e.target.files[0])}
                />
                Upload Profile Picture
                <label></label>
              </label>
            </div>
            <button
              onClick={() => postProfileImage()}
              type="button"
              className="btn btn-upload"
              disabled={loader}
            >
              {
                loader?
                <div
                style={{
                  position: "relative",
                  // top: "-22px",
                  textAlign: "center",
                  width: "90%",
                }}
              >
                <Loader />
              </div>
              :
              "Upload"
              
              }
              
            </button>
          </div>
        </div>
      </div>
    </AuthComp>
  );
}
