export const getQuestions = async () => {
  const response = await fetch('https://dreamhome-mvp.herokuapp.com/api/v1/education')
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
};

//POST endpoint: 'https://dreamhome-mvp.herokuapp.com/api/v1/report'

export const getReport = async (id: string) => {
  const response = await fetch(`https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}`)
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}
