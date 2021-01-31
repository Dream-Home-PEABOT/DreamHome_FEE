import React, { useState, useEffect, useContext, useRef} from "react";
import bkg_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import "./Profile.css";
import { updateUserReport } from "../../helpers/apiCalls";
import { ReportContext, AnswerContext } from "../../helpers/context";
import { Answers } from "../../helpers/types";
interface profileProp {
  updateReport: any;
}


export const Profile: React.FC<profileProp> = ({ updateReport }) => {
  
  const report = useContext(ReportContext)
  const answers = useContext(AnswerContext);
  const [error, setError] = useState<string>('');
  const [person, setPerson] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [st, setAllAnswers] = useState<any>(answers);

  useEffect(() => {
    const userError = 'no name found'
    const emailError = 'no email found'
    const user = localStorage.getItem('displayName') || userError;
    const email = localStorage.getItem('email') || emailError;
    setPerson(user)
    setEmail(email)
  }, [])

  const cleanUp =(newReport: any) => {
    const formattedAnswers: Answers = {
      salary: newReport.monthly_salary,
      zipcode: newReport.zip_code,
      credit_score: newReport.credit_score,
      monthly_debt: newReport.monthly_debt,
      downpayment_savings: newReport.downpayment_savings,
      mortgage_term: '30',
      downpayment_percentage: newReport.downpayment_percentage,
      rent: newReport.rent,
      goal_principal: newReport.goal_home_price,
      uid: localStorage.userUID || "anonymous"
    }
    return formattedAnswers
  }

  const clearForm = () => {
    setAllAnswers(answers)
  }

  const injectInputFields = () => {
    return Object.keys(st).map( (entry: any, i) => {
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
    const stringValidation = /\d/g.test(e.target.value)
    if (!e.target.value || !stringValidation){
      setError('just numbers')
        setTimeout(()=>{
          setError('')
        },2000)
      }
      // if(/\d/g.test(e.target.value)){
        setAllAnswers({...st, [e.target.name]: e.target.value})
      // }
  }

  const modifyReport = async () =>{
    Object.values(st).forEach((entry: any) => {
      if(/\d/g.test(entry)){
        setError('you have missing information')
        setTimeout(()=>{
          setError('')
        },2000)
      } else if (entry){
        const data = cleanUp(st)
        console.log(data)
        // const result = await updateUserReport (data, id)
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
            href="https://twitter.com/intent/tweet?original_referer=https://dream-home-cap.herokuapp.com&source=twitter-share-button&url=https://dream-home-cap.herokuapp.com/&text=My%2010%20year%20plan%20for%20my%20dream%20home: find out yours! pic.twitter.com/geW2LkzIZr "
            data-size="large"
            >Tweet
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
            <p className="intruc"> you can make easy changes to your personal information.</p>
            <p className="intruc"> Once generated your report can be shared via Twitter.</p>
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
    </section>
  );
};
