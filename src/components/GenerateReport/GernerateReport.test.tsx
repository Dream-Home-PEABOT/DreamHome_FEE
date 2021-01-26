import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AnswerContext,  } from '../../helpers/context';

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

  it('should render with a header', () => {


   expect(screen.getByRole('heading', {name: /let's see your report!/i})).toBeInTheDocument();
 });


 it('should render with images', () => {


   expect(screen.getByAltText('teki-sitting')).toBeInTheDocument();
   expect(screen.getByAltText('background-graphics')).toBeInTheDocument();
 });

 it('should render with a button to generate a report', () => {


   expect(screen.getByText('Generate Report')).toBeInTheDocument();
 });

})
