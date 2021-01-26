import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import {ReportCategory} from './ReportCategory';

describe('ReportCategory', () => {

    const fakeData = {
      _location: {
        zip_code: 11111,
        location: "Anywhere, CO"
      },
      principal: {
        based_on_rent: 350000,
        goal_principal: 5
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
        down_payment_percentage_selected: '10%',
        down_payment_saved: 10000,
        down_payment_percent_saved: 2.9,
        ten_year_plan: {
          1: {
            monthly_savings: 100,
            goal_end_date: "12/03/2025"
          },
          2: {
            monthly_savings: 200,
            goal_end_date: "12/03/2026"
          }
        }
      }
    };

  it('should render with images', () => {
    const fakeUserReport = {
      zip_code: 11111,
      location: "Anywhere, CO"
    }

    const fakeReportData = Object.keys(fakeData);
    const fakeSubtitle_2 = '_location';
    const fakeKey = 0;

    render (
      <ReportCategory
      position={fakeKey + 1}
      key={fakeKey}
      plan={fakeData.downpayment.ten_year_plan}
      categoryName={fakeReportData[0]}
      categoryMainNumber={fakeUserReport.zip_code || fakeData.principal.based_on_rent
      || fakeData.monthly.monthly_principal
      || fakeData.downpayment.down_payment_percentage_selected}
      categoryMainTitle={'location'}
      categorySubtitle={fakeSubtitle_2}
      categorySecondNumber={fakeUserReport.location || fakeData.principal.goal_principal
      || fakeData.monthly.estimated_true_monthly
      || fakeData.downpayment.down_payment_saved}
      categoryID={fakeKey + 1}
      />
    );

      expect(screen.getByAltText("location-illustration-1")).toBeInTheDocument();
  });

  it('should render with titles', () => {
    const fakeUserReport = {
      zip_code: 11111,
      location: "Anywhere, CO"
    }

    const fakeReportData = Object.keys(fakeData);
    const fakeSubtitle_2 = '_location';
    const fakeKey = 0;

    render (
      <ReportCategory
      position={fakeKey + 1}
      key={fakeKey}
      plan={fakeData.downpayment.ten_year_plan}
      categoryName={fakeReportData[0]}
      categoryMainNumber={fakeUserReport.zip_code || fakeData.principal.based_on_rent
      || fakeData.monthly.monthly_principal
      || fakeData.downpayment.down_payment_percentage_selected}
      categoryMainTitle={'location'}
      categorySubtitle={fakeSubtitle_2}
      categorySecondNumber={fakeUserReport.location || fakeData.principal.goal_principal
      || fakeData.monthly.estimated_true_monthly
      || fakeData.downpayment.down_payment_saved}
      categoryID={fakeKey + 1}
      /> );

      expect(screen.getByText("Save")).toBeInTheDocument();
      expect(screen.getByText("monthly for")).toBeInTheDocument();
      expect(screen.getByText("Your DreamHome")).toBeInTheDocument();
      expect(screen.getByText("ready to buy")).toBeInTheDocument();
      expect(screen.getByText("date is")).toBeInTheDocument();
  });

  it('should render information about location depending on the props passed in', () => {
    const fakeUserReport = {
      zip_code: 11111,
      location: "Anywhere, CO"
    }

    const fakeReportData = Object.keys(fakeData);
    const fakeSubtitle_2 = 'Denver';
    const fakeKey = 0;

    render (
      <ReportCategory
      position={fakeKey + 1}
      key={fakeKey}
      plan={null}
      categoryName={fakeReportData[0]}
      categoryMainNumber={fakeUserReport.zip_code || fakeData.principal.based_on_rent
      || fakeData.monthly.monthly_principal
      || fakeData.downpayment.down_payment_percentage_selected}
      categoryMainTitle={'location'}
      categorySubtitle={fakeSubtitle_2}
      categorySecondNumber={fakeUserReport.location || fakeData.principal.goal_principal
      || fakeData.monthly.estimated_true_monthly
      || fakeData.downpayment.down_payment_saved}
      categoryID={fakeKey + 1}
      /> );

      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("11111")).toBeInTheDocument();
      expect(screen.getByText("_location")).toBeInTheDocument();
      expect(screen.getByText("location")).toBeInTheDocument();
      expect(screen.getByText("Anywhere, CO")).toBeInTheDocument();
  });

  it('should render information about principal depending on the props passed in', () => {
    const fakeUserReport = {
      zip_code: null,
      location: null
    }

    const fakeReportData = Object.keys(fakeData);
    const fakeSubtitle_2 = "_location";
    const fakeKey = 0;

    render (
      <ReportCategory
      position={fakeKey + 1}
      key={fakeKey}
      plan={null}
      categoryName={fakeReportData[0]}
      categoryMainNumber={fakeUserReport.zip_code || fakeData.principal.based_on_rent
      || fakeData.monthly.monthly_principal
      || fakeData.downpayment.down_payment_percentage_selected}
      categoryMainTitle={'location'}
      categorySubtitle={fakeSubtitle_2}
      categorySecondNumber={fakeUserReport.location || fakeData.principal.goal_principal
      || fakeData.monthly.estimated_true_monthly
      || fakeData.downpayment.down_payment_saved}
      categoryID={fakeKey + 1}
      /> );

      expect(screen.getByText("350000")).toBeInTheDocument();
      expect(screen.getByText("5")).toBeInTheDocument();
  });

  it('should render information about monthly costs depending on the props passed in', () => {
    const fakeUserReport = {
      zip_code: null,
      location: null
    };

    const fakeUserReport2 = {
      based_on_rent: null,
      goal_principal: null
    }

    const fakeReportData = Object.keys(fakeData);
    const fakeSubtitle_2 = 'location';
    const fakeKey = 0;

    render (
      <ReportCategory
      position={fakeKey + 1}
      key={fakeKey}
      plan={null}
      categoryName={fakeReportData[0]}
      categoryMainNumber={fakeUserReport.zip_code || fakeUserReport2.based_on_rent
      || fakeData.monthly.monthly_principal
      || fakeData.downpayment.down_payment_percentage_selected}
      categoryMainTitle={'location'}
      categorySubtitle={fakeSubtitle_2}
      categorySecondNumber={fakeUserReport.location || fakeUserReport2.goal_principal
      || fakeData.monthly.estimated_true_monthly
      || fakeData.downpayment.down_payment_saved}
      categoryID={fakeKey + 1}
      /> );

      expect(screen.getByText("1400")).toBeInTheDocument();
      expect(screen.getByText("1940")).toBeInTheDocument();
  });

  it('should render information about down payment depending on the props passed in', () => {
    const fakeUserReport = {
      zip_code: null,
      location: null
    };

    const fakeUserReport2 = {
      based_on_rent: null,
      goal_principal: null
    };

    const fakeUserReport3 = {
      monthly_principal: null,
      estimated_true_monthly: null,
      add_ons: null
    };

    const fakeReportData = Object.keys(fakeData);
    const fakeSubtitle_2 = '_location';
    const fakeKey = 0;

    render (
      <ReportCategory
      position={fakeKey + 1}
      key={fakeKey}
      plan={fakeData.downpayment.ten_year_plan}
      categoryName={fakeReportData[0]}
      categoryMainNumber={fakeUserReport.zip_code || fakeUserReport2.based_on_rent
      || fakeUserReport3.monthly_principal
      || fakeData.downpayment.down_payment_percentage_selected}
      categoryMainTitle={'location'}
      categorySubtitle={fakeSubtitle_2}
      categorySecondNumber={fakeUserReport.location || fakeUserReport2.goal_principal
      || fakeUserReport3.estimated_true_monthly
      || fakeData.downpayment.down_payment_saved}
      categoryID={fakeKey + 1}
      /> );

      expect(screen.getByText("10%")).toBeInTheDocument();
  });

  it('should display buttons for selecting a plan', () => {
    const fakeUserReport = {
      zip_code: 11111,
      location: "Anywhere, CO"
    }

    const fakeReportData = Object.keys(fakeData);
    const fakeSubtitle_2 = 'Denver';
    const fakeKey = 0;


    render (
      <ReportCategory
      position={fakeKey + 1}
      key={fakeKey}
      plan={fakeData.downpayment.ten_year_plan}
      categoryName={fakeReportData[0]}
      categoryMainNumber={fakeUserReport.zip_code || fakeData.principal.based_on_rent
      || fakeData.monthly.monthly_principal
      || fakeData.downpayment.down_payment_percentage_selected}
      categoryMainTitle={'location'}
      categorySubtitle={fakeSubtitle_2}
      categorySecondNumber={fakeUserReport.location || fakeData.principal.goal_principal
      || fakeData.monthly.estimated_true_monthly
      || fakeData.downpayment.down_payment_saved}
      categoryID={fakeKey + 1}
      /> );

      expect(screen.getByText('1 yrs')).toBeInTheDocument();
  });


})
