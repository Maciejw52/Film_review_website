import React from 'react'
import { useEffect, useState } from 'react'
import {
  getGenresFromServer
} from "../../utils/api"

function AllGenres() {

  const [genreView, setGenreView] = useState([]);

  useEffect(() => {
    getGenresFromServer().then((genresObject) => {
      console.log(genresObject);
      setGenreView(genresObject)
    })
  }, []);

  return (
    <>
      <div>All Genres</div>
      <div className='AllGenres'>
        {genreView.map((genre) => {
          return (
            <div className='OneGenre'>{genre.genre}</div>
          )
        })}
      </div> 
    </>
  )
}

export default AllGenres