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
  it("User should be able to click on the nav dropdown", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId('dropdown'));
    userEvent.click(screen.getByText('Journey'));
    expect(screen.getByText(/Hi, my name is Teki/)).toBeInTheDocument();
  });
})
