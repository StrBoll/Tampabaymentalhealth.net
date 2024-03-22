import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './footer.js';
import Bottom from './bottom.js';
import ImageOverlay from './ImageOverlay.jsx';
import SearchableList from './list.js';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import Map from './Map.js';

import man from './images/man.jpg';
import { Carousel } from "./Carousel";


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
      <Header />
      <div>
      <Carousel />
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112755.61971074769!2d-82.54321495001173!3d27.975132475837118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1711135298514!5m2!1sen!2sus" 
      width="600"
       height="450" 
       style={{ border:"0"}} 
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
       </iframe>
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

    </div>
    
  );
  
}

export default App;


//AIzaSyAxcMCt9Sjb3OY6K4brgVEimno6XryEOuA