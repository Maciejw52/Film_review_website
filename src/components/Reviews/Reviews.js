import React from 'react'
import { useState, useEffect } from 'react';
import { getReviewsFromServer } from '../../utils/api';
import "./Reviews.css";
import {Link} from "react-router-dom";


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
      <div className='flex-container' style={{flexDirection: "column"}}>
        <div className='Full' style={{flexDirection: "column", alignItems: "center"}}>
          <h2>All Reviews</h2>
        </div>
        <div className='AllReviews'>
          {reviewView.map((review, key) => {
            return (
              <section key={key}>
              {/* Main review container */}
              <div className='reviewContainer' key={review._id} style={{flexDirection: "row"}}>
                {/* Main - Voting Item */}
                
                {/* Main - Text Item */}
                <div className="flex-constainer" style={{flexDirection: "column", flex:"60%", borderLeft: " 1px solid #707070"}}>                
                  {/* Child - Text Text Item */}
                  <div id='reviewText' >

                      <div className='flex-container'>
                        <Link style={{textDecoration: 'none'}} to={`/reviews/${review._id}`}>
                          <div className='reviewTitle'>{review.header}</div>
                        </Link>
                        <div/>
                      </div>


                    <div className='flex-container' style={{ alignItems: "center"}}>
                      <div className='reviewAuthor' style={{marginRight: "10px"}}>{review.owner}</div>
                      <div className='reviewDateCreated'>{review.created_at}</div>
                    </div>

                    <div className="flex-container">
                      <div className='reviewCategory'style={{marginRight: "15px"}} >{review.film_title}</div>
                      <Link style={{textDecoration: 'none'}} to={`../reviews/genres/${review.genre}`}>
                        <div className='reviewCategory' >{review.genre}</div>
                      </Link>
                      <div></div>
                    </div>

                    <div className='reviewReview' style={{marginTop:"10px", marginBottom:"10px"}}>{review.review_body}</div>

                  </div>

                  <div/>
                </div>

                {/* Main - Image Item */}
                <div id='reviewImage' style={{flex:"20%", alignItems: "center"}}>
                </div>
                </div>
                <div className='flex-container' style={{flexDirection: "column", alignItems: "center"}}>
                  <div/><div className="reviewBreak" ></div><div/>
                </div>
                
              </section>
            );
          })}
        </div>
      </div>
    
    </>
  )
}

export default AllReviews