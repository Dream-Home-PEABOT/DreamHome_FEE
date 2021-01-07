export const getQuestions = () => {
  const url:string = "http://localhost:3000/data"
  return fetch(url).then(data => data.json())
}
