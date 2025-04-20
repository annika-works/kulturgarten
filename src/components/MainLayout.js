import React from "react";
import Partner from "./Partner";
import StartHero from "./StartHero";
import Utopie from "./Utopie";
import Team from "./WerWirSind";

function MainLayout() {
  return (
    <div>
      <StartHero />
      <Utopie />
      <Team />
      <Partner/>
    </div>
  );
}

export default MainLayout;
