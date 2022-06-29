import React from 'react';
import '../Reviews/Reviews.css';
import { useState, useEffect } from 'react';
import { getReviewByIdFromServer } from '../../utils/api';
import { Link ,useParams } from 'react-router-dom';
import UppercaseString from '../../utils/UppercaseString';

import 'bootstrap/dist/css/bootstrap.min.css';

function SingleReviewPage() {
  
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(()=> {
    getReviewByIdFromServer(review_id)
    .then((reviewFromServer) => {
      setReview(reviewFromServer);
    })
  }, [review_id]); 

  return (  
    <>
      <div className='flex-container' style={{flexDirection: "column"}}>
        <div className='OneReview'>
              <section>
              {/* Main review container */}
              <div className='reviewContainer' key={review._id} style={{flexDirection: "row"}}>
                {/* Main - Voting Item */}
                
                {/* Main - Text Item */}
                <div className="flex-constainer" style={{flexDirection: "column", flex:"60%"}}>                
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
                      <Link style={{textDecoration: 'none'}} to={`../reviews/genres/${review.genre}`}>
                        <div className='reviewCategory' >{review.genre}</div>
                      </Link>
                      <div></div>
                    </div>

                    <div className='fullReview' style={{marginTop:"10px", marginBottom:"10px"}}>{review.review_body}</div>

                  </div>

                  <div/>
                </div>

                {/* Main - Image Item */}
                <div id='reviewImage' style={{flex:"20%", alignItems: "center"}}>
                </div>
              </div>
              </section>
        </div>
      </div>
    </>
    )
}

export default SingleReviewPage