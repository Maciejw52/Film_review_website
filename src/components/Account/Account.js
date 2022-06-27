import React from 'react'
import { UserContext } from '../../UserContext';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Account() {
  
  const { user, userLogin, userLogout } = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState(user.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    let uname = document.forms.item(0)[0].value;
    userLogin(uname)
    setCurrentUser(uname)
  };


  return (
    <div>
      <div>Welcome {currentUser}</div>
      <br/>
      <div className="form">
        <form
          onSubmit={handleSubmit}
          className='flex-container'
          style={{ flexDirection: "column" }}
        >
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="username" id="username" required />
          </div>
          <br/>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" required />
          </div>
          <br/>
          <Button type="submit" className="btn btn-success LoginButton">Login</Button>
        </form>

        </div>
      <Button className="btn btn-danger LogoutButton" onClick={() => {userLogout()}}>Logout</Button>
    </div>
  )
}

export default Account