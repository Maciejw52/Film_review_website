import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import Header from './components/Header/Header';
import NavigationSidebar from './components/Navigation/Navigation';
import Homepage from "./components/Homepage/Homepage";
import AddReview from './components/AddReview/AddReview';
import Reviews from './components/Reviews/Reviews';
import Genres from './components/Genres/Genres';
import AddGenre from './components/AddGenre/AddGenre';
import Account from './components/Account/Account';
import SingleReview from './components/SingleReview/SingleReview';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <NavigationSidebar />
          <div className='templatePage'>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/reviews" element={<Reviews />} />
              <Route path="/reviews/:review_id" element={<SingleReview />} />
              <Route exact path="/reviews/new" element={<AddReview />} />
              <Route exact path="/genres" element={<Genres />} />
              <Route exact path="/genres/new" element={<AddGenre />} />
              <Route exact path="/account" element={<Account />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
