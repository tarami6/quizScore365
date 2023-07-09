import React from "react";

const Answers = ({ optionList, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {optionList.map((option, index) => (
        //key should be unique with option id in the future
        <div key={index} onClick={() => onClick(option)}>
          <p >
            {option}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Answers;
