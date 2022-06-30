import React from 'react'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { postGenre } from '../../utils/api';
import UppercaseString from "../../utils/UppercaseString";
import "./AddGenre.css";

import { Form } from 'react-bootstrap';

function AddGenre() {

  const HandleSendGenre = (NewGenre) => {
    postGenre({genre: UppercaseString(NewGenre.toLowerCase())})
  }

  return (
    <section>
      <div className='Full' style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div className='AddGenreTitle'>Add Genre</div>
        <div className='AddGenreField'>
          <div className='flex-container' style={{ flexDirection: "row" }}>
            
            <Form
              onSubmit={(event) => {
              event.preventDefault();
                HandleSendGenre(event.target[0].value);
                event.target[0].value = "";
            }}>
              <Form.Group className="mb-3" controlId="Genre">
                <Form.Control type="text" placeholder="Enter Genre To Add" required />
              </Form.Group>
              <Button type="submit" className="btn btn-success">Submit</Button>
            </Form>
  
          </div>
        </div> 
      </div>

    </section>
  )
}
export default AddGenre

