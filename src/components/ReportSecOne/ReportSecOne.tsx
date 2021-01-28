import React, { useState, useEffect, useContext } from "react";
import { ReportContext } from "../../helpers/context";

export const ReportSecOne = () => {

  const reportContext: any = useContext(ReportContext['03_attributes']);

  return (
    <>
      <section className='circles'>
        <div className='top-circle-1'>
          <h2>Your Credit Score</h2>
          {reportContext.input.B_credit_score}
        </div>
        <div className='top-circle-1'>
          <h2>Your Monthly Income</h2>
          {reportContext.input.C_salary}
        </div>
        <div className='top-circle-1'>
          <h2>Your Monthly Debt</h2>
          {reportContext.input.D_monthly_debt}
        </div>
        <div className='top-circle-1'>
          <h2>Your Mortgage Term</h2>
          {reportContext.input.F_mortgage_term}
        </div>
      </section>

      <section className='location-info'>
        
      </section>

    </>
  )
};
