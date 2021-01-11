import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from './App';

describe("App", () => {
  it("User should see home page by default", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Dream Home")).toBeInTheDocument();
  });
  it("User should be able to click on the nav dropdown", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId('dropdown'));
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Journey")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
  it("User should be able to click the journey link and be taken to the journey route", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    expect(screen.getByText(/Hi, my name is Teki/)).toBeInTheDocument();
  });
  it("User should be taken to survery page when clicking start", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    expect(screen.getByText(/While every person/)).toBeInTheDocument();
  });
  it("User should be taken to first question when clicking start on survey", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    userEvent.click(screen.getByRole("button", {name: "Start"}));
    userEvent.click(screen.getByRole("button", {name: "Begin"}));
    expect(screen.getByRole("button", {name: "next"})).toBeInTheDocument();
    //userEvent.click(screen.getByRole("button", {name: "next"}));
  });
})
