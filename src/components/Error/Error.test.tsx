import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "./Error";

describe("Error", () => {
  it("all element containers should render accordingly", () => {
    render(
      <BrowserRouter>
        <Error errorMessage={"here is an error for you"} errorNum={404} />
      </BrowserRouter>
    );

    const decorationOne = screen.getByTestId("box-1");
    const decorationTwo = screen.getByTestId("box-2");
    const decorationThree = screen.getByTestId("box-3");
    const messageContainer = screen.getByTestId("message box");
    const imageOne = screen.getByTestId("error image 1");
    const imageTwo = screen.getByTestId("error image 2");

    expect(decorationOne).toBeInTheDocument();
    expect(decorationTwo).toBeInTheDocument();
    expect(decorationThree).toBeInTheDocument();
    expect(messageContainer).toBeInTheDocument();
    expect(imageOne).toBeInTheDocument();
    expect(imageTwo).toBeInTheDocument();
  });

  it("should render a 404 erro by default", () => {
    render(
      <BrowserRouter>
        <Error errorMessage={"here is an error for you"} errorNum={404} />
      </BrowserRouter>
    );

    const errorMessage = screen.getByRole("heading", { name: /404error/i });
    const errorNumber = screen.getByRole("heading", {
      name: /here is an error for you/i,
    });
    expect(errorMessage).toBeInTheDocument();
    expect(errorNumber).toBeInTheDocument();
  });

  it("should render a different error message", () => {
    render(
      <BrowserRouter>
        <Error errorMessage={"here is different error"} errorNum={205} />
      </BrowserRouter>
    );

    const errorMessage = screen.getByRole("heading", { name: /205error/i });
    const errorNumber = screen.getByRole("heading", {
      name: /here is different error/i,
    });

    expect(errorMessage).toBeInTheDocument();
    expect(errorNumber).toBeInTheDocument();
  });
});
