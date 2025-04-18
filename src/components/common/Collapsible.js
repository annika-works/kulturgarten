import React, {useState} from "react";
import './Collapsible.scss';
import {ArrowIcon} from "./ArrowIcon";

export default function Collapsible({ question, answer }) {
  const [open, setOpen] = useState(false);

  const toggleCollapsible = () => {
    setOpen(!open);
  }

  return (
      <>
        <h4 className={"collapsible"}>
          <button className={"collapsible__toggle"} data-expandable="collapsible__button" aria-expanded={open} onClick={toggleCollapsible}>
              {question}
              <ArrowIcon arrowClasses={open ? "collapsible__open" : ""} />
          </button>
        </h4>
          <div
              className={`collapsible__content ${open ? "collapsible__content--open" : ""}`}
              aria-hidden={!open}
          >
            <div id="section-name" className={!open ? 'collapsible__hide' : "collapsible__paragraph"}>{answer}</div>
          </div>
      </>
  );
}

