import React from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext';
import UserLoginModal from '../UserLogin/UserLoginModal';
import "./Homepage.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  const { user } = useContext(UserContext);

  useEffect(() => {

  })

  return (
    <>
      <div className="MainBody">
        <div className="flex-container">
          <div>
            <h2>Welcome to Film Reviewz</h2>
            <p>The only place to create/delete/view the latest and greatest film reviews</p>
          </div>

        </div>

        
      </div>

      <div>{user.name === "" ? <UserLoginModal /> : null}</div>
    </>
  )
}

export default Homepage
