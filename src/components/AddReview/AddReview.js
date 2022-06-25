import React from 'react'

function AddReview() {
  
  
  return (
    <div>
      <div>
        <label>Film Title</label>
        <input type="text" name="film_title"></input>
      </div>

      <div>
        <label>Category</label>
        <select name="category">
        </select>
      </div>

      <div>
        <label>Review Header</label>
        <input type="text" name="header"></input>
      </div>

      <div>
        <label>Film Picture</label>
        <input type="file" name="picture"></input>
      </div>

      <div>
        <label>Review Body</label>
        <textarea name="review_body"></textarea>
      </div>

      <div>
        <label>Rating</label>
        <input type="number" name="votes" min="0" max="10" step="0.5"></input>
      </div>
    </div>
  )
}

export default AddReview