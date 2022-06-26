import React from 'react'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { postGenre } from '../../utils/api';

function AddGenre() {
  
  
  const HandleSendGenre = (NewGenre) => {
    
    console.log(NewGenre)
    const genreToSend = {
      genre: NewGenre
    };

    postGenre(genreToSend).then(() => {
      window.location.reload(true);
    })
  }

  return (
    <div>
      <div>
        <form
        onSubmit={(event) => {
          event.preventDefault();
          HandleSendGenre(event.target[0].value);
        }}
        >
          <label>Add Genre</label>
          <textarea
            id='Genre'
            rows="1"
            cols="30"
            type="text"
            placeholder='Write your Genre here :)'
            required
          ></textarea>
          <Button type="submit" class="btn btn-success">Submit</Button>
        </form>
      </div>
    </div>
  )
}
export default AddGenre

