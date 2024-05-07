// Home.tsx
import React from "react";
import HeroSection from "./HeroSection";
import InfoPage from "./InfoPage";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <InfoPage />
    </div>
  );
};

export default Home;
