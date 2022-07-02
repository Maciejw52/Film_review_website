import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { postGenre } from '../../utils/api';
import UppercaseString from "../../utils/UppercaseString";
import "./AddGenre.css";

import { Form } from 'react-bootstrap';
import ErrorAlerts from '../Alerts/ErrorAlerts';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddGenre() {

  const [showAlert, setShowAlert] = useState(false);
  const [errorCode, setErrorCode] = useState("");

  const HandleSendGenre = (NewGenre) => {
    postGenre({ genre: UppercaseString(NewGenre.toLowerCase()) })
      .then((response) => {

      if (response.status !== 200 ) {
        setErrorCode(response.status);
        setShowAlert(true);
      }
      })
  }

  return (
    <>
      <div className='flex-container' style={{justifyContent: "center"}}>
        <div className='flex-container' style={{ flexDirection: "column", textAlign: "center", width:"50%"}}>
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
            {showAlert ? <ErrorAlerts errorCode={errorCode} reason={"Genre"} /> : null }
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button type="reset" className="btn btn-primary btn-block" style={{width: "75.55px"}}>Clear</Button>
              <Button type="submit" className="btn btn-success btn-block">Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    </>

  )
}
export default AddGenre

