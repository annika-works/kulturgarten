import React, {useEffect, useRef, useState} from "react";
import { Title } from "./common/Title";
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const Events = ({ data }) => {
    const filteredData = [];
    const [type, setType] = useState('Alle');
    const [eventList, setEventList] = useState(filteredData);
    const [selectedDates, setSelectedDates] = useState(null);
    const eventSet = new Set();
    const currentDate = new Date();
    const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const datePickerRef = useRef(null);
    const currentYear = new Date().getFullYear();
    const pushEventIfCurrent = (date) => {
        //removeAllPastDates
        if(new Date(date.start) >= currentDate) {
            filteredData.push(date);
        }
    }

    data.forEach(event => {
        if (event.eventTag != null) {
            eventSet.add(event.eventTag);
            pushEventIfCurrent(event);
        }
    });

    // sort events by latest
    filteredData.sort((a, b) => new Date(a.start) - new Date(b.start));

    const types = Array.from(eventSet);

    const formatDate = (num) => {
        return num < 10 ? '0' + num : num;
    }

    const formatDateString = (date) => new Date(date).setHours(0,0,0,0);

    function getInbetweenTimestamps(startTimestamp, endTimestamp) {
        const timestamps = [];
        for (let timestamp = startTimestamp; timestamp <= endTimestamp; timestamp += 86400000) {
            timestamps.push(timestamp);
        }
        return timestamps;
    }

    const filterEvents = () => {
        let filteredEvents = [...filteredData];
        if(type !== 'Alle') {
            filteredEvents = filteredEvents.filter(event => event.eventTag === type);
        }


        if (selectedDates != null && selectedDates.length > 0) {
            let dates = [];
            let timestamps = [...new Set(selectedDates.map(date => formatDateString(date)))];

            if(timestamps.length > 1) {
                timestamps = getInbetweenTimestamps(timestamps[0], timestamps[1]);
            }

            timestamps.forEach(date => {
                const maybeMatchingEvent = filteredEvents.filter(event => formatDateString(event.start) === date);
                maybeMatchingEvent.length!== 0 && maybeMatchingEvent[0] !== false && dates.push(maybeMatchingEvent[0]);
            })
            return setEventList(dates);
        }
       return setEventList(filteredEvents);

    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }
    const createFlatpickrInstance = () => {
        flatpickr(datePickerRef.current, {
            dateFormat: "d.m.Y",
            mode: "range",
            minDate: `01.01.${currentYear}`,
            maxDate: `31.12.${currentYear + 1}`,
            onClose: function(selectedDates, dateStr, instance) {
                setSelectedDates(selectedDates);
            }
        });
    };

    useEffect(() => {
        createFlatpickrInstance();
    }, []);

    useEffect(() => {
        filterEvents(); // Apply filters when type or selectedDates change
    }, [type, selectedDates]);


    const openFlatpickr = () => {
        const instance = datePickerRef.current._flatpickr;
        if (instance) {
            instance.open();
        }
    };

    const handleReset = () => {
        setSelectedDates(null);
        filterEvents();
        datePickerRef.current._flatpickr.clear();
    }

  return (
      <section className="wrapper utopie veranstaltungen">
        <Title title="Projekte" className="blogPageTitle">
          Veranstaltungen
        </Title>
          <div className="veranstaltungen__selectors">
              <div className="veranstaltungen__calendar">
                  <button onClick={handleReset}>Remove Date Selection</button>
                  <input
                      ref={datePickerRef}
                      type="text"
                      placeholder="Datum"
                      onClick={openFlatpickr}
                      readOnly
                  />
              </div>
              <select name="Genres" id="genres" defaultValue="DEFAULT" aria-label="Wähle eine Kategorie"
                      onChange={handleTypeChange}>
                  <option value="DEFAULT" disabled hidden>Kategorie</option>
              <option value="Alle">Alle Kategorien</option>
              {types.map(type =>
                <option key={type} value={type}>{type}</option>
              )}
          </select>
          </div>

          <ol className={"veranstaltungen__list"}>
              {eventList.map(event => {
                  const weekday = weekdays[new Date(event.start).getDay()];
                  const startDate = new Date(event.start);
                  const endDate = new Date(event.end);
                  const startDay = formatDate(startDate.getDate());
                  const startTime = `${formatDate(startDate.getHours())}:${formatDate(startDate.getMinutes())}`;
                  const endTime = `${formatDate(endDate.getHours())}:${formatDate(endDate.getMinutes())}`;
                  const endDay = formatDate(endDate.getDate());
                  const month = formatDate(startDate.getMonth() + 1);
                   const formattedDate = () => {
                      if(startDay !== endDay) {
                          return (
                              <p className={"veranstaltungen__day"}>
                               {`${startDay}.${month}. -`}
                               {` ${endDay}.${month}.`}
                              </p>
                          )
                      }
                      return (<p className={"veranstaltungen__day"}>{`${startDay}.${month}.`}</p>);
                   }

                   const formattedTime = () => {
                       if(startDay === endDay) {
                           return `${startTime} - ${endTime}`
                       }
                       return startTime;
                   }
               return (
                   <li key={`${startDay}-${Math.random()}`} className="veranstaltungen__list-item-wrapper">
                       <article className="veranstaltungen__list-item">
                           <div className="veranstaltungen__date">
                               <span>{weekday}</span>
                               {formattedDate()}
                           </div>
                           <div className="veranstaltungen__title">
                               <span>{event.eventTag}</span>
                                <p className="veranstaltungen__title-main">{event.eventTag}</p>
                               <span className="veranstaltungen__subtitle">Mit Live Musik von Marc Otto Paul</span>
                           </div>
                           <div className="veranstaltungen__time">
                               <span className="veranstaltungen__time-wrapper">
                                   <span className="veranstaltungen__time-icon">{'\u25f4'}</span>
                                   {formattedTime()}
                               </span>
                           </div>
                       </article>
                   </li>
               )
                  }
              )}

          </ol>

      </section>
  );
};

export default Events;
