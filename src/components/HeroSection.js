import React from 'react';
import ReactPlayer from 'react-player';

const HeroSection = () => {
  const img_src = process.env.PUBLIC_URL + '/app_bg.png'
  const video_src = process.env.PUBLIC_URL + '/haute-u-AR.mp4'
  return (
    <div id="heroSection" className="hero-background" >
      <br/>
      <br/>
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"> Welcome to Haute-U-AR</h1>
      <h1>See Yourself in Style Instantly with Haute-U-AR Virtual Dress Try-On</h1>
      <p>Discover your perfect outfit without stepping into a store.</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '70px' /* Adjust this value based on header height */ }}>
      <div style={{ width: '50%', padding: '10px' }}></div>
      <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={video_src}
        width='100%'
        height='100%'
        playing={true}
        muted={true}
        controls={true}
        loop={true}
      />
      <button>Start Your Virtual Try-On Now</button>
    </div>
    
    <div style={{ width: '50%', padding: '10px' }}>
    {/* Container for the app images */}
    <img src= {img_src} alt="App Screenshot" />
  </div>
</div>
</div>
   
  
  );
};

export default HeroSection;
