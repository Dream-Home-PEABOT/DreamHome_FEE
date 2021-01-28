import React, { useContext } from "react";
import { ReportContext, AnswerContext } from "../../helpers/context";
import { Cube } from "../Cube/Cube";
import "./Report.css";
import { ReportCategory } from "../ReportCategory/ReportCategory";
import { ReportSecOne } from "../ReportSecOne/ReportSecOne";
import { ReportSecTwo } from "../ReportSecTwo/ReportSecTwo";
import { ReportSecThree } from "../ReportSecThree/ReportSecThree";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import back_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Report = () => {
  let userReport = useContext(ReportContext);

      const savePDF = async (input: any) => {
        const canvas = await html2canvas(input)
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF
        console.log(imgData)
        pdf.addImage(imgData, 'PNG', 0, 0, 0, 0)
        pdf.save("download.pdf")
      };

  return (
    <>
      {!userReport ? (
        <>
          <div className="loading-box">
            <h1 className="loading-message-1">
              we are building you a report...
            </h1>
          </div>
          <div className="loading-box">
            <h1 className="loading-message-2">just a second...</h1>
          </div>
          <Cube />
        </>
      ) : (
        <>
          <ReportSecOne />
          <ReportSecTwo />
          <ReportSecThree />
        </>
      )}
    </>
  );
};

export default Report;
