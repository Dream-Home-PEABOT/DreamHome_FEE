//imports
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
        <NavBar />
    </BrowserRouter>
    );
  })

  it('should render dropdown element', () => {
    const dropElement = screen.getByRole('listitem')
    expect(dropElement).toBeInTheDocument()
    
  });
  
  it('should render displaying a title', () => {
    
    const navTitle = screen.getByRole('heading', {name: /menu/i})
    expect(navTitle).toBeInTheDocument()
  });


  it('should be able to render a dropdown a menu', () => {
    const listitem = screen.getByRole('listitem');
    const dropdown = screen.getByTestId('dropdown')
    within(listitem).getByRole('link');
    
    userEvent.click(listitem)
    userEvent.click(dropdown)

    const menuOption1 =  screen.getByTestId('to-home');
    const menuOption2 =  screen.getByTestId('to-journey');
    const menuOption3 =  screen.getByTestId('to-login');

    expect( menuOption1 ).toBeInTheDocument()
    expect( menuOption2 ).toBeInTheDocument()
    expect( menuOption3 ).toBeInTheDocument()
  });
});
