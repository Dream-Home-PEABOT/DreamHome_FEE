import React, { useState, useEffect, useContext } from "react";
import { ReportContext } from "../../helpers/context";


export const ReportSecTwo = () => {

    const reportContext: any = useContext(ReportContext['03_attributes']);

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
          <div classname='mortgage-rate'>
            <h2>The Current Mortgage Rate</h2>
            {reportContext.output.B_principal.mortgage_rate}
          </div>
        </section>

      </>
    )
};
