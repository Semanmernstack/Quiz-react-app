import { useState } from "react";

function App() {
  const [game, setGame] = useState("menu")
  return (
    <div className="App">
      <p className="">Trences Quiz App</p>
      {game == "menu" && <Main/>}
    </div>
  );
}

export default App;
