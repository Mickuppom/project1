import { useState } from "react";
import HomeScreen from "./screen/HomeScreen";

function App() {
  const [count, setCount,] = useState(0);

  const addCount = (type = "add") => {
    if (type === "add") {
      setCount(count + 1);
    }
    else {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <HomeScreen>3.</HomeScreen>
      <p>You did it {count} time(s)!</p>
      <button onClick={() => addCount("add")}>+1</button>
      <button onClick={() => addCount("minus")}>-1</button>
    </div>
  );
}

export default App;
