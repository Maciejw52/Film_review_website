import './App.css';
import React from "react";
import Header from './components/Header/Header';
import NavigationSidebar from './components/Navigation/Navigation';
import Homepage from "./components/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <NavigationSidebar />
        <div className='templatePage'>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            
            {/*<Route exact path="/reviews" element={<ReviewPage/>} />
            <Route path="/reviews/:review_id" element={<SingleReviewPage/>} />
            <Route path="/reviews/category/:category" element={<ReviewPage/>} />*/}
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
