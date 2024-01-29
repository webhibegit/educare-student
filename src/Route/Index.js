import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Index";
import { privateRoute, publicRoute } from "./Routes";
import PrivateRoute from "./PrivateRoute";
import { uploadPrivateRoute } from "./Routes";
import Header from "../Component/Layout/Header";
import MyCourseDetail from "../Pages/MyCourseDetail/Index";
import ChoosePreference from "../Pages/Authentication/ChoosePreference";
import SingleCourseHeader from "../Component/Layout/SingleCourseHeader";
import CourseOverview from "../Pages/MyCourseDetail/CourseOverview";
import Notifications from "../Pages/MyCourseDetail/Notifications";
import Quiz from "../Pages/MyCourseDetail/Quiz";
import BooksResourses from "../Pages/MyCourseDetail/Books&Resourses";
import Workbook from "../Pages/MyCourseDetail/Workbook";
import Discussion from "../Pages/MyCourseDetail/Discussion";
import Announcements from "../Pages/MyCourseDetail/Announcements";
import QandA from "../Pages/MyCourseDetail/QandA";
import LiveChoaing from "../Pages/LiveCoaching/Index";
import LiveQuiz from "../Pages/LiveQuiz/Index";
import Calender from "../Pages/Calender/Index";
import CalenderDay from "../Pages/Calender/CalenderDay";
import CalenderWeek from "../Pages/Calender/CalenderWeek";
import CalenderMonthly from "../Pages/Calender/CalenderMonth";
import BookingLiveChoaching from "../Pages/BookingIndividualCallSelection/BookingLiveChoaing";
import AllTeacherList from "../Pages/BookingIndividualCallSelection/AllTeacherList";
import BookingIndividualCallSelection from "../Pages/BookingIndividualCallSelection/Index";
import ChooseFlexibleTime from "../Pages/BookingIndividualCallSelection/ChooseFlexibleTime";
import VideoCalling from "../Pages/VideoCalling/Index";
import RootPath from "./RootPath";

export default function IndexRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoute.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.Element} />
            );
          })}

          <Route element={<PrivateRoute />}>
            {uploadPrivateRoute.map((item, index) => {
              return (
                <Route key={index} path={item.path} element={item.Element} />
              );
            })}
          </Route>

          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              {privateRoute.map((value, index) => {
                return (
                  <Route
                    key={index}
                    path={value.path}
                    element={value.Element}
                  />
                );
              })}
              <Route path="/calender" element={<Calender/>}>
                <Route index element={<CalenderDay/>}/>
                <Route path="day" element={<CalenderDay/>}/>
                <Route path="weekly" element={<CalenderWeek/>}/>
                <Route path="monthly"element={<CalenderMonthly/>}/>
              </Route>
              <Route path="/book_individual_Call" element={<BookingIndividualCallSelection/>}>
                <Route path="select_teacher" element={<AllTeacherList/>}/>
                <Route path ="choose_flexible_time" element={<ChooseFlexibleTime/>}/>
              </Route>
            </Route>
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/" element={<RootPath/>}/>
            <Route element={<SingleCourseHeader/>}>
           <Route path="/video_calling/:id" element={<VideoCalling/>}/>
            <Route path="/my_course_overview/:slug" element={<MyCourseDetail/>}>
              <Route index element={<CourseOverview/>}/>
              <Route path="overview" element={<CourseOverview/>}/>
              <Route path="notifications" element={<Notifications/>}/>
              <Route path="quiz" element ={<Quiz/>}/>
              <Route path="Books&Resourses" element={<BooksResourses/>}/>
              <Route path="Workbook" element={<Workbook/>}/>
              <Route path="discussion" element ={<Discussion/>}/>
              <Route path="announcements" element={<Announcements/>}/>
              <Route path="Q&A" element={<QandA/>}/>
            </Route>
            </Route>
            </Route>
           <Route path="/live_quiz/:quiz_name/:quiz_point/:quiz_id" element={<LiveQuiz/>}/>
           <Route path="/video_calling" element={<VideoCalling/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
