//
import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { QuestionContext, AnswerContext } from "../../helpers/context";
import "./Question.css";
import bkg_img from "../../images/questions/Big Shoes - Sitting On Floor.png";
import location_img from "../../images/questions/Charco - Location Map.png";

interface Props {
  updateAllAnswers: any;
}

export const Question: React.FC<Props> = ({ updateAllAnswers }) => {

  const questionContext = useContext(QuestionContext);
  const questionKeys = Object.keys(questionContext)
  const [answerInput, updateAnswer] = useState<any>({});
  const [index, setIndex] = useState<number>(0);
  const[isSelected, setIsSelected] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("");
  const[rentSelected, setRentSelected] = useState<boolean>(false);
  const[principleSelected, setPrincipleSelected] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null);

  const organizeData = () => {
    questionKeys.sort((a:any, b:any) => questionContext[a]['03_attributes']
    .A_order > questionContext[b]['03_attributes']
    .A_order ? 1 : -1)
  }

  organizeData()

  let currentQuestion = questionContext[questionKeys[index]];

  useEffect(() => {
    inputRef?.current?.focus();
  },[index])


  useEffect(() => {
    inputRef?.current?.focus();
  },[])

  const displayInput = (e: any) => {
    setIsSelected(true)
    if(e.target.id === 'principle') {
      setPrincipleSelected(true);
      setRentSelected(false);
      setIndex(7);
      updateAnswer({ ...answerInput, [questionKeys[8]]: '0'});
    } else if (e.target.id === 'rent') {
      setPrincipleSelected(false);
      setRentSelected(true);
      setIndex(8);
      updateAnswer({ ...answerInput, [questionKeys[7]]: '0'});
    }
  }

  const nextQuestion = () => {
    let userAmount = answerInput[questionKeys[index]];
    let isNum = /^\d+$/.test(userAmount);
    if (!userAmount || !isNum) {
      setErrorMessage("Sorry but we need this information");
      return false;
    } else if (index < questionKeys.length - 1) {
      setIndex(index + 1);
    };
  }

  const prevQuestion = () => {
    setIndex(index - 1);
  };

  const validateString = (e: any) => {
    updateAnswer({ ...answerInput, [questionKeys[index]]: e.target.value });
    let isnum = /^\d+$/.test(e.target.value);
    if (!isnum) {
      setErrorMessage("Only Enter numbers");
      setTimeout(() => setErrorMessage(""), 4000);
    } else {
      setErrorMessage("");
    }
  };



  return (
    <>
    {
      currentQuestion['03_attributes']?.B_classification == "Goal Home Price" || currentQuestion['03_attributes']?.B_classification == "Rent" ?
      <section className="question-section">
        <div className="inner-container">
          <div className="desc-container">
            <div className="description-box" data-testid="description-container">
              <h2
                style={{ backgroundColor: "white", width: "5px" }}
                className="desc"
              >
              </h2>
              <h1 data-testid="description-title" className="question-desc">
                Your Goal Home Price or Your Rent
              </h1>
              <h2 data-testid="description-body" className="desc">
                {currentQuestion['03_attributes']?.E_information}
              </h2>
              <h4 className="resource-2">If you have a number in mind of how much you'd like your Dream Home to cost, select "Goal Principle." If you don't, that's ok! Select "Rent" and we'll use what you're currently paying in rent to calculate a potential path for you! </h4>
              <div className='choice-buttons-box'>
                <button id='principle' className={!principleSelected ? 'principle-btn btn2' : 'principle-btn btn-selected'}  onClick={(e) => {displayInput(e)}}>Goal Principle</button>
                <button id='rent' className={!rentSelected ? 'rent-btn btn2' : 'rent-btn btn-selected'} onClick={(e) => {displayInput(e)}}>Rent</button>
              </div>
            </div>
          </div>



          <div className="question_img-box_1">
            <img
              data-testid="back-image-1"
              src={bkg_img}
              alt="Background images, avatar is stading on the left side of the window smiling at you"
              className="question_img"
            />
          </div>

          <div className="question_img-box_2">
            <img
              data-testid="back-image-2"
              src={location_img}
              alt=""
              className="location_img"
            />
          </div>

          {errorMessage && (
            <div className="error_box">
              <h3 data-testid="error-message" className="error-input">
                {errorMessage}
              </h3>
            </div>
          )}

          <div className="buttons-box">
            <div className="bx">
              <button
                className={index === 0 ? "hidden" : "back-btn btn"}
                onClick={() => {
                  prevQuestion();
                }}
              >
                back
              </button>
            </div>
            <div className="bx">
              {isSelected === true &&
              <Link to="/generate_report">
                <button
                  data-testid="update-answers-btn"
                  className="next-btn btn"
                  onClick={(e) => {
                    updateAllAnswers(answerInput);
                  }}
                >
                  next
                </button>
              </Link>
            }
            </div>
          </div>

          <div className="question-box" data-testid="the-question">
            {isSelected === true &&
            <p className="question">{currentQuestion['03_attributes']?.C_question}</p>
            }
          </div>

            <div className="note-box">
              <h4 className="note">{currentQuestion['03_attributes'].F_note}</h4>
            </div>

            {
              isSelected === true ?
              <div className="input-box">
              <div className='symbol-box'>
                {currentQuestion['03_attributes'].H_symbol == '$' ? <h2 className='symbol'>{currentQuestion['03_attributes'].H_symbol}</h2> : ' '}
              </div>
              <input
                ref={inputRef}
                placeholder={`your answer`}
                type="text"
                className="input"
                value={answerInput[questionKeys[index]] || ""}
                onChange={(e) => validateString(e)}
              />
              <div className='symbol-box'>
                {currentQuestion['03_attributes'].H_symbol == '%' ? <h2 className='symbol'>{currentQuestion['03_attributes'].H_symbol}</h2> : ' '}
              </div>
            </div>
            :
            <div className="input-box">
            <h1 className="msg-desc">
              Select either<br/>"Goal Principle"<br/>or "Rent" above
            </h1>
            </div>
          }

            <div className="note-box">
              <h4 className="note">We will use either your goal home price or your current rent to help you find your Dream Home!</h4>
            </div>

          <div className="floor-box"></div>

        </div>
    </section>
    :
    <section className="question-section">
      <div className="inner-container">
        <div className="desc-container">
          <div className="description-box" data-testid="description-container">
            <h2
              style={{ backgroundColor: "white", width: "5px" }}
              className="desc"
            >
            </h2>
            <h1 data-testid="description-title" className="question-desc">
              {currentQuestion['03_attributes']?.B_classification}
            </h1>
            <h2 data-testid="description-body" className="desc">
              {currentQuestion['03_attributes']?.E_information}
            </h2>
            <h4 className="resource">{currentQuestion['03_attributes'].G_source}</h4>
          </div>
        </div>

        <div className="question_img-box_1">
          <img
            data-testid="back-image-1"
            src={bkg_img}
            alt="Background images, avatar is stading on the left side of the window smiling at you"
            className="question_img"
          />
        </div>

        <div className="question_img-box_2">
          <img
            data-testid="back-image-2"
            src={location_img}
            alt=""
            className="location_img"
          />
        </div>

        {errorMessage && (
          <div className="error_box">
            <h3 data-testid="error-message" className="error-input">
              {errorMessage}
            </h3>
          </div>
        )}

        <div className="buttons-box">
          <div className="bx">
            <button
              className={index === 0 ? "hidden" : "back-btn btn"}
              onClick={() => {
                prevQuestion();
              }}
            >
              back
            </button>
          </div>
          <div className="bx">
            {index < questionKeys.length - 1  ? (
              <button
                className="next-btn btn"
                onClick={() => {
                  nextQuestion();
                }}
              >
                next
              </button>
            ) : (
              <Link to="/generate_report">
                <button
                  data-testid="update-answers-btn"
                  className="next-btn btn"
                  onClick={(e) => {
                    updateAllAnswers(answerInput);
                  }}
                >
                  next
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="question-box" data-testid="the-question">
          <p className="question">{currentQuestion['03_attributes']?.C_question}</p>
        </div>

          <div className="note-box">
            <h4 className="note">{currentQuestion['03_attributes'].F_note}</h4>
          </div>

          <div className="input-box">
            <div className='symbol-box'>
              {currentQuestion['03_attributes'].H_symbol == '$' ? <h2 className='symbol'>{currentQuestion['03_attributes'].H_symbol}</h2> : ' '}
            </div>
            <input
              ref={inputRef}
              placeholder={`your answer`}
              type="text"
              className="input"
              value={answerInput[questionKeys[index]] || ""}
              onChange={(e) => validateString(e)}
            />
            <div className='symbol-box'>
              {currentQuestion['03_attributes'].H_symbol == '%' ? <h2 className='symbol'>{currentQuestion['03_attributes'].H_symbol}</h2> : ' '}
            </div>
          </div>

          <div className="note-box">
            <h4 className="note">{currentQuestion['03_attributes'].F_note}</h4>
          </div>

        <div className="floor-box"></div>

      </div>
  </section>
  }
  </>
  );
};

export default Question;
