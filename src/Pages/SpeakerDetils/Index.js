import React from 'react'
import gg from "../../assets/images/speaker_1.jpg"
export default function Index() {
  return (
    <>
      <div className="container-fluid top-section">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <section id="speaker_details">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      <div className="speaker_heading_one">
                        <h4>Lydia Dokidis</h4>
                        <h6>Managing Director, Green Co.</h6>
                      </div>
                      <div className="speaker_heading_two">
                        <h2>How to Become Computer Working Days Software Engineer?</h2>
                      </div>
                      <div className="speaker_image">
                        <img className="img-fluid" src={gg} alt="pic" />
                      </div>
                      <div className="speaker_description">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad
                          minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip
                          commodo consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur enim
                          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed
                          quia consequuntur magni dolores.
                        </p>
                        <p>
                          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                          officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                          unde omnis iste natus error sit voluptatem accusantium doloremque
                          laudantium totam rem aperiam.
                        </p>
                        <ul>
                          <li>Aute irure dolor in reprehenderit</li>
                          <li>Occaecat cupidatat non proident sunt in culpa</li>
                          <li>Pariatur enim ipsam.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div >
        </div >
      </div >

    </>
  )
}
