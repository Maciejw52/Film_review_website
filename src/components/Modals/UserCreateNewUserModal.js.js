import React from 'react';
import { UserContext } from '../../UserContext';
import { useContext, useRef, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { postNewUser } from '../../utils/api';
import ErrorAlerts from "../Alerts/ErrorAlerts";

function UserLogin({showCreateNewUser, setShowCreateNewUser}) {
  
  const { userLogin } = useContext(UserContext);

  // Inputs
  const usernameInputRef = useRef();
  const passwordInputRef1 = useRef();
  const passwordInputRef2 = useRef();
  const emailInputRef = useRef();

  const [showAlert, setShowAlert] = useState(false);
  const [errorCode, setErrorCode] = useState("");

  const handleLoginForm = (event) => {
    event.preventDefault();

    const newUser = {
      username: usernameInputRef.current.value,
      password: passwordInputRef1.current.value,
      passwordCheck: passwordInputRef2.current.value,
      email: emailInputRef.current.value
    }

    postNewUser(newUser).then((response) => {

      if (response.status === 200) {
        setShowCreateNewUser(false);
        userLogin(newUser.username);
        console.log(`user ${newUser.username} has been created.`);
      } else {
        setErrorCode(response.status);
        setShowAlert(true);
      }

    }).catch((error) => {
      console.log(error);
    });

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
                  <Form.Label>Username: </Form.Label>
                  <Form.Control ref={usernameInputRef} type="text" name="username" id="username"required />
                </div>
                <div className="input-container">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control ref={emailInputRef} type="email" name="email" id="email" required />
                </div>
                <div className="input-container">
                  <Form.Label>Password: </Form.Label>
                  <Form.Control ref={passwordInputRef1} type="password" name="password" id="password" required />
                </div>
                <div className="input-container">
                  <Form.Label>Re-Type Password: </Form.Label>
                  <Form.Control ref={passwordInputRef2} type="password" name="password" id="password" required />
                </div>
              </div>
            </Modal.Body>
            {showAlert ? <ErrorAlerts errorCode={errorCode} reason={"Username"}  /> : null }
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