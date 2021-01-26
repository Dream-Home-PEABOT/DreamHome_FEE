import React from 'react';
import "@testing-library/jest-dom";
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
    expect(screen.getByRole('heading', {
      name: /hi, my name is teki and want to help you find your dream home! we will focus on either building a plan for you that will help you reach your goals, or see what your possible plans for you based on your current situation\. with the information you give me, i can set you on a path to your dream home!/i
    })).toBeInTheDocument();
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
