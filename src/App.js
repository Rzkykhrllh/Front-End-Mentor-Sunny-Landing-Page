import React from 'react'
import LandingPage from "./pages/LandingPage.jsx";
import './App.css';
import Showcase  from 'parts/showcase/Showcase.jsx';
import Testimoni from 'parts/testimonial/Testimoni.jsx';
import Gallery from 'parts/gallery/Gallery.jsx';
import Footer from 'parts/footer/Footer.jsx';

function App() {
  return (
    <div>
      <LandingPage/>
      <Showcase/>
      <Testimoni/>
      <Gallery/>
      <Footer/> 
    </div>
  );
}

export default App;
