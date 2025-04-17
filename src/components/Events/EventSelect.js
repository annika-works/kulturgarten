import "./Events.scss"
import React from "react";
import 'flatpickr/dist/flatpickr.min.css';

const EventSelect = ({ datePickerRef, openFlatpickr, types, type, handleTypeChange }) => {

  return (
      <div className="veranstaltungen__selectors">
          <div className="veranstaltungen__calendar">
              <input
                  ref={datePickerRef}
                  type="text"
                  placeholder="Datum"
                  onClick={openFlatpickr}
                  readOnly
              />
          </div>
          <select
              name="Genres"
              id="genres"
              value={type}
              aria-label="Wähle eine Kategorie"
              onChange={handleTypeChange}
          >
              <option value="DEFAULT" disabled hidden>Kategorie</option>
              <option value="Alle">Alle Kategorien</option>
              {types.map(type =>
                  <option key={type} value={type}>{type}</option>
              )}
          </select>
      </div>
  )
};

export default EventSelect;
