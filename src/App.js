import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

    const addCount = () => {
      setCount(count+1);
    }
  return (
    <div>
      <p>You did it {count} time(s)!</p>
      <button onClick={addCount}>+1</button>
    </div>
  );
}

export default App;
