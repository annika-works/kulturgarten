import React from "react";
import Partner from "./Partner";
import StartHero from "./StartHero";
import Utopie from "./Utopie";
import WerWirSind from "./WerWirSind";
import Banners from "./Banners";

function MainLayout() {
  return (
    <div>
      <StartHero />
      <Banners />
      <Utopie />
      <WerWirSind />
      <Partner/>
    </div>
  );
}

export default MainLayout;
