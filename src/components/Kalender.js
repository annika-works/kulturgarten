import React, { useEffect, useState } from "react";
import { Title } from "./common/Title";
import Arrow from "../assets/svgs/spritesheet";

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
  const firstDayOfTheMonth = new Date(2023, months.indexOf(month), 1).getDay();
  const daysInAMonth = new Date(2023, months.indexOf(month) + 1, 0).getDate();
  const daysInAMonthArray = [...Array(daysInAMonth).keys()].map((i) => i + 1);
  const daysToAddOnFront = Array(firstDayOfTheMonth).fill("");
  daysInAMonthArray.unshift(daysToAddOnFront);

  const filterDataForEvent = (keyword) =>
    data
      .filter((date) => months[new Date(date.start).getMonth()] === month)
      .filter((date) => date[keyword])
      .map((date) => new Date(date.start).getDate());

  const gardendays = filterDataForEvent("gartentag");
  const cinemadays = filterDataForEvent("cinema");
  const cafedays = filterDataForEvent("cafe");

  const addCalendarClasses = (chunkBit) => {
    if (gardendays.includes(chunkBit)) {
      return "kalender__tag garten";
    } else if (cinemadays.includes(chunkBit)) {
      return "kalender__tag cinema";
    } else if (cafedays.includes(chunkBit)) {
      return "kalender__tag cafe";
    }
    return "kalender__tag";
  };

  // Nodes
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
          <td key={Math.random() + _} className={addCalendarClasses(chunkBit)}>
            {chunkBit}
          </td>
        ))}
      </tr>
    );
  }

  const handleOnLeftClick = (e) => {
    if (months.indexOf(month) === 0) return;
    setMonth(months[months.indexOf(month) - 1]);
  };
  const handleOnRightClick = (e) => {
    if (months.indexOf(month) === 11) return;
    setMonth(months[months.indexOf(month) + 1]);
  };

  return (
    <section className="wrapper utopie">
      <Title className="blogPageTitle">Veranstaltungen</Title>

      <table className="kalender">
        <caption className="kalender__caption">{month}</caption>
        <thead>
          <tr className="kalender__weekdays">{weekdaysNodes}</tr>
        </thead>
        <tbody>{tBodyNodes}</tbody>
      </table>
      <div className="kalender__legend">
        <p className="kalender__legendItem">Gartentage</p>
        <p className="kalender__legendItem">Freiluftkino</p>
        <p className="kalender__legendItem">Café</p>
      </div>
      <div className="kalender__controls">
        <button className="kalender__leftArrow" onClick={handleOnLeftClick}>
          <Arrow />
        </button>
        <button className="kalender_rightArrow" onClick={handleOnRightClick}>
          <Arrow />
        </button>
      </div>
    </section>
  );
};

export default Kalender;