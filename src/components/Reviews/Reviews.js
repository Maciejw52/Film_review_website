import React from 'react'
import { useState, useEffect } from 'react';
import { getReviewsFromServer } from '../../utils/api';
import "./Reviews.css";

function AllReviews() {
  const [reviewView, setReviewView] = useState([]);

  useEffect(() => {
    getReviewsFromServer().then((genresObject) => {
      console.log(genresObject);
      setReviewView(genresObject)
    })
  }, []);
  
  
  return (
    <>
      <div>All Genres</div>
      <div className='AllReviews'>
        {reviewView.map((review) => {
          return (
            <>
              <div>created_at {review.created_at}</div>
              <div>film_title {review.film_title}</div>
              <div>genre {review.genre}</div>
              <div>header {review.header}</div>
              <div>owner {review.owner}</div>
              <div>rating {review.rating}</div>
              <div>review_body {review.review_body}</div>
              <div>review_img_name {review.review_img_name}</div>
              <div>votes {review.votes}</div>
              <div className='ReviewBottomBorder'></div>
            </>
          )
        })}
      </div> 
    </>
  )
}

export default AllReviews