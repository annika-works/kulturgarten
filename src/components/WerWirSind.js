import React from "react";
import { Text } from "../../contentful";
import { Title } from "./common/Title";
import WhoImage from "../assets/images/polaroid_team.jpg";

const WerWirSind = () => {
  return (
    <section className="wrapper utopie" id="werWirSind">
      <Title title="Wer Wir sind">
        Die Bude voller <span>Leute</span>.
      </Title>
      <div className="contentWer">
        <div style={{margin: '0 0 4rem 0'}}>
          <img src={WhoImage} alt="gloves" style={{width: '600px'}} />
        </div>
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
