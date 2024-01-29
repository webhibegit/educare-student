import React, { useState, useEffect } from "react";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Preferences({ userData }) {
  // console.log(userData);
  let [disabled, setDisabled] = useState(true);
  const [preference, setPreference] = useState([]);
  const [selectedPreference,setSelectedPreference]=useState([])
  // const []
  useEffect(() => {
    fatchUserData()
    fatchPreference();
    // console.log(userData);
    // setSelectedPreference(userData?.prefrence)

  }, [userData]);
  const fatchPreference = async () => {
    const result = await HttpClient.requestData("get-prefrence", "GET");
    console.log(result);
    if (result && result.status) {
      setPreference(result.data);
    }
  };
  const fatchUserData= async () => {
    const result = await HttpClient.requestData("get-profile", "GET");
    console.log(result);
    if (result && result.status) {
      setSelectedPreference(result.data.prefrence);
    }
  };
  const uploadedData=(name,id)=>{
    let data={
      name:name,
      PrefrenceID:id,
    }
    let find = selectedPreference.some((item)=>item.PrefrenceID ===id)
    if(find){
      console.log(find);
      let updatedPref = selectedPreference.filter((item)=>item.PrefrenceID != id)
      setSelectedPreference(updatedPref)
    }else{

      setSelectedPreference((prev)=>[...prev,data])

    }
    console.log(selectedPreference);
    
  }

  const uploadPreference=async()=>{
    let data= []
    for (let index = 0; index < selectedPreference.length; index++) {
      let element = {PrefrenceID:selectedPreference[index].PrefrenceID ,name:selectedPreference[index].name};
     data.push(element) 
      
    }
    console.log("data",data);
    // return false
    let dataSend ={
      prefrence:data
    }
    const result=await HttpClient.requestData("update","PUT",dataSend)
    // console.log(result);
    fatchUserData()
  }
  // console.log(selectedPreference);
  return (
    <div className="d-flex justify-content-start">
      <div className="choose-preference choose_preferenceNew m-0">
        <div className="choose-preference-item">
          <div className="studentchoosePreference d-flex align-items-center justify-content-between">
            <p className="entry-para my-3 mb-5">Preferences</p>
            {disabled ? (
              <button
                className="btn  btn-sm rounded-0"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
                onClick={()=>{
                  // setSelectedPreference(userData?.prefrence)
                  setDisabled(false)
                }}
              >
                <i className="fa fa-edit" />
                Edit
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={()=>{
                  setDisabled(true)
                  uploadPreference()
                }}
              >
                Save 
              </button>
            )}
          </div>
          <div className="multiple-buttons" id="multi-select-demo">
            {preference?.map((item, index) => (
              <div className="multiple-buttons-item" key={index}>
                <button
                  type="button"
                  className={selectedPreference.some((it)=>it.PrefrenceID==item._id)?"btn preferenceActive": "btn"}
                  disabled={disabled}
                  onClick={()=>{
                    uploadedData(item.name,item._id)
                  }}
                  style={{ textTransform: "capitalize"}}
                >
                  <img src={item.image} alt="" />
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
