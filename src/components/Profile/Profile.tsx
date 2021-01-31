import React, { useState, useRef } from "react";
import {updateReport} from "../../helpers/apiCalls"
import "./Profile.css";
import bkg_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const Profile: React.FC = () => {
  let thisRef = useRef(null)
  const [profileInfo, updateProfileInfo] = useState<any>({})
  const handleChange = (e:any)=>{
    updateProfileInfo({...profileInfo, [e.target.name]: e.target.value})
  }
  //const savePDF = async (input: any) => {
  //  const canvas =  html2canvas(input);
  //  console.log(canvas)
  //  const imgData = canvas.toDataURL("image/png");
  //  const pdf = new jsPDF({orientation: "l", unit:"in", format:[12, 10]});
  //  pdf.addImage(imgData, "PNG", 0, 0, 0, 0);
  //  pdf.save("MyDreamHome.pdf");
  //};
  const savePDF = () => {
    const input = document.getElementById('root');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0, 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }
  return (
    <div ref={thisRef} className="profile-body">
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
          <div className="user-details-fields">
            <div>UID</div>
            <input onChange={handleChange} name={"uid"}type="text" placeholder="your answer"/>
        </div>
            <button onClick={savePDF}className="update-profile">Update Info</button>
        </div>
      </div>
      <div className="profile-footer"></div>
    </div>
  );
};
