import React from 'react';
import ReactPlayer from 'react-player';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
    const img_src1 = process.env.PUBLIC_URL + '/features1.png'
    const img_src2 = process.env.PUBLIC_URL + '/features2.png'
    const img_src3 = process.env.PUBLIC_URL + '/features3.png'
    const img_src4 = process.env.PUBLIC_URL + '/features5.png'
    const video_src = process.env.PUBLIC_URL + '/haute-u-AR.mp4';
  return (
    <div id="Home" className="home-page" >
         <br />
            <br />
            <br />
            <br />
     <h1 style={{textAlign: "center"}}>Welcome to <i>Haute-u AR</i> technologies</h1>
      <main className="main-content">
        
        <section className="left-section">
           
         
          <h2>Experience Virtual Fashion Like Never Before</h2>
          <br />
            
          <p style = {{justifyContent:"center"}}>
            Haute-u AR revolutionizes online shopping by letting you virtually try on clothes from the comfort of your home.
             Our cutting-edge technology seamlessly overlays garments onto your body, allowing you to visualize styles, fits, 
             and colors with remarkable accuracy.
          </p>
          <br />
          <p>
          Discover your perfect outfit without stepping into a store.
            <b> <i>Haute-U-AR dress try-on app</i> </b> <li>A transformative and convenient shopping experience for users </li>
            <li> Enabling users to visualize how clothes will look on them without the need to physically try them on. </li>
            </p>
          <button className="try-on-button">Try On Now</button>
        </section>
 
        <section className="right-section">
          <h2>Explore the App in Action</h2>
          <div className="screenshot-container">
            {/* Replace with your actual screenshot images */}
            <img src={img_src1} alt="Screenshot 1" className="screenshot" />
            <img src={img_src2} alt="Screenshot 2" className="screenshot" />
            <img src={img_src3} alt="Screenshot 3" className="screenshot" />
            <img src={img_src4} alt="Screenshot 4" className="screenshot" />
            
          </div>
        </section>
        </main>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
          <div style={{ width: '75%', height: '60%', padding: '7px' }}>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={video_src}
                width='90%'
                height='60%'
                playing={true}
                muted={true}
                controls={true}
                loop={true}
              />
              </div>
              </div>
              </div>
    </div>
  );
};

export default HomePage;
