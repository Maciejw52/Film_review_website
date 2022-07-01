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
    <>
      <div className='flex-container' style={{ flexDirection: "column", textAlign: "center"}}>
        <Form
          style={{display: "flex", flexDirection: "column"}}
          onSubmit={(event) => {
          event.preventDefault();
            HandleSendGenre(event.target[0].value);
            event.target[0].value = "";
          }}
        >
        <Form.Group className="mb-3" controlId="Genre">
          <Form.Label><h2>Add Genre</h2></Form.Label>
            <Form.Control type="text" placeholder="Enter Genre Here" required />
          </Form.Group>
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <Button type="submit" className="btn btn-success btn-block">Submit</Button>
            <Button type="reset" className="btn btn-primary btn-block" style={{width: "75.55px"}}>Clear</Button>
          </div>
        </Form>
    </div>
    </>

  )
}
export default AddGenre

