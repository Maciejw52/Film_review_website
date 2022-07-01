import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext, useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { postNewUser } from '../../utils/api';
import bcrypt from 'bcryptjs'

function UserLogin({showCreateNewUser, setShowCreateNewUser}) {
  
  const { userLogin } = useContext(UserContext);
  const usernameInputRef = useRef();
  const passwordInputRef1 = useRef();
  const passwordInputRef2 = useRef();
  const emailInputRef = useRef();

  const handleLoginForm = (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const hashedPass = bcrypt.hashSync(passwordInputRef1.current.value);
    const email = emailInputRef.current.value;

    try {
      postNewUser({
        username: username,
        password: hashedPass,
        email: email
      })
      const loginForm = document.querySelectorAll('#username, #password, #email');
      loginForm.forEach(input => {
        input.value = '';});
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    userLogin("Anon");
    setShowCreateNewUser(false);
  };

  return (
    <>
      <div style={{textAlign: "center"}}>
        <Modal show={showCreateNewUser} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new Account</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleLoginForm} className='flex-container' style={{ flexDirection: "column" }}> 
            <Modal.Body>
              <div className="form">
                <div className="input-container">
                  <Form.Label>Username </Form.Label>
                  <Form.Control ref={usernameInputRef} type="text" name="username" id="username"required />
                </div>
                <br />
                <div className="input-container">
                  <Form.Label>Email </Form.Label>
                  <Form.Control ref={emailInputRef} type="email" name="email" id="email" required />
                </div>
                <br />
                <div className="input-container">
                  <Form.Label>Password </Form.Label>
                  <Form.Control ref={passwordInputRef1} type="password" name="password" id="password" required />
                </div>
                <br />
                <div className="input-container">
                  <Form.Label>Re-Type Password </Form.Label>
                  <Form.Control ref={passwordInputRef2} type="password" name="password" id="password" required />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" className="btn btn-primary LoginButton">Create Account</Button>
              <Button className="btn btn-danger LoginButton" onClick={handleClose}>Continue as Anon</Button>
            </Modal.Footer>
          </Form>

        </Modal>
      </div>
    </>

  )
}

export default UserLogin