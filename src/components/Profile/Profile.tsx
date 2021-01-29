import React, { useState } from "react";
import {updateReport} from "../../helpers/apiCalls"
import "./Profile.css";
import bkg_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";

export const Profile: React.FC = () => {
  const [profileInfo, updateProfileInfo] = useState<any>({})
  const handleChange = (e:any)=>{
    updateProfileInfo({...profileInfo, [e.target.name]: e.target.value})
  }
  return (
    <div className="profile-body">
      <h3 className="profile-header title-3" data-testid="Dream Home">
        Your Details:
      </h3>
      <div className="profile-img-container">
        <img src={bkg_img} alt="User avatar" className="user-image" />
      </div>
      <div className="profile-aside">
        <div className="user-details">
          <div className="user-details-fields">
            <div>Salary</div>
            <input onChange={handleChange} name={"salary"}type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Zipcode</div>
            <input onChange={handleChange} name={"zipcode"}type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Credit Score</div>
            <input onChange={handleChange} name={"credit_score"}type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Monthly Debt</div>
            <input onChange={handleChange} name={"motnhly_debt"}type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Downpayment Savings</div>
            <input onChange={handleChange} name={"downpayment_savings"}type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Downpayment Percentage</div>
            <input onChange={handleChange} name={"downpayment_percentage"}type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Rent</div>
            <input onChange={handleChange} name={"rent"}type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Goal Principal</div>
            <input onChange={handleChange} name={"goal_principal"}type="text" placeholder="your answer"/>
          </div>
            <button onClick={()=>updateReport(profileInfo)}className="update-profile">Update Info</button>
        </div>
      </div>
        <a
          className="twitter-hashtag-button"
          href="https://twitter.com/intent/tweet?original_referer=https://dream-home-cap.herokuapp.com&source=twitter-share-button&url=https://dream-home-cap.herokuapp.com/&text=My%2010%20year%20plan%20for%20my%20dream%20home: find out yours! pic.twitter.com/22ej5357uO "
          data-size="large"
        >
          Tweet
        </a>
      <div className="profile-footer"></div>
    </div>
  );
};
