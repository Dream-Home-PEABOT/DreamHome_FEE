import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render displaying an icon', () => {

  });

  it('should render displaying a title', () => {
    render (<NavBar />);

    expect(screen.getByText('menu')).toBeInTheDocument();
  });

  it('should render an icon', () => {
    //give aria role and get by role
  });

  it('should display links when icon is clicked', () => {

  });

  it('should have clickable links', () => {

  });

})
