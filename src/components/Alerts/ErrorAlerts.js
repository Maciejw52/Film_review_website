import React from 'react';
import { Alert } from "react-bootstrap";

function ErrorAlerts({ errorCode, reason }) {
  
  if (errorCode === 404) {
    return (
      <Alert variant="danger">
        {reason} doesn't exist. Please try again.
      </Alert>
    )
  }

  if (errorCode === 409) {
    return (
      <Alert variant="danger">
        {reason} already exists. Please try again.
      </Alert>
    )
  }

  if (errorCode === 401) {
    return (
      <Alert variant="danger">
        Incorrect password provided. Please try again.
      </Alert>
    )
  }

  if (errorCode === 418) {
    return (
      <Alert variant="danger">
        Passwords don't match.
      </Alert>
    )
  }

  return(false)
}

export default ErrorAlerts