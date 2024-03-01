import React from 'react';
import Header from './components/Header';
//import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
//import CollectionsShowcase from './components/CollectionsShowcase';
import TryOnFeatureDetails from './components/TryOnFeatureDetails';
import ContactUs from './components/ContactUs';
import UserGallery from './components/UserGallery'; // Assume you've implemented this based on previous instructions
import Footer from './components/Footer'; // Assume you've implemented this based on previous instructions
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Apptryon from './components/App_tryon';
import MovingParticles from './components/MovingParticles';

function App() {
  return (
    <div className="rest-of-the-page">
      <Header className="fixed w-full bg-black z-10 ..." />
      <MovingParticles />
      <Features />
      <HowItWorks />
      <TryOnFeatureDetails />
      <Testimonials />
      <UserGallery />
      <ContactUs />
      <Footer />
      <Apptryon />
      
    </div>
   );
}

export default App;
