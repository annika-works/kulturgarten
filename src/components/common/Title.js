import React from "react";

export const Title = ({title, children, className}) => {
  return (
    <div className={className ? `title ${className}` : 'title'}>
      <span className="h1">{title}</span>
      <h2>
        {children}
      </h2>
    </div>
  );
};
