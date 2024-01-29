import React,{useState,useEffect} from "react";
import Play from "../../assets/images/icon/play_BGBLACK.png";
import CloseIcons from "../../assets/images/icon/Cross.png";
import HttpClient from "../../utils/HttpClient";
import { useDispatch } from "react-redux";
import { setVideoLink } from "../../Redux/reducer/PlayVideo";
import { AiFillFilePdf } from 'react-icons/ai';
import Loader from '../../Component/Loader/DotLoading'

export default function CourseContent({id,showFunc}) {
  const [contentData, setContentData] = useState([]);
  const [loading,setLoading]=useState(false)
  const dispatch =useDispatch()
//   console.log(setShowContent);

  useEffect(() => {
    fetchCourseContent();
  },[]);

 async function fetchCourseContent  (){
  setLoading(true)
    const result = await HttpClient.requestData(
      `course/Curriculum/${id}`,
      "GET"
    );
    if (result && result.status) {
      setContentData(result.data);
    }
    setLoading(false)

  };
  const setVideo =(data,type,sectionID,contentID)=>{
    dispatch(setVideoLink({
        link:data,
        type:type,
        sectionID:sectionID,
        contentID:contentID
    }))
    // console.log(data);
  }

//   console.log("contentData", contentData);


  return (
    <>
      <div className="col-md-3 col-lg-3 col-12" style={{ padding: 0 }}>
        <div className="Sibebar__coursecontent">
          <div className="d-flex align-items-center justify-content-between HEader_Course">
            <h5 className="course__content">Course Content</h5>
            <img
              src={CloseIcons}
              className="img-fluid"
              alt="Close icons"
              style={{ cursor: "pointer" }}
              onClick={() => {
                showFunc(false);
              }}
            />
          </div>
          <div
            className="accordion md-accordion scrollAccordion"
            id="accordionEx3"
            role="tablist"
            aria-multiselectable="true"
          >
            {loading && <div style={{position:"sticky",textAlign:"center",width:"90%"}}><Loader/> </div>}
            {
            contentData?.map((item, index) => {
              return (
                <div className="card accordion_Start" key={index}>
                  <div
                    className="card-body"
                    role="tab"
                    id="coursecontentheading"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent={"#accordionEx3" + index}
                      href={"#coursecontentcollapse" + index}
                      aria-expanded="false"
                      aria-controls={"coursecontentcollapse" + index}
                    >
                      <div className="d-flex align-items-center justify-content-between header__coursecontent">
                        <span className="section__text">{item.secTitle}</span>
                        <i className="fa fa-angle-down rotate-icon" />
                      </div>
                      <div className="d-block heading__secTionTwo pt-2">
                        <span className="number pr-2">1/15</span>
                        <span className="Ti__me pl-2">2 hrs 30 mins</span>
                      </div>
                    </a>
                  </div>

                  <div
                    id={"coursecontentcollapse" + index}
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="coursecontentheading"
                    data-parent={"#accordionEx3" + index}
                  >
                    <div className="card-body p-0">
                      {item?.sectionData?.map((data, ind) => {
                        return (
                          <div className="media mb-3 px-4 py-2" key={ind}>
                            <input
                              type="checkbox"
                              className="mr-2 checkobox_Accordion_Course"
                            />
                            <div className="media-body">
                              <span className="accordion__text">
                                {data.contentName}
                              </span>
                              {
                                data.contentType==="video"?<span className="d-block play_time__text mt-3">
                                <img style={{cursor:"pointer"}} src={Play} className="img-fluid mr-2"  onClick={()=>{
                                    setVideo(data.contentUrl,data.contentType,item._id,data._id)
                                }} />
                                15 min
                              </span>:
                              <span className="d-block play_time__text mt-3">
                              <AiFillFilePdf style={{cursor:"pointer"}}  className="img-fluid mr-2"  onClick={()=>{
                                  setVideo(data.contentUrl,data.contentType,item._id,data._id)
                              }} />
                              Open
                            </span>
                              }
                              
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
