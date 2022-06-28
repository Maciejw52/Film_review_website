import React from 'react'
import { useEffect, useState } from 'react';
import { getGenresFromServer } from '../../utils/api';
import { Button } from 'react-bootstrap';


function AddReview() {

  const [genreView, setGenreView] = useState([]);

  useEffect(() => {
    getGenresFromServer().then((genresObject) => {
      setGenreView(genresObject)
      console.log()
    })
  }, []);


    const handleSubmitReview = (event) => {
    event.preventDefault();

    let uname = document.forms.item(0)[0].value
  
    const loginForm = document.querySelectorAll('#username, #password');
    loginForm.forEach(input => {
      input.value = '';
      
  });
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
          <input type="text" name="film_title" required></input>
        </div>
        <br></br>
        <div>
          <label>Category</label>
                <select
                  name="category"
                  required
                >
                  <option></option>
            {genreView.map((genre) => { return (<option>{genre.genre}</option>) })}
          </select>
        </div>
        <br></br>
        <div>
          <label>Review Header</label>
          <input type="text" name="header" required></input>
        </div>
        <br></br>
        <div>
          <label>Film Picture</label>
          <input type="file" name="picture"></input>
        </div>
        <br></br>
        <div>
          <label>Review Body</label>
          <textarea name="review_body" required></textarea>
        </div>
        <br></br>
        <div>
          <label>Rating</label>
          <input type="number" name="votes" min="0" max="5" step="1" required></input>
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

