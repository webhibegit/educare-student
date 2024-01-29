import React, { useState ,useMemo} from "react";
import { useNavigate } from "react-router-dom";
import { Country, State, City }  from 'country-state-city';

import bgSignup from "../../assets/images/bgSignup.png";
import logo from "../../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HttpClient from "../../utils/HttpClient";
import AuthComp from "../../Component/AuthComp/AuthComp";
import Loader from "../../Component/Loader/DotLoadinButton"


const errorMessage = {
  fristNameErr: "",
  lastNameErr: "",
  collegeErr: "",
  areaOfStudyErr: "",
  graduationYearErr: "",
  sinceErr: "",
  countryErr: "",
  addressErr: "",
  occupationErr: "",
};

export default function UploadYourInformation() {
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [areaOfStudy, setAreaOfStudy] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [occupation, setOccupation] = useState("");
  const [since, setSince] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const [allErrMassage, setAllErrMessage] = useState(errorMessage);

  const [loading,setLoading]=useState(false)

  // Valid values
  const validFname = /^[A-Za-z]+$/;
  const validLname = /^[A-Za-z]+$/;
  const validCountry = /^[A-Za-z]+$/;
  const validAddress = /^[A-Za-z]+$/;

  //   {
  //     "fristName": "Amlan",
  //     "lastName": "Mondal",
  //     "college": "College",
  //     "areaOfStudy": "IT",
  //     "graduationYear": "2019",
  //     "occupation": "abc",
  //     "since": "2022",
  //     "country": "India",
  //     "address": "BB"
  // }
  const uploadInfo = async () => {
    setLoading(true)
    if (
      fristName !== "" &&
      lastName !== "" &&
      college !== "" &&
      areaOfStudy !== "" &&
      graduationYear !== "" &&
      occupation !== "" &&
      country !== "" &&
      address !== "" &&
      since !== ""
    ) {
      let data = {
        fristName: fristName,
        lastName: lastName,
        college: college,
        areaOfStudy: areaOfStudy,
        graduationYear: graduationYear,
        occupation: occupation,
        since: since,
        country: country,
        address: address,
        regStatus: true,
        nextRoute: "/dashboard",
      };
      let result = await HttpClient.requestData("update", "PUT", data);
      // console.log(result);
      if (result && result.status) {
        toast.success(result.message);
        setTimeout(() => {
          navigate("/registration_successfully");
          
        }, 2000);
      } else {
        toast.warn(result.message);
      }
    } else {
      toast.warning("Required Feild !!!!!");
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  };





  const navigate = useNavigate();

  // const uploadInfo = async () => {
  //   navigate("/registration_successfully");
  // };
  const validation = useMemo(() => {
    if (
      allErrMassage.addressErr === "" &&
      allErrMassage.countryErr === "" &&
      allErrMassage.areaOfStudyErr === "" &&
      allErrMassage.collegeErr === "" &&
      allErrMassage.occupationErr === "" &&
      allErrMassage.graduationYearErr === "" &&
      allErrMassage.fristNameErr === "" &&
      allErrMassage.lastNameErr === "" &&
      allErrMassage.sinceErr === ""&&
      fristName !== "" &&
      lastName !== "" &&
      college !== "" &&
      areaOfStudy !== "" &&
      graduationYear !== "" &&
      occupation !== "" &&
      country !== "" &&
      address !== "" &&
      since !== ""
    ) {
      return true;
    }
    return false;
  }, [
    allErrMassage.addressErr,
    allErrMassage.countryErr,
    allErrMassage.areaOfStudyErr,
    allErrMassage.collegeErr,
    allErrMassage.occupationErr,
    allErrMassage.graduationYearErr,
    allErrMassage.fristNameErr,
    allErrMassage.lastNameErr,
    allErrMassage.sinceErr,fristName,lastName,address,country,college,areaOfStudy,occupation,graduationYear,since
  ]);
  // console.log("country",Country.getAllCountries());

  let AllCountry=Country.getAllCountries()
  return (
    <AuthComp>
      <div className="col-md-7 col-lg-7 col-12">
        <div className="studentUploadrap" style={{ maxWidth: "600px" }}>
          <div className="studentInfo">
            <img src={logo} alt="LOGO" className="site-logo" />
            <p className="studentInfoText">Your Info</p>
            <form>
              <div className="form-group form-Box-Wrapper m-0" style={{}}>
                <div className="form-Box mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    value={fristName}
                    onChange={(e) => {
                      setFristName(e.target.value);
                      if (validLname.test(e.target.value)) {
                        // alert("if")
                        setAllErrMessage({
                          ...allErrMassage,
                          fristNameErr: "",
                        });
                      } else if (e.target.value === "") {
                        // alert("else if")
                        setAllErrMessage({
                          ...allErrMassage,
                          fristNameErr: "Please Enter Your First Name **",
                        });
                      } else {
                        // alert("else")
                        setAllErrMessage({
                          ...allErrMassage,
                          fristNameErr: "Enter valid name **",
                        });
                      }
                    }}
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    name="firstName"
                    style={{ minHeight: "43px" }}
                  />
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {allErrMassage.fristNameErr}
                  </span>
                </div>
                <div className="form-Box mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      if (validLname.test(e.target.value)) {
                        // alert("if")
                        setAllErrMessage({
                          ...allErrMassage,
                          lastNameErr: "",
                        });
                      } else if (e.target.value === "") {
                        // alert("else if")
                        setAllErrMessage({
                          ...allErrMassage,
                          lastNameErr: "Please Enter Your Last Name **",
                        });
                      } else {
                        // alert("else")
                        setAllErrMessage({
                          ...allErrMassage,
                          lastNameErr: "Enter valid LastName **",
                        });
                      }
                    }}
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    name="lastName"
                    style={{ minHeight: "43px" }}
                  />
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {allErrMassage.lastNameErr}
                  </span>
                </div>
              </div>
              <div className="form-group form-select mb-3" style={{}}>
                <label htmlFor="college">College</label>
                <select
                  onChange={(e) => {
                    setCollege(e.target.value);
                    if (e.target.value === "") {
                      setAllErrMessage({
                        ...allErrMassage,
                        collegeErr: "Please Select A collage",
                      });
                    }else{
                      setAllErrMessage({
                        ...allErrMassage,
                        collegeErr: "",
                      });
                    }
                  }}
                  className="form-control"
                  id="college"
                  style={{ minHeight: "43px" }}
                >
                  <option value="">select University </option>
                  <option value="University1"> University 1</option>
                  <option value="University2"> University 2</option>
                  <option value="University3"> University 3</option>
                  <option value="University4"> University 4</option>
                </select>
                <span style={{ color: "red", fontSize: "12px" }}>
                  {allErrMassage.collegeErr}
                </span>
              </div>
              <div className="form-group form-Box-Wrapper m-0" style={{}}>
                <div className="form-Box mb-3">
                  <label htmlFor="study">Area of study</label>
                  <select
                    onChange={(e) => {
                      setAreaOfStudy(e.target.value);
                      if (e.target.value === "") {
                        setAllErrMessage({
                          ...allErrMassage,
                          areaOfStudyErr: "Please Select a area of Study",
                        });
                      }else{
                        setAllErrMessage({
                          ...allErrMassage,
                          areaOfStudyErr: "",
                        });
                      }
                    }}
                    className="form-control"
                    id="study"
                    style={{ minHeight: "43px" }}
                  >
                    <option value=""> select Area of study</option>
                    <option value="BSC. in Engineering">
                      BSC. in Engineering
                    </option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="MBBS">MBBS</option>
                    <option value="BSC. in Math">BSC. in Math</option>
                  </select>
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {allErrMassage.areaOfStudyErr}
                  </span>
                </div>
                <div className="form-Box mb-3">
                  <label htmlFor="graduation-yr">Graduation Year</label>
                  <select
                    onChange={(e) => {
                      setGraduationYear(e.target.value);
                      if (e.target.value === "") {
                        setAllErrMessage({
                          ...allErrMassage,
                          graduationYearErr: "Please Select Gradution year",
                        });
                      }else{
                        setAllErrMessage({
                          ...allErrMassage,
                          graduationYearErr: "",
                        });
                      }
                    }}
                    className="form-control"
                    id="graduation-yr"
                    style={{ minHeight: "43px" }}
                  >
                    <option value="">select Graduation Year </option>
                    <option value="2021">2021 </option>
                    <option value="2022">2022 </option>
                    <option value="2023">2023 </option>
                    <option value="2024">2024 </option>
                  </select>
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {allErrMassage.graduationYearErr}
                  </span>
                </div>
              </div>
              <div className="form-group form-Box-Wrapper m-0" style={{}}>
                <div className="form-Box mb-3">
                  <label htmlFor="occupation">Occupation</label>
                  <select
                    onChange={(e) => {
                      setOccupation(e.target.value);
                      if (e.target.value === "") {
                        setAllErrMessage({
                          ...allErrMassage,
                          occupationErr: "Please Select your occupation",
                        });
                      }else{
                        setAllErrMessage({
                          ...allErrMassage,
                          occupationErr: "",
                        });
                      }
                    }}
                    className="form-control"
                    id="occupation"
                    style={{ minHeight: "43px" }}
                  >
                    <option value="">select Occupation </option>
                    <option value="Student">Student</option>
                  </select>
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {allErrMassage.occupationErr}
                  </span>
                </div>
                <div className="form-Box mb-3">
                  <label htmlFor="since">Since</label>
                  <select
                    onChange={(e) => {
                      setSince(e.target.value);
                      if (e.target.value === "") {
                        setAllErrMessage({
                          ...allErrMassage,
                          sinceErr: "Please Select a option",
                        });
                      }else{
                        setAllErrMessage({
                          ...allErrMassage,
                          sinceErr: "",
                        });
                      }
                    }}
                    className="form-control"
                    id="since"
                    style={{ minHeight: "43px" }}
                  >
                    <option value="">select Since</option>
                    <option value="2020">2020 </option>
                    <option value="2021">2021 </option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {allErrMassage.sinceErr}
                  </span>
                </div>
              </div>
              <div className="form-group form-Box-Wrapper m-0" style={{}}>
                <div className="form-Box mb-3">
                  <label htmlFor="country">Country</label>
                  {/* <input
                    type="text"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      if (validCountry.test(e.target.value)) {
                        setAllErrMessage({
                          ...allErrMassage,
                          countryErr: "",
                        });
                      } else if (e.target.value === "") {
                        setAllErrMessage({
                          ...allErrMassage,
                          countryErr: "Please Enter Your Country Name",
                        });
                      } else {
                        setAllErrMessage({
                          ...allErrMassage,
                          countryErr: "Please Enter Valid Country Name",
                        });
                      }
                    }}
                    className="form-control"
                    id="country"
                    placeholder=""
                    name="country"
                    style={{ minHeight: "43px" }}
                  /> */}
                  <select
                  onChange={(e)=>{
                    setCountry(e.target.value);
                    if (e.target.value === "") {
                      setAllErrMessage({
                        ...allErrMassage,
                        countryErr: "Please Select your Country",
                      });
                    }else{
                      setAllErrMessage({
                        ...allErrMassage,
                        countryErr: "",
                      });
                    }
                  }}
                  className="form-control"
                    style={{ minHeight: "43px" }}
                  >
                    <option value="">Select Country</option>
                    {
                      AllCountry?.map((val,index)=>{
                        return(

                          <option key={index} value={val.name}>{val.name}</option>
                        )
                      })
                    }
                  </select>
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {allErrMassage.countryErr}
                  </span>
                </div>
                <div className="form-Box mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    value={address}
                    type="text"
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (validCountry.test(e.target.value)) {
                        setAllErrMessage({
                          ...allErrMassage,
                          addressErr: "",
                        });
                      } else if (e.target.value === "") {
                        setAllErrMessage({
                          ...allErrMassage,
                          addressErr: "Please Enter Your Address",
                        });
                      } else {
                        setAllErrMessage({
                          ...allErrMassage,
                          addressErr: "Please Enter Valid address",
                        });
                      }
                    }}
                    className="form-control"
                    id="address"
                    placeholder=""
                    name="address"
                    style={{ minHeight: "43px" }}
                  />
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {allErrMassage.addressErr}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={uploadInfo}
                className="btn btn-continue"
                style={{ height: "45px" }}
                disabled={!validation}
              >
                {
                loading?
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
            </form>
          </div>
        </div>
      </div>
    </AuthComp>
  );
}
