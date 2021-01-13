//import
import React from 'react';
import './Survey.css'
import bkg_img_2 from '../../images/survey/Big Shoes - Sitting on Rock Blue.png'
import bkg_img_1 from '../../images/survey/Big Shoes - Sitting on Rock Yellow.png'
import {Link} from 'react-router-dom'
export const Survey: React.FC = () => {
  return (
      <section className='survey-container'>

        <div className='inner-container'>

          <div className='info-container'>
            <div className="info-box">
              <h2 className='info'>You may have some questions about some terms I present in the questions. Don't worry! I'll try to help you understand them!</h2>
            </div>
          </div>

          <div className="action-survey">
          <div className="action-container">
            <h4 className='title-2 action'>Enter your numbers and I'll do the math...</h4>
          </div>
        </div>

          <div className="shadow-box"></div>

          <div className='img-box_1'>
            <img src={bkg_img_1} alt="tekki-sitting-1" className='img'/>
          </div>

          <div className='img-box_2'>
            <img src={bkg_img_2} alt="tekki-sitting-2" className='img'/>
          </div>

          <div className='floor-box'></div>

          <div className="survey-btn">
          <Link to="/question">
            <button  onClick={() => window.scroll(0, 1000)} className="btn">Begin</button>
          </Link>
          </div>

          <div className="survey-box">
            <div className="survey">
              <h1 className="reco-title">Recommendations for you</h1>
                <ul>
                  <li className='item' > - Your mortgage payment should be 28% or less.</li>
                  <li className='item' > - Your debt-to-income ratio (DTI) should be 36% or less.</li>
                  <li className='item' > - Your housing expenses should be 29% or less. This is for things like insurance, taxes, maintenance, and repairs.</li>
                  <li className='item' > - You should have three months of housing payments and expenses saved up.</li>
                  <li className='item' > - Don't add any dollar signs in front of any questions asking for dollar amounts, just numbers!</li>
                </ul>
              </div>
          </div>
        </div>
      </section>
  );
};

export default Survey;
