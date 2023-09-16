import React from 'react';
import './header.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Header = () => {
  return (
    <>
      <div className='bg_img'>
        <header>
          <Navbar />
        </header>
        <div className='RECENT_LAUNCH'>
          <p style={{ fontSize: "17px", color: "rgb(224,222,221)" }}>RECENT LAUNCH</p>
          <p>STARLINK MISSION</p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className='bg_img1'>
        <div className='RECENT_LAUNCH'>
          <p style={{ fontSize: "17px", color: "rgb(224,222,221)" }}>COMPLETED MISSION</p>
          <p>DRAGON AND CREW-6 </p>
          <p>RETURN TO EARTH</p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className='bg_img2'>
        <div className='RECENT_LAUNCH'>
          <p>STARSHIP FLIGHT TEST</p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Header