import React from 'react';
export interface QuestionNode{
  profile: any[],
  comments: any[],
  posts: {}
}
export const Context = React.createContext<Partial<QuestionNode>>({})
