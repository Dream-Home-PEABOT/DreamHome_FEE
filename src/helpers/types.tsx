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
  salary: string;
  zipcode: string;
  credit_score: string;
  monthly_debt: string;
  downpayment_savings: string;
  mortgage_term: string;
  downpayment_percentage: string;
  goal_principal: string;
  rent: string;

  //update 29/01/2021
  /*
    {required to make API Call
      "salary": 5000,
      "zipcode": 80209,
      "credit_score": 710,
      "monthly_debt": 1500,
      "downpayment_savings": 50000,
      "mortgage_term": 30,
      "downpayment_percentage": 20,
      "goal_principal": 500000,
      "rent": 0
    }
    */
}

  //downpayment_savings:QuestionFormat;
  //credit_score_range:QuestionFormat;
  //downpayment_percentage:QuestionFormat;
  //mortgage_term:QuestionFormat;
  //goal_home_price:QuestionFormat;
  //external_services:QuestionFormat;
  //survey:QuestionFormat;

