import React, { useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/common/Button";
import { QuizContext } from "../../context/quizContext";
import ScoresTable from "./ScoresTable";

const Finish = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(QuizContext);
  
  const goQuiz = () => {
    dispatch({ type: "SET_RESET_INDEX" });
    navigate("/quiz");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Scores</h1>
      <ScoresTable scores={state.scores} />
      <Button title={"Play Again"} onClick={goQuiz} />
    </div>
  );
};

export default Finish;
