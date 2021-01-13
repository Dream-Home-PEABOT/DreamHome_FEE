import { Answers } from './types';

export const getQuestions = async () => {
  const response = await fetch('http://localhost:3000/data')
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
};

//POST endpoint: 'https://dreamhome-mvp.herokuapp.com/api/v1/report'
<<<<<<< HEAD
// https://dreamhome-mvp.herokuapp.com/api/v1/education

export const getReport = async () => {
  const response = await fetch("http://localhost:3000/report")
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}

//POST endpoint: 'https://dreamhome-mvp.herokuapp.com/api/v1/report'

<<<<<<< HEAD
export const postAnswers = async (answers: Answers) => {
  const response = await fetch('https://dreamhome-mvp.herokuapp.com/api/v1/report', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(answers)
  })
=======

<<<<<<< HEAD
export const getReport = async (id: string) => {
  const response = await fetch(`https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}`)
>>>>>>> 0a8f4f9... add backend endpoint to education api call
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 13d7067... comment out unnedded api call for deployment test
// export const getReport = async (id: string) => {
//   const response = await fetch(`https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}`)
//   if (response.ok) {
//     return await response.json()
//   } else {
//     return response
//   }
// }
<<<<<<< HEAD
// GET report: https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}
=======
>>>>>>> 0a8f4f9... add backend endpoint to education api call
=======
>>>>>>> 13d7067... comment out unnedded api call for deployment test
=======
export const getReport = async (id: string) => {
=======
export const getReport = async () => {
>>>>>>> 7e00953... Use new readme
  const response = await fetch("http://localhost:3000/report")
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}
// GET report: https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}
>>>>>>> d2389c2... add back mocked api to resolve build error
