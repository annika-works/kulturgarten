import React from "react";
import { useUtopie } from "../hooks/use-utopie";
import { Title } from "./common/Title";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Line from "../assets/svgs/line_01.svg";
import LineTwo from "../assets/svgs/line_02.svg";
import LineThree from "../assets/svgs/line_03.svg";
import LineFour from "../assets/svgs/line_04.svg";

const Projects = ({ children }) => <div className="projects">{children}</div>;

const lines = [Line, LineTwo, LineThree, LineFour];

const Utopie = () => {
  const utopieData = useUtopie();
  return (
    <section className="wrapper utopie" id="utopie">
      <Title title="Unsere Utopie">
        Den Kopf voller <span>Ideen</span>.
      </Title>
      <Projects>
        {utopieData.projectEntries.map((entry, i) => (
          <div key={i} className="projectEntry">
            <h3>{entry.title}</h3>
            <img alt="subline" aria-hidden="true" src={lines[Math.floor(Math.random() * lines.length)]} style={{transform: 'translateY(-25px)'}}/>
            {renderRichText(entry.description)}
          </div>
        ))}
      </Projects>
    </section>
  );
};

export default Utopie;
