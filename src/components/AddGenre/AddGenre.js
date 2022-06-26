import React from 'react'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { postGenre } from '../../utils/api';
import UppercaseString from "../../utils/UppercaseString";

function AddGenre() {
  
  
  const HandleSendGenre = (NewGenre) => {
    
    const sendGenre = UppercaseString(NewGenre.toLowerCase())

    const genreToSend = {
      genre: sendGenre
    };

    postGenre(genreToSend).then(() => {
      window.location.reload(true);
    })
  }

  return (
    <section>
      <div className='flex-container' style={{flexDirection: "row", }}>
        <form
        onSubmit={(event) => {
          event.preventDefault();
          HandleSendGenre(event.target[0].value);
        }}
        >
          <div className='flex-container' style={{flexDirection: "column"}}>
            <textarea
              id='Genre'
              rows="2"
              type="text"
              placeholder='Write your Genre here :)'
              required
            ></textarea>
            <Button type="submit" class="btn btn-success">Submit</Button>
          </div>

          
        </form>
      </div>
    </section>
  )
}
export default AddGenre

