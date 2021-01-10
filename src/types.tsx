import React from 'react';

export interface QuestionFormat{
  attributes:{
  classification: string;
  description: string;
  information: string;
  note: string;
  question: string;
  source: string;
  }
  id:string;
  type:string;
}
export interface AllQuestionFormat{
  annual_salary:QuestionFormat;
  zipcode:QuestionFormat;
  monthly_debt:QuestionFormat;
}

  //downpayment_savings:QuestionFormat;
  //credit_score_range:QuestionFormat;
  //downpayment_percentage:QuestionFormat;
  //mortgage_term:QuestionFormat;
  //goal_home_price:QuestionFormat;
  //external_services:QuestionFormat;
  //survey:QuestionFormat;

export const AnswerContext = React.createContext<any>({})
export const QuestionContext = React.createContext<any>({})
export const ReportContext = React.createContext<any>({})
