import axios from "axios";

// URL for backend
const myApi = axios.create({
  baseURL:"http://localhost:8000"
});


export const postReview = (reviewObject) => {
  
  const { username, body } = reviewObject;

  return (
    myApi.post(`reviews/new`, { username, body })
    .then(({ dataFromServer }) => {
      return dataFromServer;
    })
  )
};

