import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {

  describe('Home', () => {
    beforeEach(() => {
  
      render(
        <BrowserRouter>
          <Home/>
        </BrowserRouter>
        );
    })
    
  it('should render all home components', () => {
    const mainContainer = screen.getByTestId('main container') 
    const titleTop = screen.getByTestId('My')
    const titleDow = screen.getByTestId('Dream Home')
    const banner = screen.getByTestId('journey edition')

    expect(mainContainer).toBeInTheDocument()
    expect(titleTop ).toBeInTheDocument()
    expect(titleDow ).toBeInTheDocument()
    expect(banner).toBeInTheDocument()

    });
  });
});
