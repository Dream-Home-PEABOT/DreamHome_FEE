// imports
import React, { useContext } from "react";
import { ReportContext } from "../../helpers/context";
import { Cube } from "../Cube/Cube";
import { ReportSecOne } from "../ReportSecOne/ReportSecOne";
import "./Report.css";

interface Props {
  setTakeShot: any
}

const Report: React.FC<Props> = ({ setTakeShot }) => {
  let userReport = useContext(ReportContext);

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
          <ReportSecOne setTakeShot={setTakeShot}/>
        </>
      )}
    </>
  );
};

export default Report;
