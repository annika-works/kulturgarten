import React from "react";
import { Title } from "./common/Title";
import './Utopie.scss';
import UtopiaTwo from "../assets/images/utopia_2.jpg"
import UtopiaThree from "../assets/images/utopia_3.png"
import UtopiaFour from "../assets/images/utopia_4.jpg"
import {Image} from "../../contentful";

const Utopie = () => {
  return (
    <section className="wrapper utopia" id="utopie">
      <Title>
        Den Kopf voller Ideen.
      </Title>
        <div className="utopia__copy">
            <p>Auf 1 Hektar verwildertem Land entsteht ein bunter Garten für alle – ein Ort zum Gärtnern, Lernen und Begegnen. Wir bringen Stadt- und Landmenschen aus Pinneberg und Umgebung zusammen, teilen Wissen, arbeiten gemeinsam</p>
            <p> und feiern das Miteinander. Bei offenen Gartentagen, Open-Air-Kino und Café-Nachmittagen wächst hier nicht nur Gemüse, sondern auch Gemeinschaft.</p>
        </div>
        <div className={"utopia__image-grid-container"}>
            <div className="utopia__image-grid">
                <Image className="utopia__wide1" src={UtopiaFour}></Image>
                <Image className="utopia__tall" src={UtopiaTwo}></Image>
                <Image className="utopia__wide2" src={UtopiaThree}></Image>
            </div>
        </div>
    </section>
  );
};

export default Utopie;
