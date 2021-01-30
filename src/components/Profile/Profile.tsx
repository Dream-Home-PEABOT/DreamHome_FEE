import React, { useState, useEffect, useContext} from "react";
// import {updateReport} from "../../helpers/apiCalls"//iTHink this has to be pass down as a prop from app
import bkg_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import "./Profile.css";
import { QuestionContext, AnswerContext } from "../../helpers/context";
interface profileProp {
  updateReport: any;
}

export const Profile: React.FC<profileProp> = ({ updateReport }) => {
  const [profileInfo, updateProfileInfo] = useState<any>({})
  const [error, setError] = useState<string>('');
  const [person, setPerson] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const answersKeys = useContext(AnswerContext);

  useEffect(() => {
    const userError = 'no name found'
    const emailError = 'no email found'
    const user = localStorage.getItem('displayName') || userError;
    const email = localStorage.getItem('email') || emailError;
    setPerson(user)
    setEmail(email)
  }, [])
  console.log(answersKeys)

  const injectInputFields = () => {
    return Object.keys(answersKeys).map( (entry: any) => {
      return (
        <div className="user-details-fields">
          <h1 className='cat'>{ entry}</h1>
          <input className='inpt' onChange={handleChange} name={"salary"}type="text" placeholder="your answer"/>
        </div>
      )
    })
  }

  const handleChange = (e:any)=>{
    
    updateProfileInfo({...answersKeys, [e.target.name]: e.target.value})

  }

  const modifyReport = (profileInfo: any) =>{
    Object.values(profileInfo).forEach(entry => {
      if(!entry){
        setError('oops, there are some fields missing')
        setTimeout(()=>{
          setError('')
        },2000)
      }
    })
    console.log(profileInfo)
    // updateReport(profileInfo)
  }
  return (
    <section className="profile-section">
      <div className="welcome-prof">
        <div className="salut">

          <h3 className="header-pro" data-testid="Dream Home">
              Welcome: {person}
          </h3>
          <h3 className="header-pro" data-testid="Dream Home">
               {email}
          </h3>

        </div>
        <div className="div">

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
          {injectInputFields()}
            
            <div className="btn-cont">

              <h1 className="inpt error">{error}</h1>
              <button onClick={()=>modifyReport(profileInfo)}className="update-profile">Update Info</button>
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
