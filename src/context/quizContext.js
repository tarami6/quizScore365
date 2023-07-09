import { createContext, useReducer } from "react";
import question from "../data/question.json";

const initialState = {
  quizQuestions: question,
  currentQuestionIndex: 0,
  scores: [],
};

const QuizContext = createContext();

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVEFORWARD":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case "SET_SCORES":
      return {
        ...state,
        scores: [...state.scores, action.payload],
      };
    case "SET_RESET_INDEX":
      return {
        ...state,
        currentQuestionIndex: 0,
      };
    default:
      return state;
  }
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  
  return (
    <QuizContext.Provider value={[state, dispatch]}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider, quizReducer, initialState };
