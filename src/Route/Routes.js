import Loader from "../Component/Loader/Loader";
import AllCourses from "../Pages/AllCourses/Index";
import ChoosePreference from "../Pages/Authentication/ChoosePreference";
import RegistrationSuccesfull from "../Pages/Authentication/RegistrationSuccesfull";
import SignIn from "../Pages/Authentication/Signin";
import SignUP from "../Pages/Authentication/SignUp";
import UploadProfilePicture from "../Pages/Authentication/UploadProfilePicture";
import UploadYourInformation from "../Pages/Authentication/UploadYourInformation";
import BookingLiveChoaching from "../Pages/BookingIndividualCallSelection/BookingLiveChoaing";
import ChooseFlexibleTime from "../Pages/BookingIndividualCallSelection/ChooseFlexibleTime";
import BookingIndividualCallSelection from "../Pages/BookingIndividualCallSelection/Index";
import ConfirmAndPay from "../Pages/Confirm&Pay/Index";
import CourseDetail from "../Pages/CourseDetail/Index";
import Dashboard from "../Pages/Dashboard/Index";
import OnGoingCourse from "../Pages/Dashboard/OnGoingCourses";
import Events from "../Pages/Events/Index";
import LiveChoaing from "../Pages/LiveCoaching/Index";
import MyCourseDetail from "../Pages/MyCourseDetail/Index";
import MyCourse from "../Pages/MyCourses/Index";
import MyOnGoingCourses from "../Pages/MyCourses/OnGoingCourses";
import MyProfile from "../Pages/MyProfile/Index";
import SessionDetails from "../Pages/SessionDetails/Index";
import SpeakerDetails from "../Pages/SpeakerDetils/Index";
import EventDetails from "../Pages/EventDetails/Index";
import Videochatcall from "../Pages/Videchatcall/Index";


// select Instractors
import SelctInstractor2 from "../Pages/BookingIndividualCallSelection/SelctInstractor2";
import SelctInstractor3 from "../Pages/BookingIndividualCallSelection/SelctInstractor3";
import Community from "../Pages/Community/Index";
import Calender from "../Pages/Calender/Index";
import RootPath from "./RootPath";




export const publicRoute = [
  {
    path:"/",
    Element:<RootPath/>
  },
  {
    path: "/sign_up",
    Element: <SignUP />,
  },
  
  {
    path: "/sign_in",
    Element: <SignIn />,
  },
  {
    path: "/sign_up/:id",
    Element: <SignUP />,
  },
  
  {
    path: "/sign_in/:id",
    Element: <SignIn />,
  },
];

export const uploadPrivateRoute=[
  {
    path:"/",
    Element:<RootPath/>
  },
  {
    path: "/choose_preference",
    Element: <ChoosePreference />,
  },
  {
    path: "/upload_profile_image",
    Element: <UploadProfilePicture />,
  },
  {
    path: "/upload_your_information",
    Element: <UploadYourInformation />,
  },
  {
    path: "/registration_successfully",
    Element: <RegistrationSuccesfull />,
  },
]

export const privateRoute = [
  {
    path:"/",
    Element:<RootPath/>
  },
  {
    path: "/dashboard",
    Element: <Dashboard />,
  },
  {
    path: "/all_courses",
    Element: <AllCourses />,
  },
  {
    path: "/courses_detail/:slug",
    Element: <CourseDetail />,
  },
  {
    path: "/live_coaching_call",
    Element: <LiveChoaing />,
  },
  // {
  //   path:"/select_instructor",
  //   Element:<BookingIndividualCallSelection/>
  // },
  {
    path:"/confirm_pay",
    Element:<ConfirmAndPay/>
  },
  {
    path:"/events",
    Element:<Events/>
  },
  {
    path:"/session-details",
    Element:<SessionDetails/>
  },
  {
    path:"/speaker-details",
    Element:<SpeakerDetails/>
  },
  {
    path:"/video-chat",
    Element:<Videochatcall/>
  },
  {
    path:"/events-details",
    Element:<EventDetails/>
  },
  {
    path:"/my_profile",
    Element:<MyProfile/>
  },{
    path:"on_going_courses",
    Element:<MyOnGoingCourses/>
  },
  {
    path:"/my_courses",
    Element:<MyOnGoingCourses/>
  },

  {
    path:"/booking_live_choaing/:id",
    Element:<BookingLiveChoaching/>
  },
  {
    path:"/Choose_Flexible_Time",
    Element:<ChooseFlexibleTime/>
  },
  {
    path:"/SelctInstractor2",
    Element:<SelctInstractor2/>
  },
  {
    path:"/SelctInstractor3",
    Element:<SelctInstractor3/>
  },
  {
    path:"/community",
    Element:<Community/>
  },
];

