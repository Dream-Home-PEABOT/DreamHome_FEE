import React, { useState, useEffect, useContext } from "react";
import { ReportContext } from "../../helpers/context";



export const ReportSecTwo = () => {

    const reportContext: any = useContext(ReportContext);

    return (
      <>
        <section className='principle-section'>
          {
            reportContext.output.B_principal.goal_principal > 0 &&
            <div className='goal-principle'>
              <h2>Your Selected Goal Principle</h2>
              {reportContext.output.B_principal.goal_principal}
              <h3>{reportContext.output.B_principal.information}</h3>
            </div>
          }
          {
            reportContext.output.B_principal.principal_based_on_rent > 0 &&
            <div className='goal-principle'>
              {reportContext.input.I_rent}
              <h2>Potential Goal Principle</h2>
              {reportContext.output.B_principal.principal_based_on_rent}
              <h3>This number is calculated as a possible goal principle based off of what you are currently paying in rent.</h3>
            </div>
          }
          <div className='mortgage-rate'>
            <h2>The Current Mortgage Rate</h2>
            {reportContext.output.B_principal.mortgage_rate * 100}%
          </div>
        </section>
        <section className='expenses-section'>
          <div className='monthly-info'>
            <h2>Monthly Expenses</h2>
            {reportContext.output.C_monthly.information}
          </div>
          <div className='home-insurance'>
            <h2>Your Home Insurance Cost</h2>
            ${reportContext.output.C_monthly.home_insurance_by_location}
          </div>
          <div className='pmi'>
            <h2>Your PMI Cost</h2>
            ${reportContext.output.C_monthly.pmi_by_location}
          </div>
          <div className='tax'>
            <h2>Your Property Tax Cost</h2>
            ${reportContext.output.C_monthly.property_tax_by_location}
          </div>
          <div className='monthly-principal'>
            <h2>Your Principle Payment</h2>
            ${reportContext.output.C_monthly.monthly_principle}
          </div>
          <div className='monthly-principal'>
            <h2>Your Estimated True Monthly</h2>
            ${reportContext.output.C_monthly.estimated_true_monthly}
          </div>
        </section>

      </>
    )
};
