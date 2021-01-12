import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import {ReportCategory} from './ReportCategory';

describe('ReportCategory', () => {

    const fakeUserReport = {
      location: {
        zip_code: 11111,
        location: "Anywhere, CO"
      },
      principal: {
        based_on_rent: 350000,
        goal_principal: 0
      },
      monthly: {
        monthly_principal: 1400,
        estimated_true_monthly: 1940,
        add_ons: {
          home_insurance: 110,
          property_tax: 105,
          hoa: 75,
          pmi: 250
        }
      },
      downpayment: {
        down_payment_percentage_selected: 10,
        down_payment_saved: 10000,
        down_payment_percent_saved: 2.9,
        ten_year_plan: {
          one: {
            monthly_savings: 100,
            goal_end_date: "12/03/2025"
          },
          two: {
            monthly_savings: 200,
            goal_end_date: "12/03/2026"
          },
          three: {
            monthly_savings: 300,
            goal_end_date: "12/03/2027"
          },
          four: {
            monthly_savings: 400,
            goal_end_date: "12/03/2028"
          },
          five: {
            monthly_savings: 500,
            goal_end_date: "12/03/2029"
          },
          six: {
            monthly_savings: 600,
            goal_end_date: "12/03/2030"
          },
          seven: {
            monthly_savings: 700,
            goal_end_date: "12/03/2031"
          },
          eight: {
            monthly_savings: 800,
            goal_end_date: "12/03/2032"
          },
          nine: {
            monthly_savings: 900,
            goal_end_date: "12/03/2033"
          },
          ten: {
            monthly_savings: 1000,
            goal_end_date: "12/03/2034"
          }
        }
      }
    };

  it('should render with images', () => {
    const fakeReportData = Object.keys(fakeUserReport);

    let fakeSubtitle_1 = fakeUserReport.location;
    let fakeSubtitle_2 = fakeUserReport.location;
    const fakeKey = 0;

    render (
      <ReportCategory
      position={fakeKey + 1}
      key={fakeKey}
      plan={fakeUserReport.downpayment.ten_year_plan}
      categoryName={fakeReportData[0]}
      categoryMainNumber={fakeReportData[].location.zip_code}
      // categoryMainTitle={fakeSubtitle_1}
      // categorySubtitle={fakeSubtitle_2}
      // categorySecondNumber={
      //   fakeUserReport.location.location
      // }
      // categoryID={fakeKey + 1}
      />
    );

      expect(screen.getByAltText("location-illustration")).toBeInTheDocument();
  });

})
