import React from "react";

export const Title = ({title, children}) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <h2>
        {children}
      </h2>
    </div>
  );
};
