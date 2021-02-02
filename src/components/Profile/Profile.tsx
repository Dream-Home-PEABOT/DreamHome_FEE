import React, { useState, useEffect, useContext, useRef} from "react";
import bkg_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import "./Profile.css";
import { updateUserReport, getReport } from "../../helpers/apiCalls";
import { ReportContext, AnswerContext } from "../../helpers/context";
import { Answers } from "../../helpers/types";
interface profileProp {
  updateReport: any;
}


export const Profile: React.FC<profileProp> = ({ updateReport }) => {
  
  const report = useContext(ReportContext)
  const answers = report['03_attributes'].input
  const [error, setError] = useState<string>('');
  const [person, setPerson] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [st, setAllAnswers] = useState<any>({});

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

  const determineValue = (entry:any)=>{
    return report["03_attributes"].input[entry]
  }

  const removePlaceholder = (event:any) => {
    event.target.placeholder = ""
  }

  const injectInputFields = () => {
    return Object.keys(answers).map( (entry: any, i) => {
      let currentValue = determineValue(entry)
      if(currentValue === 0) return 
      entry = entry.slice(2)
      return (
        <div 
          key={i}
          className="user-details-fields">
          <h1 className='cat'>{entry}</h1>
          <input 
            className='inpt' 
            onChange={(e) => handleChange(e)} 
            onClick={removePlaceholder}
            name={entry}
            type="text" 
            value={st[entry]}
            placeholder={currentValue}
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
        setAllAnswers({...st, [e.target.name]: e.target.value})
  }

  const modifyReport = async () =>{
    const response = await updateUserReport(report["02_id"], st)
    const data = await getReport(response.data.id);
    updateReport(data)
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
            href="https://twitter.com/intent/tweet?original_referer=https://dream-home-cap.herokuapp.com&source=twitter-share-button&url=https://dream-home-cap.herokuapp.com/&text= Looks%20like%20its%20time%20to%20start%20saving%20for%20my%20Dream%20Home%21%20%0A%0APlan%20for%20your%20Dream%20Home%20here%3A%20%0A%0Apic.twitter.com%2FgeW2LkzIZr"
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
            <h3 className="profile-header" data-testid="Dream Home">Your profile: </h3>
            <p className="intruc"> New dream location? New salary? Update your info here and your report will update in real-time.</p>
            <p className="intruc"> Don't forget to share your Dream Home via Twitter!</p>
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
