//imports
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Journey from './Journey';

describe('Journey', () => {
  beforeEach(() => {

    render(
      <BrowserRouter>
        <Journey />
      </BrowserRouter>
      );
  })

  it('should render withou crashing', () => {
    expect(screen.getByText('Hi, my name is Teki and I will be here to accompany you throughout this journey. One thing you should know is that I am a vocabulary specialist.')).toBeInTheDocument();
  });

  it('should render displaying an info message', () => {
      const journeySection = screen.getByTestId('journey-section');
      expect(journeySection).toBeInTheDocument();
  });
  
  it('should render background image', () => {
    const backgroundImage = screen.getByTestId('journey-img');
    expect(backgroundImage).toBeInTheDocument();    
  });
  
  it('should render displaying a title', () => {
    expect(screen.getByText('My')).toBeInTheDocument();
    expect(screen.getByText('Dream Home')).toBeInTheDocument();
  });
  
  it('should render with a start button', () => {
    const startButton = screen.getByRole('button', {name: /start/i})
    expect(startButton).toBeInTheDocument()
    
  });
  
  it('should render text container', () => {
    const textContainer = screen.getByTestId('information-container');
    expect(textContainer).toBeInTheDocument();
  });

  it('for a user, should be able to click the button', () => {
    const startButton = screen.getByRole('button', {name: /start/i})
    expect(startButton).toBeInTheDocument();

    userEvent.click(startButton)
    //this is just unit testing and will not render the next component 
  });

})
