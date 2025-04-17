import "./Events.scss"
import React from "react";

const FilterSection = ({ dateFilterClasses, dateFilter, handleDateReset, type, typeFilterClasses, handleTypeReset }) => {

  return (
      <div className="filters">
              <span className={dateFilterClasses}>
                  {dateFilter}
                  <button onClick={handleDateReset}>X</button>
              </span>

          <span className={typeFilterClasses}>
                  {type}
              <button onClick={handleTypeReset}>X</button>
              </span>
      </div>
  )
};

export default FilterSection;
