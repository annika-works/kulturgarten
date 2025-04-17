import "./Events.scss"
import React, {useState} from "react";
import {ArrowIcon} from "../common/ArrowIcon";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import {blogEntryContentStyling} from "../../../contentful";

const Event = ({ weekday, formattedDate, formattedTime, event, startDay, startTime, endDay, endTime}) => {

    const [expanded, setExpanded] = useState(false);

    const toggleDescription = () => {
        setExpanded(!expanded);
    }



  return (
      <article className="veranstaltungen__list-item">
          <div className="veranstaltungen__list-item-container">
              <span className="veranstaltungen__marginals">{weekday}</span>
              {formattedDate()}
          </div>
          <div className="veranstaltungen__list-item-container middle">
              <div className="veranstaltungen__list-item-copy">
                <span className="veranstaltungen__marginals">{event.eventTag}</span>
                <h3 className={`veranstaltungen__title-main`}>{event.title}</h3>
                <span className="veranstaltungen__marginals">{event.short_description}</span>
                <div id="veranstaltungen_summary" className={`veranstaltungen__summary ${expanded ? " expanded" : ""}`}>{renderRichText(event.summary, blogEntryContentStyling)}</div>
              </div>
              <button aria-expanded={expanded} aria-controls="veranstaltungen_summary" className={"veranstaltungen__list-item-button"} onClick={toggleDescription}>
                  <ArrowIcon arrowClasses={`veranstaltungen__arrow-down ${expanded ? " expanded" : ""}`}></ArrowIcon>
              </button>
          </div>
          <div className="veranstaltungen__list-item-container">
              <span className="veranstaltungen__time-wrapper veranstaltungen__marginals">
                <span className="veranstaltungen__time-icon">{'\u25f4'}</span>
                  {formattedTime(startDay, startTime, endDay, endTime)}
              </span>
          </div>
      </article>
  )
};

export default Event;
