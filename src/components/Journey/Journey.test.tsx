import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Journey from './Journey';

describe('Journey', () => {
  it('should render displaying an info message', () => {
    render(<Journey />);

    expect(screen.getByText('Hi, my name is Teki and I will be here to accompany you throughout this journey. One thing you should know is that I am a vocabulary specialist.')).toBeInTheDocument();
  });

  it('should render displaying a title', () => {
    render(<Journey />);

    expect(screen.getByText('My')).toBeInTheDocument();
    expect(screen.getByText('Dream Home')).toBeInTheDocument();
  });

  it('should render with a start button', () => {
    render(<Journey />);

    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('for a user, should be able to click the button', () => {
    //test onclick when implemented.
  });

})
