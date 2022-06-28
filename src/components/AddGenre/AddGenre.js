import React from 'react'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { postGenre } from '../../utils/api';
import UppercaseString from "../../utils/UppercaseString";
import "./AddGenre.css";

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
      <div className='Full' style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div className='AddGenreTitle'>
          Add Genre
        </div>
        <div className='AddGenreField'>
          <div className='flex-container' style={{flexDirection: "row"}}>
            <form
            onSubmit={(event) => {
            event.preventDefault();
            HandleSendGenre(event.target[0].value);
            }}
            >
              <div className='flex-container GenreInputAndButton'>
                <textarea
                  id='Genre'
                  rows="1"
                  cols="30"
                  type="text"
                  placeholder='Write your Genre here :)'
                  required
                  style={{resize: "none"}}
                ></textarea>
                <br/>
                <Button type="submit" className="btn btn-success">Submit</Button>
              </div>            
            </form>
          </div>
        </div> 
      </div>

    </section>
  )
}
export default AddGenre

