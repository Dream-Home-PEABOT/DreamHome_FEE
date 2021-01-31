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
    console.log(final.data)
    return final.data['03_attributes'];

  } else {
    console.log('bad response', response)
    return response;
  }
};

export const updateUserReport = async (id:string, answers: Answers) => {

  const response = await fetch(
  `https://dreamhome-mvp.herokuapp.com/api/v1/report/${id}`,{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers)
    }
  );
  if (response.ok) {
    console.log( await response.json())
  } else {
    return response;
  }
};


export const getUniqueReport = async (uid: string) => {
  const response = await fetch(
    `https://dreamhome-mvp.herokuapp.com/api/v1/report/unique`,
      {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({uid}),
    }
  );
  if (response.ok) {
    let final = await response.json();
    return final.data;
  } else {
    return response;
  }
};
