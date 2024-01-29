import React, { useState ,useMemo} from "react";
import bgSignup from "../../assets/images/bgSignup.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import { setuser } from "../../Redux/reducer/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Component/Loader/DotLoadinButton";
import AuthComp from "../../Component/AuthComp/AuthComp";

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailValidationMessage,setEmailValidationMessage]=useState("")
  const[passwordValidationMessage,setPasswordValidationMessage]=useState("")



  // regex

  const validMail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


  const navigate = useNavigate();
  const showPassword = () => {
    if (document.querySelector("#pwd").type !== "text") {
      document.querySelector("#pwd").type = "text";
    } else {
      document.querySelector("#pwd").type = "password";
    }
  };
  let redirectUrl = reactLocalStorage.get("redirectUrl");
  // console.log("aaaa===>",redirectUrl.slice(15));
  const register = async () => {
    setLoading(true);
    if (email != "" && password != "") {
      const data = {
        email: email,
        password: password,
      };
      // console.log(data);
      let result = await HttpClient.requestData("login", "POST", data);
      // console.log(result);
      if (result && result.status) {
        dispatch(setuser(result.data));
        reactLocalStorage.set("token", result.data.token);

        //   navigate("/choose_preference");
        toast.success(result.message);
        if (result.data.regStatus) {
          const result1 = await HttpClient.requestData("get-profile", "GET");
          console.log(result1);
          if (result && result1.status) {
            dispatch(setuser(result1.data));
          }
          if (redirectUrl.includes("all_courses")) {
            setTimeout(() => {
              navigate(`/${redirectUrl}`);
            }, 2000);
          } else if (redirectUrl.includes("courses_detail")) {
            setTimeout(() => {
              navigate(`/${redirectUrl.slice(0, 14)}/${redirectUrl.slice(15)}`);
            }, 2000);
          } else {
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          }
        } else {
          setTimeout(() => {
            navigate(result.data.nextRoute);
          }, 2000);
        }
      } else {
        toast.error(result.message);
      }
    } else {
      toast.error("* Required Fild");
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
              <p className="entry-header">Sign In</p>
              <p className="entry-para">
                Don't have an account?{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="sign-in-text">Sign Up</span>
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
                />
                <span style={{color:"red"}}>{emailValidationMessage}</span>
              </div>
              <div
                className="form-group"
                style={{
                  position: "relative",
                  marginBottom: "1rem",
                }}
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
                />
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  style={{ cursor: "pointer" }}
                  onClick={() => showPassword()}
                ></i>
                <span style={{color:"red"}} >{passwordValidationMessage}</span>
              </div>
              <button
                onClick={register}
                className="btn btn-signUp"
                disabled={!validation}
              >
                {loading ? (
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
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            {/* <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            style={{
                              height: "2px",
                              width: "218px",
                              backgroundColor:
                                "#d3cbcb" 
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
