import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CollectionsShowcase from './components/CollectionsShowcase';
import TryOnFeatureDetails from './components/TryOnFeatureDetails';
import ContactUs from './components/ContactUs';
import UserGallery from './components/UserGallery'; // Assume you've implemented this based on previous instructions
import Footer from './components/Footer'; // Assume you've implemented this based on previous instructions

function App() {
  return (
    <div className="hero-background">
      <Header className="fixed w-full bg-black z-10 ..." />
      <main className="pt-70 ...">
        <HeroSection />
  
    <div className="rest-of-the-page">
      <HowItWorks />
      <CollectionsShowcase />
      <TryOnFeatureDetails />
      <UserGallery />
      <ContactUs />
      <Footer />
    </div>
    </main>
     </div>
   
  
  );
}

export default App;
