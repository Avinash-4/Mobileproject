import React, { useState } from "react";
import "./App.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Bolg";
import Content from "./components/Content/Content";
import Login from "./components/Login/Login";

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  let tabContent;
  switch (selectedTab) {
    case 0:
      tabContent = <Home />;
      break;
    case 1:
      tabContent = <Services />;
      break;
    case 2:
      tabContent = <About />;
      break;
    case 3:
      tabContent = <Content />;
      break;
    case 4:
      tabContent = <Blog />;
      break;
    case 5:
      tabContent = <Login />;
      break;
    default:
      tabContent = <Home />;
  }
  return (
    <div>
      <TitleBar onTabChange={handleTabChange} />
      {tabContent}
    </div>
  );
}

export default App;
