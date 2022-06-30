import axios from "axios";
import ConvertDate from "./ConvertDate";

// URL for backend
const myApi = axios.create({
  baseURL: "http://localhost:7000/api/"
  //baseURL:"https://review-website-server.herokuapp.com/api/"
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

  return (
    myApi.post(`genres/new`, NewGenre )
    .then(( dataFromServer) => {
      console.log(dataFromServer.data)
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

        /* Date Handler */
        dataFromServer.data.forEach((review) => {
          review.created_at = ConvertDate(review.created_at)
        })

        return dataFromServer.data
      })
  )
}

export const postReview = (reviewObject) => {

  return (
    myApi.post("/reviews/new", reviewObject)
    .then(( dataFromServer ) => {
      console.log(dataFromServer.data)
    }).catch((error) => {
      console.log(error)
    })
  )
};

export const deleteReview = (reviewId) => {
  const { _id } = reviewId;
  
  console.log(`Deleting review with ID: ${_id}`)

  return (
    myApi
      .delete(`reviews/${_id}`)
      .then((resposeFromServer) => {
        console.log(resposeFromServer)
      }).catch((error) => {
        console.log(error);
      })
  )
}

export const getReviewByIdFromServer = (reviewId) => {
  
  return (
    myApi.get(`/reviews/${reviewId}`)
      .then((reviewIdData) => {

        reviewIdData.data.created_at = ConvertDate(reviewIdData.data.created_at);

      console.log(reviewIdData.data)
      return reviewIdData.data;
    })
  )
}