import React from 'react';

const ScoresTable = ({scores}) => {
    return (
        <div>
        {scores.map((score, index) => (
          // Key index should be unique with score id in the future
          <p style={{ border: "1px solid grey" }}>
            # {score}
          </p>
        ))}
      </div>
    );
};

export default ScoresTable;