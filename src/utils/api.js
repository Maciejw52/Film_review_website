import axios from "axios";

// URL for backend
const myApi = axios.create({
  baseURL: "http://localhost:7000/api/"
  //baseURL:"https://review-website-server.herokuapp.com/api/"
});


export const getGenresFromServer = () => {
  return (
    myApi.get("genres")
      .then((dataFromServer) => {
        return(dataFromServer.data)
      })
  )

}

export const getReviewsFromServer = () => {
  return (
    myApi.get("reviews")
      .then((dataFromServer) => {
        return(dataFromServer.data)
      })
  )

}



export const postReview = (reviewObject) => {
  
  const { username, body } = reviewObject;

  return (
    myApi.post(`reviews/new`, { username, body })
    .then(({ dataFromServer }) => {
      return dataFromServer;
    })
  )
};

