import { useState } from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete/AutoComplete";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Vite Project
      <AutoComplete />
    </div>
  );
}

export default App;
