import React from "react";
import { useNavigate } from "react-router";
import Question from "./Question";
import Answers from "./Answers";
import { useContext } from "react";
import { QuizContext } from "../../context/quizContext";

const Quiz = () => {
  const [state, dispatch] = useContext(QuizContext);
  const navigate = useNavigate();
  const currentQuestion =
    state.quizQuestions[state.currentQuestionIndex].question;
  const currentOptions =
    state.quizQuestions[state.currentQuestionIndex].options;
  const currentAnswer =
    state.quizQuestions[state.currentQuestionIndex].correctAnswer;

  const setAnswer = () => {
    dispatch({ type: "SET_MOVEFORWARD" });
    checkIfFinished();
  };

  const checkIfFinished = () => {
    const quiestionLength = state.quizQuestions.length;
    
    if (state.currentQuestionIndex === quiestionLength - 1) {
      dispatch({ type: "SET_SCORES", payload: quiestionLength * 10 });
      navigate("/finish");
    }
  };

  const selectAnswer = (option) => {
    if (option === currentAnswer) {
      setAnswer();
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Quiz</h1>
      <Question questionText={currentQuestion} />
      <Answers optionList={currentOptions} onClick={selectAnswer} />
    </div>
  );
};

export default Quiz;
