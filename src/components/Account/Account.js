import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Account() {
  
  const { user, userLogout } = useContext(UserContext);

  return (
    <div className='flex-container' style={{flexDirection: "column"}}>
      <div style={{ display: "flex" }}>Current User is {user.name}</div>
      <Button className="btn btn-danger LogoutButton" onClick={() => {userLogout()}}>Logout</Button>
    </div>
  )
}

export default Account