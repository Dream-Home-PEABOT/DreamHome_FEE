//import 
import { Answers } from "./types";

export const getQuestions = async () => {
  const response = await fetch(
    "https://dreamhome-mvp.herokuapp.com/api/v1/education"
  );
  if (response.ok) {
    let final = await response.json();
    return final.data;
  } else {
    return response;
  }
};

export const postAnswers = async (answers: Answers) => {
  const response = await fetch(
    "https://dreamhome-mvp.herokuapp.com/api/v1/report",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    }
  );
  if (response.ok) {
    return await response.json();
  } else {
    return response;
  }
};

export const getReport = async () => {
  const response = await fetch(
    `https://dreamhome-mvp.herokuapp.com/api/v1/report/60131d3c4d22decfb8bc3e04`
  );
  if (response.ok) {
    let final = await response.json();
    return final.data['03_attributes'];
  } else {
    return response;
  }
};
