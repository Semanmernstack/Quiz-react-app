import { useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import End from "./components/End"
import { QuizContext } from "./Game/Context";
function App() {
  const [game, setGame] = useState("menuu")
  return (
    <div className="App">
      <p className="">Trences Quiz App</p>
      <QuizContext.Provider value={{game, setGame}}  >
        {game === "menuu" && <Menu/>}
        {game === "quiz" && <Quiz/>}
        {game === "End" && <End/>}

      </QuizContext.Provider>
     
    </div>
  );
}

export default App;
