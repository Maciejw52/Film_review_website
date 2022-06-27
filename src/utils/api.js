import axios from "axios";

if (process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

// URL for backend
const myApi = axios.create({
  baseURL: process.env.SERVER_URL || "http://localhost:7000/api/"
});

/* 
    
    GENRE HTTP REQUESTS 

*/

export const getGenresFromServer = () => {
  return (
    myApi.get("genres")
      .then((dataFromServer) => {
        return(dataFromServer.data)
      })
  )
}

export const postGenre = (NewGenre) => {

  const { genre } = NewGenre;

  return (
    myApi.post(`genres/new`, {
      genre: genre
    } )
    .then(({ dataFromServer }) => {
      console.log(dataFromServer)
    }).catch((error) => {
      console.log(error)
    })
  )
};

export const deleteGenre = (genreId) => {
  const { _id } = genreId;
  
  console.log(`Deleting genre with ID: ${_id}`)

  return (
    myApi
      .delete(`genres/${_id}`)
      .then((resposeFromServer) => {
        console.log(resposeFromServer)
      }).catch((error) => {
        console.log(error);
      })
  )
}

/* 
    
    REVIEW HTTP REQUESTS 

*/


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

