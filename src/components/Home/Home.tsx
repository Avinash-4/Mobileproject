// Home.tsx
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import InfoPage from "./InfoPage/InfoPage";
import Services from "./Services/Services";
import Specialities from "./Specialities/Specialities";
import BookAgent from "./BookAgent/BookAgent";
import AvailableFeatures from "./AvaliableFeatures/AvailableFeatures";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <InfoPage />
      <Services />
      <Specialities/>
      <BookAgent />
      <AvailableFeatures/>
    </div>
  );
};

export default Home;
