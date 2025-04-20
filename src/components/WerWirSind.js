import React from "react";
import { Title } from "./common/Title";
import Spiral from "../assets/svgs/spirelli.svg";
import './WerWirSind.scss';
import {Image} from "../../contentful";
import TeamOne from "../assets/images/team_1.png";
import TeamTwo from "../assets/images/team_2.jpg";

const Team = () => {
  return (
    <section className="team wrapper" id="werWirSind">
        <div className={"team__title-container"}>
          <Title title="Wer Wir sind">
            Die Bude voller Leute.
          </Title>
            <Image src={Spiral} className="team__icon" alt={""}></Image>

        </div>
        <div className="team__content-section">
            <div className="team__copy">
                <p>Wir sind ein bunter Haufen aus Freunden, Freundesfreunden und Pinnebergern mit vielen Talenten, die
                    in der Gemeinschaft die Zukunft sehen für alternative Lebensformen.</p>
                <p>Wir wollen ausprobieren und den Garten für Kulturprojekte zur Verfügung stellen.</p>
            </div>
            <div className="team__image-container">
                <div className="team__portrait">
                    <Image src={TeamTwo}></Image>
                </div>
                <div className="team__square">
                    <Image src={TeamOne}></Image>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Team;
