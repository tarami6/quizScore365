import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Quiz from "./pages/quiz/Quiz.js";
import Finish from "./pages/finish/Finish.js";
import {  QuizProvider } from "./context/quizContext.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/finish",
    element: <Finish />,
  },
]);

function App() {
  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  );
}

export default App;
