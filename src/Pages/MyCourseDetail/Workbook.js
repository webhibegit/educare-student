import React from "react";

import pdffile from "../../assets/images/icon/pdf-file.png"
import downloadIcon from "../../assets/images/icon/downloadIcon.png"


export default function Workbook() {
  return (
    <div className="container">
      <div className="workBookWrapper">
        <div className="workBookItem">
          <h1>
            <img src={pdffile} alt="Work Book 1" />
            Work book 1.pdf
          </h1>
          <h4>PDF File</h4>
          <a href="#" download="">
            <img
              src={downloadIcon}
              alt="W3Schools"
              width={104}
              height={142}
            />
            Download
          </a>
        </div>
        <div className="workBookItem">
          <h1>
            <img src={pdffile} alt="Work Book 1" />
            Work book 2.pdf
          </h1>
          <h4>PDF File</h4>
          <a href="#" download="">
            <img
              src={downloadIcon}
              alt="W3Schools"
              width={104}
              height={142}
            />
            Download
          </a>
        </div>
        <div className="workBookItem">
          <h1>
            <img src={pdffile} alt="Work Book 1" />
            Work book 3.pdf
          </h1>
          <h4>PDF File</h4>
          <a href="#" download="">
            <img
              src={downloadIcon}
              alt="W3Schools"
              width={104}
              height={142}
            />
            Download
          </a>
        </div>
        <div className="workBookItem">
          <h1>
            <img src={pdffile} alt="Work Book 1" />
            Work book 4.pdf
          </h1>
          <h4>PDF File</h4>
          <a href="#" download="">
            <img
              src={downloadIcon}
              alt="W3Schools"
              width={104}
              height={142}
            />
            Download
          </a>
        </div>
        <div className="workBookItem">
          <h1>
            <img src={pdffile} alt="Work Book 1" />
            Work book 5.pdf
          </h1>
          <h4>PDF File</h4>
          <a href="#" download="">
            <img
              src={downloadIcon}
              alt="W3Schools"
              width={104}
              height={142}
            />
            Download
          </a>
        </div>
        <div className="workBookItem">
          <h1>
            <img src={pdffile} alt="Work Book 1" />
            Work book 6.pdf
          </h1>
          <h4>PDF File</h4>
          <a href="#" download="">
            <img
              src={downloadIcon}
              alt="W3Schools"
              width={104}
              height={142}
            />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
