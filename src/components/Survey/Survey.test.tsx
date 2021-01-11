import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Survey from './Survey';

describe('Survey', () => {

  const desc = "While every person’s situation is different (and some loans may have different guidelines), here are the generally recommended guidelines based on your gross monthly income (that’s before taxes): Your mortgage payment should be 28% or less. Your debt-to-income ratio (DTI) should be 36% or less. Your housing expenses should be 29% or less. This is for things like insurance, taxes, maintenance, and repairs. You should have three months of housing payments and expenses saved up."

  render(<BrowserRouter><Survey /></BrowserRouter>);

  it('should render with a message', () => {

    expect(screen.getByText('One of the main questions to answers is how much can I afford?. Affordability is defined as the cost of something.')).toBeInTheDocument();
  });

  it('should render with a start button', () => {

    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('for a user, the next button should be clickable', () => {
    //test for onclick when implemented.
  });

})
