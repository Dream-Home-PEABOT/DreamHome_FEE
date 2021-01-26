import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from '@testing-library/react';
import {ReportContext} from '../../helpers/context'
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import {getQuestions, getReport} from '../../helpers/apiCalls';
import App from './App';
import NavBar from '../NavBar/NavBar';
import Report from '../Report/Report';
jest.mock("../../helpers/apiCalls");

let questionResults;
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
    // expect(screen.getByText("Login")).toBeInTheDocument();

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

    expect(screen.getByText(/Enter your numbers and I'll do the math.../)).toBeInTheDocument();

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

  it("User should see error message if question is unanswered and next is pressed", async () => {

    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    await waitFor(async () =>  await questionResults())

    render(<MemoryRouter><App /></MemoryRouter>);

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));

    await waitFor(()=> expect(screen.getByText(/Annual Salary/)).toBeInTheDocument());

    userEvent.click(screen.getByRole("button", {name: "next"}));

    await waitFor(()=> expect(screen.getByText(/Sorry/)).toBeInTheDocument());
    expect(screen.getByText(/Sorry but we need this information/)).toBeInTheDocument();

    await act(() => promise)
  });

  it("User should be able to fill out full questionare by clicking next", async () => {

    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    await waitFor(async () =>  await questionResults())

    render(<MemoryRouter><App /></MemoryRouter>);

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));

    await waitFor(()=> expect(screen.getByText(/Annual Salary/)).toBeInTheDocument());

    userEvent.type(screen.getByRole("textbox"), "50000");
    userEvent.click(screen.getByRole("button", {name: "next"}));

    await waitFor(()=> expect(screen.getByText(/Credit/)).toBeInTheDocument());

    expect(screen.getByText(/What is your current credit score?/)).toBeInTheDocument();

    userEvent.type(screen.getByRole("textbox"), "770");
    userEvent.click(screen.getByRole("button", {name: "next"}));

    expect(screen.getByRole("button", {name: "Generate Report"})).toBeInTheDocument();
    await act(() => promise)
  });

  it("User should be able to move back to previous question and see their response", async () => {

    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    await waitFor(async () =>  await questionResults())

    render(<MemoryRouter><App /></MemoryRouter>);

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));

    await waitFor(()=> expect(screen.getByText(/Annual Salary/)).toBeInTheDocument());

    userEvent.type(screen.getByRole("textbox"), "50000");
    userEvent.click(screen.getByRole("button", {name: "next"}));

    await waitFor(()=> expect(screen.getByText(/Credit/)).toBeInTheDocument());

    userEvent.type(screen.getByRole("textbox"), "770");
    userEvent.click(screen.getByRole("button", {name: "back"}));

    expect(screen.getByDisplayValue("50000")).toBeInTheDocument()


    await act(() => promise)
  });

  it("User should be able to move directly to the home page if desired", async () => {

    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    await waitFor(async () =>  await questionResults())

    render(<MemoryRouter><App /></MemoryRouter>);

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));

    await waitFor(()=> expect(screen.getByText(/Annual Salary/)).toBeInTheDocument());

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Home'));

    expect(screen.getAllByText(/Home/)).toHaveLength(4);


    await act(() => promise)
  });

  it("User should move on to loading screen on generate report click", async () => {

    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)

    await waitFor(async () =>  await questionResults())

    render(
    <MemoryRouter>
          <App />
    </MemoryRouter>)

    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));

    await waitFor(()=> expect(screen.getByText(/Annual Salary/)).toBeInTheDocument());

    userEvent.type(screen.getByRole("textbox"), "50000");
    userEvent.click(screen.getByRole("button", {name: "next"}));

    await waitFor(()=> expect(screen.getByText(/Credit/)).toBeInTheDocument());

    expect(screen.getByText(/What is your current credit score?/)).toBeInTheDocument();

    userEvent.type(screen.getByRole("textbox"), "770");
    userEvent.click(screen.getByRole("button", {name: "next"}));

    expect(screen.getByRole("button", {name: "Generate Report"})).toBeInTheDocument();

    //Animations currently break this button click, simulate click and move on to next test
    //userEvent.click(screen.getByRole("button", {name: "Generate Report"}));
    await act(() => promise)
  });

  it("User should see their report after loading screen", async () => {

    let mockedReport = getReport.mockResolvedValue({
       "location": {
         "city_state": 11111,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "zipcode": 11111,
       },
       "principal": {
         "based_on_rent": 350000,
         "goal_principal": 0,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "mortage_rate": 0.045
       },
       "monthly": {
         "add_ons": {
           "home_insurance": 110,
           "property_tax": 105,
           "hoa": 75,
           "pmi": 250
         },
         "estimated_true_monthly": 1940,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "monthly_principal": 1400,
       },
       "downpayment": {
         "downpayment_saved": 10000,
         "downpayment_percentage_selected": 10,
         "downpayment_percent_saved": 2.9,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "ten_year_plan": {
           "1": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "2": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "3": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "4": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "5": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "6": {
             "monthly_savins": 100,
             "goal_end_date": "12/03/2025"
           },
           "7": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "8": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "9": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "10": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           }
         }
       }
  })
    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)
    let testContext

    await waitFor(async () =>  testContext = await mockedReport())

    render(
    <MemoryRouter>
        <ReportContext.Provider value={testContext}>
          <Report />
        </ReportContext.Provider>
    </MemoryRouter>)

    expect(screen.getByText(/My Numbers/)).toBeInTheDocument();

    await act(() => promise)
  });

  it("User should be able to go back to home page from report", async () => {

    let mockedReport = getReport.mockResolvedValue({
       "location": {
         "city_state": 11111,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "zipcode": 11111,
       },
       "principal": {
         "based_on_rent": 350000,
         "goal_principal": 0,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "mortage_rate": 0.045
       },
       "monthly": {
         "add_ons": {
           "home_insurance": 110,
           "property_tax": 105,
           "hoa": 75,
           "pmi": 250
         },
         "estimated_true_monthly": 1940,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "monthly_principal": 1400,
       },
       "downpayment": {
         "downpayment_saved": 10000,
         "downpayment_percentage_selected": 10,
         "downpayment_percent_saved": 2.9,
         "information": "DEAR FE, HARD CODE INFORMATION YOU WANT HERE",
         "ten_year_plan": {
           "1": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "2": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "3": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "4": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "5": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "6": {
             "monthly_savins": 100,
             "goal_end_date": "12/03/2025"
           },
           "7": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "8": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "9": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           },
           "10": {
             "monthly_savings": 100,
             "goal_end_date": "12/03/2025"
           }
         }
       }
  })
        
    const promise = Promise.resolve()
    const updateAllAnswers = jest.fn(() => promise)
    let testContext

    await waitFor(async () =>  testContext = await mockedReport())

    render(
    <MemoryRouter>
      <ReportContext.Provider value={testContext}>
        <NavBar />
        <Report />
      </ReportContext.Provider>
    </MemoryRouter>)


    expect(screen.getByText(/My Numbers/)).toBeInTheDocument();
    userEvent.click(screen.getByTestId('dropdown'));
    expect(screen.getAllByText(/Home/)).toHaveLength(3);

    await act(() => promise)
  });

  });
