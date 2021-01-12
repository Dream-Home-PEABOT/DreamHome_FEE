export const getQuestions = async () => {
  const response = await fetch('http://localhost:3000/data')
  if (response.ok) {
    return await response.json()
  } else {
    return response
  }
}
export const getReport = () => {
  const url:string = "http://localhost:3000/report"
  return fetch(url).then(data => data.json())
}
