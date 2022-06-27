import React from 'react'
import { useEffect, useState } from 'react';
import { getGenresFromServer } from '../../utils/api';


function AddReview() {

  const [genreView, setGenreView] = useState([]);

  useEffect(() => {
    getGenresFromServer().then((genresObject) => {
      setGenreView(genresObject)
      console.log()
    })
  }, []);

  return (
    <>
      <form
      >
        <div>
          <label>Film Title</label>
          <input type="text" name="film_title"></input>
        </div>
        <br></br>
        <div>
          <label>Category</label>
          <select name="category">
            {genreView.map((genre) => { return (<option>{genre.genre}</option>) })}
          </select>
        </div>
        <br></br>
        <div>
          <label>Review Header</label>
          <input type="text" name="header"></input>
        </div>
        <br></br>
        <div>
          <label>Film Picture</label>
          <input type="file" name="picture"></input>
        </div>
        <br></br>
        <div>
          <label>Review Body</label>
          <textarea name="review_body"></textarea>
        </div>
        <br></br>
        <div>
          <label>Rating</label>
          <input type="number" name="votes" min="0" max="10" step="0.5"></input>
        </div>
      </form>

    </>
  )
}

export default AddReview