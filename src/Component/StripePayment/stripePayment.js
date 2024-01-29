import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import HttpClient from "../../utils/HttpClient";
import { useSelector } from "react-redux";


export default function StripePayment({ coursePrice, setStripeModel,id,teacherID ,checkEnrollCourse}) {

  const {userData}=useSelector(state=>state.User)
  //  console.log("userData",userData);
  

    const enrollCourse = async (paymentId,customer_id) => {
        let data = {
          courseId: id,
          paymentId: paymentId,
          clientId: customer_id,
          teacherId: teacherID,
        };
        console.log(data);
        // console.log(Math.random());
        let result = await HttpClient.requestData("course/addEnroll", "POST", data);
        if (result && result.status) {
          toast.success(result.message);
          checkEnrollCourse();
        } else {
          toast.warn(result.message);
        }
      };



  const onToken = (token, address) => {
    console.log("token", token);
    console.log("address", address);
    let data={
      name:`${userData?.fristName} ${userData?.lastName}`,
      email:userData?.email
    }

    let Stripedata = Object.keys(data)
      .map((key) => key + "=" + data[key])
      .join("&");
    // console.log("data", Stripedata);

    axios.post("https://api.stripe.com/v1/customers",Stripedata,{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Bearer sk_test_51LzEn5K2igAKIOeoBx4xBsIALxuqkNDsEUFjSTXNHqK6Oq0j4Csgv5ZnoMeHELdA2rNqEZcBb8ZOnZxqqGvguzXl00Do8DuIdU",
      },
    }).then((res)=>{
        console.log("customers res",res);
       StripeCall(token.id,res?.data?.id);

    }).catch((err)=>{
      console.log("customers err",err);
    })

    
  };
  const StripeCall = async (token,customer_id) => {
    setStripeModel(false);

    const card = {
      amount: coursePrice,
      currency: "USD",
      source: token,
      description: "Educare Teacher Subscription Plan",
    };
    console.log("card data", card);

    let data = Object.keys(card)
      .map((key) => key + "=" + card[key])
      .join("&");
    // console.log("data", data);

    axios
      .post("https://api.stripe.com/v1/charges", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Bearer sk_test_51LzEn5K2igAKIOeoBx4xBsIALxuqkNDsEUFjSTXNHqK6Oq0j4Csgv5ZnoMeHELdA2rNqEZcBb8ZOnZxqqGvguzXl00Do8DuIdU",
        },
      })
      .then((res) => {
        // console.log("res", res);
        if (res && res.status) {
          //   handleSubmit();
          console.log("res res",res);
          enrollCourse(res?.data.balance_transaction,customer_id)
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <div className="subcription_modal">
        <div className="modal-content">
          <div
            className="close_btn"
            onClick={() => {
              setStripeModel(false);
            }}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </div>
          <div className="modal-header">
            <h4>
              Payment <i className="fa-solid fa-money-check"></i>
            </h4>
          </div>
          <div className="modal-body">
            <i className="fa fa-question-circle"></i> Are you sure to payment
          </div>
          <div className="modal-footer">
            <StripeCheckout
              token={onToken}
              stripeKey="pk_test_51LzEn5K2igAKIOeoxun0MFxVznj4U5NqLqz0fBVzUfCEgqpAYYFdDRYQkeqiKRnGZ19yfoVMGXPFQZwgKwwzN4eA00iuGwMyjE"
              amount={parseInt(coursePrice) * 100}
              name="Educare Subscription"
              description="Pay & Buy"
              currency="USD"
              shippingAddress={false}
              opened={() => setStripeModel(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
