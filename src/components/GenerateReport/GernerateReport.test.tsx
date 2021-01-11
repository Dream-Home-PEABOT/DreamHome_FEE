import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import GenerateReport from './GenerateReport';

describe('GenerateReport', () => {
  it('should render with a description', () => {
    render(<GenerateReport />);

    expect(screen.getByText('Yearly Salary After Taxes')).toBeInTheDocument();
  });

  it('should render with images', () => {
    render(<GenerateReport />);

    expect(screen.getByAltText('teki-sitting')).toBeInTheDocument();
    expect(screen.getByAltText('background-graphics')).toBeInTheDocument();
  });

  it('should render with a button to generate a report', () => {
    render(<GenerateReport />);

    expect(screen.getByText('Generate Report')).toBeInTheDocument();
  });

  it('for a user, should be able to click the button', () => {

    // mock onclick when added

  })

})
