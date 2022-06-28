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
      <section className="MainBody">
          <div>
            <h2>Welcome to Film Reviewz</h2>
            <p>The only place to create/delete/view the latest and greatest film reviews</p>
            <p>This website is powered by React connected to a Node/Express backend server with a MongoDb database storing Genres, Reviews and Users</p>
          </div>
      </section>

      <div>{user.name === "" ? <UserLoginModal /> : null}</div>
    </>
  )
}

export default Homepage
