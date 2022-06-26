import React from 'react'
import { useState, useEffect } from 'react';
import { getReviewsFromServer } from '../../utils/api';
import "./Reviews.css";
import UppercaseString from "../../utils/UppercaseString";
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
        <div className='AllReviewsTitle'>All Reviews</div>
        <div className='AllReviews'>
          {reviewView.map((review) => {
            return (
              <section>
              {/* Main review container */}
              <div className='reviewContainer' key={review._id} style={{flexDirection: "row"}}>
                {/* Main - Voting Item */}
                
                {/* Main - Text Item */}
                <div className="flex-constainer" style={{flexDirection: "column", flex:"60%"}}>                
                  {/* Child - Text Text Item */}
                  <div id='reviewText' >
                    <Link style={{textDecoration: 'none'}} to={`/reviews/${review._id}`}>
                      <div className='reviewTitle'>{review.header}</div>
                    </Link>

                    <div className='flex-container' style={{ alignItems: "center"}}>
                      <div className='reviewAuthor' style={{marginRight: "10px"}}>{UppercaseString(review.owner)}</div>
                      <div className='reviewDateCreated'>{(review.created_at).substring(0, (review.created_at).indexOf('T'))}</div>
                    </div>

                    <div className="flex-container">
                      <Link style={{textDecoration: 'none'}} to={`../reviews/genres/${review.genre}`}>
                        <div className='reviewCategory' >{UppercaseString(review.genre)}</div>
                      </Link>
                      <div></div>
                    </div>

                    <div className='reviewReview' style={{marginTop:"10px", marginBottom:"10px"}}>{review.review_body}</div>

                  </div>

                  <div/>
                </div>

                {/* Main - Image Item */}
                <div id='reviewImage' style={{flex:"25%", alignItems: "center"}}>
                </div>
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