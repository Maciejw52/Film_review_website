import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function UserLogin({show, setShow}) {
  
  const { user, userLogin } = useContext(UserContext);


  const handleSubmit = (event) => {
    event.preventDefault();

    let uname = document.forms.item(0)[0].value
    userLogin(uname);
  
    const loginForm = document.querySelectorAll('#username, #password');
    loginForm.forEach(input => {
      input.value = '';
      
  });
  };

  const handleClose = () => {
    userLogin("Anon")
    setShow(false);
  };

  return (
    <>
      <div style={{textAlign: "center"}}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Login</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit} className='flex-container' style={{ flexDirection: "column" }}> 
            <Modal.Body>
              <div className="form">
                <div className="input-container">
                  <label>Username </label>
                  <input type="text" name="username" id="username" required />
                </div>
                <br/>
                <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="password" id="password" required />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" className="btn btn-success LoginButton">Login</Button>
              <Button className="btn btn-danger LoginButton" onClick={handleClose}>Continue as Anon</Button>
            </Modal.Footer>
          </form>

        </Modal>
      </div>
    </>

  )
}

export default UserLogin