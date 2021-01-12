export const getQuestions = async () => {
  const response = await fetch('http://localhost:3000/data')
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}
export const getReport = async () => {
  const response = await fetch('http://localhost:3000/report')
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}

