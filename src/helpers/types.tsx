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

export interface Answers{
  salary: string,
  zipcode: string,
  credit_score: string,
  monthly_debt: string,
  downpayment_savings: string,
  downpayment_percentage: string,
  rent: string,
  goal_principal: string
  uid: string
}

  //downpayment_savings:QuestionFormat;
  //credit_score_range:QuestionFormat;
  //downpayment_percentage:QuestionFormat;
  //mortgage_term:QuestionFormat;
  //goal_home_price:QuestionFormat;
  //external_services:QuestionFormat;
  //survey:QuestionFormat;

