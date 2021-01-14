//imports
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Question from './Question';

describe('Question', () => {
  let updateAllAnswers;
  beforeEach(()=> {

    updateAllAnswers= jest.fn()

    render(
      <BrowserRouter>
        <Question updateAllAnswers={(updateAllAnswers)}/>
      </BrowserRouter>
      );

  })
  it('should render all components', () => {
    const descriptionContainer = screen.getByTestId('description-container')
    const descriptionTile = screen.getByTestId('description-title')
    const descriptionBody = screen.getByTestId('description-body')
    const imageOne = screen.getByTestId('back-image-1')
    const imageTwo = screen.getByTestId('back-image-2')

    expect(descriptionContainer).toBeInTheDocument()
    expect(descriptionTile).toBeInTheDocument()
    expect(descriptionBody).toBeInTheDocument();
    expect(imageOne).toBeInTheDocument();
    expect(imageTwo).toBeInTheDocument();

    const question = screen.getByTestId('the-question');
    expect(question).toBeInTheDocument();

    const input= screen.getByPlaceholderText('amount')
    expect(input).toBeInTheDocument();
  });

  it('should be able to type on the input field', () => {
    const input= screen.getByPlaceholderText('amount')
    expect(input).toBeInTheDocument()

    userEvent.type(input, 'This is my answer');
    expect(input).toHaveValue('This is my answer')
  });

})
