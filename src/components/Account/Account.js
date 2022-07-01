import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Account.css";
import UserLoginModal from '../Modals/UserLoginModal';
import UserCreateNewUserModal from "../Modals/UserCreateNewUserModal.js";

function Account() {
  
  const { user, userLogout } = useContext(UserContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showCreateNewUser, setShowCreateNewUser] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true)
  }

  const handleShowCreateNewUser = () => {
    setShowCreateNewUser(true)
  }

  return (
    <section>
      <div className='flex-container' style={{justifyContent: "space-between"}}>
        <div className='flex-container' style={{flex: "60%", flexDirection: "column", justifyContent: "center", fontSize:"max(20px, 2vw)"}}>
          <div>{ user.name !== "" ? `Current User is ${user.name}` : `Please Login or Create new Account`}</div>
        </div>
        <div>
          <div className='flex-container' style={{ display: "flex" }}>
            <Button className="btn btn-success LoginButton" onClick={handleShowLogin}>Login</Button>
            <Button className="btn btn-danger LogoutButton" onClick={() => { userLogout() }}>Logout</Button>
          </div>
          <Button
            className="btn btn-primary CreateNewUserButton"
            onClick={handleShowCreateNewUser}
            style={{alignItems: "center"}}
          >Create Account</Button>
        </div>
      </div>

      <div>{showLogin ? <UserLoginModal setShowLogin={setShowLogin} showLogin={showLogin} /> : null}</div>
      <div>{showCreateNewUser ? <UserCreateNewUserModal showCreateNewUser={showCreateNewUser} setShowCreateNewUser={setShowCreateNewUser} /> : null}</div>
    </section>

  )
}

export default Account