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

export const getReport = async (id: string) => {
  const response = await fetch(
    `https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}`
  );
  if (response.ok) {
    let final = await response.json();
    return final.data.attributes.output;
  } else {
    return response;
  }
};
