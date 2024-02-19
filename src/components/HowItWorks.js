import React from 'react';

function HowItWorks() {
  const img_src = process.env.PUBLIC_URL + '/workflow.png'
  return (
    <div id="how-it-works" className="text-center py-10 bg-white text-black " style={{marginTop:"100px"}}>
      <h1 className="text-2xl font-bold" style={{textAlign: 'center'}}>How It Works</h1>
      <p className="mt-4" style={{fontSize: '1.375rem', textAlign: 'left'}}>Just upload your photo, choose your favorite dress, and see how it looks on you!</p>
      <img src= {img_src} alt="App Screenshot"  style={{ maxWidth: '80%' , height: '120%', alignContent: 'center', alignItems: 'center'}}  />
    </div>
  );
}

export default HowItWorks;  
