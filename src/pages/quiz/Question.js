import React from "react";

const Question = ({ questionText }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>{questionText}</h3>
    </div>
  );
};

export default Question;
