import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";


import Survey from './Survey';

describe('Survey', () => {

  const desc = "You may have some questions about some terms I present in the questions. Don't worry! I'll try to help you understand them!"

  beforeEach(() => {
    render(<MemoryRouter><Survey /></MemoryRouter>)
  });

  it('should render with a message', () => {

    expect(screen.getByText('Enter your numbers and I\'ll do the math...')).toBeInTheDocument();
    expect(screen.getByText(desc)).toBeInTheDocument();
  });

  it('should render with a start button', () => {

    expect(screen.getByText('Begin')).toBeInTheDocument();
  });

  it('should render with images', () => {

    expect(screen.getByAltText("tekki-sitting-1")).toBeInTheDocument();
    expect(screen.getByAltText("tekki-sitting-2")).toBeInTheDocument();
  });

})
