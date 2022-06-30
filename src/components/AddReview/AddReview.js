import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { getGenresFromServer, postReview } from '../../utils/api';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../UserContext';
import { Slider } from '@mui/material';


import 'bootstrap/dist/css/bootstrap.min.css';

function AddReview() {

  const [genreView, setGenreView] = useState([]);
  const { user } = useContext(UserContext)

  useEffect(() => {
    getGenresFromServer().then((genresObject) => {
      setGenreView(genresObject)
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

          <div>
            <Form
              onSubmit={handleSubmitReview}
              className='flex-container'
              style={{flexDirection: "column"}}
            >

              <Form.Group className="mb-3" controlId="film_title">
                <Form.Label>Film Title</Form.Label>
                <Form.Control type="text" name="film_title"  placeholder="Film" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="genre">
                <Form.Label>Genre</Form.Label>
                <Form.Select aria-label="Default select example" name="genre" required>
                  <option></option>
                  {genreView.map((genre, key) => { return (<option key={key}>{genre.genre}</option>) })}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="header">
                <Form.Label>Header</Form.Label>
                <Form.Control type="text" name="header"  placeholder="Summary" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="picture">
                <Form.Label>Upload film poster</Form.Label>
                <Form.Control type="file" accept="image/png, image/gif, image/jpeg"/>
              </Form.Group>
 
              <Form.Group className="mb-3" controlId="review_body">
                <Form.Label>Review</Form.Label>
                <Form.Control
                  type="text"
                  name="review_body"
                  placeholder="Write Your Review Here :)"
                  required
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Slider
                aria-label="Temperature"
                defaultValue={0}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
                id="number"
                required
                />
              </Form.Group>

              <Button type="submit" className="btn btn-success LoginButton">Submit</Button>
            </Form>
          </div>
        </div> 
      </div>

    </section>


  )
}

export default AddReview

