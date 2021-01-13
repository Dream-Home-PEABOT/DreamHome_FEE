import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import {ReportContext} from '../../types';

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
      "zip_code": 11111,
      "location": "Anywhere, CO"
    },
    "principal": {
      "based_on_rent": 350000,
      "goal_principal": 0
    },
    "monthly": {
      "monthly_principal": 1400,
      "estimated_true_monthly": 1940,
      "add_ons": {
        "home_insurance": 110,
        "property_tax": 105,
        "hoa": 75,
        "pmi": 250
      }
    },
    "downpayment": {
      "down_payment_percentage_selected": 10,
      "down_payment_saved": 10000,
      "down_payment_percent_saved": 2.9,
      "ten_year_plan": {
        "one": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        },
        "two": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        },
        "three": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        },
        "four": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        },
        "five": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        },
        "six": {
          "monthly_savins": 100,
          "goal_end_date": "12/03/2025"
        },
        "seven": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        },
        "eight": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        },
        "nine": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        },
        "ten": {
          "monthly_savings": 100,
          "goal_end_date": "12/03/2025"
        }
      }
    }
  }


  it('should render displaying headers', () => {


    expect(screen.getByText('Dream Home')).toBeInTheDocument();
    expect(screen.getByText('My Numbers')).toBeInTheDocument();
    expect(screen.getByText('Property tax')).toBeInTheDocument();
    expect(screen.getByText('Downpayment %')).toBeInTheDocument();
    expect(screen.getByText('Mortgage term')).toBeInTheDocument();
    expect(screen.getByText('Credit Score')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
    expect(screen.getByText('principal')).toBeInTheDocument();
    expect(screen.getByText('based on rent')).toBeInTheDocument();
    expect(screen.getByText('monthly')).toBeInTheDocument();
    expect(screen.getByText('monthly principal')).toBeInTheDocument();
    expect(screen.getByText('estimated true monthly')).toBeInTheDocument();
    expect(screen.getByText('downpayment')).toBeInTheDocument();
    expect(screen.getByText('down payment percentage selected')).toBeInTheDocument();
    expect(screen.getByText('Select a year to see your plan')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('monthly for')).toBeInTheDocument();
    expect(screen.getByText('Your DreamHome')).toBeInTheDocument();
    expect(screen.getByText('ready to buy')).toBeInTheDocument();
    expect(screen.getByText('date is')).toBeInTheDocument();
  });

})
