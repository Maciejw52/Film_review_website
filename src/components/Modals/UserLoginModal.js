import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext, useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { postAuthenticateUser } from '../../utils/api';
import bcrypt from 'bcryptjs'

function UserLogin({showLogin, setShowLogin}) {
  
  const { userLogin } = useContext(UserContext);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const handleLoginForm = (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value
    const hashedPass = bcrypt.hashSync(passwordInputRef.current.value);

    try {
      postAuthenticateUser({
        username: username,
        password: hashedPass
      })
      const loginForm = document.querySelectorAll('#username, #password');
      loginForm.forEach(input => {
        input.value = '';
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    userLogin("Anon");
    setShowLogin(false);
  };

  return (
    <>
      <div style={{textAlign: "center"}}>
        <Modal show={showLogin} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Login</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleLoginForm} className='flex-container' style={{ flexDirection: "column" }}> 
            <Modal.Body>
              <div className="form">
                <div className="input-container">
                  <Form.Control ref={usernameInputRef} type="text" name="username" id="username" placeholder='Username' required />
                </div>
                <br/>
                <div className="input-container">
                  <Form.Control ref={passwordInputRef} type="password" name="password" id="password" placeholder='Password' required />
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