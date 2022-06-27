import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Account() {
  const { user } = useContext(UserContext);
  const { userLogout } = useContext(UserContext);

  const handleUserLogout = () => {
    //Will later show a model confimring logout
    userLogout();
  }

  return (
    <>
      <form className='flex-constainer'>
        <div>Welcome {user.name}</div>
        <div className='LogButtons'>
          <Button type="submit" className="btn btn-success LoginButton">Login</Button>
          <Button className="btn btn-danger LogoutButton" onClick={handleUserLogout}>Logout</Button>
        </div>
      </form>

    </>
  )
}

export default Account