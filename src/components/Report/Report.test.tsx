import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import {ReportContext} from '../../helpers/context';

import Report from './Report';

describe('Report', () => {

  beforeEach(() => {
    render (
      <MemoryRouter>
        <ReportContext.Provider value={mockedReport}>
          <Report />
        </ReportContext.Provider>
      </MemoryRouter>
    )

  });

    let mockedReport = {
       "location": {
         "city_state": 11111,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "zipcode": 11111,
       },
       "principal": {
         "based_on_rent": 350000,
         "goal_principal": 0,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "mortage_rate": 0.045
       },
       "monthly": {
         "add_ons": {
           "home_insurance": 110,
           "property_tax": 105,
           "hoa": 75,
           "pmi": 250
         },
         "estimated_true_monthly": 1940,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "monthly_principal": 1400,
       },
       "downpayment": {
         "downpayment_saved": 10000,
         "downpayment_percentage_selected": 10,
         "downpayment_percent_saved": 2.9,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "ten_year_plan": {
           "1": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "2": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "3": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "4": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "5": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "6": {
             "monthly_savins": 100,
             "goal_end_date": "12/03/2025"
           },
           "7": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "8": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "9": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "10": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           }
         }
       }
  }


  it('should render displaying headers', () => {


    expect(screen.getByText('Dream Home')).toBeInTheDocument();
    expect(screen.getByText('My Numbers')).toBeInTheDocument();
    expect(screen.getByText('Ten year goal')).toBeInTheDocument();
    expect(screen.getByText('Downpayment %')).toBeInTheDocument();
    expect(screen.getByText('Downpayment saved')).toBeInTheDocument();
    expect(screen.getByText('Mortgage Term')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
    expect(screen.getByText('principal')).toBeInTheDocument();
    expect(screen.getByText('based on rent')).toBeInTheDocument();
    expect(screen.getByText('monthly')).toBeInTheDocument();
    expect(screen.getByText('monthly principal')).toBeInTheDocument();
    expect(screen.getByText('your estimated true monthly')).toBeInTheDocument();
    expect(screen.getByText('downpayment')).toBeInTheDocument();
    expect(screen.getByText('Downpayment %')).toBeInTheDocument();
    expect(screen.getByText('Select a year to see your plan')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('monthly for')).toBeInTheDocument();
    expect(screen.getByText('Your DreamHome')).toBeInTheDocument();
    expect(screen.getByText('ready to buy')).toBeInTheDocument();
    expect(screen.getByText('date is')).toBeInTheDocument();
  });

})
