import { Answers } from './types';

export const getQuestions = async () => {
  const response = await fetch('https://dreamhome-mvp.herokuapp.com/api/v1/education')
  if (response.ok) {
    const result =  await response.json()
    return result.data
  } else {
    return response
  }
};

//POST endpoint: 'https://dreamhome-mvp.herokuapp.com/api/v1/report'
// https://dreamhome-mvp.herokuapp.com/api/v1/education

//export const getReport = async () => {
//  const response = await fetch("http://localhost:3000/report")
//  if (response.ok) {
//    return await response.json()
//  } else {
//    return response
//  }
//}

export const postAnswers = async (answers: Answers) => {
  const response = await fetch('https://dreamhome-mvp.herokuapp.com/api/v1/report', {
    method: 'POST',
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(answers)
  })
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}

export const getReport = async (id: string) => {
  const response = await fetch(`https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}`)
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}
// GET report: https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}
