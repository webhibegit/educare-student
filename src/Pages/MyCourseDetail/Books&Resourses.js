import React from "react";
import book1 from "../../assets/images/book1.png";
import book2 from "../../assets/images/book2.png";
import book3 from "../../assets/images/book3.png";
import book4 from "../../assets/images/book4.png";
import book5 from "../../assets/images/book5.png";
import book6 from "../../assets/images/book6.png";
import { useSelector } from "react-redux";
import antdesign_playcirclefilled from "../../assets/images/icon/ant-design_play-circle-filled.png";

export default function BooksResourses() {
  const { CourseData } = useSelector((state) => state.SingleCourseData);
  // console.log(CourseData);
  return (
    <div className="bookswrapper">
      {CourseData?.books?.map((item, index) => {
        return (
          <div className="bookswrap" key={index}>
            <div className="booksItem">
              <img src={item.book_image}style={{height:"100%"}} alt="Books" />
            </div>
            <div className="booksItem">
              <h6>{item.name}</h6>
              <p>
                <img src={antdesign_playcirclefilled} />
                See Overview
              </p>
              <a href="#">Go to Link</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
