import React from 'react';

function HowItWorks() {
  const img_src = process.env.PUBLIC_URL + '/workflow.png'
  return (
    <div id="how-it-works" className="text-center py-10 bg-white text-black">
      <h2 className="text-2xl font-bold">How It Works</h2>
      <p className="mt-4">Just upload your photo, choose your favorite dress, and see how it looks on you!</p>
      <img src= {img_src} alt="App Screenshot" />
    </div>
  );
}

export default HowItWorks;
