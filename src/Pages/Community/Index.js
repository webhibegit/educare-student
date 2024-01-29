import React from "react";
import groupcommunity from "../../assets/images/group-community.png"

export default function Community() {
  return (
    <>
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <h1 className="community">Community</h1>
                <p className="community-para">Join our community on slack channel to reach your goal</p>
                <div className="communityWrap">
                  <div className="communityItem">
                    <h4 className="">Random Sentence</h4>
                    <p>1. No Fees, no complex setup, no registration required.</p>
                    <p>2.You'll no longer have to type in complex URL's to save money locating coupon codes.</p>
                    <p>3.With Smarty, you'll wonder why you didn't get it sooner!</p>
                    <button type="button" className=" btn_coming-soon">
                      Coming Soon
                    </button>
                  </div>
                  <div className="communityItem">
                    <img src={groupcommunity} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
