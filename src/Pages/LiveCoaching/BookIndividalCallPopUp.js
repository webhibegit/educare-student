import SelectInstructor from "../../assets/images/icon/SelectInstructor.png";
import Bookdatetime from "../../assets/images/icon/Bookdatetime.png";
import Successfull from "../../assets/images/icon/Successfull.png";
import { ToastContainer, toast,Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookIndividalCallPopUp() {
  const closeIndividualCallPopup = () => {
    document.querySelector("#bookIndividualcallPopUpwrap").style.display =
      "none";
  };
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
      <div className="bookIndividualCallPopUp" id="bookIndividualcallPopUpwrap">
        <div className="bookIndividualCallPopUpBoxItem">
          <h1>Book an Individual Coaching Call</h1>
          <span className="border-btm" />
          <p className="steps">Steps</p>
          <p>
            <img src={SelectInstructor} />
            Select Instructor
          </p>
          <p>
            <img src={Bookdatetime} />
            Book Date &amp; Time
          </p>
          <p>
            <img src={Successfull} />
            Successfull!
          </p>
          <div className="buttonsPop">
            <button
              onClick={() => closeIndividualCallPopup()}
              type="button"
              className=" btn_cancelBooking"
            >
              Cancel
            </button>
            <button
              onClick={() => closeIndividualCallPopup()}
              type="button"
              className=" btn_continueBooking"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
