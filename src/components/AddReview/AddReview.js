import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { getGenresFromServer, postReview } from '../../utils/api';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../UserContext';

function AddReview() {

  const [genreView, setGenreView] = useState([]);
  const { user } = useContext(UserContext)

  useEffect(() => {
    getGenresFromServer().then((genresObject) => {
      setGenreView(genresObject)
      console.log()
    })
  }, []);


    const handleSubmitReview = (event) => {
      event.preventDefault();

      const reviewObject = {
        film_title: document.forms.item(0)[0].value,
        header: document.forms.item(0)[2].value,
        owner: user.name,
        review_body: document.forms.item(0)[4].value,
        review_img_name: "None",
        genre: document.forms.item(0)[1].value,
        rating: document.forms.item(0)[5].value
      }
      
      postReview(reviewObject)

        const loginForm = document.querySelectorAll('#film_title, #genre, #header, #picture, #review_body, #number');
        loginForm.forEach(input => {input.value = ''});
  };

  return (
    <section>
      <div className='Full' style={{flexDirection: "column", alignItems: "center"}}>
        <h2>Add your film review</h2>
        <div>
          <div  >
            <form
              onSubmit={handleSubmitReview}
              className='flex-container'
              style={{flexDirection: "column"}}
            >
            <div>
          <label>Film Title</label>
          <input type="text" name="film_title" id="film_title" required></input>
        </div>
        <br></br>
        <div>
          <label>Genre</label>
                <select
                  name="genre"
                  required
                  id="genre"
                >
                  <option></option>
                  {genreView.map((genre, key) => { return (<option key={key}>{genre.genre}</option>) })}
          </select>
        </div>
        <br></br>
        <div>
          <label>Review Header</label>
          <input type="text" name="header" id="header" required></input>
        </div>
        <br></br>
        <div>
          <label>Film Picture</label>
          <input type="file" name="picture" id="picture"></input>
        </div>
        <br></br>
        <div>
          <label>Review Body</label>
          <textarea name="review_body" id="review_body" required></textarea>
        </div>
        <br></br>
        <div>
          <label>Rating</label>
          <input type="number" name="votes" min="0" max="5" step="1" id="number" required></input>
        </div>
        <br/>
        <Button type="submit" className="btn btn-success LoginButton">Submit</Button>
           
            </form>
          </div>
        </div> 
      </div>

    </section>


  )
}

export default AddReview

