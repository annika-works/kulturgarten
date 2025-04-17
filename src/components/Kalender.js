import React, { useState } from "react";
import { Title } from "./common/Title";
import { Text } from "../../contentful";

const Kalender = ({ data }) => {
  const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const [month, setMonth] = useState(months[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());
  const firstDayOfTheMonth = new Date(year, months.indexOf(month), 1).getDay();
  const daysInAMonth = new Date(year, months.indexOf(month) + 1, 0).getDate();
  const daysInAMonthArray = [...Array(daysInAMonth).keys()].map((i) => i + 1);
  const daysToAddOnFront = Array(firstDayOfTheMonth).fill("");
  daysInAMonthArray.unshift(daysToAddOnFront);

  const filterDataByEventType = (keyword) =>
    data
      .filter((date) => months[new Date(date.start).getMonth()] === month)
      .filter((date) => new Date(date.start).getFullYear() === year)
      .filter((date) => date[keyword])
      .map((date) => new Date(date.start).getDate());

  const gardendays = filterDataByEventType("gartentag");
  const cafedays = filterDataByEventType("cafe");
  const cinemadays = filterDataByEventType("cinema");


  // nodes
  const weekdaysNodes = weekdays.map((weekday, _) => (
    <td key={_} className="kalender__weekday">
      {weekday}
    </td>
  ));

  const tBodyNodes = [];
  const chunkSize = 7;
  for (let i = 0; i < daysInAMonthArray.flat().length; i += chunkSize) {
    const chunk = daysInAMonthArray.flat().slice(i, i + chunkSize);

    tBodyNodes.push(
      <tr key={Math.random()}>
        {chunk.map((chunkBit, _) => (
          <td key={Math.random() + _} className="kalender__tag">
            {gardendays.includes(chunkBit) && <span className="garten" alt="Gartentagtermin"></span>}
            {cafedays.includes(chunkBit) && <span className="cafe" alt="Cafetermin"></span>}
            {cinemadays.includes(chunkBit) && <span className="permakultur" alt="Kinotermin"></span>}
            {chunkBit}
          </td>
        ))}
      </tr>
    );
  }

  const [leftButtonStyle, setleftButtonStyle] = useState([
    "kalender__leftArrow",
  ]);
  const [rightButtonStyle, setrightButtonStyle] = useState(
    "kalender__rightArrow"
  );
  const handleOnLeftClick = (e) => {
    if (months.indexOf(month) === 0) return;
    if (months.indexOf(month) === 1) {
      setleftButtonStyle(["kalender__leftArrow disabled"]);
    } else {
      setleftButtonStyle(["kalender__leftArrow"]);
      setrightButtonStyle(["kalender__rightArrow"]);
    }
    setMonth(months[months.indexOf(month) - 1]);
  };
  const handleOnRightClick = (e) => {
    if (months.indexOf(month) === 11) return;
    if (months.indexOf(month) === 10) {
      setrightButtonStyle(["kalender__rightArrow disabled"]);
    } else {
      setrightButtonStyle(["kalender__rightArrow"]);
      setleftButtonStyle(["kalender__leftArrow"]);
    }
    setMonth(months[months.indexOf(month) + 1]);
  };

  return (
    <section className="wrapper utopie">
      <Title title="Kalender" className="blogPageTitle">
        Events
      </Title>

      <Text className="subtitle">
        Wir halten diesen Kalender so aktuell wie möglich, planen jedoch nicht
        alle Events am Anfang des Jahres, also schaut gerne öfters mal vorbei!
        Gartentage werden monatlich aktualisiert.
      </Text>

      <table className="kalender">
        <caption className="kalender__caption" aria-live="polite">
          {month} {year}
        </caption>
        <thead>
          <tr className="kalender__weekdays">{weekdaysNodes}</tr>
        </thead>
        <tbody>{tBodyNodes}</tbody>
      </table>
      <div className="kalender__legend">
        <Text className="kalender__legendItem">Gartentage</Text>
        <Text className="kalender__legendItem">Café</Text>
        <Text className="kalender__legendItem">Kino</Text>
      </div>
      {/*<p className="kalender__gartentageLegend">*/}
      {/*  Gartentage donnerstags von 11 - 17 Uhr, samstags von 13 - 17 Uhr*/}
      {/*</p>*/}
      <div className="kalender__controls">
        <button
          aria-label="Nächster Monat"
          className={leftButtonStyle}
          onClick={handleOnLeftClick}
        >
          <svg
            width="58"
            height="56"
            viewBox="0 0 58 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.0971 12.0333C36.7082 1.47955 19.4436 4.67559 14.8948 7.86111C10.5166 10.9272 2.26 17.4796 5.7796 31.7876C10.4086 50.6054 23.668 50.5089 35.9352 50.6053C51.2491 50.7257 57.7482 27.949 45.0971 12.0333Z"
              fill="#e1f500"
            />
            <path
              d="M25.9162 21.0113L34.0782 27.2752L25.9162 33.2543"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          aria-label="Voriger Monat"
          className={rightButtonStyle}
          onClick={handleOnRightClick}
        >
          <svg
            width="58"
            height="56"
            viewBox="0 0 58 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.0971 12.0333C36.7082 1.47955 19.4436 4.67559 14.8948 7.86111C10.5166 10.9272 2.26 17.4796 5.7796 31.7876C10.4086 50.6054 23.668 50.5089 35.9352 50.6053C51.2491 50.7257 57.7482 27.949 45.0971 12.0333Z"
              fill="#e1f500"
            />
            <path
              d="M25.9162 21.0113L34.0782 27.2752L25.9162 33.2543"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Kalender;
