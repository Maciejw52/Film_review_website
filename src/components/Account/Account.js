import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Account.css";
import UserLoginModal from '../UserLogin/UserLoginModal';

function Account() {
  
  const { user, userLogout, userLogin } = useContext(UserContext);



  return (
    <section>
      <div className='flex-container' style={{flexDirection: "row"}}>
        <div className='flex-container' style={{flexDirection: "column"}}>
          <div>Current User is {user.name}</div>
        </div>
          <Button className="btn btn-success LoginButton" onClick={() => { return(<UserLoginModal/>) }}>Login</Button>
          <Button className="btn btn-danger LogoutButton" onClick={() => {userLogout()}}>Logout</Button>
      </div>

           <div>{user.name === "" ? <UserLoginModal /> : null}</div>
    </section>

  )
}

export default Account