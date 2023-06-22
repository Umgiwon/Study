import { useState, useEffect } from "react";

function App_v1() {
  /** state */
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  /** event */
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("run all the time");

  /** useEffect는 최초 Render 시 한번만 작동할 수 있도록 처리 */
  useEffect(() => {
    console.log("run only once");
  }, []);
  useEffect(() => {
      console.log("run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
      console.log("run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
      console.log("run when 'counter || keyword' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>clicke</button>
    </div>
  );
}

export default App_v1;
