import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import {getQuestions, getReport} from '../../apiCalls';
import "@testing-library/jest-dom";
import App from './App';
jest.mock("../../apiCalls");


let questionResults
describe("App", () => {

  beforeEach(()=>{
  questionResults  = getQuestions.mockResolvedValue({
      "annual_salary": {
        "attributes": {
        "classification": "Annual Salary",
        "description": "Gross income is the total amount you earn (typically over the course of a year) before expenses. Net income is the profit your business earns after expenses ",
        "information": "Depending on the home price you're aiming for, you may want to wait a year or two before you apply for a mortgage if you've just moved into a higher-paying role. The longer you stay in your higher-paying position, the more your lender may be willing to loan you.",
        "note": "The amount of money you earn plays a smaller role in getting a mortgage than you might think. ",
        "question": "What is your net monthly salary?",
        "source": "https://www.rocketmortgage.com"
      },
      "id": "5ff7a737be8682d9e5b0e0c2",
      "type": "Education object"
      },
      "credit_score": {
        "attributes": {
        "classification": "Credit Score",
        "dscription": " A high score will give you access to lower interest rates and more lender choices. If you have a low score, you may have trouble getting a loan.",
        "information": "Your credit score plays a big role in the interest rate you'll get for your loan.",
        "note": "Your credit score is a numerical rating that ranges from 300 – 850 and tells lenders how responsible you are when you borrow money. ",
        "question": "What is your current credit score?",
        "source": "https://www.rocketmortgage.com"
      },
      "id": "5ff7a752be8682d9e5b0e0c6",
      "type": "Education object"
  }});
  })

  it("User should see home page by default", async () => {
    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)
    const updateQuestions = jest.fn(() => promise)

    await waitFor(async () =>  await questionResults())

    render(<MemoryRouter><App /></MemoryRouter>);

    expect(screen.getByText("Dream Home")).toBeInTheDocument();

    await act(() => promise)
  });

  it("User should be able to click on the nav dropdown", async () => {

    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    render(<MemoryRouter><App /></MemoryRouter>);

    userEvent.click(screen.getByTestId('dropdown'));

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Journey")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();

    await act(() => promise)
  });

  it("User should be able to click the journey link and be taken to the journey route", async () => {

    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    render(<MemoryRouter><App /></MemoryRouter>);

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));

    expect(screen.getByText(/Hi, my name is Teki/)).toBeInTheDocument();

    await act(() => promise)
  });

  it("User should be taken to survery page when clicking start", async () => {
    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    render(<MemoryRouter><App /></MemoryRouter>);

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));

    expect(screen.getByText(/While every person/)).toBeInTheDocument();

    await act(() => promise)
  });
  it("User should be taken to first question when clicking start on survey", async () => {

    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    await waitFor(async () =>  await questionResults())

    render(<MemoryRouter><App /></MemoryRouter>);

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));

    await waitFor(()=> expect(screen.getByText(/Annual Salary/)).toBeInTheDocument());

    expect(screen.getByRole("button", {name: "next"})).toBeInTheDocument();

    await act(() => promise)
  });
  it("User should be taken to generate report page when done with questions", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));
    userEvent.click(screen.getByRole("button", {name: "next"}));
    expect(screen.getByRole("button", {name: "Generate Report"})).toBeInTheDocument();
  });
  it("User should be taken to generate report page when done with questions", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));
    userEvent.click(screen.getByRole("button", {name: "next"}));
    //userEvent.click(screen.getByRole("button", {name: "Generate Report"}));
    //screen.debug()
  });
})
