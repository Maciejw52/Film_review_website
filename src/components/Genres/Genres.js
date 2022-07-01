import React from 'react';
import { useEffect, useState } from 'react';
import { getGenresFromServer, deleteGenre } from "../../utils/api";
import { Link } from 'react-router-dom';
import Close from "@mui/icons-material/Close"
import "./Genres.css";

function AllGenres() {

  const [viewAllGenres, setViewAllGenres] = useState([]);

  const handleDeleteButtonClicked = (genreId) => {
    
    deleteGenre({ _id: genreId }).then(() => {
      setViewAllGenres((prev) => {
        const newObj = prev.filter(item => item._id !== genreId)
        console.log(`Updating View To`, newObj);
        return (newObj)
      });
    }).catch(error => console.log(error));
  }

  useEffect(() => {
    getGenresFromServer().then((genresObject) => {
      console.log(`Got From Server`, genresObject);
      setViewAllGenres(genresObject);
    })
  }, []);

  return (
    <>
      <div className='flex-container' style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div className='Full' style={{ flexDirection: "column", textAlign: "center"}}>
          <h2>All Genres</h2>
        </div>
        <p style={{textAlign: "center"}}>On this page you can delete genres and also clicking on the genre title displays all the reviews for that genre</p>
        <div className='AllGenres'>
          {viewAllGenres.map((genre) => {
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