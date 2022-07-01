import React from 'react';
import { Alert } from "react-bootstrap";

function ErrorAlerts({ errorCode }) {
  
  if (errorCode === 401) {
    return (
      <Alert variant="danger">
        Username doesn't exist. Please try again.
      </Alert>
    )
  }

  if (errorCode === 409) {
    return (
      <Alert variant="danger">
        Username already exist. Please try a different one.
      </Alert>
    )
  }
  return(false)
}

export default ErrorAlerts