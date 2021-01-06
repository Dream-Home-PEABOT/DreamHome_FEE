import React from 'react';
export interface QuestionNode{
  profile: any[],
  comments: any[],
  posts: any[]
}


export interface QuestionFormat{
  type: string;
  question: string;
  description: string;
  information: string;
  note: string;
  source: string;
}
export const QuestionContext = React.createContext<Partial<QuestionFormat | null>>({})
export const AnswerContext = React.createContext<Partial<[]>>([])
