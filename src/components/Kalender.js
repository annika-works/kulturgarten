import React from "react";

const Kalender = ({data}) => {
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
    
      const daysInAMonthInteger = new Date(2023, 6, 0).getDate();
      // note: make dynamic to be current month at later step
      const monthOfJune = months[new Date(2023, 5, 1).getMonth()];
      const firstDayOfTheMonth = new Date(2023, 5, 1).getDay();
      const daysInAMonthArray = [...Array(daysInAMonthInteger).keys()].map((i) => i + 1);
      const daysToAddOnFront = Array(firstDayOfTheMonth).fill("");
      daysInAMonthArray.unshift(daysToAddOnFront);

      return (
        
      );



};


  export default Kalender;