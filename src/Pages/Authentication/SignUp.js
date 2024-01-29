import React, { useEffect, useState,useMemo } from "react";
import bgSignup from "../../assets/images/bgSignup.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import { setuser } from "../../Redux/reducer/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Component/Loader/DotLoadinButton"

import AuthComp from "../../Component/AuthComp/AuthComp";


export default function SignUP() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const [loading,setLoading]=useState(false)
  const [emailValidationMessage,setEmailValidationMessage]=useState("")
  const[passwordValidationMessage,setPasswordValidationMessage]=useState("")

  useEffect(() => {
    if (id !== "") {
      reactLocalStorage.set("redirectUrl", id?.slice(4));
    }
  }, []);

// regex

const validMail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/



  const navigate = useNavigate();
  console.log("id====", id?.slice(4));

  const register = async () => {
    setLoading(true)
    if (email != "" && password != "") {
      const data = {
        email: email,
        password: password,
        nextRoute: "/choose_preference",
      };
      // console.log(data);
      let result = await HttpClient.requestData("register", "POST", data);
      // console.log(result.data);
      if (result && result.status) {
        dispatch(setuser(result.data));
        reactLocalStorage.set("token", result.data.token);
        setTimeout(() => {
          
          navigate("/choose_preference");
        }, 2000);

        toast.success("Registration Successfully");
      } else {
        toast.warn(result.message);
      }
    } else {
      toast.error("* Required Fild");
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  };
  const showPassword = () => {
    if (document.querySelector("#pwd").type !== "text") {
      document.querySelector("#pwd").type = "text";
    } else {
      document.querySelector("#pwd").type = "password";
    }
  };
  const validation = useMemo(()=>{

    if(email !="" && password !="" && emailValidationMessage ==="" && passwordValidationMessage ==="" ){
      return true
    }
    return false

  },[email,password,emailValidationMessage,passwordValidationMessage])
  return (
    <AuthComp>
      <div className="col-md-7 col-lg-7 col-12">
        <div className="studenSignUp">
          <div className="studentSignUp">
            <div className="siteLogo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="studentSignUpTitle">
              <p className="entry-header">Sign Up</p>
              <p className="entry-para">
                Already have an account?{" "}
                <Link to={"/sign_in"} style={{ textDecoration: "none" }}>
                  <span className="sign-in-text">Sign in</span>
                </Link>
              </p>
            </div>
            <div className="SignUpForm">
              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if(validMail.test(e.target.value)){
                      setEmailValidationMessage("")
                        }else if(e.target.value===""){
                          setEmailValidationMessage("Please Enter Your Email address**")
                        }
                        else{
                          setEmailValidationMessage("Please Enter a Valid email address**")
                        }
                  }}
                  // onBlur={(e)=>{
                  //   // console.log(e.target.value);
                  //   if(validMail.test(e.target.value)){
                  //   }else if(e.target.value===""){
                  //     toast.error("Please Enter Your Email address")
                  //   }
                  //   else{
                  //     toast.error("Please Enter a Valid email address")
                  //   }
                  // }}
                />
                <span style={{color:"red"}}>{emailValidationMessage}</span>
              </div>
              <div
                className="form-group"
                style={{ position: "relative", marginBottom: "1rem" }}
              >
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if(e.target.value.length>=8){
                      setPasswordValidationMessage("")
                    }else  if(e.target.value===""){
                      setPasswordValidationMessage("Please Enter Your Password**")
                    }else{
                      setPasswordValidationMessage("your password should be at least 8 characters**")
                    }
                  }}
                  // onBlur={(e)=>{
                  //   console.log(e.target.value);
                  //   if(e.target.value.length>=8){
                  //   }else  if(e.target.value===""){
                  //     toast.error("Please Enter Your Password")
                  //   }else{
                  //     toast.error("your password should be at least 8 characters")
                  //   }
                  // }}
                />
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  style={{ cursor: "pointer" }}
                  onClick={() => showPassword()}
                ></i>
                <span style={{color:"red"}} >{passwordValidationMessage}</span>

              </div>
              <button onClick={register} className="btn btn-signUp" disabled={!validation}>
              {loading ? (
                  <div
                    style={{
                      position: "relative",
                      top: "-22px",
                      textAlign: "center",
                      width: "90%",
                      color:'#e2e5e7'
                    }}
                  >
                    <Loader />
                  </div>
                ) : (
                  "Sign Up"
                )}
                
              </button>
            </div>
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  height: "2px",
                  width: "218px",
                  backgroundColor: "#d3cbcb" 
                }}
              ></span>

              <p className="or" style={{ display: "inline-block" }}>
                OR
              </p>
              <span
                style={{
                  height: "2px",
                  width: "218px",
                  backgroundColor: "#d3cbcb",
                }}
              ></span>
            </div>
            <div className="socialIcon-Groups">
              <a href="#" role="button">
                <i className="fa fa-google fa-lg" />
                Google
              </a>
              <a href="#" role="button">
                <i className="fa fa-facebook-f fa-lg" />
                Facebook
              </a>
              <a href="#" role="button">
                <i className="fa fa-apple fa-lg" />
                Apple
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </AuthComp>
  );
}
