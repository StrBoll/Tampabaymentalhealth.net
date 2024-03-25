import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Bottom from './bottom.js';
import ImageOverlay from './ImageOverlay.jsx';
import SearchableList from './list.js';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import Bookapt from './bookapt.jsx';
import Navbar from './navbar.js';
import man from './images/man.jpg';
import { Carousel } from "./Carousel";

// Define your components...

function App() {
  const position = {lat: 61.2176, lng: -149.8997};
  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Kiwi',
    'Lemon',
    'Mango',
  ];

  return (
    <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/bookapt" element={<Bookapt />} />
          <Route path="/" element={
            <React.Fragment>
              <div>
                <Carousel />
              </div>
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=13OSFSfuM3OZS3KLvxp50F2IhOqrkMv0&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
              <div className="content">
                <div className="image-container">
                  <div className="image-wrapper">
                    <img src={image1} alt="Image 1" />
                  </div>
                  <div className="image-wrapper">
                    <img src={image2} alt="Image 2" />
                  </div>
                  <div className="image-wrapper">
                    <img src={image3} alt="Image 3" />
                  </div>
                </div>
                <div>
                  <ImageOverlay imageUrl={man} text="Expert care" />
                  <h1>Searchable List</h1>
                  <SearchableList items={items} />
                </div>
              </div>
              <Bottom />
            </React.Fragment>
          } />
        </Routes>
    </Router>
    </div>
  );
}

export default App;