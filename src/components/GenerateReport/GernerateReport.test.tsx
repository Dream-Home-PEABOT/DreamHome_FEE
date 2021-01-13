import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { AnswerContext, Answers } from '../../types';

import GenerateReport from './GenerateReport';

describe('GenerateReport', () => {

  beforeEach(() => {

    const fakeUpdateReport = jest.fn();

    const fakeAnswerContext = {
      annual_salary: '50000',
      zip_code: 12345,
      credit_score: 711,
      monthly_dept: 3000,
      downpayment_savings: 5000,
      downpayment_percentage: 5,
      rent: 1100,
      goal_home_price: 0
    }

    render(
    <MemoryRouter>
      <AnswerContext.Provider value={fakeAnswerContext}>
        <GenerateReport updateReport={fakeUpdateReport}/>
      </AnswerContext.Provider>
    </MemoryRouter>)
  })

  it('should render with a question category', () => {



 });


 it('should render with images', () => {


   
 });

 it('should render with a button to generate a report', () => {


   expect(screen.getByText('Generate Report')).toBeInTheDocument();
 });

 it('for a user, should be able to click the button', () => {

   // mock onclick when added
//
  })

})
