import React from 'react';
export interface QuestionNode{
  profile: any[],
  comments: any[],
  posts: any[]
}
export interface QuestionFormat{
  data:{
  type: string;
  question: string;
  description: string;
  information: string;
  note: string;
  source: string;
  }
}
export interface AllQuestionFormat{
  annual_salary:QuestionFormat;
  zipcode:QuestionFormat;
  monthly_debt:QuestionFormat;
  downpayment_savings:QuestionFormat;
  credit_score_range:QuestionFormat;
  downpayment_percentage:QuestionFormat;
  mortgage_term:QuestionFormat;
  goal_home_price:QuestionFormat;
  external_services:QuestionFormat;
  survey:QuestionFormat;
}

export const QuestionContext = React.createContext<Partial<AllQuestionFormat | null>>({})
export const AnswerContext = React.createContext<Partial<[]>>([])
