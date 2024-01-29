import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



export default function BookLiveChoachingByFlexbleTime({teacherId,date,selecledSlot}){
  const Navigate=useNavigate()
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[notes,setNotes]=useState("")
  const { userData } = useSelector((state) => state.User);
  const setProfileInfo = () => {
    setName(userData.fristName);
    setEmail(userData.email);
  };

 const bookChoching=async()=>{
    if(teacherId!==""){
        if(selecledSlot.length>=1){
            let selectDate=moment(date).format()
            let momentData = moment(date).format("dddd");
            console.log(name)
            console.log(email);;
            console.log(notes);
            if(name!=="" &&email!=="" && notes!==""){
                let data={
                teacherId:teacherId,
                bookingOn:selectDate,
                bookingDay:momentData,
                slot:selecledSlot,
                name:name,
                email:email,
                note:notes
            }
            console.log(data);
            const result= await HttpClient.requestData("bookLiveCoacing","POST",data)
            if(result && result.status){
                toast.success(result.message)
                setTimeout(() => {
                  Navigate("/live_coaching_call");       
                }, 3000);
            }else{
                toast.warn(result.message)
            }
            }else{
                toast.warn("Required Fild");
            }
            
        }else{
            toast.warn("Please Select A Slot");
        }
    }else{
      toast.warn("please Select A Teacher");
    }
 }
    
    return(
        <>
        <div className="px-4">
            <div className="card my-5">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between form_option">
                  <div>
                    <h3 className="fill_up">Fill up neccessarry information</h3>
                  </div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" className="checkbox mr-2" onClick={()=>setProfileInfo()} />
                    <span className="grab">Grab Info from profile</span>
                  </div>
                </div>
                <div className="row my-4 form_info">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Your E-mail</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="form-group">
                      <label htmlFor="">Note  (optional)</label>
                      <textarea className="form-control" defaultValue={""} onChange={(e)=>setNotes(e.target.value)}/>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="form-group">
                      <button className=" submit_btn" onClick={()=>bookChoching()}>
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}