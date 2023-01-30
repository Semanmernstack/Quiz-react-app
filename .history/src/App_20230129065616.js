import { useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import End from "./components/End"
import { QuizContext } from "./Game/Context";
function App() {
  const [game, setGame] = useState("menu")
  return (
    <div className="text-center items-center justify-center flex  flex-col  max-w-6xl mx-auto h-screen  bg-pink-300 first-letter:">
      <p className="text-2xl">Trences Quiz App</p>
      <QuizContext.Provider value={{game, setGame}}>
        {game === "menu" && <Menu/>}
        {game === "quiz" && <Quiz/>}
        {game === "End" && <End/>}

      </QuizContext.Provider>
     
    </div>
  );
}

export default App;
