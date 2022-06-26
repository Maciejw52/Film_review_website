import React from 'react'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

function AddGenre() {
  return (
    <div>
      <div>
        <label>Add Genre</label>
        <input type="text" name="name"></input>
        <Button type="button" class="btn btn-success" >Submit</Button>
      </div>
    </div>

  )
}

export default AddGenre

