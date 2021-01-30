import React, { useState } from "react";
// import {updateReport} from "../../helpers/apiCalls"//iTHink this has to be pass down as a prop from app
import bkg_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import "./Profile.css";

interface profileProp {
  updateReport: any;
}

export const Profile: React.FC<profileProp> = ({ updateReport }) => {
  const [profileInfo, updateProfileInfo] = useState<any>({})
  const [error, setError] = useState<string>('')
  const handleChange = (e:any)=>{

    updateProfileInfo({...profileInfo, [e.target.name]: e.target.value})
  }
  return (
    <section className="profile-section">
      <div className="welcome-prof">
        <div className="salut">

          <h3 className="header" data-testid="Dream Home">
              Welcome: Orlando Murcio
          </h3>

        </div>

        <button className="twitter">
          <a
          className="twitter-hashtag-button"
          href="https://twitter.com/intent/tweet?original_referer=https://dream-home-cap.herokuapp.com&source=twitter-share-button&url=https://dream-home-cap.herokuapp.com/&text=My%2010%20year%20plan%20for%20my%20dream%20home: find out yours! pic.twitter.com/22ej5357uO "
          data-size="large"
          >
          Tweet
            </a>
        </button>

      </div>
      <div className="prof-container">

        <div className="left-container">
          <img src={bkg_img} alt="User avatar" className="user-image" />
        </div>

        <div className="center-container">
          <div className="detail">
            <h3 className="profile-header" data-testid="Dream Home">Here in your profile </h3>
            <p className="intruc"> can make easy changes to your personal information.</p>
            <p className="intruc"> Once have generated your report you can share it via Twitter.</p>
          </div>
        </div>

        <div className="right-container">


          <div className="user-details detail">
            <div className="user-details-fields">
              <h1 className='cat'>Salary</h1>
              <input className='inpt' onChange={handleChange} name={"salary"}type="text" placeholder="your answer"/>
            </div>
            <div className="user-details-fields">
              <h1  className='cat'>Zipcode</h1>
              <input className='inpt' onChange={handleChange} name={"zipcode"}type="text" placeholder="your answer"/>
            </div>
            <div className="user-details-fields">
              <h1 className='cat'>Credit Score</h1>
              <input className='inpt' onChange={handleChange} name={"credit_score"}type="text" placeholder="your answer"/>
            </div>
            <div className="user-details-fields">
              <h1 className='cat'>Monthly Debt</h1>
              <input className='inpt' onChange={handleChange} name={"motnhly_debt"}type="text" placeholder="your answer"/>
            </div>
            <div className="user-details-fields">
              <h1  className='cat' >Downpayment Savings</h1>
              <input className='inpt' onChange={handleChange} name={"downpayment_savings"}type="text" placeholder="your answer"/>
            </div>
            <div className="user-details-fields">
              <h1 className='cat'>Downpayment Percentage</h1>
              <input className='inpt' onChange={handleChange} name={"downpayment_percentage"}type="text" placeholder="your answer"/>
            </div>
            <div className="user-details-fields">
              <h1  className='cat' >Rent</h1>
              <input className='inpt' onChange={handleChange} name={"rent"}type="text" placeholder="your answer"/>
            </div>
            <div className="user-details-fields">
              <h1 className='cat'>Goal Principal</h1>
              <input className='inpt' onChange={handleChange} name={"goal_principal"} type="text" placeholder="your answer"/>
            </div>
            <div className="btn-cont">

              <button onClick={()=>updateReport(profileInfo)}className="update-profile">Update Info</button>
            </div>
          </div>
        </div>

      </div>
        {/* <a
          className="twitter-hashtag-button"
          href="https://twitter.com/intent/tweet?original_referer=https://dream-home-cap.herokuapp.com&source=twitter-share-button&url=https://dream-home-cap.herokuapp.com/&text=My%2010%20year%20plan%20for%20my%20dream%20home: find out yours! pic.twitter.com/22ej5357uO "
          data-size="large"
        >
          Tweet
        </a>
      <div className="profile-footer"></div> */}
    </section>
  );
};
