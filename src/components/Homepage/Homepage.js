import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../UserContext';
import UserLogin from '../UserLogin/UserLogin';

function Homepage() {
  const { user } = useContext(UserContext);

  const [curentUser, setCurrentUser] = useState(user.user)

  useEffect(() => {

  })

  return (
    <>
      <div>{curentUser}</div>
      <div>{user.name === "" ? <UserLogin /> : null}</div>
    </>
  )
}

export default Homepage
