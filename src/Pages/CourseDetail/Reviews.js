import React, { useEffect, useState } from "react";
import commentProfile from "../../assets/images/commentProfile.png";
import ratingStar from "../../assets/images/icon/ratingStar.png";
import HttpClient from "../../utils/HttpClient";
import ReactStars from "react-rating-stars-component";

export default function Reviews(id) {
  const [reviewData, setReviewData] = useState([]);
//   console.log(id.id);
  useEffect(() => {
    fetchReview();
    // console.log(reviewData);
  }, []);

  const fetchReview = async () => {
    const result = await HttpClient.requestData(`viewReview/${id.id}`);
    console.log(result);
    if (result && result.status) {
      setReviewData(result.data);
    }
  };
  

  return (
    <>
      <div className="review-section" id="section4">
        <h1 className="review-title">Reviews</h1>
        <h6 className="givenReview">Total  {reviewData?.length}  reviews given</h6>
        <div className="review-wrapper">
          <div className="reviewStar">
            <h1>4.7</h1>
            <h2 className="outOf">out of</h2>
            <h3 className="totalPoint">5.00</h3>
          </div>
          <div className="reviewProgress">
            <div className="reviewItem">
              <h4>5</h4>
              <img src={ratingStar} />
              <div
                className="progress"
                style={{
                  width: "100%",
                  background: "#FFA927",
                  borderRadius: 0,
                }}
              />
            </div>
            <div className="reviewItem">
              <h4>4</h4>
              <img src={ratingStar} />
              <div
                className="progress"
                style={{
                  width: "80%",
                  background: "#FFA927",
                  borderRadius: 0,
                }}
              />
            </div>
            <div className="reviewItem">
              <h4>3</h4>
              <img src={ratingStar} />
              <div
                className="progress"
                style={{
                  width: "60%",
                  background: "#FFA927",
                  borderRadius: 0,
                }}
              />
            </div>
            <div className="reviewItem">
              <h4>2</h4>
              <img src={ratingStar} />
              <div
                className="progress"
                style={{
                  width: "40%",
                  background: "#FFA927",
                  borderRadius: 0,
                }}
              />
            </div>
            <div className="reviewItem">
              <h4>1</h4>
              <img src={ratingStar} />
              <div
                className="progress"
                style={{
                  width: "20%",
                  background: "#FFA927",
                  borderRadius: 0,
                }}
              />
            </div>
          </div>
          <div className="reviewCount">
            <h5>5000</h5>
            <h5>800</h5>
            <h5>600</h5>
            <h5>56</h5>
            <h5>4</h5>
          </div>
        </div>
        <div className="commentWrapper">
          {reviewData?.map((value, index) => {
            return (
              <div className="commentWrap">
                <div className="profileImage">
                  <img src={commentProfile} alt="Profile" />
                </div>
                <div className="commentdetails">
                  <div className="commentTop">
                    <div className="commenttopLeft">
                      <h6 className="name">
                        {value?.studentDetails[0]?.fristName}{" "}
                        {value?.studentDetails[0]?.lastName}{" "}
                      </h6>
                      {/* <div className="stars">
                        <img src={yellowStar} />
                        <img src={yellowStar} />
                        <img src={yellowStar} />
                        <img src={yellowStar} />
                        <img src={skystar} />
                      </div> */}
                      <ReactStars
                        count={5}
                        edit={false}
                        // onChange={ratingChanged}
                        value={value.rating}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    {/* <div className="commenttopRight">
                      <h5 className="time">5 months ago</h5>
                    </div> */}
                  </div>
                  <div className="commentBottom">
                    <p>{value.review}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="commentWrap">
            <div className="profileImage">
              <img src={RubenFranci} alt="Profile" />
            </div>
            <div className="commentdetails">
              <div className="commentTop">
                <div className="commenttopLeft">
                  <h6 className="name">Ruben Franci</h6>
                  <div className="stars">
                    <img src={yellowStar} />
                    <img src={yellowStar} />
                    <img src={yellowStar} />
                    <img src={yellowStar} />
                    <img src={skystar} />
                  </div>
                </div>
                <div className="commenttopRight">
                  <h5 className="time">5 months ago</h5>
                </div>
              </div>
              <div className="commentBottom">
                <p>
                  Last month we designed Testerz.io web platform where Amazon
                  sellers can get better reviews for their products. Sellers can
                  post their products, people can order them for free, test them
                  and add their reviews. We’ve been part of the project time.
                </p>
              </div>
            </div>
          </div> */}
          <div style={{ textAlign: "center" }}>
            <button type="button" className="btn btn_more_reviews">
              Show More Reviews
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
