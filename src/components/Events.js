import React, {useEffect, useRef, useState} from "react";
import { Title } from "./common/Title";
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const Events = ({ data }) => {
    const filteredData = [];
    const [type, setType] = useState('Alle');
    const [eventList, setEventList] = useState(filteredData);
    const [selectedDates, setSelectedDates] = useState(null);
    const [dateFilter, setDateFilter] = useState(null);
    const [dateFilterClasses, setDateFilterClasses] = useState('filter hidden');
    const [typeFilterClasses, setTypeFilterClasses] = useState('filter hidden');
    const eventSet = new Set();
    const currentDate = new Date();
    const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const datePickerRef = useRef(null);
    const currentYear = new Date().getFullYear();

    data.forEach(event => {
        if (event.eventTag != null && new Date(event.start) >= currentDate) {
            eventSet.add(event.eventTag);
            filteredData.push(event);
        }
    });

    // sort events by latest
    filteredData.sort((a, b) => new Date(a.start) - new Date(b.start));

    const types = Array.from(eventSet);

    // adds 0 if a date is single digit
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
        e.target.value === 'Alle' ?
            setTypeFilterClasses('filter hidden') :
            setTypeFilterClasses('filter');
    }
    const createFlatpickrInstance = () => {
        flatpickr(datePickerRef.current, {
            dateFormat: "d.m.Y",
            mode: "range",
            minDate: `01.01.${currentYear}`,
            maxDate: `31.12.${currentYear + 1}`,
            onClose: function(selectedDates, dateStr, instance) {
                let timestamps = [...new Set(selectedDates.map(date => formatDateString(date)))];
                if(timestamps.length === 1) {
                    const date = new Date(timestamps[0]);
                    const formattedDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
                    setDateFilter(formattedDate);
                    setDateFilterClasses('filter');
                }
                if(timestamps.length > 1) {
                    const startDate = new Date(timestamps[0]);
                    const endDate = new Date(timestamps[1]);
                    const formattedDate = `${startDate.getDate()}.${startDate.getMonth()+1}.${startDate.getFullYear()} - ${endDate.getDate()}.${endDate.getMonth()+1}.${endDate.getFullYear()}`
                    setDateFilter(formattedDate);
                    setDateFilterClasses('filter');
                }
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

    const handleDateReset = () => {
        setSelectedDates(null);
        setDateFilterClasses('filter hidden');
        filterEvents();
        datePickerRef.current._flatpickr.clear();
    }

    const handleTypeReset = () => {
        setType('Alle');
        setTypeFilterClasses('filter hidden');
        filterEvents();
    }

  return (
      <section className="wrapper utopie veranstaltungen">
        <Title title="Projekte" className="blogPageTitle">
          Veranstaltungen
        </Title>
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
              <select name="Genres" id="genres" value={type} aria-label="Wähle eine Kategorie"
                      onChange={handleTypeChange}>
                  <option value="DEFAULT" disabled hidden>Kategorie</option>
              <option value="Alle">Alle Kategorien</option>
              {types.map(type =>
                <option key={type} value={type}>{type}</option>
              )}
          </select>
          </div>

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

          <ol className={"veranstaltungen__list"}>
              {eventList.length === 0 && <p className={'noEvents'}>Keine Termine zu den ausgewählten Filtern</p>}
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
