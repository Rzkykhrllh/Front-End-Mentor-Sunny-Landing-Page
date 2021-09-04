import React from 'react'
import LandingPage from "./pages/LandingPage.jsx";
import './App.css';
import Showcase  from 'parts/showcase/Showcase.jsx';
import Testimoni from 'parts/testimonial/Testimoni.jsx';
import Gallery from 'parts/gallery/Gallery.jsx';

function App() {
  return (
    <div>
      <LandingPage/>
      <Showcase/>
      <Testimoni/>
      <Gallery/>
    </div>
  );
}

export default App;
