import React from "react";

export const Title = ({title, children, className}) => {
  return (
    <div className={className ? `title ${className}` : 'title'}>
      <h2>
        {children}
      </h2>
    </div>
  );
};
