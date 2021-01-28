import React, { useState, useEffect, useContext } from "react";
import { ReportContext } from "../../helpers/context";

export const ReportSecThree = () => {

  const reportContext: any = useContext(ReportContext['03_attributes']);

  return (
    <>
      <section className='plans-section'>
        <h1>Your Path Forward</h1>
        <div className='downpayment'>
          <div className='dp-saved'>
            <h2>Your Amount Already Saved Toward Your Downpayment</h2>
            <h3>{reportContext.output.D_downpayment.information}</h3>
            ${reportContext.output.D_downpayment.downpayment_saved}
            or
            {reportContext.output.D_downpayment.downpayment_percent_saved}% of total principal
          </div>
          <div className='dp-percentage'>
            <h2>Your Downpayment percentage of Principle</h2>
            {reportContext.output.D_downpayment.downpayment_percentage_selected}%
          </div>
        </div>
        <div className='saving-plans'>

        </div>
      </section>
    </>
  )
}
