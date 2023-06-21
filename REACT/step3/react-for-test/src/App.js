import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("run all the time");

  /** useEffect는 최초 Render 시 한번만 작동할 수 있도록 처리 */
  useEffect(() => {
    console.log("run only once");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>clicke</button>
    </div>
  );
}

export default App;
