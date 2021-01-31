import React, { useState, useEffect, useContext, useRef} from "react";
// import {updateReport} from "../../helpers/apiCalls"//iTHink this has to be pass down as a prop from app
import bkg_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import "./Profile.css";
import { QuestionContext, AnswerContext } from "../../helpers/context";
interface profileProp {
  updateReport: any;
}

export const Profile: React.FC<profileProp> = ({ updateReport }) => {
  
  const answers = useContext(AnswerContext);
  const [error, setError] = useState<string>('');
  const [person, setPerson] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [st, setAllAnswers] = useState<any>(answers)

  useEffect(() => {
    const userError = 'no name found'
    const emailError = 'no email found'
    const user = localStorage.getItem('displayName') || userError;
    const email = localStorage.getItem('email') || emailError;
    setPerson(user)
    setEmail(email)
  }, [])

  const clearForm = () => {
    setAllAnswers(answers)
  }
  

  const injectInputFields = () => {
    return Object.keys(st).map( (entry: any, i) => {
      // console.log(entry)
      return (
        <div 
          key={i}
        className="user-details-fields">
          <h1 className='cat'>{entry}</h1>
          <input 
            className='inpt' 
            onChange={(e) => handleChange(e)} 
            name={entry}
            type="text" 
            value={st[entry]}
            placeholder="your answer"
            />
        </div>
      )
    })
  }

  const handleChange = (e:any)=>{

    if (!e.target.value){
      setError('just numbers')
        setTimeout(()=>{
          setError('')
        },2000)
    }
  
    setAllAnswers({...st, [e.target.name]: e.target.value})
  }

  const modifyReport = () =>{
    Object.values(st).forEach((entry: any) => {
      console.log(entry) 
      // let areNums = /^\d+$/.test(entry);
      if(!entry){
        setError('oops, there are some fields missing')
        setTimeout(()=>{
          setError('')
        },2000)
      } else if (entry){
        console.log(st)
      }
    })
 
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
              <div>

              <button onClick={()=>modifyReport()} className="update-profile">Update Info</button>
              <button onClick={()=>clearForm()} className="update-profile">clear</button>
              </div>
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
