import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function UserLogin({show, setShow}) {
  
  const { userLogin } = useContext(UserContext);


  const handleSubmit = (event) => {
    event.preventDefault();

    let uname = document.forms.item(0)[0].value
    userLogin(uname);
    setShow(false);
  
    const loginForm = document.querySelectorAll('#username, #password');
    loginForm.forEach(input => {
      input.value = '';
      
  });
  };

  const handleClose = () => {
    userLogin("Anon");
    setShow(false);
  };

  return (
    <>
      <div style={{textAlign: "center"}}>
        <Modal show={show} onHide={() => {setShow(false)}}>
          <Modal.Header closeButton>
            <Modal.Title>Please Login</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit} className='flex-container' style={{ flexDirection: "column" }}> 
            <Modal.Body>
              <div className="form">
                <div className="input-container">
                  <Form.Label>Username </Form.Label>
                  <Form.Control type="text" name="username" id="username" required />
                </div>
                <br/>
                <div className="input-container">
                  <Form.Label>Password </Form.Label>
                  <Form.Control type="password" name="password" id="password" required />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" className="btn btn-success LoginButton">Login</Button>
              <Button className="btn btn-danger LoginButton" onClick={handleClose}>Continue as Anon</Button>
            </Modal.Footer>
          </Form>

        </Modal>
      </div>
    </>

  )
}

export default UserLogin