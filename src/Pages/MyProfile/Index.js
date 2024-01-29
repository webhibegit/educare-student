import React,{useEffect, useRef,useState} from "react";
import uploadform from "../../assets/images/uploadform.png";
import creditcard from "../../assets/images/credit-card.png";
import cardimage from "../../assets/images/cardimage 2.png";
import swatches from "../../assets/images/icon/swatches.png";
import { ToastContainer, toast,Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HttpClient from "../../utils/HttpClient";
import { setuser } from "../../Redux/reducer/User";
import { reactLocalStorage } from "reactjs-localstorage";
import Preferences from "./Preferences";

export default function MyProfile() {

  const dispatch= useDispatch()
  const { userData } = useSelector((state) => state.User);
  const [disabled, setDisabled]=useState(true)
  // console.log(userData);
  const [oldPassword,setOldPassword]=useState("")
  const [newPassword,setNewPassword]=useState("")
  // const [name,setName]=useState(``)
  const[fname,setFname]=useState("")
  const [lname,setLname]=useState("")
  const [email,setEmail]=useState(``)
  const [country,setCountry]=useState("")
  const [address,setAddress]=useState("")
  const [College,setCollege]=useState("")
  const[graduationYear,setGraduationYear]=useState("")
  const[occupassion,setOccupassion]=useState("")
  const[since,setSince]=useState("")
  // const [updateImage,setUpdateImage]=useState("")

  useEffect(()=>{
      setFname(`${userData?.fristName}`)
      setLname(`${userData?.lastName}`)
      // setName(`${userData?.fristName} ${userData?.lastName}`)
      setEmail(`${userData?.email}`)
      setCountry(`${userData?.country}`)
      setAddress(`${userData?.address}`)
      setCollege(`${userData?.college}`)
      setGraduationYear(`${userData?.graduationYear}`)
      setOccupassion(`${userData?.occupation}`)
      setSince(`${userData?.since}`)
      window.scrollTo(0,0)
  },[userData])
 
  
const changeFromEdit=()=>{
  if(disabled){
    setDisabled(false)
  }else{
    setDisabled(true)
  }
}
  const updateProfileInfo=async()=>{
    if(fname!==""&& lname!=="" && email!=="" && country!=="" && address!=="" && College!=="" && graduationYear!==""  && occupassion!=="" && since!==""){
      let data={
        fristName: fname,
        lastName: lname,
        college: College,
        areaOfStudy: userData?.areaOfStudy,
        graduationYear: graduationYear,
        occupation: occupassion,
        since: since,
        country: country,
        address: address,
        nextRoute: "/dashboard"
      }
      let result=await HttpClient.requestData("update","PUT",data)
      if(result && result.status){
        let updateUser=await HttpClient.requestData("get-profile","GET")
        if(updateUser && updateUser.status){
          dispatch(setuser(updateUser.data))
        }
        toast.success(result.message)
      }else{
        toast.warn(result.message)
      }
    }else{
      toast.warn("Required Field")
    }
  }

  const changePassword=async()=>{
    if(oldPassword !==""&& oldPassword.length>=8){
        if(newPassword !=="" && newPassword.length>=8){
            let data={
              oldPassword:oldPassword,
              newPassword:newPassword
            }
            let result= await HttpClient.requestData("profile/passwordChange","POST",data)
            // console.log(result);
            if(result && result.status){
              toast.success(result.message)
              setNewPassword("")
              setOldPassword("")
            }else{
              toast.warn(result.message)
            }
        }else{
          toast.warn("Please Enter New Password")
        }
    }else{
      toast.warn("Please Enter Your Old PassWord")
    }
  }
  const profileImage=async(e)=>{
    let data=new FormData()
    data.append("image",e)
    let result=await HttpClient.fileUplode("upload/profile-image","POST",data)
    // console.log(result);  
    if(result && result.status){
      // setUpdateImage(result.url)
      toast.success("Profile Image Uploaded")
      let uploadData={
        image:result.url,
        nextRoute:'/dashboard'
      }
      let newResult= await HttpClient.requestData("update","PUT",uploadData)
      if(newResult && newResult.status){
            let userResult=await HttpClient.requestData("get-profile","GET")
            // console.log(userResult);
            if(userResult && userResult.status){  
              dispatch(setuser(userResult.data))
            }
      }
    }else{
      toast.warn("Some Problem in Image Upload")
    }
  }
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
      <div className="container-fluid top-section">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="personalInfo">
                  <div className="personalInfoForm">
                    <h1>Personal Information</h1>
                    <form action="#">
                      <div className="form-group form-Box-Wrapper">
                        <div className="form-Box">
                          <label htmlFor="fullname">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder={`${userData?.fristName}`}
                            name="fullname"
                            value={fname}
                            onChange={e => {
                              setLname(e.target.value);
                            }}
                            disabled={disabled}
                          />
                        </div>
                        <div className="form-Box">
                          <label htmlFor="fullname">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            placeholder={`${userData?.fristName} ${userData?.lastName}`}
                            name="fullname"
                            value={lname}
                            onChange={e => {
                              setLname(e.target.value);
                            }}
                            disabled={disabled}
                          />
                        </div>
                      </div>
                      <div className="form-group form-Box-Wrapper">
                        <div className="form-Box">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder={userData?.email}
                            name="email"
                            value={email}
                            disabled={disabled}
                            onChange={e => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-Box">
                          <label htmlFor="country">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            placeholder={userData?.country}
                            name="country"
                            value={country}
                            onChange={e => {
                              setCountry(e.target.value);
                            }}
                            disabled={disabled}
                          />
                        </div>
                      </div>
                      <div className="form-group form-Box-Wrapper">
                        <div className="form-Box">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder={userData?.address}
                            name="address"
                            value={address}
                            onChange={e => {
                              setAddress(e.target.value);
                            }}
                            disabled={disabled}
                          />
                        </div>
                        <div className="form-Box">
                          <label htmlFor="college">College</label>
                          <input
                            type="text"
                            className="form-control"
                            id="college"
                            placeholder={userData?.college}
                            name="college"
                            value={College}
                            disabled={disabled}
                            onChange={e => {
                              setCollege(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group form-Box-Wrapper">
                        <div className="form-Box">
                          <label htmlFor="gyear">Graduation Year</label>
                          <input
                            type="text"
                            className="form-control"
                            id="gyear"
                            placeholder={userData?.graduationYear}
                            name="gyear"
                            value={graduationYear}
                            disabled={disabled}
                            onChange={e => {
                              setGraduationYear(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-Box">
                          <label htmlFor="occupassion">Occupation</label>
                          <input
                            type="text"
                            className="form-control"
                            id="occupassion"
                            placeholder={userData?.occupation}
                            name="occupassion"
                            value={occupassion}
                            disabled={disabled}
                            onChange={e => {
                              setOccupassion(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group form-Box-Wrapper">
                        <div className="form-Box">
                          <label htmlFor="since">Since</label>
                          <input
                            type="text"
                            className="form-control"
                            id="since"
                            placeholder={userData?.since}
                            name="since"
                            value={since}
                            onChange={e => {
                              setSince(e.target.value);
                            }}
                            disabled={disabled}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="fileUploadwrapper">
                    {disabled ? (
                      <button
                        onClick={changeFromEdit}
                        className="btn  btn-sm rounded-0"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-edit" />
                        Edit
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          setDisabled(true);
                          updateProfileInfo();
                        }}
                      >
                        Save
                      </button>
                    )}

                    <img src={userData?.image} alt="Profile Photo" />
                    <div className="form-group">
                      <label className="form_label" style={{ background: '#138BFB' }}>
                        Upload
                        <input
                          onChange={e => profileImage(e.target.files[0])}
                          type="file"
                          className="form-control"
                          id="uploadFile"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="cardsPassword">
                  <div className="cardItem m-md-0 mb-3  mx-0" style={{ minHeight: '100px', height: '100%' }}>
                    <div className="cardTop">
                      <h2>
                        <img src={creditcard} alt="Debit Card/Credit Card" />
                        Your Cards
                      </h2>
                      <button
                        className="btn  btn-sm rounded-0"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-edit" />
                        Edit
                      </button>
                    </div>
                    {/* <p>
                      <input
                        className="Input--empty"
                        autoComplete="cc-number"
                        autoCorrect="off"
                        spellCheck="false"
                        type="text"
                        name="cardnumber"
                        data-elements-stable-field-name="cardNumber"
                        inputMode="numeric"
                        aria-label="Credit or debit card number"
                        placeholder="Card Number"
                        aria-invalid="false"
                        defaultValue=""
                      />
                    </p> */}
                    <div className="cardtype d-flex align-items-center justify-content-between card_Inner mt-4 px-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <img src={cardimage} className="mr-2" />
                        <div>
                          <h6
                            style={{
                              color: '#303030',
                              fontWeight: '600',
                              fontSize: '16px',
                            }}
                          >
                            Master card
                          </h6>
                          <span>4521 4512 541</span>
                        </div>
                      </div>
                      <div>
                        <i className="fa fa-trash-o" aria-hidden="true" style={{ fontSize: '23px' }} />
                      </div>
                    </div>
                  </div>
                  <div className="passwordItem  m-md-0 mx-0 mb-3">
                    <h2>Change Password</h2>
                    <div className="form-group ">
                      <label htmlFor="inputPassword4">Old Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Enter Old Password"
                        onChange={e => setOldPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group ">
                      <label htmlFor="inputPassword4">New password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Enter New Password"
                        onChange={e => setNewPassword(e.target.value)}
                      />
                    </div>
                    <a href="#" className="ForForgot">
                      Forgot Password ?
                    </a>
                    <div>
                      <button
                        onClick={() => {
                          changePassword();
                        }}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
                <Preferences userData={userData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// "btn btn_Active"