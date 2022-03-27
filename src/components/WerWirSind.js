import React from "react";
import { Text } from "../../contentful";
import { Title } from "./common/Title";
import WhoImage from "../assets/images/polaroid_team.jpg";
import Spiral from "../assets/svgs/spiral_02.svg";

const WerWirSind = () => {
  return (
    <section className="wrapper utopie" id="werWirSind">
      <Title title="Wer Wir sind">
        Die Bude voller <span>Leute</span>.
      </Title>
      <div className="contentSection">
        <figure>
          <img src={Spiral} alt="decoration" className="secondSpiral" />
          <img src={WhoImage} alt="the team" style={{ width: "600px" }} />
        </figure>
        <Text>
          Wir sind ein bunter Haufen aus Freunden und Freundesfreunden mit
          vielen Talenten, die in der Gemeinschaft die Zukunft sehen für
          alternative Lebensformen. Wir wollen ausprobieren und den Garten für
          Kulturprojekte zur Verfügung stellen.
        </Text>
      </div>
    </section>
  );
};

export default WerWirSind;
