import React, { useEffect } from "react";
import "./Profile.css";
import bkg_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";

export const Profile: React.FC = () => {
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
            <input type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Zipcode</div>
            <input type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Credit Score</div>
            <input type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Monthly Debt</div>
            <input type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Downpayment Savings</div>
            <input type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Downpayment Percentage</div>
            <input type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Rent</div>
            <input type="text" placeholder="your answer"/>
          </div>
          <div className="user-details-fields">
            <div>Goal Principal</div>
            <input type="text" placeholder="your answer"/>
          </div>
        </div>
      </div>
      <div className="profile-footer"></div>
    </div>
  );
};
