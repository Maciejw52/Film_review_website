import React from 'react';
import { useEffect, useState } from 'react';
import { getGenresFromServer, deleteGenre } from "../../utils/api";
import { Link } from 'react-router-dom';


import Close from "@mui/icons-material/Close"
import "./Genres.css";

function AllGenres() {

  const [genreView, setGenreView] = useState([]);

  useEffect(() => {
    getGenresFromServer().then((genresObject) => {
      console.log(genresObject);
      setGenreView(genresObject)
    })
  }, []);


  // Will eventually show a Modal to confirm if user wants it deleted
  const handleDeleteButtonClicked = (genreId) => {
    const genreToDelete = { _id: genreId };
    
    deleteGenre(genreToDelete).then(() => {
      window.location.reload(true);
    })
  }

  return (
    <>
      <div className='flex-container' style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div className='AllGenresTitle'><p>All Genres</p></div>
        <div className='AllGenres'>
          {genreView.map((genre) => {
            return (
                <div key={genre._id}>
                  <div className='GenreItem'>
                    <div className='DeleteGenreButton' onClick={() => {handleDeleteButtonClicked(genre._id)}}><Close /></div>
                    
                    <Link style={{textDecoration: 'none', color: "white"}} to={`../reviews/${genre.genre}`}>
                      <div className="GenreText">{genre.genre}</div>  
                    </Link>
                  </div>
                </div>
            )
          })}
        </div> 
      </div>
    </>
  )
}

export default AllGenres