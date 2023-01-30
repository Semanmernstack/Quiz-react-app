import { useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz"
function App() {
  const [game, setGame] = useState("menu")
  return (
    <div className="App">
      <p className="">Trences Quiz App</p>
      {game == "menu" && <Menu/>}
      {game == "quiz" && <Quiz/>}
    </div>
  );
}

export default App;
