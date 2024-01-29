import React,{useEffect,useState} from "react";
import HttpClient from "../../utils/HttpClient";


export default function CourseCurriculum(id) {
    const [Curriculum, setCurriculum] = useState(null);

useEffect(()=>{
    fetchCurriculum()
},[])
// console.log(Curriculum);

    const fetchCurriculum = async () => {
        let result = await HttpClient.requestData(`course/Curriculum/${id.id}`, "GET");
        if (result && result.status) {
        //   console.log(result);
          setCurriculum(result.data);
        }
      };
  return (
    <div style={{ paddingTop: "40px" }} id="section2">
    <div
      className="accordion md-accordion custom-accordian1"
      id="accordionEx1"
      role="tablist"
      aria-multiselectable="true"
      
    >
      <h1 className="faq-title" style={{ padding: "20px 50px" }}>Curriculum</h1>
      {Curriculum?.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header" role="tab" id="Curriheading1">
            <a
              className="collapsed"
              data-toggle="collapse"
              data-parent={`#accordionEx${index+1}`}
              href={`#Curricollapse${index+1}`}
              aria-expanded="false"
              aria-controls={`Curricollapse${index+1}`}
            >
              <h5 className="mb-0">
                <div className="section_TiTLe">
                  Section 1 : {item.secTitle}{" "}
                  <span className="videos">
                    {item.sectionData.length} videos
                  </span>
                </div>{" "}
                <div className="d-flex aling-items-center">
                  <span className="mins">24 mins</span>
                  <i className="fa fa-angle-down rotate-icon" />
                </div>
              </h5>
            </a>
          </div>
          {item.sectionData?.map((data,ind) => (
            <div
            key={ind}
              id={`Curricollapse${index+1}`}
              className="collapse"
              role="tabpanel"
              aria-labelledby={`Curriheading${index+1}`}
              data-parent={`#accordionEx${index+1}`}
            >
              <div className="card-body customBOdyCard">
                {data.contentName}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
